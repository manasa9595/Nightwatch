var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
//natwest hero shelf properties(photography mode)
var cssProps = {

    taskBasedBgProps:function(size) {
        var property = brand.props;
        var BgProps = {
            /*For Natwest gradient*/
            //"background-image" : property.$taskBased_bgColor
            "background-color" : property.$taskBased_bgColor
        };
        return BgProps;
   },

    taskBasedFontProps:function(size) {
        var titleProps = {
            "font-size" : "52px",
            "line-height" : "64px" 
        };
        if (size == "md") {
            titleProps["font-size"] = "42px";
            titleProps["line-height"] = "54px";
        }   else if (size == "sm" || size == "xs") {
            titleProps["font-size"] = "34px";
            titleProps["line-height"] = "44px";
        }
        return titleProps;
   },

    taskBasedTitTextProps: function(size) {
        var property = brand.props;
        var titTextProps = {},
            titTextProps = {
                "text-align": "center",
                 "color":  property.$title_color_taskbased,

                "font-family": property.$font_family_bold,
               
                //"font-weight": property.$titleTextFontWeight,
                "margin-top": "0px",
                "margin-right": "0px",
                "margin-bottom": "0px",
                "margin-left": "0px"
            };

        return titTextProps;
    },
    taskpanelTitTextProps: function(size) {
        var property = brand.props;
        var titProps = {},
            titProps = {
                "position": "relative",
                "color" : property.$title_color_taskbased,
                "display": "inline",
                "padding-right": "0px",
                "padding-bottom": property.$taskpanel_paddingL,
                
            };
        if (size == "md") {
            titProps["padding-bottom"] = property.$taskpanel_paddingM;
        }   else if (size == "sm") {
            titProps["padding-bottom"] = property.$taskpanel_paddingS;
        } else if(size=="xs"){
            titProps["padding-bottom"] = property.$taskpanel_paddingXS;
        }    
        return titProps;
    },
    taskBasedTitPad: function(size) {
        var titleProps = {},
            titleProps = {
                "padding-top": "70px",
                "padding-bottom": "50px"
            };
        if (size == "sm" ) {
            titleProps["padding-top"] = "50px";
            titleProps["padding-bottom"] = "30px";
        } else if (size == "xs") {
            titleProps["padding-top"] = "50px";
            titleProps["padding-bottom"] = "30px";
        }
        return titleProps;
    },

    taskBasedTitPad: function(size) {
        var ctaProps = {},
            ctaProps = {
                "padding-top": "6px",
                "padding-bottom": "6px",
                "color": "rgba(255, 255, 255, 1)",
                "text-decoration" : "underline",
                "display" : "inline-block"
            };
        return ctaProps;
    },
    taskBasedBgimgWrap : function(size) {   
        var imgWrapProps = {},
         imgWrapProps = {
            "position": "absolute"
        };
           /* if (size == "md") {
            imgWrapProps['height'] = "580px";
        }   else if (size == "sm") {
            imgWrapProps['height'] = "580px";
        } else if(size=="xs"){
            imgWrapProps['position'] = "absolute";
        }   */ 
        return imgWrapProps;
    },

    taskBasedBgimgPad : function(size) {   
        var imgWrapProps = {},
         imgWrapProps = {
            "position" : "relative",
            "top": "0px",
            "padding-top": "70px",
            //"background-color" : "rgba(0, 0, 0, 0)"
        };           
        /*if(size == "xs") {
            imgWrapProps['padding-top'] = "140px" ;          
        } */   
        return imgWrapProps;
    },

    taskpanelTitProps: function(size) {
        var titProps = {},
            titProps = {
                "margin-bottom": "38px",
                "padding-top": "12px",
                "padding-bottom": "30px"
            };
        if (size == "md") {
            titProps["margin-bottom"] = "37px";
            titProps["padding-top"] = "8px";
        }   else if (size == "sm") {
            titProps["margin-bottom"] = "115px";
            titProps["padding-top"] = "8px";
        } else if(size=="xs"){
            titProps["margin-bottom"] = "13px";
            titProps["padding-top"] = "4px";
            titProps["padding-bottom"] = "0px";
        }    
        return titProps;
    },

    taskpanelTit1TextProps: function(size) {
        var property = brand.props;
        var titProps = {},
            titProps = {
                "background-size": property.$title_background_size,
                "background-color" : property.$title_background_color,
                "z-index": "2",
                "padding-top": property.$PadtopL,
            };
        if (size == "md") {
            titProps["padding-top"] = "17px";
        }   else if (size == "sm") {
            titProps["padding-top"] = "17px";
        } else if(size=="xs"){
            titProps["padding-top"] = "11px";
        }    
        return titProps;
    },

    taskpanelTit2TextProps: function(size) {
        var property = brand.props;
        var titProps = {},
            titProps = {
                "background-size": property.$title_background_size,
                "background-color" : property.$title2Background,
                "z-index": "2",
                "padding-top": property.$taskpanelTit,
                "padding-bottom": property.$taskpanelTitBottomL,
                "top": "0px"
            };
        if (size == "md") {
            titProps["padding-top"] = "17px";
            titProps["padding-bottom"] = property.$taskpanelTitBottomM;
            titProps["top"] = property.$taskpanelTopM;
        }   else if (size == "sm") {
            titProps["padding-top"] = "17px";
            titProps["padding-bottom"] = property.$taskpanelTitBottomS;
            titProps["top"] = property.$taskpanelTopS;
        } else if(size=="xs"){
            titProps["padding-top"] = property.$taskpanelTitXS;
            titProps["padding-bottom"] = property.$taskpanelTitBottomXS;
             titProps["top"] = property.$taskpanelTopXS;
            //titProps["background-color"] = "rgba(149, 7, 125, 0.76)"; 
        }    
        return titProps;
    },

  /*  taskpanelTit3TextProps: function(size) {
        var titProps = {},
            titProps = {
                "background-size": "auto",
                "background-color" : "rgba(97, 128, 31, 1)",
                "padding-top": "6px",
                "padding-bottom": "17px",
                "top": "-11px",
                "background-position-x": "1px",
                "background-position-y": "50%"
            };
        if (size == "md") {
            titProps["padding-top"] = "4px";
            titProps["top"] = "-3px";
            titProps["padding-bottom"] = "15px";
            titProps["background-position-x"] = "3px";
        }   else if (size == "sm") {
            titProps["padding-top"] = "4px";
            titProps["top"] = "-9px";
            titProps["padding-bottom"] = "10px";
            titProps["background-position-x"] = "8px";
        } else if(size=="xs"){
            titProps["padding-top"] = "4px";
            titProps["top"] = "-10px";
            titProps["padding-bottom"] = "10px";
            titProps["background-position-x"] = "7px";
        }    
        return titProps;
    },*/

    taskpanelSpanTitProps: function(size) {
        var property = brand.props;
        var titProps = {},
            titProps = {
                    "display": "inline",
                    "font-size": "46px",
                    "line-height": "69px",
                    "padding-top": "0px",
                    "padding-left": property.$taskpanelTitLeft,
                    "padding-right":property.$taskpanelTitRight,
                    "padding-bottom": "0px"
            };
        if (size == "md") {            
            titProps["padding-left"] = "17px";
            titProps["padding-right"] = "17px";
            titProps["font-size"] = "40px";
            titProps["line-height"] = property.$taskpanelLineHeightM;
        }   else if (size == "sm") {            
            titProps["padding-left"] = "17px";
            titProps["padding-right"] = "17px";
            titProps["font-size"] = "32px";
            titProps["line-height"] = "46px";
        } 
        else if ( size == "xs") {            
            titProps["padding-left"] = "15px";
            titProps["padding-right"] = "15px";
            titProps["font-size"] = "32px";
            titProps["line-height"] = "46px";
        } 
        return titProps;
    },

   /* taskpanelSpanTit1Props: function(size) {
        var titProps = {},
            titProps = {
                "top": "-10px",
                "position": "relative",
            };
        if (size == "md") {
            titProps["top"] = "-8px";
        }   else if (size == "sm" || size == "xs") {
            titProps["top"] = "-10px";
        }    
        return titProps;
    },*/

    taskpanelSpanTit1Props: function(size) {
        var property = brand.props;
        var titProps = {},
            titProps = {
                "top": property.$taskpanelSpanTit1LM,
                "position": "relative",
            };
            if (size == "md") {
            titProps["top"] = property.$taskpanelSpanTit1M;
        }   else if (size == "sm") {
            titProps["top"] = property.$taskpanelSpanTit1S;
        }   else if (size == "xs") {
            titProps["top"] = property.$taskpanelSpanTit1XS;
        } 
        return titProps;
    },

    taskpanelSpanTit2Props: function(size) {
        var property = brand.props;
        var titProps = {},
            titProps = {
                "top": property.$taskpanelSpanTit2L,
                "position": "relative",
            };
        if (size == "md") {
            titProps["top"] = property.$taskpanelSpanTit2M;
        }   else if (size == "sm") {
            titProps["top"] = property.$taskpanelSpanTit2S;
        }   else if (size == "xs") {
            titProps["top"] = property.$taskpanelSpanTit2LXS;
        }   
        return titProps;
    },

    taskpanelTaskProps: function(size) {
        var property = brand.props;
        var titProps = {
               // "background-color": property.$taskpanel_bgcolor,
                "padding-bottom": property.$taskpanel_pad_bottom
            };
            if(size=="sm"){  
                titProps['padding-bottom'] = property.$taskpanel_pad_bottom_med
            } 
            else if(size=="xs"){
                titProps['padding-bottom'] = property.$taskpanel_pad_bottom_med
            } 
        return titProps;
    },

    taskBasedimgWrap : function(size) {
        var property = brand.props;
        var imgProps={
                //'margin-top': '0px',
                'margin-top': '0px',
                //'margin-right': property.$img_margin_left_right_lg,
                //'margin-bottom': '0px',
                'margin-bottom': '0px',
               // 'margin-left': property.$img_margin_left_right_lg,
                'width': property.$img_width_height_lg,
                'height': property.$img_width_height_lg
        };
        
        if (size == "md" ) {
            imgProps['margin-top'] = "0px";
           // imgProps['margin-right'] = property.$img_margin_left_right_md;
            imgProps['margin-bottom'] = "0px";
           // imgProps['margin-left'] = property.$img_margin_left_right_md;
            imgProps['width'] = property.$img_width_height_md;
            imgProps['height'] = property.$img_width_height_md;
        } else if(size=="sm"){
            imgProps['margin-top'] = "0px";
           // imgProps['margin-right'] = property.$img_margin_left_right_sm;
            imgProps['margin-bottom'] = "0px";
           // imgProps['margin-left'] = property.$img_margin_left_right_sm;
            imgProps['width'] = property.$img_width_height_sm;
            imgProps['height'] = property.$img_width_height_sm;
        } else if(size=="xs"){
            imgProps['margin-top'] = "0px";
           // imgProps['margin-right'] = "15px";
            imgProps['margin-bottom'] = "0px";
           // imgProps['margin-left'] = "0px";
            imgProps['width'] = "64px";
            imgProps['height'] = "64px";
            imgProps['float'] = "left";
        }
     return imgProps;
    },

    taskBasedImgSizeProps:function(size) {
        var property = brand.props;
        var imgProps = {
            'width': property.$img_width_height_lg,
            'height': property.$img_width_height_lg
        };
        if (size == "md") {
            imgProps['width'] = property.$img_width_height_md;
            imgProps['height'] = property.$img_width_height_md;
        }   else if (size == "sm") {
            imgProps['width'] = property.$img_width_height_sm;
            imgProps['height'] = property.$img_width_height_sm;
        } else if(size=="xs"){
            imgProps['width'] = "64px";
            imgProps['height'] = "64px";
        }
        return imgProps;
   },

    taskBasedctaWrap : function(size) {
        var property = brand.props;
        var ctaProps={
                'padding-top': property.$cta_padding_top,
                'text-align': 'center',
                //'line-height': '30px'
        };
        if(size=="xs"){
            ctaProps['margin-right'] = "0px";
            ctaProps['margin-bottom'] = "0px";
            ctaProps['margin-left'] = "0px";
            ctaProps['margin-top'] = "0px";
            ctaProps['padding-right'] = "0px";
            ctaProps['padding-bottom'] = "0px";
            ctaProps['padding-left'] = "0px";
            ctaProps['padding-top'] = "0px";
            ctaProps['text-align'] = "left";
        }
     return ctaProps;
    },

    taskBasedSearchWrap : function(size) {
        var property = brand.props;
        var searchProps={
                'padding-bottom': property.$searchWrap_padding_bottom,
                /*For Natwest Gradient*/
                //'background-image': property.$search_bg_color
                'background-color': property.$search_bg_color
        };
         if (size == "sm") {
            searchProps['padding-bottom'] = property.$searchWrap_padding_bottom_sm;
        } else if(size=="xs"){
            searchProps['padding-bottom'] = property.$searchWrap_padding_bottom_xs;
        }  
     return searchProps;
    },

    taskpanelSearchLabelProps : function(size) {
        var property = brand.props;
        var searchProps = {
            'float': property.$searchLabel_float_lg,
            'padding-top': property.$searchLabel_padding_top_lg,
            'margin-right': property.$searchLabel_margin_rt_lg,
            'margin-bottom': '0px',
            'font-weight': property.$searchFontWeight,
            //'height': property.$searchLabel_height_lg,
        };
        if (size == "md") {
           // searchProps['height'] = property.$searchLabel_height_md;
            searchProps['padding-top'] = property.$searchLabel_padding_top_md;
        }   else if (size == "sm") {
           // searchProps['height'] = property.$searchLabel_height_sm;
            searchProps['text-align'] = property.$searchLabel_textalign_sm;
            searchProps['margin-bottom'] = property.$searchLabel_margin_bottom_sm;
            searchProps['margin-right'] = "0px";
            searchProps['float'] = "none";
            searchProps['padding-top'] = property.$searchLabel_padding_top_sm;
        } else if(size=="xs"){
            //searchProps['height'] = property.$searchLabel_height_xs;
            searchProps['text-align'] = property.$searchLabel_textalign_sm;
            searchProps['padding-top'] = property.$searchLabel_padding_top_xs;
            searchProps['margin-bottom'] = property.$searchLabel_margin_bottom_sm;
            searchProps['margin-right'] = "0px";
            searchProps['float'] = "none";
        }  
        return searchProps;
   },

   taskpanelSearchwrapinpProps: function(size) {
        var property = brand.props;
        var searchProps = {
            'float': property.$searchLabel_float_lg,

            'border-top-style': property.$searchinp_border_top_style,
            'border-left-style': property.$searchinp_border_left_style,
            'border-right-style': property.$searchinp_border_right_style,
            'border-bottom-style': property.$searchinp_border_bottom_style,
            
            'border-top-width': property.$searchinp_border_top_width,
            'border-left-width': property.$searchinp_border_left_width,
            'border-right-width': property.$searchinp_border_right_width,
            'border-bottom-width':property.$searchinp_border_bottom_width,
            
            'border-top-color': property.$searchinp_border_top_color,
            'border-left-color': property.$searchinp_border_left_color,
            'border-right-color': property.$searchinp_border_right_color,
            'border-bottom-color':property.$searchinp_border_bottom_color,
            
            'background-color': property.$searchinp_background_color,

            'padding-top': property.$searchinp_padding_top,
            'padding-right': property.$searchinp_padding_right,
            'padding-bottom': property.$searchinp_padding_bottom,
            'padding-left': property.$searchinp_padding_left,

        };
         if (size == "sm") {
            searchProps['padding-right'] = property.$searchinp_padding_right_sm;
            searchProps['padding-bottom'] = property.$searchinp_padding_bottom_sm;
            searchProps['padding-left'] = property.$searchinp_padding_left_sm;
            searchProps['padding-top'] = property.$searchinp_padding_top_sm;  
            searchProps['float'] = "none";           
        } else if(size=="xs"){
            searchProps['padding-top'] = property.$searchinp_padding_top_xs;
            searchProps['padding-bottom'] = property.$searchinp_padding_bottom_xs;
            searchProps['float'] = "none";
        }  
        return searchProps;
   },

   taskpanelShelfmarginProps: function(size) {
    var shelfProps = {
        'margin-bottom': '20px',
        'position': 'relative'
    };
    return shelfProps;
    },

    tasksMediumDevicerowProps: function(size) {
        var mDeviceProps = {
        };
        if (size == "sm") {
            mDeviceProps['text-align'] = "center";
        } 
        return mDeviceProps;
    },

    tasksMediumDeviceTabviewProps: function(size) {
        var mDeviceProps = {
        };
        if (size == "sm") {
            mDeviceProps['display'] = "inline-block";
        } 
        return mDeviceProps;
    },

    tasksMediumDeviceListProps: function(size) {
        var mDeviceProps = {
        };
        if (size == "sm") {
            mDeviceProps['width'] = "134px";
        } 
        return mDeviceProps;
    }

}

module.exports = {
    taskBasedProps: cssProps
}