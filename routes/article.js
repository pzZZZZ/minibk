var express = require('express');
var fs = require('fs');
var fm = require('front-matter');
var marked = require('marked');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {
    fs.readFile(`./md/${req.params.id}.md`,'utf-8', function (err, data) {
        if (err) return console.log(err);
         var content = fm(data);
        res.json(content)
    })
});


module.exports = router;
