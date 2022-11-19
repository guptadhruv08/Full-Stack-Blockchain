const fs = require('fs');

let readStream = fs.createReadStream("data.txt");
let writeStream = fs.createWriteStream("output.txt");


readStream.on("data", function (data) {
    console.log(data);
    let dataChunks = data.toString(); 
    console.log(dataChunks);
    writeStream.write(dataChunks); 
});


readStream.on('end', function () {
    writeStream.close(() => {
        console.log('\nwrite is completed!');
    })
})

