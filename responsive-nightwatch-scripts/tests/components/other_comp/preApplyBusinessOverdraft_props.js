var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps = {

	themePurple:function(size) {    
        var textProp = {}, property = brand.props;
        var textProp={
           //'background-color': property.$shelf_bg_color,
           };

       return textProp;   
    },

    shelfPadding:function(size) {    
        var textProp = {}, property = brand.props;
        var textProp={
           'padding-top': '50px',
           'padding-bottom' : '50px',
            };
            if(size=="sm"){
                textProp['padding-top'] = '30px'
                 textProp['padding-bottom'] = '30px'
            }
            else if(size=="xs"){
                textProp['padding-top'] = '30px'
                 textProp['padding-bottom'] = '30px'
            }

       return textProp;   
   },

   titleComph3:function(size) {    
        var textProp = {}, property = brand.props;
        var textProp={
           'color': property.$primary_2,
           "font-family": property.$font_family_regular,
           };

       return textProp;   
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


    btnNotSelected:function(size) {    
        var textProp = {}, property = brand.props;
        var textProp={
           'color': property.$primary_2,
           //'background-color': property.$primary_2,
           };

       return textProp;   
    },


    btnSelected:function(size) {    
        var textProp = {}, property = brand.props;
        var textProp={
           //'background-color': property.$primary_2,
           //'color':  property.$shelf_bg_color,
           };

       return textProp;   
    },

     marProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "padding-top" : "97px",
               "padding-bottom" : "35px"
            };
            if(size=="sm"){
              shelfProps["padding-top"] = "82px";
              shelfProps["padding-bottom"] = "30px";
            }
            else if(size=="xs"){
              shelfProps["padding-top"] = "63px";
              shelfProps["padding-bottom"] = property.$singleArticle_padding_bottom;
            }
        return shelfProps;
    },

    shelfpara:function(size) {    
        var textProp = {}, property = brand.props;
        var textProp={
           'margin-top': "20px",
           };

       return textProp;   
    },

    imgWrapProps : function(size){
     var shelfProps = {},
            shelfProps = {
               "width" : "445px",
               "height" : "275px"
            };
            if(size=="md"){
              shelfProps["width"] = "360px";
              shelfProps["height"] = "223px";
            }
            else if(size=="sm"){
              shelfProps["width"] = "265px";
              shelfProps["height"] = "161px";
            }
            else if(size=="xs"){
              shelfProps["width"] = "335px";
              shelfProps["height"] = "207px";
              shelfProps["margin-bottom"] = "20px";
            }
        return shelfProps;
   },

   linkText:function(size) {    
        var textProp = {}, property = brand.props;
        var textProp={
           "font-family": property.$font_family_regular,
           'margin-top': "20px",
           };

       return textProp;   
    },

}

module.exports = {
    preApplyBusinessOverdraftprops: cssProps
}   