function askNotificationPermission() {
    // function to actually ask the permissions
    console.log("notification clicked");
    console.log(Notification);
    try {
        Notification.requestPermission().then(() => {
            getSubscription();
            notificationBtn.setVisible(false);
        });
        console.log("I got here");
    } catch (error) {
        // Safari doesn't return a promise for requestPermissions and it
        // throws a TypeError. It takes a callback as the first argument
        // instead.
        if (error instanceof TypeError) {
            Notification.requestPermission(() => {
                getSubscription();
                notificationBtn.setVisible(false);
            });
        } else {
            console.log("Notifification permission not granted");
        }
    }
}

