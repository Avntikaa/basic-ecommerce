import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CartActions } from '../../store/reduxdemo';

const CartButton = (props) => {
    const dispatch=useDispatch();
const rdx=useSelector((state)=>state.Cart);
  return (
    <button className={classes.button} onClick={()=>dispatch(CartActions.openCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>{rdx.count}</span>
    </button>
  );
};

export default CartButton;
