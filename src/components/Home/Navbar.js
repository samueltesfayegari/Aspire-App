import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBriefcase, faUsers, faInbox, faChartColumn, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isRecruitDropdownOpen, setIsRecruitDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRecruitDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isRecruitDropdownOpen]);

  return (
    <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
           <a href="#" class="text-xl font-bold mr-4">Aspire</a>

            <div className="flex lg:hidden">
            <button x-cloak onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
            <svg x-show={!isOpen} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"></path>
            </svg>
          </button>
            </div>
            

          </div>

          <div x-cloak className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <a href="#" className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"><FontAwesomeIcon icon={faHouse} /> Home</a>
              <a href="#" className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"><FontAwesomeIcon icon={faBriefcase} /> Projects</a>
              <a href="#" className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"><FontAwesomeIcon icon={faUsers} /> Members</a>
              <a
              href="#"
              className={`relative px-3 py-2 mx-3 mt-2 text-sm text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${isRecruitDropdownOpen ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              onClick={() => setIsRecruitDropdownOpen(!isRecruitDropdownOpen)}
              ><FontAwesomeIcon icon={faUserPlus} /> Recruit<i class="fas fa-chevron-down ml-1"></i>
              {isRecruitDropdownOpen && (
                <div ref={dropdownRef} className="absolute mt-2 space-y-2 bg-white dark:bg-gray-800 border rounded-md shadow-lg">
                  <a href="#" className="block px-4 py-2 text-indigo-800 dark:text-gray-200 hover:bg-blue-300 dark:hover:bg-gray-700">User_1</a>
                  <a href="#" className="block px-4 py-2 text-indigo-800 dark:text-gray-200 hover:bg-blue-300 dark:hover:bg-gray-700">User_2</a>
                  {/* Add more options as needed */}
                </div>
              )}
              </a>


              <a href="#" className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"><FontAwesomeIcon icon={faInbox} /> Inbox</a>
              <a href="#" className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"><FontAwesomeIcon icon={faChartColumn} /> Reporting<i class="fas fa-chevron-down ml-1"></i></a>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <input class="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none mr-3" placeholder="Search" type="search"/>
              <i class="fas fa-search"></i>
              <button class="ml-2 text-gray-600 focus:outline-none">
              </button>

              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
