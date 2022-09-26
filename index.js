const fs = require('fs');


const Config = require("./Config.json");

//langディレクトリがなかったら 追加
if (!fs.existsSync("./lang")) {
    fs.mkdirSync("./lang");
}


const add = require(Config.add);
const index = require(`${Config.assets}/indexes/${Config.index}`);
const keys = Object.keys(index.objects);


for (let loop = 0; loop < keys.length; loop++) {
    let key = keys[loop]

    if (key.startsWith("minecraft/lang/")) {//全ての言語が終わるまで繰り返す
        const file = index.objects[key].hash;
        key = key.replace("minecraft/lang/", "");

        const main = JSON.parse(fs.readFileSync(`${Config.assets}/objects/${file.slice(0, 2)}/${file}`).toString());

        const result = langAdd(main, add);

        fs.writeFile(`./lang/${key}`, JSON.stringify(result, null, "\t"), function (err) {
            if (!err) {
                console.log(`finish!! (./lang/${key})`)
            }
        })

        console.log(key);

    }
}


function langAdd(main, add) {// 後ろに別言語追加 関数

    let result = {};

    const keys = Object.keys(main);
    for (let loop = 0; loop < keys.length; loop++) {

        const key = keys[loop];

        if (key.startsWith("block.minecraft") || key.startsWith("item.minecraft")) {
            const text = main[key] + Config.space + add[key];
            result[keys[loop]] = text;
        }
    }
    return result;
}