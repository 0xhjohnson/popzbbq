import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import {
  Heading,
  Grid,
  Box,
  Input,
  Label,
  Textarea,
  Button,
  Text
} from 'theme-ui';
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
      <Box mx={[0, null, null, 4, 5]} mt={[0, null, null, 4]}>
        <Heading as="h1" my={2}>
          Book an Event
        </Heading>
        <Grid gap={(null, [1, 4])} columns={[null, 1, 2]}>
          <Heading as="h4" my={3} sx={{ lineHeight: 'normal' }}>
            I look forward to catering your next event and am here to answer any
            questions you may have. Fill out the contact form below with details
            regarding your event and I will personally get back with you within
            24 hours.
          </Heading>
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="name" mt={[null, 0, 2]}>
              Name
            </Label>
            <Input
              name="name"
              mb={2}
              variant={errors.name ? 'invalidInput' : 'input'}
              ref={register}
            />
            <ErrorMessage errors={errors} name="name">
              {({ message }) => <Text variant="invalidInput">{message}</Text>}
            </ErrorMessage>
            <Label htmlFor="email" mt={[null, 0, 3]}>
              Email
            </Label>
            <Input
              name="email"
              mb={2}
              variant={errors.email ? 'invalidInput' : 'input'}
              ref={register}
            />
            <ErrorMessage errors={errors} name="email">
              {({ message }) => <Text variant="invalidInput">{message}</Text>}
            </ErrorMessage>
            <Label htmlFor="phone" mt={[null, 0, 3]}>
              Phone number
            </Label>
            <Input
              name="phone"
              mb={2}
              variant={errors.phone ? 'invalidInput' : 'input'}
              ref={register}
            />
            <ErrorMessage errors={errors} name="phone">
              {({ message }) => <Text variant="invalidInput">{message}</Text>}
            </ErrorMessage>
            <Label htmlFor="eventDate" mt={[null, 0, 3]}>
              Event date
            </Label>
            <DatePicker
              onChange={handleChange}
              selected={eventDate}
              showTimeSelect
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="MMM d yyyy h:mm aa"
              customInput={
                <Input
                  mb={2}
                  variant={errors.eventDate ? 'invalidInput' : 'input'}
                />
              }
            />
            <ErrorMessage errors={errors} name="eventDate">
              {() => (
                <Text variant="invalidInput">
                  Event date is a required field.
                </Text>
              )}
            </ErrorMessage>
            <Label htmlFor="details" mt={[null, 0, 3]}>
              Details
            </Label>
            <Textarea
              name="details"
              rows="5"
              variant={errors.details ? 'invalidTextarea' : 'textarea'}
              ref={register}
            />
            <ErrorMessage errors={errors} name="details">
              {({ message }) => (
                <Text variant="invalidTextarea">{message}</Text>
              )}
            </ErrorMessage>
            <Button py={1} px={2} my={2}>
              Submit
            </Button>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

export default BookEvent;
