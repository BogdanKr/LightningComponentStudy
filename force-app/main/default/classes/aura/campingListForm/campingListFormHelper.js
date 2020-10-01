/**
 * Created by Bogdan on 01.10.2020.
 */

({
  createItem: function (component, newItem) {
    let createItem = component.getEvent("addItem");
    createItem.setParams({ "item": newItem });
    createItem.fire();

    component.set("v.newItem", "{'sobjectType': 'Camping_Item__c', 'Name':'', 'Quantity__c': 0, 'Price__c': 0,'Packed__c': false}" );

  }
});