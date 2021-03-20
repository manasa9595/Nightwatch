var branding = require('../branding/getBrand.js'),
    brand = require('../branding/'+branding.getBrand.get());
module.exports = {
  //url:'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-personal/stand_alone_shelf.html',
  url:"https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-premier/standalone.html",
  elements : {
    shelfWrapper:{
      selector:".shelf_standAlone .standalone-wrapper"
    },
    iconWrapper:{
      selector:".shelf_standAlone.with_title .iconWrapper svg"
    },
    iconWrapperS:{
      selector:".shelf_standAlone.without_title .iconWrapper svg"
    },
    titleWrapper:{
      selector:".shelf_standAlone .titleWrapper"
    },
    titText:{
      selector:".shelf_standAlone .titleWrapper h3"
    },
    textWrapper:{
      selector:".shelf_standAlone.with_title .textWrapper"
    },
    textWrapWithoutTit:{
      selector:".shelf_standAlone.without_title .textWrapper"
    },
    shelfBg:{
      selector:".shelf_standAlone.sa-bgWhite"
    },
    shelfBgGrey:{
      selector:".shelf_standAlone.with_title.sa-bgGrey, .without_title.sa-bgGrey .standalone-wrapper"
    },
    legalCpy:{
      selector:".textWrapper.legal-copy"
    },
    textWrap:{  //text wrapper without title
      selector:".shelf_standAlone.without_title .standalone-wrapper .textWrapper"
    },
    pinkIcon:{
      selector:".shelf_standAlone.sa-bgGrey .iconWrapper svg path:nth-child(2)"
    },
    yellowIcon:{
      selector:".shelf_standAlone.sa-bgWhite .iconWrapper svg path:nth-child(2)"
    },
    shelfBackGround:{
      selector:".shelf_standAlone.with_title.sa-bgGrey"
    },
    richtextsel:{
      selector:".comp-rich-text a"
    }
  },

};
  /*commands:[{
      StandalonetitCheck:function(client,selector,props,size){
          let scr=size;
          client.elements('css selector',selector,function(result){
              Standalonetit(result,client,selector,props,scr);
          });
      },
      textWrapCheck:function(client,selector,props,size){
          let scr=size;
          client.elements('css selector',selector,function(result){
              textWrapProps(result,client,selector,props,scr);
          });
      },
      bgColorCheck:function(client,selector,props,size){
          let scr=size;
          client.elements('css selector',selector,function(result){
              bgSmokeProps(result,client,selector,props,scr);
          });
      },
      ColorCheck:function(client,selector,props,size){
          let scr=size;
          client.elements('css selector',selector,function(result){
              pinkColProps(result,client,selector,props,scr);
          });
      },


   }]    
    
    
};

var Standalonetit=function(res,client,sel,props,scr){
     var sizeLen = Object.keys(props).length,keys=Object.keys(props);
    res.value.forEach(function(element,index){
      
        if(index==1){  
           var props1=iconProps1(scr);
           for(key in props1){
            let currentVal=props1[key],test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
           }
        }
        else if(index==2){
          var props1=iconProps2(scr);
           for(key in props1){
            let currentVal=props1[key],test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
           }
       }else if(index==3){
          var props1=iconProps3(scr);
           for(key in props1){
            let currentVal=props1[key],test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
       }
        }
        else{
           for(key in props){
           let currentVal=props[key], test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
          }
        }
    });
};
var textWrapProps=function(res,client,sel,props,scr){
     var sizeLen = Object.keys(props).length,keys=Object.keys(props);
    res.value.forEach(function(element,index){
        if((index==1)||(index==3)){  
           var props1=texProps(scr);
           for(key in props1){
            let currentVal=props1[key],test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
           }
        }
        else{
           for(key in props){
           let currentVal=props[key], test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
          }
        }
    });
};
var bgSmokeProps=function(res,client,sel,props,scr){
     var sizeLen = Object.keys(props).length,keys=Object.keys(props);
    res.value.forEach(function(element,index){
        if(index==0){  
           var props1=bgColor(scr);
           for(key in props1){
            let currentVal=props1[key],test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
           }
        }
        else if(index==3){
          var props1=bgColor3(scr);
           for(key in props1){
            let currentVal=props1[key],test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
           }

        }
        else{
           for(key in props){
           let currentVal=props[key], test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
          }
        }
    });
};
var pinkColProps=function(res,client,sel,props,scr){
     var sizeLen = Object.keys(props).length,keys=Object.keys(props);
    res.value.forEach(function(element,index){
        if((index==0) || (index==3)){  
           var props1=pinkProps(scr);
           for(key in props1){
            let currentVal=props1[key],test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
           }
        }
        else{
           for(key in props){
           let currentVal=props[key], test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
          }
        }
    });
};






var iconProps1=function(size){
        var imgProps = {},
        imgProps = {
            "width": "36px",
            "height" : "35px",
            "margin-left": "0px",
            "display": "block",
            "float": "left"
         };
         if(size=="xs"){
            imgProps["position"] = "relative";
            imgProps["padding-left"] = "10px";
            imgProps["padding-right"] = "10px";
            imgProps["margin-left"] = "0px";
        }
        return imgProps;  
 };
 var iconProps2=function(size){
        var imgProps = {},
        imgProps = {
            "width": "36px",
            "height" : "35px",
            "margin-left": "33px",
            "display": "block",
            "float": "left"
         };
         if(size=="md"){
            imgProps["margin-left"] = "0px";
        }else if(size=="sm"){
          imgProps["width"] = "31px";
          imgProps["height"] = "30px";
          imgProps["margin-left"] = "0px";
          imgProps["display"] = "block";
          imgProps["float"] = "left";
        }else if(size=="xs"){
            imgProps["position"] = "relative";
            imgProps["padding-left"] = "10px";
            imgProps["padding-right"] = "10px";
            imgProps["margin-left"] = "0px";
        }
        return imgProps;  
 };
 var iconProps3=function(size){
        var imgProps = {}, property = brand.props,
        imgProps = {
            "width": property.$standalone_icon_width,
            "height" : "35px",
            "margin-left": "0px",
            "display": "block",
            "float": "left"
         };
         if(size=="sm"){
            imgProps["width"] = "31px";
          imgProps["margin-left"] = "0px";
        }else if(size=="xs"){
            imgProps["position"] = "relative";
            imgProps["padding-left"] = "10px";
            imgProps["padding-right"] = "10px";
            imgProps["margin-left"] = "0px"; 
        }
        return imgProps;  
 };


 var texProps = function(size){ //text wrapper without title
      var textProps = {},
        textProps = {
            "margin-top" : "17px",
            "float": "left",
            "margin-left": "30px"
        };
         if(size=="sm"){
            textProps["margin-top"] = "13px";
            textProps["padding-top"] = "0px";
        }else if(size=="xs"){
       textProps["float"] =  "left";
       textProps["margin-left"] = "0px";
       textProps["padding-left"] = "10px";
       textProps["padding-right"] = "10px";
       textProps["margin-top"] = "9px";
}
  return textProps;
 };
 var bgColor = function(size){ 
      var bgProps = {},
        bgProps = {
            "background-color" :"rgba(245, 245, 245, 1)"//white smoke
        };
  return bgProps;
 };
 var bgColor3 = function(size){ 
      var bgProps = {},
        bgProps = {
            "background-color" :"rgba(255, 255, 255, 1)"
        }; 
        if(size=="xs"){
          bgProps["background-color"] = "rgba(245, 245, 245, 1)"
        }
  return bgProps;
 };
var pinkProps = function(){
        var imgProps = {}, property = brand.props,
        imgProps = {
          "fill": property.$standalone_icon_pink
         };
        return imgProps;
    };*/


      



 