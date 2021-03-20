var tileComp = require('../components/other_comp/wink_props.js'),
    globalTitle = require('../components/title/globaltitle.js'),
    ctaComp=require('../components/cta/cta.js'),
    textComp = require('../components/text/text.js'),
    imgProps = require('../components/image/image.js');

module.exports = {
  '@tags': ['select_account','wink'],
    "1.navigate to Page": function(client) {
      var pageObj = client.page.wink_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          size = client.globals.size.widths;
          signup.navigate();
          //client.url(pageObj.url);
          //.signInAsAdmin();
          client.maximizeWindow();
          client.url(signup.url);         
          client.waitForElementVisible("body",25000);        
    },

     "check Default shelf spacing": function(client) {
      var pageObj = client.page.wink_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          size = client.globals.size.widths;
          //signup.navigate();
          client.url(signup.url);
          //.signInAsAdmin();
          client.maximizeWindow();
          client.url(signup.url);         
          client.waitForElementVisible("body",25000); 
          client.element('css selector', '.what_need_to_know_shelf.shelf-margin', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                console.log("Default Shelf margin checked");
                client.expect.element('.what_need_to_know_shelf.shelf-margin').to.have.css('margin-bottom').which.equals('20px');
            } else {
                // Element is not present.
                 console.log("Default Shelf margin unchecked");
            }
        }); 
          //client.verify.cssClassPresent('//*[@id="id2"]', 'btn', 'Checked class btn is present')      
    },
    
   "2.Checking the properties of main title": function(client) {
      var pageObj = client.page.wink_selectors(),
          callback = client.page.common(),
          size=client.globals.size.widths,
          blockClass=pageObj.elements.mainTitle.selector;  
          if(client.globals.test_settings.isLocal){
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                // title color & font family
                cssprops=tileComp.winkprops.mainTitle(scr);
                callback.singleElem(client,blockClass,cssprops,scr);
                // title font & line height sizes
                props=globalTitle.globaltitle.h1props(scr);
                callback.singleElem(client,blockClass,props,scr);
            }
          }
          else{
            if(client.options.desiredCapabilities.isLGDevice){
              // title color & font family
              cssprops=tileComp.winkprops.mainTitle('lg');
              callback.singleElem(client,blockClass,cssprops,'lg');
              // title font & line height sizes
              props=globalTitle.globaltitle.h1props('lg');
              callback.singleElem(client,blockClass,props,'lg');
            }
            else if(client.options.desiredCapabilities.isSMDevice){
              // title color & font family
              cssprops=tileComp.winkprops.mainTitle('sm');
              callback.singleElem(client,blockClass,cssprops,'sm');
              // title font & line height sizes
              props=globalTitle.globaltitle.h1props('sm');
              callback.singleElem(client,blockClass,props,'sm');
            }
            else if(client.options.desiredCapabilities.isXSDevice){
              // title color & font family
              cssprops=tileComp.winkprops.mainTitle('xs');
              callback.singleElem(client,blockClass,cssprops,'xs');
              // title font & line height sizes
              props=globalTitle.globaltitle.h1props('xs');
              callback.singleElem(client,blockClass,props,'xs');
            }
          }
    },

   '3.Checking the column properites':function(client){
      var pageObj = client.page.wink_selectors(),
          callback = client.page.common(),
          size=client.globals.size.widths,
          tileClass=pageObj.elements.tileColumn.selector;
          if(client.globals.test_settings.isLocal){
            for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);
                // each column paddings of (tile/slide) 
                props=tileComp.winkprops.tileBlock(scr);
                callback.singleElem(client,tileClass,props,scr);
            }
          }
          else{
            if(client.options.desiredCapabilities.isLGDevice){
              // each column paddings of (tile/slide) 
              props=tileComp.winkprops.tileBlock('lg');
              callback.singleElem(client,tileClass,props,'lg');
            }
            else if(client.options.desiredCapabilities.isSMDevice){
              // each column paddings of (tile/slide) 
              props=tileComp.winkprops.tileBlock('sm');
              callback.singleElem(client,tileClass,props,'sm');
            }
            else if(client.options.desiredCapabilities.isXSDevice){
              // each column paddings of (tile/slide) 
              props=tileComp.winkprops.tileBlock('xs');
              callback.singleElem(client,tileClass,props,'xs');
            }
          }
    },

    '4.Calling the Image component':function(client){
      var pageObj = client.page.wink_selectors(),
          callback=client.page.common(), 
          size=client.globals.size.widths,
          imgProps=client.page.image(),
          imageClass=pageObj.elements.image.selector;
         
         if(client.globals.test_settings.isLocal){
          for(scr in size){
              client.resizeWindow(size[scr].width, size[scr].height);
              // image dimensions
              props=imgProps.imageComp(scr);
              callback.multiloop(client,imageClass,props,scr);
         }
        }
        else{
          if(client.options.desiredCapabilities.isLGDevice){
            // image dimensions
            props=imgProps.imageComp('lg');
            callback.multiloop(client,imageClass,props,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            // image dimensions
            props=imgProps.imageComp('sm');
            callback.multiloop(client,imageClass,props,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            // image dimensions
            props=imgProps.imageComp('xs');
            callback.multiloop(client,imageClass,props,'xs');
          }
        }
    },

    '5.Checking the height of the content(title + text) + block margin top + CTA':function(client){
      var pageObj = client.page.wink_selectors(), 
          callback=client.page.common(),
          size=client.globals.size.widths,
          blockClass=pageObj.elements.mainBlock.selector,
          contClass=pageObj.elements.contentBlock.selector,
          props,size=client.globals.size.widths,ctaprops,
          ctaClass=pageObj.elements.ctaComp.selector,
          dotClass=pageObj.elements.dotClass.selector;
      
      if(client.globals.test_settings.isLocal){
        for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
            // content width & Height
            props=tileComp.winkprops.contentHeight(scr),
            callback.multiloop(client,contClass,props,scr);
            // content paddings and margins
            cssProps=tileComp.winkprops.contentBlock(scr);
            callback.singleElem(client,blockClass,cssProps,scr);
            if(scr=="sm"){
              ctaprops=tileComp.winkprops.ctaBlock(scr);
              callback.multiloop(client,ctaClass,ctaprops,scr);
            }
            else if(scr=="xs"){
              ctaprops=tileComp.winkprops.ctaBlock(scr);
              callback.multiloop(client,ctaClass,ctaprops,scr);
            }
        }
      }
      else{
        if(client.options.desiredCapabilities.isLGDevice){
          // content width & Height
          props=tileComp.winkprops.contentHeight('lg'),
          callback.multiloop(client,contClass,props,'lg');
          // content paddings and margins
          cssProps=tileComp.winkprops.contentBlock('lg');
          callback.singleElem(client,blockClass,cssProps,'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
          // content width & Height
          props=tileComp.winkprops.contentHeight('sm'),
          callback.multiloop(client,contClass,props,'sm');
          // content paddings and margins
          cssProps=tileComp.winkprops.contentBlock('sm');
          callback.singleElem(client,blockClass,cssProps,'sm');
           // cta properties
          ctaprops=tileComp.winkprops.ctaBlock('sm');
          callback.multiloop(client,ctaClass,ctaprops,'sm');
        }
        else if(client.options.desiredCapabilities.isXSDevice){
          // content width & Height
          props=tileComp.winkprops.contentHeight('xs'),
          callback.multiloop(client,contClass,props,'xs');
          // content paddings and margins
          cssProps=tileComp.winkprops.contentBlock('xs');
          callback.singleElem(client,blockClass,cssProps,'xs');
           // cta properties
          ctaprops=tileComp.winkprops.ctaBlock('xs');
          callback.multiloop(client,ctaClass,ctaprops,'xs');
        }
      }
    },

    '6.Checking the property for title wrapper + Component':function(client){
      var pageObj = client.page.wink_selectors(), 
        callback=client.page.common(),
        size=client.globals.size.widths,cssprops,
        titleWrap=pageObj.elements.titlewrapIns.selector,
        titleClass=pageObj.elements.title.selector;
       
        if(client.globals.test_settings.isLocal){
          for(scr in size){
              client.resizeWindow(size[scr].width, size[scr].height);
              // max height & margin
              props=tileComp.winkprops.tileTop(scr);
              callback.multiloop(client,titleWrap,props,scr);
              // font/line height
              cssprops=globalTitle.globaltitle.h3props(scr);
              callback.multiloop(client,titleClass,cssprops,scr);
              // color of h3 tag
              props=tileComp.winkprops.titleColor(scr);
              callback.multiloop(client,titleClass,props,scr);
          }
        }
        else{
          if(client.options.desiredCapabilities.isLGDevice){
            // max height & margin
            props=tileComp.winkprops.tileTop('lg');
            callback.multiloop(client,titleWrap,props,'lg');
            // font/line height
            cssprops=globalTitle.globaltitle.h3props('lg');
            callback.multiloop(client,titleClass,cssprops,'lg');
            // color of h3 tag
            props=tileComp.winkprops.titleColor('lg');
            callback.multiloop(client,titleClass,props,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            // max height & margin
            props=tileComp.winkprops.tileTop('sm');
            callback.multiloop(client,titleWrap,props,'sm');
            // font/line height
            cssprops=globalTitle.globaltitle.h3props('sm');
            callback.multiloop(client,titleClass,cssprops,'sm');
            // color of h3 tag
            props=tileComp.winkprops.titleColor('sm');
            callback.multiloop(client,titleClass,props,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            // max height & margin
            props=tileComp.winkprops.tileTop('xs');
            callback.multiloop(client,titleWrap,props,'xs');
            // font/line height
            cssprops=globalTitle.globaltitle.h3props('xs');
            callback.multiloop(client,titleClass,cssprops,'xs');
            // color of h3 tag
            props=tileComp.winkprops.titleColor('xs');
            callback.multiloop(client,titleClass,props,'xs');
          }
        }
     
      },

      '7.Checking for the text component + dot and cta properties ':function(client){
        var callback=client.page.common(),
          pageObj = client.page.wink_selectors(), 
          size=client.globals.size.widths,
          stop=client.globals.size.stop,
          textClass=pageObj.elements.text.selector,
          dotClass=pageObj.elements.dotClass.selector,
          ctaClass=pageObj.elements.ctaComp.selector,css,
          dotCheck=dotClass+" li",ctaWrap=ctaClass+" .cta .cta-text",ctacss,
          dotClassbefore = pageObj.elements.dotClassbef.selector;
             
             if(client.globals.test_settings.isLocal){
                for(scr in size){
                   client.resizeWindow(size[scr].width, size[scr].height);
                   /* props=textComp.text.textComps(scr);
                    callback.multiloop(client,textClass,props,scr); */ 

                    props=tileComp.winkprops.textprops(scr);
                    callback.multiloop(client,textClass,props,scr);

                    if(scr=="sm" || scr=="xs"){
                      client.pause(2000);
                      client.assert.cssProperty(dotClass,"padding-top","20px");
                      // dots in slider
                      css=ctaComp.cta.ctaCheck(),
                      callback.multiloop(client,dotCheck,css,scr);
                      
                      // cta properties check in  M & S
                      ctacss=ctaComp.cta.ctaComps();
                      callback.multiloop(client,ctaWrap,ctacss,scr);

                       // dots in slider color
                     //properties5 = tileComp.winkprops.dotprops(scr);
                      //callback.pseudoSingleElem(client,dotClassbefore,':before',properties5);
                    } 
                }
              }
              else{
                
                if(client.options.desiredCapabilities.isSMDevice){
                  // dots in slider
                    css=ctaComp.cta.ctaCheck('sm'),
                    callback.multiloop(client,dotCheck,css,'sm');
                    // cta properties check in  M & S
                    ctacss=ctaComp.cta.ctaComps('sm');
                    callback.multiloop(client,ctaWrap,ctacss,'sm');
                }
                else if(client.options.desiredCapabilities.isXSDevice){
                  // dots in slider
                    css=ctaComp.cta.ctaCheck('sm'),
                    callback.multiloop(client,dotCheck,css,'sm');
                    // cta properties check in  M & S
                    ctacss=ctaComp.cta.ctaComps('xs');
                    callback.multiloop(client,ctaWrap,ctacss,'xs');
                }
              } 
    
      client.end();
    }
}