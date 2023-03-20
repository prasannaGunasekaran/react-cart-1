import React from 'react';
import { useGlobalContext } from '../features/context';


const Navbar = () => {
    const {totalQuantity}=useGlobalContext();
  return (
    <nav className='nav'>
    <div className='nav-center'>
        <h3>useReducer</h3>
        </div>
        <div className='nav-container'>
          <p className='cart-item'>{`cart-item - ${totalQuantity}`}</p>
        </div>
    </nav>
  )
}

export default Navbar