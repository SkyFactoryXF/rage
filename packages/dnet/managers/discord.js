const webhook = require("webhook-discord");

let mysql = require('../modules/mysql');
let methods = require('../modules/methods');
let user = require('../user');

let discord = exports;

discord.report = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.deadlist = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.invaderAd = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.invaderNews = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.fractionNews = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";

discord.workBcsd = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.workLspd = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.workUsmc = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.workNews = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.workEms = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.workGov = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";

discord.marketProperty = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.marketBusiness = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";
discord.marketVehicles = "https://discord.com/api/webhooks/876696775753359420/UPDfvxJiQ2FmLfusULCiaD5MG_-ecTYi_TctAXGI_6BQRcCB1ejBidY1jplOcO_Uj4so";

discord.dednetImg = "https://i.imgur.com/WhubVMp.png";
discord.socialClub = "https://a.rsg.sc//n/";

discord.imgGov = "https://i.imgur.com/eFGOitl.png";
discord.imgLspd = "https://i.imgur.com/uRUp6ig.png";
discord.imgFib = "https://i.imgur.com/KaMdGAl.png";
discord.imgUsmc = "";
discord.imgSheriff = "https://i.imgur.com/sOPdklt.png";
discord.imgEms = "https://i.imgur.com/MoMutqI.png";
discord.imgInvader = "https://i.imgur.com/xxUGqJi.png";

discord.colorGov = "#795548";
discord.colorLspd = "#2196F3";
discord.colorFib = "#212121";
discord.colorUsmc = "#9E9E9E";
discord.colorSheriff = "#8BC34A";
discord.colorEms = "#f44336";
discord.colorInvader = "#FFEB3B";

discord.sendFractionList = function (title, sender, message, senderImg = discord.dednetImg, avatar = discord.imgGov, color = "#f44336") {
    const Hook = new webhook.Webhook(discord.fractionNews);

    const msg = new webhook.MessageBuilder()
        .setName('?????????????? ??????????')
        .setTitle(sender)
        .setAvatar(avatar)
        .setDescription(message)
        .setFooter(title, senderImg)
        .setColor(color)
        .setTime();

    Hook.send(msg);
};

discord.sendDeadList = function (target, desc, reason, sender = 'Server', senderImg = discord.dednetImg, color = "#f44336") {
    const Hook = new webhook.Webhook(discord.deadlist);

    const msg = new webhook.MessageBuilder()
        .setName("DEAD LIST")
        .setTitle(target)
        .addField("????????????????", desc)
        .addField("??????????????", reason)
        .setFooter(sender, senderImg)
        .setColor(color)
        .setTime();

    Hook.send(msg);
};

discord.sendAd = function (title, name, text, phone, editor, editorImg) {
    const Hook = new webhook.Webhook(discord.invaderAd);

    let color = "#607D8B";
    if (title === '??????????????')
        color = "#03A9F4";
    if (title === '??????????????')
        color = "#8BC34A";
    if (title === '????????????')
        color = "#FFEB3B";

    const msg = new webhook.MessageBuilder()
        .setName('?????????????????? ????????????????????')
        .setTitle(title)
        .setAvatar(discord.imgInvader)
        .addField(`Phone Number`, `\`\`\`${phone}\`\`\``, true)
        .addField(`Customer`, `\`\`\`${name}\`\`\``, true)
        .setDescription(`\`\`\`fix\n${text}\`\`\``)
        .setFooter(editor, 'https://a.rsg.sc//n/' + editorImg.toLowerCase())
        .setColor(color)
        .setTime();

    Hook.send(msg);
};

discord.sendNews = function (title, text, editor, editorImg) {
    const Hook = new webhook.Webhook(discord.invaderNews);
    const msg = new webhook.MessageBuilder()
        .setName('??????????????')
        .setTitle(title)
        .setDescription(text)
        .setFooter(editor, 'https://a.rsg.sc//n/' + editorImg)
        .setColor("#f44336")
        .setTime();

    Hook.send(msg);
};

discord.sendWork = function (url, player, dscrd, text) {

    if (!user.isLogin(player))
        return;

    let history = '';
    let sender = `${user.getRpName(player)} (${user.getId(player)})`;
    let phone = methods.phoneFormat(user.get(player, 'phone'));
    let senderImg = player.socialClub;

    mysql.executeQuery(`SELECT * FROM log_player WHERE user_id = ${user.getId(player)} AND type = 1 ORDER BY id DESC LIMIT 5`, (err, rows, fields) => {
        if (rows.length > 0) {
            try {
                rows.forEach(row => {
                    history += `${methods.unixTimeStampToDateTimeShort(row['timestamp'])} | ${row['do']}\n`;
                });
            }
            catch (e) {
                methods.debug(e);
            }
        }

        if (history === '')
            history = '???????????????????????? ?????????????? - ??????';

        const Hook = new webhook.Webhook(url);
        const msg = new webhook.MessageBuilder()
            .setName('??????????????????')
            .setTitle(sender)
            .setDescription(text)
            .addField(`??????????????`, `\`\`\`${phone}\`\`\``, true)
            .addField(`??????????????`, `\`\`\`${dscrd}\`\`\``, true)
            .addField(`Work ID`, `\`\`\`${user.get(player, 'work_lvl')} / ${user.get(player, 'work_exp')}\`\`\``, true)
            .addField(`??????????????`, `\`\`\`${history}\`\`\``)
            .setFooter(sender, 'https://a.rsg.sc//n/' + senderImg)
            .setColor("#f44336")
            .setTime();

        Hook.send(msg);
    });
};

discord.sendMarketProperty = function (title, text) {
    const Hook = new webhook.Webhook(discord.marketProperty);
    const msg = new webhook.MessageBuilder()
        .setName('?????????????? ??????????????????')
        .setTitle(title)
        .setDescription(`\`\`\`ml\n${text}\`\`\``)
        .setFooter('??????????????????????????', discord.imgGov)
        .setColor("#f44336")
        .setTime();
    Hook.send(msg);
};

discord.sendMarketBusiness = function (title, text) {
    const Hook = new webhook.Webhook(discord.marketBusiness);
    const msg = new webhook.MessageBuilder()
        .setName('?????????????? ??????????????')
        .setTitle(title)
        .setDescription(`\`\`\`ml\n${text}\`\`\``)
        .setFooter('??????????????????????????', discord.imgGov)
        .setColor("#f44336")
        .setTime();
    Hook.send(msg);
};

discord.sendMarketVehicles = function (title, text, imgUrl) {
    const Hook = new webhook.Webhook(discord.marketVehicles);
    const msg = new webhook.MessageBuilder()
        .setName('?????????????? ????????????????????')
        .setTitle(title)
        .setDescription(`\`\`\`ml\n${text}\`\`\``)
        .setImage(imgUrl)
        .setFooter('??????????????????????????', discord.imgGov)
        .setColor("#f44336")
        .setTime();
    Hook.send(msg);
};