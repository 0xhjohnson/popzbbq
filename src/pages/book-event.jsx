import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, ErrorMessage } from 'react-hook-form';
import { object, string, date } from 'yup';
import classNames from 'classnames';

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

  const inputClasses = [
    'form-input',
    'block',
    'w-full',
    'text-gray-900',
    'sm:text-sm',
    'sm:leading-5'
  ];

  return (
    <Layout title="Book an Event">
      <SEO title="Book an Event" />
      <div className="mt-8 mb-12 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h3 className="text-gray-900">
            I look forward to catering your next event and am here to answer any
            questions you may have. Fill out the contact form below with details
            regarding your event and I will personally get back with you within
            24 hours.
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="name"
              className="block text-sm leading-5 font-medium text-gray-700"
            >
              Name
              <input
                id="name"
                name="name"
                className={classNames(inputClasses, {
                  'border-red-700': errors.name
                })}
                ref={register}
              />
            </label>
            <ErrorMessage errors={errors} name="name">
              {({ message }) => (
                <p className="text-red-700 text-sm">{message}</p>
              )}
            </ErrorMessage>
            <label
              htmlFor="email"
              className="block text-sm leading-5 font-medium text-gray-700 mt-4"
            >
              Email
              <input
                id="email"
                name="email"
                className={classNames(inputClasses, {
                  'border-red-700': errors.email
                })}
                ref={register}
              />
            </label>
            <ErrorMessage errors={errors} name="email">
              {({ message }) => (
                <p className="text-red-700 text-sm">{message}</p>
              )}
            </ErrorMessage>
            <label
              htmlFor="phone"
              className="block text-sm leading-5 font-medium text-gray-700 mt-4"
            >
              Phone
              <input
                id="phone"
                name="phone"
                className={classNames(inputClasses, {
                  'border-red-700': errors.phone
                })}
                ref={register}
              />
            </label>
            <ErrorMessage errors={errors} name="phone">
              {({ message }) => (
                <p className="text-red-700 text-sm">{message}</p>
              )}
            </ErrorMessage>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="eventDate"
              className="block text-sm leading-5 font-medium text-gray-700 mt-4"
            >
              Event date
            </label>
            <DatePicker
              onChange={handleChange}
              selected={eventDate}
              showTimeSelect
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="MMM d yyyy h:mm aa"
              customInput={
                <input
                  id="eventDate"
                  name="eventDate"
                  className={classNames(inputClasses, {
                    'border-red-700': errors.eventDate
                  })}
                />
              }
            />
            <ErrorMessage errors={errors} name="eventDate">
              {() => (
                <p className="text-red-700 text-sm">
                  Event date is a required field.
                </p>
              )}
            </ErrorMessage>
            <label
              htmlFor="details"
              className="block text-sm leading-5 font-medium text-gray-700 mt-4"
            >
              Details
              <textarea
                id="details"
                name="details"
                className={classNames(inputClasses, {
                  'border-red-700': errors.details
                })}
                rows="5"
                ref={register}
              />
            </label>
            <ErrorMessage errors={errors} name="details">
              {({ message }) => (
                <p className="text-red-700 text-sm">{message}</p>
              )}
            </ErrorMessage>
            <button type="submit" className="btn btn-orange mt-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BookEvent;
