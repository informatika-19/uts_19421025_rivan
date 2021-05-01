const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HandphoneSchema = new Schema({
   	    merk:{
        type: String
        },
        processor:{
            type: String
        },
        display : {
            type: String
        },
	    sistemOperasi:{
        type: String
        },
        ram :{
            type: String
        },
        MemoriInternal : {
            type: String
        },
        harga : {
            type: String
        }
})
module.exports =mongoose.model('Handphone',HandphoneSchema)