import React from 'react';
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

import Layout from '../components/layout';
import SEO from '../components/seo';

const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const bookEventSchema = object().shape({
  name: string().required(),
  email: string()
    .email()
    .required(),
  phone: string().matches(phoneRegEx),
  eventDate: date().required()
});

const BookEvent = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema: bookEventSchema
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Layout>
      <SEO title="Book an event" />
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
            <Input name="name" mb={2} ref={register} />
            <ErrorMessage errors={errors} name="name">
              {({ message }) => <Text>{message}</Text>}
            </ErrorMessage>
            <Label htmlFor="email" mt={[null, 0, 3]}>
              Email
            </Label>
            <Input name="email" type="email" mb={2} ref={register} />
            <ErrorMessage errors={errors} name="email">
              {({ message }) => <Text>{message}</Text>}
            </ErrorMessage>
            <Label htmlFor="phone" mt={[null, 0, 3]}>
              Phone number
            </Label>
            <Input name="phone" type="tel" mb={2} ref={register} />
            <ErrorMessage errors={errors} name="phone">
              {({ message }) => <Text>{message}</Text>}
            </ErrorMessage>
            <Label htmlFor="eventDate" mt={[null, 0, 3]}>
              Event date
            </Label>
            <Input name="eventDate" mb={2} ref={register} />
            <ErrorMessage errors={errors} name="eventDate">
              {({ message }) => <Text>{message}</Text>}
            </ErrorMessage>
            <Label htmlFor="details" mt={[null, 0, 3]}>
              Details
            </Label>
            <Textarea name="details" rows="5" mb={2} ref={register} />
            <ErrorMessage errors={errors} name="details">
              {({ message }) => <Text>{message}</Text>}
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
