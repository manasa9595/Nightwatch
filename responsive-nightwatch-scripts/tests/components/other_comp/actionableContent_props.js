var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={     
    titleTopPaddingSel : function(size) {
      var textProp={
          "padding-top":"35px"
      }; 
      if(size=="sm" || size=="xs"){
          textProp["padding-top"] = "30px";   
      } 
      return textProp;
    },  
    titlePropertySel : function(size) {
      var textProp={
          "color":brand.props.$act_cont_grey_color_on_Brand_bg,
          "font-family": brand.props.$light_font_family
      }; 
      return textProp;
    },
    titleBottomSpaceSel : function(size) {
      var textProp={
          "margin-top":"35px"
      }; 
      if(size=="sm" || size=="xs"){
          textProp["margin-top"] = "30px";   
      } 
      return textProp;
    },
    whiteGreyBar : function(size) {
      var textProp={
          "background-color":brand.props.$act_cont_grey_color_on_white_bg,
          "height": "8px",
          "margin-bottom": "35px"
      }; 
      if(size=="sm"){
          textProp["margin-bottom"] = "30px";   
      }
      if(size=="xs"){
          textProp["margin-bottom"] = "20px";  
          textProp["margin-right"] = "30px"; 
      }
      return textProp;
    },
    brandGreyBar : function(size) {
      var textProp={
          "background-color":brand.props.$act_cont_grey_color_on_Brand_bg,
          "height": "8px",
          "margin-bottom": "35px"
      }; 
      if(size=="sm"){
          textProp["margin-bottom"] = "30px";   
      }
      if(size=="xs"){
          textProp["margin-bottom"] = "20px"; 
      }
      return textProp;
    },
    imageLeftSpaceexceptonlyoneBG : function(size) {
      var textProp={
          "padding-left":"35px"
      }; 
      if(size=="sm"){
          textProp["padding-left"] = "25px";   
      }
      if(size=="xs"){
          textProp["padding-left"] = "0px";   
      }
      return textProp;
    }, 
    imageLeftSpaceForOnlyoneBG  : function(size) {
      var textProp={}; 
      if(size=="xs"){
          textProp["padding-left"] = "20px";
          textProp["padding-right"] = "30px"; 
      }
      return textProp;
    }, 
    imageDimensions : function(size) {
      var textProp={
          "height":"36px",
          "width":"36px"
      }; 
      return textProp;
    },
    imageDimensionsSVG : function(size) {
      var textProp={
          "height":"36px",
          "max-width":"36px"
      }; 
      return textProp;
    },
    imageColorBrandbgSVG : function(size) {
      var textProp={
          "fill":brand.props.$fill_color_on_brand_bg
      }; 
      return textProp;
    },
    imageColorWhiteBgSVG : function(size) {
      var textProp={
          "fill":brand.props.$fill_color_on_white_bg
      }; 
      return textProp;
    },
    contentSpacings : function(size) {
      var textProp={
        "padding-left": "106px",
        "padding-right": "35px",
        "padding-bottom": "29px"
      }; 
      if(size=="sm"){
          textProp["padding-left"] = "91px";
          textProp["padding-right"] = "30px";
          textProp["padding-bottom"] = "24px";
      }
      if(size=="xs"){
          textProp["padding-left"] = "66px";
          textProp["padding-bottom"] = "24px";
          textProp["padding-right"] = "30px";
      }
      return textProp;
    },
    contentSpacingsBrandBgWhole : function(size) {
      var textProp={
        "padding-left": "106px",
        "padding-right": "35px",
        "padding-bottom": "44px"
      }; 
      if(size=="sm"){
          textProp["padding-left"] = "91px";
          textProp["padding-right"] = "30px";
          textProp["padding-bottom"] = "24px";
      }
      if(size=="xs"){
          textProp["padding-left"] = "66px";
          textProp["padding-right"] = "30px";
          textProp["padding-bottom"] = "24px";
      }
      return textProp;
    },
    contentSpacingsonBrandBgonLeftOnly : function(size) {
      var textProp={
        "padding-left": "106px",
        "padding-right": "35px",
        "padding-bottom": "44px"
      }; 
      if(size=="sm"){
          textProp["padding-left"] = "91px";
          textProp["padding-right"] = "30px";
          textProp["padding-bottom"] = "24px";
      }
      if(size=="xs"){
          textProp["padding-left"] = "86px";
          textProp["padding-bottom"] = "24px";
          textProp["padding-right"] = "50px";
      }
      return textProp;
    },
    contentTitleSpacings : function(size) {
      var textProp={
          "padding-bottom": "20px"
      }; 
      return textProp;
    },
    whitebgContentTitleProps : function(size) {
      var textProp={
          "color": brand.props.$actContTitleColoronWhiteBg
      }; 
      return textProp;
    },
    brandBgContentTitleProps : function(size) {
      var textProp={
          "color":brand.props.$actContTitleColoronBrandBg
      }; 
      return textProp;
    },
    textPropsOnWhiteBg : function(size) {
      var textProp={
          "color": brand.props.$actContTextColoronWhiteBg,
          "font-family": brand.props.$light_font_family
      }; 
      return textProp;
    },
    textPropsOnBrandBg : function(size) {
      var textProp={
          "color":brand.props.$actContTitleColoronBrandBg,
          "font-family": brand.props.$light_font_family          
      }; 
      return textProp;
    },
    secCTATopSpacings : function(size) {
      var textProp={
          "margin-top":"14px"
      }; 
      return textProp;
    },
    primaryCTATopSpacings : function(size) {
      var textProp={
        "margin-top":"29px"
      }; 
      if(size=="sm" || size=="xs" ){
          textProp["margin-top"] = "24px";
      } 
      return textProp;
    },
    primaryCTAPropsonWhiteBg : function(size) {
      var textProp={
          "color":brand.props.$actContTitleColoronBrandBg,
          "background-color":brand.props.$actContCTAColor,
          "font-size": "18px",
          "line-height": "30px",
          "font-family": brand.props.$primaryCTAFontFamily
      }; 
      return textProp;
    },
    primaryCTAPropsonBrandBg : function(size) {
      var textProp={
          "color":brand.props.$actContTitleColoronBrandBg,
          "background-color":brand.props.$actContCTAColor,
          "font-size": "18px",
          "line-height": "30px",          
          "font-family": brand.props.$primaryCTAFontFamily
      }; 
      return textProp;
    },
    secCTAPropsonWhiteBg : function(size) {
      var textProp={
          "color":brand.props.$actContCTAColor,
          "font-size": "18px",
          "line-height": "30px",
          "font-family": brand.props.$regular_font_family
      }; 
      return textProp;
    },
    secCTAPropsonBrandBg : function(size) {
      var textProp={
          "color":brand.props.$actContTitleColoronBrandBg,
          "font-size": "18px",
          "line-height": "30px",
          "font-family": brand.props.$regular_font_family
      }; 
      return textProp;
    }
}
module.exports = {
    actionableContentProps: cssProps
}