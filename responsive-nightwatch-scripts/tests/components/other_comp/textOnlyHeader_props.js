var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get());


var cssProps = {

shelfPadProps: function(size) { 
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "padding-top" : "50px",
            "padding-bottom" : "50px",
            "word-wrap" : "break-word"
        };
         if (size == "sm") {
            shelfProps["padding-top"] = "30px";
            shelfProps["padding-bottom"] = "30px";
        } else if (size == "xs") {
            shelfProps["padding-top"] = "30px";
            shelfProps["padding-bottom"] = "30px";
        }

        return shelfProps;
    },
shelfBgBlueProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "background-color": "rgba(81, 108, 179, 1)"
        };
         return shelfProps;
    },
shelfBgGradProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "background-image": "linear-gradient(91deg, rgb(70, 49, 98), rgb(29, 20, 48))"
            /* For IE 8 and 9*/
            //"background-color" : "rgba(66, 20, 95, 1)"
        };
         return shelfProps;
    },
shelfBgPurpleProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "background-color": "rgba(66, 20, 95, 1)"
        };
         return shelfProps;
    },
shelfBgGoldProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "background-color": "rgba(251, 186, 32, 1)"
        };
         return shelfProps;
    },
shelfBgGoldtextProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "color": "rgba(66, 20, 95, 1)"
        };
         return shelfProps;
    },
shelfBgRBProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "background-color": "rgba(0, 45, 100, 1)"
        };
         return shelfProps;
    },

textMarProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "margin-bottom": property.$text_margin_bottom_xl
        };
         if (size == "md") {
            shelfProps["margin-bottom"] = property.$text_margin_bottom_l;
        } else if (size == "sm") {
            shelfProps["margin-bottom"] = property.$text_margin_bottom_m;
        } else if (size == "xs") {
            shelfProps["margin-bottom"] = property.$text_margin_bottom_s;
        }
         return shelfProps;
    },
textOnlyHeadertitleProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "color": "rgba(255, 255, 255, 1)"
        };
         return shelfProps;
    },
textOnlyHeadertextProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "color": "rgba(255, 255, 255, 1)"
        };
         return shelfProps;
    },
complShelfPadProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "padding-top": "20px",
            "padding-bottom": "35px"
        };
         if (size == "sm") {
            shelfProps["padding-top"] = "20px";
            shelfProps["padding-bottom"] = "30px";
        } else if (size == "xs") {
            shelfProps["padding-top"] = "20px";
            shelfProps["padding-bottom"] = "30px";
        }

        return shelfProps;
    },
complTextProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
        	"background-image": property.$compliance_background_image,
            "background-size": property.$text_background_size,
            "padding-left": property.$text_padding_left

        };
         return shelfProps;
    },
twillTitle1Props: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
        	"background-image": 'url("https://author-rbs-retail-test-61.adobecqms.net/etc/designs/responsive/clientlib_textonlyheader_base/images/header-pink-twill.svg")',
            "background-color": "rgba(149, 7, 125, 0.7)",
            "padding-top": "22px",
            "padding-bottom": "14px",
            //"z-index": "2"

        };
         if (size == "md") {
            shelfProps["padding-top"] = "17px";
            shelfProps["padding-bottom"] = "12px";
        } else if (size == "sm") {
            shelfProps["padding-top"] = "17px";
            shelfProps["padding-bottom"] = "8px";
        } else if (size == "xs") {
            shelfProps["padding-top"] = "11px";
            shelfProps["padding-bottom"] = "13px";
        }


         return shelfProps;
    },
twillTitle2Props: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
        	"background-image": property.$twill2_background_image,
            "background-color": property.$twill2_background_color,
            "padding-top": "21px",
            "padding-bottom": "15px",
            //"z-index": "3"

        };
         if (size == "md") {
            shelfProps["padding-top"] = "17px";
            shelfProps["padding-bottom"] = "10px";
        } else if (size == "sm") {
            shelfProps["padding-top"] = "17px";
            shelfProps["padding-bottom"] = property.$twill_title2_padding_bottom;
        } else if (size == "xs") {
            shelfProps["padding-top"] = "11px";
            shelfProps["padding-bottom"] = "13px";
        }


         return shelfProps;
    },
twillTitleProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "padding": "0px 17px",
            "line-height": "69px"

        };
         if (size == "md") {
            shelfProps["padding"] = "0px 17px";
            shelfProps["line-height"] = "58px";
        } else if (size == "sm") {
            shelfProps["padding"] = "0px 17px";
            shelfProps["line-height"] = "46px";
        } else if (size == "xs") {
            shelfProps["padding"] = "0px 15px";
            shelfProps["line-height"] = "44px";
        }


         return shelfProps;
    },
}
module.exports = {
    textOnlyHeaderProps: cssProps
}