import {useState} from "react";
export default function Dish({dish,count,onAdd}){
 const[dishCount,setDishCount]=useState(count);
 const add=()=>{setDishCount(c=>c+1);onAdd(dish.id)};
 return <article className="dish"><h3>{dish.name}</h3><p>{dish.price} ETB</p><p>{dish.spicy?"Spicy":"Mild"}</p><button onClick={add}>Add</button><span>{dishCount}</span></article>;
}