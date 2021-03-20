//var template = require('../../branding/globaltitle/natwest.js');
var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());



var cssProps={
    titleComp:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'color':property.$stand_alone_title_color,
                'line-height':property.$winks_title_lh_xl,
                'font-size':property.$winks_title_fs_xl,
                'font-family':property.$font_family_regular,
                'margin':"0px",
                'max-height':property.$winks_title_max_h_xl
            };
            if(size=="md"){
                titleProp['line-height'] = property.$winks_title_lh_l;
                titleProp['font-size'] = property.$winks_title_fs_l;
                titleProp['max-height'] = property.$winks_title_max_h_l;
            }
            else if(size=="sm"){
                titleProp['line-height'] = property.$winks_title_lh_m;
                titleProp['font-size'] = property.$winks_title_fs_m;
                titleProp['max-height'] = property.$winks_title_max_h_m;
            }
            else if(size=="xs"){
                titleProp['line-height'] = property.$winks_title_lh_s;
                titleProp['font-size'] = property.$winks_title_fs_s;
                titleProp['max-height'] = property.$winks_title_max_h_s;
            }
         return titleProp;
     },
    /* -- AT A GLANCE Shelf Title Properties -- */
     titleCompG:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'color':property.$ataglance_title_color,
                'line-height':property.$ataglance_title_lh,
                'font-size':property.$ataglance_title_fs,
                'font-family':property.$font_family_regular,
                'margin':"0px",
                'max-height':property.$ataglance_title_max_ht
            };
            if(size=="md"){
                titleProp['line-height'] = property.$ataglance_title_lh_l;
                titleProp['font-size'] = property.$ataglance_title_fs_l;
                titleProp['max-height'] = property.$ataglance_title_max_ht_l;
            }
            else if(size=="sm"){
                titleProp['line-height'] = property.$ataglance_title_lh_m;
                titleProp['font-size'] = property.$ataglance_title_fs_m;
                titleProp['max-height'] = property.$ataglance_title_max_ht_m;
            }
            else if(size=="xs"){
                titleProp['line-height'] = property.$ataglance_title_lh_s;
                titleProp['font-size'] = property.$ataglance_title_fs_s;
                titleProp['max-height'] = property.$ataglance_title_max_ht_s;
            }
         return titleProp;
     },
    /* -- Product Detail Shelf Title Properties -- */
     titleCompP:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'color':property.$ataglance_title_color,
                'line-height':property.$product_title_lh,
                'font-size':property.$product_title_fs,
                'font-family':property.$font_family_regular,
                'margin-bottom':property.$product_title_mar_bt
            };
            if(size=="md"){
                titleProp['line-height'] = property.$product_title_lh_l;
                titleProp['font-size'] = property.$product_title_fs_l;
                titleProp['margin-bottom'] = property.$product_title_mar_bt_l;
            }
            else if(size=="sm"){
                titleProp['line-height'] = property.$product_title_lh_m;
                titleProp['font-size'] = property.$product_title_fs_m;
                titleProp['margin-bottom'] = property.$product_title_mar_bt_m;
            }
            else if(size=="xs"){
                titleProp['line-height'] = property.$product_title_lh_s;
                titleProp['font-size'] = property.$product_title_fs_s;
                titleProp['margin-bottom'] = property.$product_title_mar_bt_s;
            }
         return titleProp;
     },
    //ready to apply- title properties
    titlewrap1:function(size){
        var titleProp={
                'margin-top':"40px",
                'margin-bottom':"50px"
            };
            if(size=="md"){
                titleProp['margin-top'] = "40px";
                titleProp['margin-bottom'] ="40px";
            }
            else if(size=="sm"||size=="xs"){
                titleProp['margin-top'] = "20px";
                titleProp['margin-bottom'] = "30px";
            }
         return titleProp;
     },
     titleText1:function(size){
        var property =  brand.props;
          var titleProp={
                'color':"rgba(68, 14, 94, 1)",
                'font-family':property.$font_family_regular
                };
         return titleProp;
     },
     titlewrap2:function(size){
        var titleProp={
                'margin-top':"50px",
                'margin-bottom':"50px"
            };
            if(size=="md"){
                titleProp['margin-top'] = "40px";
                titleProp['margin-bottom'] ="40px";
            }
            else if(size=="sm"||size=="xs"){
                titleProp['margin-top'] = "20px";
                titleProp['margin-bottom'] = "30px";
            }
         return titleProp;
     },
     titleText2:function(size){
         var property = brand.props;
        var titleProp={
                'color':property.$primary_2,
                'font-family':property.$font_family_regular
                };
         return titleProp;
     },
     titlewrap3:function(size){
        var titleProp={
                'margin-bottom':"28px"
            };
            if(size=="sm"){
               titleProp['margin-bottom'] = "28px";
            }
             else if(size=="xs"){
               titleProp['margin-top'] = "20px";
               titleProp['margin-bottom'] = "20px"
            }
         return titleProp;
     },
      titleText3:function(size){
        var property= brand.props;
        var titleProp={
                'color':property.$font_color_regular,
                'font-family':property.$font_family_regular,
                //'margin':"0",
               //'font-weight':property.$font_weight_title_text
                };
            if(branding.getBrand.get()=="rbs_premier.js"||branding.getBrand.get()=="natwest_premier.js"){
               titleProp["font-family"] = property.$font_family_light;                       
            }
            
           return titleProp;
     },
     titlewrap4:function(size){
        var titleProp={
                'margin-bottom':"18px"
            };
            if(size=="xs"){
                titleProp['margin-top'] = "0px";
               titleProp['margin-bottom'] = "20px";
            }
         return titleProp;
     },
    
     titlewrap5:function(size){
        var property=brand.props;
        var titleProp={
                'margin-top':property.$title_wrap_mt_xl,
               'margin-bottom':"42px"
           };
            if(size=="md"){
                titleProp['margin-top'] = property.$title_wrap_mt_l;
                titleProp['margin-bottom'] = "30px";
            }
            else if(size=="sm"){
                titleProp['margin-top'] = "30px";
                titleProp['margin-bottom'] = "20px";
            }
             else if(size=="xs"){
                titleProp['margin-top'] = property.$title_wrap_mt_xs;
                titleProp['margin-bottom'] = "20px";
            }
         return titleProp;
     },
     headBlockTitWrap:function(size){
        var property=brand.props;
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
       if(size=="sm"){
        headBlockWrapper["margin-top"]  = "40px";
        headBlockWrapper["margin-bottom"] ="30px";
       }
       else if(size=="xs"){
         headBlockWrapper["margin-top"] = "30px";
         headBlockWrapper["margin-top"] = "40px"
       }
       return headBlockWrapper;
    },
     titlewrap6:function(size){
        var titleProp={
                'margin-bottom':"28px"
            };
             if(size=="xs"){
               titleProp['margin-top'] = "20px";
               titleProp['margin-bottom'] = "40px";
            }
         return titleProp;
     },
     /*titlewrap7:function(size){
        var titleProp={
                'margin-top':"50px",
               'margin-bottom':"42px"
           };
            if(size=="md"||size=="sm"){
                titleProp['margin-top'] = "40px";
                titleProp['margin-bottom'] = "30px";
            }
             else if(size=="xs"){
                titleProp['margin-top'] = "30px";
                titleProp['margin-bottom'] = "20px";
            }
         return titleProp;
     }*/
     
     //>>-----do we know title properties---------//
     titlewrapperProps:function(size){
                var prop={};
        prop={
            'margin-top': '30px',
            'margin-bottom': '36px'
        };
        if(size=='md'){
            prop['margin-top']='4px';
        }
        else if(size=='sm'){
            prop['margin-top']='0px';
            prop['margin-bottom']= '34px';
        }
        else if(size=='xs'){
            prop['margin-top']='10px';
            prop['margin-bottom']= '25px';
        }
        return prop;
    },
    h3Props:function(size){
        var prop={};
        var property = brand.props;
        prop={
            'font-size': property.$h3_font_size_m,
            'line-height': property.$h3_line_height_m,
            'color': 'rgba(255, 255, 255, 1)',
            'font-family': 'RNHouseSansRegular, sans-serif'
        };
        if(size=='lg'){
            prop['font-size']=property.$h3_font_size_xl;
            prop['line-height']=property.$h3_line_height_xl;
        }
        else if(size=='md'){
            prop['font-size']=property.$h3_font_size_l;
            prop['line-height']=property.$h3_line_height_l;
        }
        return prop;
    },
    bgProps:function(size){
        var prop={};
        var property = brand.props;
        prop={
            'background-color': property.$main_bg,
            'padding-top': '20px',
            'padding-bottom': '20px'
        };
        if(size=='md'){
            prop['padding-top']='36px';
            prop['padding-bottom']='36px';
        }
        else if(size=='sm'){
            prop['padding-top']='30px';
            prop['padding-bottom']='30px';
        }
        else if(size=='xs'){
            prop['padding-top']='20px';
            prop['padding-bottom']='0px';
        }
        return prop;
    },
    viotitlewrapperProps:function(size){
                var prop={};
        prop={
            'margin-top': '31px',
            'margin-bottom': '40px'
        };
        if(size=='md'){
            prop['margin-bottom']='30px';
        }
        else if(size=='sm'){
            prop['margin-top']='20px';
            prop['margin-bottom']= '34px';
        }
        else if(size=='xs'){
            prop['margin-top']='20px';
            prop['margin-bottom']= '20px';
        }
        return prop;
    },
    viotitlewrapperProps2:function(size){
                var prop={};
        prop={
            'margin-top': '50px',
            'margin-bottom': '40px'
        };
        if(size=='md'){
            prop['margin-top']='40px';
            prop['margin-bottom']='30px';
        }
        else if(size=='sm'){
            prop['margin-top']='30px';
            prop['margin-bottom']= '34px';
        }
        else if(size=='xs'){
            prop['margin-top']='30px';
            prop['margin-bottom']= '20px';
        }
        return prop;
    },
    vioh3Props:function(size){
        var prop={};
        var property = brand.props;
        prop={
            'font-size': property.$h3_font_size_m,
            'line-height': property.$h3_line_height_m,
            'color': 'rgba(255, 255, 255, 1)',
            'font-family': property.$font_family_bold,
            'font-weight': property.$title_f_weight,
            'margin': '0px'
        };
        if(size=='lg'){
            prop['font-size']=property.$h3_font_size_xl;
            prop['line-height']=property.$h3_line_height_xl;
        }
        else if(size=='md'){
            prop['font-size']=property.$h3_font_size_l;
            prop['line-height']=property.$h3_line_height_l;
        }
        return prop;
    },
    viobgProps:function(size){
        var prop={};
        var property = brand.props;
        prop={
            'background-color': property.$viomain_bg,
        };
        return prop;
    },
    viobgpaddingProps:function(size){
        var prop={};
        var property = brand.props;
        prop={
            'padding-top': property.$dwku_top_xl
        };
        if(size=='md'){
            prop['padding-top']=property.$dwku_top_l;
        }
        else if(size=='sm'){
            prop['padding-top']=property.$dwku_top_m;
        }
        else if(size=='xs'){
            prop['padding-top']=property.$dwku_top_s;
        }
        return prop;
    },

   //>>----------title standalone properties-------->>//
     titleStandalone: function(size){
        var titleProps = {}, property = brand.props,
        titleProps = {
            "margin-left": "30px",
            "margin-top": property.$standalone_title_mt,
            "display": "block",
            "float": "left"
        };
        if(size=="sm"){
            titleProps["margin-top"] = property.$standalone_title_sm;
        }else if(size=="xs"){
            titleProps["position"] = "relative";
            titleProps["float"] = "left";
            titleProps["margin-left"] = "0px";
            titleProps["padding-left"] = "10px";
            titleProps["padding-right"] = "10px";
            titleProps["margin-bottom"] = property.$standalone_title_mb;
            titleProps["display"] = "block";
            titleProps["margin-top"]= "4px";

        }
        return titleProps;
    },
    //>-----CONTEXUAL LINKS title wrapper props---->
    titleLink: function(size) {
        var titleProps = {},
            property = brand.props,
            titleProps = {
                "margin-top": property.$context_link_mt_xl,
                "margin-bottom": property.$context_link_mb_xl
            };
        if (size == "md") {
            titleProps["margin-top"] = property.$context_link_mt_l;
            titleProps["margin-bottom"] = property.$context_link_mb_l;

        } else if (size == "sm") {
            titleProps["margin-top"] = property.$context_link_mt_m;
            titleProps["margin-bottom"] = property.$context_link_mb_m;
        } else if (size == "xs") {
            titleProps["margin-top"] = property.$context_link_mt_s;
            titleProps["margin-bottom"] = property.$context_link_mb_s;

        }
        return titleProps;
    },
    /*titleLink : function(){
        var titleProps = {}, property = brand.props,
        titleProps = {
            "margin-top": "78px",
            "margin-bottom": "60px"
            
       }
      return titleProps;
    },*/
    //>---------IN-PAGE-NAVIGATION----------->//
    titleNav: function(size){
        var titleProps = {},
            property = brand.props,
            titleProps = {
                'margin-top': '20px',
                'margin-bottom': '14px',
                //'padding-left': '8px',
                'padding-right': '12px'   
            };
             if (size== "sm") {
            titleProps["padding-left"] = '32px';
            titleProps["padding-right"] = '12px';
            titleProps["margin-left"] = '-24px';
            titleProps["margin-right"] = '-15px';

        }  else if (size == "xs") {
            titleProps["padding-left"] = '20px';
            titleProps["padding-right"] = '0px';
            titleProps["margin-left"] = '0px';
            titleProps["margin-right"] = '0px'

        }
        return titleProps;
    },

     //credit card props
    cctitlewrapperProps:function(size){
                var prop={},
                    property = brand.props,
        prop={
            'color': property.$primary_1,
            'font-family':property.$font_family_regular,
            'font-weight':property.$font_weight_title_text
        };
        return prop;
    },
    cctitlecompProps:function(size){
                var prop={};
                
        prop={
            'margin-top':'70px'
        };
         if(size=='md'){
            prop['margin-top']='62px';
        }
        else if(size=='sm'){
            prop['margin-top']='50px';
        }
        else if(size=='xs'){
            prop['margin-top']='50px';
        }
        return prop;
    },
    ccsubtitlecompProps:function(size){
                var prop={},
                
        prop={
            'margin-top':'35px',
            'margin-bottom':'40px'
        };
         if(size=='md'){
            prop['margin-top']='20px';
            prop['margin-bottom']='36px';
        }
        else if(size=='sm'){
             prop['margin-top']='20px';
            prop['margin-bottom']='12px';
        }
        else if(size=='xs'){
             prop['margin-top']='20px';
            prop['margin-bottom']='12px';
        }
        return prop;
    },

    cctooltipProps:function(size){
                var prop={},
                
        prop={
            'width' : '32px',
            'height' : '32px',
            'margin':'0px 0px 0px 20px'
            
        };
         if(size=='md'){
            prop['height'] = '26px';
            prop['width'] = '26px';
            prop['margin']='5px 0px 5px 20px';
        }
        else if(size=='sm'){
             prop['height'] = '28px';
            prop['width'] = '28px';
             prop['margin']='0px 0px 0px 20px';
        }
        else if(size=='xs'){
             prop['height'] = '20px';
            prop['width'] = '20px';
           prop['margin']='4px 0px 4px 20px';
        }
        return prop;
    },

    cccardtitlecompProps:function(size){
                var prop={},
                
        prop={
            'margin-bottom' : '20px'
        };
        return prop;
    },
    cccardtitle1compProps:function(size){
                var prop={};
                
        prop={
            'margin-top':'92px'
        };
         if(size=='md'){
            prop['margin-top']='71px';
        }
        else if(size=='sm'){
            prop['margin-top']='72px';
        }
        else if(size=='xs'){
            prop['margin-top']='56px';
        }
        return prop;
    },
    cccardtitle2compProps:function(size){
                var prop={};
                
        prop={
            'margin-top':'34px'
        };
         if(size=='md'){
            prop['margin-top']='35px';
        }
        else if(size=='sm'){
            prop['margin-top']='32px';
        }
        else if(size=='xs'){
            prop['margin-top']='30px';
        }
        return prop;
    },
    cccardtitle3compProps:function(size){
                var prop={};
                
        prop={
            'margin-top':'21px'
        };
         if(size=='md'){
            prop['margin-top']='15px';
        }
        else if(size=='sm'){
            prop['margin-top']='12px';
        }
        else if(size=='xs'){
            prop['margin-top']='10px';
        }
        return prop;
    },
     cccardtitle4compProps:function(size){
                var prop={};
                
        prop={
            'margin-top':'20px',
            'margin-left':'1px'
        };
         if(size=='md'){
            prop['margin-left']='2px';

        }
        else if(size=='sm'){
            prop['margin-top']='30px';
            prop['margin-left']='15px';
        }
        else if(size=='xs'){
            prop['margin']='0px';
           
        }
        return prop;
    },



    ///PRODUCT DETAIL TAB COMPONENT
     rightH3Props : function(size) {
        var property = brand.props;
        var shelfProps={
            'font-family': 'RNHouseSansRegular, sans-serif',
            'font-size': '26px',
            'line-height': '34px',
            'color': 'rgba(255, 255, 255, 1)'
            };
            if(size=="md"||size=="sm"||size=="xs"){
               shelfProps["font-size"] = "24px";
                shelfProps["line-height"] = "32px";
            }
            if(branding.getBrand.get()=="rbs_premier.js"||branding.getBrand.get()=="natwest_premier.js"){
               shelfProps["font-family"] = "RNHouseSansLight, sans-serif"; 
            }
            if(branding.getBrand.get()=="rbs_premier.js"){
                shelfProps["font-family"] = "RNHouseSansLight, sans-serif";
            }
       return  shelfProps;
   },
   titWrapProps : function(size) {
        var textProp = {}, property = brand.props;
        var textProp={
            'margin-bottom': '20px',
          //  'max-height' : '68px',
            'overflow' : 'hidden'
            };
       return textProp;
    },

    //ARTICLE SHELF TITLE PROPS
    artTitle : function(size) {
        var Prop = {}, property = brand.props;
        var Prop={
            'margin-bottom': '20px'
            };
       return Prop;
    },
   

}
module.exports = {
    text: cssProps
}