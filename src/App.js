import React, { Component } from "react";
import "./App.css";
import ProductItem from "./ProductItem";
import AddItem from './AddProduct';

const products = [
  {
    name: "iPad",
    price: 200
  },
  {
    name: "iPhone",
    price: 650
  }
];

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({
      products: products
    });
  }

  getProducts() {
    return this.state.products;
  }

  onAdd(name, price) {
    const products = this.getProducts();

    products.push({
        name,
        price
    })
    this.setState({
        products: products
    })
  }

  onDelete(name) {
    const products = this.getProducts();
    const filteredProducts = products.filter(product => {
        return product.name !== name;
    })
    
    this.setState({
        products: filteredProducts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>

        <AddItem 
            onAdd={this.onAdd}
        />

        {this.state.products.map(product => {
          return (
            <ProductItem
              key={product.name}
              {...product}
              onDelete={this.onDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
