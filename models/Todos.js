const mongoose=require('mongoose')

const Schema =mongoose.Schema;
const TodosSchema = new Schema({
    title: {
        type: String,
        required:true
        //enum:['a','b','c'] -> yo chai title ki ta a ki ta b kita c matra hunu parcha bhaneko ho enum le tyo garcha 
    },
    description: String 
},
{timestamps:true});

module.exports= mongoose.model('Todos', TodosSchema);


//createdAt: ra updatedAt afai rakhdincha timestamp le 