import React from "react";

//will inherit some features from React.Component
class CartItem extends React.Component {
  //defining the state in constructor
  constructor() {
    super(); //calling the super constructor that is React.Component
    this.state = {
      title: "Mobile Phone",
      price: 999,
      qty: 1,
      img: "",
    };
    //this.increaseQuantity = this.increaseQuantity.bind(this);
    //this.testing();
  }
  /*testing() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done");
      }, 5000);
    });

    promise.then(() => {
      //here it is a synchronous call
      this.setState({ qty: 100 });
      console.log("state", this.state);
    });*/
  }
  increaseQuantity = () => {
    //this.state.quantity += 1 -> this won't update in the UI
    //console.log("this", this.state);
    //so we use React.Component function setState
    //1st way
    /*this.setState({s
      qty: this.state.qty + 1,
    });*/
    //2nd way
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
  render() {
    const { price, title, qty } = this.state; //object destructuring
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
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
              onClick={this.increaseQuantity /*.bind(this)*/}
            />
            <img
              alt="decrease"
              className="actions-icon"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="actions-icon"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
