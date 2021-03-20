var props = require('../components/other_comp/campaignPromo_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js'),
    ctaComp = require('../components/cta/cta.js'),
    rteComp = require('../components/Rte/rte.js');

module.exports = {

   "Check for shelf padding": function(client) {
        var pageObj = client.page.campaignPromo_selector(),
           // signup = client.page.signup(),
            callback = client.page.common(),
            mainShelfMargin = pageObj.elements.mainShelfMargin.selector,
            size = client.globals.size.widths;
            
           pageObj.navigate();  
            client.waitForElementVisible("body", 10000);

        if(client.globals.test_settings.isLocal){
            //client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.campaignPromoProps.shelfProps(scr);  
                callback.multiloop(client, mainShelfMargin , properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                
                properties = props.campaignPromoProps.shelfProps('lg');  
                callback.multiloop(client, mainShelfMargin , properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.campaignPromoProps.shelfProps('sm');  
                callback.multiloop(client, mainShelfMargin , properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = props.campaignPromoProps.shelfProps('xs');  
                callback.multiloop(client, mainShelfMargin , properties, 'xs');

            }
        }

        client.pause(5000);
    },

    "Check for img wrapper properties": function(client) {
        var pageObj = client.page.campaignPromo_selector(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imgWrapCls = pageObj.elements.imgWrap.selector,
            size = client.globals.size.widths;

            //client.waitForElementVisible("body", 10000);
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.campaignPromoProps.imgWrapProps(scr);
                callback.multiloop(client, imgWrapCls , properties, scr);
            }
        }
         else {
            if(client.options.desiredCapabilities.isLGDevice){
                properties = props.campaignPromoProps.imgWrapProps('lg');  
                callback.multiloop(client, imgWrapCls , properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.campaignPromoProps.imgWrapProps('sm');  
                callback.multiloop(client, imgWrapCls , properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = props.campaignPromoProps.imgWrapProps('xs');  
                callback.multiloop(client, imgWrapCls , properties, 'xs');

            }
        }
        client.pause(5000);    
    },

    "Check for img width and height": function(client) {
        var pageObj = client.page.campaignPromo_selector(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imgCls = pageObj.elements.imgCls.selector,
            size = client.globals.size.widths;

            //client.waitForElementVisible("body", 10000);
            if(client.globals.test_settings.isLocal){
                client.maximizeWindow();
                for (scr in size) {
                    client.resizeWindow(size[scr].width, size[scr].height);
                    properties = props.campaignPromoProps.imgProps(scr);
                    callback.multiloop(client, imgCls , properties, scr);
                }
            }
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                properties = props.campaignPromoProps.imgProps('lg');  
                callback.multiloop(client, imgCls , properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.campaignPromoProps.imgProps('sm');  
                callback.multiloop(client, imgCls , properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = props.campaignPromoProps.imgProps('xs');  
                callback.multiloop(client, imgCls , properties, 'xs');

            }
        }

        client.pause(5000);        
    },

    "Check for title wrapper props": function(client) {
        var pageObj = client.page.campaignPromo_selector(),
            signup = client.page.signup(),
            callback = client.page.common(),
            titTextCls = pageObj.elements.titTextSel.selector,
            titleMarginXS = pageObj.elements.titleMarginXS.selector,
            size = client.globals.size.widths;
           // client.waitForElementVisible("body", 10000);
            if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
                for (scr in size) {
                    client.resizeWindow(size[scr].width, size[scr].height);
                    //check for font-size and line-height of title
                    //properties = globalTitleComp.globaltitle.h2props(scr);
                    //callback.multiloop(client, titTextCls , properties, scr);
                    //check for  font-family of title
                    /*properties = globalTitleComp.globaltitle.fontProperties(scr);
                    callback.multiloop(client, titTextCls , properties, scr);*/
                    //check for font-color  of title
                    properties = props.campaignPromoProps.titlecompColor(scr);
                    callback.multiloop(client, titTextCls , properties, scr);
                    //check for margin of title in mobile view
                    properties = props.campaignPromoProps.titlecompMarginXS(scr);
                    callback.multiloop(client, titleMarginXS , properties, scr);
                } 
            } 
             else {
            if(client.options.desiredCapabilities.isLGDevice){
                properties = globalTitleComp.globaltitle.h2props('lg');  
                callback.multiloop(client, titTextCls , properties, 'lg');
               /* properties = globalTitleComp.globaltitle.fontProperties('lg');  
                callback.multiloop(client, titTextCls , properties, 'lg');*/
                properties = props.campaignPromoProps.titlecompColor('lg');  
                callback.multiloop(client, titTextCls , properties, 'lg');
                properties = props.campaignPromoProps.titlecompMarginXS('lg');  
                callback.multiloop(client, titleMarginXS , properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = globalTitleComp.globaltitle.h2props('sm');  
                callback.multiloop(client, titTextCls , properties, 'sm');
                /*properties = globalTitleComp.globaltitle.fontProperties('sm');  
                callback.multiloop(client, titTextCls , properties, 'sm');*/
                properties = props.campaignPromoProps.titlecompColor('sm');  
                callback.multiloop(client, titTextCls , properties, 'sm');
                properties = props.campaignPromoProps.titlecompMarginXS('sm');  
                callback.multiloop(client, titleMarginXS , properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = globalTitleComp.globaltitle.h2props('xs');  
                callback.multiloop(client, titTextCls , properties, 'xs');
                /*properties = globalTitleComp.globaltitle.fontProperties('xs');  
                callback.multiloop(client, titTextCls , properties, 'xs');*/
                properties = props.campaignPromoProps.titlecompColor('xs');  
                callback.multiloop(client, titTextCls , properties, 'xs');
                properties = props.campaignPromoProps.titlecompMarginXS('xs');  
                callback.multiloop(client, titleMarginXS , properties, 'xs');

            }
        }

        client.pause(5000);
    },
 
    "Check for rte wrapper props": function(client) {
        var pageObj = client.page.campaignPromo_selector(),
            signup = client.page.signup(),
            callback = client.page.common(),
            rteTextCls = pageObj.elements.rteText.selector
            size = client.globals.size.widths;

            //client.waitForElementVisible("body", 10000);
            if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
                for (scr in size) {
                    client.resizeWindow(size[scr].width, size[scr].height);
                    //check for font-size and line-height of rte text
                    properties = rteComp.rte.rteBodyCust(scr);
                    callback.multiloop(client, rteTextCls , properties, scr);
                    //check for rte color
                    properties = props.campaignPromoProps.rteGrey(scr);
                    callback.multiloop(client, rteTextCls , properties, scr);
                }
            }
             else {
            if(client.options.desiredCapabilities.isLGDevice){
                properties = rteComp.rte.rteBodyCust('lg');  
                callback.multiloop(client, rteTextCls , properties, 'lg');
                properties = props.campaignPromoProps.rteGrey('lg');  
                callback.multiloop(client, rteTextCls , properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = rteComp.rte.rteBodyCust('sm');  
                callback.multiloop(client, rteTextCls , properties, 'sm');
                properties = props.campaignPromoProps.rteGrey('sm');  
                callback.multiloop(client, rteTextCls , properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = rteComp.rte.rteBodyCust('xs');  
                callback.multiloop(client, rteTextCls , properties, 'xs');
                properties = props.campaignPromoProps.rteGrey('xs');  
                callback.multiloop(client, rteTextCls , properties, 'xs');

            }
        }

        client.pause(5000);
      
    },

    "Check for primary cta properties": function(client) {
        var pageObj = client.page.campaignPromo_selector(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ctaPrimarymar = pageObj.elements.ctaPrimarymar.selector,
            size = client.globals.size.widths;

            //client.waitForElementVisible("body", 10000);
            if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
                for (scr in size) {
                    client.resizeWindow(size[scr].width, size[scr].height);
                    properties = props.campaignPromoProps.primaryCTAMarProps(scr);
                    callback.multiloop(client, ctaPrimarymar , properties, scr);
                }
            }
             else {
            if(client.options.desiredCapabilities.isLGDevice){
                properties = props.campaignPromoProps.primaryCTAMarProps('lg');  
                callback.multiloop(client, ctaPrimarymar , properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.campaignPromoProps.primaryCTAMarProps('sm');  
                callback.multiloop(client, ctaPrimarymar , properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = props.campaignPromoProps.primaryCTAMarProps('xs');  
                callback.multiloop(client, ctaPrimarymar , properties, 'xs');

            }
        }

        client.pause(5000);       
    },

    "Check for primary cta padding properties": function(client) {
        var pageObj = client.page.campaignPromo_selector(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ctaPrimaryprops = pageObj.elements.ctaPrimaryprops.selector,
            size = client.globals.size.widths;

           // client.waitForElementVisible("body", 10000);
            if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
                for (scr in size) {
                    client.resizeWindow(size[scr].width, size[scr].height);
                    properties = props.campaignPromoProps.primaryCTAProps(scr);
                    callback.multiloop(client, ctaPrimaryprops , properties, scr);

                }
            }
             else {
            if(client.options.desiredCapabilities.isLGDevice){
                properties = props.campaignPromoProps.primaryCTAProps('lg');  
                callback.multiloop(client, ctaPrimaryprops , properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.campaignPromoProps.primaryCTAProps('sm');  
                callback.multiloop(client, ctaPrimaryprops , properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = props.campaignPromoProps.primaryCTAProps('xs');  
                callback.multiloop(client, ctaPrimaryprops , properties, 'xs');

            }
        }

        client.pause(5000);       
    },

    "Check for image right alignment properties": function(client) {
        var pageObj = client.page.campaignPromo_selector(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imgright = pageObj.elements.imgright.selector,
            size = client.globals.size.widths;

            //client.waitForElementVisible("body", 10000);
            if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
                for (scr in size) {
                    client.resizeWindow(size[scr].width, size[scr].height);
                    properties = props.campaignPromoProps.imgrightProps(scr);
                    callback.multiloop(client, imgright , properties, scr);

                }
            }
             else {
            if(client.options.desiredCapabilities.isLGDevice){
                properties = props.campaignPromoProps.imgrightProps('lg');  
                callback.multiloop(client, imgright , properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.campaignPromoProps.imgrightProps('sm');  
                callback.multiloop(client, imgright , properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = props.campaignPromoProps.imgrightProps('xs');  
                callback.multiloop(client, imgright , properties, 'xs');

            }
        }
        //client.end();
    }
}

