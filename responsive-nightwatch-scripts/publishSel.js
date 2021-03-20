var fs1 = require("fs");
var zeplinSelectorsJSON = function(){
      zeplinSelectors={};

      //Shelf Wrap
      zeplinSelectors["mainWarp"] = {};
      zeplinSelectors["mainWarp"]["selector"] = "";

      //Image
      zeplinSelectors["imageWrap"] = {};
      zeplinSelectors["imageWrap"]["selector"] = "";

      //Title
      zeplinSelectors["titleWrap"] = {};
      zeplinSelectors["titleWrap"]["selector"] = ""; 
      
      writeZeplinJSON();
    },  
    writeZeplinJSON = function(){  
    console.log("Publish JSON created") 
      fs1.writeFile('tests/shelfs/campaignPromoPublishSelectors.json', JSON.stringify(zeplinSelectors, null, 4), function(err) {
        if (err) {
          return console.log(err);
        }
      });
    }; 
 
zeplinSelectorsJSON();
