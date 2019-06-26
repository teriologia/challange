const express = require('express');
const router = express.Router();

const albumController = require('../controller/albumController')

/* GET home page. */
router.get('/', albumController, (req, res, next) => {
  res.render('album', { title: 'My Albums and Photos', data : res.locals.data });
});

module.exports = router;
