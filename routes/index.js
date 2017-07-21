var express = require('express');
var router = express.Router();
var fs = require('fs');
var fm = require('front-matter');
var marked = require('marked');


/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  fs.readFile('./md/2.md', 'utf8', function (err, data) {
    if (err) throw err
    var content = fm(data)
    console.log(content)
    res.send(marked(content.body));
  })

});

module.exports = router;
