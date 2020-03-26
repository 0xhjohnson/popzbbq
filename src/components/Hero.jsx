import React from 'react';

import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <>
      <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 px-2 mx-auto">
        <div className="sm:text-center lg:text-left">
          <h2 className="font-extrabold text-3xl leading-snug">
            Bad to the Bone
            <br />
            <span className="text-orange-600">South Georgia Style BBQ</span>
          </h2>
          <p className="text-gray-700 mt-2 sm:mt-3">
            We provide South Georgia style BBQ that people love, day after day
            after day. It is not a big secret. People just want more of it.
          </p>
        </div>
      </div>
      <HeroImage />
    </>
  );
};

export default Hero;
