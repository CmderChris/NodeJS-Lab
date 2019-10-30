const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

const articlePath = path.join(__dirname, "./popular_articles.json");

let articleArray = [];

rp('https://reddit.com/r/popular.json') 
    .then(res => {

        JSON.parse(res).data.children.forEach(item => {

            let info = { Title: item.data.title,
            Url: item.data.url, Author: item.data.author };
           
             articleArray.push(info);

        })

        fs.appendFileSync(articlePath, JSON.stringify(articleArray));

    })
    .catch(error => {
        console.log(error);
    })