var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={ 
    ShelfTopBottomPaddingSel : function(size) { 
       var textProp={          
              "padding-top": "35px",
              "padding-bottom": "15px",
              "margin-bottom":"20px"
            };
        if(size=="xs"||size=="sm"){
            textProp["padding-top"] = "30px";
            textProp["padding-bottom"] = "10px";    
        }                    
       return textProp;
    },
    TitleBottomPadding : function(size) {
        var textProp={          
              "padding-bottom": "35px"
            };
        if(size=="xs"||size=="sm"){
            textProp["padding-bottom"] = "30px";   
        }         
       return textProp;
    },
    TitlePropertySel : function(size) { 
    var textProp = {}, property = brand.props;
        var textProp={       
            "color" : property.$primary_1,  
            "font-family" : property.$font_family_title
          };
       return textProp;
    },
    AccordionPropSel : function(size,iebrowserval) {
        var textProp = {}, property = brand.props;
        var textProp={
          "color": property.$linkcolor,
          "font-family":"RNHouseSansRegular, sans-serif",
          "font-size":"18px",
          "font-weight":"400",
          "line-height":"26px"
        };                
       return textProp;
    },
    CloseiconbesideAccordion : function(size) {
        var textProp={}, property = brand.props;
        var textProp={
          "width": "14px",
          "height": "14px",
          "margin-right": "25px",
          "margin-top": property.$marginTopAcc
        };         
       return textProp;
    },
    AccordionToRTEPadding : function(size) {
        var textProp = {}, property = brand.props;
        var textProp={
          "padding-bottom": "20px"
        };
       return textProp;
    },
    RTEPanelInnerPaddings : function(size) {
        var textProp = {}, property = brand.props;
        var textProp={
            "padding-bottom": "20px",
            "padding-left": "39px"
        };
       return textProp;
    },
    RTENormaltextProps : function(size,iebrowserval) {
        var textProp = {}, property = brand.props;
        var textProp={
          "font-size":"18px",
          "font-weight":"400",
          "line-height":"26px",
          "color":"rgba(51, 51, 51, 1)",
          "font-family": property.$font_family_text        
        }
       return textProp;
    },
    TextanimationProps: function(size) {
     var shelfProps = {}, property = brand.props;
        var shelfProps={
            'background-size' : '100% 100%'
            };
       return shelfProps; 
  },

  crossProps : function(size) {
     var shelfProps = {}, property = brand.props;
        var shelfProps={
            'animation-duration' : '0.3s',
            'animation-timing-function' : 'ease-in-out',
            'animation-name' : 'spin'

            };
       return shelfProps; 
  },
  cross1Props : function(size) {
     var shelfProps = {}, property = brand.props;
        var shelfProps={
            'animation-duration' : '0.3s',
            'animation-timing-function' : 'ease-in-out',
            'animation-name' : 'spinrev'

            };
       return shelfProps; 
  }
}
module.exports = {
    contextualHelpProps: cssProps
}