import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './formulario.css'; 


const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'El nombre es obligatorio';
  }
  if (!values.email) {
    errors.email = 'El email es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email inválido';
  }
  return errors;
};

const onSubmit = (values) => {
  console.log('Formulario enviado con los siguientes datos:', values);
};

const ValidatedForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Nombre</label>
      <Field name="name" component="input" type="text" />
    </div>
    <div>
      <label>Email</label>
      <Field name="email" component="input" type="email" />
    </div>
    <button type="submit">Enviar</button>
  </form>
);

export default reduxForm({ form: 'validatedForm', validate })(ValidatedForm);
