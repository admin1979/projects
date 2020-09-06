var express = require('express');
var router = express.Router();

/* GET page1 */
router.get('/', function (req, res, next) {
    res.render('page1', {
        title: 'Страница'
    });
});

module.exports = router;