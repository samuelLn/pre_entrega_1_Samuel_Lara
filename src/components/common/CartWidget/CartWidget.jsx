import { useContext } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);


 let total = getTotalItems()

  //console.log(x);
  return (
    <Link to="/Cart">
      <Badge badgeContent={total} showZero color="primary">
      <PiShoppingCartSimpleBold color="green" size="2rem" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
