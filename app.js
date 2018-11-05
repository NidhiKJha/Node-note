console.log("Starting app.js");
const fs = require('fs');

const os = require('os');
var user = os.userInfo();
const notes = require('./notes.js');






//fs.appendFileSync('greetings.txt','Hello' + user.username);
fs.appendFileSync('greetings.txt',`hello ${user.username} You are ${notes.age}.`);
