const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    // TODO: Implement this function
    const filePath = path.join(__dirname, filename);
    fs.readFile(filePath, (err, data) => {
      if(err){
        throw new Error('Error while reading to file');
        console.log(err)
        return;
      }
      const regex = new RegExp(`\\b${word}\\b`, 'g');
      const updatedContent = data.toString().replace(regex, '');
      fs.writeFile(filePath, updatedContent, (err)=>{
        if(err){
          throw new Error('Error while writing to file');
          console.log(err)
          return;
        }
        console.log('updating file is done successfully')
      })
    })
    rl.close();
  });
});
