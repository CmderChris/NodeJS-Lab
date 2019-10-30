const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

const dataPath = path.join(__dirname, "./downloads/images");

rp('https://reddit.com/r/popular.json') 
    .then(r => {
        JSON.parse(r).data.children.forEach(item => {
            let url = path.extname(item.data.url);
            let id = item.data.id;

            if (url === '.jpg' || url === '.png' || url === '.gif') {

                rp(item.data.url, { encoding: 'base64' })
                .then(media => {

                    fs.writeFile((dataPath + id + url), media, {encoding: 'base64'}, (err) => {
                        if(err) throw err;
                    });
                });
            }
        });
    });