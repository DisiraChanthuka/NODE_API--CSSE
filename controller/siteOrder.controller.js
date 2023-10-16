const SiteOrderServices = require('../services/siteOrder.services');



exports.createSiteOrder = async(req , res , next) =>{
    try {
        const {userId , Company , Warehouse , Reference ,Required_Date } = req.body;
        let order = await SiteOrderServices
            .createSiteOrder(
                userId ,
                Company ,
                Warehouse, 
                Reference,
                Required_Date
                );

        res.json({status: true , success:order});
    } catch (error) {
        next(error);
    }
}

exports.getSiteOrder = async(req , res , next) =>{
    try {
        const {userId} = req.body;
        let order = await SiteOrderServices.getSiteOrder(userId);

        res.json({status: true , success:order});
    } catch (error) {
        next(error);
    }
}

exports.deletSiteOrder = async(req , res , next) =>{
    try {
        const {id} = req.body;

        let deleted = await SiteOrderServices.deletSiteOrder(id);

        res.json({status: true , success:deleted});
    } catch (error) {
        next(error);
    }
}

exports.updateSiteOrder = async (req, res, next) => {
    try {
      const { id, Company, Warehouse , Reference , Required_Date} = req.body;
      const updatedSiteOrder = await SiteOrderServices
      .updateSiteOrder(
        id,
        Company,
        Warehouse ,
        Reference,
        Required_Date
           );
      res.json({ status: true, success: updatedSiteOrder });
    } catch (error) {
      next(error);
    }
  }