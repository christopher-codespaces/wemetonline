import { useState } from "react";


const NavBar = () => {
  // Removed state since it's not needed for desktop view
  const navigation = [
    { title: "About Us", path: "aboutus" },
    { title: "Get Involved", path: "getinvolved" },
    { title: "Programs", path: "programs" },
    { title: "Empower Learning", path: "empowerlearning" },
    { title: "Contact Us", path: "contactus" },
  ];

  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
      <nav
        class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
        aria-label="Global">
        <a class="sm:order-1 flex-none text-xl font-semibold" href="#">
          Brand
        </a>
        <div class="sm:order-3 flex items-center gap-x-2">
       
          <button
            type="button"
            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded border border-gray-200 bg-orange-600	 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
            Sign Up 
          </button>
        </div>
        <div
          id="navbar-alignment"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
          <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <a class="font-medium text-blue-500" href="#" aria-current="page">
              Landing
            </a>
            <a class="font-medium text-gray-600 hover:text-gray-400" href="#">
              Account
            </a>
            <a class="font-medium text-gray-600 hover:text-gray-400" href="#">
              Work
            </a>
            <a class="font-medium text-gray-600 hover:text-gray-400" href="#">
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
