import React from 'react';
import axios from 'axios';

export const ShopContext = React.createContext()
export const ShopConsumer = ShopContext.Consumer

export class ShopProvider extends React.Component {
  state = { 
    items: [],
    cart: [],
    conversionRate: 1000,
    digitalFee: 2.00,
    minFee: 0.00,
   };

  componentDidMount(){
    this.getItems();
  }

  addToCart = (item) => {
    this.setState({cart:[...this.state.cart, item]})
  }

  // This is funky because the cart only stores item array indexes (prevents needing to pass the object around)
  // So I have to do the extra step of looking up the itemid in the items array
  // This is largely a side-effect of using data from an API.  With my own custom back end I could do the individual DB queries necessary
  removeFromCart=(id)=>{
    this.setState({cart:this.state.cart.filter(item=> {return this.state.items[item].itemid !== id})})

  }

  emptyCart = () => {
    this.setState({cart:[]})
  }

  convertPrice=(value)=>{
    return (parseFloat(value) / this.state.conversionRate).toFixed(2)
  }

  Total=()=>{
    return this.subTotal() + this.deliveryFee()
  }


  // Calculates the subtotal before tax +shipping
  subTotal=()=>{
    let subT = 0.0

    this.state.cart.forEach(item => {
      subT += parseFloat(this.state.items[item].cost / this.state.conversionRate)
    });
    return subT
  }

  deliveryFee=()=>{
    return this.state.cart.length > 0? this.state.digitalFee : this.state.minFee
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
      removeFromCart: this.removeFromCart,
      emptyCart: this.emptyCart,
      convertPrice: this.convertPrice,
      subTotal: this.subTotal,
      deliveryFee: this.deliveryFee,
      Total: this.Total,
    }}>
      {this.props.children}
    </ShopContext.Provider>
   )
 }
}

