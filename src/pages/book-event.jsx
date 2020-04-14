import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BookEventForm from '../components/BookEventForm';
import Banner from '../components/Banner';

const BookEvent = () => {
  return (
    <Layout title="Book an Event">
      <SEO title="Book an Event" />
      <div className="mt-8 mb-12 mx-auto max-w-3xl">
        <div className="flex flex-col">
          <h3 className="text-gray-700 mb-6 text-base text-gray-700 mx-auto sm:mb-8 sm:text-lg sm:max-w-2xl md:mb-9 md:text-xl">
            I look forward to catering your next event and am here to answer any
            questions you may have. Fill out the contact form below with details
            regarding your event and I will personally get back with you within
            24 hours.
          </h3>
          <BookEventForm />
        </div>
      </div>
      <Banner />
    </Layout>
  );
};

export default BookEvent;
