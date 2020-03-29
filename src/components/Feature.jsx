import React from 'react';
import { FiClock, FiThermometer, FiAward, FiStar } from 'react-icons/fi';

const Feature = () => {
  return (
    <div className="pt-12 pb-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-orange-700 font-semibold tracking-wide uppercase">
            Our Promise
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Unforgettable food &amp; service
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-700 lg:mx-auto">
            Whether your event is for 50 people or 1,500 Pop&#39;z BBQ provides
            the highest service possible to ensure everything goes smoothly.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                    <FiClock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Cooked to order
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    Every meat is cooked to order and served hot off of one of
                    my custom wood-burning cookers.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                    <FiThermometer className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Incredible flavor
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    All meats are cooked low and slow for up to 10-12 hours
                    using oak for heat and a combination of hickory and pecan
                    for a truly one of a kind of flavor.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                    <FiAward className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Quality guaranteed
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    Over the years I have developed a reputation for some of the
                    best South Georgia style BBQ in the area and uphold that
                    reputation with every event.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                    <FiStar className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Unparalleled customer service
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    Pop&#39;z BBQ strives to create lifelong relationships with
                    customers by going above and beyond to ensure that you are
                    satisfied with every event.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
