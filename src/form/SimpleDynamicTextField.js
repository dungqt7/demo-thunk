import React from 'react';
import { Field } from 'redux-form';
import IconButton from '@material-ui/core/IconButton';
import ActionDelete from '@material-ui/icons/Clear';
import renderTextField from './renderTextField';
export default function SimpleDynamicTextField({ title, fieldName, labelInput, onRemoveField, ...customs }) {
    return (
        <div style = {{display:"flex", width: 248, 
       }} >
            <Field
              name={ fieldName }
              component={ renderTextField }
              { ...customs }
              label={ labelInput }
            />
        <div>
          <IconButton
            size="medium"
            onClick={ onRemoveField }
          >
            <ActionDelete />
          </IconButton>
        </div>
        
      </div>
    );
  }