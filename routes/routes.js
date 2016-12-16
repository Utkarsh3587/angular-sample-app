"use strict";

var settings = require('./util/settings')
var router = settings.express.Router({ mergeParams: true });

router
    .get('/', function(req, res, next) {
      res.sendFile('home.html', REDIRECT_OPTIONS);
    })

    .get('/image', function (req, res, next) {
      res.sendFile('image.html', REDIRECT_OPTIONS);
    })

    .get('/hello', function (req, res, next) {
      res.sendFile('.image.html', REDIRECT_OPTIONS);
    });


module.exports = router;