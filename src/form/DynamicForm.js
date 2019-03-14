import React from 'react';
import { Field } from 'redux-form';
import IconButton from '@material-ui/core/IconButton';
import ActionDelete from '@material-ui/icons/Clear';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {  reduxForm } from 'redux-form'
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
 
const DynamicForm = props => {
    const {  reset,onRemoveField, title } = props
    return (
        <div style = {{display:"flex", width: 248}} >
                <div>
                    <div style = {{display:"flex",justifyContent:"flex-end"}}>
                        <IconButton
                            size="medium"
                            onClick={onRemoveField }
                        >
                            <ActionDelete />
                        </IconButton> 
                    </div>
                    <h4 style = {{textAlign: "left"}}>{title}</h4>  
                    <div style = {{display: "flex"}}>
                        <Field
                            name="clubName"
                            type="text"
                            component={renderTextField}
                            label="Geo Ceo"
                            style = {{width: "200px"}}
                        />
                        <Button style = {{backgroundColor: '#E1E4E9', marginLeft:12}}   >
                            Check
                        </Button>
                        <Button style = {{backgroundColor: '#E1E4E9', marginLeft:12}} onClick = {reset} >
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
    )
  }
export default reduxForm({
    form: 'dynamicForm', // a unique identifier for this form
  })(DynamicForm)