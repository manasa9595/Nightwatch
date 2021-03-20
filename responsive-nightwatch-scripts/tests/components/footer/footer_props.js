var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
//>----------CONTEXUAL LINK properties---------->
var cssProps = {
    
    bgClr: function(size) {
        var bgProps = {},
            property = brand.props;
        bgProps = {
            "background-color": property.$footer_bg_color
        };
        return bgProps;
    },
    linkMenuProps: function(size) {
        var menuProps = {},
            menuProps = {
                //"display": "inline-block",
                "margin-bottom": "22px",
                "text-decoration": "none solid rgb(255, 255, 255)"
            };
        if (size == "sm") {
            menuProps["margin-bottom"] = "24px";
        } else if (size == "xs") {
            menuProps["margin-bottom"] = "34px";
        }

        return menuProps;
    },
    dividerLineProps: function(size) {
        var lineProps = {},
            property = brand.props,
            lineProps = {
                "border-top": property.$context_divider_border_color
            };
        if(size == "lg"){
            lineProps["margin-top"] = property.$context_divider_mt_xl;
            lineProps["margin-bottom"] = property.$context_divider_mb_xl;
        } else if (size == "md") {
            lineProps["margin-top"] = property.$context_divider_mt_l;
            lineProps["margin-bottom"] = property.$context_divider_mb_l;
        } else if (size == "sm") {
            lineProps["margin-top"] = property.$context_divider_mt_m;
            lineProps["margin-bottom"] = property.$context_divider_mb_m;
        } else if (size == "xs") {
            lineProps["margin-top"] = "20px";
            lineProps["margin-bottom"] = "9px";
        }
        return lineProps;
    },
    //>>-------------FOOTER COMPONENT Properties---------->>
    footerWrapProps: function(size) {
        var wrapProps = {},
            property = brand.props,
            wrapProps = {                
                "display": "block",
                "background-color": property.$footer_bg_color,
                "background-image" : property. $footer_bg_image
            };
        if (size == "lg") {
            wrapProps["padding-top"] = "35px";
            wrapProps["padding-bottom"] = "35px";
        }  else if (size == "sm" || size == "xs") {
            wrapProps["padding-top"] = "30px";
            wrapProps["padding-bottom"] = "30px";
        } 
        return wrapProps;
    },
    footerWrap1Props: function(size) {
        var wrapProps = {},
            property = brand.props;
            wrapProps = {
                "margin-bottom" : "30px"
            };
           
    
        /*var wrapProps = {
            "margin-bottom": marginBottom,
        };*/

        return wrapProps;
    },
    footerFontProps: function(size) {
        var fontProp = {},
            property = brand.props,
            fontFamily = property.$font_family_shelf;
            fontProp = {
                "color": property.$primary_2,
                };
        if (size == "xs") {
           fontFamily = "RNHouseSansRegular, sans-serif";
        }
        return fontProp;

    },
    footerLinksProps: function(size) {
        var menuProps = {},
        menuProps = {
            "margin-bottom" : "20px"
        };
       
           
        return menuProps;
    },

    iconProps: function(size) {
        var imgProps = {},
            imgProps = {
                "float": "left"
            };
        if (size == "xs") {
            imgProps["margin-bottom"] = "30px";
        }
        return imgProps;
    },
    iconPropsFb: function(size) {
        var imgProps = {},
            imgProps = {
                "margin-right": "20px",
                "width": "50px",
                "height": "50px",
                "display": "block"
            };
        return imgProps;
    },
    iconproperties: function(size) {
        var imgProps = {},
            imgProps = {
                "float": "left"
            };
        return imgProps;
    },
    menuTextProps: function(size) {
        var menuProps = {},
            property = brand.props,
            menuProps = {
                "color": property.$primary_2,
                "font-family": property.$font_family_shelf,
               // "font-weight": "normal"
            };
        return menuProps;
    },
    bannerProps: function(size) {
        var imgProps = {};

       
           var imgProps = {
                "float": "right",
                "margin-top": "15px"
            }

             if (size == "xs") {
            imgProps["float"] = "none";
            imgProps["clear"] = "both";
        };
        
        return imgProps;
    }

}

module.exports = {
    footerProps: cssProps
}