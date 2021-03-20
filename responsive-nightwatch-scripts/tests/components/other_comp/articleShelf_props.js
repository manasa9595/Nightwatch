var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
   // pageObj = client.page.articleShelf_selectors(),
   // shelfCls = pageObj.elements.WhiteshelfSel.selector;

//article shelf props
var cssProps = {
    marProps: function(size) {

        var shelfProps = {},
            shelfProps = {
               "padding-top" : "35px",
               "padding-bottom" : "35px"
            };
            if(size=="sm"){
              console.log("is Tablet sized Device");
              shelfProps["padding-top"] = "20px";
              shelfProps["padding-bottom"] = "30px";
            }
            else if(size=="xs"){
              console.log("is Small Device");
              shelfProps["padding-top"] = "20px";
              shelfProps["padding-bottom"] = "30px";
              if(branding.getBrand.get()=="natwest_premier.js"||branding.getBrand.get()=="natwest_personal.js" || branding.getBrand.get()=="natwest_bussiness.js"){
                shelfProps["padding-bottom"] = "30px";
              }
            }
           /* while(client.waitForElementVisible(shelfCls, 1000)){
              console.log("found what i was lookig for");
            }*/
        return shelfProps;
    },
     marPropsNonWhite: function(size) {
        var shelfProps = {},
            shelfProps = {
               "padding-top" : "70px",
               "padding-bottom" : "70px"
            };
            if(size=="sm"){
              shelfProps["padding-top"] = "50px";
              shelfProps["padding-bottom"] = "50px";
            }
            else if(size=="xs"){
              shelfProps["padding-top"] = "50px";
              shelfProps["padding-bottom"] = "50px";              
            }
        return shelfProps;
    },
   imgWrapProps : function(size){
     var shelfProps = {},
            shelfProps = {
               "width" : "445px",
               "height" : "275px"
            };
            if(size=="md"){
              shelfProps["width"] = "360px";
              shelfProps["height"] = "223px";
            }
            else if(size=="sm"){
              shelfProps["width"] = "265px";
              shelfProps["height"] = "161px";
            }
            else if(size=="xs"){
              shelfProps["width"] = "335px";
              shelfProps["height"] = "206px";
              shelfProps["margin-bottom"] = "20px";
            }
        return shelfProps;
   },
   rteWrapProps : function(size){
    var shelfProps = {},
            shelfProps = {
               "margin-top" : "20px"
            };
            return shelfProps;
    },
    bgPadding : function(size){
     var shelfProps = {}, property = brand.props;
            shelfProps = {
               //"background-color" : property.$bg_color,
               "padding-top" : "70px",
               "padding-bottom" : "70px"
            };
            
             if(size=="sm"){
              shelfProps["padding-top"] = "50px";
              shelfProps["padding-bottom"] = "50px";
            }
            else if(size=="xs"){
              shelfProps["padding-top"] = "50px";
              shelfProps["padding-bottom"] = "50px";
            }
        return shelfProps;
   },

   titlecompColor : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'color': property.$currentlink,
            };
            return shelfProps;
    },

    titleColor : function(size){
    var shelfProps = {},
            shelfProps = {
               'color': "rgba(255, 255, 255, 1)"
            };
            return shelfProps;
    },

    rteGrey : function(size){
    var shelfProps = {},
            shelfProps = {
               'color': "rgba(51, 51, 51, 1)"
            };
            return shelfProps;
    },

    rteWhite : function(size){
    var shelfProps = {},
            shelfProps = {
               'color': "rgba(255, 255, 255, 1)"
            };
            return shelfProps;
    },

    violet_bgcolor : function(size){
    var shelfProps = {},
            shelfProps = {
               'background-color': "rgba(111, 44, 145, 1)",
               'color': "rgba(255, 255, 255, 1)"
            };
            return shelfProps;
    },
    heather_bgcolor : function(size){
    var shelfProps = {},
            shelfProps = {
               'background-color': "rgba(149, 7, 125, 1)",
               'color': "rgba(255, 255, 255, 1)"
            };
            return shelfProps;
    },
    royalblue_bgcolor : function(size){
    var shelfProps = {},
            shelfProps = {
               'background-color': "rgba(0, 45, 100, 1)",
               'color': "rgba(255, 255, 255, 1)"
            };
            return shelfProps;
    },
    primaryCTAMarProps: function(size){
     var shelfProps = {}, 
            shelfProps = {             
                "position": "relative",
                "margin-right": "0px",
                "padding-top": "6px",
                "padding-right": "0px",
                "padding-bottom": "6px",
                "padding-left": "0px",
                "margin-top": "35px"
          };
            
             if(size=="sm"){
              shelfProps["margin-top"] = "30px";
            }
            else if(size=="xs"){
              shelfProps["margin-top"] = "30px";
            }

        return shelfProps;
   },

   primaryCTAProps: function(size){
     var shelfProps = {}, property = brand.props;
            shelfProps = {             
                "padding-top": property.$cta_padding_top,
                "padding-right": property.$cta_padding_right,
                "padding-bottom":property.$cta_padding_bottom,
                "padding-left":property.$cta_padding_left,
                "max-width": "292px",
                "min-width": "240px",
                "border-width": "0px",
                "line-height": "30px"
            };

        return shelfProps;
   },

   secCTAMarProps: function(size){
     var shelfProps = {}, 
            shelfProps = {
                "display": "inline-block",           
                "padding-top": "6px",
                "padding-right": "0px",
                "padding-bottom": "6px",
                "padding-left": "0px",
                "margin-top": "20px",
                "text-decoration-line": "underline"
            };

        return shelfProps;
   },

   imgleftProps: function(size){
     var shelfProps = {}, 
            shelfProps = {
                "float": "none"          
            };

        return shelfProps;
   }

}

module.exports = {
    articleShelfProps: cssProps
}