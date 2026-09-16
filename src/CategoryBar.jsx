import {categories} from "./data";
export default function CategoryBar({selected,onSelect}){
 return <div className="categories">{categories.map(c=><button key={c} className={selected===c?"active":""} onClick={()=>onSelect(c)}>{c}</button>)}</div>;
}