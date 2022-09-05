const express = require('express');
const siteCtrl = require('../controllers/site-controller');
const router = express.Router();

// SITE ROUTES --> from site controller
router.route('/')
  .get(siteCtrl.index);

router.route('/register')
  .get(siteCtrl.register_get)
  .post(siteCtrl.register_post)

router.route('/login')
  .get(siteCtrl.login_get)
  .post(siteCtrl.login_post)

router.route('/logout')
  .get(siteCtrl.logout)

router.route('/auth/google')
  .get(siteCtrl.google_auth)

router.route('/auth/google/admin')
  .get(siteCtrl.google_redirect)

//   export the router
module.exports = router;