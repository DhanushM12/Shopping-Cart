import React from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";

class App extends React.Component {
  constructor() {
    super(); //calling the super constructor that is React.Component
    this.state = {
      products: [
        {
          title: "Watch",
          price: 99,
          qty: 1,
          img:
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=340&q=80",
          id: 1,
        },
        {
          title: "Mobile Phone",
          price: 999,
          qty: 10,
          img:
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80",
          id: 2,
        },
        {
          title: "Laptop",
          price: 999,
          qty: 4,
          img:
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 3,
        },
      ],
    };
    //this.increaseQuantity = this.increaseQuantity.bind(this);
    //this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log("Hey please inc the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log("Hey please decr the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty !== 0) {
      products[index].qty -= 1;
    }
    this.setState({
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); // return an array whose id is not equal to the id mentioned
    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <NavBar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
