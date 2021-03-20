var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
	    
   singleImgwidthProps: function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'width': '443px',
            'height': '251px'
            };

            if(size=="md"){
                textProp['width'] ='360px',
                textProp['height'] ='203px'
            }
            else if(size=="sm"){
                textProp['width'] = "260px",
                textProp['height'] = property.$productImg_m
            }
            else if(size=="xs"){
                textProp['width'] = "305px",
                textProp['height'] = property.$productImg_s
            }
       return textProp;    
   },
    multiImgwidthProps: function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'width': '300px',
            'height': '179px'
            };

            if(size=="md"){
                textProp['width'] ='281px'
            }
            else if(size=="sm"){
                textProp['width'] = "281px"
            }
            else if(size=="xs"){
                textProp['width'] = "305px",
                textProp['height'] = property.$productMultiImg_s
            }
       return textProp;    
   },
   singleTitleH4Props :function(size) {  
        var textProp = {}, property = brand.props;
          var textProp={
              'color': property.$primary,
              'font-family': property.$font_family_singleTitleH4
              };
            return textProp;    
   },
   singleContentTextProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'color': property.$productIncomeClr,
            'font-family': property.$font_family_singleTitleContent
            };
                        
       return textProp;    
   },
   singleContentProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'margin': '0px 0px 10px'
            };
       return textProp;    
   },
   singleContentH3Props :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'color': property.$productH3Color,
            'font-family': property.$font_family_bold,
            'margin-bottom': '20px'
            };
       return textProp;    
   },
   singleConRTAWraperProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={            
            'margin-top': '20px'
            };
       return textProp;    
   },    
   singleContentLiProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'color': property.$productSelfLiColor,
            'padding-left': property.$productSelfLiSquare
            };
       return textProp;    
   },
    complTextMLProps: function(size) {
        var textProp = {},
            property = brand.props;
        textProp = {
            "padding-left": "39px" 
        };

        return textProp;
    },
    complPaddingProps: function(size) {
        var textProp = {},
            property = brand.props;
        textProp = {
            "padding-top": property.$area_padding_top,
            "padding-bottom": property.$area_padding_bottom
        };

        return textProp;
    },
     complImageProps: function(size) {
        var textProp = {},
          property = brand.props;
        textProp = {
            "background-size": property.$text_background_size
        };

        return textProp;
    },

   singleContentCTAProps:function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={ 
            'padding': '6px 0px',           
            'margin-top': property.$productSelfCtaTop_xl
            };
            if(size=="sm"){
                textProp['margin-top'] = property.$productSelfCtaTop_m
            }
            else if(size=="xs"){
                textProp['margin-top'] = property.$productSelfCtaTop_m
            }
       return textProp;    
   },

    singleContentCTAbProps:function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={ 
            'margin-bottom': "50px",
          };            
  
            
       return textProp;    
   },
    buttonTextProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
              'background-color': property.$productButton,           
              'font-size': '18px',
              'line-height': '30px',
              'font-family': property.$buttonTextFontFam
            };
       return textProp;    
   },

   productTitleH2Props :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding-bottom': '20px',
            'font-family': property.$font_family_bold,
            'color' : property.$font_color_regular
            };

       return textProp;    
   },
   productShelfTextProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding-bottom': '20px',
            'font-size': '18px',
            'line-height': '26px',
            'font-family': property.$font_family_text
            };
       return textProp;    
   },
   productShelfImgProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'width': property.$productShelfImgPropsWidth,
            'height': property.$productShelfImgPropsHeight
            };
       return textProp;    
   },
   productSingleShelfProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding-top': '35px',
            'margin-bottom' : '20px'
          };
            if(size=="sm"){
                textProp['padding-top'] = '30px'
            }
            else if(size=="xs"){
                textProp['padding-top'] = "30px"
            }
            
       return textProp;    
   },
   productMultipleShelfProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding-top': '35px',
            //'margin-bottom' : property.$productMultipleShelfProps
          };
            if(size=="sm"){
                textProp['padding-top'] = '30px'
            }
            else if(size=="xs"){
                textProp['padding-top'] = "30px"
            }
            
       return textProp;    
   },
   multiproductcompSelProps:function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding-top': '50px',
            
          };
       return textProp;    
   },
   proSingleShelfProCompProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding-top': '35px'
            };
            if(size=="sm"){
                textProp['padding-top'] = '30px'
            }
            else if(size=="xs"){
                textProp['padding-top'] = '30px'
            }
       return textProp;    
   },
   proMultiShelfProCompProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding-top': '0px'
            };
            if(size=="sm"){
                textProp['padding-top'] = '0px'
            }
            else if(size=="xs"){
                textProp['padding-top'] = '0px'
            }
       return textProp;    
   },
   imageBg1Props :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
          'background-color' : property.$background_1
          /*To check gradient for natwest business*/
          //'background-image' : property.$background_1
        };
        return textProp; 
    },
   imageBg2Props :function(size) {  
    var textProp = {}, property = brand.props;
    var textProp={
      'background-color' : property.$background_2
      /*To check gradient for natwest business*/
      //'background-image' : property.$background_2
    };
    return textProp; 
  },
   imageBg3Props :function(size) {  
    var textProp = {}, property = brand.props;
    var textProp={
      'background-color' : property.$background_3
      /*To check gradient for natwest business*/
      //'background-image' : property.$background_3
    };
    return textProp; 
  },
   imageBg4Props :function(size) {  
    var textProp = {}, property = brand.props;
    var textProp={
      'background-color' : property.$background_4
      /*To check gradient for natwest business*/
      //'background-image' : property.$background_4
    };
    return textProp; 
  },
  imageBgSingleSelProps :function(size) {  
    var textProp = {}, property = brand.props;
    var textProp={
      'background-color' : property.$background_single
      /*To check gradient for natwest business*/
      //'background-image' : property.$background_4
    };
    return textProp; 
  }


}
module.exports = {
    productlistingProps: cssProps
}