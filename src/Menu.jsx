import {useState} from "react";
import {dishes} from "./data";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";

export default function Menu(){
 const[category,setCategory]=useState("All");
 const[order,setOrder]=useState({});
 const filtered=category==="All"?dishes:dishes.filter(d=>d.category===category);
 const total=Object.entries(order).reduce((sum,[id,count])=>{
  const d=dishes.find(x=>x.id===Number(id));
  return sum+(d?d.price*count:0);
 },0);
 const addDish=id=>setOrder(o=>({...o,[id]:(o[id]||0)+1}));
 return <main><h1>Addis Eats</h1><CategoryBar selected={category} onSelect={setCategory}/><DishList dishes={filtered} order={order} onAdd={addDish}/><div className="total">Order Total: {total} ETB</div><OrderForm total={total}/></main>;
}