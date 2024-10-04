import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName: {
        type:String,
        required: true,
        minLength:[3,"first name must contain at leat 3 char !"],
        maxLength:[30,"first name cant exceed 30 char !"],
    },
    lastName: {
        type:String,
        required: true,
        minLength:[3,"last name must contain at leat 3 char !"],
        maxLength:[30,"last name cant exceed 30 char !"],
    },
    email:{
        type:String,
        requied:true,
        validate:[validator.isEmail,"Provide a valid email"],
    },
    phone: {
        type:String,
        required: true,
        minLength:[10,"phone number must contain 10 digits !"],
        maxLength:[10,"phone number must contain 10 digits"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
});

export const Reservation=mongoose.model("Reservation",reservationSchema);