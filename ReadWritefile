const fs = require ('fs');

const wf = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file,data,(err) => {
            if(err) reject(console.log(err));
            resolve (console.log('file saved'));

        })
    })
}

const rf = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file,'utf8',(err, data) => {
            if (err) reject(err)
            resolve (console.log(data));

        })
    })
}

wf('text.txt', '').then(rf('text.txt'));
