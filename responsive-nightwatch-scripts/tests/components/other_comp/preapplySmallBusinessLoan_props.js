var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get());

//article shelf props
var cssProps = {

//CLICK1_BLOCK1
    /*f2bgProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "background-color": property.$preapplyf2_bgColor
        };

        return shelfProps;
    },

    f2FourBtnbgProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "background-color": property.$bgColor
        };

        return shelfProps;
    },*/

    f2shelfPadProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "padding-top": "50px",
                "padding-bottom": "50px",
                "position": "relative"
            };
        if (size == "sm") {
            shelfProps["padding-top"] = "30px";
            shelfProps["padding-bottom"] = "30px";
        } else if (size == "xs") {
            shelfProps["padding-top"] = "30px";
            shelfProps["padding-bottom"] = "30px";
        }

        return shelfProps;
    },
    f2shelfTitleWrapProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "margin-bottom": "35px"
            };
        if (size == "sm") {
            shelfProps["margin-bottom"] = "30px";
        } else if (size == "xs") {
            shelfProps["margin-bottom"] = "30px";
        }

        return shelfProps;
    },

    f2shelfButtonWrapProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "height": "64px",
                "float": "left",
                "display": "block"
            };

        return shelfProps;
    },

    f2FourBtnChildProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "margin-right": "20px"
            };
            if (size == "sm") {
            shelfProps["margin-right"] = "10px";
        } else if (size == "xs") {
            shelfProps["margin-right"] = "10px";
        }

        return shelfProps;
    },

    f2FourBtnEvenChildProps: function(size) {
        var shelfProps = {},
            shelfProps = {
                "margin-top": "20px"
            };
            if (size == "sm") {
            shelfProps["margin-top"] = "10px";
        } else if (size == "xs") {
            shelfProps["margin-top"] = "10px";
        }

        return shelfProps;
    },

    f2shelfAppButtonProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "line-height": "26px",
            "padding": "6px 15px",
            "float": "left",
            "display": "block",
            "border-top-left-radius": property.$border_top_left_radius,
            "border-top-right-radius": property.$border_top_right_radius,
            "border-bottom-right-radius": property.$border_bottom_right_radius,
            "border-bottom-left-radius": property.$border_bottom_left_radius,
            "position": "relative"
        };
        if (size == "sm") {
            shelfProps["padding"] = "6px 10px";
        } else if (size == "xs") {
            shelfProps["padding"] = "6px 10px";
        }
        return shelfProps;
    },

    f2shelfAppButtonEvenProps: function(size) {
        var shelfProps = {},
            property = brand.props;
        shelfProps = {
            "line-height": "26px",
            "padding": "6px 15px",
            "float": "left",
            "display": "block",
            "border-top-left-radius": property.$EvenTogg_border_top_left_radius,
            "border-top-right-radius": property.$EvenTogg_border_top_right_radius,
            "border-bottom-right-radius": property.$EvenTogg_border_bottom_right_radius,
            "border-bottom-left-radius": property.$EvenTogg_border_bottom_left_radius,
            "position": "relative"
        };
        if (size == "sm") {
            shelfProps["padding"] = "6px 10px";
        } else if (size == "xs") {
            shelfProps["padding"] = "6px 10px";
        }
        return shelfProps;
    },


//CLICK1_BLOCK3

//article shelf props
    
    f2ArticleShelfPaddingNEW : function(size){
     var shelfProps = {}, 
            shelfProps = {
               "padding-top" : "97px",
               "padding-bottom" : "70px"
            };
            
             if(size=="sm"){
              shelfProps["padding-top"] = "82px";
              shelfProps["padding-bottom"] = "50px";
            }
            else if(size=="xs"){
              shelfProps["padding-top"] = "63px";
              shelfProps["padding-bottom"] = "50px";
            }
        return shelfProps;
   },

    f2ArticleShelfPaddingOLD : function(size){
     var shelfProps = {}, 
            shelfProps = {
               "padding-top" : "97px",
               "padding-bottom" : "35px"
            };
            
             if(size=="sm"){
              shelfProps["padding-top"] = "82px";
              shelfProps["padding-bottom"] = "30px";
            }
            else if(size=="xs"){
              shelfProps["padding-top"] = "63px";
              shelfProps["padding-bottom"] = "20px";
            }
        return shelfProps;
   },

   f2ArtShelfh3MarProps :  function(size){
     var shelfProps = {}, 
            shelfProps = {
               "margin-top" : "20px"
            };
        return shelfProps;
   },

   f2ArtShelfListProps :  function(size){
     var shelfProps = {}, 
            shelfProps = {
               "padding-left" : "26px"
            };
        return shelfProps;
   },

   f2SingleArtRTEProps : function(size){
     var shelfProps = {}, 
            shelfProps = {
               "margin-top" : "50px"
            };
             if(size=="sm"){
              shelfProps["margin-top"] = "30px";
            }
            else if(size=="xs"){
              shelfProps["margin-top"] = "30px";
            }
        return shelfProps;
   },

   f2ArtShelfSubProps: function(size){
     var shelfProps = {}, 
            shelfProps = {
               "margin-top" : "50px"
            };
            
             if(size=="sm"){
              shelfProps["margin-top"] = "30px";
            }
            else if(size=="xs"){
              shelfProps["margin-top"] = "30px";
            }
        return shelfProps;
   },

   f2PrimaryCTAMarProps: function(size){
     var shelfProps = {}, 
            shelfProps = {             
                "position": "relative",
                "margin-right": "0px",
                "padding-top": "6px",
                "padding-right": "0px",
                "padding-bottom": "6px",
                "padding-left": "0px",
                "margin-top": "35px"
            };

        return shelfProps;
   },

   f2PrimaryCTAProps: function(size){
     var shelfProps = {}, property = brand.props;
            shelfProps = {             
                "padding-top": property.$cta_padding_top,
                "padding-right": property.$cta_padding_right,
                "padding-bottom":property.$cta_padding_bottom,
                "padding-left":property.$cta_padding_left,
                "max-width": "292px",
                "min-width": "240px",
                "border-width": "0px",
                "line-height": "30px"
            };

        return shelfProps;
   },

   f2SecCTAMarProps: function(size){
     var shelfProps = {}, 
            shelfProps = {
                "display": "inline-block",           
                "padding-top": "6px",
                "padding-right": "0px",
                "padding-bottom": "6px",
                "padding-left": "0px",
                "margin-top": "20px",
                "text-decoration-line": "underline"
            };

        return shelfProps;
   },

   HoverstyleProps: function(size){
     var shelfProps = {}, 
            shelfProps = {
                "line-height":"32px"         
            };

        return shelfProps;
   },

   HoverProps: function(size){
     var shelfProps = {}, 
            shelfProps = {
                "text-decoration-line": "none"         
            };

        return shelfProps;
   },

//Downloadshelf 
   dShelfPaddingProps: function(size) {
        var shelfProps = {},
            
        shelfProps = {
            "padding-top": "97px",
            "padding-bottom": "30px"
            };
             if(size=="sm") {
              shelfProps["padding-top"] = "82px";
              shelfProps["padding-bottom"] = "30px";
            }
            else if(size=="xs") {
              shelfProps["padding-top"] = "63px";
              shelfProps["padding-bottom"] = "30px";
            }
       

        return shelfProps;
    },
    dTitleWrapperProps: function(size) {
        var shelfProps = {},
            
        shelfProps = {
            "margin-top": "14px"
        };
            if (size == "md") {
            shelfProps["margin-top"] = "10px";
        } else if (size == "sm") {
            shelfProps["margin-top"] = "10px";
        }
        else if (size == "xs") {
            shelfProps["margin-top"] = "12px";
        }

        return shelfProps;
    },
    dTextWrapperProps: function(size) {
        var shelfProps = {},
            
        shelfProps = {
            "margin-top": "20px"
        };
   
        return shelfProps;
    },
    dLinkWrapperProps: function(size) {
        var shelfProps = {},
            
        shelfProps = {
            "margin-top": "20px",
            "margin-bottom": "20px"
        };
   
        return shelfProps;
    },
    dLinkProps: function(size) {
        var shelfProps = {},
            
        shelfProps = {
        "font-size": "18px",
        "line-height": "26px",
        "margin-bottom": "18px"
        };
        if (size == "md") {
            shelfProps["margin-bottom"] = "20px";
        } else if (size == "sm") {
            shelfProps["margin-bottom"] = "20px";
        }
        else if (size == "xs") {
            shelfProps["margin-bottom"] = "20px";
        }

        return shelfProps;
    },

    f2SingleArtPContentProps :  function(size){
     var shelfProps = {}, 
            shelfProps = {
               "margin-top" : "20px",
               "margin-bottom" : "0px"
            };
        return shelfProps;
   },

    f2SecCTAClickProps : function(size){
     var shelfProps = {}, 
            shelfProps = {
               "text-decoration-line" : "underline"
            };
        return shelfProps;
   }


}



module.exports = {
    toggleShelfProps: cssProps
}