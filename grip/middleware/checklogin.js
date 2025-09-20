
const {verifytoken}=require("../service/auth");
const express=require("express")
const app = express();
app.use(express.json());

// for form-urlencoded requests
app.use(express.urlencoded({ extended: true }));
function checklogin(){
    return (req,res,next)=>{
       
        console.log("why i am working")
        const {token}=req.body;

        if(!token) return next();

        try{
            var payload=verifytoken(token);
            if(!payload) return next();
           
            req.user=payload;
           
        }catch(error){

        }

        return next();
    }
}

module.exports={checklogin}