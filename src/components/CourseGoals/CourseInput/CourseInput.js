import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid,setisValid]=useState(true);


  const goalInputChangeHandler = event => {
   
  
    if(event.target.value.trim().length>0){
      setisValid(true);
      
    }
    else{
      setisValid(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setisValid(false);
      return;
    } 
    props.onAddGoal(enteredValue);
   
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?'invalid': ''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" style={{backgroundColor:isValid?'#8b005d':'red'}}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
