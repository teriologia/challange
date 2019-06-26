const express = require('express');
const router = express.Router();

//controller require
const albumController = require('../controller/albumController')

/* GET home page. */
router.get('/', albumController, (req, res, next) => {
  if(req.session.islogin)
  {
    res.render('album', { title: 'My Albums and Photos', data: res.locals.data });
  }
  else{
    res.redirect('/login');
  }
});

module.exports = router;
