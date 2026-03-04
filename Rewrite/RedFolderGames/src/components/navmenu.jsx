import React, { useEffect, useState } from "react";

const NavMenu = () => {
  const [activeSection, setActiveSection] = useState("");
  const [sectionIds, setSectionIds] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const ids = Array.from(sections).map((section) => section.getAttribute("id"));
    setSectionIds(ids);
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createColumns = (arr, itemsPerColumn) => {
    const columns = [];
    for (let i = 0; i < arr.length; i += itemsPerColumn) {
      columns.push(arr.slice(i, i + itemsPerColumn));
    }
    return columns;
  };

  const columns = createColumns(sectionIds, 10);

  return (
    <nav className="shadow-md">
      <div className="flex gap-5 max-w-full overflow-hidden">
        {columns.map((column, index) => (
          <ul key={index} className="m-0 p-0 list-none flex flex-col items-center">
            {column.map((id) => (
              <li key={id} className="mt-2 flex items-center justify-center">
                <a
                  href={`#${id}`}
                  className={[
                    "flex flex-col items-center no-underline",
                    activeSection === id ? "bg-[#d30707] text-white" : "bg-gray-100 text-[#333]",
                    "p-5 w-[67px] h-[67px] mt-[5px] text-[0.8em]",
                    "transition-colors duration-300",
                    "hover:bg-[#d30707] hover:text-white"
                  ].join(" ")}
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;