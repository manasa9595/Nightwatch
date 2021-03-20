var props = require('../components/other_comp/articleShelf_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js'),
    ctaComp = require('../components/cta/cta.js'),
    rteComp = require('../components/Rte/rte.js');

module.exports = {
'@tags': ['select_account','articleShelf'],
    /*---------------------CASE 1---------------------------//
Check for shelf padding top and bottom(with secondary cta,with rte wrapper,with image, 
without bgcolor)*/
   "Check for shelf padding": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfCls = pageObj.elements.shelfSel.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            signup.navigate();
            //pageObj.navigate();
            client.waitForElementVisible("body", 10000);
            client.waitForElementVisible(shelfCls, 10000);
            
           //.signInAsAdmin();
           
           
           // client.url(signup.url);

           console.log(client.globals.test_settings.isLocal);

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.articleShelfProps.marProps(scr);  
                callback.multiloop(client, shelfCls , properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                properties = props.articleShelfProps.marProps('lg');  
                callback.multiloop(client, shelfCls , properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.articleShelfProps.marProps('sm');  
                callback.multiloop(client, shelfCls , properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = props.articleShelfProps.marProps('xs');  
                callback.multiloop(client, shelfCls , properties, 'xs');

            }
        }

        client.pause(5000);

       // client.end();
        
    },

    "Check for title wrapper props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            titCls = pageObj.elements.titSel.selector,
            titTextCls = pageObj.elements.titTextSel.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
           
            //    .signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for font-size and line-height of title
            properties = globalTitleComp.globaltitle.h2props(scr);
            callback.multiloop(client, titTextCls , properties, scr);
            //check for  font-family of title
            properties = globalTitleComp.globaltitle.fontProperties(scr);
            callback.multiloop(client, titTextCls , properties, scr);
            //check for font-color  of title
            properties = props.articleShelfProps.titlecompColor(scr);
            callback.singleElem(client, titTextCls , properties, scr);
        }
      
    },

    "Check for rte wrapper props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            rteTextCls = pageObj.elements.rteText.selector,
            rteGCls = pageObj.elements.rteGrey.selector
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
           
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.rteWrapProps(scr);
            callback.multiloop(client, rteTextCls , properties, scr);
            //check for font-size and line-height of rte text
            properties = rteComp.rte.rteBodyCust(scr);
            callback.multiloop(client, rteTextCls , properties, scr);
            //check for font-color  of rte
            properties = props.articleShelfProps.rteGrey(scr);
            callback.singleElem(client, rteGCls , properties, scr);
        }
      client.end();
    }
    

   /* "Check for img width and height": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imgWrapCls = pageObj.elements.imgWrap.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.imgWrapProps(scr);
            callback.multiloop(client, imgWrapCls , properties, scr);
        }
            
    },

    "Check for secondary cta properties": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ctaSec = pageObj.elements.ctaSecondary.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = ctaComp.cta.ctaSarticle(scr);
            callback.multiloop(client, ctaSec , properties, scr);

        }
         
    },*/

    /*/* /*---------------------CASE 2---------------------------//
/*Check for shelf padding top and bottom(with secondary cta,with rte wrapper,with image, 
with bgcolor)*/
   //shelf padding (multiloop)

/*    "Check for title wrapper props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            titTextColor = pageObj.elements.titThemeblue.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate()
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for font-color  of title
            properties = props.articleShelfProps.titleColor(scr);
            callback.singleElem(client, titTextColor , properties, scr);
        }
      
    },

    "Check for rte wrapper props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            rteWCls = pageObj.elements.rteWhite.selector
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
            for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for font-color  of rte
            properties = props.articleShelfProps.rteWhite(scr);
            callback.singleElem(client, rteWCls , properties, scr);
        }
        
    },

    "Check for primary cta properties": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ctaP = pageObj.elements.ctaPrimary.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = ctaComp.cta.ctaPrimary(scr);
            callback.singleElem(client, ctaP , properties, scr);

        }
    },*/
    

    //image props (multiloop)

    //secondary cta properties (multiloop)

       //---------CASE 1---------------//
      //shelf padding top and bottom(without secondary cta and background color)
   /* "Check for shelf padding": function(client) {
        //console.log(client.globals.test_settings.isLocal);
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfCls = pageObj.elements.shelfSel.selector,
            size = client.globals.size.widths;
           signup.navigate()
           .signInAsAdmin();
            client.url(signup.url);
            
            client.waitForElementVisible("body",5000);
            client.maximizeWindow();

            for (scr in size) {
                    client.resizeWindow(size[scr].width, size[scr].height);
                    properties = props.articleShelfProps.marProps(scr);
                    callback.singleElem(client, shelfCls, properties, scr);
                }*/
           /*if(client.globals.test_settings.isLocal){
                for (scr in size) {
                    client.resizeWindow(size[scr].width, size[scr].height);
                    properties = props.articleShelfProps.marProps(scr);
                    callback.singleElem(client, shelfCls, properties, scr);
                }
            } 
            else {
                properties = props.articleShelfProps.marProps(client.clientBrowser.device);
                callback.singleElem(client, shelfCls, properties, client.clientBrowser.device);
            }
      
    },
   "Check for img width and height": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imgWrapCls = pageObj.elements.imgWrap.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.imgWrapProps(scr);
            callback.singleElem(client, imgWrapCls , properties, scr);
        }
         
        }
         else {
                properties = props.articleShelfProps.marProps(client.clientBrowser.device);
                callback.singleElem(client, shelfCls, properties, client.clientBrowser.device);
            }
            client.end();
    }
*/
 /*  "Check for title wrapper props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            titCls = pageObj.elements.titSel.selector,
            titTextCls = pageObj.elements.titTextSel.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = titleComp.text.artTitle(scr);
            callback.multiloop(client, titCls , properties, scr);
            //check for font-size and line-height of title
            //properties = globalTitleComp.globaltitle.h3props(scr);
            //callback.multiloop(client, titTextCls , properties, scr);
            //check for font-color and font-family f title
            //properties = globalTitleComp.globaltitle.fontProperties(scr);
            //callback.singleElem(client, titTextCls , properties, scr);

        }
      
    },
    "Check for rte wrapper props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            titCls = pageObj.elements.titSel.selector,
            rteTextCls = pageObj.elements.rteText.selector
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = titleComp.text.artTitle(scr);
            callback.multiloop(client, titCls , properties, scr);
            //check for font-size and line-height of rte text
            properties = rteComp.rte.rteBodyCust(scr);
            callback.multiloop(client, rteTextCls , properties, scr);
        }
      
    },

 //----------------------CASE 2-----------------------//   
 //Check for shelf padding top and bottom(with secondary cta,background color)
    "Check for background-color property and padding of shelf": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            bgRoseCls = pageObj.elements.bgRoseSel.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.bgPadding(scr);
            callback.multiloop(client, bgRoseCls , properties, scr);

        }
        
    },
    "Check for secondary cta properties": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            bgRoseCls = pageObj.elements.bgRoseSel.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = ctaComp.cta.ctaSarticle(scr);
            callback.singleElem(client, bgRoseCls , properties, scr);

        }
         client.end();
    }







/*---------------------CASE 3---------------------------//
Check for shelf padding top and bottom(with secondary cta,with rte wrapper, 
without bgcolor)*/
 /*  "Check for shelf padding": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfCls = pageObj.elements.shelfSel.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.marProps(scr);
            callback.singleElem(client, shelfCls , properties, scr);

        }
        client.end();
    }
    
      "Check for primary cta properties": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            bgRoseCls = pageObj.elements.bgRoseSel.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = ctaComp.cta.ctaSarticle(scr);
            callback.singleElem(client, bgRoseCls , properties, scr);

        }
        
        
    }

  // TEST FOR IMAGE PLACEMENT AND NEW BG COLORS

    //Checking NatWest Business properties theme-violet

        "Check for single article violet props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
            violetPadding = pageObj.elements.violetPadding.selector,

            size = client.globals.size.widths;      
            signup.navigate()
            .signInAsAdmin();
            client.maximizeWindow();
            client.url(signup.url); 
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.bgPadding(scr);
            callback.multiloop(client, violetPadding, properties, scr);
            properties = props.articleShelfProps.violet_bgcolor(scr);
            callback.multiloop(client, violetPadding, properties, scr);

        }

    },
    //Checking RBS Personal properties theme-heather

        "Check for single article heather props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            heatherPadding = pageObj.elements.heatherPadding.selector,
            size = client.globals.size.widths;
            //signup.navigate()
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.bgPadding(scr);
            callback.multiloop(client, heatherPadding, properties, scr);
            properties = props.articleShelfProps.heather_bgcolor(scr);
            callback.multiloop(client, heatherPadding, properties, scr);

        }

    },
    //Checking RBS Personal properties theme-royalblue

        "Check for single article royalblue props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            royalbluePadding = pageObj.elements.royalbluePadding.selector,
            size = client.globals.size.widths;
            //signup.navigate()
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.marProps(scr);
            callback.multiloop(client, royalbluePadding, properties, scr);
            properties = props.articleShelfProps.royalblue_bgcolor(scr);
            callback.multiloop(client, royalbluePadding, properties, scr);

        }

    },

    "Check for title wrapper props": function(client) {
            var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
            titCls = pageObj.elements.titSel.selector,
            titTextSel = pageObj.elements.titTextSel.selector,
            size = client.globals.size.widths;      
            //signup.navigate()
            //.signInAsAdmin();
            client.maximizeWindow();
            //client.url(signup.url); 
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for font-size and line-height of title
            properties = globalTitleComp.globaltitle.h2props(scr);
            callback.multiloop(client, titTextSel , properties, scr);
            //check for  font-family of title
            properties = globalTitleComp.globaltitle.fontProperties(scr);
            callback.multiloop(client, titTextSel , properties, scr);
        }
      
    },

    "Check for rte wrapper props": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            rteTextCls = pageObj.elements.rteText.selector,
            rteGCls = pageObj.elements.rteprops.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.rteWrapProps(scr);
            callback.multiloop(client, rteTextCls , properties, scr);
            //check for font-size and line-height of rte text
            properties = rteComp.rte.rteBodyCust(scr);
            callback.multiloop(client, rteTextCls , properties, scr);
            //check for font-color  of rte
            properties = props.articleShelfProps.rteWhite(scr);
            callback.singleElem(client, rteGCls , properties, scr);
        }
      
    },
    

    "Check for img width and height": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imgWrapCls = pageObj.elements.imgWrap.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.imgWrapProps(scr);
            callback.multiloop(client, imgWrapCls , properties, scr);
        }
            
    },
    "Check for primary cta properties": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ctaPrimarymar = pageObj.elements.ctaPrimarymar.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.primaryCTAMarProps(scr);
            callback.multiloop(client, ctaPrimarymar , properties, scr);

        }       
    },

     "Check for primary cta padding properties": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ctaPrimaryprops = pageObj.elements.ctaPrimaryprops.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.primaryCTAProps(scr);
            callback.multiloop(client, ctaPrimaryprops , properties, scr);

        }       
    },

    "Check for secondary cta properties": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ctaSecondaryprops = pageObj.elements.ctaSecondaryprops.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.secCTAMarProps(scr);
            callback.multiloop(client, ctaSecondaryprops , properties, scr);

        }
    },

    "Check for image left alignment properties": function(client) {
        var pageObj = client.page.articleShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imgleft = pageObj.elements.imgleft.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.articleShelfProps.imgleftProps(scr);
            callback.multiloop(client, imgleft , properties, scr);

        }
    }*/

  // END OF TEST FOR IMAGE PLACEMENT AND NEW BG COLORS 
}

