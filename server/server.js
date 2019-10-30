const path = require('path');
const fs = require('fs');

const chirpsPath = path.join(__dirname, '../chirps.json');

const chirps = {
    chirp1: 'hello there',
    chirp2: 'i hate sand',
    chirp3: 'pizza time',
    chirp4: 'oh boy yeah'
}

fs.writeFile(chirpsPath, JSON.stringify(chirps), (err) => {
    if(err) throw err;
});

fs.readFile(chirpsPath, (err, data) => {
    if(err) throw err;

    let info = JSON.parse(data);
    console.log(info);
});