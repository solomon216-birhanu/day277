import Dish from "./Dish";
export default function DishList({dishes,order,onAdd}){
 return <div className="dish-list">{dishes.map(d=><Dish key={d.id} dish={d} count={order[d.id]||0} onAdd={onAdd}/>)}</div>;
}