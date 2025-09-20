const { express } = require("express");
const mongoose=require("mongoose");
const { Schema } = mongoose;

const investment_product_Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    investment_type:{
        type:String,
        enum:['bond', 'fd', 'mf', 'etf', 'other'],
        required:true,
    },
    tenure_months:{
        type:Number,
        required:true,
        validate:{
                 validator:Number.isInteger,
                 message:'value passed is not integer'
        }
    },
    annual_yield:{
            type:Number,
            required:true,

   
            },
        

        risk_level:{
            type:String,
             enum:['low','moderate','high'],
             required:false,
        },

        min_investment:{
            type:Number,
            
            default:1000.00
            
        },
        max_investment:{
            type:Number,
        },
        description:{
            type:String
        },
        status: { type: String, enum: ["active","closed"], default: "active" }





})

const investment_product_model=mongoose.model("investment_product_model",investment_product_Schema);

module.exports=investment_product_model;