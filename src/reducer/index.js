import {combineReducers} from 'redux';
import ages from '../age/reducer';
import { reducer as formReducer } from 'redux-form';
const appReducer = combineReducers ({
    ages,
    form: formReducer
});
export default appReducer;