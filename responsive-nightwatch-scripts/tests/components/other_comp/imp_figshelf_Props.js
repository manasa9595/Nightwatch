var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
//natwest impFig shelf properties
var cssProps = {
    impFigShelf: function(size) {
        var shelfSecProps = {},
        	
            shelfSecProps = {
                "padding-top": "35px",
                
            };
            if (size == "md") {
            shelfSecProps["padding-top"] = "35px";
        } else if (size == "sm") {
            shelfSecProps["padding-top"] = "30px";
        } else if (size == "xs") {
            shelfSecProps["padding-top"] = "30px";
        }
        return shelfSecProps;
    },
    impFigShelfTitle: function(size) {
        var shelfTitProps = {},
        	property = brand.props,
            shelfTitProps = {
                "color": property.$font_color_regular,
            };
        return shelfTitProps;
    },
    impFigCompWrapper: function(size) {
        var colProps = {},
            colProps = {
                "margin-bottom": "50px"
            };
        if (size == "md") {
           colProps["margin-bottom"] = "50px";
        } else if (size == "sm") {
            colProps["margin-bottom"] = "30px";
        } else if (size == "xs") {
            colProps["margin-bottom"] = "0px";
        }
        return colProps;
    },

    imgFigTextProps: function(size) {
        var textProps = {},
        	property = brand.props,
            textProps = {
                "margin-top": "10px",
                "color" : property.$impFigText,
            };
        
        return textProps;
    },

    imgFigDescProps: function(size) {
        var descProps = {},
        	property = brand.props,
            descProps = {
                "margin-top": "10px",
                "color" : property.$winks_textcolor,
            };
        
        return descProps;
    },
    impFigHrlineProps: function(size) {
        var HrlineProps = {},
            property = brand.props,
            HrlineProps = {
                "border-bottom": property.$borderbottomcolor,
            };
        
        return HrlineProps;
    },
    accWrapper: function(size) {
        var colProps = {},
            colProps = {
                "margin": "35px 0px"
            };
        if (size == "sm") {
            colProps["margin"] = "30px 0px";
        } else if (size == "xs") {
            colProps["margin"] = "30px 0px";
        }
        return colProps;
    },
    accIcon: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
                "line-height": "26px",
                "background-size" : "14px",
                "width": "14px",
                "height" : "14px",
                "margin-top": "4px",
                "margin-right": "16px",
            };
        
        return textProps;
    },
    accText: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
                "color": property.$linkcolor,
                "font-family" : property.$font_family_regular,
                "font-size": "18px",
                "line-height" : "26px",
            };
        
        return textProps;
    },
    accContainer: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
                "background-color" : "rgba(245, 245, 245, 1)",
                "padding-top" : "84px",
                "padding-bottom" : "55px",
                "margin-top": "32px",
            };
             if (size == "md") {
           textProps["padding-bottom"] = property.$accContmPadding;
        } else if (size == "sm") {
            textProps["padding-bottom"] = "50px";
            textProps["padding-top"] = "69px";
        } else if (size == "xs") {
            textProps["padding-top"] = "69px";
            textProps["padding-right"] = "20px";
            textProps["padding-bottom"] = "50px";
            textProps["padding-left"] = "20px";
        }
        
        return textProps;
    },
    accPara: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
                "color": property.$acc_contText_color,
                "font-family" : property.$font_family_text,
            };
        
        return textProps;
    },
    acch3: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
                "color": property.$font_color_regular,
                "font-family" : property.$font_family_title,
                "margin-bottom": "20px",
                "margin-top": "35px",
            };
             if (size == "sm") {
            textProps["margin-top"] = "30px";
            }    
            else if (size == "xs") {
            textProps["margin-top"] = "30px";
            }
        
        return textProps;
    },
    accList: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
                "margin":  "0px 0px 0px 19px",
                "padding": "0px",
                "color": property.$acc_contText_color,
                "font-family" : property.$font_family_text,
            };
        
        return textProps;
    },
     accClose: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
               "background-color": property.$linkcolor,
                "padding-top": "8px",
                "padding-bottom": "10px",
                "text-align" : "center",
            };
            if (size == "xs") {
            textProps["padding-top"] = "13px";
            textProps["padding-bottom"] = "15px";
            }
        
        return textProps;
    },
    accClosetext: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
               "color": property.$primary_2,
               "font-family" : property.$font_family_regular,
            };
        
        return textProps;
    },
    TextanimationProps: function(size) {
     var shelfProps = {}, property = brand.props;
        var shelfProps={
            'background-size' : '100% 100%'
            };
       return shelfProps; 
  },

  crossProps : function(size) {
     var shelfProps = {}, property = brand.props;
        var shelfProps={
            'animation-duration' : '0.3s',
            'animation-timing-function' : 'ease-in-out',
            'animation-name' : 'spin'

            };
       return shelfProps; 
  },
  cross1Props : function(size) {
     var shelfProps = {}, property = brand.props;
        var shelfProps={
            'animation-duration' : '0.3s',
            'animation-timing-function' : 'ease-in-out',
            'animation-name' : 'spinrev'

            };
       return shelfProps; 
  }
  

       
    
}

module.exports = {
    impFigShelfProps: cssProps
}