import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { CartActions } from '../../store/reduxdemo';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
const rdx=useSelector((state)=>state.Cart);
const dispatch=useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>${price}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(CartActions.decrease(props.item))}>-</button>
          <button onClick={()=>dispatch(CartActions.increase(props.item))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
