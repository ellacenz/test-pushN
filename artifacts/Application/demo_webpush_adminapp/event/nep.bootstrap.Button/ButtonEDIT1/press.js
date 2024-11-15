actionType = "UPDATE";

const context = oEvent.oSource.getBindingContext();  

// Get Entire Model
const data = context.getObject();
console.log(data);
selectedUser = data;
modelSimpleForm1.setData(selectedUser)
oDialog.open()
