import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, ErrorMessage } from 'react-hook-form';
import { object, string, date } from 'yup';

import 'react-datepicker/dist/react-datepicker.css';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const bookEventSchema = object().shape({
  name: string().required('Name is a required field.'),
  email: string()
    .email(`Email doesn't appear to valid.`)
    .required('Email is a required field.'),
  phone: string()
    .required('Phone number is a required field.')
    .matches(phoneRegEx, {
      message: `Phone number doesn't appear to be valid.`
    }),
  eventDate: date(),
  details: string().required('Details is a required field.')
});

const BookEvent = () => {
  const { register, handleSubmit, setValue, watch, errors } = useForm({
    mode: 'onBlur',
    validationSchema: bookEventSchema,
    defaultValues: {
      eventDate: null
    }
  });
  const eventDate = watch('eventDate');
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    register({ name: 'eventDate' });
  }, [register]);

  const handleChange = (d) => setValue('eventDate', d, true);

  return (
    <Layout>
      <SEO title="Book an Event" />
      <div className="mx-0 lg:mx-4 xl:mx-5 mt-0 lg:mt-4">
        <h1 className="my-2">Book an Event</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
          <h4 className="my-3">
            I look forward to catering your next event and am here to answer any
            questions you may have. Fill out the contact form below with details
            regarding your event and I will personally get back with you within
            24 hours.
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="name"
              className="block text-sm leading-5 font-medium text-gray-700 mt-0 md:mt-2"
            >
              Name
              <input
                id="name"
                name="name"
                className="form-input block w-full sm:text-sm sm:leading-5"
                ref={register}
              />
            </label>
            <ErrorMessage errors={errors} name="name">
              {({ message }) => (
                <p className="color-red-700 text-sm">{message}</p>
              )}
            </ErrorMessage>
            <label
              htmlFor="email"
              className="block text-sm leading-5 font-medium text-gray-700 mt-0 md:mt-3"
            >
              Email
              <input
                id="email"
                name="email"
                className="form-input block w-full sm:text-sm sm:leading-5 mb-2"
                ref={register}
              />
            </label>
            <ErrorMessage errors={errors} name="email">
              {({ message }) => (
                <p className="color-red-700 text-sm">{message}</p>
              )}
            </ErrorMessage>
            <label
              htmlFor="phone"
              className="block text-sm leading-5 font-medium text-gray-700 mt-0 md:mt-3"
            >
              Phone
              <input
                id="phone"
                name="phone"
                className="form-input block w-full sm:text-sm sm:leading-5 mb-2"
                ref={register}
              />
            </label>
            <ErrorMessage errors={errors} name="phone">
              {({ message }) => (
                <p className="color-red-700 text-sm">{message}</p>
              )}
            </ErrorMessage>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="eventDate"
              className="block text-sm leading-5 font-medium text-gray-700 mt-0 md:mt-3"
            >
              Event date
              <DatePicker
                onChange={handleChange}
                selected={eventDate}
                showTimeSelect
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="MMM d yyyy h:mm aa"
                customInput={
                  <input id="eventDate" name="eventDate" className="m-2" />
                }
              />
            </label>
            <ErrorMessage errors={errors} name="eventDate">
              {() => (
                <p className="color-red-700 text-sm">
                  Event date is a required field.
                </p>
              )}
            </ErrorMessage>
            <label
              htmlFor="details"
              className="block text-sm leading-5 font-medium text-gray-700 mt-0 md:mt-3"
            >
              Details
              <textarea
                id="details"
                name="details"
                className="form-input block w-full sm:text-sm sm:leading-5 mb-2"
                rows="5"
                ref={register}
              />
            </label>
            <ErrorMessage errors={errors} name="details">
              {({ message }) => (
                <p className="color-red-700 text-sm">{message}</p>
              )}
            </ErrorMessage>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BookEvent;
