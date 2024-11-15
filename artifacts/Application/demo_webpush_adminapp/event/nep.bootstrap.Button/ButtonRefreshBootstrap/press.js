var options = {
    parameters: {
        "where": JSON.stringify({status: "WAITING"}), // Optional 
        "select": "", // Optional 
        "take": "", // Optional 
        "skip": "", // Optional 
        "order": "" // Optional 
    }
};

apioAPIGetRegisteredDrivers(options);