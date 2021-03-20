var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get());

//article shelf props
var cssProps = {
    bgProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "background-color": property.$bgColor
        };

        return shelfProps;
    },
    shelfPadProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "padding-top": "50px",
                "padding-bottom": "50px",
                "position": "relative"
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
    titleColorProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "color": "rgba(255, 255, 255, 1)"
            };
            return shelfProps;
    },
    yellowTitleColorProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "color": "rgba(66, 20, 95, 1)"
            };
            return shelfProps;
    },
    shelfTitleWrapProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "margin-bottom": "35px"
            };
        if (size == "sm") {
            shelfProps["margin-bottom"] = "30px";
        } else if (size == "xs") {
            shelfProps["margin-bottom"] = "30px";
        }

        return shelfProps;
    },
    shelfButtonWrapProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "height": "64px",
                "float": "left",
                "display": "block"
            };

        return shelfProps;
    },
    shelfAppButtonProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "line-height": "26px",
            "padding": "6px 15px",
            "float": "left",
            "display": "block",
            "border-top-left-radius": property.$border_top_left_radius,
            "border-top-right-radius": property.$border_top_right_radius,
            "border-bottom-right-radius": property.$border_bottom_right_radius,
            "border-bottom-left-radius": property.$border_bottom_left_radius,
            "position": "relative",
            "color": "rgba(255, 255, 255, 1)"
        };
        if (size == "sm") {
            shelfProps["padding"] = "6px 10px";
        } else if (size == "xs") {
            shelfProps["padding"] = "6px 10px";
        }
        return shelfProps;
    },
    yellowShelfAppButtonProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "line-height": "26px",
            "padding": "6px 15px",
            "float": "left",
            "display": "block",
            "border-top-left-radius": property.$border_top_left_radius,
            "border-top-right-radius": property.$border_top_right_radius,
            "border-bottom-right-radius": property.$border_bottom_right_radius,
            "border-bottom-left-radius": property.$border_bottom_left_radius,
            "position": "relative",
            "color": "rgba(66, 20, 95, 1)"
        };
        if (size == "sm") {
            shelfProps["padding"] = "6px 10px";
        } else if (size == "xs") {
            shelfProps["padding"] = "6px 10px";
        }
        return shelfProps;
    },
    shelfAppButtonEvenProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "line-height": "26px",
            "padding": "6px 15px",
            "float": "left",
            "display": "block",
            "border-top-left-radius": property.$EvenTogg_border_top_left_radius,
            "border-top-right-radius": property.$EvenTogg_border_top_right_radius,
            "border-bottom-right-radius": property.$EvenTogg_border_bottom_right_radius,
            "border-bottom-left-radius": property.$EvenTogg_border_bottom_left_radius,
            "position": "relative",
            "color": "rgba(255, 255, 255, 1)"
        };
        if (size == "sm") {
            shelfProps["padding"] = "6px 10px";
        } else if (size == "xs") {
            shelfProps["padding"] = "6px 10px";
        }
        return shelfProps;
    },
   /* appButtonTextProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "color": "rgba(255, 255, 255, 1)"
        };
        return shelfProps;
    },
    shelfAppnthProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            //"border-right-width": "0px",
            "border-left-width": "1px",
            "border-top-left-radius": property.$border_top_left_radius,
            "border-top-right-radius": property.$border_top_right_radius,
            "border-bottom-right-radius": property.$border_bottom_right_radius,
            "border-bottom-left-radius": property.$border_bottom_left_radius
        };
        return shelfProps;
    }, */
    shelfCTAWrapProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "margin-top": "20px"
            };
        return shelfProps;
    },
    shelfCTATextProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "line-height": "26px",
                "font-size": "18px",
                "color": "rgba(255, 255, 255, 1)"
            };
        return shelfProps;
    },
    yellowShelfCTATextProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "line-height": "26px",
                "font-size": "18px",
                "color": "rgba(66, 20, 95, 1)"
            };
        return shelfProps;
    },
    buttonClickProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            //"color": "rgba(111, 44, 145, 1)"
            //"background-color": "rgba(255, 255, 255, 1)"
        };
        return shelfProps;
    },
    /*block2_bgProps: function(size) {
        var shelfProps = {},

            shelfProps = {
                "background-color": "rgba(0, 159, 172, 1)"
            };

        return shelfProps;
    },*/
    t4shelfAppnthProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "margin-right": "20px",
        }; 
        if (size == "sm") {
            shelfProps["margin-right"] = "10px";
        } else if (size == "xs") {
            shelfProps["margin-right"] = "10px";
        }
        return shelfProps;
    },
    sashelfPaddingtopProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "padding-top": "97px"
            };
        if (size == "sm") {
            shelfProps["padding-top"] = "82px";
        } else if (size == "xs") {
            shelfProps["padding-top"] = "63px";
        }
        return shelfProps;
    },
    sashelfPaddingbotProps: function(size) {
        var shelfProps = {},
        property = brand.props;
            shelfProps = {
                "padding-bottom": "35px"
            };
        if (size == "sm") {
            shelfProps["padding-bottom"] = "30px";
        } else if (size == "xs") {
            shelfProps["padding-bottom"] = property.$shelf_Padding_Bottom;
        }
        return shelfProps;
    },
    saContentProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                //"margin-bottom": "10px",
                //"padding-left": "26px",
                // "display": "block",
                //"position": "relative"
            };
        return shelfProps;
    },
    saContentPaddingProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "position": "relative",
                "display": "block",
                "padding-left": "26px"
            };
        return shelfProps;
    },
    /*imgWrapProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "width": "px"
                "height": "px"
            };
            if (size == "sm") {
            shelfProps["width"] = "px"
            shelfProps["height"] = "px"
        } else if (size == "xs") {
            shelfProps["width"] = "px"
            shelfProps["height"] = "px"
        }
        return shelfProps;
    },
    block4_bgProps: function(size) {
        var shelfProps = {},

            shelfProps = {
                "background-color": "rgba(81, 108, 179, 1)"
            };

        return shelfProps;
    },*/
    dShelfPaddingProps: function(size) {
        var shelfProps = {},
        property = brand.props;
            shelfProps = {
                "padding-top": property.$padding_top,
                "padding-bottom": property.$padding_bottom
            };
            if (size == "md") {
            shelfProps["padding-top"] = "40px";
            shelfProps["padding-bottom"] = "30px";
        } else if (size == "sm") {
            shelfProps["padding-top"] = "40px";
            shelfProps["padding-bottom"] = "30px";
        } else if (size == "xs") {
            shelfProps["padding-top"] = "40px";
            shelfProps["padding-bottom"] = "30px";
        }

        return shelfProps;
    },
    dTitleWrapperProps: function(size) {
        var shelfProps = {},
        property = brand.props;
            shelfProps = {
                "margin-top": property.$titleWrapper_margin_top_lg
            };
        if (size == "md") {
            shelfProps["margin-top"] = "10px";
        } else if (size == "sm") {
            shelfProps["margin-top"] = "10px";
        } else if (size == "xs") {
            shelfProps["margin-top"] = property.$titleWrapper_margin_top_xs;
        }
        return shelfProps;
    },
    dTextWrapperProps: function(size) {
        var shelfProps = {},

            shelfProps = {
                "margin-top": "20px"
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
                "margin-bottom": property.$link_margin_bottom
            };
        if (size == "md") {
            shelfProps["margin-bottom"] = "20px";
        } else if (size == "sm") {
            shelfProps["margin-bottom"] = "20px";
        } else if (size == "xs") {
            shelfProps["margin-bottom"] = "20px";
        }


        return shelfProps;
    },
    saContentWrapNoCtaProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "margin-bottom": "0px",
                "margin-top": "20px"

            };

        return shelfProps;
    },
    saAddContentWrapNoCtaProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "margin-top": "50px"

            };
            if (size == "sm") {
            shelfProps["margin-top"] = "30px";
            } else if (size == "xs") {
            shelfProps["margin-top"] = "30px";
            }

        return shelfProps;
    },
    PrimaryCTAMarginProps: function(size) {
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

        return shelfProps;
    },

    PrimaryCTAPaddingProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "padding-top": property.$cta_padding_top,
            "padding-right": property.$cta_padding_right,
            "padding-bottom": property.$cta_padding_bottom,
            "padding-left": property.$cta_padding_left,
            "max-width": "292px",
            "min-width": "240px",
            "border-width": "0px",
            "line-height": "30px"
        };

        return shelfProps;
    },
    SecCTAProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "display": "inline-block",
                "padding-top": "6px",
                "padding-right": "0px",
                "padding-bottom": "6px",
                "padding-left": "0px",
                "margin-top": "20px",
                "color": "rgba(255, 255, 255, 1)"
            };

        return shelfProps;
    },
    HoverProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "text-decoration-line": "none"
            };

        return shelfProps;
    },
    /*Padding top value is considered as 97px (XL & L), 82px(M), 63px(S) for Pre Apply shelf 
    when single article is the first child */
    SAaquaPaddingProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "padding-top": "50px",
                "padding-bottom": "50px"
            };
            if (size == "sm") {
            shelfProps["padding-top"] = "30px";
            shelfProps["padding-bottom"] = "30px";
            } else if (size == "xs") {
            shelfProps["padding-top"] = "20px";
            shelfProps["padding-bottom"] = "30px";
            }

        return shelfProps;
    },
    SAaquaCTAProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "background-color": "rgba(66, 20, 95, 1)"
            };
            return shelfProps;
    },
}

module.exports = {
    toggleShelfProps: cssProps
}