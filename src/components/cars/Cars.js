import React from 'react';
///add() and multuply() importing from utilities folder(calculation.js file)
import { add, multuply } from '../../utilities/calculation';




const Cars = () => {
    const noOfUsedCar=50
    const noOfNewCar=12
    //add() can be used in this component as well if i want
    const totalCars=add(noOfUsedCar,noOfNewCar)
    const totalExpectedValue=multuply(totalCars,50000)
    
    return (
        <div style={{backgroundColor:'grey',border:'2px solid purple', margin:'10px'}}>
           <h3>No of cars in the garage: {totalCars}</h3> 
           <h3>Expected sell: {totalExpectedValue}</h3>
        </div>
    );
};

export default Cars;