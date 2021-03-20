var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var sliderProps={
	ccsliderProps : function(size){
         var cssProps = {}, property = brand.props,
            cssProps={ 
    
                "border":"0px none rgb(69, 69, 69)",                
                //"width":"570px",
                "height":property.$slider_handle_height_xl
                
              }; 
        if(size=="md"){
            cssProps['height'] = property.$slider_handle_height_l 
            //cssProps['width'] = "450px";   
                   
        }
        else if(size=="sm"){
            cssProps['height'] = property.$slider_handle_height_sm
           // cssProps['width'] = "464px";
          
        }
        else if(size=="xs"){
             cssProps['height'] = property.$slider_handle_height_xs  
             //cssProps['width'] = "335px";
            
        }          
        return cssProps;
    },
    ccimagewrapprops: function(size){
        var prop={},

        prop={
            'height' : '470px',
            'margin-top':'8px',
            'margin-bottom':'15px'
        };
         if(size=='md'){
            prop['height'] = '370px';
            prop['margin-top']='20px';
            prop['margin-bottom']='87px';
        }
        return prop;
    },
     
  };
module.exports = {
    sldr: sliderProps
}