const router          = require('express').Router();
const adminController = require('../controller/adminController');


router.get('/dashboard', adminController.viewDashboard);

// end point pengiriman
router.get('/pegiriman', adminController.addPengiriman);
router.get('/report-pengiriman', adminController.viewPengiriman);


module.exports = router;