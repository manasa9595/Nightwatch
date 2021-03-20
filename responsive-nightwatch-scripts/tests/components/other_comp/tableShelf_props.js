var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get());

//table shelf props
var cssProps = {
    shelfTitProps: function(size) {
        var shelfProps = {},
           property = brand.props;
        shelfProps = {
            "max-height": '116px'
        };
        if (size == "md") {
            shelfProps["max-height"] = "104px";
        } else if (size == "sm" || size=="xs") {
            shelfProps["max-height"] = "126px";
        }
      return shelfProps;
    },
     shelfTxtProps: function(size) {
        var shelfProps = {},
           property = brand.props;
        shelfProps = {
            "max-height": '52px',
            "margin-top": '20px'
        };
         if (size == "sm" || size=="xs") {
            shelfProps["max-height"] = "78px";
        }
      return shelfProps;
    },
    dropDownProps: function(size) {
        var shelfProps = {},
           property = brand.props;
        shelfProps = {
            //"padding": '11px 20px 20px 0px'
            "padding-top" : '11px',
            "padding-left" : '20px',
            "padding-bottom": '20px',
            "padding-left" : '0px'
        };
        if(size=="xs"){
            shelfProps["padding"] = '11px 10px 20px 0px';

        }
        
      return shelfProps;
    },


    maxHtTitleProps: function(size) {
        var shelfProps = {},
           property = brand.props;
        shelfProps = {
            "max-height": property.$heading_max_height
        };
        if (size == "sm") {
            shelfProps["max-height"] = "78px";
        } else if (size == "xs") {
            shelfProps["max-height"] = "78px";
        }

        return shelfProps;
    },

    maxHtTableProps: function(size) {
        var shelfProps = {},
           // property = brand.props;
        shelfProps = {
            "max-height": "52px"
        };
        if (size == "sm") {
            shelfProps["max-height"] = "78px";
        } else if (size == "xs") {
            shelfProps["max-height"] = "78px";
        }

        return shelfProps;
    },
    complTextMLProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "padding-left": property.$text_padding_left
        };

        return shelfProps;
    },
    tableMBProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "margin-bottom": "35px"
        };

        return shelfProps;
    },

    complTextMBProps: function(size) {
        var shelfProps = {},
        //property = brand.props;
        shelfProps = {
            "margin-bottom": "35px",
        };
        if (size == "sm") {
            shelfProps["margin-bottom"] = "30px";
        } else if (size == "xs") {
            shelfProps["margin-bottom"] = "30px";  
        }

        return shelfProps;
    },
    complImageProps: function(size) {
        var shelfProps = {},
        	property = brand.props;
        shelfProps = {
            "background-size": property.$text_background_size
        };

        return shelfProps;
    },
    /*titleUIprops: function(size){
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "font-size": property.$h1_font_size_xl,
            "line-height" : property.$h1_line_height_xl,
            "font-family" : property.$font_family_shelf,
            "color" : property.$table_shelf_font_color
        };
        if (size == "md") {
            shelfProps["font-size"] = property.$h1_font_size_l;
            shelfProps["line-height"] = property.$h1_line_height_l;
        } else if (size == "sm") {
            shelfProps["font-size"] = "30px";
            shelfProps["line-height"] = "30px";
        }
        else if (size == "xs") {
            shelfProps["font-size"] = "30px";
            shelfProps["line-height"] = "30px";
        }

        return shelfProps;
     },*/
     textUIprops: function(size){
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "font-family" : property.$font_family_shelf,
           
        };

        return shelfProps;
     },
     dropDownTxtProps: function(size,iebrowserval){
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "font-family" : property.$font_family_bold_2
        };
        if(branding.getBrand.get()=="natwest_premier.js"||branding.getBrand.get()=="rbs_premier.js"){
          shelfProps["font-family"] = "RNHouseSansRegular, sans-serif";  
          if(iebrowserval==true){
            console.log('')
            shelfProps["font-family"] = '"rnhousesansregular",sans-serif'; 
         }                    
        }

        return shelfProps;
     },
     ddcolorProp : function(size){
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "color" : property.$table_shelf_dd_font_color
        };
        return shelfProps;
    },
     tabletitprops : function(size,iebrowserval){
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "font-family" : property.$font_family_bold_2,
        };
        if(branding.getBrand.get()=="natwest_premier.js"||branding.getBrand.get()=="rbs_premier.js"){
          shelfProps["font-family"] = "RNHouseSansRegular, sans-serif";  
          if(iebrowserval==true){
            shelfProps["font-family"] = '"rnhousesansregular",sans-serif'; 
         }                    
        }

        return shelfProps;
     },
     tableTitClrProp : function(size,iebrowserval){
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "color" : property.$table_shelf_font_color
        };
        return shelfProps;
    },
    tableTextProps :  function(size){
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "font-size": "18px",
            "line-height": "26px",
            "color": property. $table_shelf_textcolor,
            "font-family": property.$font_family_light
        };
        return shelfProps;
    },
    tableMgProps : function(size){
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "margin-top": "35px",
            "margin-bottom": "20px"
        };
        return shelfProps;
    },
    tableTextMgProps: function(size){
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "margin-bottom": "20px"
        };
        return shelfProps;
    },
    accWrapper: function(size) { 
        var colProps = {},
            colProps = {
                "margin-bottom": "35px"
            };
        if (size == "sm") {
            colProps["margin-bottom"] = "30px";
        } else if (size == "xs") {
            colProps["margin-bottom"] = "30px";
        }
        return colProps;
    },
    accIcon: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
                "line-height": "26px",
                //"background-size" : "14px",
                "width": "14px",
                "height" : "14px",
                //"float" : "left",
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
                "background-color" : property.$color_whitesmoke,
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
                "font-family" : property.$font_family_regular,
                "margin-bottom" : "20px"
            };
           // if (size == "sm" || size == "xs") {
           // textProps["margin-bottom"] = "10px";
           // }    
      
        return textProps;
    },
    acch3: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
                "color": property.$font_color_regular,
                "font-family" : property.$font_family_regular,
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
                //"margin":  "0px 0px 0px 19px",
                "padding": "0px",
                //"color": "rgb(51, 51, 51)",
                "font-family" : property.$font_family_regular,
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
    accCloseProps: function(size) {
        var textProps = {},
            property = brand.props,
            textProps = {
               "margin-left": "6px",
               "width" : "12px",
               "height" : "12px",
               "display" : "inline-block",
               "color" : property.$primary_2
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
    tableShelfProps: cssProps
}