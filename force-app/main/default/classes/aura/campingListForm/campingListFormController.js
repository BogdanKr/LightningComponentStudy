/**
 * Created by Bogdan on 01.10.2020.
 */

({
  clickCreateItem: function (component, event, helper) {
    let validCampingItem = component.find('campingItemForm').reduce(
        function (validSoFar, inputCmp) {
          // Displays error messages for invalid fields
          inputCmp.showHelpMessageIfInvalid();
          return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
    // If we pass error checking, do some real work
    if (validCampingItem) {
      // Create the new item
      let newCampingItem = component.get("v.newItem");
      console.log("Create camping item: " + JSON.stringify(newCampingItem));

      helper.createItem(component, newCampingItem);
    }
  }
});