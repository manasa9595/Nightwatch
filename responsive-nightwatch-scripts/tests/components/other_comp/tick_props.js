var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
	 tickWrapper : function(size){
	 	var tickWrapperProp = {},
	 	property =  brand.nw_brand,
	 	//property =  brand.rbs_brand,	 	
	 	tickWrapperProp = {
	 		"margin-top" : property.tick_shelf_margin_top,
	 		"margin-bottom" : property.tick_shelf_margin_bottom
	 	};
	 	if(size == "md"){
	 		tickWrapperProp["margin-top"] = property.tick_shelf_margin_top_l;
	 		tickWrapperProp["margin-bottom"] = property.tick_shelf_margin_bottom_l;
	 	}
	 	else if(size == "sm"){
	 		tickWrapperProp["margin-top"] = property.tick_shelf_margin_top_m;
	 		tickWrapperProp["margin-bottom"] = property.tick_shelf_margin_bottom_m;
	 	}
	 	else if(size == "xs"){
	 		tickWrapperProp["margin-top"] = property.tick_shelf_margin_top_s;
	 		tickWrapperProp["margin-bottom"] = property.tick_shelf_margin_bottom_s;
	 	}
	 	return tickWrapperProp;
	 },
	 tickCompBlock : function(client){
	 	var tickCompBlockProps = {},
	 	property =  brand.nw_brand,
	 	//property = brand.rbs_brand,
	 	tickCompBlockProps = {
	 		"position" : property.tick_comp_block_position,
	 		"float" : property.tick_comp_block_float
	 	};
	 	return tickCompBlockProps;
	 },
	 tickComp : function(size){
	 	var tickCompProp = {},
	 	//property =  brand.nw_brand,
	 	property = brand.rbs_brand,
	 	tickCompProp = {
	 		"width" : property.tick_icon_width,
	 		"height" : property.tick_icon_height
	 	};
	 	if(size == "md"){
	 		tickCompProp["height"] = property.tick_icon_height_l;
	 	}
	 	else if(size == "sm"){
	 		tickCompProp["height"] = property.tick_icon_height_m;
	 	}
	 	else if(size == "xs"){
	 		tickCompProp["width"] = property.tick_icon_width_s;
	 		tickCompProp["height"] = property.tick_icon_height_s;
	 	}
	 	return tickCompProp;
     },
	 titleWrapper : function(size){
	 	var titleWrapperProps = {},
	 	//property =  brand.nw_brand,
	 	property = brand.rbs_brand,
	 	titleWrapperProps = {
	 		"margin-bottom" : property.tick_title_wrapper_bottom,
	 		"width" : property.tick_title_wrapper_width
	 	};
	 	if(size == "md"){
	 		titleWrapperProps["width"] = property.tick_title_wrapper_width_l;
	 	}
	 	else if(size == "sm"){
	 		titleWrapperProps["width"] = property.tick_title_wrapper_width_m;
	 	}
	 	else if(size == "xs"){
	 		titleWrapperProps["width"] = property.tick_title_wrapper_width_s;
	 	}
	 	return titleWrapperProps;
     },
     titleComp:function(size){
         var titleProp = {},
         	 //property =  brand.nw_brand,
         	 property=brand.rbs_brand,
             titleProp={               
                'font-family':property.font_family_regular,
                'font-size' : property.tick_title_fs,
                'line-height' : property.tick_title_lh,
                'color' : property.tick_title_color
            };
            if(size=="md"){
             titleProp['font-size'] = property.tick_title_fs_l;
             titleProp['line-height'] = property.tick_title_lh_l;
            }
            else if(size=="sm"){
               titleProp['font-size'] = property.tick_title_fs_m;
               titleProp['line-height'] = property.tick_title_lh_m;
            }
            else if(size=="xs"){
              titleProp['font-size'] = property.tick_title_fs_s;
              titleProp['line-height'] = property.tick_title_lh_s;
            }
         return titleProp;
     },
     textWrapper : function(size){
     	var textWrapperProps = {},
     	//property =  brand.nw_brand,
	 	property = brand.rbs_brand,
	 	textWrapperProps = {
	 		"margin-bottom" : property.tick_text_wrapper_bottom,
	 		"width" : property.tick_text_wrapper_width
	 	};
	 	if(size == "md"){	 		
	 		textWrapperProps["width"] = property.tick_text_wrapper_width_l;
	 	}
	 	else if(size == "sm"){	 		
	 		textWrapperProps["width"] = property.tick_text_wrapper_width_m;
	 	}
	 	else if(size == "xs"){
	 		textWrapperProps["margin-bottom"] = property.tick_text_wrapper_bottom_s;
	 		textWrapperProps["width"] = property.tick_text_wrapper_width_s;
	 	}
	 	return textWrapperProps;
     },
     textComp : function(size){
     	var textProp = {},
     	//property =  brand.nw_brand,
     	 property=brand.rbs_brand,
         textProp={
            'font-family':property.tick_text_font_family_regular,
            'font-size' : property.tick_text_fs,
            'line-height' : property.tick_text_lh,
            'color' : property.tick_text_color
        };
         return textProp;
     }      
}

module.exports = {
    tickComp: cssProps
}

/*module.exports = {
	elements : {
		titleWrapper : {
			selector : '.tick-comp-wrapper .tick-comp-block .titleWrapper'
		},
		title : {
			selector : '.tick-comp-wrapper .tick-comp-block .titleWrapper .title-comp'
		},
		textWrapper : {
			selector : '.tick-comp-wrapper .tick-comp-block .textWrapper'
		},
		text : {
			selector : '.tick-comp-wrapper .tick-comp-block .textWrapper .text-comp'
		}
	},
	commands : [{
		titleWrapper : function(client,selector){
			client.elements('css selector',selector,titleWrapperTest);
			function titleWrapperTest(elems){
				elems.value.forEach(function(element,index){
					client.elementIdCssProperty(element.ELEMENT,"margin-bottom",function(result){
						this.assert.equal(result.value,"20px");
					});
					client.elementIdCssProperty(element.ELEMENT,"width",function(result){
						this.assert.equal(result.value,"372px");
					});
				});
			}
		},
		titleComp : function(client,selector){
			client.elements('css selector',selector,titleTest);
			function titleTest(elems){
				elems.value.forEach(function(element,index){
					var cssProps = ["font-size","line-height","color"];
					var cssVal = ["26px","34px","rgba(68, 14, 94, 1)"];
					for(var i=0;i<cssProps.length;i++){
						let j=i;
						client.elementIdCssProperty(element.ELEMENT,cssProps[i],function(result){
							this.assert.equal(result.value,cssVal[j]);
						});
					}
				});
			}
		},
		textWrapper : function(client,selector){
			client.elements('css selector',selector,textWrapperTest);
			function textWrapperTest(elems){
				elems.value.forEach(function(element,index){
					client.elementIdCssProperty(element.ELEMENT,"margin-bottom",function(result){
						this.assert.equal(result.value,"50px");
					});
					client.elementIdCssProperty(element.ELEMENT,"width",function(result){
						this.assert.equal(result.value,"372px");
					});
				});
			}
		},
		textComp : function(client,selector) {
			client.elements('css selector',selector,textTest);
			function textTest(elems){
				elems.value.forEach(function(element,index){
					var cssProps = ["font-size","line-height","color"];
					var cssVal = ["18px","26px","rgba(51, 51, 51, 1)"];
					for(var i=0;i<cssProps.length;i++){
						let j=i;
						client.elementIdCssProperty(element.ELEMENT,cssProps[i],function(result){
							this.assert.equal(result.value,cssVal[j]);
						});
					}
				});
			}
		}
	}]
}*/