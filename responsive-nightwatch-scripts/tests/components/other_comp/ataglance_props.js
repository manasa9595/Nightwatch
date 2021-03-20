var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={  
    TopBottomPaddings : function(size) { 
       var textProp={          
              "padding-top": "70px",
              "padding-bottom": "70px"
            };
        if(size=="sm"){
         textProp["padding-top"] = "50px";
            textProp["padding-bottom"] = "50px"; 
        }
        if(size=="xs"){
            textProp["padding-top"] = "30px";
            textProp["padding-bottom"] = "30px"; 
            if(branding.getBrand.get()=="rbs_premier.js"){
               textProp["padding-top"] = "20px"; 
            }   
        }                  
       return textProp;
    },
    Title_max_height_property : function(size) {
        var textProp={          
              //"max-height": "230px"
            };
        if(size=="sm"){
            //textProp["max-height"] = "180px";   
        }  
        else if(size=="xs"){
           // textProp["max-height"] = "none";   
        } 
        if(branding.getBrand.get()=="natwest_premier.js"){
         // textProp["max-height"] = "250px"; 
          if(size=="md"){
             // textProp["max-height"] = "240px";   
          }  
          else if(size=="sm"){
             // textProp["max-height"] = "190px";   
          }
          else if(size=="xs"){
             // textProp["max-height"] = "none";   
          }
        }     
       return textProp;
    },
    Title_properties : function(size,iebrowserval) {
        var textProp={
          "font-weight":"400"
        };         
        if(branding.getBrand.get()=="rbs_premier.js"){
          textProp["color"] = "rgba(149, 7, 125, 1)";  
        }
         if(branding.getBrand.get()=="natwest_premier.js"){
          textProp["color"] = "rgba(149, 107, 90, 1)";                     
        }
       return textProp;
    },
    Text_top_space : function(size,iebrowserval) {
        var textProp = {}, property = brand.props;
        var textProp={
          "margin-top": "20px",
         // "max-height":"78px"
        };
        if(size=="sm"){
             // textProp["max-height"] = "104px";   
        }
        if(size=="xs"){
             // textProp["max-height"] = "none";   
        }
       return textProp;
    },
    Text_properties : function(size) {
        var textProp={ 
          "font-size":"18px"
        };         
       return textProp;
    },
    compliance_top_spacing : function(size) {
        var textProp = {}, property = brand.props;
        var textProp={
          "padding-top": "35px"
        };
        if(size=="md"){ 
               textProp["padding-top"] = "30px"; 
        }
        if(size=="sm" || size=="xs"){
              textProp["padding-top"] = "30px";   
        }
       return textProp;
    },
    compliance_icon_props : function(size) {
        var textProp = {}, property = brand.props;
        var textProp={
           // "background-repeat-x": "",
            //"background-repeat-y": "",
            "background-size":"24px 24px",
            "padding-left":"39px",
            "background-position-x":"0px",
            "background-position-y":"0px"
        };
       return textProp;
    },
    compliance_text_props : function(size) {
        var textProp = {}, property = brand.props;
        var textProp={
          "font-size":"16px"            
        }
       return textProp;
    }
}
module.exports = {
    atAGlanceShelf: cssProps
}