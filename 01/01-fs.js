const fs = require('fs');

fs.readFile(__dirname + "/config.json", 'utf-8', (err, data) => {
  if(err) throw err;
  console.log(data.toString());
})

console.log('read...');