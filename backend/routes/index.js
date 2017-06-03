const express = require('express');
const router = express.Router();

//user
const user = require('../controllers/user');
router.post('/user/add', user.addUser);
router.get('/user/get', user.getUser);
router.post('/user/update', user.updateUser);
router.delete('/user/delete', user.deleteUser);
router.post('/user/login', user.login);
router.post('/user/register', user.register);

//content
const media = require('../controllers/media');
router.get('/media/download/:file', media.download);
router.get('/media/listFiles', media.listFiles);




//export
module.exports = router;