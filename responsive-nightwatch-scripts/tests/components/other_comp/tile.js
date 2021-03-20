var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
var cssProps={
     mainTitle:function(size){
        var mtitleProp = {},property=brand.props;
          mtitleProp = {
                'color':property.$stand_alone_title_color,
                'font-family':property.$winks_sildertit_font
            };      
         return mtitleProp;
    },
    mainBlock:function(size){
        var mblockProp = {},property=brand.props;
          mblockProp = {
                'margin-top':property.$winks_margtop_xl
            };      
            if(scr=="md"){
               mblockProp['margin-top'] = property.$winks_margtop_l;
            }
            else if(scr=="sm"){
               mblockProp['margin-top'] = property.$winks_margtop_m; 
            }
            else if(scr=="xs"){
               mblockProp['margin-top'] = property.$winks_margtop_s; 
            }
      return mblockProp;
    },
    tileBlock:function(size){
        var tileProp = {},property=brand.props,
            tileProp={
                'padding-top':property.$winks_slideritem_xl_pt,
                'padding-left':property.$winks_slideritem_xl_pl,
                'padding-right':property.$winks_slideritem_xl_pr,
                'padding-bottom':property.$winks_slideritem_xl_pb,
                'text-align':"center"
                //'height':property.$winks_slider_col_hgt_xl
            }; 
        
            if(size=="md"){
                tileProp['padding-top'] = property.$winks_slideritem_l_pt;
                tileProp['padding-left'] = property.$winks_slideritem_l_pl;
                tileProp['padding-right'] = property.$winks_slideritem_l_pr;
                tileProp['padding-bottom'] = property.$winks_slideritem_l_pb;
                //tileProp['height'] = property.$winks_slider_col_hgt_l;
            }
            else if(size=="sm"){
                tileProp['padding-top'] = property.$winks_slideritem_m_pt;
                tileProp['padding-left'] = property.$winks_slideritem_m_pl;
                tileProp['padding-right'] = property.$winks_slideritem_m_pr;
                tileProp['padding-bottom'] = property.$winks_slideritem_m_pb;
                //tileProp['height'] = property.$winks_slider_col_hgt_m;
            }
            else if(size=="xs"){
                tileProp['padding-top'] = property.$winks_slideritem_s_pt;
                tileProp['padding-left'] = property.$winks_slideritem_s_pl;
                tileProp['padding-right'] = property.$winks_slideritem_s_pr;
                tileProp['padding-bottom'] = property.$winks_slideritem_s_pb;
               // tileProp['height'] = property.$winks_slider_col_hgt_s;
            }      
         return tileProp;
    },
    contentHeight:function(size){
        var cblockProp = {},property=brand.props;
          cblockProp = {
                'height':property.natwest_image_theight_xl
            };      
            if(scr=="md"){
               cblockProp['height'] = property.natwest_image_theight_l;
            }
            else if(scr=="sm"){
               cblockProp['height'] = property.natwest_image_theight_m; 
            }
            else if(scr=="xs"){
               cblockProp['height'] = property.natwest_image_theight_s; 
            }
      return cblockProp;
    },
    contentBlock:function(size){
        var cblockProp = {},property=brand.props;
          cblockProp = {
                'margin-top':property.$winks_margtop_item_xl
            };      
            if(scr=="md"){
               cblockProp['margin-top'] = property.$winks_margtop_item_l;
            }
            else if(scr=="sm"){
               cblockProp['margin-top'] = property.$winks_margtop_item_m; 
            }
            else if(scr=="xs"){
               cblockProp['margin-top'] = property.$winks_margtop_item_s; 
            }
      return cblockProp;
    },
    ctaBlock:function(size){
        var cblockProp = {},property=brand.props;
          cblockProp = {
                'padding-top':property.natwest_image_padding_top_m,
                'padding-bottom':property.natwest_image_padding_bottom_m
            };      
            if(size=="xs"){
               cblockProp['padding-top'] =property.natwest_image_padding_top_s,
               cblockProp['padding-bottom'] =property.natwest_image_padding_bottom_s
            }
            
      return cblockProp;
    },
    tileTop:function(size){
        var ctileProp = {},property=brand.props;
          ctileProp = {
                'margin-top':property.$winks_title_top_xl  
          };
        if(size=="sm"){
           ctileProp['margin-top'] =property.$winks_title_top_m       
         }
      return ctileProp;
    }
}

module.exports = {
    text: cssProps
}