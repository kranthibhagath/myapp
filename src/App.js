import './App.css';
import Data from "./data.json";
import Cart from "./Components/cart";
import React, { useState, useEffect } from 'react';
function App() {
  const [cart, setCart] = useState([]);
  let item_info = [];
  Data.map((d) => {
    let obj = {};
    obj.id = d.id;
    obj.imglg = d.img[1].lg;
    obj.imgsm = d.img[0].sm;
    obj.desc = d.desc;
    obj.name = d.name;
    obj.price = d.price ? d.price : 1;
    obj.qty = 1;
    item_info.push(obj);
    return item_info;
  });
  useEffect(() => {
    setCart(item_info.slice(0, 2));
  }, []);
  const handleChange = (item, qty) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].qty += qty;
    if (arr[ind].qty === 0) arr[ind].qty = 1;
    setCart([...cart])
  }
  return (
    <Cart cart={cart} setCart={setCart} handleChange={handleChange} item_info={item_info} />
  );
}

export default App;
