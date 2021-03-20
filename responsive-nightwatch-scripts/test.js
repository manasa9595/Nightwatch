var exec = require('child_process').exec;

var child;

const XLSX = require('xlsx');

const regressionFile = XLSX.readFile('C:/Users/sree.manikanta/Downloads/RegressionPackCopy.xlsx');

const regressionFileSheets = regressionFile.SheetNames;

console.log(XLSX.utils.sheet_to_json(regressionFile.Sheets[regressionFileSheets[1]]))

var total = XLSX.utils.sheet_to_json(regressionFile.Sheets[regressionFileSheets[1]]);

var totalURLs = Object.keys(total).length;

console.log("totalURLs: "+totalURLs);

 

/*for (var i = 0; i <= totalURLs-1 ; i++) {

                                var URLs = XLSX.utils.sheet_to_json(regressionFile.Sheets[regressionFileSheets[1]])[i]['List of Pages']

                                console.log("URLs: "+URLs)

                                URLtags = XLSX.utils.sheet_to_json(regressionFile.Sheets[regressionFileSheets[1]])[i]['Name of the Shelf']

                                console.log("URLtags: "+URLtags)

               

 

var child = exec("node nightwatch.js "+URLtags);

                child.stdout.on('data', function(data) {

                console.log(data);

    });

    child.stderr.on('data', function(data) {

        console.log('stdout: ' + data);

    });

}*/

var itr = 0;

function executeNightwatch(_itr){

console.log('>>fn>>',_itr);

                                var URLs = total[_itr]['List of Pages'];

                                console.log("URLs: "+URLs);

                                URLtags = total[_itr]['Name of the Shelf'];

                                console.log("URLtags: "+URLtags);

 

 

                var child = exec("node nightwatch.js " + URLtags);

                child.stdout.on('data', function(data) {

                console.log(data);

                if(data.indexOf('total assertions passed')>=0){

                                if(_itr <= totalURLs-1){

                                                                console.log('>>if>>',_itr);

                                                                _itr++;

                                                                executeNightwatch(_itr);

                                                }

                }

    });

    child.stderr.on('data', function(data) {

        console.log('stdout: ' + data);

    });

}

 

executeNightwatch(itr);

 

 

module.exports = {

 

 

                ]

  }

};

 

/*totalArray=Object.keys(total);

var URLs;

 

    totalArray.forEach(function(i) {

  //console.log(word);

   var URLs = XLSX.utils.sheet_to_json(regressionFile.Sheets[regressionFileSheets[1]])[i]['List of Pages'];

                                console.log("URLs: "+URLs);

                                var URLtags = XLSX.utils.sheet_to_json(regressionFile.Sheets[regressionFileSheets[1]])[i]['Name of the Shelf'];

                                console.log("URLtags: "+URLtags);

 

                                var child = exec("node nightwatch.js "+URLtags);

               

                                                var child = exec("node nightwatch.js "+URLtags);

 

                                                child.stdout.on('data', function(data) {

                                                console.log(data);

                                    });

                                    child.stderr.on('data', function(data) {

                                        console.log('stderr: ' + data);

                                    });

});*/

 

               

 

//     child.on('close', function(code) {

//            console.log('closing code: ' + code);

//            });

 

    //rl.close();