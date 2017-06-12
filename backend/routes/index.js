const express = require('express');
const router = express.Router();

//config
const config = require('../controllers/config');
router.get('/config/getHostname', config.getHostname);
router.get('/config/getHomeDir', config.getHomeDir);
router.get('/config/getPort', config.getPort);

//content
const media = require('../controllers/media');
router.get('/media/download/:file', media.download);
router.get('/media/listFiles', media.listFiles);

//export
module.exports = router;