var zeplin_Test = require('./zeplinTest.js');

var zeplin_functions = function(client){
      client.source(() => {  
        console.log("break point : "+zeplin_Test.break_point)  
        zeplin_Test.zeplinVersion(client, '.date time-ago', '.date time-ago', 'component', "version");    
        // componentProps(client, readObj1["component"][break_point]["name_selector"], readObj1["component"][break_point]["name_selector"], '.sidebarSection .layerContent', "component", "name", "shelfName"); 
        // // shelf padding top
        // componentProps(client, readObj1["shelf"]["zeplin-selectors"][break_point]["padding-top"]["selector"], readObj1["shelf"]["zeplin-selectors"][break_point]["padding-top"]["MoveToELementSel"] , '#topDistanceValue', "shelf", "shelf-props", "padding-top");
        // //shelf padding bottom
        // componentProps(client, readObj1["shelf"]["zeplin-selectors"][break_point]["padding-bottom"]["selector"], readObj1["shelf"]["zeplin-selectors"][break_point]["padding-bottom"]["MoveToELementSel"] , '#bottomDistanceValue', "shelf", "shelf-props", "padding-bottom");
        // //image width
        // componentProps(client, readObj1["imageWrap"]["zeplin-selector"][break_point], readObj1["imageWrap"]["zeplin-selector"][break_point], '.layerPropertyGroup:nth-child(2) .layerProperty:nth-child(1) .propertyValue', "imageWrap", "image-props", "width");
        // //image height
        // componentProps(client, readObj1["imageWrap"]["zeplin-selector"][break_point], readObj1["imageWrap"]["zeplin-selector"][break_point], '.layerPropertyGroup:nth-child(2) .layerProperty:nth-child(2) .propertyValue ', "imageWrap", "image-props", "height");
        // //check for title color
        // componentProps(client, readObj1["titleWrap"]["zeplin-selector"][break_point], readObj1["titleWrap"]["zeplin-selector"][break_point], '.colorInfo .value', "titleWrap", "title-props", "color", 1); 
      })
    }

module.exports = {
    zeplin_functions : zeplin_functions
}