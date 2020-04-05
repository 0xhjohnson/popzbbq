import React, { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Notification = ({ timeout }) => {
  const [isShown, setIsShown] = useState(true);

  // automatically clear the timeout after timeout seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(false);
    }, timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  const notificationClasses = classNames(
    'absolute',
    'top-0',
    'right-0',
    'mt-8',
    'mr-8',
    {
      hidden: !isShown
    }
  );

  return (
    <div className={notificationClasses}>
      <div className="bg-white rounded-md shadow-lg">
        <div className="py-4 px-3">
          <div className="flex">
            <FiCheckCircle className="w-5 h-5 mx-2 text-green-500" />
            <div className="mx-3">
              <p className="flex-1 font-medium mb-1">
                Successfully submitted event
              </p>
              <p className="text-gray-700 text-sm">
                Expect a personal response within 24 hours
              </p>
            </div>
            <button
              type="button"
              className="self-start mx-2 text-gray-700 hover:text-gray-600 duration-150 ease-in-out"
              onClick={() => setIsShown(!isShown)}
            >
              <svg
                className="h-5 w-5"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  timeout: PropTypes.number
};

Notification.defaultProps = {
  timeout: 5000
};

export default Notification;
