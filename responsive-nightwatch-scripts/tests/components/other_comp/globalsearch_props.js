var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
     gswrapProps : function(size) {
        var property = brand.props;
        var searchProps={
            'width': property.$searhBoxWidth_xl,
            'float':"right"
            };
        if(size == "md"){
            searchProps["width"] = property.$searhBoxWidth_xl,
            searchProps["float"] = "right"
        }
        else if(size == "sm"){
            searchProps["width"] = property.$searhBoxWidth_m,
            searchProps["float"] = "none"
        }
        else if(size == "xs"){
            searchProps["width"] = property.$searhBoxWidth_m,
            searchProps["float"] = "none"
        }            
        return  searchProps;
    },
    golSearchArea : function(size){
        var property = brand.props;      
        var gsAreaProp = {
            "margin-top" : property.$gsMarginTop,
            "margin-bottom" :property.$gsMarginBot,
            "height":property.$gsHeight,
            'border-top-color': property.$gsBorColr,
            'border-right-color': property.$gsBorColr,
            'border-left-color': property.$gsBorColr,
            'border-bottom-color': property.$gsBorColrBtm,
            'border-top-width': property.$gsBorWid,
            'border-right-width': property.$gsBorWid,
            'border-left-width': property.$gsBorWid,
            'border-bottom-width': property.$gsBorWidBot,
            'border-top-style': property.$gsBorStyle,
            'border-right-style': property.$gsBorStyle,
            'border-left-style': property.$gsBorStyle,
            'border-bottom-style': property.$gsBorStyleBtm
        };
        if(size == "md"){
            gsAreaProp["margin-top"] = property.$gsMarginTop,
            gsAreaProp["margin-bottom"] = property.$gsMarginBot,
            gsAreaProp["height"] = property.$gsHeight
        }
        else if(size == "sm"){
            gsAreaProp["margin-top"] = property.$gsMarginTop_m,
            gsAreaProp["margin-bottom"] = property.$gsMarginBot_m,
            gsAreaProp["margin-left"] = property.$gsMarginLft_m,
            gsAreaProp["margin-right"] = property.$gsMarginRgt_m,
            gsAreaProp["height"] = property.$gsHeight_m
        }
        else if(size == "xs"){
            gsAreaProp["margin-top"] = property.$gsMarginTop_m,
            gsAreaProp["margin-bottom"] = property.$gsMarginBot_m,
            gsAreaProp["margin-left"] = property.$gsMarginLft_m,
            gsAreaProp["margin-right"] = property.$gsMarginRgt_m,
            gsAreaProp["height"] = property.$gsHeight_m
        }
        return gsAreaProp;
    },
    golSearchInput : function(size){
        var property = brand.props;       
        var gsInptProp = {
            "padding-top" : property.$gsInpPadTop,
            "padding-bottom" :property.$gsInpPadBot,
            "padding-left":property.$gsInpPadLft,
            "width":property.$gsInputWid,
            "color":property.$gsInptTxtColr,
            "font-size":property.$gsInptFontSize,
            "line-height":property.$gsInptLineHgt,
            "font-family":property.$gsFontFamily
        };
        if(size == "md"){
            gsInptProp["width"] = property.$gsInputWid
        }
        else if(size == "sm"){
           gsInptProp["width"] = property.$gsInputWid_m,
           gsInptProp["padding-top"] = property.$gsInpPadTop_m,
           gsInptProp["padding-bottom"] = property.$gsInpPadBot_m,
           gsInptProp["padding-left"] = property.$gsInpPadlft_m
        }
        else if(size == "xs"){
            gsInptProp["width"] = property.$gsInputWid_m,
            gsInptProp["padding-top"] = property.$gsInpPadTop_m,
            gsInptProp["padding-bottom"] = property.$gsInpPadBot_m,
            gsInptProp["padding-left"] = property.$gsInpPadlft_m
        }
        return gsInptProp;
    },
    golButtonImg : function(size){
        var property = brand.props;
        var gsBtnProp = {
            "margin-top" : property.$gsImgMarTop,
            "margin-bottom" :property.$gsImgMarBot,
            "margin-right":property.$gsImgMarRgt,
            "margin-left":property.$gsImgMarLft,
            "width":property.$gsImgWid,
            "height":property.$gsImgHgt
        };
        if(size == "md"){
            gsBtnProp["margin-left"] = property.$gsImgMarLft
        }
        else if(size == "sm"){
            gsBtnProp["margin-top"] = property.$gsImgMarTop_m,
            gsBtnProp["margin-bottom"] = property.$gsImgMarBot_m,
            gsBtnProp["margin-left"] = property.$gsImgMarLft_m,
            gsBtnProp["margin-right"] = property.$gsImgMarRgt_m
        }
        else if(size == "xs"){
            gsBtnProp["margin-top"] = property.$gsImgMarTop_m,
            gsBtnProp["margin-bottom"] = property.$gsImgMarBot_m,
            gsBtnProp["margin-left"] = property.$gsImgMarLft_m,
            gsBtnProp["margin-right"] = property.$gsImgMarRgt_m
        }
        return gsBtnProp;
    },
}
module.exports = {
    globalSearchProps: cssProps
}

