var brand = require('../../branding/natwest_personal.js'),
    rbs = require('../../branding/rbs_personal.js');
var dlProps={
     dlinksComps:function(size){
         var dlinksProp = {}, property=brand.props,
             dlinksProp={
                'font-family':property.$font_family_regular,
                'color':property.$primary_4,              
                'font-size':"18px",
                'line-height':"26px",
                'margin-bottom':property.$dlinks_mar_bot_l,
                'letter-spacing':"0.1px"
            };
            if(size=="lg"){
                dlinksProp['margin-bottom'] = property.$dlinks_mar_bot_xl;
            }          
        return dlinksProp;
    }
      
};
module.exports = {
    dowloadlinks: dlProps
};