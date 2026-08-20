import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const floorMoods = {
  outside: { fire: 0.08, goo: 0.08, smoke: 0.12, light: 0.95 },
  entry: { fire: 0.12, goo: 0.12, smoke: 0.18, light: 0.88 },
  normal: { fire: 0.08, goo: 0.16, smoke: 0.14, light: 0.86 },
  smoky: { fire: 0.22, goo: 0.18, smoke: 0.42, light: 0.72 },
  burning: { fire: 0.58, goo: 0.22, smoke: 0.5, light: 0.8 },
  goo: { fire: 0.18, goo: 0.62, smoke: 0.32, light: 0.66 },
  blackout: { fire: 0.06, goo: 0.42, smoke: 0.58, light: 0.42 },
  roof: { fire: 0.35, goo: 0.25, smoke: 0.36, light: 0.9 }
};

const FLOOR_COUNT = 10;
const FLOOR_BASE_Y = 0.82;
const FLOOR_SPACING = 1.24;
const TOP_FLOOR_Y = FLOOR_BASE_Y + (FLOOR_COUNT - 1) * FLOOR_SPACING;
const ROOF_Y = TOP_FLOOR_Y + 0.96;
const BUILDING_CENTER_Y = ROOF_Y / 2;
const BUILDING_HEIGHT = ROOF_Y + 0.62;

function createMat(color, lowDetail, options = {}) {
  return lowDetail
    ? new THREE.MeshBasicMaterial({
        color,
        opacity: options.opacity ?? 1,
        transparent: Boolean(options.transparent || options.opacity < 1),
        depthWrite: options.depthWrite ?? true,
        polygonOffset: options.polygonOffset ?? false,
        polygonOffsetFactor: options.polygonOffsetFactor ?? 0,
        polygonOffsetUnits: options.polygonOffsetUnits ?? 0,
        side: options.side
      })
    : new THREE.MeshStandardMaterial({
        color,
        roughness: options.roughness ?? 0.84,
        metalness: options.metalness ?? 0.02,
        opacity: options.opacity ?? 1,
        transparent: Boolean(options.transparent || options.opacity < 1),
        depthWrite: options.depthWrite ?? true,
        polygonOffset: options.polygonOffset ?? false,
        polygonOffsetFactor: options.polygonOffsetFactor ?? 0,
        polygonOffsetUnits: options.polygonOffsetUnits ?? 0,
        emissive: options.emissive ?? 0x000000,
        emissiveIntensity: options.emissiveIntensity ?? 0,
        side: options.side
      });
}

function addBox(group, material, position, scale, name = "") {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function addCylinder(group, material, position, radius, height, segments = 12, name = "") {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, segments), material);
  mesh.position.set(...position);
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function addCone(group, material, position, radius, height, segments = 9, name = "") {
  const mesh = new THREE.Mesh(new THREE.ConeGeometry(radius, height, segments), material);
  mesh.position.set(...position);
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function disposeObject(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
      else child.material.dispose();
    }
  });
}

function buildBuilding({ lowDetail }) {
  const root = new THREE.Group();
  const materials = {
    brick: createMat(0xa65b30, lowDetail),
    brickDark: createMat(0x6c3424, lowDetail),
    stone: createMat(0xc2a173, lowDetail),
    glass: createMat(0x172529, lowDetail, { roughness: 0.42, metalness: 0.05 }),
    litGlass: createMat(0xdd8a3f, lowDetail, { emissive: 0xd86b2f, emissiveIntensity: lowDetail ? 0 : 0.7 }),
    iron: createMat(0x080808, lowDetail, { roughness: 0.58, metalness: 0.35 }),
    concrete: createMat(0x8d8173, lowDetail),
    sidewalk: createMat(0x6f675e, lowDetail),
    tree: createMat(0x426934, lowDetail),
    trunk: createMat(0x4b301f, lowDetail),
    goo: createMat(0x4f6a2d, lowDetail, { emissive: 0x203b16, emissiveIntensity: lowDetail ? 0 : 0.18 }),
    fire: createMat(0xff8138, lowDetail, {
      opacity: 0.72,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -3,
      polygonOffsetUnits: -3,
      emissive: 0xff5a1f,
      emissiveIntensity: lowDetail ? 0 : 1.4
    }),
    smoke: createMat(0x5b5650, lowDetail, {
      opacity: 0.24,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide
    }),
    interiorWall: createMat(0x3a302a, lowDetail),
    plaster: createMat(0x766a5f, lowDetail),
    floor: createMat(0x4a3528, lowDetail),
    activeFloor: createMat(0xd19b5e, lowDetail, {
      opacity: 0.34,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
      emissive: 0x6f3a1f,
      emissiveIntensity: lowDetail ? 0 : 0.24
    }),
    furniture: createMat(0x5b4938, lowDetail),
    barricade: createMat(0x80634a, lowDetail)
  };

  addBox(root, materials.sidewalk, [0, -0.1, 0.55], [9.8, 0.12, 3.2], "sidewalk");
  addBox(root, materials.concrete, [0, 0.02, 1.98], [9.8, 0.16, 0.18], "curb");

  const facadeLeftPanel = new THREE.Group();
  const facadeRightPanel = new THREE.Group();
  const facadeCenterEntry = new THREE.Group();
  facadeLeftPanel.name = "left hinged facade";
  facadeRightPanel.name = "right hinged facade";
  facadeCenterEntry.name = "center entry facade";
  facadeLeftPanel.position.set(-2.96, 0, 0.02);
  facadeRightPanel.position.set(2.96, 0, 0.02);
  root.add(facadeLeftPanel, facadeRightPanel, facadeCenterEntry);

  addBox(facadeLeftPanel, materials.brick, [1.48, BUILDING_CENTER_Y, -0.2], [2.96, BUILDING_HEIGHT, 0.48], "left brick panel");
  addBox(facadeLeftPanel, materials.brickDark, [0.76, BUILDING_CENTER_Y - 0.08, -0.04], [1.05, BUILDING_HEIGHT - 0.5, 0.52], "left bay");
  addBox(facadeLeftPanel, materials.stone, [1.48, ROOF_Y + 0.28, 0.16], [3.05, 0.18, 0.76], "left cornice");
  addBox(facadeLeftPanel, materials.stone, [1.48, 0.22, 0.16], [3.08, 0.18, 0.72], "left foundation");
  Array.from({ length: FLOOR_COUNT - 1 }, (_, index) => index + 1).forEach((floorIndex) => {
    addBox(facadeLeftPanel, materials.stone, [1.48, FLOOR_BASE_Y + floorIndex * FLOOR_SPACING - 0.62, 0.2], [2.96, 0.055, 0.68], "left floor band");
  });

  addBox(facadeRightPanel, materials.brick, [-1.48, BUILDING_CENTER_Y, -0.2], [2.96, BUILDING_HEIGHT, 0.48], "right brick panel");
  addBox(facadeRightPanel, materials.brickDark, [-0.76, BUILDING_CENTER_Y - 0.08, -0.04], [1.05, BUILDING_HEIGHT - 0.5, 0.52], "right bay");
  addBox(facadeRightPanel, materials.stone, [-1.48, ROOF_Y + 0.28, 0.16], [3.05, 0.18, 0.76], "right cornice");
  addBox(facadeRightPanel, materials.stone, [-1.48, 0.22, 0.16], [3.08, 0.18, 0.72], "right foundation");
  Array.from({ length: FLOOR_COUNT - 1 }, (_, index) => index + 1).forEach((floorIndex) => {
    addBox(facadeRightPanel, materials.stone, [-1.48, FLOOR_BASE_Y + floorIndex * FLOOR_SPACING - 0.62, 0.2], [2.96, 0.055, 0.68], "right floor band");
  });

  addBox(facadeCenterEntry, materials.brick, [0, BUILDING_CENTER_Y, -0.24], [0.58, BUILDING_HEIGHT, 0.36], "center brick spine");
  addBox(facadeCenterEntry, materials.stone, [0, ROOF_Y + 0.3, 0.1], [0.72, 0.2, 0.58], "center cornice cap");
  addBox(facadeCenterEntry, materials.stone, [0, 0.22, 0.12], [0.78, 0.18, 0.58], "center foundation");

  const floorY = Array.from({ length: FLOOR_COUNT }, (_, index) => FLOOR_BASE_Y + index * FLOOR_SPACING);
  const windowX = [-2.15, -1.05, 0, 1.05, 2.15];
  floorY.forEach((y, floorIndex) => {
    windowX.forEach((x, columnIndex) => {
      const lit = (floorIndex + columnIndex) % 5 === 0 || (floorIndex === 2 && columnIndex === 3);
      const targetPanel = x < -0.22 ? facadeLeftPanel : x > 0.22 ? facadeRightPanel : facadeCenterEntry;
      const localX = x < -0.22 ? x + 2.96 : x > 0.22 ? x - 2.96 : x;
      addBox(targetPanel, lit ? materials.litGlass : materials.glass, [localX, y, 0.48], [0.44, 0.58, 0.035], "window");
      addBox(targetPanel, materials.stone, [localX, y + 0.35, 0.56], [0.56, 0.07, 0.06], "window lintel");
      addBox(targetPanel, materials.stone, [localX, y - 0.35, 0.58], [0.58, 0.07, 0.06], "window sill");
    });
  });

  addBox(facadeCenterEntry, materials.stone, [0, 0.92, 0.54], [1.0, 0.22, 0.06], "door arch base");
  addBox(facadeCenterEntry, materials.glass, [0, 0.72, 0.47], [0.58, 0.98, 0.035], "front door");
  addCylinder(facadeCenterEntry, materials.stone, [0, 1.24, 0.57], 0.56, 0.06, 24, "entry arch").rotation.z = Math.PI / 2;
  addBox(facadeCenterEntry, materials.litGlass, [0, 0.82, 0.66], [0.7, 1.12, 0.025], "doorway glow");
  addBox(root, materials.concrete, [0, 0.22, 0.92], [1.45, 0.16, 0.58], "top step");
  addBox(root, materials.concrete, [0, 0.08, 1.26], [1.8, 0.14, 0.48], "middle step");
  addBox(root, materials.concrete, [0, -0.05, 1.58], [2.18, 0.12, 0.42], "bottom step");

  for (let i = 0; i < 23; i += 1) {
    const x = -4.55 + i * 0.41;
    addCylinder(root, materials.iron, [x, 0.55, 1.62], 0.025, 1.15, 6, "fence post");
    addCone(root, materials.iron, [x, 1.18, 1.62], 0.055, 0.14, 5, "fence tip");
  }
  addBox(root, materials.iron, [0, 0.72, 1.62], [9.6, 0.04, 0.04], "fence rail");
  addBox(root, materials.iron, [0, 0.36, 1.62], [9.6, 0.035, 0.035], "lower fence rail");

  [-4.0, 4.0].forEach((x) => {
    addCylinder(root, materials.trunk, [x, 0.82, 0.2], 0.08, 1.7, 8, "tree trunk");
    addCone(root, materials.tree, [x, 2.0, 0.2], 0.78, 1.65, 9, "tree crown");
    addCone(root, materials.tree, [x + (x < 0 ? -0.18 : 0.18), 2.75, 0.05], 0.6, 1.25, 9, "tree upper crown");
  });

  const fireGroup = new THREE.Group();
  fireGroup.name = "fire";
  addCone(fireGroup, materials.fire, [1.9, 0.42, 1.28], 0.24, 0.78, 8, "street flame");
  addCone(fireGroup, materials.fire, [2.18, 0.34, 1.18], 0.17, 0.55, 8, "small flame");
  addBox(fireGroup, materials.fire, [1.05, 4.98, 0.32], [0.38, 0.52, 0.04], "window fire");
  root.add(fireGroup);

  const gooGroup = new THREE.Group();
  gooGroup.name = "goo";
  addBox(gooGroup, materials.goo, [-1.62, 0.2, 0.44], [1.1, 0.16, 0.18], "foundation goo");
  addBox(gooGroup, materials.goo, [-2.72, 1.26, 0.32], [0.22, 1.6, 0.08], "wall goo");
  addBox(gooGroup, materials.goo, [2.42, 2.28, 0.32], [0.18, 1.2, 0.08], "window goo");
  addCylinder(gooGroup, materials.goo, [0.95, 0.02, 1.38], 0.33, 0.06, 16, "sidewalk goo");
  root.add(gooGroup);

  const smokeGroup = new THREE.Group();
  smokeGroup.name = "smoke";
  [0, 1, 2, 3].forEach((index) => {
    const smoke = new THREE.Mesh(new THREE.SphereGeometry(0.42 + index * 0.08, lowDetail ? 10 : 18, lowDetail ? 6 : 12), materials.smoke);
    smoke.position.set(0.85 + index * 0.12, 6.2 + index * 0.34, 0.18 - index * 0.05);
    smoke.scale.set(1.4, 0.72, 0.62);
    smokeGroup.add(smoke);
  });
  root.add(smokeGroup);

  const exteriorObjects = [...root.children];
  const streetObjects = exteriorObjects.filter(
    (object) => ![facadeLeftPanel, facadeRightPanel, facadeCenterEntry].includes(object)
  );

  const interiorGroup = new THREE.Group();
  interiorGroup.name = "interior cutaway";
  interiorGroup.position.set(0, 0, -0.28);
  addBox(interiorGroup, materials.interiorWall, [0, BUILDING_CENTER_Y, -0.86], [5.95, BUILDING_HEIGHT, 0.12], "interior back wall");
  addBox(interiorGroup, materials.interiorWall, [-3.08, BUILDING_CENTER_Y, -0.18], [0.14, BUILDING_HEIGHT, 1.12], "left interior wall");
  addBox(interiorGroup, materials.interiorWall, [3.08, BUILDING_CENTER_Y, -0.18], [0.14, BUILDING_HEIGHT, 1.12], "right interior wall");

  const interiorFloors = [];
  const roomYs = Array.from({ length: FLOOR_COUNT }, (_, index) => FLOOR_BASE_Y + index * FLOOR_SPACING);
  roomYs.forEach((y, index) => {
    const floorGroup = new THREE.Group();
    floorGroup.name = `interior floor ${index + 1}`;
    floorGroup.userData.floorIndex = index;

    addBox(floorGroup, materials.floor, [0, y - 0.62, 0.02], [6.1, 0.08, 1.16], "floor slab");
    addBox(floorGroup, materials.floor, [0, y + 0.62, 0.02], [6.1, 0.055, 1.16], "ceiling slab");
    addBox(floorGroup, materials.plaster, [0, y, -0.76], [5.82, 0.82, 0.04], "room back plaster");
    addBox(floorGroup, materials.interiorWall, [-0.96, y, -0.04], [0.07, 0.82, 0.9], "room divider");
    addBox(floorGroup, materials.interiorWall, [0.96, y, -0.04], [0.07, 0.82, 0.9], "room divider");
    addBox(floorGroup, materials.glass, [-2.08, y + 0.05, -0.69], [0.44, 0.34, 0.025], "inside window");
    addBox(floorGroup, materials.glass, [0, y + 0.05, -0.69], [0.44, 0.34, 0.025], "inside window");
    addBox(floorGroup, materials.glass, [2.08, y + 0.05, -0.69], [0.44, 0.34, 0.025], "inside window");
    addBox(floorGroup, materials.activeFloor, [0, y - 0.05, 0.5], [5.72, 0.72, 0.025], "active floor wash");

    if (index % 3 === 0) {
      addBox(floorGroup, materials.furniture, [-2.0, y - 0.22, 0.2], [0.48, 0.18, 0.28], "desk");
      addBox(floorGroup, materials.furniture, [-1.58, y - 0.02, 0.32], [0.14, 0.34, 0.14], "chair");
    } else if (index % 3 === 1) {
      addBox(floorGroup, materials.barricade, [1.68, y - 0.16, 0.26], [0.82, 0.16, 0.18], "barricade");
      addBox(floorGroup, materials.barricade, [1.44, y + 0.05, 0.38], [0.62, 0.13, 0.16], "barricade high");
    } else {
      addBox(floorGroup, materials.furniture, [-1.7, y - 0.18, 0.2], [0.78, 0.16, 0.28], "bed");
      addBox(floorGroup, materials.furniture, [1.78, y - 0.18, 0.34], [0.34, 0.3, 0.26], "supply crate");
    }

    if (index >= 3) {
      addBox(floorGroup, materials.goo, [-2.72, y - 0.08, 0.52], [0.22, 0.45, 0.035], "interior wall goo");
    }
    if (index === 4 || index === 7) {
      addBox(floorGroup, materials.fire, [2.1, y + 0.02, 0.54], [0.34, 0.42, 0.035], "interior fire glow");
    }
    if (index >= 6) {
      addBox(floorGroup, materials.glass, [0.92, y + 0.04, 0.56], [0.62, 0.42, 0.035], "blackout room");
    }

    interiorFloors.push(floorGroup);
    interiorGroup.add(floorGroup);
  });

  addBox(interiorGroup, materials.floor, [0, ROOF_Y - 0.42, 0.04], [6.2, 0.1, 1.18], "roof slab");
  addBox(interiorGroup, materials.stone, [0, ROOF_Y + 0.08, -0.1], [6.35, 0.2, 1.12], "roof parapet");
  addBox(interiorGroup, materials.iron, [-1.95, ROOF_Y + 0.38, 0.18], [0.08, 0.44, 0.08], "roof antenna");
  addBox(interiorGroup, materials.concrete, [1.8, ROOF_Y - 0.16, 0.2], [0.72, 0.34, 0.48], "roof access");
  addBox(interiorGroup, materials.activeFloor, [0, ROOF_Y - 0.1, 0.5], [5.8, 0.58, 0.025], "roof wash");
  const roofWash = interiorGroup.children.find((child) => child.name === "roof wash");

  for (let index = 0; index < FLOOR_COUNT - 1; index += 1) {
    const y = FLOOR_BASE_Y + index * FLOOR_SPACING;
    const x = index % 2 === 0 ? 2.64 : 2.18;
    addBox(interiorGroup, materials.concrete, [x, y, 0.24], [0.72, 0.08, 0.34], "stair flight");
    addBox(interiorGroup, materials.iron, [x - 0.36, y + 0.16, 0.32], [0.04, 0.36, 0.04], "stair rail");
  }

  root.add(interiorGroup);

  const doorwayGlow = facadeCenterEntry.children.find((child) => child.name === "doorway glow");
  root.userData = {
    facadeLeftPanel,
    facadeRightPanel,
    facadeCenterEntry,
    doorwayGlow,
    fireGroup,
    gooGroup,
    smokeGroup,
    interiorGroup,
    interiorFloors,
    roofWash,
    exteriorObjects,
    streetObjects
  };
  root.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = !lowDetail;
      object.receiveShadow = !lowDetail;
      object.userData.baseScale = object.scale.clone();
    }
  });

  return root;
}

function CityBuilding3D({ activeFloor = "outside", activeFloorIndex = 0, scrollProgress = 0, lowDetail = false }) {
  const canvasRef = useRef(null);
  const propsRef = useRef({ activeFloor, activeFloorIndex, scrollProgress, lowDetail });
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    propsRef.current = { activeFloor, activeFloorIndex, scrollProgress, lowDetail };
  }, [activeFloor, activeFloorIndex, scrollProgress, lowDetail]);

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
    scene.fog = lowDetail ? null : new THREE.Fog(0x17100c, 9, 18);
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    const buildingPivot = new THREE.Group();
    const startTime = performance.now();
    let animationId;
    let resizeObserver;
    let cameraX = -1.45;
    let cameraY = BUILDING_CENTER_Y;
    let cameraZ = 18;
    let targetX = -1.45;
    let targetY = BUILDING_CENTER_Y;
    let targetZ = 18;

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowDetail ? 1.1 : 1.65));
    renderer.shadowMap.enabled = !lowDetail;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    scene.add(new THREE.HemisphereLight(0xf4dcc2, 0x1d2419, lowDetail ? 1.15 : 0.95));
    const sun = new THREE.DirectionalLight(0xffdfb0, lowDetail ? 1.05 : 1.9);
    sun.position.set(-3.5, 7.2, 5.4);
    sun.castShadow = !lowDetail;
    if (!lowDetail) {
      sun.shadow.mapSize.set(1024, 1024);
      sun.shadow.camera.near = 1;
      sun.shadow.camera.far = 18;
      sun.shadow.camera.left = -6;
      sun.shadow.camera.right = 6;
      sun.shadow.camera.top = 9;
      sun.shadow.camera.bottom = -3;
      sun.shadow.bias = -0.0001;
      sun.shadow.normalBias = 0.035;
    }
    scene.add(sun);

    const fireLight = new THREE.PointLight(0xff6f2e, lowDetail ? 0.8 : 1.65, 8);
    fireLight.position.set(2.0, 1.2, 1.7);
    scene.add(fireLight);

    const building = buildBuilding({ lowDetail });
    buildingPivot.add(building);
    buildingPivot.rotation.y = -0.16;
    scene.add(buildingPivot);

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() ?? { width: 960, height: 720 };
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / Math.max(rect.height, 1);
      camera.updateProjectionMatrix();
    };

    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement);
    resize();

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      const { activeFloor: currentFloor, activeFloorIndex: sectionIndex, scrollProgress: progress } = propsRef.current;
      const mood = floorMoods[currentFloor] ?? floorMoods.normal;
      const isOutside = sectionIndex <= 0;
      const isEntry = sectionIndex === 1;
      const isInteriorMode = sectionIndex >= 2;
      const entryAmount = THREE.MathUtils.clamp((sectionIndex - 0.35) / 0.9, 0, 1);
      const interiorAmount = THREE.MathUtils.clamp((sectionIndex - 1) / 1.4, 0, 1);
      const openAmount = lowDetail ? Math.round(entryAmount) : entryAmount;
      const isRoof = currentFloor === "roof";
      const interiorFloor = THREE.MathUtils.clamp(sectionIndex - 2, 0, FLOOR_COUNT - 1);
      const interiorY = isRoof ? ROOF_Y : FLOOR_BASE_Y + interiorFloor * FLOOR_SPACING;

      if (isOutside) {
        targetX = -1.35;
        targetY = BUILDING_CENTER_Y + 0.35;
        targetZ = 18.5;
      } else if (isEntry) {
        targetX = -0.02;
        targetY = 1.1;
        targetZ = 2.85;
      } else {
        targetX = -0.8;
        targetY = interiorY + THREE.MathUtils.clamp(progress * 0.36, 0, 0.36);
        targetZ = isRoof ? 6.1 : 5.45;
      }

      building.userData.facadeLeftPanel.visible = !isInteriorMode;
      building.userData.facadeRightPanel.visible = !isInteriorMode;
      building.userData.facadeCenterEntry.visible = !isInteriorMode;
      const panelEase = lowDetail ? 1 : 0.09;
      building.userData.facadeLeftPanel.rotation.y = THREE.MathUtils.lerp(
        building.userData.facadeLeftPanel.rotation.y,
        -openAmount * 1.45,
        panelEase
      );
      building.userData.facadeRightPanel.rotation.y = THREE.MathUtils.lerp(
        building.userData.facadeRightPanel.rotation.y,
        openAmount * 1.45,
        panelEase
      );
      building.userData.facadeLeftPanel.position.x = THREE.MathUtils.lerp(
        building.userData.facadeLeftPanel.position.x,
        isInteriorMode ? -6.5 : -2.96 - openAmount * 0.62,
        panelEase
      );
      building.userData.facadeRightPanel.position.x = THREE.MathUtils.lerp(
        building.userData.facadeRightPanel.position.x,
        isInteriorMode ? 6.5 : 2.96 + openAmount * 0.62,
        panelEase
      );
      building.userData.facadeCenterEntry.position.z = THREE.MathUtils.lerp(
        building.userData.facadeCenterEntry.position.z,
        isInteriorMode ? -1.2 : -openAmount * 0.38,
        panelEase
      );
      building.userData.facadeCenterEntry.scale.z = THREE.MathUtils.lerp(
        building.userData.facadeCenterEntry.scale.z,
        isInteriorMode ? 0.04 : 1 - openAmount * 0.38,
        panelEase
      );
      if (building.userData.doorwayGlow) {
        building.userData.doorwayGlow.visible = !isInteriorMode && entryAmount > 0.12 && interiorAmount < 0.95;
        building.userData.doorwayGlow.scale.set(
          1 + Math.sin(elapsed * 4.6) * 0.04,
          1 + entryAmount * 0.42,
          1
        );
      }

      building.userData.streetObjects.forEach((object) => {
        object.visible = !isInteriorMode && interiorAmount < 0.74;
      });
      building.userData.interiorGroup.visible = isInteriorMode || entryAmount > 0.28;
      building.userData.interiorGroup.position.z = -0.36 + (1 - entryAmount) * -0.42;
      building.userData.interiorGroup.scale.setScalar(0.92 + entryAmount * 0.08);
      if (building.userData.roofWash) {
        building.userData.roofWash.visible = isRoof;
      }

      building.userData.interiorFloors.forEach((floorGroup, index) => {
        const activeDistance = Math.abs(index - interiorFloor);
        const scalePulse = activeDistance < 0.5 ? 1.015 + Math.sin(elapsed * 2.8) * 0.006 : 1;
        floorGroup.scale.setScalar(scalePulse);
        floorGroup.children.forEach((child) => {
          if (child.name === "active floor wash") {
            child.visible = !isRoof && entryAmount > 0.45 && activeDistance < 0.75;
          }
          if (child.name === "interior fire glow") {
            child.visible = entryAmount > 0.45 && mood.fire > 0.28 && activeDistance < 1.4;
          }
          if (child.name === "interior wall goo") {
            child.visible = entryAmount > 0.45 && (mood.goo > 0.32 || activeDistance < 0.8);
          }
          if (child.name === "blackout room") {
            child.visible = entryAmount > 0.45 && (mood.light < 0.58 || activeDistance < 0.6);
          }
        });
      });

      cameraX += (targetX - cameraX) * 0.08;
      cameraY += (targetY - cameraY) * 0.08;
      cameraZ += (targetZ - cameraZ) * 0.08;
      camera.position.set(cameraX, cameraY, cameraZ);
      camera.lookAt(
        interiorAmount > 0.45 ? 0 : 0.08,
        isEntry
          ? 0.88
          : THREE.MathUtils.clamp(
              interiorAmount > 0.45 ? cameraY + 0.04 : BUILDING_CENTER_Y + 0.4,
              0.9,
              ROOF_Y + 0.55
            ),
        interiorAmount > 0.45 ? -0.26 : 0.18
      );

      buildingPivot.rotation.y = THREE.MathUtils.lerp(-0.16, 0.035, entryAmount) + Math.sin(elapsed * 0.18) * 0.012;

      const fireScale = 0.55 + mood.fire * 1.25 + Math.sin(elapsed * 6.2) * 0.05;
      building.userData.fireGroup.scale.setScalar(fireScale);
      building.userData.fireGroup.visible = !isInteriorMode && mood.fire > 0.08 && interiorAmount < 0.74;
      building.userData.gooGroup.scale.setScalar(0.72 + mood.goo * 0.78);
      building.userData.gooGroup.visible = !isInteriorMode && interiorAmount < 0.74;
      building.userData.smokeGroup.scale.setScalar(0.7 + mood.smoke * 1.15);
      building.userData.smokeGroup.visible = !isInteriorMode && interiorAmount < 0.74;
      building.userData.smokeGroup.children.forEach((smoke, index) => {
        smoke.position.y += Math.sin(elapsed * 0.6 + index) * 0.0015;
        smoke.material.opacity = lowDetail ? 0.16 : THREE.MathUtils.clamp(0.12 + mood.smoke * 0.36, 0.1, 0.44);
      });
      fireLight.intensity = lowDetail ? 0.8 : 0.55 + mood.fire * 2.15;
      scene.fog = lowDetail ? null : new THREE.Fog(0x17100c, 8 - mood.smoke * 1.6, 18 - mood.smoke * 4.2);
      sun.intensity = (lowDetail ? 1.05 : 1.9) * mood.light;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      disposeObject(scene);
      renderer.dispose();
    };
  }, [lowDetail]);

  if (webglFailed) {
    return (
      <div className="cex-webglFallback">
        <h2>3D building unavailable</h2>
        <p>The floor journey still works, but this browser could not start WebGL.</p>
      </div>
    );
  }

  return <canvas className="cex-threeCanvas" ref={canvasRef} aria-label="3D brick building scroll journey" />;
}

export default CityBuilding3D;
