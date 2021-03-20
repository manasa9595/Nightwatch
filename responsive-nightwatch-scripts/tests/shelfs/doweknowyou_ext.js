var titleComp =require('../components/title/title.js'),
   props = require('../components/other_comp/readytoapply_props.js'),
   ctaProps = require('../components/cta/cta.js'),
   globalTitleComp = require('../components/title/globaltitle.js');

module.exports = {
  "Clicked on Rose Exisiting customer" : function(client){
    var pageObj = client.page.readytoapply_selectors(),signup = client.page.signup(),
        contentBlcok1Image = pageObj.elements.contentBlock1ImageWrapper.selector,
        bgRose= pageObj.elements.preApplyColorBlock.selector,
        size = client.globals.size.widths;
    signup.navigate()
      .signInAsAdmin();
    client.maximizeWindow();    
    client.waitForElementVisible('.toggle-comp .btn:last-child',5000);
    client.click('.color-block-1-rose .toggle-comp .btn:last-child', function(result) {
      this.assert.cssProperty('#existingcustomer-journey','display','block');
      this.pause(1000);
    });
    client.click('#existingcustomer-journey .toggle-comp .btn:first-child', function(result) {
      this.assert.cssProperty('.changeMyAc','display','block');
      this.pause(1000);
    });
    client.click('#existingcustomer-journey .block-1 .color-block-1-yellow .toggleWrapper .toggle-comp.togglebtn1 .btn', function(result) {
      this.assert.cssProperty('#existingcustomer-journey .block-2','display','block');
      this.pause(1000);
    });
    client.click('#existingcustomer-journey .color-block-2-yellow-end .toggleWrapper .toggle-comp.togglebtn1 .btn', function(result) {
      this.assert.cssProperty('#existingcustomer-journey .block-3','display','block');
      this.pause(1000);
    });
  },
  // do we know you starts here
  "Validate changeMyAcc violet block title properties":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        titlewrapper = pageObj.elements.changeACDwkuTitle_ext.selector,
        bgselector = pageObj.elements.changeACDwkuBg_ext.selector,
        h3selector = titlewrapper+' h3',
        size = client.globals.size.widths,twcss,h3css,bgcss;
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //titlewrapper
        twcss=titleComp.text.viotitlewrapperProps(scr);
        callback.singleElem(client,titlewrapper,twcss,scr);
        //titlewrapper h3tag
        h3css=titleComp.text.vioh3Props(scr);
        callback.singleElem(client,h3selector,h3css);
        //bg props
        bgcss=titleComp.text.viobgProps(scr);
        callback.singleElem(client,bgselector,bgcss);
      }
  },
  "Validate changeMyAcc toggle properties":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        togglewrapper = pageObj.elements.changeACDwkutoggle_ext.selector,
        btnselector = togglewrapper+' .btn:first-child',
        rightbtnselector = btnselector+':last-child',
        size = client.globals.size.widths,tgwcss,btncss;
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //togglewrapper
        tgwcss=props.readytoapplyProps.togglewrapperProps(scr);
        callback.multiloop(client,togglewrapper,tgwcss,scr);
        //togglewrapper btn
        btncss=props.readytoapplyProps.btnProps(scr);
        callback.multiloop(client,btnselector,btncss,scr);
        //btn props left
        btncss=props.readytoapplyProps.btnPropsleft(scr);
        callback.multiloop(client,btnselector,btncss,scr);
        //btn props right
        btncss=props.readytoapplyProps.btnPropsright(scr);
        callback.multiloop(client,rightbtnselector,btncss,scr);
      }
      client.click('#existingcustomer-journey .block-3 .doweknowu-shelf .color-block-3-voilet .toggleWrapper .toggle-comp .btn:first-child', function(result) {
        this.assert.cssProperty('#existingcustomer-journey .block-3 .doweknowu-shelf .doweknowu-expanded','display','block');
        this.pause(1000);
      });
  },
  "Validate changeMyAcc Title in CTA Section":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        titlewrapper = pageObj.elements.changeACDwkuExptitle_ext.selector,
        bgselector = pageObj.elements.changeACDwkuExpBg_ext.selector,
        h3selector = titlewrapper+' h3',
        size = client.globals.size.widths,twcss,h3css,bgcss;
    client.maximizeWindow();
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //titlewrapper
        twcss=titleComp.text.titlewrapperProps(scr);
        callback.singleElem(client,titlewrapper,twcss);
        //titlewrapper h3tag
        h3css=titleComp.text.h3Props(scr);
        callback.singleElem(client,h3selector,h3css);
        //bg props
        bgcss=titleComp.text.bgProps(scr);
        callback.singleElem(client,bgselector,bgcss);
      }
  },
  "Validate changeMyAcc Primary Cta in CTA Section":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        ctaselector = pageObj.elements.changeACExpPrmcta_ext.selector,
        anchorselector = ctaselector+' .cta.cta-primary .cta-text',
        size = client.globals.size.widths,ctacss,anchorcss;
    client.maximizeWindow();
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //primary cta wrap
        ctacss=ctaProps.cta.togglewrapperProps(scr);
        callback.singleElem(client,ctaselector,ctacss);
        //cta anchor tag
        anchorcss=ctaProps.cta.anchorProps(scr);
        callback.singleElem(client,anchorselector,anchorcss);
      }   
  },
  "Validate changeMyAcc Secondary Cta in CTA Section":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        ctaselector = pageObj.elements.changeACExpseccta_ext.selector,
        anchorselector = ctaselector+' .cta.cta-secondary .cta-text',
        size = client.globals.size.widths,ctacss,anchorcss;
    client.maximizeWindow();
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //secondary cta wrap
        ctacss=ctaProps.cta.sectogglewrapperProps(scr);
        callback.singleElem(client,ctaselector,ctacss);
        //cta anchor tag
        anchorcss=ctaProps.cta.atagProps(scr);
        callback.singleElem(client,anchorselector,anchorcss);
      }
  },
  "Validate changeMyAcc Image props in CTA Section":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        imagewrapper = pageObj.elements.changeACExpimage_ext.selector,
        compimggeneric = imagewrapper+' .comp-img-generic',
        compsvggeneric = imagewrapper+' .comp-svg-generic',
        imagewrap = compimggeneric+' .image-wrap',
        svgimagewrap = compsvggeneric+' .svg-image-wrap';

    var size = client.globals.size.widths,iwrappercss,cigcss,iwrapcss;
    client.maximizeWindow();
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //image wrapper
        iwrappercss=props.readytoapplyProps.imagewrapperProps(scr);
        callback.singleElem(client,imagewrapper,iwrappercss);
        //comp img generic
        cigcss=props.readytoapplyProps.genericProps(scr);
        callback.singleElem(client,compimggeneric,cigcss);
        //comp svg image
        /*cigcss=props.readytoapplyProps.genericProps(scr);
        callback.singleElem(client,compsvggeneric,cigcss);*/
        //img wrap props
        iwrapcss=props.readytoapplyProps.imagewrapProps(scr);
        callback.singleElem(client,imagewrap,iwrapcss);
        //svg image wrap props
        /*iwrapcss=props.readytoapplyProps.imagewrapProps(scr);
        callback.singleElem(client,svgimagewrap,iwrapcss);*/
      } 
  },
    /* Checking funcationality */
  "Change AC functionality part":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        togglewrapper = pageObj.elements.changeACDwkutoggle_ext.selector,
        yestextwrapper = pageObj.elements.changeACDwkutextwrap_ext.selector,
        yestogwrapper = pageObj.elements.changeACDwkutogenbtext_ext.selector,  
        btnselector = togglewrapper+' .btn:first-child',
        rightbtnselector = btnselector+':last-child',
        size = client.globals.size.widths,tgwcss,btncss,
        togbtns='#existingcustomer-journey .changeMyAc .block-3 form.do-we-know-you .toggleWrapper .toggle-comp button';

      /* Validting toggles yes or no functionality & showing text */
      client.elements('css selector', togbtns, function (result) {
        result.value.forEach(function(element,index){
        console.log('.....'+ element.ELEMENT+'---->'+index);      
          if(index==0){
            client.elementIdClick(element.ELEMENT,function(result) {
              client.getCssProperty('#existingcustomer-journey .changeMyAc .block-3 form.do-we-know-you .textWrapper.enableText','display',function(result){
                client.pause(2000);
                this.verify.equal(result.value,'block');
              });
              for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);
                yestxtcss=props.readytoapplyProps.aftertogSelTextProps(scr);
                callback.multiloop(client,yestextwrapper,yestxtcss,scr);
                yestogcss=props.readytoapplyProps.togwrapAftertxtProps(scr);
                callback.multiloop(client,yestogwrapper,yestogcss,scr);
              }
            }); 
          }
          else if(index==1){
            client.elementIdClick(element.ELEMENT,function(result) {
              client.pause(2000);
              client.getCssProperty('#existingcustomer-journey .changeMyAc .block-3 form.do-we-know-you .textWrapper','display',function(result) {
                this.verify.equal(result.value,'none');
              });
            });
          }         
        });    
      });

      /* Validting whenther CTA Section is Expanded */
      client.elements('css selector', btnselector, function (result) {
        result.value.forEach(function(element,index){
          client.pause(2000);
          client.elementIdClick(element.ELEMENT,function() {
            console.log("<!---- Clicking on each question ---->");
          });
        });
      });
      client.waitForElementVisible('#existingcustomer-journey .changeMyAc .block-3 .doweknowu-expanded',5000);
      /* For checking primary CTA 
      client.pause(2000);
      client.click('#newcustomer-journey .block-3 .doweknowu-expanded .cta-primary');    
      */
      client.pause(2000);
      client.click('#existingcustomer-journey .changeMyAc .block-3 .doweknowu-expanded .cta-secondary');
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
      }
   // client.end();  
  },  

   //Start EXISTING CUSTOMER OPEN MY ACCOUNT
  "Clicked for  Open newAC to Enable" : function(client){
    client.refresh();
    client.maximizeWindow();  
    client.waitForElementVisible('.toggle-comp .btn:last-child',5000);
    client.click('.color-block-1-rose .toggle-comp .btn:last-child', function(result) {
      this.assert.cssProperty('#existingcustomer-journey','display','block');
      this.pause(1000);
    });
    client.click('#existingcustomer-journey .toggle-comp .btn:last-child', function(result) {
      this.assert.cssProperty('.openNewAc','display','block');
      this.pause(1000);
    });
    client.click('#existingcustomer-journey .openNewAc .block-1 .color-block-1-yellow .toggleWrapper .toggle-comp.togglebtn1 .btn', function(result) {
      this.assert.cssProperty('#existingcustomer-journey .openNewAc .block-2','display','block');
      this.pause(1000);
    });
    client.click('#existingcustomer-journey .openNewAc .color-block-2-yellow-end .toggleWrapper .toggle-comp.togglebtn1 .btn', function(result) {
      this.assert.cssProperty('#existingcustomer-journey .openNewAc .block-3','display','block');
      this.pause(1000);
    });
  },
 
  "Validate Open newAC violet block title properties":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        titlewrapper = pageObj.elements.openACDwkuTitle_ext.selector,
        bgselector = pageObj.elements.openACDwkuBg_ext.selector,
        h3selector = titlewrapper+' h3',
        size = client.globals.size.widths,twcss,h3css,bgcss;
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //titlewrapper
        twcss=titleComp.text.viotitlewrapperProps(scr);
        callback.singleElem(client,titlewrapper,twcss,scr);
        //titlewrapper h3tag
        h3css=titleComp.text.vioh3Props(scr);
        callback.singleElem(client,h3selector,h3css);
        //bg props
        bgcss=titleComp.text.viobgProps(scr);
        callback.singleElem(client,bgselector,bgcss);
      }
  },
  "Validate Open newAC toggle properties":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        togglewrapper = pageObj.elements.openACDwkutoggle_ext.selector,
        btnselector = togglewrapper+' .btn:first-child',
        rightbtnselector = btnselector+':last-child',
        size = client.globals.size.widths,tgwcss,btncss;
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //togglewrapper
        tgwcss=props.readytoapplyProps.togglewrapperProps(scr);
        callback.multiloop(client,togglewrapper,tgwcss,scr);
        //togglewrapper btn
        btncss=props.readytoapplyProps.btnProps(scr);
        callback.multiloop(client,btnselector,btncss,scr);
        //btn props left
        btncss=props.readytoapplyProps.btnPropsleft(scr);
        callback.multiloop(client,btnselector,btncss,scr);
        //btn props right
        btncss=props.readytoapplyProps.btnPropsright(scr);
        callback.multiloop(client,rightbtnselector,btncss,scr);
      }
      client.click('#existingcustomer-journey .openNewAc .block-3 .doweknowu-shelf .color-block-3-voilet .toggleWrapper .toggle-comp .btn:first-child', function(result) {
        this.assert.cssProperty('#existingcustomer-journey .openNewAc .block-3 .doweknowu-shelf .doweknowu-expanded','display','block');
        this.pause(1000);
      });
  },
  "Validate Open newAC Title in CTA Section":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        titlewrapper = pageObj.elements.openACDwkuExptitle_ext.selector,
        bgselector = pageObj.elements.openACDwkuExpBg_ext.selector,
        h3selector = titlewrapper+' h3',
        size = client.globals.size.widths,twcss,h3css,bgcss;
    client.maximizeWindow();
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //titlewrapper
        twcss=titleComp.text.titlewrapperProps(scr);
        callback.singleElem(client,titlewrapper,twcss);
        //titlewrapper h3tag
        h3css=titleComp.text.h3Props(scr);
        callback.singleElem(client,h3selector,h3css);
        //bg props
        bgcss=titleComp.text.bgProps(scr);
        callback.singleElem(client,bgselector,bgcss);
      }
  },
  "Validate Open newAC Primary Cta in CTA Section":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        ctaselector = pageObj.elements.openACExpPrmcta_ext.selector,
        anchorselector = ctaselector+' .cta.cta-primary .cta-text',
        size = client.globals.size.widths,ctacss,anchorcss;
    client.maximizeWindow();
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //primary cta wrap
        ctacss=ctaProps.cta.togglewrapperProps(scr);
        callback.singleElem(client,ctaselector,ctacss);
        //cta anchor tag
        anchorcss=ctaProps.cta.anchorProps(scr);
        callback.singleElem(client,anchorselector,anchorcss);
      }   
  },
  "Validate Open newAC Secondary Cta in CTA Section":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        ctaselector = pageObj.elements.openACExpseccta_ext.selector,
        anchorselector = ctaselector+' .cta.cta-secondary .cta-text',
        size = client.globals.size.widths,ctacss,anchorcss;
    client.maximizeWindow();
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //secondary cta wrap
        ctacss=ctaProps.cta.sectogglewrapperProps(scr);
        callback.singleElem(client,ctaselector,ctacss);
        //cta anchor tag
        anchorcss=ctaProps.cta.atagProps(scr);
        callback.singleElem(client,anchorselector,anchorcss);
      }
  },
  "Validate Open newAC Image props in CTA Section":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        imagewrapper = pageObj.elements.openACExpimage_ext.selector,
        compimggeneric = imagewrapper+' .comp-img-generic',
        compsvggeneric = imagewrapper+' .comp-svg-generic',
        imagewrap = compimggeneric+' .image-wrap',
        svgimagewrap = compsvggeneric+' .svg-image-wrap';

    var size = client.globals.size.widths,iwrappercss,cigcss,iwrapcss;
    client.maximizeWindow();
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //image wrapper
        iwrappercss=props.readytoapplyProps.imagewrapperProps(scr);
        callback.singleElem(client,imagewrapper,iwrappercss);
        //comp img generic
        cigcss=props.readytoapplyProps.genericProps(scr);
        callback.singleElem(client,compimggeneric,cigcss);
        //comp svg image
        /*cigcss=props.readytoapplyProps.genericProps(scr);
        callback.singleElem(client,compsvggeneric,cigcss);*/
        //img wrap props
        iwrapcss=props.readytoapplyProps.imagewrapProps(scr);
        callback.singleElem(client,imagewrap,iwrapcss);
        //svg image wrap props
        /*iwrapcss=props.readytoapplyProps.imagewrapProps(scr);
        callback.singleElem(client,svgimagewrap,iwrapcss);*/
      }
  },
    /* Checking funcationality */
  "open AC of functionality part":function(client){
    var pageObj = client.page.readytoapply_selectors(),
        callback=client.page.common(),
        togglewrapper = pageObj.elements.openACDwkutoggle_ext.selector,
        yestextwrapper = pageObj.elements.openACDwkutextwrap_ext.selector,
        yestogwrapper = pageObj.elements.openACDwkutogenbtext_ext.selector,  
        btnselector = togglewrapper+' .btn:first-child',
        rightbtnselector = btnselector+':last-child',
        size = client.globals.size.widths,tgwcss,btncss,
        togbtns='#existingcustomer-journey .openNewAc .block-3 form.do-we-know-you .toggleWrapper .toggle-comp button';

      /* Validting toggles yes or no functionality & showing text */
      client.elements('css selector', togbtns, function (result) {
        result.value.forEach(function(element,index){
        console.log('.....'+ element.ELEMENT+'---->'+index);      
          if(index==0){
            client.elementIdClick(element.ELEMENT,function(result) {
              client.getCssProperty('#existingcustomer-journey .openNewAc .block-3 form.do-we-know-you .textWrapper.enableText','display',function(result){
                client.pause(2000);
                this.verify.equal(result.value,'block');
              });
              for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);
                yestxtcss=props.readytoapplyProps.aftertogSelTextProps(scr);
                callback.multiloop(client,yestextwrapper,yestxtcss,scr);
                yestogcss=props.readytoapplyProps.togwrapAftertxtProps(scr);
                callback.multiloop(client,yestogwrapper,yestogcss,scr);
              }
            }); 
          }
          else if(index==1){
            client.elementIdClick(element.ELEMENT,function(result) {
              client.pause(2000);
              client.getCssProperty('#existingcustomer-journey .openNewAc .block-3 form.do-we-know-you .textWrapper','display',function(result) {
                this.verify.equal(result.value,'none');
              });
            });
          }         
        });    
      });

      /* Validting whenther CTA Section is Expanded */
      client.elements('css selector', rightbtnselector, function (result) {
        result.value.forEach(function(element,index){
          client.pause(2000);
          client.elementIdClick(element.ELEMENT,function() {
            console.log("<!---- Clicking on each question ---->");
          });
        });
      });
      client.waitForElementVisible('#existingcustomer-journey .openNewAc .block-3 .doweknowu-expanded',5000);
      /* For checking primary CTA 
      client.pause(2000);
      client.click('#newcustomer-journey .block-3 .doweknowu-expanded .cta-primary');    
      */
      client.pause(2000);
      client.click('#existingcustomer-journey .openNewAc .block-3 .doweknowu-expanded .cta-secondary');
      for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
      }
    client.end();  
  },
   //End EXISTING CUSTOMER OPEN MY ACCOUNT
}  