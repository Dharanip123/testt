using { ust.dharani.p.datamodel.master, ust.dharani.p.datamodel.transaction } from '../db/datamodel1';

 
 service CatalogService @(path: 'CatalogService') {
 
    entity ProductSet as projection on master.product;
    entity BusinessPartnerSet as projection on master.businesspartner;
    entity BusinessAddressSet as projection on master.address;
    entity POs @(odata.draft.enabled: true) as projection on transaction.purchaseorder{
         *,
         Items
        
    }

     entity POItems as projection on transaction.poitems;

 
}