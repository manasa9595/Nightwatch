const readline = require('readline');
var fs1 = require("fs");
var async = require('async');

var write_file_path = 'tests/shelfs/sublisting.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

zeplinSelectors={};

console.log("Please select the components in shelf\n");
rl.question('1.Image 2.Text 3.Title 4.Primary CTA 5.Secondary CTA\n', (answer) => {
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
            zeplinSelectors["imageWrap"]["image"] = {};
                zeplinSelectors["imageWrap"]["image"]["zeplin-selector"] = {};
                zeplinSelectors["imageWrap"]["image"]["zeplin-selector"]["xl"] = "";          
                zeplinSelectors["imageWrap"]["image"]["zeplin-selector"]["l"] = "";          
                zeplinSelectors["imageWrap"]["image"]["zeplin-selector"]["m"] = "";          
                zeplinSelectors["imageWrap"]["image"]["zeplin-selector"]["s"] = "";          
                zeplinSelectors["imageWrap"]["image"]["publish-selector"] = "";

            zeplinSelectors["imageWrap"]["imageTitle"] = {};
                zeplinSelectors["imageWrap"]["imageTitle"]["zeplin-selector"] = {};
                zeplinSelectors["imageWrap"]["imageTitle"]["zeplin-selector"]["xl"] = "";          
                zeplinSelectors["imageWrap"]["imageTitle"]["zeplin-selector"]["l"] = "";          
                zeplinSelectors["imageWrap"]["imageTitle"]["zeplin-selector"]["m"] = "";          
                zeplinSelectors["imageWrap"]["imageTitle"]["zeplin-selector"]["s"] = "";          
                zeplinSelectors["imageWrap"]["imageTitle"]["publish-selector"] = "";

            zeplinSelectors["imageWrap"]["imageText"] = {};
                zeplinSelectors["imageWrap"]["imageText"]["zeplin-selector"] = {};
                zeplinSelectors["imageWrap"]["imageText"]["zeplin-selector"]["xl"] = "";          
                zeplinSelectors["imageWrap"]["imageText"]["zeplin-selector"]["l"] = "";          
                zeplinSelectors["imageWrap"]["imageText"]["zeplin-selector"]["m"] = "";          
                zeplinSelectors["imageWrap"]["imageText"]["zeplin-selector"]["s"] = "";          
                zeplinSelectors["imageWrap"]["imageText"]["publish-selector"] = "";
            continue;
        }
        if(answer.charAt(i)=='2'){
            zeplinSelectors["textWrap"] = {};
            zeplinSelectors["textWrap"]["mainText"] = {};
                zeplinSelectors["textWrap"]["mainText"]["zeplin-selector"] = {};
                zeplinSelectors["textWrap"]["mainText"]["zeplin-selector"]["xl"] = "";
                zeplinSelectors["textWrap"]["mainText"]["zeplin-selector"]["l"] = "";
                zeplinSelectors["textWrap"]["mainText"]["zeplin-selector"]["m"] = "";
                zeplinSelectors["textWrap"]["mainText"]["zeplin-selector"]["s"] = "";
                zeplinSelectors["textWrap"]["mainText"]["publish-selector"] = "";

            zeplinSelectors["textWrap"]["subText"] = {};
                zeplinSelectors["textWrap"]["subText"]["zeplin-selector"] = {};
                zeplinSelectors["textWrap"]["subText"]["zeplin-selector"]["xl"] = "";
                zeplinSelectors["textWrap"]["subText"]["zeplin-selector"]["l"] = "";
                zeplinSelectors["textWrap"]["subText"]["zeplin-selector"]["m"] = "";
                zeplinSelectors["textWrap"]["subText"]["zeplin-selector"]["s"] = "";
                zeplinSelectors["textWrap"]["subText"]["publish-selector"] = "";

            zeplinSelectors["textWrap"]["bulletText"] = {};
                zeplinSelectors["textWrap"]["bulletText"]["zeplin-selector"] = {};
                zeplinSelectors["textWrap"]["bulletText"]["zeplin-selector"]["xl"] = "";
                zeplinSelectors["textWrap"]["bulletText"]["zeplin-selector"]["l"] = "";
                zeplinSelectors["textWrap"]["bulletText"]["zeplin-selector"]["m"] = "";
                zeplinSelectors["textWrap"]["bulletText"]["zeplin-selector"]["s"] = "";
                zeplinSelectors["textWrap"]["bulletText"]["publish-selector"] = "";
            continue;
        }
        if(answer.charAt(i)=='3'){
            zeplinSelectors["titleWrap"] = {};
            zeplinSelectors["titleWrap"]["mainTitle"] = {};
                zeplinSelectors["titleWrap"]["mainTitle"]["zeplin-selector"] = {};
                zeplinSelectors["titleWrap"]["mainTitle"]["zeplin-selector"]["xl"] = "";
                zeplinSelectors["titleWrap"]["mainTitle"]["zeplin-selector"]["l"] = "";
                zeplinSelectors["titleWrap"]["mainTitle"]["zeplin-selector"]["m"] = "";
                zeplinSelectors["titleWrap"]["mainTitle"]["zeplin-selector"]["s"] = "";
                zeplinSelectors["titleWrap"]["mainTitle"]["publish-selector"] = "";

            zeplinSelectors["titleWrap"]["subTitle"] = {};
                zeplinSelectors["titleWrap"]["subTitle"]["zeplin-selector"] = {};
                zeplinSelectors["titleWrap"]["subTitle"]["zeplin-selector"]["xl"] = "";
                zeplinSelectors["titleWrap"]["subTitle"]["zeplin-selector"]["l"] = "";
                zeplinSelectors["titleWrap"]["subTitle"]["zeplin-selector"]["m"] = "";
                zeplinSelectors["titleWrap"]["subTitle"]["zeplin-selector"]["s"] = "";
                zeplinSelectors["titleWrap"]["subTitle"]["publish-selector"] = "";
            continue;
        }
        if(answer.charAt(i)=='4'){
            zeplinSelectors["primary_CTA"] = {};
                zeplinSelectors["primary_CTA"]["zeplin-selector"] = {};
                zeplinSelectors["primary_CTA"]["zeplin-selector"]["xl"] = "";
                zeplinSelectors["primary_CTA"]["zeplin-selector"]["l"] = "";
                zeplinSelectors["primary_CTA"]["zeplin-selector"]["m"] = "";
                zeplinSelectors["primary_CTA"]["zeplin-selector"]["s"] = "";
                zeplinSelectors["primary_CTA"]["publish-selector"] = "";
            continue;
        }
        if(answer.charAt(i)=='5'){
            zeplinSelectors["secondary_CTA"] = {};
                zeplinSelectors["secondary_CTA"]["zeplin-selector"] = {};
                zeplinSelectors["secondary_CTA"]["zeplin-selector"]["xl"] = "";
                zeplinSelectors["secondary_CTA"]["zeplin-selector"]["l"] = "";
                zeplinSelectors["secondary_CTA"]["zeplin-selector"]["m"] = "";
                zeplinSelectors["secondary_CTA"]["zeplin-selector"]["s"] = "";
                zeplinSelectors["secondary_CTA"]["publish-selector"] = "";
            continue;
        }
    }


        fs1.writeFile(write_file_path , JSON.stringify(zeplinSelectors, null, 4), function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(write_file_path + ' is created');
            }
        });

    rl.close();
});