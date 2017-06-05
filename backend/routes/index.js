const express = require('express');
const router = express.Router();

//config
const config = require('../controllers/config');
router.get('/config/getHostname', config.getHostname);
router.get('/config/getHomeDir', config.getHomeDir);

//content
const media = require('../controllers/media');
router.get('/media/listFiles', media.listFiles);
router.post('/media/download/:file', media.download);



//export
module.exports = router;