import React from "react";
import CartItem from "./CartItem";
//will inherit some features from React.Component
//class Cart extends React.Component {
//render() {
const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
            /*func={() => console.log("sdsd")}
              isloggedin={false}
              jsx={<h1>Test</h1>} comp={<CartItem/>}*/
          />
        );
      })}
    </div>
  );
};

export default Cart;
