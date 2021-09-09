const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FormSchema = new Schema({
  Firstname: {
    type: String
  },
  Lastname:{
    type:String
  },
  Email:{
    type:String
  },
  Bio:{
   type:String
 },
  Gender:{
    type:String
  },
  Courses:{
    type:String
  }
}
,
 {
    collection: 'Form'
  }
  )

module.exports = mongoose.model('Form', FormSchema)