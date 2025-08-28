// // import React from 'react'
// // import { Link , NavLink } from 'react-router-dom'

// // export default function Header() {
// //     return (
// //         <>
       
// //         <header className="shadow sticky z-50 top-0">
// //             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
// //                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
// //                     <Link to="/" className="flex items-center">
// //                         <img
// //                             src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
// //                             className="mr-3 h-12"
// //                             alt="Logo"
// //                         />
// //                     </Link>
// //                     <div className="flex items-center lg:order-2">
// //                         <Link
// //                             to="#"
// //                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
// //                         >
// //                             Log in
// //                         </Link>
// //                         <Link
// //                             to="#"
// //                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
// //                         >
// //                             Get started
// //                         </Link>
// //                     </div>
// //                     <div
// //                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
// //                         id="mobile-menu-2"
// //                     >
// //                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
// //                             <li>
// //                                 <NavLink
// //                                 to="/"
// //                                     className={({isActive}) =>
// //                                         `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
// //                                     }
// //                                 >
// //                                     Home
// //                                 </NavLink>
// //                             </li>
// //                             <li>
// //                                 <NavLink
// //                                 to="/About"
// //                                     className={({isActive}) =>
// //                                         `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
// //                                     }
// //                                 >
// //                                     About
// //                                 </NavLink>
// //                             </li>
// //                             <li>
// //                                 <NavLink
// //                                 to="/Contact"
// //                                     className={({isActive}) =>
// //                                         `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
// //                                     }
// //                                 >
// //                                     Contact
// //                                 </NavLink>
// //                             </li>
                            
                            
                            
// //                         </ul>
// //                     </div>
// //                 </div>
// //             </nav>
// //         </header>
    
        
// //         </>
// //     )
// // }


// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const Header = () => {
//     return (
//         <header className="fixed w-full top-0 left-0 z-50 bg-gray-900 shadow-lg">
//             <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
//                 <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                     <img
//                         src="https://via.placeholder.com/150/FF8C00/FFFFFF?text=AI+Logo" // Placeholder for a bright AI-themed logo
//                         className="h-10"
//                         alt="AI Assistant Logo"
//                     />
//                 </Link>

//                 <div className="flex items-center space-x-4 lg:order-2">
//                     <Link
//                         to="/login"
//                         className="text-gray-300 hover:text-orange-500 font-medium text-sm transition-colors duration-200"
//                     >
//                         Log in
//                     </Link>
//                     <Link
//                         to="/get-started"
//                         className="px-4 py-2 text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200"
//                     >
//                         Get started
//                     </Link>
//                 </div>

//                 <div className="hidden w-full lg:flex lg:w-auto lg:order-1">
//                     <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                         <li>
//                             <NavLink
//                                 to="/"
//                                 className={({ isActive }) =>
//                                     `block py-2 pr-4 pl-3 transition-colors duration-200 ${isActive ? "text-orange-500" : "text-gray-300"} border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
//                                 }
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/about"
//                                 className={({ isActive }) =>
//                                     `block py-2 pr-4 pl-3 transition-colors duration-200 ${isActive ? "text-orange-500" : "text-gray-300"} border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
//                                 }
//                             >
//                                 About
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/contact"
//                                 className={({ isActive }) =>
//                                     `block py-2 pr-4 pl-3 transition-colors duration-200 ${isActive ? "text-orange-500" : "text-gray-300"} border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
//                                 }
//                             >
//                                 Contact
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export defau



import React from 'react';

// Importing react-router-dom's Link component.
import { Link } from 'react-router-dom';

// Header Component
// This component serves as the main navigation bar, now featuring
// custom, aesthetic SVG icons for a professional and elegant look.
const Header = () => {
  return (
    <nav className="bg-[#4a342b] text-[#e0c9a4] py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and store name, using a custom SVG book icon */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            {/* The SVG book icon for an aesthetic logo feel */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#e0c9a4]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20h-13.5a2.5 2.5 0 0 0 0 5H20"/>
              <path d="M6.5 2.5v15"/>
            </svg>
            <span className="text-2xl font-bold font-serif">
              Arshad Book Depot
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink label="Home" path="/" />
          <NavLink label="Catalog" path="/catalog" />
          <NavLink label="About Us" path="/about" />
          <NavLink label="Contact" path="/contact" />
        </div>

        {/* Icons for Cart, User, and Search, now with custom SVGs */}
        <div className="flex items-center space-x-4">
          <Link to="/search">
            {/* SVG for Search with a subtle scale animation on hover */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#e0c9a4] cursor-pointer transition-transform duration-300 hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Link>
          <Link to="/cart">
            {/* SVG for Shopping Cart with a subtle scale animation on hover */}
            <svg
              xmlns="http://www.w3.org/2d000/svg"
              className="w-6 h-6 text-[#e0c9a4] cursor-pointer transition-transform duration-300 hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>
          <Link to="/profile">
            {/* SVG for User Profile with a subtle scale animation on hover */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#e0c9a4] cursor-pointer transition-transform duration-300 hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
          
          {/* Mobile menu button, hidden on desktop */}
          <button className="md:hidden text-[#e0c9a4] focus:outline-none">
            {/* SVG for Hamburger Menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component for consistency and hover effects
const NavLink = ({ label, path }) => (
  <Link 
    to={path}
    className="text-lg font-medium text-[#e0c9a4] hover:text-white transition-colors duration-300"
  >
    {label}
  </Link>
);

// Export the Header component for use in other files.
export default Header;
