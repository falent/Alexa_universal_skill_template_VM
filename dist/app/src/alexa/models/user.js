
/*Im using mongoDB as a database but you can also work with this VM with Dynamodb
Dynamodb port runs at port 9001

Example nodejs code:
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:9001"
});

var dynamodb = new AWS.DynamoDB();

*/



var mongoose = require('mongoose');
//you can decide if you are using heroku or local
const config = require('../config/settings');
console.log(config)

	if (config.enviroment=="local"){
		mongoose.connect('mongodb://127.0.0.1:27017');	

	}
	if (config.enviroment=="docker"){
		mongoose.connect('mongodb://database:27017');
	
	
	}
	if (config.enviroment=="heroku")
		{
		mongoose.connect('mongodb://heroku**********');
		}
	
	

	
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  userId: { type: String, required: true, unique: true },
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;