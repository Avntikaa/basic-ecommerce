import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const rdx=useSelector((state)=>state.Cart)
  console.log(rdx.cartItem);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {rdx.cartItem.map((i)=>{
         return (<CartItem
          item={{ title: i.title, quantity: i.quantity, total: rdx.total, price: i.price }}
        />)
         }
        )}
       
      </ul>
    </Card>
  );
};

export default Cart;
