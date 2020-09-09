const router          = require('express').Router();
const adminController = require('../controller/adminController');


router.get('/dashboard', adminController.viewDashboard);

// end point pengiriman
router.get('/pegiriman', adminController.addPengiriman);
router.get('/report-pengiriman', adminController.viewPengiriman);

// end point analisa
router.get('/analis', adminController.viewAnalisa);

//end point ceksn
router.get('/ceksn', adminController.viewCeksn);

//end point consumers
router.get('/consumers', adminController.viewConsumers);

// end point fis
router.get('/fis', adminController.viewFis);

// end point klaim
router.get('/klaim', adminController.addKlaim);
router.get('/document', adminController.viewDocument);
router.get('/report-klaim', adminController.viewKlaim);

//end point penggantian
router.get('/penggantian', adminController.addPenggantian);
router.get('/report-penggantian', adminController.viewPenggantian);

// end point product
router.get('/product', adminController.viewProduct);

// end point report
router.get('/report', adminController.viewProduct);

// end point serachsn
router.get('/searchsn', adminController.viewSerach);

// end point users
router.get('/users', adminController.viewUsers);


module.exports = router;