import React,{useEffect,useContext,useReducer} from "react";
//import CartItem from "../components/CartItem";

import cartItems from '../data'
import reducer from '../reducers/reducer';

const AppContext=React.createContext();

const initialState={
    cart:cartItems,
    totalQuantity:0,
    totalPrice:0,
}

const AppProvider=({children})=>{

    const[state,dispatch]=useReducer(reducer,initialState )
    
    const clearItems=()=>{
        dispatch({type:'CLEAR_ITEMS'})
    }

    const removeItem=(id)=>{
        dispatch({type:'REMOVE_ITEM', payload:id})
    }

    const increaseItem=(id)=>{
        dispatch({type:'PLUS_ITEM',payload:id})
    }

    const decreaseItem=(id)=>{
        dispatch({type:'MINUS_ITEM',payload:id})
    }

    const calculateTotals=()=>{
        dispatch({type:'CALCULATE_TOTALS'})

    }

    useEffect(()=>{
        calculateTotals()
    },[state.cart])
    return <AppContext.Provider value={{...state,clearItems,removeItem,increaseItem,decreaseItem}}>
{children}
    </AppContext.Provider>
};

export const useGlobalContext=()=>{
    return useContext(AppContext)
};

export {AppContext,AppProvider}