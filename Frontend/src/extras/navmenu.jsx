import React, { useEffect, useState } from 'react';
import '../css/NavMenu.css';

const NavMenu = () => {
  const [activeSection, setActiveSection] = useState('');
  const [sectionIds, setSectionIds] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const ids = Array.from(sections).map(section => section.getAttribute('id'));
    setSectionIds(ids);
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper function to split section IDs into columns
  const createColumns = (arr, itemsPerColumn) => {
    let columns = [];
    for (let i = 0; i < arr.length; i += itemsPerColumn) {
      columns.push(arr.slice(i, i + itemsPerColumn));
    }
    return columns;
  };

  // Creating columns with 10 items each
  const columns = createColumns(sectionIds, 10);

  return (
    <nav className="navmenu">
      <div className="columns">
        {columns.map((column, index) => (
          <ul key={index}>
            {column.map(id => (
              <li key={id} className="mt-2">
                <a
                  href={`#${id}`} 
                  className={activeSection === id ? 'active' : ''} >
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
