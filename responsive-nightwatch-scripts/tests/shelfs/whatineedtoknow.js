var textComp = require('../components/text/text.js'),
    titleComp =require('../components/title/title.js'),
    tileComp=require('../components/other_comp/tile.js'),
    ctaComp=require('../components/cta/cta.js'),
    globalTitle = require('../components/title/globaltitle.js');
module.exports={
    'Checking the properties of main title':function(browser){
       var test=browser.page.common(),signup=browser.page.signup(),
            winks = browser.page.whatineedtoknow_selectors(),
            blockClass=winks.elements.mainTitle.selector,
            size=browser.globals.size.widths,
            titleMain=blockClass+" h1";          
            winks.navigate();
                  //.signInAsAdmin();
                //browser.pause(10000);

            browser.maximizeWindow();
            for(scr in size){
                browser.resizeWindow(size[scr].width, size[scr].height);
                var cssprops=tileComp.text.mainTitle(scr);
                var props=globalTitle.globaltitle.h1props(scr);
                test.singleElem(browser,titleMain,cssprops,scr);
                test.singleElem(browser,titleMain,props,scr);
            } 
    },
    'Checking the Image block properites':function(browser){
       var image=browser.page.common(),
           winks = browser.page.whatineedtoknow_selectors(), 
           imageClass=winks.elements.imageBlock.selector,
           size=browser.globals.size.widths,props;
        for(scr in size){
           props=tileComp.text.tileBlock(scr);
           browser.resizeWindow(size[scr].width, size[scr].height);
           image.singleElem(browser,imageClass,props,scr);
        }
    },
    /*'Calling the Image component':function(browser){
       var image=browser.page.common(),
            winks = browser.page.whatineedtoknow_selectors(), 
           imageClass=winks.elements.image.selector,
           imgProps=browser.page.image(),
           props,size=browser.globals.size.widths,props;
           for(scr in size){
               props=imgProps.imageComp(scr);
               browser.resizeWindow(size[scr].width, size[scr].height);
               image.multiloop(browser,imageClass,props,scr);
           }
    },*/
   // /* 'Checking the Image component Width/Height':function(browser){
   //     var image=browser.page.image(),
   //         imageClass=image.elements.image.selector;
   //         image.imageloop(browser,imageClass);
   //  },*/
   'Checking the height of the content(title + text) + block margin top + CTA':function(browser){
        var cont=browser.page.common(),
             winks = browser.page.whatineedtoknow_selectors(), 
             blockClass=winks.elements.mainBlock.selector,
             contClass=winks.elements.contentBlock.selector,
             props,size=browser.globals.size.widths,ctaprops,
            ctaClass=winks.elements.ctaComp.selector,dotClass=winks.elements.dotClass.selector;
            for(scr in size){
               browser.resizeWindow(size[scr].width, size[scr].height);
               props=tileComp.text.contentHeight(scr),
               cssProps=tileComp.text.contentBlock(scr);
               cont.multiloop(browser,contClass,props,scr);
               cont.singleElem(browser,blockClass,cssProps,scr);
                if(scr=="sm"){
                   ctaprops=tileComp.text.ctaBlock(scr);
                   cont.multiloop(browser,ctaClass,ctaprops,scr);
                  //  browser.assert.cssProperty(dotClass,"padding-bottom","62px");
                }
                else if(scr=="xs"){
                     ctaprops=tileComp.text.ctaBlock(scr);
                    cont.multiloop(browser,ctaClass,ctaprops,scr);
                  //  browser.assert.cssProperty(dotClass,"padding-bottom","52px");
                }
            }
    },
    'Checking the property for title wrapper + Component':function(browser){
        var cont=browser.page.common(),
        winks = browser.page.whatineedtoknow_selectors(), 
        size=browser.globals.size.widths,cssprops,
           titleWrap=winks.elements.title.selector,props,
           titleClass=titleClass+" h3.title-comp";
         for(scr in size){
               browser.resizeWindow(size[scr].width, size[scr].height);
             props=tileComp.text.tileTop(scr);
             cont.multiloop(browser,titleWrap,props,scr);
             cssprops=titleComp.text.titleComp(scr);
             cont.multiloop(browser,titleClass,cssprops,scr);
         }
    },
    'Checking for the text component + dot and cta properties ':function(browser){
       var text=browser.page.common(),
           winks = browser.page.whatineedtoknow_selectors(), 
           props,size=browser.globals.size.widths,
           stop=browser.globals.size.stop,
           textClass=winks.elements.text.selector,
           dotClass=winks.elements.dotClass.selector,
           ctaClass=winks.elements.ctaComp.selector,css,
           /*dotCheck=dotClass+" li",*/ctaWrap=ctaClass+" .cta .cta-text",ctacss;
           for(scr in size){
              props=textComp.text.textComps(scr);
              browser.resizeWindow(size[scr].width, size[scr].height);
              text.multiloop(browser,textClass,props,scr);  
              if(scr=="sm" || scr=="xs"){
                   //browser.assert.cssProperty(dotClass,"padding-top","20px");
                   css=ctaComp.cta.ctaCheck(),
                   ctacss=ctaComp.cta.ctaComps();
                   text.multiloop(browser,ctaWrap,ctacss,scr);
                  // text.multiloop(browser,dotCheck,css,scr);
               } 
           } 
         browser.end(); 
    }       
};


