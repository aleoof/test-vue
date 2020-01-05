const express = require("express")

const router = express.Router()

const user = require('../model/Users').prototype

router.get('/', (req,res) => user.getUsers(res))


module.exports = router