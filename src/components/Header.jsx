import React from 'react'
import { NavLink } from 'react-router'


function Header() {
  return (
    <div>
        <nav className="bg-white shadow-sm py-4 px-8 mb-6">
            <ul className='flex justify-center gap-8'>
                <li>
                    <NavLink to="" className={({ isActive }) =>isActive ? "bg-amber-300 text-amber-900 font-semibold px-4 py-2 rounded-md transition-colors" : "px-4 py-2 hover:bg-amber-100 rounded-md transition-colors text-gray-700 font-medium" }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="products" className={({ isActive }) =>isActive ? "bg-amber-300 text-amber-900 font-semibold px-4 py-2 rounded-md transition-colors" : "px-4 py-2 hover:bg-amber-100 rounded-md transition-colors text-gray-700 font-medium" }>Products</NavLink>
                </li>
                <li>
                    <NavLink to="product" className={({ isActive }) =>isActive ? "bg-amber-300 text-amber-900 font-semibold px-4 py-2 rounded-md transition-colors" : "px-4 py-2 hover:bg-amber-100 rounded-md transition-colors text-gray-700 font-medium" }>Product</NavLink>
                </li>
                <li>
                    <NavLink to="contact" className={({ isActive }) =>isActive ? "bg-amber-300 text-amber-900 font-semibold px-4 py-2 rounded-md transition-colors" : "px-4 py-2 hover:bg-amber-100 rounded-md transition-colors text-gray-700 font-medium" }>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header