var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

var cssProps = {
    shelfPadProps :function(size) {
        var property = brand.props;
        var errorProps = {
           "padding-top" : "70px",
           "padding-bottom" : "70px"
        };
        if (size == "sm" || size == "xs") {
            errorProps["padding-top"] = "50px";
            errorProps["padding-bottom"] = "50px";
        }
        return errorProps;
   },

   imgMarginProps :function(size) {
        var property = brand.props;
        var errorProps = {
           "margin-bottom" : "50px"
        };
        if (size == "sm" || size == "xs") {
            errorProps["margin-bottom"] = "30px";
        }
        return errorProps;
   },

   imgSizeProps :function(size) {
        var property = brand.props;
        var errorProps = {
        	"width" : property.$errorPage_img_width,
        	"height" : property.$errorPage_img_height
        };
        return errorProps;
   },

   titleMarginProps :function(size) {
        var property = brand.props;
        var errorProps = {
           "margin-bottom" : "20px"
        };
        return errorProps;
   },

   shelfTitleProps :function(size) {
        var property = brand.props;
        var errorProps = {
           "color" : property.$errorPage_title_color,
           "font-family" : property.$errorPage_title_family
        };
        return errorProps;
   },

   searchMarginProps :function(size) {
        var property = brand.props;
        var errorProps = {
           "margin-top" : "35px"
        };
        if (size == "sm" || size == "xs") {
            errorProps["margin-top"] = "30px";
        }
        return errorProps;
   },

   shelfTextProps :function(size) {
        var property = brand.props;
        var errorProps = {
           "color" : property.$errorPage_text_color
        };
        return errorProps;
   },

   searchPaddingProps :function(size) {
        var property = brand.props;
        var errorProps = {
           "padding-top" : property.$searchText_padding_top,
           "padding-right" : property.$searchText_padding_right,
           "padding-bottom" : property.$searchText_padding_bottom,
           "padding-left" : property.$searchText_padding_left
        };
        if (size == "sm" || size == "xs") {
            errorProps["padding-top"] = property.$searchText_padding_top_med;
            errorProps["padding-right"] = property.$searchText_padding_right_med;
            errorProps["padding-bottom"] = property.$searchText_padding_bottom_med;
            errorProps["padding-left"] = property.$searchText_padding_left_med;
        }
        return errorProps;
   },

   searchTextProps :function(size) {
        var property = brand.props;
        var errorProps = {
           "color" : property.$errorPage_searchText_color
        };
        return errorProps;
   },
    messageOnlyHeaderProps :function(size) {
        var property = brand.props;
        var errorProps = {
          "height": "60px",
          "background-color": property.$primary_1,
          "text-align": "center"
        };
        return errorProps;
   },
    messageOnlyHeaderImgProps :function(size) {
        var property = brand.props;
        var errorProps = {
           "height" : property.$msgOnly_headerImg_height,
           "width" : property.$msgOnly_headerImg_width,
           "margin-top" : "20px"           
        };
        return errorProps;
   }

 }

module.exports = {
    errorPageProps: cssProps
}