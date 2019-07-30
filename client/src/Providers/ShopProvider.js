import React from 'react';
import axios from 'axios';

export const ShopContext = React.createContext()
export const ShopConsumer = ShopContext.Consumer

export class ShopProvider extends React.Component {
  state = { 
    items: [],
    cart: [],
    conversionRate: 1000,
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

  convertPrice=(value)=>{
    return (parseFloat(value) / this.state.conversionRate).toFixed(2)
  }

  // Calculates the subtotal before tax +shipping
  subTotal=()=>{
    let subT = 0.0
    this.state.cart.forEach(item => {
      console.log(item)
      subT += parseFloat(this.state.items[item].cost / this.state.conversionRate)
      console.log(subT)
    });
    return subT.toFixed(2)
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
      convertPrice: this.convertPrice,
      subTotal: this.subTotal,
    }}>
      {this.props.children}
    </ShopContext.Provider>
   )
 }
}

