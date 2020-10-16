const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
	userName: {type:String, trim:true, default:''}, // 'bob', 'bob ', ' bob'
	profilepic: {type:String, trim:true, default:''},
	sub: {type:String, trim:true, default:''},
	projects:{type: Array},
	email: {type: String}
	})

module.exports = mongoose.model('Profile', Profile)