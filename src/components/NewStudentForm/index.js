import { Form, Input, useField } from '@rocketseat/unform';
import React, { useRef, useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createNewStudentRequest } from '~/store/modules/student/student.actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  birth: Yup.date().required('Birth is required'),
  weight: Yup.string().required('Weight is required'),
  height: Yup.string().required('Height is required'),
});

export default function NewStudentForm({ handleCloseModal }) {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({});
  const [isValid, setIsValid] = useState(false);

  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField('birth');

  useEffect(() => {
    async function checkDirtyForm() {
      setIsValid(await schema.isValid(fields));
    }
    checkDirtyForm();
  }, [fields]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.birth',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  async function handleSubmit(data) {
    dispatch(createNewStudentRequest(data));
    handleCloseModal();
  }

  function handleCancel() {
    handleCloseModal();
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  }
  function handleOnChangeDate(date) {
    setFields({ ...fields, birth: date });
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input name="name" placeholder="Name" onChange={handleOnChange} />
        <label htmlFor="email">Email</label>
        <Input name="email" placeholder="Email" onChange={handleOnChange} />
        <div>
          <div className="column">
            <label htmlFor="birth">Birth</label>
            {/* <Input
              name="birth"
              placeholder="dd/mm/yyyy"
              onChange={handleOnChange}
            /> */}
            <DatePicker
              name={fieldName}
              value={fields.birth}
              onChange={handleOnChangeDate}
              ref={ref}
            />
            {error && <span>{error}</span>}
          </div>
          <div className="column">
            <label htmlFor="weight">Weight</label>
            <Input
              name="weight"
              placeholder="in Kg"
              onChange={handleOnChange}
            />
          </div>
          <div className="column">
            <label htmlFor="height">Height</label>
            <Input
              className="last-item"
              name="height"
              placeholder="in Meters"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="form-buttons">
          <button id="cancel" type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button id="submit" type="submit" disabled={!isValid}>
            Confirm
          </button>
        </div>
      </Form>
    </Container>
  );
}

NewStudentForm.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
