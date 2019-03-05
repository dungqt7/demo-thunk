import React from 'react';
import {inc} from './action';
import {dec} from './action';
import { connect } from "react-redux";
export const Age =  (props) => {
    return (
        <div>
              <div> age = {props.age} </div>
              <button onClick={() => props.onInc()}>Inc</button>{" "}
              <button onClick={() => props.onDec()}>Dec</button>{" "}
        </div>
     
      
    );
};
function mapStateToProps(state) {
    return {
      age: state.ages
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      onInc: () => {
        dispatch(inc(1));
      },
      onDec: () => {
        dispatch(dec(1));
      }
    };
  }
  export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Age)