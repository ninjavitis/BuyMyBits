import React from 'react';
import axios from 'axios';

export const ShopContext = React.createContext()
export const ShopConsumer = ShopContext.Consumer

export class ShopProvider extends React.Component {
  state = { 
    items: [],
    cart: [],
   };

  componentDidMount(){
    this.getItems();
  }

  addToCart = (item) => {
    this.setState({cart:[...this.state.cart, item]})
  }

  emptyCart = () => {
    this.setState({cart:[]})
  }

  getItems = ()=>{
    axios.get(`https://fortnite-public-api.theapinetwork.com/store/get`)
    .then(res=> this.setState({items:res.data.items}))
  }

 render(){
   return(
    <ShopContext.Provider value ={{
      ...this.state,
      addToCart: this.addToCart,
      emptyCart: this.emptyCart,
    }}>
      {this.props.children}
    </ShopContext.Provider>
   )
 }
}

