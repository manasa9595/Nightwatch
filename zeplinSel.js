var fs = require("fs");

var zeplinSelectorsJSON = function(client){
    zeplinSelectors={};

    //Shelf Name
    zeplinSelectors["componentName"] = {};
    zeplinSelectors["componentName"]["selector"] = "";

    //Shelf Props
    /*zeplinSelectors["shelf"] = {};
    zeplinSelectors["shelf"]["zeplin-selector"] = {};
    zeplinSelectors["shelf"]["zeplin-selector"]["padding-top"] = {};
    zeplinSelectors["shelf"]["zeplin-selector"]["padding-top"]["selector"] = "";
    zeplinSelectors["shelf"]["zeplin-selector"]["padding-top"]["MoveToELementSel"] = "";
    zeplinSelectors["shelf"]["zeplin-selector"]["padding-bottom"] = {}; 
    zeplinSelectors["shelf"]["zeplin-selector"]["padding-bottom"]["selector"] = "";
    zeplinSelectors["shelf"]["zeplin-selector"]["padding-bottom"]["MoveToELementSel"] = "";*/
    zeplinSelectors["shelf"] = {};
    zeplinSelectors["shelf"]["padding-top"] = {};
    zeplinSelectors["shelf"]["padding-top"]["selector"] = "";
    zeplinSelectors["shelf"]["padding-top"]["MoveToELementSel"] = "";
    zeplinSelectors["shelf"]["padding-bottom"] = {}; 
    zeplinSelectors["shelf"]["padding-bottom"]["selector"] = "";
    zeplinSelectors["shelf"]["padding-bottom"]["MoveToELementSel"] = "";
      //Publish Shelf Props
      //zeplinSelectors["mainWarp"] = {};
      zeplinSelectors["shelf"]["publish-selector"] = "";
      zeplinSelectors["shelf"]["props"] = {};
      zeplinSelectors["shelf"]["props"]["padding-top"] = "";
      zeplinSelectors["shelf"]["props"]["padding-bottom"] = "";

    //Image Props
    zeplinSelectors["image"] = {};
    zeplinSelectors["image"]["selector"] = "";
      //Publish Image Props
      //zeplinSelectors["imageWrap"] = {};
      zeplinSelectors["image"]["publish-selector"] = "";

    //Title Props
    zeplinSelectors["title"] = {};
    zeplinSelectors["title"]["selector"] = ""; 
      //Publish Title Props
      zeplinSelectors["titleWrap"] = {};
      zeplinSelectors["titleWrap"]["selector"] = ""; 
    writeZeplinJSON();     
  },
  
  writeZeplinJSON = function(client){
    console.log("Zeplin JSON created") 
    fs.writeFile('tests/shelfs/campaignPromozeplinSelectors.json', JSON.stringify(zeplinSelectors, null, 4), function(err) {
      if (err) {
        return console.log(err);
      }
    });
  };
  zeplinSelectorsJSON();
