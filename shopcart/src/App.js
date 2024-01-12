import React, { Component } from "react";

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { products } from "./products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    }
  }

  renderProducts(products) {
    return (
      <div>
        {products.map(product => 
          <div key={product.id}>
            <p>{product.name}</p>
            <img src={product.image}/>
            <span>quantities: {product.quantity}</span>
          </div>
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="shop_cart">
        <h1>Shop to React</h1>
        {this.renderProducts(this.state.products)}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
