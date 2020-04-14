import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_hF2su0HEQmwwKl6etHHCFWGY');

const redirectToCheckout = async (ev) => {
  ev.preventDefault();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    items: [{ sku: 'sku_H5mAfwKpMldwXv', quantity: 1 }],
    successUrl: 'https://popzbbq.com/success',
    cancelUrl: 'https://popzbbq.com/'
  });
  if (error) {
    console.warn('Error:', error);
  }
};

function Banner() {
  const props = useSpring({
    config: config.slow,
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <animated.div
      style={props}
      className="z-50 fixed bottom-0 inset-x-0 px-2 pb-10 sm:px-0 sm:pb-6"
    >
      <button
        type="button"
        className="flex items-center justify-between rounded-lg shadow-lg pl-6 pr-4 py-3 bg-gray-900 sm:hidden"
        onClick={redirectToCheckout}
      >
        <p className="text-gray-100 font-medium">Order Family Weekend Pack</p>
        <span className="flex items-center justify-center px-3 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
          →
        </span>
      </button>
      <div className="hidden sm:block mx-w-7xl mx-auto px-4 lg:px-6">
        <div className="py-3 pl-6 pr-3 rounded-lg bg-gray-900 shadow-lg">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-1 flex items-center">
              <p className="text-gray-100 truncate">
                Now delivering Family Weekend Pack
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="rounded-md shadow-sm">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded text-gray-800 bg-white hover:text-gray-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                  onClick={redirectToCheckout}
                >
                  Order today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Banner;
