var http  = require('http')
var fs = require('fs')

const file = fs.readFileSync('data.txt');
console.log(file.toString());

fs.writeFile('data.txt','Write a program in Node js',function(err){

    console.log('data written successfully');
});





