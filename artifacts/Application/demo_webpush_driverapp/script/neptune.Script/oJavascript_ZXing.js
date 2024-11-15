let selectedDeviceId;

const codeReader = new ZXing.BrowserMultiFormatReader()
//console.log('ZXing code reader initialized')
codeReader.listVideoInputDevices()
  .then((videoInputDevices) => {
    //console.log(videoInputDevices);
     if(videoInputDevices.length >1){
    videoInputDevices.forEach((videoDevice)=>{
      if(videoDevice.label.search("back") > -1){
        selectedDeviceId = videoDevice.deviceId;
      }
    })}else{
      selectedDeviceId = videoInputDevices[0].deviceId;
    }
    
    

  })
  .catch((err) => {
    console.error(err)
  })


function startScan() {

  codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
    if (result) {
      //console result to see the output of the scan
     //console.log(result);

      //Sets it to the UI
     // oTitleScanOutput.setText(result.text)
stopScan();
      //Automatically closes the scanner once a result is captured
      //codeReader.reset()
    }
    if (err && !(err instanceof ZXing.NotFoundException)) {
      console.error(err)

    }
  })

}


function stopScan() {

  codeReader.reset();
  oDialogScan.close();
sap.m.MessageToast.show("You have been Registered! You will be notified When it gets to your turn.", {
    duration: 10000,                  // default
    width: "15em",                   // default
    my: "center center",             // default
    at: "center center",             // default
    of: document,                    // default
    offset: "0 0",                   // default
    collision: "fit fit",            // default
    onClose: null,                   // default
    autoClose: true,                 // default
    animationTimingFunction: "ease", // default
    animationDuration: 1000          // default
});
  
var options = {
    data: {
        "driver_id": currentUserId,
        "first_name": AppCache.userInfo.name,
        "status": "WAITING",
        "customer_name": AppCache.userInfo.name,
    }
};

apioAPIRegister(options);  
}

//  Read further about different implementation procedure on github -https://github.com/zxing-js/library
