var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var ctaProps={
    ctaComps:function(size){
         var cssProp = {}, property=brand.props,
             cssProp={
                //color':"rgba(29, 123, 138, 1)",
                'color' : property.$winks_border_color,
                'line-height':"32px",
                'font-size':"18px",
                'border-bottom-color':property.$winks_border_color
            };           
        return cssProp;
    },
     toggleBtn:function(size){
         var cssProp = {},
            cssProp={     //rbs
                'border':'1px solid rgba(255,255,255, 1)',
                'border-radius':"0px",
               // "border-top-left-radius":"100px",
               // "border-bottom-left-radius":"100px",
                "float":"right",
                "padding":"18px 0px",
                "text-align": "center",
                "border": "1px solid rgb(255,255,255) ",
              //  "padding": "6px 12px",
             //  "border-radius": "4px"
              //  'border-bottom':'solid 1px'property.$winks-border
            };           
        return cssProp;
    },
     Btn:function(size){
          var cssProp={
                'display':'inline-block',
                'margin-bottom':"0",
                "font-weight":"normal",
                "text-align": "center",
                "vertical-align": "middle",
                "cursor": "pointer",
                "background-image": "none",
                "border": "1px solid rgb(255,255,255) ",
                "padding": "6px 12px",
                "font-size": "14px",
                "border-radius": "4px"
            };           
        return cssProp;
    },
    yellowToggle:function(size){
        var property=brand.props;
          var cssProp={
                'background-color': property.$yellow_toggle_color,
                'color':property.$font_color_regular,
                "border-top-left-radius":property.$border_top_left_radius,
                "border-bottom-left-radius":property.$border_bottom_left_radius,
                "border":property.$border_radius  
            };           
        return cssProp;
    },
    TogSelected:function(size){
        var property=brand.props;
          var cssProp={
                'background-color':property.$font_color_regular,
                'color':property.$primary_2 
            };           
        return cssProp;
    },
    ctaCheck:function(){
        var cssProp = {}, property=brand.props,
             cssProp={
                 'width':'12px',
                 'height':'12px',
                 'margin':'0px 5px',
                 'padding':'0px'
            };           
        return cssProp; 
    },
    togglewrapperProps:function(size){
        var prop={};
      prop={
        'margin-bottom': '34px'
      };
      if(size=='lg'){
        prop['margin-bottom']='30px';
      }
      else if(size=='xs'){
        prop['margin-bottom']= '25px';
      }
    return prop;
  },
  anchorProps:function(size){
    var prop={};
    var property = brand.props;
    prop={
      'background-color': property.$cta_bg,
      'border-radius': property.$cta_bor_rad,
            'color': 'rgba(255, 255, 255, 1)',
            'font-size': '18px',
            'line-height': property.$cta_lineh,
            'padding': '17px 20px',
            'display': 'block'
      };
    if(size=='xs'){
      prop['padding']='19px 20px';
    }
    return prop;
  },
  sectogglewrapperProps:function(size){
        var prop={};
    prop={
      'margin-bottom': '34px'
    };
    if(size=='md'){
      prop['margin-bottom']='4px';
    }
    else if(size=='sm'){
      prop['margin-bottom']= '0px';
    }
    else if(size=='xs'){
      prop['margin-bottom']= '30px';
    }
    return prop;
  },
  atagProps:function(size){
    var prop={};
    prop={
      'color': 'rgba(255, 255, 255, 1)',
            'font-size': '18px',
            'line-height': '30px',
            'text-align': 'left',
            'text-decoration': 'underline solid rgb(255, 255, 255)'
      };
    return prop;
  },
  //Secondary cta--props check
   ctaSarticle:function(size){
    var prop={};
    prop={
            'color': property.$linkcolor,
            'font-size': '18px',
            'line-height': '32px',
            'display': 'inline-block',
            'padding' : '6px 0px',
            'margin-top': '20px'

      };
    return prop;
  },

   ctaPrimary:function(size){
    var prop={};
    prop={
            'color': 'rgba(255, 255, 255, 1)',
            'font-size': '18px',
            'line-height': '30px',
            'display': 'block',
            'padding' : '15px 20px',
            'width': '240px',
            'height' : '60px',
            'text-align': 'center'

      };
    return prop;
  },
  

};
module.exports = {
    cta: ctaProps
};