let express = require('express');
let router = express.Router();

//Global Route Variables
  let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString();

/* GET home page. */
router.get('/', (req, res, next) => {

  res.render('index', { 
    title: 'Home',
  });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('index', { title: 'About' });
});
/* GET products page. */
router.get('/projects', (req, res, next) => {
  res.render('index', { title: 'Projects' });
});
/* GET Services page. */
router.get('/services', (req, res, next) => {
  res.render('index', { title: 'Services' });
});
/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
