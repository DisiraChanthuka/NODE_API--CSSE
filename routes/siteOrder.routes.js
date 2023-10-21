const router = require('express').Router();
const SiteOrderController = require('../controller/siteOrder.controller');


//order routes
router.post('/storeSiteOrder' , SiteOrderController.createSiteOrder);

router.post('/getSiteOrderList' , SiteOrderController.getSiteOrder);

router.post('/deletSiteOrder' , SiteOrderController.deletSiteOrder);

router.put('/updateSiteOrder', SiteOrderController.updateSiteOrder);

module.exports = router;