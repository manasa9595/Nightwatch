var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

//Header Components
var cssProps = {

	bgcolor_and_height_XL_and_L : function(size){
        var property = brand.props,     
        	bgPropsLarge = {};
        if (size == "lg"||size == "md") {
	     	bgPropsLarge["background-color"] = property.$header_bg_color,
     		bgPropsLarge["min-height"]= "40px" 
	     	
		};       
        return bgPropsLarge;
    },

    bgcolor_and_height_XL_and_L_active : function(size){
        var property = brand.props,     
            bgPropsLarge_active = {};
        if (size == "lg"||size == "md") {
            bgPropsLarge_active["background-color"] = property.$activeheaderBg,
            bgPropsLarge_active["padding-top"]= "12px",
            bgPropsLarge_active["padding-right"]= "18px",
            bgPropsLarge_active["padding-bottom"]= "13px",
            bgPropsLarge_active["padding-left"]= "18px",
            bgPropsLarge_active["color"] = property.$header_bg_color
        };       
        return bgPropsLarge_active;
    },
	
    bgcolr_and_links_outer_padding_S_M: function(size){    	
        var bgPropsSmall = {},
            property = brand.props;
        if (size == "sm"||size == "xs") {
	        bgPropsSmall["background-color"]= property.$header_bg_color,
            bgPropsSmall["padding-top"]= "12px",
		    bgPropsSmall["padding-right"]= "16px",
		    bgPropsSmall["padding-bottom"]= "12px",
		    bgPropsSmall["padding-left"]= "16px",
		    bgPropsSmall["display"]= "block",
            bgPropsSmall["font-size"]= "16px",
            bgPropsSmall["line-height"]= "22px"
        };
       return bgPropsSmall;
    },

    bgcolr_and_links_outer_padding_S_M_active: function(size){        
        var bgPropsSmallactive = {},
            property = brand.props;
        if (size == "sm"||size == "xs") {
            bgPropsSmallactive["background-color"]= property.$activeheaderBgSmall,
            bgPropsSmallactive["color"]= property.$header_bg_color
        };
       return bgPropsSmallactive;
    },

    headerLinkPropsXL_L:function(size){    	
    	var headerLinksLarge={},
    		property = brand.props;
	    if (size == "lg"||size == "md") {		    	
		    headerLinksLarge["font-size"]= "12px",
		    headerLinksLarge["line-height"]= "15px",
		    headerLinksLarge["padding-top"]="12px",
		    headerLinksLarge["padding-right"]= "18px",
		    headerLinksLarge["padding-bottom"]= "13px",
		    headerLinksLarge["padding-left"]= "18px"
    	};
    	return headerLinksLarge;
    	
    },

    headerLinkPropsM_S:function(size){    	
    	var headerLinksSmall={},
    		property = brand.props;
		if (size == "sm"||size == "xs") {   
		    headerLinksSmall["font-size"]= "16px",
		    headerLinksSmall["line-height"]= "22px",
		    headerLinksSmall["padding-top"]="12px",
		    headerLinksSmall["padding-right"]= "16px",
		    headerLinksSmall["padding-bottom"]= "12px",
		    headerLinksSmall["padding-left"]= "16px"			       
    	};
    	return headerLinksSmall;    	
    },

    L2SectionAnchors:function(size){    
        var L2LinksProps={},
            property = brand.props;
        L2LinksProps= {   
            "font-size": "14px",
            "line-height": "18px",
            "padding-top":"20px",
            "padding-right": "24px",
            "padding-bottom": "22px",
            "padding-left": "24px", 
            "cursor": "pointer", 
            "color": property.$L2text_color                
        };
        if (size == "sm"||size == "xs") {   
            L2LinksProps["font-size"]= "16px",
            L2LinksProps["line-height"]= "20px",
            L2LinksProps["padding-top"]="11px",
            L2LinksProps["padding-right"]= "28px",
            L2LinksProps["padding-bottom"]= "13px",
            L2LinksProps["padding-left"]= "15px"
        };
        return L2LinksProps;        
    },

    L3_Section_Anchor_PropertiesXL_L:function(size){    
        var L3LinksProps={},
            property = brand.props;        
        if (size == "lg"||size == "md") {   
            L3LinksProps["font-size"]= "14px",
            L3LinksProps["line-height"]= "20px",
            L3LinksProps["padding-top"]="21px",
            L3LinksProps["padding-right"]= "24px",
            L3LinksProps["padding-bottom"]= "21px",
            L3LinksProps["padding-left"]= "24px",
            L3LinksProps["cursor"]= "pointer",
            L3LinksProps["color"]= "rgba(255, 255, 255, 1)",
            L3LinksProps["background-color"]= property.$L3bgColor
        };
        return L3LinksProps;        
    },

    L4_Section_Anchor_PropertiesXL_L:function(size){    
        var L4LinksProps={},
            property = brand.props;        
        if (size == "lg"||size == "md") {   
            L4LinksProps["font-size"]= "20px",
            L4LinksProps["line-height"]= "24px",
            L4LinksProps["padding-top"]="0px",
            L4LinksProps["padding-right"]= "16px",
            L4LinksProps["padding-bottom"]= "0px",
            L4LinksProps["padding-left"]= "0px",            
            L4LinksProps["color"]= property.$L2text_color,
            L4LinksProps["background-color"]= "rgba(245, 245, 245, 1)"
        };
        return L4LinksProps;        
    },
    L5_Section_Anchor_PropertiesXL_L:function(size){    
        var L5LinksProps={},
            property = brand.props;        
        if (size == "lg"||size == "md") {   
            L5LinksProps["font-size"]= "14px",
            L5LinksProps["line-height"]= "20px",
            L5LinksProps["padding-top"]="0px",
            L5LinksProps["padding-right"]= "12px",
            L5LinksProps["padding-bottom"]= "0px",
            L5LinksProps["padding-left"]= "0px",            
            L5LinksProps["color"]= property.$L2text_color,
            L5LinksProps["background-color"]= "rgba(245, 245, 245, 1)"
        };
        return L5LinksProps;        
    },
    L3_L4_L5_Section_Anchor_PropertiesS_and_M:function(size){    
        var L3LaterLinksProps={},
            property = brand.props;        
        if (size == "sm"||size == "xs") {   
            L3LaterLinksProps["font-size"]= "16px",
            L3LaterLinksProps["line-height"]= "20px",
            L3LaterLinksProps["padding-top"]="11px",
            L3LaterLinksProps["padding-bottom"]= "13px",
            L3LaterLinksProps["padding-left"]= "15px",            
            L3LaterLinksProps["color"]= property.$L2text_color,
            L3LaterLinksProps["background-color"]= "rgba(245, 245, 245, 1)"
        };
        return L3LaterLinksProps;        
    },


}

module.exports = {
    headerProps: cssProps
}