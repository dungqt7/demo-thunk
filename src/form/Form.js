import React, {Component} from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import {  MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
const styleul = {
  listStyle: 'none'
}
const required = value => (value || typeof value === 'number' ? undefined : 'Required') 
const number = value => value && !/^[0-9]+$/i.test(value) ? 'Must be number' : undefined
const mount =  value =>  (value.split('.')[0]).length > 5  ? 'Wrong': undefined;
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
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
     <InputLabel>{label}</InputLabel>
    <Select 
      {...input}
      {...custom}
      style = {{width:480}}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}
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
       <div style = {{display: "flex"}}>
        <AddIcon style = {{marginTop:93}} className = "addButton"/>
          <Button  color="primary" className = "addArray" onClick={() => fields.push({})} style = {{marginTop: 82, borderRadius:0, width:232, marginBottom: 9}}>
            Add Member
            <svg className="MuiSvgIcon-root-158 MuiSelect-icon-157" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M7 10l5 5 5-5z"></path></svg>
        </Button> 
       </div>
        
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
  class DemoForm extends Component  {
    handleChange = (e) => {
      this.setState({ value: e.target.value });
    }
     render() {
       return(
        <form onSubmit = {this.props.handleSubmit(val => console.log(val))}  style={{float: "left"}} >
        <div style = {{display:'flex'}}>
           <Field
               name="clubName"
               type="text"
               component={renderTextField}
               label="Geo Ceo"
               validate={[required,number,mount]}
             />
             <Button style = {{backgroundColor: '#E1E4E9', marginLeft:12}}   >
               Check
             </Button>
             <Button style = {{backgroundColor: '#E1E4E9', marginLeft:12}} onClick={this.props.reset} >
               Reset
             </Button>
        </div>
         <div style = {{display: "flex"}}>
           <div>
             <Field
               name="country"
               component={renderSelectField}
               label="Country"
               onChange={this.handleChange}
             >
               <option value="" />
               <option value={'USA'}>USA</option>
               <option value={'UK'}>UK</option>
               <option value={'VN'}>VN</option>
             </Field>
           </div>
           <div style = {{marginLeft: 20}}>
             <Field
               name="state"
               component={renderSelectField}
               label="State"
               style = {{marginLeft: 12}}
             >
               <option value="" />
               <option value={'Alabama'}> Alabama</option>
               <option value={'Alaska'}>Alaska</option>
               <option value={'Connecticut'}> Connecticut</option>
               <option value={'Louisiana'}>  Louisiana</option>
             </Field>
           </div>
          
         </div>
         <div style = {{display: "flex"}}>
           <div>
             <Field
               name="county"
               component={renderSelectField}
               label="County"
             >
               <option value="" />
               <option value={'USA'}>USA</option>
               <option value={'UK'}>UK</option>
               <option value={'VN'}>VN</option>
             </Field>
           </div>
           <div style = {{marginLeft: 20}}>
             <Field
               name="city"
               component={renderSelectField}
               label="City"
               style = {{marginLeft: 12}}
             >
               <option value="" />
               <option value={'USA'}>USA</option>
               <option value={'UK'}>UK</option>
               <option value={'VN'}>VN</option>
             </Field>
           </div>
         </div>
         <div style = {{display: "flex"}}>
           <div>
             <Field
               name="district"
               component={renderSelectField}
               label="District"
             >
               <option value="" />
               <option value={'USA'}>USA</option>
               <option value={'UK'}>UK</option>
               <option value={'VN'}>VN</option>
             </Field>
           </div>
           <div style = {{marginLeft: 20}}>
             <Field
               name="street"
               type="text"
               component={renderTextField}
               label="Street #"
               style = {{width:100}}
             />
           </div>
           <div style = {{marginLeft: 14}}>
             <Field
               name="streetName"
               type="text"
               component={renderTextField}
               label="Street Name"
               style = {{width:368}}
             />
           </div>
           
         </div>
         <div style = {{display: "flex", justifyContent: " space-between"}}>
           <div style = {{}}>
               <Field
                 name="zipCode"
                 type="text"
                 component={renderTextField}
                 label="ZIP Code"
                 style = {{width:150}}
               />
               <Field
                 name="ext"
                 type="text"
                 component={renderTextField}
                 label="+4 Ext"
                 style = {{width:100, marginLeft: 6}}
               />
           </div>
           <div style = {{marginTop: 16, marginRight: 0}}>
               <Button style = {{backgroundColor: '#E1E4E9'}}>
                 Check
               </Button>
               <Button style = {{backgroundColor: '#E1E4E9', marginLeft: 6, width: 150}} >
                 FIND GEO CODES
               </Button>
           </div>
            
         </div>
         <div  className = "borderFooter"></div>
        
            
         
       
       <div>
       <div style = {{display:"flex", justifyContent: "flex-end"}}>
         <FieldArray name="members" component={renderMembers} />
       </div>
       
         <button type="submit" disabled={this.props.submitting}>
           Submit
         </button>
         <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
           Clear Values
         </button>
       
       </div>
     </form>
       );
     }
  }

export default reduxForm({
    form: 'demoForm',
  })(DemoForm);