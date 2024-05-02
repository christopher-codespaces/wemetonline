import React from 'react'; 
import Image from 'next/image';
import image from "./images/cta-image.png"

const CTA = () => {
  return (
    <div class="relative z-20 flex items-center overflow-hidden bg-white">
      <div class="container relative flex px-6 py-16 mx-auto">
        <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span class="w-20 h-2 mb-12 bg-gray-800 "></span>
          <h2 class="flex flex-col text-2xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl ">
            Find someone to adventure with
          </h2>
          <p class="text-sm text-gray-700 sm:text-base ">
            Maybe you’re a seasoned traveler or maybe you feel more comfortable
            exploring your own hometown. Regardless of how you choose to
            discover the world, you deserve someone to share your adventures
            with.
          </p>
          <div class="flex mt-8">
            <a
              href="#"
              class="px-4 py-2 mr-4 text-white uppercase bg-blue-600 border-2 border-transparent rounded-lg text-md hover:bg-black">
              Get started
            </a>
          </div>
        </div>
        <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img
            src={image}
            alt="CTA Image"
            className="max-w-xs m-auto md:max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default CTA



