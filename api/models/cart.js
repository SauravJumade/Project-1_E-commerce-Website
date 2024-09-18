const mongoose = require('mongoose');
const { Schema } = mongoose;

  const CartSchema = new Schema({
 
    userID: { type: String, required: true, unique: true },
    products: [
        {
            productID: {type: mongoose.Types.ObjectId},
            quantity: {type: Number},
            color: { type: String },
            size: { type: String}
            
           
        }
    ]   
  },{timestamps: true}
  ); 
 

  const Cart = mongoose.model('Cart', CartSchema)
  module.exports = Cart