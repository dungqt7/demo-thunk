import React from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {  MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
const styleul = {
  listStyle: 'none'
}
const validate = values => {
      const errors = {}
      const requiredFields = [
        'clubName',
        'firstName',
        'lastName',
       
      ] 
      const emailFields = [
        'clubName',
      ]
      requiredFields.forEach(field => {
        if (!values[field]) {
          errors[field] = 'Required'
        }
      })
      emailFields.forEach(email => {
        if (values[email] &&  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[email])) {
          errors[email] = 'Invalid email address'
        }
      })

      
      return errors
 }
    
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
         <p style={{ color: 'red' }}>{error}</p>}
    </div>
  </div>
)
const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)
const renderPicker = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
  <DatePicker
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    value = {input.value !== ''? new Date(input.value) : null}
  />
   </MuiPickersUtilsProvider>
)

  const renderHobbies = ({ fields, meta: { error } }) => (
    <ul style = {styleul}>
      <li>
        <button type="button" onClick={() => fields.push()}>
          Add Hobby
        </button>
      </li>
      {fields.map((hobby, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Hobby"
            onClick={() => fields.remove(index)}
          />
          <Field
            name={hobby}
            type="text"
            component={renderField}
            label={`Hobby #${index + 1}`}
          />
        </li>
      ))}
      {error && <li className="error">{error}</li>}
    </ul>
  )
  const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
    <ul style = {styleul}>
      <li style = {styleul}>
        {/* <button type="button" onClick={() => fields.push({})}>
          Add Member
        </button> */}
        <Button  color="primary" onClick={() => fields.push({})}>
          Add Member
       </Button> 
        {submitFailed && error && <span>{error}</span>}
      </li>
      {fields.map((member, index) => (
        <li key={index} style = {styleul}>
           <Button  color="secondary" onClick={() => fields.remove(index)}>
              <DeleteIcon />
           </Button> 
          <h4>Member #{index + 1}</h4>
          <Field
            name= "firstName"
            type="text"
            component={renderTextField}
            label="First Name"
          />
          <Field
            name = "lastName"
            type="text"
            component={renderTextField}
            label="Last Name"
          />
          <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
        </li>
      ))}
    </ul>
  )
  
const DemoForm  = ({handleSubmit,reset, pristine, submitting, valid}) => {
  return (
    <form onSubmit = {handleSubmit(val => console.log(val))}>
         <Field
          name="clubName"
          type="text"
          component={renderTextField}
          label="Club Name"
        />
      <FieldArray name="members" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      
      </div>
    </form>
  );
};
export default reduxForm({
    form: 'demoForm',
    validate
  })(DemoForm);