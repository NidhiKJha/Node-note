
console.log("Starting app.js");
const fs = require('fs');

const os = require('os');
const _=require('lodash');

//var user = os.userInfo();
const notes = require('./notes.js');

//var res = notes.addNote();

console.log('Result:', notes.add(9, -2));
