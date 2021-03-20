var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
	
    btnloginActiveProps: function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'width': property.$btnLogin_w
            };

            if(size=="sm"){
                textProp['width'] = "auto"
            }
            else if(size=="xs"){
                textProp['width'] = "auto"
            }
       return textProp;    
   },
    btnloginTopProps: function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'padding-top': '20px',
            'padding-bottom': '20px',
            'background-color': 'rgba(245, 245, 245, 1)'
            };

            if(size=="md"){
                textProp['padding-left'] ='20px',
                textProp['padding-right'] ='20px'
                
            }else if(size=="sm"){
                 textProp['padding-left'] ='0px',
                textProp['padding-right'] ='0px',
                 textProp['padding-top'] ='20px',
                textProp['padding-bottom'] ='20px',
                textProp['background-color'] = 'rgba(0, 0, 0, 0)'
            }
            else if(size=="xs"){
                 textProp['padding-left'] ='0px',
                textProp['padding-right'] ='0px',
                textProp['padding-top'] ='20px',
                textProp['padding-bottom'] ='20px',
                textProp['background-color'] = 'rgba(0, 0, 0, 0)'
            }
            
       return textProp;    
   },
    btnloginAProps: function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            //'margin-bottom': '19px',
            //'padding': '0px',
            'font-size':'18px',
            'line-height':'26px',
            'color' : 'rgba(29, 123, 138, 1)'
            };
           
       return textProp;    
   },
    btnloginBottomProps: function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={

            //'background': property.$btnBottomBgn_w
            'font-size':'18px'
            };

            /*if(size=="sm"){
                textProp['padding-left'] ='0px'
            }else if(size=="xs"){
                textProp['padding-left'] ='0px'
            }*/
   },
    
     btnloginTextProps: function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'font-size':'18px',
            'line-height':'26px',
            'color':'rgba(255, 255, 255, 1)'
            };

            
       return textProp;    
   },
    btnloginbottomProps: function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'font-size':'18px',
            'background': property.$btnBottomBgn_w
            };

            
       return textProp;    
   }
}
module.exports = {
    businessLoginProps: cssProps
}