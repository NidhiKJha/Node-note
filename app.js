
console.log("Starting app.js");
const fs = require('fs');


const _=require('lodash');
const yargs=require('yargs');


const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command) ;
console.log(process.argv);

if (command === 'add'){
  console.log('Adding new note ');


}else if (command === 'list'){
  console.log('Listing all notes');
} else if (command ==="read"){
  console.log("Reading node");
} else if (command ==="remove"){
  console.log("Removing note");
}

}
else{
  console.log("Command not recogonised");
}

/*var command = process.argv[2];
console.log('Command: ', command);
if (command==='add'){
  console.log("Adding new note");

} else if (command === 'list'){
  console.log('Listing all notes');

}else {
  console.log("Command not recogonised"); */
}
