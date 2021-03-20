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
    shelfAppnthProps: function(size) {
        var shelfProps = {},
        property = brand.props;
            shelfProps = {
                "border-right-width": "0px",
                "border-top-left-radius": property.$border_top_left_radius,
                "border-top-right-radius": property.$border_top_right_radius,
                "border-bottom-right-radius": property.$border_bottom_right_radius,
                "border-bottom-left-radius": property.$border_bottom_left_radius,
            };
        return shelfProps;
    },
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
    }

}


module.exports = {
    toggleShelfProps: cssProps
}