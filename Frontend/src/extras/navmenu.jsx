import React, { useEffect, useState } from 'react';
import '../css/NavMenu.css';

const NavMenu = () => {
  const [activeSection, setActiveSection] = useState('');

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

  return (
    <nav className="navmenu">
      <ul>
        <li>
          <a href="#hero" id="margin-top" className={activeSection === 'hero' ? 'active' : ''}>Home</a>
        </li>
        <li>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        </li>
        <li>
          <a href="#features" className={activeSection === 'features' ? 'active' : ''}>Features</a>
        </li>
        <li>
          <a href="#npc" className={activeSection === 'npc' ? 'active' : ''}>NPC's</a>
        </li>
        <li>
          <a href="#world" className={activeSection === 'world' ? 'active' : ''}>World</a>
        </li>
        <li>
          <a href="#notes" className={activeSection === 'notes' ? 'active' : ''}>Notes</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
