var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser')

router.get("/:userId", (req, res) => {
	// TODO GET USER
	// should return a json that contains the user
})

router.delete("/:userId", (req, res) => {
	// TODO DELETE USER
	// should return an empty json if delete is successfull,
	// a json that contains the user in other cases
})
