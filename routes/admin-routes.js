const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

// ADMIN ROUTES --> see admin controller.js
router.route('/')
  .get(adminCtrl.admin)

// to see all of the data, ex. Authors as an admin

router.route('/entries')
  .get(adminCtrl.admin_feature)

//  pulling data from a form, ex. Create Author from the admin side
router.route('/create-entry')
  .get(adminCtrl.create_entry)

// to get the update form page
router.route('/update-entry')
  .get(adminCtrl.entry_update_get)

module.exports = router;