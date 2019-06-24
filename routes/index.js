const express = require('express');
const router = express.Router();

const albumController = require('../controller/albumController')

/* GET home page. */
router.get('/?', albumController, (req, res, next) => {
  res.render('index', { title: 'Album', data : res.locals.data });
});

module.exports = router;
