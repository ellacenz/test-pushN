self.addEventListener("install", (event) => {
    //console.log("sw", event);
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    //console.log("activate", event);
});

self.addEventListener("push", (e) => {
    
    const body = e.data.text() || "Push message has no payload";

    const options = {
        body,
        icon: "https://gtmdemosystem.neptune-software.cloud/media/root/Emmanuella/Push%20Notification/free-logo.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1,
        },
        actions: [
            {
                action: "explore",
                title: "Open App",
                icon: "https://gtmdemosystem.neptune-software.cloud/media/root/Emmanuella/Push%20Notification/free-logo.png",
            },
            
        ],
    };
    //console.log(body);
    e.waitUntil(
        self.registration.showNotification("Notification from Facility Admin", options)
    );
});

self.addEventListener("notificationclick", (event) => {
    const eventAction = event.action;
    console.log("message event fired! event action is:", `'${eventAction}'`);
    //Add action 

    const url = "https://gtmdemosystem.neptune-software.cloud/launchpad/demo%20push%20notification";
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({ type: "window" }).then((windowClients) => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && "focus" in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});
