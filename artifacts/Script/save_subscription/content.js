const reqData = req.body;
//log.info(reqData)

const tableData = {
    endpoint: reqData.subData.endpoint,
    expirationTime: reqData.subData.expirationTime,
    auth: reqData.subData.keys.auth,
    p256dh: reqData.subData.keys.p256dh,
    user_id: reqData.user_id,
};
const dataCount = await entities.push_subscription_register.count(tableData);
if (dataCount == 0) await entities.push_subscription_register.insert(tableData);

complete();

