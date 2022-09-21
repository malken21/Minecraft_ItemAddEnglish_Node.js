const fs = require('fs');

if (!fs.existsSync("./lang")) {
    fs.mkdirSync("./lang");
    console.log("./lang/??_??.json");
    return;
}

const Config = require("./Config.json");

const main = require(`./lang/${Config.main}`);
const add = require(`./lang/${Config.add}`);

let result = {};

const keys = Object.keys(main);
for (let loop = 0; loop < keys.length; loop++) {

    const key = keys[loop];

    if (key.startsWith("block.minecraft") || key.startsWith("item.minecraft")) {
        const text = main[key] + Config.space + add[key];
        result[keys[loop]] = text;
        console.log(text)
    }
}

console.log(result);
fs.writeFile('./lang/result.json', JSON.stringify(result, null, "\t"), function (err) {
    if (!err) {
        console.log("finish!! (./lang/result.json)")
    }
})