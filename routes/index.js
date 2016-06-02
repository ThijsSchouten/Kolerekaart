var express = require('express');
var router = express.Router();
var pjax = require('express-pjax');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/index', function(req, res) {
	if (req.pjax)
		console.log("PJAX Call Made")
	else
		console.log("Render full w/o PJAX")

	res.renderPjax('index');
});



router.get('/kaart', function(req, res) {
    res.renderPjax('index');
});


router.get('/analyse', function(req, res) {
    res.renderPjax('analyse');
});

router.get('/achtergrond', function(req, res) {
    res.renderPjax('achtergrond');
});

router.get('/over', function(req, res) {
	if (req.pjax)
		console.log("PJAX Call Made")
    else
    	console.log("Render full w/o PJAX")
	    res.renderPjax('over');
});

router.get('*', function(req, res) {
	if (req.pjax)
		console.log("PJAX Call Made")
    else
    	console.log("Render full w/o PJAX")
	    res.renderPjax('index');
});



module.exports = router;
