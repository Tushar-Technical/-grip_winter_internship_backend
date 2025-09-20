
import React,{useState,useEffect} from 'react';
import axios from "axios";
import Userinvestment from './userinvestment';
import "../css/home.css";



function Home() {


const [dataa,setDataa]=useState([])


  useEffect(()=>{
    axios.get("http://0.0.0.0:3001/investment/products").then(data=>setDataa(data.data))


  },[dataa])





  return (
    <div className="investment-page">
      <h1 className="page-title">Available Investment Plans</h1>
      <div className="card-grid">
        {  dataa.length==0?<h2>No product Listed</h2> : dataa.map((items) => (
          <div key={items._id} className="card">
            <h2>{items.name}</h2>
            <p>{items.description}</p>
            <div className="card-details">
              <span>Risk Level: {items.risk_level}</span>
              
             <span>Investment Type: {items.investment_type}</span> 
             </div>
             <div className="card-details1">
              <span>Tenure Months: {items.tenure_months}</span>
               <span>Annual Yield: {items.annual_yield}</span>
             </div>
             <div className="card-details2">
              <span>Min Investment: {items.min_investment}</span>
              <span>Max Investment: {items.max_investment}</span>
             </div>
           
            <input type="text" value={items._id}></input> <a className='btn-invest' href="/investmentuser" class="btn btn-primary">Go somewhere</a>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Home;
