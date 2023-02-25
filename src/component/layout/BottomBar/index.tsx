import React from 'react';
import { NavLink } from 'react-router-dom';

import menus from '@/constant/menus';

const BottomBar = () => {
  const classNavLink =
    'flex justify-center py-5 cursor-pointer hover:text-primary transition-all';
  const active = 'border-t-2 border-primary text-primary';

  return (
    <>
      <ul className="relative flex flex-row items-center w-full shadow-md">
        {menus.map((menu) => (
          <li
            key={menu.id}
            title={menu.name}
            className="flex-1"
            data-tooltip-id="tooltip"
            data-tooltip-content={menu.name}
          >
            <NavLink
              to={menu.path}
              className={({ isActive }) =>
                isActive ? `${classNavLink} ${active}` : `${classNavLink}`
              }
            >
              <menu.icon size={20} />
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(BottomBar);
