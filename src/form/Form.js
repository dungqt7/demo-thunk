import React, {Component} from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import {  MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import * as FIELDSNAMES from './constant';
import SimpleDynamicTextField from './SimpleDynamicTextField';
import ButtonShowMenus from './ButtonShowMenus';
import IconButton from '@material-ui/core/IconButton';
import ActionDelete from '@material-ui/icons/Clear';
import DynamicForm from './DynamicForm';
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


  
   const renderSubFormFields =  ({ fields}) => {
    const items = [
      {
        type: FIELDSNAMES.SHIP_FROM_FIELD_NAME,
        display: 'Ship from'
      },
      {
        type: FIELDSNAMES.LOCATION_OF_ORDER_RECORDING_FIELD_NAME,
        display: 'Location of order recording'
      },
      {
        type: FIELDSNAMES.LOCATION_OF_ORDER_APPROVAL_FIELD_NAME,
        display: 'Location of order approval'
      },
      {
        type: FIELDSNAMES.BILL_TO_FIELD_NAME,
        display: 'Bill to'
      },
      {
        type: FIELDSNAMES.LOCATION_OF_USE_FIELD_NAME,
        display: 'Location of use'
      },
      {
        type: FIELDSNAMES.LOCATION_OF_SERVICE_PERFORMANCE_FIELD_NAME,
        display: 'Location of service performance'
      }
    ];
    return (
      <div>
     
        <div style = {{  padding: '20px',marginTop:'20px', borderTop: fields.length && '1px solid #e6e6e6',  borderBottom: '1px solid #e6e6e6',}} >
          {
            fields.map((fieldPath, index) => {
              switch (fields.get(index).type) {
                case FIELDSNAMES.SHIP_FROM_FIELD_NAME: {
                  return (
                    <DynamicForm key={ index }   title="Ship from" onRemoveField={ () => fields.remove(index) }/>
                  )
                }
                case FIELDSNAMES.LOCATION_OF_ORDER_RECORDING_FIELD_NAME: {
                  return  <DynamicForm key={ index }   title="Location of order recording" onRemoveField={ () => fields.remove(index) }/>
                }
                case FIELDSNAMES.LOCATION_OF_ORDER_APPROVAL_FIELD_NAME: {
                  return  <DynamicForm key={ index }   title="Location of order approval" onRemoveField={ () => fields.remove(index) }/>
                }
                case FIELDSNAMES.BILL_TO_FIELD_NAME: {
                  return  <DynamicForm key={ index }   title="Bill to" onRemoveField={ () => fields.remove(index) }/>
                }
                case FIELDSNAMES.LOCATION_OF_USE_FIELD_NAME : {
                  return  <DynamicForm key={ index }   title="Location of use" onRemoveField={ () => fields.remove(index) }/>
                }
                case FIELDSNAMES.LOCATION_OF_SERVICE_PERFORMANCE_FIELD_NAME : {
                  return  <DynamicForm key={ index }   title="Location of service performance" onRemoveField={ () => fields.remove(index) }/>
                }
                default: {
                  return <h1>''</h1>
                }
              }
              
            })
              
          }
        </div>
        <div style={ { padding: '20px' } }>
          <ButtonShowMenus
            label="Add Calculation Set-up Items"
            items={ items }
            onItemSelected={ (item) => {
              fields.push({ type: item.type })
            } }
           
            itemsSelected={fields.getAll()?fields.getAll(): []}
          />
        </div>

      </div>
    )
   }
  
  
 
  class DemoForm extends Component  {
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
                
                <MenuItem value={ "USA" }>USA</MenuItem>
               <MenuItem value={ "USA" }>UK</MenuItem>
               <MenuItem value={ "USA" }>VN</MenuItem>
             </Field>
           </div>
           <div style = {{marginLeft: 20}}>
             <Field
               name="state"
               component={renderSelectField}
               label="State"
               style = {{marginLeft: 12}}
             >
                <MenuItem value={ "Alabama" }>Alabama</MenuItem>
                <MenuItem value={ "Alaska" }>Alaska</MenuItem>
                <MenuItem value={ "Connecticut" }>Connecticut</MenuItem>
                <MenuItem value={ "Louisiana" }>Louisiana</MenuItem>
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
               <MenuItem value={ "USA" }>USA</MenuItem>
               <MenuItem value={ "USA" }>UK</MenuItem>
               <MenuItem value={ "USA" }>VN</MenuItem>
             </Field>
           </div>
           <div style = {{marginLeft: 20}}>
             <Field
               name="city"
               component={renderSelectField}
               label="City"
               style = {{marginLeft: 12}}
             >
               <MenuItem value={ "USA" }>USA</MenuItem>
               <MenuItem value={ "USA" }>UK</MenuItem>
               <MenuItem value={ "USA" }>VN</MenuItem>
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
               <MenuItem value={ "USA" }>USA</MenuItem>
               <MenuItem value={ "USA" }>UK</MenuItem>
               <MenuItem value={ "USA" }>VN</MenuItem>
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
               <Button style = {{backgroundColor: '#E1E4E9'}} onClick={this.props.reset}>
                 Reset
               </Button>
               <Button style = {{backgroundColor: '#E1E4E9', marginLeft: 6, width: 150}} >
                 FIND GEO CODES
               </Button>
           </div>
            
         </div>
         
       <div>
      
       
         {/* <button type="submit" disabled={this.props.submitting}>
           Submit
         </button>
         <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
           Clear Values
         </button> */}
            <div>
              <FieldArray  name={ FIELDSNAMES.ADDITIONAL_LOCATION_FIELDS_NAME }
                  component={ renderSubFormFields }/>
            </div>
       </div>
       
      
     </form>
        
       );
     }
  }

export default reduxForm({
    form: 'demoForm',
  })(DemoForm);