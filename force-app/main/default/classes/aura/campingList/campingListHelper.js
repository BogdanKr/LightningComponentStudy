/**
 * Created by Bogdan on 30.09.2020.
 */

({
  createItem: function(component, item) {
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
  },
});