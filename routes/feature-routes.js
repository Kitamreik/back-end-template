const express = require('express');
const featureCtrl = require('../controllers/feature-controller');
const router = express.Router();

// feature ROUTES - for data manipulation

router.route('/')
  .get(featureCtrl.all_entries)
  .post(featureCtrl.create_post_entry)

router.route('/:_id')
  .get(featureCtrl.entry_detail)
  .put(featureCtrl.entry_update_put)
  .delete(featureCtrl.entry_delete)

module.exports = router;