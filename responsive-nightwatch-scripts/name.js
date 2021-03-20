const readline = require('readline');
var fs1 = require("fs");
var async = require('async');

var write_file_path = 'tests/shelfs/zeplin.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

zeplinSelectors={};

console.log("Please select the components in shelf\n");
rl.question('1.Image 2.Text 3.Title\n', (answer) => {
    // TODO: Log the answer in a database   
    zeplinSelectors["component"] = {};   
    zeplinSelectors["component"]["xl"] = {};
    zeplinSelectors["component"]["xl"]["name_selector"] = "";
    zeplinSelectors["component"]["l"] = {};
    zeplinSelectors["component"]["l"]["name_selector"] = "";
    zeplinSelectors["component"]["m"] = {};
    zeplinSelectors["component"]["m"]["name_selector"] = "";
    zeplinSelectors["component"]["s"] = {};
    zeplinSelectors["component"]["s"]["name_selector"] = "";

    zeplinSelectors["shelf"] = {};
        zeplinSelectors["shelf"]["zeplin-selectors"] = {};
        //XL
        zeplinSelectors["shelf"]["zeplin-selectors"]["xl"] = {};
        zeplinSelectors["shelf"]["zeplin-selectors"]["xl"]["padding-top"] = {};
            zeplinSelectors["shelf"]["zeplin-selectors"]["xl"]["padding-top"]["selector"] = "";
            zeplinSelectors["shelf"]["zeplin-selectors"]["xl"]["padding-top"]["MoveToELementSel"] = "";
        zeplinSelectors["shelf"]["zeplin-selectors"]["xl"]["padding-bottom"] = {};
            zeplinSelectors["shelf"]["zeplin-selectors"]["xl"]["padding-bottom"]["selector"] = "";
            zeplinSelectors["shelf"]["zeplin-selectors"]["xl"]["padding-bottom"]["MoveToELementSel"] = "";
        //L
            zeplinSelectors["shelf"]["zeplin-selectors"]["l"] = {};
        zeplinSelectors["shelf"]["zeplin-selectors"]["l"]["padding-top"] = {};
            zeplinSelectors["shelf"]["zeplin-selectors"]["l"]["padding-top"]["selector"] = "";
            zeplinSelectors["shelf"]["zeplin-selectors"]["l"]["padding-top"]["MoveToELementSel"] = "";
        zeplinSelectors["shelf"]["zeplin-selectors"]["l"]["padding-bottom"] = {};
            zeplinSelectors["shelf"]["zeplin-selectors"]["l"]["padding-bottom"]["selector"] = "";
            zeplinSelectors["shelf"]["zeplin-selectors"]["l"]["padding-bottom"]["MoveToELementSel"] = "";
        //M
            zeplinSelectors["shelf"]["zeplin-selectors"]["m"] = {};
        zeplinSelectors["shelf"]["zeplin-selectors"]["m"]["padding-top"] = {};
            zeplinSelectors["shelf"]["zeplin-selectors"]["m"]["padding-top"]["selector"] = "";
            zeplinSelectors["shelf"]["zeplin-selectors"]["m"]["padding-top"]["MoveToELementSel"] = "";
        zeplinSelectors["shelf"]["zeplin-selectors"]["m"]["padding-bottom"] = {};
            zeplinSelectors["shelf"]["zeplin-selectors"]["m"]["padding-bottom"]["selector"] = "";
            zeplinSelectors["shelf"]["zeplin-selectors"]["m"]["padding-bottom"]["MoveToELementSel"] = "";
        //S
            zeplinSelectors["shelf"]["zeplin-selectors"]["s"] = {};
        zeplinSelectors["shelf"]["zeplin-selectors"]["s"]["padding-top"] = {};
            zeplinSelectors["shelf"]["zeplin-selectors"]["s"]["padding-top"]["selector"] = "";
            zeplinSelectors["shelf"]["zeplin-selectors"]["s"]["padding-top"]["MoveToELementSel"] = "";
        zeplinSelectors["shelf"]["zeplin-selectors"]["s"]["padding-bottom"] = {};
            zeplinSelectors["shelf"]["zeplin-selectors"]["s"]["padding-bottom"]["selector"] = "";
            zeplinSelectors["shelf"]["zeplin-selectors"]["s"]["padding-bottom"]["MoveToELementSel"] = "";
            zeplinSelectors["shelf"]["publish-selector"] = "";

    for(var i=0;i<answer.length;i++){
        if(answer.charAt(i)=='1'){
            zeplinSelectors["imageWrap"] = {};
                zeplinSelectors["imageWrap"]["zeplin-selector"] = {};
                zeplinSelectors["imageWrap"]["zeplin-selector"]["xl"] = "";          
                zeplinSelectors["imageWrap"]["zeplin-selector"]["l"] = "";          
                zeplinSelectors["imageWrap"]["zeplin-selector"]["m"] = "";          
                zeplinSelectors["imageWrap"]["zeplin-selector"]["s"] = "";          
                zeplinSelectors["imageWrap"]["publish-selector"] = "";
            continue;
        }
        if(answer.charAt(i)=='2'){
            zeplinSelectors["textWrap"] = {};
                zeplinSelectors["textWrap"]["zeplin-selector"] = {};
                zeplinSelectors["textWrap"]["zeplin-selector"]["xl"] = "";
                zeplinSelectors["textWrap"]["zeplin-selector"]["l"] = "";
                zeplinSelectors["textWrap"]["zeplin-selector"]["m"] = "";
                zeplinSelectors["textWrap"]["zeplin-selector"]["s"] = "";
                zeplinSelectors["textWrap"]["publish-selector"] = "";
            continue;
        }
        if(answer.charAt(i)=='3'){
            zeplinSelectors["titleWrap"] = {};
                zeplinSelectors["titleWrap"]["zeplin-selector"] = {};
                zeplinSelectors["titleWrap"]["zeplin-selector"]["xl"] = "";
                zeplinSelectors["titleWrap"]["zeplin-selector"]["l"] = "";
                zeplinSelectors["titleWrap"]["zeplin-selector"]["m"] = "";
                zeplinSelectors["titleWrap"]["zeplin-selector"]["s"] = "";
                zeplinSelectors["titleWrap"]["publish-selector"] = "";
            continue;
        }
    }

    //async.each(write_file_path, function (file, callback) {
        fs1.writeFile(write_file_path , JSON.stringify(zeplinSelectors, null, 4), function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(write_file_path + ' is created');
            }
            //callback();
        });
    /*}, function (err) {
        if (err) {
            // One of the iterations produced an error.
            // All processing will now stop.
            console.log('A file failed to process');
        }
        else {
            console.log('-> All files have been processed successfully');
        }
    })*/

    rl.close();
});
