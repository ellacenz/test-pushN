  
var options = {
    data: {
        "driver_id": currentUserId,
        "first_name": AppCache.userInfo.name,
        "status": "WAITING",
        "customer_name": AppCache.userInfo.name,
    }
};

apioAPIRegister(options);  

this.setVisible(false)