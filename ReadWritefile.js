const fs = require ('fs');

const wf = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file,data,(err) => {
            if(err) 
                reject(err); 
            } else{
                resolve ('file saved');

        })
    })
}

const rf = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file,'utf8',(err, data) => {
            if(err) 
                reject(err);
            } else{
                resolve (data);

        })
    })
}

wf('text.txt', '').then(rf('text.txt'));
