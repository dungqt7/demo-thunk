import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField'

const renderTextField = ({ tooltip, label, input, meta: { touched, invalid, error }, ...custom }) => {
  const textField = (
    <TextField
      label={ label }
      error={ touched && invalid }
      helperText={ touched && error }
      { ...input }
      { ...custom }
      style = {{width: 300}}
    />
  );
  return tooltip ? (
    <Tooltip title={ tooltip }>
      { textField }
    </Tooltip>
  ) : (
    <>
      { textField }
    </>
  )
}

export default renderTextField;