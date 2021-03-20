var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
var textProps={
     textComps:function(size){
         var textProp = {}, property=brand.props,
             textProp={
                'color':property.$winks_textcolor,
                'display':property.$winks_display_xl,
                'text-align':"center",
                'line-height':property.$winks_text_lh_xl,
                'font-size':property.$winks_text_fs_xl,
                'font-family':property.$font_family_title,
                'margin-top':"20px",
                'letter-spacing':property.$body_letter_spacing
            };
            if(size=="sm"){
                textProp['margin-top'] = "30px";
            }           
        return textProp;
    },
    textCompsG:function(size){
         var textProp = {}, property=brand.props,
             textProp={
                'color':property.$winks_textcolor,
                'line-height':"26px",
                'font-size':"18px",
                'font-family':property.$font_family_regular,
                'margin-top':"30px",
                'letter-spacing':"0.2px",
                'max-height':"78px"
            };
            if(size=="md"){
                textProp['margin-top'] = "20px";
            }
            else if(size=="sm"){
                textProp['margin-top'] = "15px";
                textProp['max-height'] = "104px";
            }
            else if(size=="xs"){
                textProp['margin-top'] = "20px";
                textProp['max-height'] = "104px";
            }
        return textProp;
    },
    textCompsP:function(size){
         var textProp = {}, property=brand.props,
             textProp={
                'color':property.$winks_textcolor,
                'line-height':"26px",
                'font-size':"18px"
            };
        return textProp;
    },
    standardAccTextAProps :function(size) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'color': property.$linkcolor,
            'line-height':'26px',
            'font-size':'18px'
            };
       return textProp;    
   },
   standardTitleProps :function(size,iebrowserval) {  
        var textProp = {}, property = brand.props;
        var textProp={
            'color': property.$font_color_regular,
            'font-family': property.$font_family_bold            
        };
        if(branding.getBrand.get()=="natwest_premier.js"||branding.getBrand.get()=="rbs_premier.js"){
              textProp["font-family"] = "RNHouseSansLight, sans-serif";  
              if(iebrowserval==true){
                textProp["font-family"] = '"rnhousesanslight",sans-serif'; 
             }                    
        }
       return textProp;    
   }, 
   //TABLE SHELF TEXT-COMP
   tableShelfTextComp  :function(size,iebrowserval,ieMacVal) {  
        var textProp = {}, property = brand.props;
        var textProp={
             'color':property.$table_shelf_textcolor,
            'line-height':'26px',
            'font-size':'18px',
            "font-family" : property.$font_family_shelf
            };
         if(branding.getBrand.get()=="natwest_premier.js"||branding.getBrand.get()=="rbs_premier.js"){
          textProp["font-family"] = "RNHouseSansLight, sans-serif";  
          if(iebrowserval==true){
            textProp["font-family"] = '"rnhousesanslight",sans-serif'; 
         }                    
        }       
       return textProp;       
    },  
    pageOverviewTextprops:function(size) {
        var textProp = {}, property = brand.props;
        var textProp={
            'color':'rgba(51, 51, 51, 1)',            
            //'font-size':'18px',
            'line-height':'26px'
            };
        if(branding.getBrand.get()=="natwest_premier.js"||branding.getBrand.get()=="rbs_premier.js"){
            textProp["font-family"] = "RNHouseSansLight, sans-serif";           
            textProp["font-weight"] = "400";                           
        }       
       return textProp;  
    },
    textCompsACt:function(size){
         var textProp = {}, property=brand.props,
             textProp={
                'line-height':"26px",
                'font-size':"18px"
            };
        return textProp;
    }, 
}

module.exports = {
    text: textProps
};