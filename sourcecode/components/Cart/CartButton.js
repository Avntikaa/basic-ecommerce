import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../store/reduxdemo';

const CartButton = (props) => {
    const dispatch=useDispatch();

  return (
    <button className={classes.button} onClick={()=>dispatch(CartActions.openCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
