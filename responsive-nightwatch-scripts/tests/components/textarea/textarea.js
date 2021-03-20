var brand = require('../../branding/natwest_personal.js'),
    rbs = require('../../branding/rbs_personal.js');
var textareaProps={
     textareaComps:function(size){
         var textareaProp = {}, property=brand.props,
             textareaProp={
                'color':property.$text_comp_color,
                'font-size':"18px",
                'line-height':"26px",
                'font-family':property.$font_family_regular,
                'margin-top':"20px",
                'letter-spacing':"0.2px"
            };
                      
        return textareaProp;
    }
      
};
module.exports = {
    text: textareaProps
};