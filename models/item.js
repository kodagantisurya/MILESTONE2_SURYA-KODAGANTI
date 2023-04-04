const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoSchema = new Schema({
    title : {type: String, required : [true,"Insert the Title"]},
    category : {type: String, required : [true,"Insert the category"]},
    details : {type: String, required : [true,"Insert the details"],
    minlength: [6,'Inserted text should be atleast 10 characters']},
    status : {type: String, required : [true,"Insert the status"]}, 
    image : {type: String, required : [true,"Insert the image"]},
},
{ timestamps: { createdAt: 'Created Date',updatedAt: 'Updated Date'}}
)
module.exports = mongoose.model('trade',mongoSchema)  