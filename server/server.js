let path = require('path');
let fs = require('fs');
let filePath = path.join(__dirname, '..', 'chirps.json');
let content;

let chirpObj = [
    {name: 'Cat', message: 'Hi!'},
    {name: 'Jessica', message: 'Hello!'},
    {name: 'Cindy', message: 'Sup?'},
    {name: 'Jennifer', message: 'nm!'},
    {name: 'Alice', message: 'cool!'}
]

var myJSON = JSON.stringify(chirpObj);

fs.writeFile('chirps.json', myJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  
 
 
  fs.readFile(filePath, 'utf-8', function read(err, data) {
      if (err) {
          throw err;
      }
      content = data;

      console.log(content);   
  });