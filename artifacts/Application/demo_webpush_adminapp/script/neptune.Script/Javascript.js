var actionType = "";
var selectedUser = {};
var selectedDriver= {};

function clearForm(items){
    items.forEach((item) => {
        item.setValue("");
    })
}

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
var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  quality: 0.3,
  margin: 1,
  color: {
    dark:"#010599FF",
    light:"#FFBF60FF"
  }
}

// QRCode.toDataURL('text', opts, function (err, url) {
//   if (err) throw err

//   Image.setSrc(url);
// })
setTimeout(function () {
  //  Do something
  console.log("This message will be logged after 1000ms");
new QRious({
  element: document.getElementById("qrcode"),
  background: '#ffffff',
  backgroundAlpha: 1,
  foreground: '#5868bf',
  foregroundAlpha: 1,
  level: 'H',
  padding: 0,
  size: 300,
  value: "website"
});

}, 1000);