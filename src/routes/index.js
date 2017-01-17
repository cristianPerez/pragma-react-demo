import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Hey');
});

export {router as indexRouter}
