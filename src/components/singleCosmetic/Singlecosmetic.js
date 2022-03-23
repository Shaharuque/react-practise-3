import React from 'react';
import { addTolocalStorage, deleteWholeCart, removeItemFromlocalStorage } from '../../localStorageManage/localStorage';
import './Singlecosmetic.css'

const Singlecosmetic = (props) => {
    const {name,price,productId}=props

    const addToCart=(productId)=>{
        //console.log('clicked product id:',productId)
        // //setting item to local storage(btn click korley item store hobey local storage a )
        // localStorage.setItem(productId,1)
        addTolocalStorage(productId)
    }

    const removeFromCart=(productId)=>{
        //console.log('removed',productId)
        removeItemFromlocalStorage(productId)
    }

    const removeWholeCart=()=>{
        deleteWholeCart()
    }

    return (
        <div className='cosmetic-div-style'>
           <h1>Name:{name}</h1> 
           <h4>Price:{price}</h4>
           {/*event handler with single/multiple parameter, aita arrow funtion use korey event handler function ta call kora lagbey (normally js a event handling ar moton kora jabey na)*/}
           <button onClick={()=>addToCart(productId)} style={{borderRadius:'10px', backgroundColor:'purple',color:'white',margin:'10px'}}>Add to cart</button>
           <button onClick={()=>removeFromCart(productId)} style={{borderRadius:'10px', backgroundColor:'purple',color:'white',margin:'10px'}}>Remove Item</button>
           <button onClick={()=>removeWholeCart()} style={{borderRadius:'10px', backgroundColor:'purple',color:'white',margin:'10px'}}>DELETE CART</button>
        </div>
    );
};

export default Singlecosmetic;