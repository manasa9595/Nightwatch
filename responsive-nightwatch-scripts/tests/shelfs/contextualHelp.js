var props = require('../components/other_comp/contextualHelp_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js');

module.exports = {
    "Opening the URL": function(client) {
        var pageObj = client.page.contextualHelp_selectors(),
        signup = client.page.signup(), 
            callback = client.page.common(),          
            size = client.globals.size.widths;
            pageObj.navigate();
            //signInAsAdmin();
            //client.url(signup.url); 
            client.pause(20000);
            client.waitForElementVisible("body",35000);       
    },
    "Verifying Contextual Help Shelf top and bottom padding": function(client) {
        var pageObj = client.page.contextualHelp_selectors(),           
            callback = client.page.common(),
            contextualHelp = pageObj.elements.ShelfTopBottomPaddingSel.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.contextualHelpProps.ShelfTopBottomPaddingSel(scr);
                callback.multiloop(client, contextualHelp, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(contextualHelp,95000);
                client.pause(5000);
                properties = props.contextualHelpProps.ShelfTopBottomPaddingSel('lg');  
                callback.multiloop(client, contextualHelp, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(contextualHelp,95000);
                client.pause(5000);
                properties = props.contextualHelpProps.ShelfTopBottomPaddingSel('sm');  
                callback.multiloop(client, contextualHelp, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(contextualHelp,95000);
                client.pause(5000);
                properties = props.contextualHelpProps.ShelfTopBottomPaddingSel('xs');  
                callback.multiloop(client, contextualHelp, properties, 'xs');

            }
        }
    },
    "Verifying Contextual Help Shelf's Title Properties": function(client) {
        var pageObj = client.page.contextualHelp_selectors(),
            iebrowser=client.options.desiredCapabilities.isIEbrowser,           
            callback = client.page.common(),
            TitleBottomPaddingSel = pageObj.elements.TitleBottomPadding.selector,
            TitlePropertySelector = pageObj.elements.TitlePropertySel.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.contextualHelpProps.TitleBottomPadding(scr);
                callback.multiloop(client, TitleBottomPaddingSel, properties, scr);
                properties1 = globalTitleComp.globaltitle.h2props(scr);
                callback.multiloop(client, TitlePropertySelector, properties1, scr);
                properties2 = props.contextualHelpProps.TitlePropertySel(scr);
                callback.multiloop(client, TitlePropertySelector, properties2, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(TitleBottomPaddingSel,35000);
                properties = props.contextualHelpProps.TitleBottomPadding('lg');  
                callback.multiloop(client, TitleBottomPaddingSel, properties, 'lg');
                properties1 = globalTitleComp.globaltitle.h2props('lg');  
                callback.multiloop(client, TitlePropertySelector, properties1, 'lg');
                properties2 = props.contextualHelpProps.TitlePropertySel('lg',iebrowser);  
                callback.multiloop(client, TitlePropertySelector, properties2, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(TitleBottomPaddingSel,35000);
                properties = props.contextualHelpProps.TitleBottomPadding('sm');  
                callback.multiloop(client, TitleBottomPaddingSel, properties, 'sm');
                properties1 = globalTitleComp.globaltitle.h2props('sm');  
                callback.multiloop(client, TitlePropertySelector, properties1, 'sm');
                properties2 = props.contextualHelpProps.TitlePropertySel('sm');  
                callback.multiloop(client, TitlePropertySelector, properties2, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(TitleBottomPaddingSel,35000);
                properties = props.contextualHelpProps.ShelfTopBottomPaddingSel('xs');  
                callback.multiloop(client, TitleBottomPaddingSel, properties, 'xs');
                properties1 = globalTitleComp.globaltitle.h2props('xs');  
                callback.multiloop(client, TitlePropertySelector, properties1, 'xs');
                properties2 = props.contextualHelpProps.TitlePropertySel('xs');  
                callback.multiloop(client, TitlePropertySelector, properties2, 'xs');
            }
        }
    },
    "Verifying Contextual Help Shelf's Accordion Properties": function(client) {
        var pageObj = client.page.contextualHelp_selectors(), 
            iebrowser=client.options.desiredCapabilities.isIEbrowser,         
            callback = client.page.common(),
            contextualHelp = pageObj.elements.AccordionPropSel.selector,
            contextualHelp1 = pageObj.elements.CloseiconbesideAccordion.selector,
            contextualHelp2 = pageObj.elements.AccordionToRTEPadding.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.contextualHelpProps.AccordionPropSel(scr);
                callback.multiloop(client, contextualHelp, properties, scr);
                properties1 = props.contextualHelpProps.CloseiconbesideAccordion(scr);
                callback.multiloop(client, contextualHelp1, properties1, scr);
                properties2 = props.contextualHelpProps.AccordionToRTEPadding(scr);
                callback.multiloop(client, contextualHelp2, properties2, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                //client.waitForElementVisible(contextualHelp,35000);
                properties = props.contextualHelpProps.AccordionPropSel('lg',iebrowser);  
                callback.multiloop(client, contextualHelp, properties, 'lg');
                properties1 = props.contextualHelpProps.CloseiconbesideAccordion('lg');  
                callback.multiloop(client, contextualHelp1, properties1, 'lg');
                properties2 = props.contextualHelpProps.AccordionToRTEPadding('lg');  
                callback.multiloop(client, contextualHelp2, properties2, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
               // client.waitForElementVisible(contextualHelp,35000);
                properties = props.contextualHelpProps.AccordionPropSel('sm');  
                callback.multiloop(client, contextualHelp, properties, 'sm');
                properties1 = props.contextualHelpProps.CloseiconbesideAccordion('sm');  
                callback.multiloop(client, contextualHelp1, properties1, 'sm');
                properties2 = props.contextualHelpProps.AccordionToRTEPadding('sm');  
                callback.multiloop(client, contextualHelp2, properties2, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                //client.waitForElementVisible(contextualHelp,35000);
                properties = props.contextualHelpProps.AccordionPropSel('xs');  
                callback.multiloop(client, contextualHelp, properties, 'xs');
                properties1 = props.contextualHelpProps.CloseiconbesideAccordion('xs');  
                callback.multiloop(client, contextualHelp1, properties1, 'xs');
                properties2 = props.contextualHelpProps.AccordionToRTEPadding('xs');  
                callback.multiloop(client, contextualHelp2, properties2, 'xs');
            }
        }
    },
    "Verifying Contextual Help Shelf RTE Properties": function(client) {
        var pageObj = client.page.contextualHelp_selectors(),
            iebrowser=client.options.desiredCapabilities.isIEbrowser,           
            callback = client.page.common(),
            contextualHelp = pageObj.elements.RTEPanelInnerPaddings.selector,
            contextualHelp1 = pageObj.elements.RTENormaltextProps.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.contextualHelpProps.RTEPanelInnerPaddings(scr);
                callback.multiloop(client, contextualHelp, properties, scr);
                properties1 = props.contextualHelpProps.RTENormaltextProps(scr);
                callback.multiloop(client, contextualHelp1, properties1, scr);                
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                properties = props.contextualHelpProps.RTEPanelInnerPaddings('lg');  
                callback.multiloop(client, contextualHelp, properties, 'lg');
                properties1 = props.contextualHelpProps.RTENormaltextProps('lg',iebrowser);  
                callback.multiloop(client, contextualHelp1, properties1, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.contextualHelpProps.RTEPanelInnerPaddings('sm');  
                callback.multiloop(client, contextualHelp, properties, 'sm');
                properties1 = props.contextualHelpProps.RTENormaltextProps('sm');  
                callback.multiloop(client, contextualHelp1, properties1, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){                
                properties = props.contextualHelpProps.RTEPanelInnerPaddings('xs');  
                callback.multiloop(client, contextualHelp, properties, 'xs');
                properties1 = props.contextualHelpProps.RTENormaltextProps('xs');  
                callback.multiloop(client, contextualHelp1, properties1, 'xs');
            }
        }
    },  
    "click on accordion":function(client){
            client.click('.accordion-comp .panel-group .panel .panel-heading a .acordion-crossicon', function(result) {
            this.pause(1000);
            this.assert.cssProperty('.accordion-comp .panel-group .panel .panel-collapse .panel-body','display','block');
            this.pause(1000);
            });
           
    }, 
     /* 'Check for links on hover(imp)': function(client) {
        var pageObj = client.page.contextualHelp_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          selector = pageObj.elements.Textanimation1.selector,
          size = client.globals.size.widths;
        // pageObj.navigate()
        client.maximizeWindow();
        client.elements('css selector', selector, test) 

        function test(elems) {
            for (scr in size) {
                var properties = props.contextualHelpProps.TextanimationProps(scr);
                client.resizeWindow(size[scr].width, size[scr].height);
                 
                client.moveToElement(selector, 10, 10);
                client.pause(10000);
                callback.singleElem(client, selector, properties, scr);  
   
            }
        }
    },

    'Check for cross properties on hover(imp)': function(client) {
        var pageObj = client.page.contextualHelp_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          selector = pageObj.elements.cross1.selector,
          size = client.globals.size.widths;
   
        client.maximizeWindow();
        client.elements('css selector', selector, test) 

        function test(elems) {
            for (scr in size) {
                var properties = props.contextualHelpProps.crossProps(scr);
                client.resizeWindow(size[scr].width, size[scr].height);
                client.moveToElement(selector, 10, 10);
                client.pause(10000);
                callback.singleElem(client, selector, properties, scr);
                
            }
        }
    },
     'Check for cross props (imp)': function(client) {
         var pageObj = client.page.contextualHelp_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            cross = pageObj.elements.cross1.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.contextualHelpProps.cross1Props(scr);
            callback.singleElem(client, cross, properties, scr);
        }
    },*/
    "Ending the session":function(client){
        client.end();
    }
    
}
