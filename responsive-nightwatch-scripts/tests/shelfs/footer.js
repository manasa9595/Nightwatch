var props = require('../components/footer/footer_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js');
module.exports = {
    "Check for contexual link background-color": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            linkBgClrCls = pageObj.elements.linkBgClr.selector,
            size = client.globals.size.widths;
         pageObj.navigate()
         signup.navigate()
        .signInAsAdmin();
        client.maximizeWindow();
        client.maximizeWindow("current");
        client.url(signup.url);
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Contexual links background color check 
            properties = props.footerProps.bgClr(scr);
            callback.singleElem(client, linkBgClrCls, properties, scr);
        }
        
    },
    
    'Check for contexual links on hover':function(client){
        var size = client.globals.size.widths,
            pageObj = client.page.footer_selectors();
           // pageObj.navigate()
          client.maximizeWindow();
          client.elements('css selector', '.row.contextual-menu-link a', test)
        function test(elems){
         for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
            elems.value.forEach(function(element,index) {
                client.moveTo(element.ELEMENT,2,2)
                    .pause(6000)
                     client.elementIdCssProperty(element.ELEMENT,'text-decoration-line', function(result){
                      client.verify.equal(result.value, 'underline');
                  });
                
            });
          }
        }

    },

    "Check for contexual link title wrapper": function(client) {
        var pageObj = client.page.footer_selectors(),
            callback = client.page.common(),
            titWrapCls = pageObj.elements.titWrapper.selector,
            titWrapTxt = titWrapCls + " h3",
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Contexual links background color check 
            properties = titleComp.text.titleLink(scr);
            callback.singleElem(client, titWrapCls, properties, scr);
            //Contexual links-title fs and lh check
            properties = globalTitleComp.globaltitle.h3props(scr);
            callback.singleElem(client, titWrapTxt, properties, scr);
            //Contexual links-title text props
            properties = globalTitleComp.globaltitle.bgPurpleProps(scr);
            callback.singleElem(client, titWrapTxt, properties, scr);
        }

    },
   
    
    "Check for contexual-menu links": function(client) {
        var pageObj = client.page.footer_selectors(),
            callback = client.page.common(),
            menuLinkCls = pageObj.elements.menuLink.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //menu links margin properties check
            properties = props.footerProps.linkMenuProps(scr);
            callback.multiloop(client, menuLinkCls, properties, scr);
            //Contexual menu links fs and lh check
            properties = globalTitleComp.globaltitle.menuProps(scr);
            callback.multiloop(client, menuLinkCls, properties, scr);
            //Contexual menu links-text properties check
            properties = props.footerProps.menuTextProps(scr);
            callback.multiloop(client, menuLinkCls, properties, scr);
        }
        
    },
    
    "Check for contexual-menu divider line": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dividerLineCls = pageObj.elements.dividerLine.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //divider line properties check
            properties = props.footerProps.dividerLineProps(scr);
            callback.multiloop(client, dividerLineCls, properties, scr);
        }

    },
   
   /* "Check for footer wrapper": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            footerWrapCls = pageObj.elements.footerWrap.selector,
            footerWrap1 = footerWrapCls + " .footer-links"
        size = client.globals.size.widths;
        client.maximizeWindow();
        client.url(signup.url);
        //.signInAsAdmin();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //footer wrapper properties check
            properties = props.footerProps.footerWrapProps(scr);
            callback.singleElem(client, footerWrapCls, properties, scr);
            //footer wrapper1 properties check
            properties = props.footerProps.footerWrap1Props(scr);
            callback.singleElem(client, footerWrap1, properties, scr);
        }
      }
      else{
          //footer wrapper properties check
            properties = props.footerProps.footerWrapProps(client.clientBrowser.device);
            callback.singleElem(client, footerWrapCls, properties, client.clientBrowser.device);
            //footer wrapper1 properties check
            properties = props.footerProps.footerWrap1Props(client.clientBrowser.device);
            callback.singleElem(client, footerWrap1, properties, client.clientBrowser.device);
         }
         client.end();
    },*/
    "Check for footer wrapper": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            footerWrapCls = pageObj.elements.footerWrap.selector,
            footerWrap1 = footerWrapCls + " .footer-links"
        size = client.globals.size.widths;
        client.maximizeWindow();
        client.url(signup.url);
        //.signInAsAdmin();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //footer wrapper properties check
            properties = props.footerProps.footerWrapProps(scr);
            callback.singleElem(client, footerWrapCls, properties, scr);
            //footer wrapper1 properties check
            properties = props.footerProps.footerWrap1Props(scr);
            callback.singleElem(client, footerWrap1, properties, scr);
        }
    },
   "Check for footer links properties": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            footerLinksCls = pageObj.elements.footerLinks.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
                for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //footer links all margin properties check in multiloop
            properties = props.footerProps.footerLinksProps(scr);
            callback.multiloop(client, footerLinksCls, properties, scr);
            //footer links properties fs and lh check
            properties = globalTitleComp.globaltitle.footerMenuProps(scr);
            callback.multiloop(client, footerLinksCls, properties, scr);
            //footer link font props like font-family check
            properties = props.footerProps.footerFontProps(scr);
            callback.multiloop(client, footerLinksCls, properties, scr);
        }
    },
  "Check for social icon properties": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            footerIconsCls = pageObj.elements.footerIcons.selector,
            footerFbCls = pageObj.elements.footerFb.selector,
            iconClass = pageObj.elements.iconCls.selector,
            footerBannerCls = pageObj.elements.footerBanner.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //footer icon properties check
            properties = props.footerProps.iconProps(scr);
            callback.singleElem(client, footerIconsCls, properties, scr);
            //footer icon properties for facebook and twitter in multiloop
            properties = props.footerProps.iconPropsFb(scr);
            pageObj.iconsCheck(client, footerFbCls, properties, scr);
            //
            properties = props.footerProps.iconproperties(scr);
            callback.multiloop(client, iconClass, properties, scr);
            //footer banner properties check
            properties = props.footerProps.bannerProps(scr);
            callback.multiloop(client, footerBannerCls, properties, scr);
        }

    },
    "check for background-image of social-icons": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            client.expect.element('.social-icon-link .icon-facebook').to.have.css('background-image').which.contains('facebook');
            client.expect.element('.social-icon-link .icon-twitter').to.have.css('background-image').which.contains('twitter');
            client.expect.element('.footer-fscs .icon-fscs').to.have.css('background-image').which.contains('fscs-footer');
        }

    },
    'Check for footer links on hover':function(client){
        var size = client.globals.size.widths;
            client.maximizeWindow();
          client.elements('css selector', '.row.footer-links a', test)
        function test(elems){
         for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
            elems.value.forEach(function(element,index) {
                client.moveTo(element.ELEMENT,2,2)
                    .pause(4000)
                     client.elementIdCssProperty(element.ELEMENT,'text-decoration-line', function(result){
                      client.verify.equal(result.value, 'underline');
                  });
                
            });
          }
        }
    },
    "check for background-image of social-icons in hover-state": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            client.moveToElement('.comp-footer-wrapper .footer-social-icon .social-icon-link', 0, 0, function() {
                this.expect.element('.comp-footer-wrapper .footer-social-icon .social-icon-link a.icon-facebook').to.have.css('background-image').which.contains('facebook-hover');

            });
            client.moveToElement('.comp-footer-wrapper .footer-social-icon .social-icon-link', 10, 10, function() {
                this.expect.element('.comp-footer-wrapper .footer-social-icon .social-icon-link a.icon-twitter').to.have.css('background-image').which.contains('twitter-hover.png');
            });

        }
         client.end();
    }
    

   /* "check for hover on footer-links and footer-links": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            menu=pageObj.elements.footerHover.selector,
            size = client.globals.size.widths,nextElem;
        client.maximizeWindow();
        client.elements('css selector',menu,function(res){
            res.value.forEach(function(element,index){
               console.log(res.value.length);
                for(var i=0; i<res.value.length; i++){
                    let nextElem='.row.footer-links a'+':nth-of-type('+(i+1)+')';
                    // aElem=nextElem + ' a';
                      console.log(nextElem);
                      client.moveToElement(nextElem, 10, 10, function(){
                            //this.expect.element(nextElem).to.have.css('text-decoration-line').which.contains('underline');
                            this.assert.cssProperty(nextElem,'text-decoration-line','underline');
                      });
                   }
                 
           });
        })

      client.end();
    
    }*/
   
}