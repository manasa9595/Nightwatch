var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get());

//article shelf props
var cssProps = {
    dIconProps: function(size) {
        var shelfProps = {},

            shelfProps = {
                "height": "35px",
                "width": "35px",
                "float": "right",
                //"background": 'rgba(0, 0, 0, 0) url("https://rbs-natwest-retail-test-61.adobecqms.net/etc/designs/responsive/clientlib_download_shelf_base/images/icon-download-nw-premier-large.png") no-repeat scroll 0% 100% / 100% 100% padding-box border-box',//natwest
                //"background":'rgba(0, 0, 0, 0) url("https://rbs-retail-test-61.adobecqms.net/etc/designs/responsive/clientlib_download_shelf_base/images/icon-download-header-rbspremier.png") no-repeat scroll 0% 100% / 100% 100% padding-box border-box',//rbs
                //"background-size": "100% 100%"
            };
            if (size == "sm") {
            shelfProps["height"] = "30px";
            shelfProps["width"] = "30px";
        } else if (size == "xs") {
            shelfProps["height"] = "30px";
            shelfProps["width"] = "30px";
        }
        return shelfProps;
    },
    titprops: function(size) {
        var shelfProps = {},
        property = brand.props;
            shelfProps = {
               "color": property.$font_color_regular,
               "font-family": property.$font_family_title
            };
        return shelfProps;
    },
    dShelfPaddingProps: function(size) {
        var shelfProps = {},
        property = brand.props;
            shelfProps = {
                "padding-top": property.$padding_top,
                "padding-bottom": "50px"
            };
            if (size == "md") {
            shelfProps["padding-top"] = property.$padding_topM;
            //shelfProps["padding-bottom"] =property.$padding_bottomM;
        } else if (size == "sm") {
            shelfProps["padding-top"] =property.$padding_topS;
            //shelfProps["padding-bottom"] =property.$padding_bottomS;
        } else if (size == "xs") {
            shelfProps["padding-top"] =property.$padding_topXS;
            //shelfProps["padding-bottom"] = property.$padding_bottomXS;
        }

        return shelfProps;
    },
    dShelfnoPaddingProps: function(size) {
        var shelfProps = {},
        property = brand.props;
            shelfProps = {
                "padding":property.$download_nopadding

            };
             if (size == "md") {
            shelfProps["padding"] = "0px";
        } else if (size == "sm") {
            shelfProps["padding"] = "0px";
        } else if (size == "xs") {
            shelfProps["padding"] = "0px 0px 30px";
        }
        return shelfProps;
    },
    dTitleWrapperProps: function(size) {
        var shelfProps = {},
        property = brand.props;
            shelfProps = {
                "margin-top":"0px"
            };
        return shelfProps;
    },
    dTextWrapperProps: function(size) {
        var shelfProps = {},
            property = brand.props;
            shelfProps = {
                "margin-top": "20px",
                 "color": property.$winks_textcolor,
                 "font-family": property.$font_family_text
            };

        return shelfProps;
    },
    dLinkWrapperProps: function(size) {
        var shelfProps = {},

            shelfProps = {
                "margin-top": "20px",
                "margin-bottom": "20px"
            };

        return shelfProps;
    },
    dLinkProps: function(size) {
        var shelfProps = {},
        property = brand.props;
            shelfProps = {
                "font-size": "18px",
                "line-height": "26px", 
                "font-family": property.$font_family_regular,
                "color": property.$notificationBg,
                "margin-bottom": property.$link_margin_bottom
            };
        if (size == "md") {
            shelfProps["margin-bottom"] = "20px";
        } else if (size == "sm") {
            shelfProps["margin-bottom"] = "20px";
        } else if (size == "xs") {
            shelfProps["margin-bottom"] = "20px";
        };
        
        return shelfProps;
    },

    dLinkIconProps: function(size) {
        var shelfProps = {},

            shelfProps = {
                    "background": 'url(clientlib_download_link_base/images/icon-downloadlinks_rbs.png) no-repeat left bottom',
                    "display": "inline-block",
                    "height": "17px",
                    "width": "17px",
                    "margin-left": "10px",
                    "position": "relative",
                    "top": "2px"
            };
        return shelfProps;
    }
    
}

module.exports = {
    downloadShelfProps: cssProps
}