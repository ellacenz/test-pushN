//const reqData = req.body;
const webpush = modules.webpush;

const eventResponse = {
    process: payload.process,
    data: null,
};

// DEMO ONLY! keys should be stored in a secure way outside of the code
const vapidKeys = {
    publicKey:
        "BAJySUtcMihB_KTVr2tmn7xOVbyzPcpw955CAITkZgi3ucRcZsjiicOyz41rT4atxSypEAxYEij6TRt3g9hnL7c",
    privateKey: "605RFEVHydTBXXQgch-wPhRCqS6uJ5ujk4-LuqFjYeA",
};

webpush.setVapidDetails(
    // used in case the push service notice a problem with your feed and need to contact you
    "mailto:emmanuella.ndukwe@neptune-software.com",
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const subscriptionList = await entities.push_subscription_register
    .createQueryBuilder("user_sub")
    .where("user_sub.user_id = :id", { id: reqData.driver_id })
    .getMany();

log.info("sub");
log.info(subscriptionList);

await Promise.all(
    subscriptionList.map((sub) => {
        log.info(sub);
        const pushSubscription = {
            endpoint: sub.endpoint,
            expirationTime: sub.expirationTime,
            keys: {
                auth: sub.auth,
                p256dh: sub.p256dh,
            },
        };
        try {
            log.info("I tried");
            
            return webpush.sendNotification(pushSubscription, "It is your turn to use Item");
        } catch (e) {
            log.info("There was an error");
            log.info(e);
            throw e;
            return entities.push_subscription_register.delete(sub.id);
        }
    })
);

// eventResponse.data = { status: "User status successfully Updated to Finished!" };
// log.info("eventResponse")
// log.info(eventResponse.data)
const eventResult = await p9.events.publish("DriverAppListener", eventResponse);
log.info("eventResult")
log.info(eventResult)

result.data = subscriptionList;
complete();
