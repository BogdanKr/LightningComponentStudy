/**
 * Created by Bogdan on 30.09.2020.
 */

({
  // Load expenses from Salesforce
  doInit: function(component, event, helper) {
    // Create the action
    let action = component.get("c.getItems");
    // Add callback behavior for when response is received
    action.setCallback(this, function(response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.items", response.getReturnValue());
      }
      else {
        console.log("Failed with state: " + state);
      }
    });
    // Send action off to be executed
    $A.enqueueAction(action);
  },

  clickCreateItem: function(component, event, helper) {
    let validCampingItem = component.find('campingItemForm').reduce(function (validSoFar, inputCmp) {
      // Displays error messages for invalid fields
      inputCmp.showHelpMessageIfInvalid();
      return validSoFar && inputCmp.get('v.validity').valid;
    }, true);
    // If we pass error checking, do some real work
    if(validCampingItem){
      // Create the new item
      let newCampingItem = component.get("v.newItem");
      console.log("Create camping item: " + JSON.stringify(newCampingItem));
      helper.createItem(component, newCampingItem);


      // let theItems = component.get("v.items");
      // // Copy the item to a new item
      // let newItem = JSON.parse(JSON.stringify(newCampingItem));
      // theItems.push(newItem);
      // component.set("v.items", theItems);
      //
      // component.set("v.newItem", "{'sobjectType': 'Camping_Item__c', 'Name':'', 'Quantity__c': 0, 'Price__c': 0,'Packed__c': false}" );

    }
  }
});