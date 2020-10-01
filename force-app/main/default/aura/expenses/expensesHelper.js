({
  saveNewExpense: function(component, expense, callback) {
    let action = component.get("c.saveExpense");
    action.setParams({
      "expense": expense
    });
    if (callback) {
      action.setCallback(this, callback);
      component.set("v.expense", null);

    }
    $A.enqueueAction(action);
  },
  createExpense: function(component, expense) {
    this.saveNewExpense(component, expense, function(response){
      let state = response.getState();
      if (state === "SUCCESS") {
        let expenses = component.get("v.expenses");
        expenses.push(response.getReturnValue());
        component.set("v.expenses", expenses);

      }
    });
  },
  updateExpense: function(component, expense) {
    this.saveNewExpense(component, expense);
  },

  // createExpense: function(component, expense) {
  //   let action = component.get("c.saveExpense");
  //   action.setParams({
  //     "expense": expense
  //   });
  //   action.setCallback(this, function(response){
  //     let state = response.getState();
  //     if (state === "SUCCESS") {
  //       let expenses = component.get("v.expenses");
  //       expenses.push(response.getReturnValue());
  //       component.set("v.expenses", expenses);
  //     }
  //   });
  //   $A.enqueueAction(action);
  // },
  //
  // updateExpense: function(component, expense) {
  //   let action = component.get("c.saveExpense");
  //   action.setParams({
  //     "expense": expense
  //   });
  //   action.setCallback(this, function(response){
  //     let state = response.getState();
  //     if (state === "SUCCESS") {
  //       // do nothing!
  //     }
  //   });
  //   $A.enqueueAction(action);
  // },
})