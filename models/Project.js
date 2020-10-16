const mongoose = require('mongoose')
const Annotation = require('../models/Annotation')

const Project = new mongoose.Schema({
	projectName: {type:String, trim:true, default:''}, // 'bob', 'bob ', ' bob'
	lastEdited:{type:String, trim:true, default:""},
	status:{type:String, trim:true, default:""},
	projectpic:{type:String, trim:true, default:"https://drive.google.com/uc?id=1WO6TixxeEfMTXD5sXjhX7UE4Xt5RPhIF&export=download"},	
	projectDoc: {type:Array, trim:true, default:[]},
	freelancer: {type:String, trim:true, default: ""}
	})

module.exports = mongoose.model('Project', Project)