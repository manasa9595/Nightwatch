var titleComp =require('../components/title/title.js'),
	 props = require('../components/other_comp/readytoapply_props.js'),
	 ctaProps = require('../components/cta/cta.js'),
	 globalTitleComp = require('../components/title/globaltitle.js');

module.exports = {
  "Clicked on Rose New customer" : function(client){
    var pageObj = client.page.readytoapply_selectors(),signup = client.page.signup(),
        contentBlcok1Image = pageObj.elements.contentBlock1ImageWrapper.selector,
        bgRose= pageObj.elements.preApplyColorBlock.selector,
        size = client.globals.size.widths;
        signup.navigate();
         // .signInAsAdmin();
    client.maximizeWindow();    
    client.waitForElementVisible('.toggle-comp .btn',5000);
    client.click('.color-block-1-rose .toggle-comp .btn', function(result) {
        this.assert.cssProperty('#newcustomer-journey .block-1','display','block');
        this.pause(1000);
       });
    client.click('#newcustomer-journey .block-1 .color-block-1-yellow .toggleWrapper .toggle-comp.togglebtn1 .btn', function(result) {
        this.assert.cssProperty('#newcustomer-journey .block-2','display','block');
        this.pause(1000);
       });
    client.click('#newcustomer-journey .color-block-2-yellow-end .toggleWrapper .toggle-comp.togglebtn1 .btn', function(result) {
        this.assert.cssProperty('#newcustomer-journey .block-3','display','block');
        this.pause(1000);
       });
  },
  // do we know you starts here
  "check for doweknowyou violet block title props test":function(client){
       var pageObj = client.page.readytoapply_selectors(),
           callback=client.page.common(),
           titlewrapper = pageObj.elements.doweknowuviotitle.selector,
           bgselector = pageObj.elements.doweknowuviobg.selector,
           paddingselector = pageObj.elements.doweknowuviopadding.selector,
           h3selector = titlewrapper+' h3',
           size = client.globals.size.widths,twcss,h3css,bgcss,paddingcss;

       for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
         //titlewrapper
        twcss=titleComp.text.viotitlewrapperProps2(scr);
        pageObj.dwkumultititlecheck(client,titlewrapper,twcss,scr);
        //titlewrapper h3tag
        h3css=titleComp.text.vioh3Props(scr);
        callback.singleElem(client,h3selector,h3css);
        //bg color props
        bgcss=titleComp.text.viobgProps(scr);
        callback.singleElem(client,bgselector,bgcss);
        //bg padding props
        paddingcss=titleComp.text.viobgpaddingProps(scr);
        callback.singleElem(client,paddingselector,paddingcss);
       }
        
     },
     "check for doweknowyou violet block toggle props test":function(client){
       var pageObj = client.page.readytoapply_selectors(),
           callback=client.page.common(),
           togglewrapper = pageObj.elements.doweknowutoggle.selector,
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
     },
  "check for doweknowyou title props test":function(client){
       var pageObj = client.page.readytoapply_selectors(),
           callback=client.page.common(),
           titlewrapper = pageObj.elements.doweknowutitle.selector,
           bgselector = pageObj.elements.doweknowu.selector,
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
  "check for doweknowyou primary cta props test":function(client){
       var pageObj = client.page.readytoapply_selectors(),
           callback=client.page.common(),
           ctaselector = pageObj.elements.doweknowucta.selector,
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
  "check for doweknowyou secondary cta props test":function(client){
       var pageObj = client.page.readytoapply_selectors(),
           callback=client.page.common(),
           ctaselector = pageObj.elements.doweknowuseccta.selector,
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
  "check for doweknowyou image props test":function(client){
       var pageObj = client.page.readytoapply_selectors(),
           callback=client.page.common(),
           imagewrapper = pageObj.elements.doweknowuimage.selector,
           compimggeneric = imagewrapper+' .comp-img-generic',
           compsvggeneric = imagewrapper+' .comp-svg-generic',
           imagewrap = compimggeneric+' .image-wrap',
           svgimagewrap = compsvggeneric+' .svg-image-wrap',
           size = client.globals.size.widths,iwrappercss,cigcss,iwrapcss;
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
  "check for doweknowyou functionality part":function(client){
       var pageObj = client.page.readytoapply_selectors(),
           callback=client.page.common(),
           togglewrapper = pageObj.elements.doweknowutoggle.selector,
           yestextwrapper = pageObj.elements.doweknowutextwrap.selector,
           yestogwrapper = pageObj.elements.doweknowutoggleaftext.selector,
           btnselector = togglewrapper+' .btn:first-child',
           rightbtnselector = btnselector+':last-child',
           size = client.globals.size.widths,tgwcss,btncss,
           togbtns='#newcustomer-journey .block-3 form.do-we-know-you .toggleWrapper .toggle-comp button';

/* checkting toggles yes or no functionality & showing text */
    client.elements('css selector', togbtns, function (result) {
        result.value.forEach(function(element,index){
          console.log('.....'+ element.ELEMENT+'---->'+index);      
          if(index==0 || index==2 || index==4){
                client.elementIdClick(element.ELEMENT,function(result) {
                client.getCssProperty('#newcustomer-journey .block-3 form.do-we-know-you .textWrapper.enableText','display',function(result) {
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
          else if(index==1 || index==3 || index==5){
                client.elementIdClick(element.ELEMENT,function(result) {
                client.pause(2000);
                client.getCssProperty('#newcustomer-journey .block-3 form.do-we-know-you .textWrapper','display',function(result) {
                this.verify.equal(result.value,'none');
              });
            });
          }         
          });    
    });
 
     /* clicking on the toggle buttons and checking cta section */
    client.elements('css selector', btnselector, function (result) {
      result.value.forEach(function(element,index){
        client.pause(2000);
        client.elementIdClick(element.ELEMENT,function() {
         console.log("<!---- Clicking on each question ---->");
        });
      });
    });
    client.waitForElementVisible('#newcustomer-journey .block-3 .doweknowu-expanded',5000);
    /* For checking primary CTA 
      client.pause(2000);
      client.click('#newcustomer-journey .block-3 .doweknowu-expanded .cta-primary');    
    */
    client.pause(2000);
    client.click('#newcustomer-journey .block-3 .doweknowu-expanded .cta-secondary');
    for(scr in size){
      client.resizeWindow(size[scr].width, size[scr].height);
    }
      client.end();  
  },
}



















