var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
	 whyUsWhiteShelfProps : function(size){
         var property = brand.props;
	 	var whiteShelfProp = {},	 	
	 	whiteShelfProp = {
            "padding-top": "35px",
            "margin-bottom" : "20px", 
	 		//"background-color" : "rgba(0, 0, 0, 0)"
	 	};
        if (size == "sm") {
            whiteShelfProp["padding-top"] = "30px";
        } else if (size == "xs") {
            whiteShelfProp["padding-top"] = "30px";
        }
	 	return whiteShelfProp;
	 },

     whyUsPurpleShelfProps: function(size) {
        var property = brand.props;
        var purpleShelfProp = {},
            purpleShelfProp = {
                "padding-top": "35px",
                "margin-bottom" : property.$whyus_margin_bottom,
                "background-color":  property.$whyus_bg_cocor    
            };

        if (size == "sm") {
            purpleShelfProp["padding-top"] = "30px";
        } else if (size == "xs") {
            purpleShelfProp["padding-top"] = "30px";
        }
        return purpleShelfProp;
    },

    whyUsWhiteShelftitle: function(size) {
        var property = brand.props;
        var purpleShelfProp = {},
            purpleShelfProp = {
                "color": property.$whyush3title,
                "font-size" : "18px",
                "line-height":  "26px"
            }
            if(size=="xs"){
            purpleShelfProp['line-height'] = "24px";
        }
        return purpleShelfProp;
    },

    whyUsWhiteShelftext: function(size) {
        var property = brand.props;
        var whiteShelfTextProp = {},
            whiteShelfTextProp = {
                "color": property.$errorPage_text_color,
                "font-size" : "18px",
                "line-height":  "26px",
                "font-family": property.$font_family_text
            }
        return whiteShelfTextProp;
    },

     whyUspurpleShelftitle: function(size) {
        var property = brand.props;
        var purpleShelfProp = {},
            purpleShelfProp = {
                "color": property.$primary_2,
                "font-size" : "18px",
                "line-height":  "26px"
            }
            if(size=="xs"){
            purpleShelfProp['line-height'] = "24px";
        }
        return purpleShelfProp;
    },

    whyUspurpleShelftext: function(size) {
        var property = brand.props;
        var purpleShelfTextProp = {},
            purpleShelfTextProp = {
                "color": property.$primary_2,
                "font-size" : "18px",
                "line-height":  "26px",
                "font-family": property.$font_family_text
            }
        return purpleShelfTextProp;
    },
    titleProps: function(size) {
        var property = brand.props;
        var titleProp = {},
            titleProp = {
                "color": property.$primary_1,
                "font-family": property.$font_family_title
            }
        return titleProp;
    },
    titleColorBgProps: function(size) {
        var property = brand.props;
        var titleColorBgProp = {},
            titleColorBgProp = {
                "color": property.$primary_2,
                "font-family": property.$font_family_title
            }
        return titleColorBgProp;
    },


	 whyUsShelfGrid1 : function(size) {
        var property = brand.props;
        var gridProps={
            'color':property.$errorPage_text_color,
            'padding-top': '35px',
            'padding-bottom': '40px'
        }
        if(size=="md"){
            gridProps['padding-top'] = "35px";
            gridProps['padding-bottom'] ="40px";
        }
        else if(size=="sm"){
            gridProps['padding-top'] = "30px";
            gridProps['padding-bottom'] ="44px";
        }
        else if(size=="xs"){
            gridProps['padding-top'] = "30px";
            gridProps['padding-bottom'] = "32px";
        }
     return gridProps;
    },
    whyUsShelfGrid2 : function(size) {
        var property = brand.props;
        var gridProps={
            'color':property.$errorPage_text_color,
            'padding-top': '35px',
            'padding-bottom': '40px'
        }
        if(size=="md"){
            gridProps['padding-top'] = "35px";
            gridProps['padding-bottom'] ="40px";
        }
        else if(size=="sm"){
            gridProps['padding-top'] = "30px";
            gridProps['padding-bottom'] ="44px";
        }
        else if(size=="xs"){
            gridProps['padding-top'] = "0px";
            gridProps['padding-bottom'] = "32px";
        }
     return gridProps;
    },
    whyUsShelfGrid3 : function(size) {
        var property = brand.props;
        var gridProps={
            'color':property.$errorPage_text_color,
            'padding-top': '35px',
            'padding-bottom': '40px'
        }
        if(size=="md"){
            gridProps['padding-top'] = "35px";
            gridProps['padding-bottom'] ="40px";
        }
        else if(size=="sm"){
            gridProps['padding-top'] = "0px";
            gridProps['padding-bottom'] ="40px";
        }
        else if(size=="xs"){
            gridProps['padding-top'] = "0px";
            gridProps['padding-bottom'] = "32px";
        }
     return gridProps;
    },
    whyUsShelfGrid4 : function(size) {
        var property = brand.props;
        var gridProps={
            'color':property.$errorPage_text_color,
            'padding-top': '35px',
            'padding-bottom': '40px'
        }
        if(size=="md"){
            gridProps['padding-top'] = "35px";
            gridProps['padding-bottom'] ="40px";
        }
        else if(size=="sm"){
            gridProps['padding-top'] = "0px";
            gridProps['padding-bottom'] ="40px";
        }
        else if(size=="xs"){
            gridProps['padding-top'] = "0px";
            gridProps['padding-bottom'] = "40px";
        }
     return gridProps;
    },
    whyUsImgProps : function() {
        var imgProps={
            'height':"53px",
            'width': '53px',
            'position': 'relative',
            'margin-top': '0px',
            'margin-bottom': '0px'
        }
     return imgProps;
    },
    whyUsTitleProps : function(size) {
        var titleProps = {},
        property = brand.props,
         titleProps={
            'margin-top':"17px",
        };
         if(size == "xs"){
             titleProps['margin-top'] = "16px";
        }
     return titleProps;
    },
    whyUsTitlecompProps : function(size) {
        var titleProps = {},
        property = brand.props,
         titleProps={
            "font-family": property.$font_family_bold_2,
            "font-size": "18px",
            "line-height": "26px"
        };
         if(size == "xs"){
             titleProps['line-height'] = "24px";
        }
     return titleProps;
    },
    whyUsTextProps : function(size) {
        var textProps = {},
       property = brand.props,
         textProps={
            'overflow':"hidden",
            'margin-top': '3px',
            'display': 'block',
            //'padding-left': '0px',
            //'padding-right': '0px',
            "font-family": property.$font_family_text,
            "font-size": "18px",
            "line-height": "26px"
        }
        if(size == "xs"){
             textProps['margin-top'] = "8px";
        }
     return textProps;
    },
    whyUsSecCTAWrapProps : function(){
        var secCTAWrapProps = {},
        property = brand.props,
         secCTAWrapProps={
            'margin-top':"20px",
        };
     return secCTAWrapProps;
    },
    whyUsSecCTAProps : function(){
        var secCTAProps = {},
        property = brand.props,
         secCTAProps={
            'font-size':"18px",
            'line-height':"30px",
            'color':property.$linkcolor,
            'font-family': property.$font_family_regular
        };
     return secCTAProps;

    },
    whyUsSecCTAPurpleProps : function(){
       var secCTAPurpleProps = {},
        property = brand.props,
         secCTAPurpleProps={
            'font-size':"18px",
            'line-height':"30px",
            'color':property.$primary_2,
            'font-family': property.$font_family_regular
        };
     return secCTAPurpleProps; 
 }
   /* whyUspseudoProp : function(){
         var property = brand.props;
    	pseudoProp= {
    		'position':"absolute",
    		'border-top-width': property.$whyus_twill_height,
    		'border-top-style': 'solid',
    		'border-top-color': 'rgb(0, 159, 172)',
    		'border-bottom-width': '0px',
    		'border-bottom-style': 'solid',
    		'border-right-color': 'rgba(0, 0, 0, 0)',
    		'border-right-style':'solid',
    		'border-right-width': '9px',
    		'border-left-color': 'rgba(0, 0, 0, 0)',
    		'border-left-style': 'solid',
    		'border-left-width': '9px'
    	}
    	return pseudoProp;
    }*/
}
module.exports = {
    whyUsShelfProps: cssProps
}