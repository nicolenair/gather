const mongoose = require('mongoose')

const Annotation = new mongoose.Schema({
	text: {type:String, trim:true, default:''}, // 'bob', 'bob ', ' bob'
	commenter: {type:String, trim:true, default:''},
	context: {type:String, trim:true, default:''},
	src: {type:String, trim:true, default:''},
	width : {type: Number, default:0},
	height : {type :Number, default:0},
	x : {type :Number, default:0.5},
	y : {type :Number, default:0.5}
	})

module.exports = mongoose.model('Annotation', Annotation)






