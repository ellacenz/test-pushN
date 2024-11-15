var options = {
    parameters: {
        "where": JSON.stringify({id: selectedDriver.id}), // Optional 
    }
};

apioAPIDeleteRegisteredDrivers(options);
oDialogDelete.close();
sap.m.MessageToast.show("Sucessfully Deleted!");