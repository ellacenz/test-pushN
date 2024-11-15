var serviceWorkerScript;
var url = "https://gtmdemosystem.neptune-software.cloud/media/root/Emmanuella/Push%20Notification/service-worker.js"

await fetch(url)
  .then((res) => res.text())
  .then((text) => {
    // do something with "text"
    serviceWorkerScript = text;
   })
  .catch((e) => console.error(e));

result.headers = {
  'Service-Worker-Allowed': '/'
};
result.contentType = 'text/javascript';
result.data = serviceWorkerScript;
complete();