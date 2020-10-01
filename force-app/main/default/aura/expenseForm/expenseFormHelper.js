/**
 * Created by Bogdan on 01.10.2020.
 */

({
  createExpense: function(component, newExpense) {
    let createEvent = component.getEvent("createExpense");
    createEvent.setParams({ "expense": newExpense });
    console.log("Fire create event :" + createEvent);
    createEvent.fire();

  },


});