require('dotenv').config()
var express = require('express')
var router = express.Router()
var axios = require('axios')

var apiUrl = 'https://sandbox-api.brewerydb.com/v2/'
var apiKey = process.env.API_KEY

router.get('/', function (req, res, next) {
  var options = {
    params: {
      key: apiKey
    },
    withCredentials: true
  }
  axios.get(`${apiUrl}/styles`, options).then(function (response) {
    res.send(response.data)
  })
    .catch(function (error) {
      console.log(error)
      res.status(404).send()
    })
})

module.exports = router