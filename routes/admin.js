const router          = require('express').Router();
const adminController = require('../controller/adminController');


router.get('/dashboard', adminController.viewDashboard);

// end point pengiriman
router.get('/pegiriman', adminController.viewPengiriman);

// end point analisa
router.get('/analis', adminController.viewAnalisa);

// end point Garansi
router.get('/garansi', adminController.viewGaransi);

//end point ceksn
router.get('/ceksn', adminController.viewCeksn);

//end point consumers
router.get('/consumers', adminController.viewConsumers);

// end point fis
router.get('/fis', adminController.viewFis);

// end point klaim
router.get('/klaim', adminController.viewKlaim);
router.get('/document', adminController.viewDocument);

//end point penggantian
router.get('/penggantian', adminController.viewPenggantian);

// end point product
router.get('/product', adminController.viewProduct);

// end point report
router.get('/report', adminController.viewReport);

// end point serachsn
router.get('/searchsn', adminController.viewSerach);

// end point users
router.get('/users', adminController.viewUsers);


module.exports = router;