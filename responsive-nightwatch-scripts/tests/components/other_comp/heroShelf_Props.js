var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
//natwest hero shelf properties(photography mode)
var cssProps = {
    imgMainWrapper: function(size) {
        var imgProps = {},
            imgProps = {
                "height": "480px"
            };
        if (size == "md") {
            imgProps["height"] = "422px";
        } else if (size == "sm") {
            imgProps["height"] = "416px";
        } else if (size == "xs") {
            imgProps["height"] = "471";
            imgProps["margin-bottom"] = "8px";
        }
        return imgProps;
    },

    imgProps: function(size) {
        var imageProps = {},
            imageProps = {
                "background-repeat": "no-repeat",
                "background-size": "cover",
               // "background-position": "50% 50%",
            };

        return imageProps;
    },
    imgProperties: function(size) {
        var imageProps = {},
            imageProps = {
                "display": "none"
            };
        return imageProps;
    },
    imgWrapperProps: function(size) {
        var imageProps = {},
            imageProps = {
                "height": "480px"
            };
        if (size == "md") {
            imageProps["height"] = "422px";
        } else if (size == "sm") {
            imageProps["height"] = "416px";
        } else if (size == "xs") {
            imageProps["height"] = "220px";
        }
        return imageProps;
    },
    imgWrapXS: function(size) {
        var imageProps = {};
        if (size == "xs") {
            imageProps["height"] = "471px";
        }
        return imageProps;
    },
    imgHeightXS: function(size) {
        var imageProps = {};
        if (size == "xs") {
            imageProps["height"] = "220px";
        }
        return imageProps;
    },
 
    imgContProps: function(size) {
        var imgContentProps = {}, property=brand.props;
            imgContentProps = {
                "top": "0px"
            };
        if (size == "xs") {
            imgContentProps["background-color"] = property.$hero_block_bgColor;
        }
        return imgContentProps;
    },
    heroTitProps: function(size) {
        var heroTitleProps = {}, property=brand.props;
            heroTitleProps = {
                "margin-top": "100px",
                "background-color": property.$heroshelfnwBgClr
                
            };

        if (size == "sm") {
            heroTitleProps["margin-top"] = "95px";
        } else if (size == "xs") {
            heroTitleProps["margin-top"] = "0px";
        }
        return heroTitleProps;
    },

    heroTitPropsill: function(size) {
        var heroTitleProps = {},property=brand.props;
            heroTitleProps = {
                "margin-top": "104px",
                "background-color": property.illbgcolorHero
            };
        if (size == "md") {
            heroTitleProps["margin-top"] = "90px";
        }

        else if (size == "sm") {
            heroTitleProps["margin-top"] = "108px";
        } else if (size == "xs") {
            heroTitleProps["margin-top"] = "25px";
        }
        return heroTitleProps;
    },

    heroAuthTitProps:function(size) {
        var titleProps = {
            "font-size" : "30px"
        };
        if (size == "md") {
            titleProps["font-size"] = "26px";
        } else if (size == "sm" || size == "xs") {
            titleProps["font-size"] = "24px";
        }
        return titleProps;
   },

    heroTitTextProps: function(size) {
        var titTextProps = {},property=brand.props,
            titTextProps = {
                "text-align": "center",
                "color": property.$color,
                "max-height": "192px",
                "font-family": property.$font_family_shelf,
                "overflow": "hidden",
                //"font-weight": "normal"
            };
        if (size == "md") {
            titTextProps["max-height"] = "162px";
        } else if (size == "sm" || size == "xs") {
            titTextProps["max-height"] = "176px";
        }

        return titTextProps;
    },
    heroTitPad: function(size) {
        var titleProps = {},
            titleProps = {
                "padding": "20px 40px 40px",
                "min-height": "164px",
                //"max-height": "282px"
            };
        if (size == "md") {
            titleProps["min-height"] = "154px";
            titleProps["max-height"] = "252px";
        } else if (size == "sm") {
            titleProps["padding"] = "20px 30px 30px 29px";
            titleProps["min-height"] = "134px";
            titleProps["max-height"] = "246px";
        } else if (size == "xs") {
            titleProps["margin-top"] = "0px";
            titleProps["padding"] = "20px 0px 30px";
            titleProps["min-height"] = "134px";
            //titleProps["height"] = "163px";
        }
        return titleProps;
    },
    prodTitProps: function(size) {
        var prodTitleProps = {}, property=brand.props;
            prodTitleProps = {
                "margin-top": "-30px",
                //"color": "rgba(66, 20, 95, 1)",
                "text-align": "center",
                "padding" : "14px 15px",
                "background-color" : property.$heroProdBgClr
                
            };
         if (size == "sm") {
            prodTitleProps["margin-top"] = "-25px";
            prodTitleProps["padding"] = "12px 15px";
        } 
        else if (size=="xs") {
            prodTitleProps["top"] = "-25px";
            prodTitleProps["padding"] = "12px 15px";
        } 
        return prodTitleProps;
    },
    prodTitbgclr: function(size) {
        var prodTitleProps = {}, property=brand.props;
            prodTitleProps = {
                "background-color" : property.$heroProdBgClr
                
            };
        return prodTitleProps;
    },
    prodTitText: function(size) {
        var prodTitTextProps = {}, property=brand.props;
            prodTitTextProps = {
                "font-family": property.$font_family_bold_2,
                "color" : property.$hero_block_bgColor
  
            };
        return prodTitTextProps;
    },
    illprodTitText: function(size) {
        var prodTitTextProps = {}, property=brand.props;
            prodTitTextProps = {
                "font-family": property.$font_family_bold_2,
                "color" : property.$color
  
            };
        return prodTitTextProps;
    },
    

    prodTitPadding: function(size) {
        var titleProps = {},property=brand.props;
            titleProps = {
                "padding": "14px 15px",
                "background-color": property.$heroProdBgClr,
                "margin-top" : "-30px"
            };
        if (size == "sm" || size == "xs") {
            titleProps["padding"] = "12px 15px";
            titleProps["margin-top"] = "-25px";
        }

        return titleProps;
    },

    aprContainerProps: function(size) {
        var aprTitle = {},
            property = brand.props,
            aprTitle = {
                "margin-bottom": "10px",
                "font-family" : property.$font_family_text
                //"background-color": property.$primary_white_smoke,
                //"position" : "relative"
            };
        return aprTitle;
    },
    aprLegalProps: function(size) {
        var aprLegalCopy = {},property=brand.props;
            aprLegalCopy = {
                "font-size": "16px",
                "line-height": "26px",
                "color": property.$colorBlack,
                "font-family" : property.$font_family_text
            };
        return aprLegalCopy;
    },
    //natwest hero-shelf properties(illustration mode)
    illWrapProps: function(size) {
        var wrapProps = {},
            property = brand.props;
        
        if(size=="lg") {
            wrapProps["background-color"] = property.$hero_block_bgColor,
            wrapProps["height"] = property.$hero_wrap_height_xl
            
        }
        else if (size == "md") {
            wrapProps["height"] = property.$hero_wrap_height_l;
        } else if (size == "sm") {
            wrapProps["height"] = property.$hero_wrap_height_m;
        } 
        return wrapProps;
    },

    illProps: function(size){
        var wrapProps={},
        wrapProps = {
          "over-flow" : "hidden"
        };
        return wrapProps;
    },
    illImgProps: function(size) {
        var wrapProps = {};
         if(size=="lg"){
                wrapProps["height"] = "480px";
            }
         else if(size=="md"){
             wrapProps["height"] = "422px";
         }
         else if(size=="sm"){
             wrapProps["height"] = "416px";
         }
        
        return wrapProps;
    },
    illCompImg: function(size) {
        var imgProps = {},
            imgProps = {
                "display": "table-cell",
                "vertical-align": "middle"
            };
        return imgProps;
    },
    heroTith1: function(size) {
        var padProps = {},property = brand.props;
            padProps = {
                "padding": property.$heroPaddingxl,
                //"min-height": "164px",
                //"max-height": "282px"
            };
        if (size == "md") {
            padProps["padding"] = property.$heroPaddingl;
            //padProps["min-height"] = "154px";
            //padProps["max-height"] = "252px";
        } else if (size == "sm") {
            padProps["padding"] = property.$heroPaddingm;
            //padProps["min-height"] = "134px";
            //padProps["max-height"] = "251px";
        } else if (size == "xs") {
            padProps["padding"] = property.$heroPaddings;
            //padProps["min-height"] = "134px";
        }
        return padProps;
    },
    prodTitIll: function(size) {
        var titleProps = {},
            titleProps = {
               // "padding": "14px 22px",
                "background-color": "rgba(66, 20, 95, 1)",
                "color": "rgba(255, 255, 255, 1)"
            };
        // if (size == "sm" || size == "xs") {
        //     titleProps["padding"] = "12px 14px 12px 15px";
        // }
        return titleProps;
    },

    //rbs hero shelf properties(photography mode)
    heroImgWrapRBS: function(size) {
        var titleProps = {},
            property = brand.props,
            titleProps = {
                "position": "relative",
                "height": "478px"
            };
        if (size == 'md') {
            titleProps["height"] = property.$hero_wrap_height_l;
        } else if (size == "sm") {
            titleProps["height"] = property.$hero_wrap_height_m;
        } else if (size == "xs") {
            titleProps["height"] = property.$hero_wrap_height_s;
        }
        return titleProps;
    },
    ImgWrapperRbs: function(size) {
        var titleProps = {},
            property = brand.props,
            titleProps = {
                "height": property.$hero_wrap_height_xl
            };
        if (size == 'md') {
            titleProps["height"] = property.$hero_wrap_height_l;
        } else if (size == "sm") {
            titleProps["height"] = property.$hero_wrap_height_m;
        } else if (size == "xs") {
            titleProps["height"] = "220px";
        }
        return titleProps;
    },
    imgContPropsRbs: function(size) {
        var titleProps = {},
            titleProps = {
                "top": "0px"
            };
        return titleProps;
    },
    prodTitMargin: function(size) {
        var titleProps = {},
            titleProps = {
                "margin-top": "40px"
            };
        if (size == "xs") {
            titleProps["margin-top"] = "42px";
        }
        return titleProps;
    },
    prodTitTextProps: function(size) { //rbs
        var titleProps = {},
            property = brand.props,
            titleProps = {
                "padding": "11px 15px",
                "display": "inline-block",
                "background-color": "rgba(255, 255, 255, 1)",
                "color": property.$hero_block_bgColor,
                "font-family": property.$font_family_regular
            };
            if(size=="xs"){
                titleProps["padding"] = "0px";
                titleProps["background-color"] = "rgba(0, 0, 0, 0)";
                titleProps["color"] = "rgba(255, 255, 255, 1)";
            }
        return titleProps;
    },
    twillBlockProps: function(size) {
        var blockProps = {},
            blockProps = {
                "margin-top": "60px"
            };
        if (size == "md") {
            blockProps["margin-top"] = "55px";
        } else if (size == "sm") {
            blockProps["margin-top"] = "52px";
        } else if (size == "xs") {
            blockProps["margin-top"] = "46px";
        }
        return blockProps;
    },
    twillBlockTitle: function(size) {
        var titleProps = {},
            property = brand.props,
            titleProps = {
                "font-family": property.$font_family_light,
                "margin": "0px",
                //"font-weight": property.$font_weight
            }; 
        return titleProps;
    },
    twillBlockTitleProps: function(size) {
        var titleProps = {},property = brand.props,
            titleProps = {
                "position": "relative",
                "color": "rgba(255, 255, 255, 1)",
                'display': 'inline',
                'word-wrap': 'break-word',
                'padding-bottom': property.$heroTitleonePaddingBtm,
                'padding-top': property.$heroTitleonePaddingTop
            };
        if (size == "md") {
            titleProps['padding-top'] = property.$heroTitleonePaddingMdTop;
            titleProps['padding-bottom'] = property.$heroTitleonePaddingMdBtm;
        } else if (size == "sm") {
            titleProps['padding-top'] = property.$heroTitleonePaddingSmTop;
            titleProps['padding-bottom'] = property.$heroTitleonePaddingSmBtm;
        } else if (size == "xs") {
            titleProps['padding-top'] = property.$heroTitleonePaddingXsTop;
            titleProps['padding-bottom'] = property.$heroTitleonePaddingXsBtm;

        }
        return titleProps;
    },

    SpanProps: function(size) {
        var titleProps = {},
            titleProps = {
                "display": "inline",
                "padding": "0px 17px",
                "line-height": "69px"
            };
        if (size == "md") {
            titleProps["padding"] = "0px 17px";
            titleProps["line-height"] = "56px";
        } else if (size == "sm" ) {
            titleProps["padding"] = "0px 17px";
            titleProps["line-height"] = "46px";
        }
        else if ( size == "xs") {
            titleProps["padding"] = "0px 15px";
            titleProps["line-height"] = "46px";
        }

        return titleProps;
    },
    twillBloTitOneProps: function(size) {
        var titleProps = {},
            property = brand.props,
            titleProps = {
                'background-color': 'rgba(149, 7, 125, 1)',
                "z-index": "2",
                "padding-top": "30px"
            };
        if (size == "md") {
            titleProps["padding-top"] = "23px";
        } else if (size == "sm") {
            titleProps["padding-top"] = "19px";
        } else if (size == "xs") {
            titleProps["padding-top"] = "20px";
        }
        return titleProps;
    },
    twillBlockTitTwo: function(size) {
        var titleProps = {},
            titleProps = {
                'background-color': 'rgba(97, 128, 31, 1)'

            };
        return titleProps;
    },
    spanTitle1: function(size) {
        var titleProps = {},
            titleProps = {
                "position": "relative",
                "top": "-10px"
            };
        if (size == "md") {
            titleProps["top"] = "-8px";
        }
        return titleProps;
    },
    spanTitle2: function(size) {
        var titleProps = {},
            titleProps = {
                "position": "relative",
                "top": "2px"
            };
        if (size == "md") {
            titleProps["top"] = "4px";
        } else if (size == "sm") {
            titleProps["top"] = "1px";
        } else if (size == "xs") {
            titleProps["top"] = "1px";
        }
        return titleProps;
    },
    //rbs hero-shelf(illustration mode)
    prodTitleMargin: function(size) {
        var titleProps = {},
            titleProps = {
                "margin-top": "52px"
            };
        if (size == "xs") {
            titleProps["margin-top"] = "42px"
        }
        return titleProps;
    },
    prodTitColor: function(size) {
        var titleProps = {},
            titleProps = {
                "color": "rgba(255, 255, 255, 1)"
            };
        return titleProps;
    },
    illHeroTwillBlock: function(size) {
        var blockProps = {},
            blockProps = {
                "margin-top": "71px"
            };
        if (size == "md") {
            blockProps["margin-top"] = "67px";
        } else if (size == "sm") {
            blockProps["margin-top"] = "64px";
        } else if (size == "xs") {
            blockProps["margin-top"] = "45px";
        }
        return blockProps;
    },
    illSpanTit1: function(size) {
        var titleProps = {},
            titleProps = {
                "position": "relative",
                "top": "-10px"
            };
        if (size == "md") {
            titleProps["top"] = "-8px";
        }
        return titleProps;
    },
    illTwillBloTit : function(size){
        var titleProps = {},
            titleProps = {
                "font-family": "RNHouseSansRegular, sans-serif",
                "margin": "0px",
                //"font-weight": "normal"
        };
        return titleProps;
   },
    spanTit2: function(size) {
        var titleProps = {},
            titleProps = {
                "padding-top": "17px",
                "position": "relative",
                "top": "-13px",
                "padding-bottom": "19px"
            };
        if (size == "md") {
            titleProps["padding-top"] = "10px";
            titleProps["top"] = "-10px";
            titleProps["padding-bottom"] = "19px";
        } else if (size == "sm") {
            titleProps["padding-top"] = "10px";
            titleProps["top"] = "-10px";
            titleProps["padding-bottom"] = "12px";
        } else if (size == "xs") {
            titleProps["padding-top"] = "10px";
            titleProps["top"] = "-10px";
            titleProps["padding-bottom"] = "11px";
        }
        return titleProps;
    },
    imgWrapProps: function(size) {
        var imgProps = {},
            imgProps = {
                "height": "419px"
            };
        if (size == "md") {
            imgProps["height"] = "361px";
        } else if (size == "sm") {
            imgProps["height"] = "279px";
        } else if (size == "xs") {
            imgProps["height"] = "218px";
        }
        return imgProps;
    },
    spanTit3: function(size) {
        var titleProps = {},
            titleProps = {
                "padding-bottom": "17px",
                "position": "relative",
                "top": "-11px"
            };
        if (size == "md") {
            titleProps["padding-bottom"] = "15px";
            titleProps["top"] = "-3px";

        } else if (size == "sm") {
            titleProps["padding-bottom"] = "10px";
            titleProps["top"] = "-9px";
        } else if (size == "xs") {
            titleProps["padding-bottom"] = "10px";
            titleProps["top"] = "-10px";

        }
        return titleProps;
    },
    aprProps: function(size){
        var titleProps = {},
            property = brand.props,
        titleProps = {
          "padding-top": "20px",
          "padding-bottom": "20px",
          "background-color": property.$primary_white_smoke
        };
        if(size=="md"||size=="sm"||size=="xs"){
            titleProps["padding-top"] = "15px";
        }
        return titleProps;
    },
    titleProdill: function(size){
         var titleProps = {},property = brand.props;
            
        titleProps = {
          "background-color": property.illbgcolorHero,
          "padding" :"0px",
          "margin-top" : "0px"
        };
        return titleProps;
    }



}

module.exports = {
    heroShelfProps: cssProps
}