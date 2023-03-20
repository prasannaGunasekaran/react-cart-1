import React from 'react';
import { useGlobalContext } from '../features/context';
const CartItem = ({id,img,title,price,quantity}) => {
  const {removeItem,increaseItem,decreaseItem}=useGlobalContext();
  return <article className='article'>
    <div className='details-container'>
    <img src={img} alt={title}/>
      <h4>{title}</h4>
      <h4>{price}</h4>
      <button className='remove' onClick={()=>removeItem(id)}>
        remove
      </button>
      </div>
      <div className='btn'>
        <button className='minus' onClick={()=>decreaseItem(id)}>
          minus
        </button>
       <p>{quantity}</p>
        <button className='plus' onClick={()=>increaseItem(id)}>
          plus
        </button>
      </div>

  </article>
}

export default CartItem