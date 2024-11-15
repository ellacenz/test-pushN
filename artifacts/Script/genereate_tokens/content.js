var webpush = modules.webpush;

// VAPID keys should be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

console.log(vapidKeys)