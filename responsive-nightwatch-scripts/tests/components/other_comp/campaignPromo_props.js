var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

//article shelf props
var cssProps = {
    shelfProps: function(size) {

        var shelfProps = {},
            shelfProps = {
               "padding-top" : "70px",
               "padding-bottom" : "70px"
            };
            if(size=="lg"){
              console.log("is lg sized Device");
              shelfProps["padding-top"] = "70px";
              shelfProps["padding-bottom"] = "70px";
            }
              if(size=="sm"){
              console.log("is Tablet sized Device");
              shelfProps["padding-top"] = "50px";
              shelfProps["padding-bottom"] = "50px";
            }
              if(size=="xs"){
              console.log("is Small Device");
              shelfProps["padding-top"] = "0px";
              shelfProps["padding-bottom"] = "50px";
            }
        return shelfProps;
    },

   imgWrapProps : function(size){
     var shelfProps = {},
            shelfProps = {
              "overflow": "visible",
              "float": "none",
              "position": "absolute",
              "top": "-120px"
            };
            if(size=="lg"){
              shelfProps["top"] = "-120px";
            }
              if(size=="sm"){
              shelfProps["top"] = "-80px";
            }
              if(size=="xs"){
              shelfProps["position"] = "relative";
              shelfProps["left"] = "0px";
              shelfProps["top"] = "0px";
            }
        return shelfProps;
   },

   imgProps : function(size){
     var shelfProps = {},
            shelfProps = {
               "width" : "445px",
               "height" : "445px"
            };
            if(size=="lg"){
              shelfProps["width"] = "445px";
              shelfProps["height"] = "445px";
            }
              if(size=="md"){
              shelfProps["width"] = "360px";
              shelfProps["height"] = "360px";
            }
              if(size=="sm"){
              shelfProps["width"] = "265px";
              shelfProps["height"] = "265px";
            }
              if(size=="xs"){
              shelfProps["width"] = "210px";
              shelfProps["height"] = "210px";
            }
        return shelfProps;
   },

   titlecompColor : function(size){
    var shelfProps = {}, property = brand.props;
            shelfProps = {
               "color": property.$cp_font_color
            };
            return shelfProps;
    },

    titlecompMarginXS : function(size){
    var shelfProps = {},
            shelfProps = {
            };
            if(size=="xs"){
              shelfProps["margin-top"] = "20px";
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

    rteGrey : function(size){
    var shelfProps = {},
            shelfProps = {
               'color': "rgba(51, 51, 51, 1)"
            };
            return shelfProps;
    },

    primaryCTAMarProps: function(size){
     var shelfProps = {}, property = brand.props; 
            shelfProps = {             
                "position": "relative",
                "padding-top": "6px",
                "padding-right": "0px",
                "padding-bottom": "6px",
                "padding-left": "0px",
                "margin-top": property.$cp_primarycta_top_margin_xl
          };
            
             if(size=="lg"){
              shelfProps["margin-top"] = property.$cp_primarycta_top_margin_xl;
            }
              if(size=="md"){
              shelfProps["margin-top"] = "35px";
            }
              if(size=="sm"){
              shelfProps["margin-top"] = "30px";
            }
              if(size=="xs"){
              shelfProps["margin-top"] = "30px";
            }

        return shelfProps;
   },

   primaryCTAProps: function(size){
     var shelfProps = {}, property = brand.props;
            shelfProps = {             
                "padding-top": property.$cp_cta_padding_top,
                "padding-right": property.$cp_cta_padding_right,
                "padding-bottom":property.$cp_cta_padding_bottom,
                "padding-left":property.$cp_cta_padding_left,
                "max-width": "292px",
                "min-width": "240px",
                "line-height": "30px"
            };

        return shelfProps;
   },

   imgrightProps: function(size){
     var shelfProps = {}, 
            shelfProps = {
                "right": "0px"          
            };
            

        return shelfProps;
   }

}

module.exports = {
    campaignPromoProps: cssProps
}