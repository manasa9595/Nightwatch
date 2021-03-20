var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
  tabLayoutProps : function(size) {
    var property = brand.props;
        var shelfProps={
            'background-color':  property.$primary_1,
            'margin-top' : '80px'
            };
            if(size=="sm"){
              shelfProps['margin-top'] = "50px";
            }   
            if(size=="xs"){
              shelfProps['margin-top'] = "40px";
            }     
       return  shelfProps;
    },
    tabPositionProps : function(size) {
    var property = brand.props;
        var shelfProps={
            'position':  'relative',
            'background-color' : property.$productDetail_tabBgColor,
            'margin-top' : '-30px'
            };            
       return  shelfProps;
    },
	 tabProps : function(size) {
	 	var property = brand.props;
        var shelfProps={
            'height': '60px',
            'padding': '17px 0px',            
            'position' : 'relative',
            'margin-bottom' : '0px',
            'list-style-type' : 'none'            
        }; 
        if(branding.getBrand.get()=="rbs_premier.js"){
            shelfProps["padding"] = "19px 0px";
            if(size=="sm"){
              shelfProps["padding"] ="17px 0px";
            }             
        }           
       return  shelfProps;
    },
    tabBelowContentProps : function(size) {
        var property = brand.props;
        var shelfProps={
            'margin-top': '20px' 
            };
          if(size=="sm"){ 
            shelfProps["margin-top"] ="0px";
          }
          else if(size=="xs"){
            shelfProps["margin-top"] = "0px";
          }
       return  shelfProps;
    },
    tabActiveProps : function(size) {
        var textProp = {}, property = brand.props;
        var textProp={
           // 'font-family': 'RNHouseSansBold, sans-serif'
            };
          if(size=="lg"||size=="md"||size=="sm"){
            if(branding.getBrand.get()=="natwest_premier.js"||branding.getBrand.get()=="rbs_premier.js"){
              textProp["font-family"] = "RNHouseSansLight, sans-serif";                       
            }
          }
       return textProp;
    },
    tabPaddingProps : function(size) {
        var Prop = {}, property = brand.props;
        var Prop={
            'padding-right': '20px'

            };
       return Prop;
    },
    indicatorProps : function(size) {
        var Prop = {}, property = brand.props;
        var Prop={
            //'border-bottom': '6px solid rgb(206, 59, 87)',
            'position' : 'absolute',
            'bottom' : '10px'
            };
        if(branding.getBrand.get()=="rbs_premier.js"){
              // Prop["border-bottom"] = "6px solid rgb(255, 255, 255)";  
               Prop["bottom"] = "9px";                      
        }
        if(branding.getBrand.get()=="natwest_premier.js"){
              // Prop["border-bottom"] = "6px solid rgb(44, 6, 55)"; 
               Prop["bottom"] = "11px";                       
        }
       return Prop;
    },
   imgProps : function(size) {
        var property = brand.props;
        var shelfProps={                  
            'height' : '273px',
            'margin-top': '50px'
            };
            if(size=="lg"){
              shelfProps["width"] = "273px";
            }
            if(size=="md"){
              shelfProps["width"] = "213px";
              shelfProps["height"] = "213px";
            }
            else if(size=="sm"){
              shelfProps["width"] = "159px";
              shelfProps["height"] = "159px";
            }
            else if(size=="xs"){              
              shelfProps["height"] = "217px";
              shelfProps["text-align"] = "center";
              shelfProps["margin-top"] = "60px";
            }
       return shelfProps;
    },
    tabLayoutFont : function(size) {
        var textProp = {}, property = brand.props;
        var textProp={
            'font-family': 'RNHouseSansRegular, sans-serif'
            };
            if(branding.getBrand.get()=="rbs_premier.js"||branding.getBrand.get()=="rbs_premier.js"){
               textProp["font-family"] = "RNHouseSansLight, sans-serif";  
                                  
        }
       return textProp;
    },
    ACCtitleProps: function(size){
        var textProp = {}, property = brand.props;
        var textProp={};
            if(size=="lg"||size=="md"||size=="sm"){
              textProp["font-size"] = "18px";
              textProp["line-height"] = "26px";
            }
        return textProp;
    },
    productAccProps : function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'margin-left': "29px"
            };
       return textProp;    
   },
   standardImgProps: function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'height': '237px',
            "margin-top":"50px"
            };
            if(size=="lg"){
                textProp['width'] ='237px';
            }
            else if(size=="md"){
                textProp['width'] ='189px';
                textProp['height'] ='189px';
            }
            else if(size=="sm"){
                textProp['width'] = "135px";
                textProp['height'] = "135px";
                textProp['margin-top'] = "40px";
            }
            else if(size=="xs"){                
                textProp['height'] = "158px";
                textProp['margin-top'] = "35px";
            }
       return textProp;    
   },
   standardSpaceBotomProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'margin-bottom': '50px'
            };
            if(size=="sm"){
                textProp['margin-bottom'] = "35px"
            }
            else if(size=="xs"){
                textProp['margin-bottom'] = "35px"
            }            
            if(branding.getBrand.get()=="natwest_premier.js"||branding.getBrand.get()=="rbs_premier.js"){
              if(size=="sm"){
                textProp['margin-bottom'] = "0px" 
              }  
              else if(size=="xs") {
                textProp['margin-bottom'] = "40px"
              }              
            }
       return textProp;    
   },
   standardSpaceTopProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding-top': '35px',
            'font-family': 'RNHouseSansRegular, sans-serif'
            };
            if(size=="sm" || size=="xs"){
                textProp['padding-top'] = "20px"
            }
            if(branding.getBrand.get()=="rbs_premier.js"){
              textProp['font-family'] = "RNHouseSansLight, sans-serif";
              if(size=="lg"){
                textProp['padding-top'] = "40px"
              }  
              else if(size=="md"){
                textProp['padding-top'] = "35px" 
              }
              else if(size=="xs"||size=="sm") {
                textProp['padding-top'] = "20px"
              }              
            }
            else if(branding.getBrand.get()=="rbs_premier.js"){
              textProp['font-family'] = "RNHouseSansLight, sans-serif";
              if(size=="lg"){
                textProp['padding-top'] = "35px" 
              }
            }
          if(branding.getBrand.get()=="natwest_premier.js"){
              textProp['font-family'] = "RNHouseSansLight, sans-serif";
            }
            
       return textProp;    
   },
   standardH3MarginProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'margin-bottom': '20px'
            };
       return textProp;    
   },
   articleTextProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'margin-bottom': '20px'
            };
       return textProp;    
   },
   articleProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'margin-top': '50px'
            };
            if(size=="sm"){
                textProp['margin-top'] = "40px"
            }
            else if(size=="xs"){
                textProp['margin-top'] = "40px"
            }
       return textProp;    
   },
    standardAccTextProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'margin-left': '29px'
            };
       return textProp;    
   },
    
    standardAccImgProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'background-size': '16px',
            'background-repeat': 'no-repeat',
            'display': 'block',
            'background-position-y': '4px'
            };
       return textProp;    
   },
   standardAccContainerProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding': '60px 0 60px 60px',
            'background': property.$color_whitesmoke
            };
       return textProp;    
   },
   standardAccContainerH3Props :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'margin-bottom': '20px'
            };
       return textProp;    
   },
   standardAccContainerBodyProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'margin-bottom': '0 0 20px'
            };
       return textProp;    
   },
   standardAccFooterProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'background': 'rgba(29, 123, 138, 1)',
            'height':'40px'            
            };

            if(size=="xs"){
                textProp['height'] = "50px"
            }
       return textProp;    
   },
   TextanimationProps: function(size) {
     var shelfProps = {}, property = brand.props;
        var shelfProps={
            'background-size' : '0% 100%'
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
    productDetailProps: cssProps
}