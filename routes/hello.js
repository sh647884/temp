const express = require('express');
const router = express.Router();
const helloController = require('../controllers/hello.controller');

router.get('/', helloController.HelloWorld);
router.get('/hi', helloController.sayHi);
router.get('/hi/:name', helloController.sayHiWithParam);
router.post('/person', helloController.createPerson);
router.get('/image', helloController.getImage);
router.get('/imgfilename', helloController.getImageByFilename);

module.exports = router;