var express = require('express');
var router = express.Router();

/* GET JSmetanit */
router.get('/', function (req, res, next) {
    res.render('jspage', {
        title: 'jspage'
    });
});

module.exports = router;