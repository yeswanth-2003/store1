import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './redux'; 

function Cart(){

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

return(
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',padding:'20px 40px',flexDirection:'column'}}>
        <h2 >Shopping CART</h2>
        <button className="btn btn-primary" onClick={() => dispatch(clearCart())} style={{marginBottom:'20px'}}>Clear Cart</button>
        {cartItems.length==0?(<h4>Your Cart Is Empty . Try Adding Some Items</h4>):
            (<div>
                {cartItems.map((item) => (
                    <div style={{display:'inline-flex',margin:'10px 20px'}}>
                    <div className="card" style={{width: '18rem',padding:'10px 10px',textAlign:'center'}}>
                        <img src={item.image} className="card-img-top" style={{height:'200px',width:'200px',alignSelf:'center'}} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.quantity}</p>
                            <p className="card-text">{item.price}$</p>
                            <button  className="btn btn-primary" onClick={() => dispatch(removeFromCart(item))}>Remove From Cart</button>
                        </div>
                    </div>
                    </div>

                
                ))}
            </div>)
        }
    </div>
)


}


export default Cart