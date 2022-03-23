import React, { useEffect, useState } from 'react';
import { totalSell } from '../../utilities/calculation';
import Singlecosmetic from '../singleCosmetic/Singlecosmetic';

const Cosmetics = () => {
    //making fake data (way-1) hard coded data
//     const cosmetics=[
//         {id:1,name:'lipstick',price:150},
//         {id:2,name:'lipbum',price:120},
//         {id:3,name:'shari',price:1500},
//         {id:4,name:'nail-polish',price:450},
//         {id:5,name:'eye-shadow',price:750},
// ]
    //making fake data way-2(json-generator.com thekey fake data generate korsi)
    // const cosmetics=[
    //     {
    //       "_id": "623a167a34f9ede9e8d42ea1",
    //       "index": 0,
    //       "price": "$2,920.59",
    //       "company": "DAYCORE"
    //     },
    //     {
    //       "_id": "623a167a0708c326269118db",
    //       "index": 1,
    //       "price": "$2,704.27",
    //       "company": "UNDERTAP"
    //     },
    //     {
    //       "_id": "623a167af6f94b44d06662c4",
    //       "index": 2,
    //       "price": "$1,917.53",
    //       "company": "ENDICIL"
    //     },
    //     {
    //       "_id": "623a167a0cfe112cac94a868",
    //       "index": 3,
    //       "price": "$2,699.25",
    //       "company": "MEDICROIX"
    //     },
    //     {
    //       "_id": "623a167a15b1ca4b84b88e26",
    //       "index": 4,
    //       "price": "$3,283.03",
    //       "company": "VIDTO"
    //     },
    //     {
    //       "_id": "623a167a3a2a1118010b429b",
    //       "index": 5,
    //       "price": "$1,180.59",
    //       "company": "PORTALINE"
    //     },
    //     {
    //       "_id": "623a167ae971db7d6067a58f",
    //       "index": 6,
    //       "price": "$2,125.54",
    //       "company": "URBANSHEE"
    //     }
    //   ]

    //way-3 to get fake data is from 3rd party api and store that data in the public folder using the name data.json
    const [cosmetics,setCosmetics]=useState([])

    //using useEffect() to fetch data and set data to cosmetics using setCosmetics(state update)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data)) //received date will be stored to cosmetics
    },[])
    
    //console.log(cosmetics)

    const total=totalSell(cosmetics)
    //console.log(total)
    return (
        <div style={{border:'2px solid blue',margin:'20px'}}>
            <p>Total Expected SELL of cosmetics: {total}</p>
            {   //key ta pathano hocchey react aar performance baranor jnno tachara ar kono kaj nai
                cosmetics.map(cosmetic=><Singlecosmetic key={cosmetic.index} productId={cosmetic._id} name={cosmetic.company} price={cosmetic.price}></Singlecosmetic>)
            }
        </div>
    );
};

export default Cosmetics;