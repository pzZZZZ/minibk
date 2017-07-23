var express = require('express');
var fs = require('fs');
var fm = require('front-matter');
var marked = require('marked');
var ndir = require('ndir');
var router = express.Router();
let objtitle = [];

//更新文章title
/* GET users listing. */
router.get('/', function (req, res, next) {
    ndir.walk('./md/', function onDir(dirpath, files) {
        console.log(' * %s', dirpath);
        for (var i = 0, l = files.length; i < l; i++) {
            var info = files[i];
            if (info[1].isFile()) {
                console.log('   * %s', info[0]);
                var data = fs.readFileSync(info[0],'utf-8');
                var content = fm(data)
                objtitle.push(content.attributes)
            }
            if (i + 1 == l) {
                //返回数据
                res.json(objtitle);
                objtitle = [];
            }
        }
    }, function end() {
        console.log('walk end.');
    }, function error(err, errPath) {
        console.error('%s error: %s', errPath, err);
    });

});

module.exports = router;
