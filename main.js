const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/app';
const User = require('./models/User');
const data = require('./data.js');
mongoose.connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to ${x.connection.name} database`);
  })
  .then(() => {
    const user = User.create({
    //   name: 'Albert',
    //   age: 45,
    //   email: 'Albi@yahoo.com',
    //   programmingLevel: 'intermediate'
    // })
    // return user;
    
  })
  .then((user) => {
    // Iteration 2
    console.log('Created: ', user)
  })
  .then(() => {
    // Iteration 3
    return User.findOneAndUpdate (user._id,{memberAtGym:true}, {new:true})
  })
  .then((user) => {
    // Iteration 3
     console.log('Edited: ', user)
  })
  .then(() => {
    // Iteration 4
     return User.insertMany(data)
  })
  .then((users) => {
    // Iteration 4
    console.log('Created: ', users)
  })
  .then(() => {
    // Iteration 5
   return User.findOneAndDelete({email:'pepe@gmail.com'})
  })
  .then((user) => {
    // Iteration 5
    console.log('Deleted: ', user)
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  })