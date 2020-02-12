require('dotenv').config();
var express = require('express');
var router = express.Router();
var axios = require('axios');

var apiUrl = 'https://sandbox-api.brewerydb.com/v2/';
var apiKey = process.env.API_KEY;

//Get All beers
router.get('/', function (req, res, next) {
 
  var options = {
    params: {
      key: apiKey,
      name: req.query.name || '',
      p: req.query.page || 1,
      sort: req.query.sort || 'ASC',
      order: req.query.order || 'name',
      isOrganic: req.query.isOrganic || '',
      year: req.query.year || '',
      hasLabels: req.query.hasLabels || '',
      styleId: req.query.styleId || ''
    },
    withCredentials: true
  };

  axios.get(`${apiUrl}/beers`, options).then(function (response) {
    res.send(response.data);
  })
});

//Search beers by id
router.get('/:id', function (req, res, next) {
  var options = {
    params: {
      key: apiKey
    },
    withCredentials: true
  }
  axios.get(`${apiUrl}/beer/${req.params.id}`, options).then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(404).send();
    });
});

module.exports = router;