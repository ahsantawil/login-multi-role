const router = require('express').Router();
const adminController = require('../controller/adminController');


router.get('/dashboard', adminController.viewDashboard);

// end point pengiriman
router.get('/pengiriman', adminController.formPengiriman);
router.get('/datapengiriman', adminController.viewPengiriman);

// end point analisa
router.get('/analis', adminController.viewAnalisa);

// end point Garansi
router.get('/garansi', adminController.viewGaransi);

//end point ceksn
router.get('/ceksn', adminController.viewCeksn);

//end point consumers
router.get('/consumers', adminController.viewConsumers);
router.post('/consumers', adminController.addConsumers);

// end point fis
router.get('/fis', adminController.viewFis);

// end point klaim
router.get('/klaim', adminController.formKlaim);
router.get('/dataklaim', adminController.viewKlaim);
router.get('/document', adminController.viewDocument);

//end point penggantian
router.get('/penggantian', adminController.formPenggantian);
router.get('/datapenggantian', adminController.viewPenggantian);

// end point product
router.get('/product', adminController.viewProduct);
router.post('/product', adminController.addProduct);

// end point report
router.get('/report', adminController.viewReport);

// end point serachsn
router.get('/searchsn', adminController.viewSerach);

// end point users
router.get('/users', adminController.viewUsers);
router.post('/users', adminController.addUsers);
router.put('/users', adminController.editUsers);
router.delete('/users/:id', adminController.deleteUsers);


module.exports = router;