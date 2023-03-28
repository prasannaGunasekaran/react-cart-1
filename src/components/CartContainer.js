import React from 'react';
import CartItem from './CartItem'
import { useGlobalContext } from '../features/context';

const CartContainer = () => {
const{cart,totalPrice,clearItems}=useGlobalContext();

  if(cart.length===0){
    return(
    <section className='cart'>
      <header>
        <h2 className='title'>your bag</h2>
        <h4 className='title'>currently empty</h4>
      </header>
    </section>
    );
  }
  return (
    <section>
        <h2 className='title'>Your Bag</h2>
      <div className='main'>
        {cart.map((item)=>{
          return(
            <CartItem key={item.id}
            {...item}/>
          );
        })}
      </div>
      <hr />

      <footer className='footer' >
        <div>
          <h4 className='total'>
            total <span>${totalPrice}</span>
          </h4>
        </div>
            <div className='main-cart'>
            <button className='clear-cart' onClick={()=> clearItems()}>clear cart</button>
            </div>
      </footer>
    </section>

  )
}

export default CartContainer