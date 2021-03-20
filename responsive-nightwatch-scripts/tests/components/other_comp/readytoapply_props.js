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
        imagewrapperProps:function(size){
                var prop={};
        prop={
            'float': 'right',
            'width': '300px',
            'height': '300px'
        };
        if(size=='md'){
            prop['width']='240px';
            prop['height']='240px';
        }
        else if(size=='sm'){
            prop['width']='200px';
            prop['height']='200px';
            prop['margin-top']='11px';
            prop['margin-bottom']='11px';
        }
        else if(size=='xs'){
            prop['width']='140px'; 
            prop['height']='140px';
            prop['padding-top']='0px';
            prop['margin-bottom']='0px';
            prop['text-align']= 'center';
            prop['display']= 'block';
            prop['float']= 'none';
            //prop['margin']= '0 auto';//error(the property is not running because browser is taking specified width)
        }
        return prop;
    },
    genericProps:function(size){
        var prop={};
        prop={
            //'width': '100%',//error(the property is not running because browser is taking specified width)
            //'height': '100%',//error(the property is not running because browser is taking specified height)
            'text-align': 'center'
        };
        return prop;
    },
    imagewrapProps:function(size){
        var prop={};
        prop={
            'max-width': '100%',
            'max-height': '100%',
            'overflow': 'hidden'
        };
        return prop;
    },
    togglewrapperProps:function(size){
                var prop={};
        prop={
            'margin-bottom': '50px'
        };
        if(size=='md'){
            prop['margin-bottom']='40px';
        }
        else if(size=='sm'){
            prop['margin-bottom']= '30px';
        }
        else if(size=='xs'){
            prop['margin-bottom']= '20px';
        }
        return prop;
    },
    togwrapAftertxtProps:function(size){
        var prop={};
        prop={
            'margin-bottom': '30px'
        };
        if(size=='md'){
            prop['margin-bottom']='20px';
        }
        else if(size=='sm'){
            prop['margin-bottom']= '20px';
        }
        else if(size=='xs'){
            prop['margin-bottom']= '20px';
        }
        return prop;
    },
    aftertogSelTextProps:function(size){
        var prop={};
        prop={
            'margin-bottom': '20px',
            'color': 'rgba(255, 255, 255, 1)'
        };
        if(size=='md'){
            prop['margin-bottom']='10px';
        }
        else if(size=='sm'){
            prop['margin-bottom']= '10px';
        }
        else if(size=='xs'){
            prop['margin-bottom']= '10px';
        }
        return prop;
    },
    btnProps:function(size){
        var property=brand.props;
                var prop={};
        prop={
            'background-color': 'rgba(0, 0, 0, 0)',
            'color': 'rgba(255, 255, 255, 1)',
            'float': 'left',
            'padding': '16px 0px',
            'font-size': '18px',
            'line-height': '26px',
            'font-family': 'RNHouseSansRegular, sans-serif',
            'margin-bottom': '0px',
            'font-weight': 'normal',
            'text-align': 'center',
            'vertical-align': 'middle'
        };
        return prop;
    },
    btnPropsleft:function(size){
        var property=brand.props;
                var prop={};
        prop={
            'border-radius': property.$tog_bor_rad,
            'border-top-left-radius': property.$bor_t_l_rad,
            'border-bottom-left-radius': property.$bor_b_l_rad,
         };
        return prop;
    },
    btnPropsright:function(size){
        var property=brand.props;
                var prop={};
        prop={
            'border-radius': property.$tog_bor_rad_right,
            'border-top-right-radius': property.$bor_t_r_rad,
            'border-bottom-right-radius': property.$bor_b_r_rad,
            };
        return prop;
    }

}

module.exports = {
    readytoapplyProps: cssProps
}

