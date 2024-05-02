import React from "react";


const Footer = () => {


  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-black sm:justify-start">
            <a
              href="#"
              class="flex items-center whitespace-nowrap text-2xl font-black">
              <span class="mr-2 w-8">
                <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
              </span>
              We met online
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
