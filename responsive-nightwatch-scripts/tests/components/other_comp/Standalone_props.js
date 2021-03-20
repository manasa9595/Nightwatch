var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

//Standalone properties
var cssProps = {
    marProps: function(size) {
        var shelfProps = {},
            shelfProps = {
               "padding" : "50px 0px"
            };
            if(size=="sm"){
              shelfProps["padding"] = "40px 0px";
            }else if(size=="xs"){
                shelfProps["padding"] = "0px";
            }
        return shelfProps;
    },
    iconProps: function(size){
        var imgProps = {}, property = brand.props,
        imgProps = {
           "width" :  property.$standalone_icon_width,
            "height": property.$standalone_icon_height,
         };
          if(size=="sm" ){
            imgProps["width"] = "30px";
            imgProps["height"] = property.$standalone_icon_height_m; 
        }else if(size=="xs"){
                imgProps["width"] = property.$standalone_icon_width_m; 
            imgProps["height"] = property.$standalone_icon_height_m; 
            }
        return imgProps;
    },

    iconPropss: function(size){
        var imgProps = {}, property = brand.props,
        imgProps = {
           "width" :  property.$standalone_icon_width_s,
            "height": property.$standalone_icon_height_s,
         };
         if(size=="sm" ){
            imgProps["width"] =property.$standalone_icon_height_s_m;
            imgProps["height"] = property.$standalone_icon_height_s_m; 
        }else if(size=="xs"){
                imgProps["width"] = property.$standalone_icon_width_s_xs; 
            imgProps["height"] = property.$standalone_icon_height_s_xs; 
            }
        return imgProps;
    },


   
    yellowProps: function(size){
        var imgProps = {},property = brand.props,
        imgProps = {
            "fill" : property.$standalone_icon_yellow
        };
        return imgProps;
    },
    pinkProps: function(size){
        var imgProps = {}, property = brand.props,
        imgProps = {
          "fill": property.$standalone_icon_pink
         };
        return imgProps;
    },
    textProps: function(size){
        var texProps = {},property = brand.props,
        texProps = {
          "margin-top" : "11px"
        };
        if(size=="md"){
            texProps["margin-top"] = property.$standalone_title_mt;
        }else if(size=="sm"){
            texProps["margin-top"] = "16px";
            texProps["padding-top"] = "4px";

        }else if(size=="xs"){
            texProps["display"] = "block";
            texProps["margin-top"] = "0px";
        }
        return texProps;
    },
    textProp: function(size){
        var texProps = {},property = brand.props,
        texProps = {
          "margin-top" : "17px"
        };
        if(size=="md"){
            texProps["margin-top"] = "17px";
        }else if(size=="sm"){
            texProps["margin-top"] = "13px";
            texProps["padding-top"] = "0px";

        }else if(size=="xs"){
            texProps["display"] = "block";
            texProps["margin-top"] = "9px";
        }
        return texProps;
    },
    textWrapProps : function(size){ //text wrapper props without title
        var texProps = {},
        texProps = {
          "float": "left",
          "margin-left": "30px",
          "margin-top": "17px"
          //width:
        };
        if(size=="sm"){
            texProps["margin-top"] = "13px";
            texProps["padding-top"] = "0"; 
        }
        else if(size=="xs"){
                texProps["position"] = "relative";
                texProps["margin-left"] = "0";
                texProps["padding-left"] = "10px";
                texProps["padding-right"] = "10px";
                texProps["margin-top"] = "9px";
           }
           return texProps;
     },
    shelfBgProps: function(size){
        var bgProps = {},
        bgProps = {
          "background-color":"rgba(255, 255, 255, 1)" 
        };

        return bgProps;
    },
     shelfBgGreyProps: function(size){
        var bgProps = {},
        bgProps = {
          "background-color":"rgba(245, 245, 245, 1)" 
        };

        return bgProps;
    },
    linktext:function(size){
    var prop={}, property = brand.props,
    prop={
            'color': property.$linkcolor,
            'font-size': '18px',
            'line-height': '26px',
            'padding-top' : '6px',
            'padding-bottom': '3px',
            "font-family": property.$font_family_regular

      };
    return prop;
  },
}

module.exports = {
    StandaloneProps: cssProps
}