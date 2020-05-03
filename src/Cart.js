import React from "react";
import CartItem from "./CartItem";
//will inherit some features from React.Component
class Cart extends React.Component {
  constructor() {
    super(); //calling the super constructor that is React.Component
    this.state = {
      products: [
        {
          title: "Watch",
          price: 99,
          qty: 1,
          img: "",
          id: 1,
        },
        {
          title: "Mobile Phone",
          price: 999,
          qty: 10,
          img: "",
          id: 2,
        },
        {
          title: "Laptop",
          price: 999,
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
    //this.increaseQuantity = this.increaseQuantity.bind(this);
    //this.testing();
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              /*key={product.id}
              func={() => console.log("sdsd")}
              isloggedin={false}
              jsx={<h1>Test</h1>} comp={<CartItem/>}*/
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
