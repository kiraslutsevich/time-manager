import React from 'react';
import { useFormik } from 'formik';
import YupObject from 'yup/lib/object';
import YupString from 'yup/lib/string';

import Box from '@mui/material/Box';

import authApi from '../../../api/authApi';
import StyledSignInPage from './SignInPage.styles';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


type PropsType = {
  //
};

const SignInPage: React.FC<PropsType> = (props) => {
  const validationSchema = new YupObject().shape({
    email: new YupString().required().email(),
    password: new YupString().required(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await authApi.signIn({ ...values })
      } catch (err) {
        console.log(err);
      } finally {
        formik.resetForm();
      }
    },
  });
  return (
    <StyledSignInPage onSubmit={formik.handleSubmit}>
      <Box
        border="1px solid black"
        padding="20px"
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <TextField
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          id="email"
          name="email"
        />
        <TextField
          label="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          id="password"
          name="password"
        />
        <Button
          type="submit"
        >
          Log in
        </Button>
      </Box>
    </StyledSignInPage>
  );
};

export default SignInPage;
