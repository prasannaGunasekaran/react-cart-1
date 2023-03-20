

const reducer=(state,action)=>{
    switch(action.type){
        case 'CLEAR_ITEMS':
            return{...state,cart:[]}

        case 'REMOVE_ITEM':
            const id=action.payload;
            const remainingItems=state.cart.filter((item)=>item.id !==id);
            return{...state,cart:remainingItems}


        case 'PLUS_ITEM':
            const updatedItems=state.cart.map((item)=>{
                if(item.id===action.payload){
                    const updatedItem={...item,quantity:item.quantity++}
                return updatedItem;
            }
            else{
                return item;
            }
            })
            return{...state,cart:updatedItems}


    case 'MINUS_ITEM':
        const updatedItemsTwo=state.cart.map((item)=>{
            if(item.id===action.payload){
                const updatedItemTwo={...item,quantity:item.quantity--}
                return updatedItemTwo;
            }
            else{
                return item;
            }
            })
            .filter((item)=> item.quantity >=1);
            return{...state,cart:updatedItemsTwo}

    case 'CALCULATE_TOTALS':
        let totalQuantity=0;
        let totalPrice=0;
        
        state.cart.forEach((item)=>{
            const quantity=item.quantity;
            const price=item.price;
            totalQuantity=totalQuantity+quantity;
            totalPrice=totalQuantity*price
        });
        return{...state,totalQuantity:totalQuantity,totalPrice:totalPrice.toFixed(2)}
      
        default:
            return{...state}    
    }
    //return{...state};
}
export default reducer;