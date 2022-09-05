const express = require('express');
const siteRouter = require('./site-routes')
const featureRouter = require('./feature-routes');
const adminRouter = require('./admin-routes');
const router = express.Router();

router.use('/', siteRouter);
router.use('/features', featureRouter);
router.use('/admin', adminRouter);

module.exports = router;