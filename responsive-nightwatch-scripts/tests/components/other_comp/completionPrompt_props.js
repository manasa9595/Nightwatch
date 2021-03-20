var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
		cPromptBgcolor : function(){ 
			var property = brand.props;
			var cPromptProp = {},	 	
			cPromptProp = {
		 		"background-color" : property.$color_whitesmoke
		 	};
		 	return cPromptProp;
		 },
		 completionPromptImage : function(size){
		 	var property = brand.props;
		 	var cPromptImage = {};
		 	cPromptImage = {
		 		 "margin-right": "0px",
				 "position" :    "absolute",
				 "top" :         property.$completionprompt_topL,
				 "width" :        property.$completionprompt_image_size,
				 "height" :       property.$completionprompt_image_size
		 	};
		 	if(size=="md"){
	            cPromptImage ['width'] = property.$completionprompt_image_size_l,
	            cPromptImage ['height'] = property.$completionprompt_image_size_l,
	            cPromptImage ['top'] = property.$completionprompt_topM

	        }
	        else if(size=="sm" || size=="xs"){
	        	cPromptImage ['width'] = "auto"
	        	cPromptImage ['height'] = "auto"
	        	cPromptImage ['top'] = "50%"

	        }
	        
		 	return cPromptImage;
		 },
		 completionPromptContentwrap : function(size){
		 	var property = brand.props;
		 	var cPromptContent = {};
		 	cPromptContent = {
		 		"padding-left" : property.$completionprompt_content_pl,
				"padding-top" : "50px",
				"padding-bottom" : "15px",
				"position": "relative"
		 		
		 	};
		 	if(size=="md"){
	            cPromptContent['padding-left']= property.$completionprompt_content_pl_l,
				cPromptContent['padding-bottom'] = "20px"
	        }
	        if(size=="sm"){
	            cPromptContent['padding-top'] = "40px",
	            cPromptContent['padding-bottom'] = "10px",
	            cPromptContent['padding-left'] = "0px"
	        }
	        if(size=="xs"){
	            cPromptContent['padding-top'] = "30px",
	            cPromptContent['padding-bottom'] = "0px",
	            cPromptContent['padding-left'] = "0px"
	        }
		 	return cPromptContent;
		 },
		 
		 completionPromptTitlewrap : function(size){
		 	var property = brand.props;
		 	var cPromptTitle = {};
		 	cPromptTitle = {
		 		"margin-bottom": "20px"
		 	};
		 	
	        if(size=="xs"){
	            cPromptTitle['margin-bottom'] = "10px"
	        }
	       
		 	return cPromptTitle;
		 },
		 completionPromptTitleProps : function(size){
		 	var property = brand.props;
		 	var cPromptTitle = {};
		 	cPromptTitle = {
		 		"color": property.$primary_1,
		 		"font-family" : property.$completionprompt_FontFamily
		 	};
		 	
	        if(size=="xs"){
	            cPromptTitle['margin-bottom'] = "0px"
	        }
	       
		 	return cPromptTitle;
		 },
		 completionPromptRtewrap : function(size){
		 	var property = brand.props;
		 	var cPromptRte = {};
		 	cPromptRte = {
		 		"margin-bottom": "35px"
		 	};
		 	if(size=="md"){
				cPromptRte['margin-bottom'] = "30px"
	        }
	        if(size=="sm"){
	            cPromptRte['margin-bottom'] = "30px"
	        }
	        if(size=="xs"){
	            cPromptRte['margin-bottom'] = "30px"
	        }
	       
		 	return cPromptRte;
		 },
		 completionPromptRteProps : function(size){
		 	var property = brand.props;
		 	var cPromptRte = {};
		 	cPromptRte = {
		 		"color": property.$completionprompt_rte_color,
		 		"font-family": property.$completionprompt_rteFontFamily
		 	};
	       
		 	return cPromptRte;
		 },
		 completionPromptCtawrap : function(size){
		 	var property = brand.props;
		 	var cPromptCta = {};
		 	cPromptCta = {
		 		"margin-bottom": "35px"
		 	};
		 	if(size=="md"){
				cPromptCta['margin-bottom'] = "30px"
	        }
	        if(size=="sm"){
	            cPromptCta['margin-bottom'] = "30px"
	        }
	        if(size=="xs"){
	            cPromptCta['margin-bottom'] = "30px"
	        }
	       
		 	return cPromptCta;
		 },
		 completionPromptprimCTAProps : function(size){
		 	var property = brand.props;
		 	var cPromptCta = {};
		 	cPromptCta = {
		 		"background-color": property.$primCta_background,
		 		"color": property.$primary_2,
		 		"min-width": "240px",
		 		"padding-bottom": property.$completion_primCTA_pb,
		 		"padding-top": property.$completion_primCTA_pt,
		 		"padding-left": "20px",
		 		"padding-right": "20px",
		 		"text-align": "center",
		 		"font-size": "18px",
		 		"line-height": "30px"
		 	};
	       
		 	return cPromptCta;
		 },
		  completionPromptClose : function(size){
		 	var property = brand.props;
		 	var cPromptClose = {};
		 	cPromptClose = {
		 		"padding-top": "44px",
		 		"text-align" : "right"
		 	};
	        if(size=="sm"){
	            cPromptClose['padding-top'] = "33px"
	        }
	        if(size=="xs"){
	            cPromptClose['padding-top'] = "23px"
	        }
	       
		 	return cPromptClose;
		 },
		 completionPromptCloseIcon : function(size){
		 	var property = brand.props;
		 	var cPromptCloseIcon = {};
		 	cPromptCloseIcon = {
		 		"display": "inline-block",
		 		"height": "20px",
				"width" : "20px",
				"background-size": "20px"
		 	}
		 	
	        if(size=="sm"){
	            cPromptCloseIcon['height'] = "16px",
	            cPromptCloseIcon['background-size'] = "16px",
	            cPromptCloseIcon['width'] = "16px"
	        }
	        if(size=="xs"){
	           cPromptCloseIcon['height'] = "18px",
	            cPromptCloseIcon['background-size'] = "18px",
	            cPromptCloseIcon['width'] = "18px"
	        }
		 	return cPromptCloseIcon;
		 },
		 
		 completionPromptsecCTASProps : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"margin-top" : property.$completion_secCTA_margin,
		 		"margin-left" : "35px",
		 		"float" : "left"
		 	}
		 	
	        if(size=="xs"){
	           props['margin-left'] = "0px";
	           props['margin-top'] = "0px";
	           props['float'] = "none";
	        }
		 	return props;
		 },
		 completionPromptsecCTAtextProps: function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"font-size" : "18px",
		 		"line-height": "30px",
		 		"background-image": property.$background_completionPrompt,
		 		"padding-bottom": "3px",
		 		"background-size": "100% 100%",
		 		"color": property.$completion_secCTA_color
		 	}
		 	
		 	return props;
		 },
		 completionPromptverticleLineProps : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"display" : "block",
		 		"width" : "2px",
		 		"background-color": property.$verticalLine_background,
		 		"margin-right": "37px",
		 		"margin-top": "30px",
		 		"margin-bottom": "30px",
		 		"right": "0px"
		 	}
		 	
		 	if(size =="md"){
	           props['margin-right'] = "20px"
	           
	        }
		 	return props;
		 }
		 
	}

module.exports = {
    cpromptProps: cssProps
}