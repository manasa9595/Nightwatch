var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps = {
    marProps: function(size) {
        var shelfProps = {}, 
         property = brand.props;
            shelfProps = {
               "border-top" : "1px solid rgb(216, 216, 216)",
               "background-color" : property.$primary_2,
               "box-shadow" :"rgba(0, 0, 0, 0.11) 0px 2px 3px 0px",
               "padding" : "10px 0px 30px",
               "margin-bottom" : "3px",
            }
            if(size=="sm" || size=="xs"){
            shelfProps['padding'] = '0px';
        }
        return shelfProps;
    },

     links: function(size) {
        var shelfProps = {}, 
         property = brand.props;
            shelfProps = {
               "color" : property.$linkcolor,
               "display" : "block",
               "float" :"left",
               "border-bottom" : property.$linkborderbottom,
               "line-height": "16px",
               "font-size": "16px",
            }
            if(size=="sm" || size=="xs"){
            shelfProps['font-size'] = '14px';
            shelfProps['line-height'] = '14px';
        }
        return shelfProps;
    },

     currentLink: function(size) {
        var shelfProps = {}, 
         property = brand.props;
            shelfProps = {
               "color" : property.$currentlink,
               "border-bottom" : "1px solid rgba(0, 0, 0, 0)",
            }
        return shelfProps;
    },

    lispan: function(size) {
        var shelfProps = {}, 
         property = brand.props;
            shelfProps = {
               "display" : "block",
               "float" :"left",
            }
        return shelfProps;
    },


}

module.exports = {
    breadcrumbprops: cssProps
}