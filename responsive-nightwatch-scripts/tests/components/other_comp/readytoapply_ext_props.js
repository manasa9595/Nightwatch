var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
	 preapplyTitleWrapper : function(size){
	 	var titleWrapperProp = {},	 	
	 	titleWrapperProp = {
	 		"margin-top" : "40px",
	 		"margin-bottom" : "50px"
	 	};
	 	if(size == "md"){
	 		titleWrapperProp["margin-bottom"] = "40px";
	 	}
	 	else if(size == "sm"){
	 		titleWrapperProp["margin-top"] = "20px";
	 		titleWrapperProp["margin-bottom"] = "30px";
	 	}
	 	else if(size == "xs"){
	 		titleWrapperProp["margin-top"] = "20px";
	 		titleWrapperProp["margin-bottom"] = "30px";
	 	}
	 	return titleWrapperProp;
	 },
	 contentBlock1:function(size){
       var conBloClass = {
                'padding-top':"102px",
                'margin-bottom':"50px"
            };      
            if(size=="md"){
                conBloClass['padding-top'] = "83px";
                conBloClass['margin-bottom'] ="40px"; 
            }
            else if(size=="sm"){
                conBloClass['padding-top'] = "83px";
                conBloClass['margin-bottom'] = "50px";
            }
            else if(size=="xs"){
                conBloClass['padding-top'] = "43px";
                conBloClass['margin-bottom'] = "30px";
            }
         return conBloClass;
    },
	 contentBlockImageWrapper : function(size){
	 	imageWrapperProp = {
	 		"width" : "300px",
	 		"height" : "300px",
	 		"text-align" : "center"
	 	};
         if(size=="sm"){
            imageWrapperProp['width'] = "200px";
            imageWrapperProp['height'] ="200px"; 
        }
        else if(size=="xs"){
            imageWrapperProp['width'] = "138px";
            imageWrapperProp['height'] ="138px"; 
        }
        else if(size=="md"){
            imageWrapperProp['width'] = "240px";
            imageWrapperProp['height'] ="240px"; 
        }
	 	return imageWrapperProp;
	 },
    	 contentBlock2:function(size){
           var conBlo2Wrap= {
                    'padding-top':"103px",
                    'margin-bottom':"60px"
                };      
                if(size=="md"){
                    conBlo2Wrap['padding-top'] = "83px";
                    conBlo2Wrap['margin-bottom'] ="50px"; 
                }
                else if(size=="sm"){
                    conBlo2Wrap['padding-top'] = "83px";
                    conBlo2Wrap['margin-bottom'] = "40px";
                }
                else if(size=="xs"){
                    conBlo2Wrap['padding-top'] = "33px";
                    conBlo2Wrap['margin-bottom'] = "30px";
                }
             return conBlo2Wrap;
        },
    	headBlockTitWrap:function(size){
            var property = brand.props;
           headBloTitWrapProp = {
    	 		"margin-bottom":"20px",
    	 		"font-family":property.$font_family_regular
    	 	};
    	 	return headBloTitWrapProp;
    	},
    	headerBlockWrap:function(size){
           headBlockWrapper={
             "margin-top" : "50px",
    	 	 "margin-bottom" : "40px"
           };
           if(size=="md"){
    	 	headBlockWrapper["margin-bottom"] ="30px";
           }
           else if(size=="sm"){
             //headBlockWrapper["margin-bottom"] ="50px";
           	 headBlockWrapper["margin-bottom"] ="40px";
           }
           else if(size=="xs"){
           	 headBlockWrapper["margin-top"] = "30px";
    	 	 headBlockWrapper["margin-top"] = "40px";
           }
           return headBlockWrapper;
        },
        infoBlockMargin:function(size){
        	infoBlockProps={
        		 "margin-top" : "50px"

        	}
        	if(size=="md"||size=="xs"){
            infoBlockProps["margin-top"]  = "40px";
    	 	}
    	 	else if(size=="sm"){
    	 	 infoBlockProps["margin-top"]  = "40px";
    	 	}
           return infoBlockProps;
        },
        listWrapper:function(size){
        	listProperties={
        		 "margin-bottom" : "20px"
        	}
        	return listProperties;
        },
        listProps:function(size){
        	listBottom={
        		"padding-bottom":"15px",
        		"padding-left":"5px",
        		"list-style-type":"square"
        	}
        	if(size=="xs"){
        		listBottom["padding-left"]="13px";
        	}
        	return listBottom;
        },
        listWrapper2:function(size){
        	listProperties={
        		 "margin-bottom" : "62px"
        	}
        	if(size=="sm"){
        		listProperties["margin-bottom"]="58px";
        	}
        	else if(size=="xs"){
        		listProperties["margin-bottom"]="40px";
        	}
        	return listProperties;
        },

     titleTextRose:function(size){
        var property =  brand.props;
        var titleProp={
                'color': property.$primary_2,
                'font-family':property.$font_family_regular,
                //'margin':"0",
                };
            
         return titleProp;
         },
     titlewrapRose:function(size){
        var property = brand.props
        var titleProp={
                'margin-top':property.$rose_title_wrap_mt_xl,//variable
                'margin-bottom':"42px"
            };
            if(size=="md"){
                titleProp['margin-top'] = "40px";
                titleProp['margin-bottom'] ="30px";
            }
            else if(size=="sm"){
                titleProp['margin-top'] = "30px";
                titleProp['margin-bottom'] ="30px";
            }
            else if(size=="xs"){
                titleProp['margin-top'] = property.$rose_title_wrap_mt_xs;//variable
                titleProp['margin-bottom'] = "20px";
            }
         return titleProp;
     },
     toggleWrap1:function(size){
     	var titleProp={
                'margin-bottom':"50px"
            };
            if(size=="md"){
            	 titleProp['margin-bottom'] = "40px";
            }
            else if(size=="sm"){
            	 titleProp['margin-bottom'] = "20px";
            }
            else if(size=="xs"){
            	 titleProp['margin-bottom'] = "30px";
            }
            return titleProp;
    },
    toggleWrap2:function(size){
 	var titleProp={
            'margin-bottom':"50px"
        };
        if(size=="md"){
        	 titleProp['margin-bottom'] = "40px";
        }
        else if(size=="sm"){
        	 titleProp['margin-bottom'] = "30px";
        }
        else if(size=="xs"){
        	 titleProp['margin-bottom'] = "30px";
        }
        return titleProp;
    },
    toggleWrap3:function(size){
 	var titleProp={
            'margin-bottom':"50px"
        };
        if(size=="md"){
        	 titleProp['margin-bottom'] = "40px";
        }
        else if(size=="sm"){
        	 titleProp['margin-bottom'] = "30px";      
        }
        else if(size=="xs"){
        	 titleProp['margin-bottom'] = "30px";
        }
        return titleProp;
    },
    bgColorRose:function(size){
    		var property =  brand.props;
    	var colRose={
    		"background-color":property.$col_block1_bg
    	}
    	return colRose;
    },
    bgColorYellow:function(size){
    	var property =  brand.props;
    	var yelBlock={
    		"background-color":property.$col_block1_yellow_bg
    	}
        return yelBlock;
    },
    ThemeVoilet : function(size){
        var ThemeProp={
            'padding-top':"50px",
            'padding-bottom':"50px"
        };
        if(size=="md"){
            ThemeProp['padding-top'] = "40px";
            ThemeProp['padding-bottom'] ="40px";
        }
        else if(size=="sm"){
            ThemeProp['padding-top'] = "30px";
            ThemeProp['padding-bottom'] ="30px";
        }
        else if(size=="xs"){
            ThemeProp['padding-top'] = "30px";
            ThemeProp['padding-bottom'] = "25px";
        }
     return ThemeProp;
    },
    extListWraper : function(size) {
        var listProps={
            'padding-top':"102px",
            'margin-bottom': '50px'
        }
        if(size=="md"){
            listProps['padding-top'] = "83px";
            listProps['margin-bottom'] ="40px";
        }
        else if(size=="sm"){
            listProps['padding-top'] = "30px";
            listProps['margin-bottom'] ="30px";
        }
        else if(size=="xs"){
            listProps['padding-top'] = "30px";
            listProps['margin-bottom'] = "30px";
        }
     return listProps;
    },
    CheckNReadOpen : function(size) {
        var listProps={
            'padding-top':"103px",
            'margin-bottom': '60px'
        }
        if(size=="md"){
            listProps['padding-top'] = "83px";
            listProps['margin-bottom'] ="50px";
        }
        else if(size=="sm"){
            listProps['padding-top'] = "72px";
            listProps['margin-bottom'] ="40px";
        }
        else if(size=="xs"){
            listProps['padding-top'] = "38px";
            listProps['margin-bottom'] = "30px";
        }
     return listProps;
    },
    OpenAcBlock1 : function(size) {
        var listProps={
            'padding-top':"102px",
            'margin-bottom': '50px'
        }
        if(size=="md"){
            listProps['padding-top'] = "83px";
            listProps['margin-bottom'] ="40px";
        }
        else if(size=="sm"){
            listProps['padding-top'] = "72px";
            listProps['margin-bottom'] ="40px";
        }
        else if(size=="xs"){
            listProps['padding-top'] = "38px";
            listProps['margin-bottom'] = "30px";
        }
     return listProps;
    },
}

module.exports = {
    readytoapplyProps: cssProps
}

