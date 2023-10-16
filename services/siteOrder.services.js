const SiteOrderModel = require('../model/siteOrder.model');

class SiteOrderServices{
    static async createSiteOrder(userId , Company , Warehouse , Reference , Required_Date ){
        const createSiteOrder = new SiteOrderModel({
            userId , 
            Company , 
            Warehouse , 
            Reference ,
            Required_Date , 
        });
        return await createSiteOrder.save();
    }

    static async getSiteOrder(userId ){
        const orderData = await SiteOrderModel.find({userId})
        return orderData;
    }

    static async deletSiteOrder(id ){
        const deleted = await SiteOrderModel.findOneAndDelete({_id:id})
        return deleted;
    }

    static async updateSiteOrder(id, Company, Warehouse , Reference , Required_Date) {
        const updatedSiteOrder = await SiteOrderModel.findOneAndUpdate(
          { _id: id },
          { Company, Warehouse , Reference , Required_Date},
          { new: true }
        );
        return updatedSiteOrder;
      }

    
}

module.exports = SiteOrderServices;