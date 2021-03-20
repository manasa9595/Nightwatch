var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
var cssProps={
     mainTitleM:function(size){
        var mtitleProp = {},property=brand.props;
          mtitleProp = {
                'padding-top':"30px"
            };      
            if(size=="sm"){
                mtitleProp['padding-top'] = "20px";
            }
         return mtitleProp;
    },
    tabA:function(size){
        var tabProp = {},property=brand.props;
          tabProp = {
                'color':"rgba(255, 255, 255, 1)",
                'line-height':"20px",
                'font-size':property.$product_tab_fs,
                'width':property.$product_tab_width,
            };      
            if(size=="md"){
                tabProp['font-size'] = property.$product_tab_fs_l;
                tabProp['width'] = property.$product_tab_width_l;
            }
            else if(size=="sm"){
                tabProp['font-size'] = property.$product_tab_fs_m;
                tabProp['width'] = property.$product_tab_width_m;
            }
         return tabProp;
    }
}

module.exports = {
    text: cssProps
}