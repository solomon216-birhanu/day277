import {useState} from "react";
export default function OrderForm({total}){
 const[form,setForm]=useState({name:"",phone:"",area:""});
 const phoneValid=/^09\d{8}$/.test(form.phone);
 const valid=form.name.trim()&&phoneValid&&form.area.trim()&&total>0;
 const handleChange=e=>{const{name,value}=e.target;setForm(f=>({...f,[name]:value}))};
 return <form onSubmit={e=>e.preventDefault()}><h2>Delivery</h2>
 <input name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
 <input name="phone" placeholder="TeleBirr number" value={form.phone} onChange={handleChange}/>
 <input name="area" placeholder="Area" value={form.area} onChange={handleChange}/>
 <button type="submit" disabled={!valid}>Pay with TeleBirr</button></form>;
}