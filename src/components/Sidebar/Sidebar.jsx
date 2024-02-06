import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ moviesCategories }) {

  return (
    <div className="hidden md:block w-48 relative">
      <div className="grid grid-cols-1 fixed">
        <h3 className="text-xl font-bold mb-3">MENU</h3>
        <div>
          {moviesCategories.map((category) => (
            <div key={category.id}>
              <Link href={category.href} className= {category.current ? 'current text-xl font-semibold flex gap-4 items-center justify-start pb-4' : 'text-xl font-semibold flex gap-4 items-center justify-start pb-4 hover:text-neutral-500'}>
                <span className="w-6">{category.icon}</span>
               <span>{category.text}</span> 
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
