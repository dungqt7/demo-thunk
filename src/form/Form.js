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
import * as FIELDSNAMES from './constant';
import SimpleDynamicTextField from './SimpleDynamicTextField';
import ButtonShowMenus from './ButtonShowMenus';
import IconButton from '@material-ui/core/IconButton';
import ActionDelete from '@material-ui/icons/Clear';
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
        display: 'Location of order recording field name'
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
                  <div  key={index}>
                    <div style = {{display:"flex", width: 248, 
                     }} >
                          <div>
                              <div style = {{display:"flex",justifyContent:"flex-end"}}>
                                    <IconButton
                                        size="medium"
                                        onClick={() => fields.remove(index)}
                                    >
                                        <ActionDelete />
                                  </IconButton> 
                              </div>
                              <h4 style = {{textAlign: "left"}}>Ship from</h4>  
                              <div style = {{display: "flex"}}>
                                  <Field
                                        name="clubName"
                                        type="text"
                                        component={renderTextField}
                                        label="Geo Ceo"
                                        validate={[required,number,mount]}
                                        style = {{width: "200px"}}
                                    />
                                    <Button style = {{backgroundColor: '#E1E4E9', marginLeft:12}}   >
                                        Check
                                    </Button>
                                    <Button style = {{backgroundColor: '#E1E4E9', marginLeft:12}} >
                                        Reset
                                    </Button>
                              </div>
                              <div style = {{display: "flex"}}>
                                    <div>
                                        <Field
                                          name="country"
                                          component={renderSelectField}
                                          label="Country"
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
                              <div>
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
                                    Reset
                                  </Button>
                                  <Button style = {{backgroundColor: '#E1E4E9', marginLeft: 6, width: 150}} >
                                    FIND GEO CODES
                                  </Button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>   
                  )
                }
                case FIELDSNAMES.LOCATION_OF_ORDER_RECORDING_FIELD_NAME: {
                  return <SimpleDynamicTextField
                    key={ index }
                    labelInput="Location of order recording"
                    title="Location of order recording"
                    fieldName={ `${ fieldPath }.Locationoforderecording` }
                    onRemoveField={ () => fields.remove(index) }
                    type="text"
                  />
                }
                case FIELDSNAMES.LOCATION_OF_ORDER_APPROVAL_FIELD_NAME: {
                  return <SimpleDynamicTextField
                    key={ index }
                    labelInput="Location of order approval"
                    title="Location of order approval"
                    fieldName={ `${ fieldPath }.Locationoforderapproval` }
                    onRemoveField={ () => fields.remove(index) }
                  />
                }
                case FIELDSNAMES.BILL_TO_FIELD_NAME: {
                  return <SimpleDynamicTextField
                    key={ index }
                    labelInput="Bill to"
                    title="Bill to"
                    fieldName={ `${ fieldPath }.Billto` }
                    onRemoveField={ () => fields.remove(index) }
                  />;
                }
                case FIELDSNAMES.LOCATION_OF_USE_FIELD_NAME : {
                  return <SimpleDynamicTextField
                  key={ index }
                  labelInput="Location of use"
                  title="Location of use"
                  fieldName={ `${ fieldPath }.Locationofuse` }
                  onRemoveField={ () => fields.remove(index) }
                />;
  
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
  
  const renderSetupCardAdditionalFields = ({ fields, meta: { error, submitFailed } }) => {
    const items = [
      {
        type: FIELDSNAMES.SHIP_FROM_FIELD_NAME,
        display: 'Ship from'
      },
      {
        type: FIELDSNAMES.LOCATION_OF_ORDER_RECORDING_FIELD_NAME,
        display: 'Location of order recording field name'
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
      }
    ];
    return (
      <div>
        <div>
          { submitFailed && error && <span>{ error }</span> }
        </div>
        <div style = {{  padding: '20px',marginTop:'20px', borderTop: fields.length && '1px solid #e6e6e6',  borderBottom: '1px solid #e6e6e6',}} >
          {
            fields.map((fieldPath, index) => {
              switch (fields.get(index).type) {
                case FIELDSNAMES.SHIP_FROM_FIELD_NAME: {
                  return (<SimpleDynamicTextField
                    key={ index }
                    labelInput="Ship from"
                    title="Ship from"
                    fieldName={ `${ fieldPath }.Shipfrom` }
                    onRemoveField={ () => fields.remove(index) }
                    type="text"
                  />)
                }
                case FIELDSNAMES.LOCATION_OF_ORDER_RECORDING_FIELD_NAME: {
                  return <SimpleDynamicTextField
                    key={ index }
                    labelInput="Location of order recording"
                    title="Location of order recording"
                    fieldName={ `${ fieldPath }.Locationoforderecording` }
                    onRemoveField={ () => fields.remove(index) }
                    type="text"
                  />
                }
                case FIELDSNAMES.LOCATION_OF_ORDER_APPROVAL_FIELD_NAME: {
                  return <SimpleDynamicTextField
                    key={ index }
                    labelInput="Location of order approval"
                    title="Location of order approval"
                    fieldName={ `${ fieldPath }.Locationoforderapproval` }
                    onRemoveField={ () => fields.remove(index) }
                  />
                }
                case FIELDSNAMES.BILL_TO_FIELD_NAME: {
                  return <SimpleDynamicTextField
                    key={ index }
                    labelInput="Bill to"
                    title="Bill to"
                    fieldName={ `${ fieldPath }.Billto` }
                    onRemoveField={ () => fields.remove(index) }
                  />;
                }
                case FIELDSNAMES.LOCATION_OF_USE_FIELD_NAME : {
                  return <SimpleDynamicTextField
                  key={ index }
                  labelInput="Location of use"
                  title="Location of use"
                  fieldName={ `${ fieldPath }.Locationofuse` }
                  onRemoveField={ () => fields.remove(index) }
                />;
  
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