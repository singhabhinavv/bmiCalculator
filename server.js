
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/", function(req, res) {
	var weight = parseFloat(req.body.weight);
	var height = parseFloat(req.body.height);
	var bmiIndex = weight/(height * height);
	res.send("Your BMI Index is "+bmiIndex);
});

app.listen(3000, function() {
	console.log("Server started on port 3000");
});