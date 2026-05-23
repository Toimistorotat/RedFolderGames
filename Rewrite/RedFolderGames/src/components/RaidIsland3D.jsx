import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const zonePositions = {
  extraction: new THREE.Vector3(4.0, 0.58, 0.62),
  weather: new THREE.Vector3(-3.65, 0.68, -1.85),
  bodies: new THREE.Vector3(-2.25, 0.72, 1.45),
  loot: new THREE.Vector3(1.5, 0.78, -1.58),
  reinforcements: new THREE.Vector3(-0.55, 0.84, 2.1),
  pressure: new THREE.Vector3(0.05, 0.86, -0.2),
  gadgets: new THREE.Vector3(2.3, 0.74, 1.32),
  loop: new THREE.Vector3(-1.05, 0.76, -1.35),
  movement: new THREE.Vector3(-3.25, 0.58, 0.55),
  social: new THREE.Vector3(-1.9, 0.64, 2.28),
  weapons: new THREE.Vector3(0.85, 0.84, -2.38),
  survival: new THREE.Vector3(3.25, 0.66, -0.15),
  lobby: new THREE.Vector3(-3.5, 0.54, 1.68),
  map: new THREE.Vector3(0.75, 0.92, 0.78),
  pillars: new THREE.Vector3(3.45, 0.58, 2.08)
};

const zoneColors = {
  extraction: 0xe2b75f,
  weather: 0x7fc7df,
  bodies: 0xd95f68,
  loot: 0xdba955,
  reinforcements: 0xdde7dc,
  pressure: 0xd85861,
  gadgets: 0x74cfc2,
  loop: 0xb9d46a,
  movement: 0x8fb7ff,
  social: 0xd7a7ff,
  weapons: 0xc9c0a4,
  survival: 0x9ed38c,
  lobby: 0xf0a96b,
  map: 0x81c98d,
  pillars: 0xffffff
};

function createMat(color, lowDetail, options = {}) {
  const { opacity, transparent, emissive, emissiveIntensity, side, ...rest } = options;
  const baseOptions = {
    color,
    opacity: opacity ?? 1,
    transparent: Boolean(transparent || opacity < 1)
  };

  if (side !== undefined) baseOptions.side = side;

  return lowDetail
    ? new THREE.MeshBasicMaterial({
        ...baseOptions
      })
    : new THREE.MeshStandardMaterial({
        ...baseOptions,
        flatShading: true,
        metalness: 0.02,
        roughness: 0.86,
        ...(emissive !== undefined ? { emissive } : {}),
        ...(emissiveIntensity !== undefined ? { emissiveIntensity } : {}),
        ...rest
      });
}

function createLabel(text, color = "#ffffff") {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 220;
  canvas.height = 72;

  context.fillStyle = color;
  context.font = "900 22px Segoe UI, Arial, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2 + 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.095, 0.032, 1);
  sprite.userData.disposeTexture = texture;
  return sprite;
}

function makeShape(points) {
  const shape = new THREE.Shape();
  points.forEach(([x, z], index) => {
    if (index === 0) shape.moveTo(x, -z);
    else shape.lineTo(x, -z);
  });
  shape.closePath();
  return shape;
}

function addTerrain(group, material, points, y, height, name = "") {
  const geometry = new THREE.ExtrudeGeometry(makeShape(points), {
    bevelEnabled: false,
    depth: height,
    steps: 1
  });
  geometry.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = y;
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function addFlatShape(group, material, points, y, name = "") {
  const geometry = new THREE.ShapeGeometry(makeShape(points));
  geometry.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = y;
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function addBox(group, material, position, scale, rotation = [0, 0, 0], name = "") {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.rotation.set(...rotation);
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function addCylinder(group, material, position, radius, height, sides = 10, rotation = [0, 0, 0], name = "") {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, sides), material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function addCone(group, material, position, radius, height, sides = 7, rotation = [0, 0, 0], name = "") {
  const mesh = new THREE.Mesh(new THREE.ConeGeometry(radius, height, sides), material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function getPathPoint(point, fallbackY) {
  return new THREE.Vector3(point[0], point[2] ?? fallbackY, point[1]);
}

function addPath(group, material, points, y, width, name = "", thickness = 0.025) {
  points.slice(0, -1).forEach((start, index) => {
    const end = points[index + 1];
    const startPoint = getPathPoint(start, y);
    const endPoint = getPathPoint(end, y);
    const direction = endPoint.clone().sub(startPoint);
    const length = direction.length();
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);

    mesh.position.copy(startPoint).add(endPoint).multiplyScalar(0.5);
    mesh.scale.set(length, thickness, width);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), direction.normalize());
    mesh.name = name;
    group.add(mesh);
  });
}

function addTree(group, materials, x, z, scale = 1) {
  addCylinder(group, materials.trunk, [x, 0.68, z], 0.035 * scale, 0.26 * scale, 5);
  addCone(group, materials.tree, [x, 0.9, z], 0.16 * scale, 0.38 * scale, 7);
}

function addRock(group, material, x, z, scale = 1) {
  const rock = addDodecahedron(group, material, [x, 0.62, z], 0.13 * scale, "rock");
  rock.scale.y = 0.62;
  rock.rotation.set(0.2, x, z);
  return rock;
}

function addDodecahedron(group, material, position, radius, name = "") {
  const mesh = new THREE.Mesh(new THREE.DodecahedronGeometry(radius, 0), material);
  mesh.position.set(...position);
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function addZoneObject(onClickObjects, object, zone) {
  object.userData.zone = zone;
  onClickObjects.push(object);
  return object;
}

function makeZoneMarker(zone, label, lowDetail, onClickObjects) {
  const marker = new THREE.Group();
  const color = zoneColors[zone];
  const pinMat = createMat(color, lowDetail, {
    emissive: color,
    emissiveIntensity: lowDetail ? 0 : 0.35
  });
  const ringMat = createMat(color, lowDetail, {
    opacity: 0.32,
    side: THREE.DoubleSide,
    transparent: true
  });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.18, 0.25, 28), ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.03;
  const pin = addCylinder(marker, pinMat, [0, 0.16, 0], 0.045, 0.18, 8);
  const sprite = createLabel(label, `#${color.toString(16).padStart(6, "0")}`);

  sprite.position.set(0, 0.32, 0);
  marker.add(ring, sprite);
  marker.userData.zone = zone;
  ring.userData.zone = zone;
  pin.userData.zone = zone;
  sprite.userData.zone = zone;
  onClickObjects.push(marker, ring, pin, sprite);
  marker.userData.activeRing = ring;
  return marker;
}

function addNpcToken(group, materials, onClickObjects, x, z, rotation = 0) {
  const token = new THREE.Group();
  const base = addCylinder(token, materials.danger, [0, 0.03, 0], 0.09, 0.055, 8);
  const chevron = addCone(token, materials.dangerLight, [0, 0.13, -0.02], 0.08, 0.16, 3, [Math.PI / 2, 0, 0]);
  token.position.set(x, 0.74, z);
  token.rotation.y = rotation;
  base.userData.zone = "pressure";
  chevron.userData.zone = "pressure";
  token.userData.zone = "pressure";
  group.add(token);
  onClickObjects.push(token, base, chevron);
  return token;
}

function buildSceneContent({ zones, lowDetail, onClickObjects }) {
  const root = new THREE.Group();
  const materials = {
    beach: createMat(0xc8b06d, lowDetail),
    darkBeach: createMat(0x8a7a55, lowDetail),
    land: createMat(0x426f43, lowDetail),
    landDark: createMat(0x2f5538, lowDetail),
    highland: createMat(0x687c4d, lowDetail),
    slope: createMat(0x253b2d, lowDetail),
    road: createMat(0x40382d, lowDetail),
    water: createMat(0x2f91a0, lowDetail, { opacity: 0.64, transparent: true }),
    flood: createMat(0x5ba6a1, lowDetail, { opacity: 0.38, transparent: true }),
    dark: createMat(0x071013, lowDetail),
    danger: createMat(0x9e4a51, lowDetail),
    dangerLight: createMat(0xd0696e, lowDetail),
    warning: createMat(0x9f8250, lowDetail),
    cyan: createMat(0x4f8f86, lowDetail),
    white: createMat(0xdde7dc, lowDetail),
    warehouse: createMat(0x5b4a38, lowDetail),
    roof: createMat(0x334944, lowDetail),
    storm: createMat(0x384a52, lowDetail, { opacity: 0.82, transparent: true }),
    stormDark: createMat(0x26353d, lowDetail, { opacity: 0.78, transparent: true }),
    trunk: createMat(0x5b4630, lowDetail),
    tree: createMat(0x31563a, lowDetail),
    rock: createMat(0x66716a, lowDetail)
  };

  const beachShape = [
    [-4.95, -1.02],
    [-4.35, -2.75],
    [-2.45, -3.8],
    [-0.15, -4.25],
    [2.0, -3.95],
    [4.3, -2.5],
    [4.95, -0.78],
    [4.65, 1.3],
    [3.35, 3.05],
    [1.15, 3.78],
    [-1.42, 3.6],
    [-3.85, 2.35],
    [-5.18, 0.45]
  ];
  const landShape = [
    [-4.25, -0.78],
    [-3.42, -2.22],
    [-1.8, -2.92],
    [0.12, -3.18],
    [1.95, -2.82],
    [3.75, -1.7],
    [4.1, -0.18],
    [3.58, 1.4],
    [2.45, 2.45],
    [0.85, 2.82],
    [-1.15, 2.65],
    [-2.85, 1.82],
    [-3.9, 0.5]
  ];
  const highlandShape = [
    [-2.05, -0.7],
    [-1.15, -1.72],
    [0.35, -1.98],
    [1.52, -1.28],
    [1.82, -0.12],
    [0.92, 0.82],
    [-0.52, 1.0],
    [-1.72, 0.45]
  ];
  const stormShape = [
    [-4.15, -0.42],
    [-3.52, -1.98],
    [-2.28, -2.48],
    [-1.08, -1.58],
    [-1.32, -0.48],
    [-2.72, 0.0]
  ];
  const lakeShape = [
    [1.55, -0.1],
    [2.15, -0.32],
    [2.82, 0.05],
    [2.75, 0.78],
    [2.05, 1.05],
    [1.32, 0.75],
    [1.08, 0.18]
  ];

  addTerrain(root, materials.slope, beachShape, -0.62, 0.32, "island side").userData.noShadow = true;
  addTerrain(root, materials.beach, beachShape, -0.24, 0.18, "beach shelf").userData.noShadow = true;
  addTerrain(root, materials.land, landShape, 0.02, 0.34, "main island");
  addTerrain(root, materials.highland, highlandShape, 0.32, 0.22, "raised middle");
  addFlatShape(root, materials.flood, stormShape, 0.57, "flooded weather lowland").userData.zone = "weather";
  addFlatShape(root, materials.water, lakeShape, 0.59, "inland lake");

  addPath(
    root,
    materials.road,
    [[-3.15, 1.15, 0.55], [-1.45, 0.55, 0.58], [0.25, 0.12, 0.68], [1.75, -0.58, 0.6], [3.42, -1.25, 0.53]],
    0.6,
    0.1,
    "main path"
  );
  addPath(root, materials.road, [[-0.2, 0.16, 0.68], [-0.45, 1.35, 0.62], [-0.55, 2.15, 0.56]], 0.6, 0.09, "radio path");
  addPath(root, materials.road, [[1.1, 0.35, 0.63], [2.1, 1.05, 0.58], [3.72, 0.75, 0.5]], 0.58, 0.09, "dock path");
  addPath(root, materials.road, [[0.35, -0.38, 0.68], [1.1, -1.2, 0.62], [1.65, -1.65, 0.58]], 0.62, 0.09, "loot path");

  [
    [-4.25, 0.15, 0.9],
    [-3.45, 1.72, 0.65],
    [-2.1, 2.18, 0.8],
    [-1.15, -2.35, 0.75],
    [0.38, 2.3, 0.7],
    [2.92, -2.05, 0.62],
    [3.0, 1.85, 0.7]
  ].forEach(([x, z, scale]) => addTree(root, materials, x, z, scale));

  [
    [-4.55, -0.5, 0.9],
    [-3.2, -2.55, 0.75],
    [0.6, -3.1, 0.72],
    [3.85, -0.75, 0.82],
    [2.75, 2.35, 0.68]
  ].forEach(([x, z, scale]) => addRock(root, materials.rock, x, z, scale));

  const dock = addBox(root, materials.road, [3.95, 0.62, 0.75], [1.08, 0.045, 0.13], [0, -0.18, 0], "wood dock");
  addZoneObject(onClickObjects, dock, "extraction");
  const boat = addBox(root, materials.white, [4.48, 0.62, 0.94], [0.36, 0.055, 0.13], [0, -0.2, 0], "boat");
  addZoneObject(onClickObjects, boat, "extraction");
  const helipad = addCylinder(root, materials.white, [2.82, 0.65, -1.98], 0.3, 0.02, 32, [0, 0, 0], "helipad");
  addZoneObject(onClickObjects, helipad, "extraction");
  addBox(root, materials.dark, [2.82, 0.68, -1.98], [0.46, 0.01, 0.055], [0, 0, 0], "helipad mark");
  addBox(root, materials.dark, [2.82, 0.68, -1.98], [0.055, 0.01, 0.46], [0, 0, 0], "helipad mark");
  addZoneObject(onClickObjects, addCylinder(root, materials.warning, [3.62, 0.64, 1.5], 0.18, 0.025, 10, [0, 0, 0], "vehicle exit"), "extraction");

  const warehouse = addZoneObject(
    onClickObjects,
    addBox(root, materials.warehouse, [1.48, 0.76, -1.62], [0.58, 0.24, 0.42], [0, 0.08, 0], "warehouse"),
    "loot"
  );
  const roof = addBox(root, materials.roof, [1.48, 0.94, -1.62], [0.68, 0.06, 0.5], [0, 0.08, 0], "warehouse roof");
  roof.userData.zone = "loot";
  onClickObjects.push(roof, warehouse);
  [[1.02, -1.13], [1.3, -1.04], [1.62, -1.08], [2.02, -1.34]].forEach(([x, z]) => {
    addZoneObject(onClickObjects, addBox(root, materials.warning, [x, 0.7, z], [0.1, 0.085, 0.1], [0, 0.1, 0], "loot crate"), "loot");
  });
  addZoneObject(onClickObjects, addBox(root, materials.warning, [2.2, 0.68, 0.12], [0.1, 0.16, 0.08], [0, 0.2, 0], "full backpack"), "loot");

  addZoneObject(onClickObjects, addCylinder(root, materials.danger, [-2.28, 0.68, 1.38], 0.22, 0.018, 32, [0, 0, 0], "body recovery marker"), "bodies");
  addZoneObject(onClickObjects, addBox(root, materials.dangerLight, [-2.28, 0.705, 1.38], [0.28, 0.012, 0.055], [0, 0.32, 0], "body ping"), "bodies");

  const radioBase = addZoneObject(onClickObjects, addBox(root, materials.dark, [-0.55, 0.7, 2.12], [0.16, 0.08, 0.16], [0, 0, 0], "radio base"), "reinforcements");
  const mastOne = addZoneObject(onClickObjects, addCylinder(root, materials.white, [-0.62, 1.06, 2.08], 0.024, 0.8, 4, [0.35, 0, 0.18], "radio mast"), "reinforcements");
  const mastTwo = addZoneObject(onClickObjects, addCylinder(root, materials.white, [-0.48, 1.06, 2.16], 0.024, 0.8, 4, [-0.35, 0, -0.18], "radio mast"), "reinforcements");
  onClickObjects.push(radioBase, mastOne, mastTwo);

  [[2.12, 1.2], [2.38, 1.34], [2.58, 1.12]].forEach(([x, z]) => {
    addZoneObject(onClickObjects, addBox(root, materials.cyan, [x, 0.68, z], [0.1, 0.085, 0.1], [0, 0.18, 0], "kit cache"), "gadgets");
  });
  addZoneObject(onClickObjects, addCylinder(root, materials.cyan, [2.62, 0.75, 1.48], 0.035, 0.22, 8, [0.2, 0, 0.3], "scanner antenna"), "gadgets");

  const storm = new THREE.Group();
  storm.userData.zone = "weather";
  for (let i = 0; i < (lowDetail ? 4 : 9); i += 1) {
    const material = i % 2 === 0 ? materials.storm : materials.stormDark;
    const cloud = addDodecahedron(
      storm,
      material,
      [-3.9 + (i % 5) * 0.35, 1.28 + Math.sin(i) * 0.08, -2.05 + Math.floor(i / 5) * 0.26],
      0.32 + (i % 3) * 0.05,
      "storm cloud"
    );
    cloud.scale.y = 0.55;
    cloud.userData.zone = "weather";
  }
  if (!lowDetail) {
    for (let i = 0; i < 24; i += 1) {
      const rain = addBox(
        storm,
        materials.water,
        [-4.35 + (i % 8) * 0.24, 0.98 - Math.floor(i / 8) * 0.08, -1.64 + Math.floor(i / 8) * 0.22],
        [0.015, 0.34, 0.015],
        [0.42, 0, 0.16],
        "rain streak"
      );
      rain.userData.zone = "weather";
    }
  }
  root.add(storm);
  onClickObjects.push(storm);

  const coneMat = createMat(0xd85861, lowDetail, { opacity: 0.18, side: THREE.DoubleSide, transparent: true });
  addNpcToken(root, materials, onClickObjects, 0.12, -0.36, -0.6);
  addNpcToken(root, materials, onClickObjects, -1.28, 0.66, 0.2);
  addNpcToken(root, materials, onClickObjects, 1.42, -0.62, -1.1);
  addPath(root, materials.danger, [[-1.45, 0.72, 0.66], [-0.6, 0.12, 0.68], [0.18, -0.38, 0.68], [1.35, -0.62, 0.62]], 0.68, 0.035, "patrol route", 0.018);
  addPath(root, materials.danger, [[-1.92, 1.12, 0.58], [-1.28, 0.66, 0.62], [-0.88, -0.08, 0.67]], 0.64, 0.035, "patrol route", 0.018);
  [
    [0.52, -0.46, -0.8],
    [-1.05, 0.9, 0.48],
    [1.74, -0.72, -0.9]
  ].forEach(([x, z, rotation]) => {
    const cone = new THREE.Mesh(new THREE.CircleGeometry(0.48, 3, 0, Math.PI * 2), coneMat);
    cone.position.set(x, 0.715, z);
    cone.rotation.set(-Math.PI / 2, 0, rotation);
    cone.scale.set(1.25, 0.72, 1);
    cone.userData.zone = "pressure";
    root.add(cone);
    onClickObjects.push(cone);
  });

  zones.forEach((zone) => {
    const marker = makeZoneMarker(zone.id, zone.mapLabel, lowDetail, onClickObjects);
    marker.position.copy(zonePositions[zone.id]);
    root.add(marker);
  });

  root.traverse((object) => {
    object.userData.baseScale = object.scale.clone();
    if (object.isMesh) {
      object.castShadow = !lowDetail && !object.userData.noShadow;
      object.receiveShadow = !lowDetail && !object.userData.noShadow;
    }
  });

  root.userData.storm = storm;
  return root;
}

function disposeObject(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((material) => material.dispose());
      } else {
        child.material.dispose();
      }
    }
    if (child.userData.disposeTexture) child.userData.disposeTexture.dispose();
  });
}

function RaidIsland3D({ zones, activeZone, onZoneChange, lowDetail, rotateSignal = 0 }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const onZoneChangeRef = useRef(onZoneChange);
  const activeZoneRef = useRef(activeZone);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    onZoneChangeRef.current = onZoneChange;
  }, [onZoneChange]);

  useEffect(() => {
    activeZoneRef.current = activeZone;
  }, [activeZone]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !lowDetail,
        premultipliedAlpha: false
      });
    } catch {
      window.setTimeout(() => setWebglFailed(true), 0);
      return undefined;
    }

    const scene = new THREE.Scene();
    scene.fog = lowDetail ? null : new THREE.Fog(0x06151a, 10, 19);

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    const islandPivot = new THREE.Group();
    const clickObjects = [];
    const startTime = performance.now();
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const drag = { active: false, startX: 0, startRotation: 0, moved: false };

    let animationId;
    let cameraRotation = Math.PI * 0.16;
    let targetRotation = cameraRotation;
    let resizeObserver;

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowDetail ? 1.15 : 1.8));
    renderer.shadowMap.enabled = !lowDetail;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.add(new THREE.HemisphereLight(0xcfe7df, 0x10251f, lowDetail ? 1.35 : 1.1));
    const sun = new THREE.DirectionalLight(0xfff2d1, lowDetail ? 1.1 : 2.1);
    sun.position.set(4, 7.5, 5.5);
    sun.castShadow = !lowDetail;
    if (!lowDetail) {
      sun.shadow.mapSize.set(1024, 1024);
      sun.shadow.camera.near = 1;
      sun.shadow.camera.far = 18;
      sun.shadow.camera.left = -7;
      sun.shadow.camera.right = 7;
      sun.shadow.camera.top = 7;
      sun.shadow.camera.bottom = -7;
      sun.shadow.bias = -0.0001;
      sun.shadow.normalBias = 0.035;
    }
    scene.add(sun);

    const rim = new THREE.DirectionalLight(0x6fc9c1, 0.7);
    rim.position.set(-5, 3, -4);
    scene.add(rim);

    const water = new THREE.Mesh(
      new THREE.CircleGeometry(11, lowDetail ? 48 : 112),
      new THREE.MeshBasicMaterial({ color: 0x0b5966, opacity: 0.42, transparent: true })
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.55;
    scene.add(water);

    const waterGlow = new THREE.Mesh(
      new THREE.RingGeometry(5.1, 7.7, lowDetail ? 48 : 96),
      new THREE.MeshBasicMaterial({ color: 0x63d2c9, opacity: 0.08, side: THREE.DoubleSide, transparent: true })
    );
    waterGlow.rotation.x = -Math.PI / 2;
    waterGlow.position.y = -0.48;
    scene.add(waterGlow);

    const island = buildSceneContent({ zones, lowDetail, onClickObjects: clickObjects });
    islandPivot.add(island);
    scene.add(islandPivot);

    const updateCamera = () => {
      const radius = 11.8;
      camera.position.set(Math.sin(cameraRotation) * radius, 9.15, Math.cos(cameraRotation) * radius);
      camera.lookAt(0, 0.28, 0);
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() ?? { width: 800, height: 600 };
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / Math.max(rect.height, 1);
      camera.updateProjectionMatrix();
      updateCamera();
    };

    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement);
    resize();

    const getPointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onPointerDown = (event) => {
      drag.active = true;
      drag.startX = event.clientX;
      drag.startRotation = targetRotation;
      drag.moved = false;
      canvas.setPointerCapture?.(event.pointerId);
    };

    const onPointerMove = (event) => {
      if (!drag.active) return;
      const delta = event.clientX - drag.startX;
      if (Math.abs(delta) > 4) drag.moved = true;
      targetRotation = drag.startRotation - delta * 0.006;
    };

    const onPointerUp = (event) => {
      drag.active = false;
      canvas.releasePointerCapture?.(event.pointerId);
      if (drag.moved) return;

      getPointer(event);
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(clickObjects, true);
      const hit = hits.find((item) => item.object.userData.zone || item.object.parent?.userData.zone);
      const zone = hit?.object.userData.zone ?? hit?.object.parent?.userData.zone;
      if (zone) onZoneChangeRef.current(zone);
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      cameraRotation += (targetRotation - cameraRotation) * 0.12;
      updateCamera();
      islandPivot.rotation.y = Math.sin(elapsed * 0.2) * 0.018;

      const selectedZone = activeZoneRef.current;
      island.traverse((object) => {
        if (!object.userData.zone) return;
        const isActive = object.userData.zone === selectedZone;
        const pulse = isActive ? 1.03 + Math.sin(elapsed * 4.2) * 0.018 : 1;
        object.scale.copy(object.userData.baseScale).multiplyScalar(pulse);
        if (object.userData.activeRing) {
          object.userData.activeRing.material.opacity = isActive ? 0.58 : 0.26;
          object.userData.activeRing.scale
            .copy(object.userData.activeRing.userData.baseScale)
            .multiplyScalar(isActive ? 1.18 + Math.sin(elapsed * 3.3) * 0.08 : 1);
        }
      });

      if (island.userData.storm && !lowDetail) {
        island.userData.storm.position.y = Math.sin(elapsed * 1.4) * 0.055;
        island.userData.storm.rotation.y = Math.sin(elapsed * 0.22) * 0.12;
      }

      water.rotation.z = elapsed * 0.018;
      waterGlow.rotation.z = -elapsed * 0.014;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    sceneRef.current = {
      rotateBy: (amount) => {
        targetRotation += THREE.MathUtils.degToRad(amount);
      }
    };

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      disposeObject(scene);
      renderer.dispose();
      sceneRef.current = null;
    };
  }, [zones, lowDetail]);

  useEffect(() => {
    const amount = typeof rotateSignal === "number" ? rotateSignal : rotateSignal?.amount ?? 0;
    if (amount !== 0) sceneRef.current?.rotateBy(amount);
  }, [rotateSignal]);

  if (webglFailed) {
    return (
      <div className="ues-webglFallback">
        <h2>3D island unavailable</h2>
        <p>The zone selector still works, but this browser could not start WebGL.</p>
      </div>
    );
  }

  return <canvas className="ues-threeCanvas" ref={canvasRef} aria-label="Interactive 3D raid island" />;
}

export default RaidIsland3D;
