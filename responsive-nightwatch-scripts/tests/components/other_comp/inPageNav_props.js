var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get());
//>----------inPage nav properties---------->
var cssProps = {
    wrapProps : function(size){
        var props = {}, property = brand.props,
        props = {
           "background-color" : property. $in_page_nav_bgColor,
           "display" :"table"
        };
        if(size=="xs"){
            props["display"] = "inline-block";
            props["padding-right"] = "0px";
            props["float"] = "none";
        }
        return props;
    },
    pageNavProps : function(size){
         var tabProps = {}, property = brand.props,
        tabProps = {
           "display" : "table-row"
        };
        if(size=="xs"){
            tabProps["display"] = "block";
           
        }
        return tabProps;
    },
    titlefontProps : function(){
           var titleProps = {}, property = brand.props,
           titleProps = {
            'color': 'rgba(66, 20, 95, 1)',
            'font-family': 'RNHouseSansBold, sans-serif'
           
          }
          return titleProps;
      },
    titRowProps : function(size){
        var props = {}, property = brand.props,
        props = {
           "margin-left" : "0px",
           "margin-right" : "0px"
        };
        if(size=="md"){
          props["margin-left"] = "-24px";
            props["margin-right"] = "-16px";
        }
        else if(size=="sm"){
          props["margin-left"] = "-24px";
           props["margin-right"] = "-15px";
        }
        else if(size=="xs"){
          props["margin-right"] = "0px";
          props["padding-right"] = "0px";
          props["margin-left"] = "0px";
        }
        return props;
    },
    vcenterProps : function(size){
        var props = {}, property = brand.props,
        props = {
           "vertical-align" : "middle",
           "display" :"table-cell",
           "float" : "none"
        };
        if(size=="xs"){
            props["display"] = "inline-block";
        }
        return props;
    },
    pageLinkProps : function(size){
        var prop = {}, property = brand.props,
        prop = {
           "margin-left" : "-24px",
           "margin-right" : "-18px"
        };
        if(size=="md"){
            prop["margin-right"] = "-16px";
        }
        else if(size=="sm") {
          prop["margin-right"] = "-14px";
        }
        else if(size=="xs"){
          prop["margin-right"] = "0px";
          prop["margin-left"] = "0px";
          prop["padding-right"] = "0px";
          prop["padding-left"] = "0px";
        }
        return prop;
    },
    LinksProps : function(size){
        var prop = {}, property = brand.props,
        prop = {
           "margin-bottom" : "8px",
           "font-family" : 'RNHouseSansRegular, sans-serif',
           "display" :"inline-block",
           "color" : "rgba(29, 123, 138, 1)",
           "text-decoration-line" : "none",
           "line-height" : "32px",
           "padding-left":  "0px"
        };
        if(size=="sm"){
            prop["margin-bottom"] = "4px";
        }
        return prop;
    },
    navCtaProps : function(size){
        var prop = {}, property = brand.props,
        prop = {
           "margin-left" : "-12px",
           "margin-right" : "2px"
        };
        if(size=="md"){
            prop["margin-left"] = "-24px";
            prop["margin-right"] = "-9px";
            prop["padding-left"] = "32px";
            prop["padding-right"] = "12px";
        }
        else if(size=="sm"){
            prop["margin-left"] = "-12px";
            prop["margin-right"] = "2px";
        }
        else if(size=="xs"){
            prop["margin-left"] = "0px";
            prop["margin-right"] = "0px";
        }
        return prop;
    },
    inPageNavfontProps : function(size){
    var tabProps = {},
        tabProps = {
           "font-size" : "18px",
           "line-height" : "32px"
        };
        return tabProps;
    },
    
    

}

module.exports = {
    navLinkProps: cssProps
}