var branding = require('../../branding/getBrand.js'), 
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
		incidentNotificationBgcolor : function(){
			var property = brand.props;
			var Props = {},	 	
			Props = {
		 		"background-color" : property.$incident_bg_color
		 	};
		 	return Props;
		 },
		 incidentNotificationImage : function(size){
		 	var property = brand.props;
		 	var Props = {};
		 	Props = {
		 		 
				 "max-width" :        property.$completionprompt_image_size,
				 "max-height" :       property.$completionprompt_image_size
		 	};
		 	if(size=="lg"){
	            Props ['max-width'] = property.$completionprompt_image_size,
	            Props ['max-height'] = property.$completionprompt_image_size
	        }
	        else if(size=="md"){
	            Props ['max-width'] = property.$completionprompt_image_size_l,
	            Props ['max-height'] = property.$completionprompt_image_size_l
	        }
	        
		 	return Props;
		 },
		 incidentNotificationContentwrap : function(size){
		 	var property = brand.props;
		 	var Props = {};
		 	Props = {
		 		"padding-left" : property.$completionprompt_content_pl,
				"padding-top" : "50px",
				"padding-bottom" : "30px",
				"position": "relative"
		 		
		 	};
		 	if(size=="lg"){
	            Props['padding-left']= property.$completionprompt_content_pl,
	            Props['padding-top'] = "50px",
				Props['padding-bottom'] ="30px"
	        }
		 	if(size=="md"){
	            Props['padding-left']= property.$completionprompt_content_pl_l,
	            Props['padding-top'] = property.$incident_ptop,
				Props['padding-bottom'] = property.$incident_pbottom
	        }
	        if(size=="sm"){
	            Props['padding-top'] = "40px",
	            Props['padding-bottom'] = "20px",
	            Props['padding-left'] = "0px"
	        }
	        if(size=="xs"){
	            Props['padding-top'] = "30px",
	            Props['padding-bottom'] = "10px",
	            Props['padding-left'] = "0px"
	        }
		 	return Props;
		 },
		 
		 incidentNotificationTitlewrap : function(size){
		 	var property = brand.props;
		 	var Props = {};
		 	Props = {
		 		"margin-bottom": "20px",
				"overflow" : "hidden",
				"max-height":"40px"
			
		 	};
		 	if(size=="lg"){
	            Props['max-height']= "40px",
	            Props['margin-bottom']= "20px",
	            Props['overflow']= "hidden"
			}
			if(size=="md"){
	            Props['max-height']= "36px"
			}
	        if(size=="sm"){
	            Props['max-height'] = "32px"
	           
	        }
		 	
	        if(size=="xs"){
	            Props['max-height'] = "32px",
	             Props['margin-bottom'] = "10px"
	        }
	       
		 	return Props;
		 },
		 incidentNotificationTitleprops : function(size){
		 	var property = brand.props;
		 	var Props = {};
		 	Props = {
		 		"color": property.$primary_2,
		 		"font-family": property.$incident_title_family
		 	};    
		 	return Props;
		 }, 
		 incidentNotificationRtewrap : function(size){
		 	var property = brand.props;
		 	var Props = {};
		 	Props = {
		 		"margin-bottom": "20px",
		 		"max-height":"52px"
		 	};
	        if(size=="sm" || size=="xs"){
	            Props['max-height'] = "104px"
	        }
		 	return Props;
		 },
		 
		  incidentNotificationClose : function(size){
		 	var property = brand.props;
		 	var Props = {};
		 	Props = {
		 		"padding-top": "45px",
		 		"text-align" : "right"
		 	};
	        if(size=="sm"){
	            Props['padding-top'] = "34px"
	        }
	        if(size=="xs"){
	            Props['padding-top'] = "23px"
	        }
	       
		 	return Props;
		 },
		 incidentNotificationCloseIcon : function(size){
		 	var property = brand.props;
		 	var Props = {};
		 	Props = {
		 		"display": "inline-block",
		 		"height": "19px",
				"width" : "19px",
				"background-size": "19px"
		 	}
		 	
	        if(size=="sm"){
	            Props['height'] = "14px",
	            Props['background-size'] = "14px",
	            Props['width'] = "14px"
	        }
	        if(size=="xs"){
	           Props['height'] = "18px",
	            Props['background-size'] = "18px",
	            Props['width'] = "18px"
	        }
		 	return Props;
		 },
		 
		 incidentNotificationsecCTASProps : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"margin-bottom": "20px"
		 	}
		 	return props;
		 },
		 incidentNotificationverticleLineProps : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"display" : "block",
		 		"width" : "2px",
		 		"background-color": property.$primary_white_smoke,
		 		"margin-right": "37px"
		 	}
		 	if(size=="md"){
				props['margin-right'] = "20px"
	        }
		 	return props;
		 }
		 
	}


module.exports = {
    incidentProps: cssProps
}