const SiteOrderServices = require('../services/siteOrder.services');


//creating orders
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

        res.json({status: 200 , success:order});
        console.log("----NEW ORDER PLACED ✔----",order);
    } catch (error) {
        next(error);
    }
}

//fetch orders
exports.getSiteOrder = async(req , res , next) =>{
    try {
        const {userId} = req.body;
        let order = await SiteOrderServices.getSiteOrder(userId);

        res.json({status: 200 , success:order});
        console.log("----ORDER FETCHED ✔----");
    } catch (error) {
        next(error);
    }
}

//delete orders
exports.deletSiteOrder = async(req , res , next) =>{
    try {
        const {id} = req.body;

        let deleted = await SiteOrderServices.deletSiteOrder(id);

        res.json({status: 200 , success:deleted});
        console.log("----ORDER DELETED ✔----");
    } catch (error) {
        next(error);
    }
}

//update orders
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
      res.json({ status: 200, success: updatedSiteOrder });
      console.log("----ORDER UPDATED ✔----" ,updatedSiteOrder);
    } catch (error) {
      next(error);
    }
  }