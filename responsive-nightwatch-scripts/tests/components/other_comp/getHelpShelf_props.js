var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
	 getHelpShelfProps : function(size) {
	 	var property = brand.props;
        var shelfProps={
            'background-color':property.$primary_2,	
            'padding-top': '35px',
            'padding-bottom': '50px',
            'margin-bottom' : '20px'
        }
         if(size=="sm"){
            shelfProps['padding-top'] =  '30px';
           shelfProps['padding-bottom'] = '50px';
            shelfProps['margin-bottom'] = '20px';
        }
        else if(size=="xs"){
            shelfProps['padding-top'] =  '30px';
            shelfProps['padding-bottom'] = '50px';
            shelfProps['margin-bottom'] = '20px';
        }
     return shelfProps;
    },
    getHelpTitleProps : function(size) {
        var titleProps={
            'margin-left': '99px',
            'padding-left': '12px',
            'padding-right': '12px'
        }
        if(size=="md"){
            titleProps['margin-left'] = "78.9844px";
            titleProps['padding-left'] = "12px";
            titleProps['padding-right'] = "12px";
        }
        else if(size=="sm"){
            titleProps['margin-left'] = "61px";
            titleProps['padding-left'] = "12px";
            titleProps['padding-right'] = "12px";
        }
        else if(size=="xs"){
            titleProps['margin-left'] = "0px";
            titleProps['padding-left'] = "10px";
            titleProps['padding-right'] = "10px";
        }
     return titleProps;
    },
    getHelpSearchProp : function(size) {
        var searchProps={
            'margin-left': '98.9844px'
        }
        if(size=="md"){
            searchProps['margin-left'] = "78.9844px";
        }
        else if(size=="sm"){
            searchProps['margin-left'] = "60.9844px";
        }
        else if(size=="xs"){
            searchProps['margin-left'] = "0px";
        }
     return searchProps;
    },
    getHelpSearchWrapProp : function(size) {
    	var property = brand.props;
        var props={
            'margin-top': '35px',
            'margin-bottom': '0px'
        }
        if(size=="sm" || size=="xs"){
            props['margin-top'] = '30px';
            props['margin-bottom'] = '0px';
        }
        
     return props;
    },
    containerSearchProps : function(){
        var property = brand.props;
        var props={
            'background-color': property.$primary_2,
            'border-top-color': property.$searchBorderColor,
            'border-right-color': property.$searchBorderColor,
            'border-bottom-color': property.$searchBorderBtmColor,
            'border-left-color': property.$searchBorderColor,
            'border-top-width': property.$searchBorderWidth,
            'border-right-width': property.$searchBorderWidth,
            'border-bottom-width': property.$searchBorderBtmWidth,
            'border-left-width': property.$searchBorderWidth,
            'border-top-style': property.$searchBorderStyle,
            'border-right-style': property.$searchBorderStyle,
            'border-bottom-style': property.$searchBorderBtmStyle,
            'border-left-style': property.$searchBorderStyle
        }
        return props;
    },
    getHelpSearchTextProp : function(size) {
        var property = brand.props;
        var props={
            'position': 'absolute',
            'right': property.$searchRight,
            'top': property.$searchTop,
            'height': '36px'
        }
        if(size=="md"){
            props['position'] = 'absolute';
            props['right'] = property.$searchRight;
            props['top'] = property.$searchTop;
            props['height'] = '36px';
        }
        else if(size=="sm"){
            props['position'] = 'absolute';
            props['right'] = property.$searchSMRight;
            props['top'] = property.$searchSMTop;
            props['height'] = '36px';
        }
        else if(size=="xs"){
            props['position'] = 'absolute';
            props['right'] = property.$searchRight;
            props['top'] = property.$searchTop;
            props['height'] = '36px';
        }
     return props;
    },
    getHelpSearchIconProp : function(size) {
        var property = brand.props;
        var props={
            'font-family': 'nw-icons',
            'font-size': '33px',
            'line-height': '34px',
            'display': 'inline-block',
            'color' : 'rgb(0, 159, 172)'
        }
        if(size=="md"){
            props['font-family'] = 'nw-icons';
            props['font-size'] = '33px';
            props['line-height'] = '34px';
            props['display'] = 'inline-block';
            props['color'] = 'rgb(0, 159, 172)';
        }
        else if(size=="sm"){
            props['font-family'] = 'nw-icons';
            props['font-size'] = '33px';
            props['line-height'] = '37px';
            props['display'] = 'inline-block';
            props['color'] = 'rgb(0, 159, 172)';
        }
        else if(size=="xs"){
            props['font-family'] = 'nw-icons';
            props['font-size'] = property.$searchPsuedoFont;
            props['line-height'] = '35px';
            props['display'] = 'inline-block';
            props['color'] = 'rgb(0, 159, 172)';
        }
     return props;
    },
    tolWrapperProp : function(size) {
        var property = brand.props;
        var props={
            'margin-top': property.$toolMargin            
        }
        if(size=="md"){
            props['margin-top'] = property.$toolMargin;
        }
        else if(size=="sm"){
            props['margin-top'] = '50px';
        }
        else if(size=="xs"){
            props['margin-top'] = '50px';
        }
     return props;
    },
    tolWrapperImgProp : function(size) {
        var property = brand.props;
        var props={
            'width': property.$toolImgSize,
            'height': property.$toolImgSize,
            'display': 'block',
            'float': 'left'           
        }
        if(size=="md"){
            props['width'] = property.$toolImgSize;
            props['height'] = property.$toolImgSize;
            props['display'] = 'block';
            props['float'] = 'left';
        }
        else if(size=="sm"){
            props['width'] = property.$toolImgMDSize;
            props['height'] = property.$toolImgMDSize;
            props['display'] = 'block';
            props['float'] = 'left';
        }
        else if(size=="xs"){
            props['width'] = property.$toolImgMDSize;
            props['height'] = property.$toolImgMDSize;
            props['display'] = 'block';
            props['float'] = 'left';
        }
     return props;
    },
    tolWrapperTitleProp : function(size) {
        var property = brand.props;
        var props={
            'display': 'block',
            'float' : 'left',
            'padding-top': property.$toolTitleTopMargin,
            'padding-right': '0px',
            'padding-bottom': property.$toolTitleBtmMargin,
            'padding-left': '0px',
            'margin-left': '15px'
        }
        if(size=="md"){
            props['padding-top'] = property.$toolTitleTopMargin;
            props['padding-right'] = '0px';
            props['padding-bottom'] = property.$toolTitleBtmMargin;
            props['padding-left'] = '0px';
            props['margin-left'] = '15px';
        }
        else if(size=="sm"){
            props['padding-top'] = property.$toolTitleTopSMMargin;
            props['padding-right'] = '0px';
            props['padding-bottom'] = property.$toolTitleBtmSMMargin;
            props['padding-left'] = '0px';
            props['margin-left'] = '12px';
        }
        else if(size=="xs"){
            props['padding-top'] = property.$toolTitleTopSMMargin;
            props['padding-right'] = '0px';
            props['padding-bottom'] = property.$toolTitleBtmSMMargin;
            props['padding-left'] = '0px';
            props['margin-left'] = '15px';
        }
     return props;
    },
    tolWrapperTitleAcrProp : function(size){
        var property = brand.props;
        var props={
            'color': property.$font_color_regular,
            'text-decoration' : property.$anchorTestdecoration,
            'display': 'block',
            'font-size': '18px',
            'line-height': '26px'
        }
        if(size=="md"){
            props['color'] = property.$font_color_regular;
            props['text-decoration'] = property.$anchorTestdecoration;
            props['display'] = 'block';
            props['font-size'] = '18px';
            props['line-height'] = '26px';
        }
        else if(size=="sm"){
            props['color'] = property.$font_color_regular;
            props['text-decoration'] = property.$anchorTestdecoration;
            props['display'] = 'block';
            props['font-size'] = '18px';
            props['line-height'] = '26px';
        }
        else if(size=="xs"){
            props['color'] = property.$font_color_regular;
            props['text-decoration'] = property.$anchorTestdecoration;
            props['display'] = 'block';
            props['font-size'] = '18px';
            props['line-height'] = '26px';
        }
     return props;
    },
    tolWrapperTitleAcrStyleProp : function(){
        var property = brand.props;
        var props={
            'display': 'block',
            'width' : '0px',
            'height': '1px',
            'background': property.$anchorBG,
            'transition-property': 'width',
            'transition-duration' : '0.2s',
            'transition-timing-function' : 'ease-out',
            'transition-delay' : '0s'
        }
        return props;
    },
    tolWrapperTitleAcrHoverProp : function(){
        var props={
            //'width': '129.781px'
        }
        return props;
    }
    
    
    
    
    
}
module.exports = {
    whyUsShelfProps: cssProps
}