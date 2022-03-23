
//ai file a ekta add function declare kortese

const add=(num1,num2)=>{
    const newnumber=num1+num2
    return newnumber
}

const multuply=(num1,num2)=>{
    const total= num1*num2
    return total
}

//reduce concept in array and object
// const numbers=[1,2,4,3,5]
// const itemSumReducer=(previous,current)=>previous+current
// const total=numbers.reduce(itemSumReducer,0)

// const obj=[
//     {id:1,price:200},
//     {id:2,price:200},
//     {id:3,price:200},
// ]
// const itemSumReducer=(previous,current)=>previous+current.price
// const total=obj.reduce(itemSumReducer,0)

const getTotalPrice=(products)=>{
    const itemSumReducer=(previous,current)=>previous+current.price
    const totalSum=products.reduce(itemSumReducer,0)
    return totalSum
}


// //export default use korey single ekta  add() ta export kortese
// export default add

//for exporting multiple function/item [export{function(),function()} aivabey likhtey hoy]
export {add,multuply,getTotalPrice as totalSell} //getTotalPrice k onno nam eo export kortey pari