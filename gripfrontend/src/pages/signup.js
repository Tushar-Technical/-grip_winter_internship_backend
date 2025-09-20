import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/signupform.css"


const Signup=()=>{
   const [form, setForm] = useState({ email: "", password: "" });
const navigate = useNavigate();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res= await axios.post("http://0.0.0.0:3001/user/signup", form);
     
        navigate("/login") 
      
    } catch (err) {
      
    }
  };
    return (
     

      <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create Account</h2>

        <div className="form-group">
        
          <input
            type="text"
            name="first_name"
            placeholder="Enter your name"
            
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
         
          <input
            type="text"
            name="last_name"
            placeholder="Enter your last name"
         
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
       
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
           
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
         
          <input
            type="password"
            name="password_hash"
            placeholder="Enter your password"
            
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="risk_apetite"
            placeholder="Enter your risk_apetite"
            
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
        <p className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
    )
}

export default Signup;