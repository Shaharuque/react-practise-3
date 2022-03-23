import React from 'react';
///add() and multuply() importing from utilities folder(calculation.js file)
import { add, multuply } from '../../utilities/calculation';



const Shoes = () => {
    const num1=5
    const num2=10
    const total=add(num1,num2)
    const profitMultiply=multuply(num1,num2)
    return (
        <div style={{border:'2px solid grey',margin:'10px', backgroundColor:'cyan'}}>
            <h4>Total shoe sets:{total}</h4>
            <h4>Profit: {profitMultiply}</h4>
        </div>
    );
};

export default Shoes;