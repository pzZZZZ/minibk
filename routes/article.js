/*
 * @Author: pzzz 
 * @Date: 2017-07-27 10:46:36 
 * @Last Modified by: pzzz
 * @Last Modified time: 2017-07-27 10:47:07
 */
//获取相应ID文章的接口
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
