var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  var j = {
    date: Date()
  };
  res.json(j);
});

module.exports = router;
