var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps={
    h1props:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'font-size':property.$h1_font_size_xl,
                'line-height':property.$h1_line_height_xl
            };
            if(size=="md"){
                titleProp['font-size'] = property.$h1_font_size_l;
                titleProp['line-height'] = property.$h1_line_height_l;
            }
            else if(size=="sm"){
                titleProp['font-size'] = property.$h1_font_size_m;
                titleProp['line-height'] = property.$h1_line_height_m;
            }
            else if(size=="xs"){
                titleProp['font-size'] = property.$h1_font_size_s;
                titleProp['line-height'] = property.$h1_line_height_s;
            }
         return titleProp;
    },
    h2props:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'font-size':property.$h1_font_size_xl,
                'line-height':property.$h1_line_height_xl
            };
            if(size=="md"){
                titleProp['font-size'] = property.$h1_font_size_l;
                titleProp['line-height'] = property.$h1_line_height_l;
            }
            else if(size=="sm"){
                titleProp['font-size'] = property.$h1_font_size_m;
                titleProp['line-height'] = property.$h1_line_height_m;
            }
            else if(size=="xs"){
                titleProp['font-size'] = property.$h1_font_size_s;
                titleProp['line-height'] = property.$h1_line_height_s;
            }
         return titleProp;
    },
    h2custprops:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'font-size':property.$h2_cust_font_size_xl,
                'line-height':property.$h2_cust_line_height_xl,
                'font-family':property.$h2cust_font_family,
                'font-weight':property.$h2cust_font_weight
            };
            if(size=="md"){
                titleProp['font-size'] = property.$h2_cust_font_size_l;
                titleProp['line-height'] = property.$h2_cust_line_height_l;
            }
            else if(size=="sm"){
                titleProp['font-size'] = property.$h2_cust_font_size_m;
                titleProp['line-height'] = property.$h2_cust_line_height_m;
            }
            else if(size=="xs"){
                titleProp['font-size'] = property.$h1_font_size_s;
                titleProp['line-height'] = property.$h1_line_height_s;
            }
         return titleProp;
    },
    h3props:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'font-size':property.$h3_font_size_xl,
                'line-height':property.$h3_line_height_xl                
            };
            if(size=="md"){
                titleProp['font-size'] = property.$h3_font_size_l;
                titleProp['line-height'] = property.$h3_line_height_l;
            }
            else if(size=="sm"){
                titleProp['font-size'] = "24px",
                titleProp['line-height'] = "32px"
            }
            else if(size=="xs"){
                titleProp['font-size'] = "24px",
                titleProp['line-height'] = "32px"
            }
         return titleProp;
    },
    h3custprops:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'font-size':"26px",
                'line-height':"34px"               
            };            
            if(size=="md"){
                titleProp['font-size'] =property.$h3_cust_font_size_l;
                titleProp['line-height'] =property.$h3_cust_line_height_l;
            }
            else if(size=="sm"){
                titleProp['font-size'] = "24px",
                titleProp['line-height'] = "32px"
            }
            else if(size=="xs"){
                titleProp['font-size'] = "24px",
                titleProp['line-height'] = "32px"
            }
            /*if(branding.getBrand.get()=="rbs_premier.js"||branding.getBrand.get()=="natwest_premier.js"){
              if(size=="lg"){
                titleProp['font-size'] =property.$h3_font_size_xl;
                titleProp['line-height'] =property.$h3_line_height_xl;  
              }  
              else if(size=="md") {
                titleProp['font-size'] =property.$h3_font_size_l;
                titleProp['line-height'] =property.$h3_line_height_l;  
              }                
            }*/
         return titleProp;
    },
    h4props:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'font-size':property.$h4_font_size_xl,
                'line-height':property.$h4_line_height_xl
            };
             if(size=="md"){
                titleProp['font-size'] =property.$h4_font_size_xl;
                titleProp['line-height'] =property.$h4_line_height_xl;
            }
            else if(size=="sm"){
                titleProp['font-size'] = "18px",
                titleProp['line-height'] = "26px"
            }
            else if(size=="xs"){
                titleProp['font-size'] = "18px",
                titleProp['line-height'] = "26px"
            }
         return titleProp;
    },
    h3whyus:function(size){
         var titleProp = {},property=brand.props,
             titleProp={
                'font-size':"18px",
                'line-height':"26px"
            };
            if(size=="xs"){
                titleProp['line-height'] = "24px"
            }
         return titleProp;
    },
    legalCopy:function(size){
          var titleProp = {},property=brand.props,
          titleProp={
                'font-size':property.$legal_copy_font_size,
                'line-height':property.$legal_copy_line_height,
                'color':"rgba(51, 51, 51, 1)"
            };
            return titleProp;
        },
    menuProps: function(size){
        var menuProps = {}, property = brand.props,
        menuProps = {
            'font-size' : property.$context_menu_link_fs,
            'line-height' : property.$context_menu_link_lh
        }
        return menuProps;
    },
    footerMenuProps: function(size){
         var menuProps = {}, property = brand.props,
        menuProps = {
            'font-size' : "14px",
            'line-height' : "24px"
        }
        return menuProps;
    },
    fontProperties : function(size){
        var fontProp = {}, property = brand.props,
        fontProp={
             "font-family": property.$font_family_shelf,
             //"font-weight":property.$font_weight_shelf
        };
        return fontProp;
      },
      bgPurpleProps : function(size){
        var fontProp = {}, property = brand.props,
        fontProp = {
          "color" : property.$primary_2,
          "font-family" : property.$font_family_shelf,
          "font-weight" : property.$font_weight_shelf
      };
        return fontProp;
      },
      /*Product detail*/
      productDetailfontProps : function(size){
        var fontProp = {}, property = brand.props,
        fontProp={
             "color": property.$font_color_differ,
             "font-family": property.$font_family_product,
             "font-weight":property.$font_weight_product
        };
        if(size=="xs"){
           fontProp["font-family"] = "RNHouseSansRegular, sans-serif";           
           fontProp["font-weight"] = "bold";
           if(branding.getBrand.get()=="rbs_premier.js"||branding.getBrand.get()=="natwest_premier.js"){
              fontProp["font-family"] = "RNHouseSansLight, sans-serif";
              fontProp["font-weight"] = "400";                     
            }
        }
        return fontProp;
      },
      bodyCopyProps : function(size){
        var fontProp = {}, property = brand.props,
        fontProp = {
          "font-size" : '18px',
          "line-height" : '26px'          
        };
        if(size=="sm"){
        //fontProp["font-size"] = "16px"; 
        }
        if(branding.getBrand.get()=="rbs_premier.js"){
          if(size=="sm"){     
            //  fontProp["font-size"] = "18px"; 
          }                    
        }
        return fontProp;
      },
      bodyCopyCustProps : function(size){
        var fontProp = {}, property = brand.props,
        fontProp = {
          "font-size" : '16px',
          "line-height" : '26px',
          "color" : property.$table_shelf_textcolor
      };
        return fontProp;
      },

  h4Custprops:function(size){
       var titleProp = {},property=brand.props,
           titleProp={
              'font-size':property.$h4Cust_font_size_xl,
              'line-height':property.$h4Cust_line_height_xl
          };
           if(size=="md"){
              titleProp['font-size'] =property.$h4Cust_font_size_l;
              titleProp['line-height'] =property.$h4Cust_line_height_l;
          }
          else if(size=="sm"){
              titleProp['font-size'] = property.$h4Cust_font_size_m,
              titleProp['line-height'] = property.$h4Cust_line_height_m
          }
          else if(size=="xs"){
              titleProp['font-size'] = property.$h4Cust_font_size_s,
              titleProp['line-height'] = property.$h4Cust_line_height_s
          }
       return titleProp;
    },
    productSingleprops:function(size){
       var titleProp = {},property=brand.props,
           titleProp={
              'font-size':property.$h3Cust_font_size_xl,
              'line-height':property.$h3Cust_line_height_xl               
          };
          if(size=="md"){
              titleProp['font-size'] =property.$h3Cust_font_size_l,
              titleProp['line-height'] =property.$h3Cust_line_height_l
          }
          else if(size=="sm"){
              titleProp['font-size'] = property.$h3Cust_font_size_ms,
              titleProp['line-height'] = property.$h3Cust_line_height_ms
          }
          else if(size=="xs"){
              titleProp['font-size'] = property.$h3Cust_font_size_ms,
              titleProp['line-height'] = property.$h3Cust_line_height_ms
          }
         
       return titleProp;
    }
  

}

module.exports = {
    globaltitle: cssProps
}