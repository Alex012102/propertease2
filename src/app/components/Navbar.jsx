import React from "react";
import navItems from "../../config/navItems";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-[60%]">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name} className="hover:bg-gray-800 p-2 rounded">
            <a href={item.endpoint}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
