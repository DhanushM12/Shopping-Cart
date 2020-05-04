import React from "react";

//will inherit some features from React.Component
//class CartItem extends React.Component {
//render() {
const CartItem = (props) => {
  //console.log("this.props", this.props);
  const { price, title, qty } = props.product; //object destructuring
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct,
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs. {price}</div>
        <div style={{ color: "#777" }}>Qty : {qty}</div>
        <div className="cart-item-actions">
          {/* Buttons - binding is done to avoid the loss of this */}
          <img
            alt="increase"
            className="actions-icon"
            src="https://image.flaticon.com/icons/svg/992/992651.svg"
            onClick={() => onIncreaseQuantity(product) /*.bind(this)*/}
          />
          <img
            alt="decrease"
            className="actions-icon"
            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="actions-icon"
            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
