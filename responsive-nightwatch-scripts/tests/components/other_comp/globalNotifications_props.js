var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
		notification : function(){
			var property = brand.props;
			var notificationProp = {},	 	
			notificationProp = {
		 		"background-color" : property.$notificationBg
		 	};
		 	return notificationProp;
		 },
		 notificationImageWrap : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"position" : "absolute",
		 		"margin-right" : property.$notiImageXLMargin,
		 		"transform" : property.$notiTransform
		 	};
		 	if(size=="md"){
	            props['position'] = "absolute";
	            props['margin-right'] = property.$notiImageXLMargin;
	            props['transform'] = property.$notiMDTransform;
	        }
	        if(size=="sm"){
	        	props = {};
	            props['transform'] = "none";
	        }
	        if(size=="xs"){
	        	props = {};
	            props['transform'] = "none";
	        }
		 	return props;
		 },
		 notificationImage : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"display" : "table-cell",
		 		"vertical-align": "middle",
			    "width": property.$notiImageSize,
			    "position": "relative"
		 	}
		 	if(size=="md"){
	            props['display'] = "table-cell";
	            props['vertical-align'] = "middle";
	            props['width'] = property.$notiImageMDSize;
	            props['position'] = 'relative';
	        }
		 	return props;
		 },
		 /*imageWrap : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
			    "width": property.$notiImageSize,
			    "height": property.$notiImageSize
		 	}
		 	if(size=="md"){
	            props['width'] = property.$notiImageSize;
	            props['height'] = property.$notiImageSize;
	        }
		 	return props;
		 }*/
		 notificationWrap : function(size, status){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"padding-left" : property.$notiPaddingLeft,
		 		"padding-top" : "50px",
		 		"padding-bottom" : "50px"
		 	}
		 	if(size=="md"){
	            props['padding-left'] = property.$notiLPaddingLeft;
	            props['padding-top'] = property.$notiMDPadding;
	            props['padding-bottom'] = property.$notiMDPaddingBtm;
	        }
	        if(size=="sm" && status==true){
	            props['padding-left'] = property.$notiMDPaddingLeft;
	            props['padding-top'] = "40px";
	            props['padding-bottom'] = "50px";
	        }
	        if(size=="sm" && status==false){
	            props['padding-left'] = property.$notiMDPaddingLeft;
	            props['padding-top'] = "40px";
	            props['padding-bottom'] = "40px";
	        }
	        if(size=="xs" && status==true){
	            props['padding-left'] = property.$notiMDPaddingLeft;
	            props['padding-top'] = "30px";
	            props['padding-bottom'] = "50px";
	        }
	        if(size=="xs" && status==false){
	            props['padding-left'] = property.$notiMDPaddingLeft;
	            props['padding-top'] = "30px";
	            props['padding-bottom'] = "30px";
	        }
		 	return props;
		 },
		 titleWrap : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"width" : property.$notiTitleWidth,
		 		"margin-bottom" : "20px",
		 		"max-height" : "40px",
		 		"overflow-x" : "hidden",
		 		"overflow-y" : "hidden"
		 	}
		 	if(size=="md"){
	            props['width'] = property.$notiTitleMDWidth;
	            props['margin-bottom'] = "20px";
	            props['max-height'] = "36px";
	            props['overflow-x'] = "hidden";
	            props['overflow-y'] = "hidden";
	        }
	        if(size=="sm"){
	            props['width'] = property.$notiTitleSMWidth;
	            props['margin-bottom'] = "20px";
	            props['max-height'] = "32px";
	        }
	        if(size=="xs"){
	        	 props = {};
	            props['margin-bottom'] = "10px";
	            props['max-height'] = "32px";
	        }
		 	return props;
		 },
		 textWrap : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"width" : property.$notiTextWidth,
		 		"max-height": "52px",
		 		"overflow-y" : "hidden",
		 		"overflow-x" : "hidden"
		 	}
		 	if(size=="md"){
	            props['width'] = property.$notiTextMDWidth;
	            props['max-height'] = "52px";
	        }
	        if(size=="sm"){
	            props['width'] = property.$notiTextSMWidth;
	            props['max-height'] = "104px";
	        }
	        if(size=="xs"){
	            props  = {};
	            props['max-height'] = "104px";
	        }
		 	return props;
		 },
		 slickArrow : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"display" : "block",
		 		"height" : "40px",
		 		"width": "40px",  
		 	}
		 	if(size=="md"){
	            props['display'] = "block";
	            props['height'] = "40px";
	            props['width'] = "40px";
	        }
	        if(size=="sm"){
	           props['display'] = "block";
	            props['height'] = "40px";
	            props['width'] = "40px";
	        }
	        if(size=="xs"){
	           props['display'] = "block";
	            props['height'] = "30px";
	            props['width'] = "30px";
	        }
		 	return props;
		 },
		 secCTASProps : function(size){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"margin-top" : "20px",
		 		"margin-bottom" : "0px"
		 	}
		 	if(size=="md"){
	            props['margin-top'] = "20px";
	            props['margin-bottom'] = property.$CTAMarginBtm;
	        }
	        if(size=="sm"){
	           props['margin-top'] = "20px";
	        }
	        if(size=="xs"){
	           props['margin-top'] = "20px";
	        }
		 	return props;
		 },
		 verticleLineProps : function(){
		 	var property = brand.props;
		 	var props = {};
		 	props = {
		 		"display" : property.$verticalLineDisp,
		 		"width" : "2px",
		 		"height" : "152px",
		 		"background-color": "rgb(255, 255, 255)"
		 	}
		 	return props;
		 },
		 closeBtnWrapProps : function(size){
		 	var props = {};
		 	props = {
		 		"padding-top" : "45px",
		 		"text-align" : "right"
		 	};
		 	if(size=="md"){
	            props['padding-top'] = "45px";
	        }
	        if(size=="sm"){
	            props['padding-top'] = "34px";
	        }
	        if(size=="xs"){
	            props['padding-top'] = "19px";
	        }
		 	return props;
		 },
		 closeBtnProps : function(size){
		 	var props = {};
		 	props = {
		 		"display" : "inline-block",
		 		"height" : "19px",
		 		"width" : "19px",
		 		"background-size" : "19px",
		 	};
		 	if(size=="md"){
	            props['display'] = "inline-block";
	            props['height'] = "19px";
	            props['width'] = "19px";
	            props['background-size'] = "19px";
	        }
	        if(size=="sm"){
	            props['display'] = "inline-block";
	            props['height'] = "14px";
	            props['width'] = "14px";
	            props['background-size'] = "14px";
	        }
	        if(size=="xs"){
	        	props['position'] = "absolute";
	            props['display'] = "block";
	            props['height'] = "13px";
	            props['width'] = "13px";
	            props['background-size'] = "13px";
	        }
		 	return props;
		 },
		 globalNotiProps : function(){
		 	var props = {};
		 	props = {
		 		"display" : "none",
		 	};
		 	return props;
		 },
	}


module.exports = {
    notificationProps: cssProps
}