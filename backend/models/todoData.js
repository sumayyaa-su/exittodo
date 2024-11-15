const mongoose=require('mongoose')
const todoSchema=mongoose.schema=({
    description:String,
    status:String
})

module.exports=mongoose.models('todo', todoSchema);




 

 