const mongoose = require('mongoose')

const ProjectDoc = new mongoose.Schema({
	projectDocName: {type:String, trim:true, default:''}, // 'bob', 'bob ', ' bob'
	lastEdited:{type:String, trim:true, default:""},
	projectDocLink:{type:String, trim:true, default:"https://drive.google.com/uc?id=1WO6TixxeEfMTXD5sXjhX7UE4Xt5RPhIF&export=download"},
	})

module.exports = mongoose.model('ProjectDoc', ProjectDoc)