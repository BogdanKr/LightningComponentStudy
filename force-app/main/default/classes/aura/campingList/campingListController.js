/**
 * Created by Bogdan on 30.09.2020.
 */

({
  // Load expenses from Salesforce
  doInit: function (component, event, helper) {
    // Create the action
    let action = component.get("c.getItems");
    // Add callback behavior for when response is received
    action.setCallback(this, function (response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.items", response.getReturnValue());
      } else {
        console.log("Failed with state: " + state);
      }
    });
    // Send action off to be executed
    $A.enqueueAction(action);
  },

  handleAddItem : function (component, event, helper){
    let newItem = event.getParam("item");
    let action = component.get("c.saveItem");
    action.setParams({
      "item": item
    });
    action.setCallback(this, function(response){
      let state = response.getState();
      if (state === "SUCCESS") {
        let items = component.get("v.items");
        items.push(response.getReturnValue());
        component.set("v.items", items);
      }
    });
    $A.enqueueAction(action);
  }

  // let theItems = component.get("v.items");
  // // Copy the item to a new item
  // let newItem = JSON.parse(JSON.stringify(newCampingItem));
  // theItems.push(newItem);
  // component.set("v.items", theItems);
  //
  // component.set("v.newItem", "{'sobjectType': 'Camping_Item__c', 'Name':'', 'Quantity__c': 0, 'Price__c': 0,'Packed__c': false}" );

});