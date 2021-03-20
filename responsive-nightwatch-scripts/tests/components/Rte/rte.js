var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var rteProps={
  rtePropsCheck : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            "font-size": "18px",
            "font-family": property.$font_family_regular,
            "line-height": "24px",
            "color":"$primary-1"
          };           
    return cssProps;
    },
    rteBodyCust : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            "font-size" : "18px",
            "line-height" : "26px"
          };           
    return cssProps;
    }

}
module.exports = {
    rte: rteProps
}
