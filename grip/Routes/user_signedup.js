const express=require("express");
const app = express();
const router=express.Router();
const user_signedup_model=require("../model/user_signedup");
const {checklogin}=require("../middleware/checklogin")

router.post("/signup",async (req,res)=>{
    const {first_name,last_name,email,password_hash,risk_appetite}=req.body;
    await user_signedup_model.create({

        first_name:first_name,
        last_name:last_name,
        email:email,
        password_hash:password_hash,
        risk_apetite:risk_appetite,

    })

    return res.json({redirecturl:"/login",success:"true"});
})
router.get("/login",async (req,res)=>{
    return res.json({name:"tushar"})
})

router.post("/signin", async (req,res)=>{

    const {email,password}=req.body;
    
    const token=await user_signedup_model.matchpassword(email,password);
   
    if(!token) return res.json({ success: false, redirectUrl: "/signup" });
    if(token=="incorrect") return res.json({ success: false, redirectUrl: "/signup" });
  
     else{
return res.json({token:token,email:email,redirecturl:"/signup",success:true})
     }
    
 

})



module.exports=router;