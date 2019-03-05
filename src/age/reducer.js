import {initialState} from '../initialState';
const ages = (state = initialState.age, action) => {
    switch (action.type) {
      case 'INC':
        return state =  state + 1;
      case 'DEC':
      return state =  state - 1;
  
      default:
      return state;
    }
  };
  
  export default ages;