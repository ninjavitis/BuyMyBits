import React from 'react';
import update from 'immutability-helper';
import axios from 'axios';

export const ShopContext = React.createContext()
export const ShopConsumer = ShopContext.Consumer

export class ShopProvider extends React.Component {
  state = { 
    items: [],
    cart: [],
    checkoutStep: 1,
    conversionRate: 400,
    digitalFee: 7.50,
    minFee: 0.00,
   };

  componentDidMount(){
    this.getItems();
  }

  setCheckoutStep=(step)=>{
    this.setState({checkoutStep:step})
  }

  addToCart = (item) => {
    // TODO
    // 1. Check to see if the item is in the cart
    // 2. If so increment the quantity (call update quantity function)
    // 3. If not, add it as a new item

    this.setState({cart:[...this.state.cart, {item:item, quant:1}]})
  }

  updateQuantity=(cartIndex, change)=>{
    if (this.state.cart[cartIndex].quant + change > 0){
      this.setState({
        cart: update(this.state.cart, {[cartIndex]: {quant: {$set: this.state.cart[cartIndex].quant + change}}})
      })
    }
    // 1. Increment or decrement quantity
    // 2. If quantity is 0 call removeFromCart
  }

  // This is funky because the cart only stores item array indexes (prevents needing to pass the object around)
  // So I have to do the extra step of looking up the itemid in the items array
  // This is largely a side-effect of using data from an API.  With my own custom back end I could do the individual DB queries necessary
  removeFromCart=(id)=>{    
    this.setState({cart:
      this.state.cart.filter(item=> {
        return this.state.items[item.item].itemid !== id
      })
    })
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

  totalQuantity =()=>{
    let count = 0
    this.state.cart.map((item)=> count += item.quant)

    return count
  }

  // Calculates the subtotal before tax +shipping
  subTotal=()=>{
    let subT = 0.0

    this.state.cart.forEach(cItem => {
      subT += parseFloat((this.state.items[cItem.item].cost / this.state.conversionRate)* cItem.quant)
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
      updateQuantity: this.updateQuantity,
      totalQuantity: this.totalQuantity,
      convertPrice: this.convertPrice,
      subTotal: this.subTotal,
      deliveryFee: this.deliveryFee,
      Total: this.Total,
      setCheckoutStep: this.setCheckoutStep,
    }}>
      {this.props.children}
    </ShopContext.Provider>
   )
 }
}

