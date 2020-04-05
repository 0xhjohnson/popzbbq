import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, ErrorMessage } from 'react-hook-form';
import { object, string, date, boolean } from 'yup';
import classNames from 'classnames';
import axios from 'axios';
import dayjs from 'dayjs';

import 'react-datepicker/dist/react-datepicker.css';
import Notification from './Notification';

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
  details: string().required('Details is a required field.'),
  honeypot: boolean()
});

const BookEventForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const { register, handleSubmit, reset, setValue, watch, errors } = useForm({
    mode: 'onBlur',
    validationSchema: bookEventSchema,
    defaultValues: {
      eventDate: null
    }
  });

  useEffect(() => {
    register({ name: 'eventDate' });
  }, [register]);

  const eventDate = watch('eventDate');

  const onSubmit = async (d) => {
    const data = d;
    // use a honeypot to prevent bot submissions
    if (data.honeypot) return;

    setIsSubmitting(true);

    data.eventDate = dayjs(data.eventDate).format('MMM D h:mm a');
    try {
      const res = await axios.post('/api/send', data);

      if (res.data === 'Success') {
        setIsSuccessful(true);
        reset();
      }

      setIsSubmitting(false);
    } catch (e) {
      console.error(e);
    }
  };

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
    <>
      {isSuccessful && <Notification timeout={7000} />}
      <div className="border border-gray-300 rounded-lg shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <label
            htmlFor="name"
            className="block text-sm leading-5 font-medium text-gray-700"
          >
            Name
            <input
              name="name"
              className={classNames(inputClasses, {
                'border-red-700': errors.name
              })}
              ref={register}
            />
          </label>
          <ErrorMessage errors={errors} name="name">
            {({ message }) => <p className="text-red-700 text-sm">{message}</p>}
          </ErrorMessage>
          <label
            htmlFor="email"
            className="block text-sm leading-5 font-medium text-gray-700 mt-4"
          >
            Email
            <input
              name="email"
              className={classNames(inputClasses, {
                'border-red-700': errors.email
              })}
              ref={register}
            />
          </label>
          <ErrorMessage errors={errors} name="email">
            {({ message }) => <p className="text-red-700 text-sm">{message}</p>}
          </ErrorMessage>
          <label
            htmlFor="phone"
            className="block text-sm leading-5 font-medium text-gray-700 mt-4"
          >
            Phone
            <input
              name="phone"
              className={classNames(inputClasses, {
                'border-red-700': errors.phone
              })}
              ref={register}
            />
          </label>
          <ErrorMessage errors={errors} name="phone">
            {({ message }) => <p className="text-red-700 text-sm">{message}</p>}
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
              name="details"
              className={classNames(inputClasses, {
                'border-red-700': errors.details
              })}
              rows="5"
              ref={register}
            />
          </label>
          <ErrorMessage errors={errors} name="details">
            {({ message }) => <p className="text-red-700 text-sm">{message}</p>}
          </ErrorMessage>
          <input
            type="checkbox"
            name="honeypot"
            className="hidden"
            ref={register}
          />
          <div className="flex justify-end">
            {isSubmitting ? (
              <button
                type="button"
                className="btn btn-orange opacity-75 cursor-not-allowed mt-6"
                disabled
              >
                Sending
              </button>
            ) : (
              <button type="submit" className="btn btn-orange mt-6">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default BookEventForm;
