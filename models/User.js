const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
      type:String,
      required: true
    },
  email: {
      type:String,
      required:true,
      unique:true,
      trimmed:true
  },
  age: {
      type: String
  },
  programmingLevel: {
      type:String,
      enum:['beginner', 'intermediate', 'advanced']
  },
  registerDate:{
      type:Date,
      default:Date.now()
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;