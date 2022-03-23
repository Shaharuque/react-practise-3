//use local storage to manage cart data

// const addTolocalStorage=(productid)=>{
//     const productQuantity=localStorage.getItem(productid)

//     //product jodi local storage a thekey tahley product quantity barabo new click a
//     if(productQuantity){
//         //console.log('product exits')
//         let newQuantity=parseInt(productQuantity)+1
//         localStorage.setItem( productid,newQuantity)
//     }
//     //product local storage a na thakley add to cart btn click ar sathey sathey product add hobey quantity 1 shoho local storage a
//     else{
//         localStorage.setItem(productid,1)
//     }
// }

// const addTolocalStorage=(productid)=>{
//     let cart

//     //cart a item thakley local storage thekey seita gather korbey(get the cart)
//     const storedItemStringify=localStorage.getItem('shopping-cart')
//     if(storedItemStringify){
//         //storedItemStringify k object a convert korey cart a stored
//         cart=JSON.parse(storedItemStringify)
//     }
//     //cart a item na thakley just empty object return hobey
//     else{
//         cart={}
//     }


//     //add item quantity
//     const productQuantity=cart[productid]     //object ar particular key diye tar value access 
//         //product jodi local storage a thekey tahley product quantity barabo 
//         if(productQuantity){
//             //console.log('product exits')
//             let newQuantity=productQuantity+1
//             //cart obj ar key tey new value assign
//             cart[productid]=newQuantity
//         }
//         //product local storage a na thakley particular product id ar jnno value 1 set hobey
//         else{
//             cart[productid]=1
//         }

//     localStorage.setItem('shopping-cart',JSON.stringify(cart))
// }


const addTolocalStorage=productid=>{
    //2. ekta empty cart object declare korey nisi
    let cart
     
    //1.local storage thekey stored item get kortese and result will be gathered in stringify(GET THE CART from local storage)
    const storedItem=localStorage.getItem('shopping-cart')
    //if storedItem exists then seita stringify to object a convert korey then cart varible a rakhbo
    if(storedItem){
        cart=JSON.parse(storedItem)
    }
    //jodi local storage a item na thekey tahley empty object return hobey
    else{
        cart={}
    }
    

    //3.add Item quantity to particular productid
    const productQuantity=cart[productid]
    if(productQuantity){
        let newQuantity=productQuantity+1
        cart[productid]=newQuantity
    }
    //productQuantity na pailey particular productid ar jnno quantity 1 korey dibo
    else{
        cart[productid]=1
    }


    //4. localStorage a cart ta set kortese obj to stringify tey convert korey
    localStorage.setItem('shopping-cart',JSON.stringify(cart))
}


//removing particular item from local storage 
const removeItemFromlocalStorage=(productId)=>{
    //getting items from local storage(stringify type a ashbey) 
    const items=localStorage.getItem('shopping-cart')
    //if local storage a items thakley
    if(items){
        //convert stringify to object 
        const cart=JSON.parse(items)
        //checking wheather the particular productid/key based product present in the cart obj of not
        if(productId in cart){ //productID nam ar key cart object a thakey
            delete cart[productId]  //object ar particular key:value deletation
            //local storage a new updated cart object stringify korey set 
            localStorage.setItem('shopping-cart',JSON.stringify(cart))
        }
        else{
            alert('Particular product is not added in the cart yet')
        }
    }
    else{
        alert('no product found in the cart')
    }
    
}

const deleteWholeCart=()=>{
    localStorage.removeItem('shopping-cart')
}

export {addTolocalStorage,removeItemFromlocalStorage,deleteWholeCart}