import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/auth.actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Inform 6 characters min')
    .required('Password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />
      <h1>GYMPOINT</h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>E-MAIL</strong>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
        />
        <strong>PASSWORD</strong>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
        />

        <button type="submit">{loading ? 'Loading' : 'Sign In'}</button>
      </Form>
    </>
  );
}
