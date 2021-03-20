module.exports = {
   //natwest url
  //url:'https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-personal/regression/shelves-reg-2.html',
  //rbs url
  //url: 'https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-personal/regression/final_reg_2.html',
  url: 'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-premier/Sprint1-Demo.html',
  elements : {
    linkBgClr:{
      selector:".comp-contextualMenu"
    },
    titWrapper:{
      selector:".comp-contextualMenu .title-wrapper"
    },
    menuLink:{
      selector:".comp-contextualMenu .contextual-menu-link a"
    },
    menuHover : {
      selector:".comp-contextualMenu div.contextual-menu-link"
    },
    dividerLine:{
      selector:".comp-contextualMenu .divider-line"
    },
    footerWrap:{
      selector:".comp-footer-wrapper"
    },
    footerLinks:{
      selector:".comp-footer-wrapper .footer-links a"
    },
    footerIcons : {
      selector : ".comp-footer-wrapper .footer-social-icon .social-icon-link.desktop-pull-left"
    },
    footerFb : {
      selector : ".comp-footer-wrapper .footer-social-icon .social-icon-link .icon-facebook"
    },
    iconCls : {
      selector : ".comp-footer-wrapper .footer-social-icon .social-icon-link a"
    },
    footerBanner : {
      selector :".comp-footer-wrapper .footer-social-icon .footer-fscs.desktop-pull-right"
    },
    footerHover :{
      selector : ".row.footer-links a"
    }
  },
commands:[{
      iconsCheck:function(client,selector,props,size){
          let scr=size;
          client.elements('css selector',selector,function(result){
              iconTwitter(result,client,selector,props,scr);
          });
      },
    }] 
};

var iconTwitter=function(res,client,sel,props,scr){
     var sizeLen = Object.keys(props).length,keys=Object.keys(props);
    res.value.forEach(function(element,index){
      
        if(index==1){  
           var props1=iconTwProps(scr);
           for(key in props1){
            let currentVal=props1[key],test=key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
           }
        }
        if(index==2){  
           var props1=bannerProps(scr);
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
var iconTwProps=function(size){
        var imgProps = {},
        imgProps = {
            "width": "50px",
            "height" : "50px",
            "display": "block"
         };
        return imgProps;  
 };
var bannerProps = function(size){
       var imgProps = {},
        imgProps = {
            "width": "146px",
            "height" : "35px",
            "display": "block"
         };
        return imgProps;    

}



 