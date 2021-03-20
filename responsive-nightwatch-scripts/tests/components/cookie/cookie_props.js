var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps = {
    marProps: function(size) {
        var shelfProps = {}, 
         property = brand.props;
            shelfProps = {
               "padding-top" : "40px",
               "padding-bottom" : "19.5px",
               "background-color" : property.$cookie_bgColor,
               "border-bottom" : "1px solid rgb(255, 255, 255)",
               "min-height" : "40px",
               "position" : "relative"
            };
        return shelfProps;
    },

    cookieHeading : function(size) {
        var props={},
          property = brand.props;
            props = {
            'margin-bottom': '24.362px',
            "line-height": "34px",
           "font-size": "26px",
            'color': property.$primary_2
        }
        if(size=="sm" || size=="xs"){
            props['line-height'] = '32px';
        }
     return props;
    },

    paraProps: function(size) {
        var shelfProps = {},
         property = brand.props;
            shelfProps = {
               "font-size" : "16px",
               'color': property.$primary_2,
               "line-height" : "22px",
               
            };
            if (size == "sm") {
            shelfProps["line-height"] = "20px";
        } else if (size == "xs") {
            shelfProps["line-height"] = "20px";
            shelfProps["font-size"] = "14px";
        }
        return shelfProps;
    },

    closeButtonProps: function(size) {
        var shelfProps = {},
         property = brand.props;
            shelfProps = {
                   "position" : "absolute",
                   "width" : "19.9844px",
                   "height" : "19.9844px",
                   "top" : "44.4px",
                   "right" : "15px",
                   "background-color" : property.$cookie_close_color,
                   "color" : property.$primary_2,
            };
            if (size == "sm" || size == "xs") {
            shelfProps["top"] = "5px";
            shelfProps["right"] = "3.756px";
            } 
        return shelfProps;
    },



}

module.exports = {
    cookieProps: cssProps
}