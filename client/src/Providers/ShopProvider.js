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
    deliveryFee: 5.00,
    minFee: 0.00,
    subTotal:0.00,
    Total:0.00,
    totalQuantity:0.00,
   };

  componentDidMount(){
    this.getItems();
  }

  setCheckoutStep=(step)=>{
    this.setState({checkoutStep:step})
  }

  // If the cart is empty, adds a new item
  // If not empty checks to see if the item is already in the cart
  // If so, it increments the quantity
  // If not, it adds it as a new item
  addToCart = (itemId) => {
    // console.log(item)
    // console.log(this.state.cart)
    let cartIndex = null
    cartIndex = this.findInCart(itemId)
    if (cartIndex !== null)
    {
      this.updateQuantity(cartIndex, 1)
    }
    else
    {
      this.setState({cart:[...this.state.cart, {item:itemId, quant:1}]})
    }
  }
  
  // 1. Increment or decrement quantity
  // 2. If quantity is 0 call removeFromCart
  // uses cart immutability helper
  updateQuantity=(cartIndex, change)=>{
    if (this.state.cart[cartIndex].quant + change > 0){
      this.setState({
        cart: update(this.state.cart, {[cartIndex]: {quant: {$set: this.state.cart[cartIndex].quant + change}}})
      })
    }
  }

  // This is funky because the cart only stores item array indexes (prevents needing to pass the object around)
  // So I have to do the extra step of looking up the itemid in the items array
  // This is largely a side-effect of using data from an API.  With my own custom backend I could do the individual DB queries necessary
  removeFromCart=(id)=>{    
    this.setState({cart:
      this.state.cart.filter(item=> {
        return this.state.items[item.item].itemid !== id
      })
    })
  }

  // removes all items from cart
  emptyCart = () => {
    this.setState({cart:[]})
  }

  // this is used to convert the price value stored in the api into dollars
  // only used with the fortnite api data, will be deprecated 
  convertPrice=(value)=>{
    return (parseFloat(value) / this.state.conversionRate).toFixed(2)
  }

  // Returns the item array index of the object matching a given item id
  findInItems=(itemId)=>{
    let index
    this.state.items.forEach((item,i)=>{
      if(item.itemid === itemId)
      {
        index = i
      }
    })
    return index
  }

  findInCart=(itemId)=>{
    let index = null

    this.state.cart.forEach((item,i)=>{
      if(item.item === itemId)
      {
        index = i
      }
    })
    return index
  }

  // returns the total price of all the items in the cart plus any fees
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
      console.log('item index:'+this.findInItems(cItem.item))
      subT += parseFloat((this.state.items[this.findInItems(cItem.item)].cost / this.state.conversionRate)* cItem.quant)
    });
    return subT
  }



  // used to ensure that no fee is charged if the cart is empty
  // user should never see fee info displayed in an empty cart
  deliveryFee=()=>{
    return this.state.cart.length > 0? this.state.deliveryFee : this.state.minFee
  }

  // makes an api call to get the items available for purchase
  getItems = ()=>{
    axios.get(`https://fortnite-public-api.theapinetwork.com/store/get`)
    .then(res=> this.setState({items:res.data.items}))
  }

 render(){
   return(
    <ShopContext.Provider value ={{
      ...this.state,
      findInItems: this.findInItems,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
      emptyCart: this.emptyCart,
      updateQuantity: this.updateQuantity,
      convertPrice: this.convertPrice,
      setCheckoutStep: this.setCheckoutStep,
    }}>
      {this.props.children}
    </ShopContext.Provider>
   )
 }
}

