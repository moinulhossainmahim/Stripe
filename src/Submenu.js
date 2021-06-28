import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    const { center, bottom } = location;
    container.current.style.left = `${center}px`;
    container.current.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length >= 4) {
      setColumns('col-4');
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
