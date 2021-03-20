// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
var readline = require('readline-sync');

var name = readline.question("What is publish url? ");

//console.log("URL : " + name);

//var exec = require('child_process').exec;
//var child;
 //global.a="global variable ";
// rl.question('Enter the url here ', (answer) => {
//     global.a = answer;
//     console.log("this is from first file"+global.a);

//     //var child = exec('node nightwatch.js tests/shelfs/zeplinTest.js');
    
//    // child.stdout.on('data', function(data) {
//        // console.log(data);
//     //});
//     //child.stderr.on('data', function(data) {
//         //console.log('stdout: ' + data);
//    // });
//     /*child.on('close', function(code) {
//         console.log('closing code: ' + code);
//     });*/
    
//     rl.close();
// });

module.exports = name;