import React from 'react';
import { reduxForm, Field } from 'redux-form';
const required = value => (value ? '' :  'Required!');
const longEnough = value =>
  value && value.length >= 3  ? undefined : 'Too short!';
  const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength10 = maxLength(10)
const email = value =>
  value && /(.+)@(.+){2,}\.(.+){2,}/i.test(value)
    ? undefined
    : 'Invalid email!';
  
const foods = [ '','pizza', 'tacos', 'nachos', 'hot dogs'];
const newField = ({
    input,
    type,
    placeholder,
    id,
    meta: { touched, error },
    ...rest
  }) => {
    return (
      <div>
        <input {...input}  placeholder={placeholder} type={type} id={id} />
        {touched && error && <p style={{ color: 'red' }}>{error}</p>} 

      </div>
    );
  };
  const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
    <div>
      <label>{label}</label>
      <div>
        <select {...input}>
         {children}
        </select>
        {touched && error && <p style={{ color: 'red' }}>{error}</p>} 
      </div>
    </div>
  )
const DemoForm  = ({handleSubmit,reset, pristine, submitting, valid}) => {
  return (
    <form onSubmit = {handleSubmit(val => console.log(val))}>
        <label htmlFor="first-name">Your first name:</label>
        <Field
                name="firstName"
                type="text"
                component={newField}
                id="first-name"
                placeholder="Benedict"
                validate={[required, longEnough, maxLength10]}
        />
      <label htmlFor="food-choice">Food choice</label>
      
      <Field name="foodChoice" id="food-choice"  component= {renderSelectField} validate={[required]}  >
         { foods.map(food => <option  key={food} value={food}>{food}</option>) }
      </Field>
      <label htmlFor="email">Email:</label>
      <Field
            name="email"
            type="email"
            component={newField}
            id="email"
            placeholder="benedict@alligator.io"
            validate={[required, email]}
      />
      <button type="submit" disabled={!valid || pristine || submitting}>
        Submit
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </form>
  );
};
export default reduxForm({
    form: 'demoForm',
  })(DemoForm);