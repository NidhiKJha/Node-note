
console.log("Starting app.js");
const fs = require('fs');

const os = require('os');
const _=require('lodash');

//var user = os.userInfo();
const notes = require('./notes.js');
var filteredArray = _.uniq(["Mike"]);
console.log(filteredArray);
//console.log(_.isString(true));
//console.log(_.isString('Andrew'));

//var res = notes.addNote();

//console.log('Result:', notes.add(9, -2));
