var props = require('../components/other_comp/Standalone_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js');
module.exports = {
    "Browser Login ": function(client) {
        var pageObj = client.page.Standalone_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            size = client.globals.size.widths;
            signup.navigate()
            .signInAsAdmin();
            //pageObj.navigate();
           
            client.maximizeWindow();
            //client.url(signup.url);    
   },

   "Check for standalone wrapper and icon wrapper": function(client) {
        var pageObj = client.page.Standalone_selectors(),
            callback = client.page.common(),
            shelfWrapCls = pageObj.elements.shelfWrapper.selector,
            shelfBgClass = pageObj.elements.shelfBg.selector,
            shelfBgGreyClass = pageObj.elements.shelfBgGrey.selector,
            pinkClr= pageObj.elements.pinkIcon.selector,
            yellowClr = pageObj.elements.yellowIcon.selector,
            iconWrapCls = pageObj.elements.iconWrapper.selector,
            iconWrapClss = pageObj.elements.iconWrapperS.selector,
            size = client.globals.size.widths;
            client.waitForElementVisible("body", 5000);
            client.waitForElementVisible(shelfWrapCls, 15000);   


        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Standalone wrapper padding props
            properties = props.StandaloneProps.marProps(scr);
            callback.multiloop(client, shelfWrapCls, properties, scr);
            //standalone shlf bg color--white 
            properties = props.StandaloneProps.shelfBgProps(scr);
            callback.multiloop(client, shelfBgClass, properties, scr);
            //standalone shlf bg whitesmoke check
            properties = props.StandaloneProps.shelfBgGreyProps(scr);
            callback.multiloop(client, shelfBgGreyClass, properties, scr);
            //standalone icon props
            properties = props.StandaloneProps.iconProps(scr);
            callback.multiloop(client,iconWrapCls,properties, scr);
            //standalone small icon props(only for premier)
            properties = props.StandaloneProps.iconPropss(scr);
            callback.multiloop(client,iconWrapClss,properties, scr);
            //colors of yellow icon Check
            properties = props.StandaloneProps.yellowProps();
            callback.multiloop(client, yellowClr, properties, scr);
            //colors of red icon Check
            properties = props.StandaloneProps.pinkProps();
            callback.multiloop(client, pinkClr, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
            console.log("isLGDevice");
            //Standalone wrapper padding props
            properties = props.StandaloneProps.marProps('lg');
            callback.multiloop(client, shelfWrapCls, properties, 'lg');
            //standalone shlf bg color--white 
            properties = props.StandaloneProps.shelfBgProps('lg');
            callback.multiloop(client, shelfBgClass, properties, 'lg');
            //standalone shlf bg whitesmoke check
            properties = props.StandaloneProps.shelfBgGreyProps('lg');
            callback.multiloop(client, shelfBgGreyClass, properties, 'lg');
            //standalone icon props
            properties = props.StandaloneProps.iconProps('lg');
            callback.multiloop(client,iconWrapCls,properties, 'lg');
            //colors of yellow icon Check
            properties = props.StandaloneProps.yellowProps('lg');
            callback.multiloop(client, yellowClr, properties, 'lg');
            //colors of red icon Check
            properties = props.StandaloneProps.pinkProps('lg');
            callback.multiloop(client, pinkClr, properties, 'lg');
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            console.log("isSMDevice");
            //Standalone wrapper padding props
            properties = props.StandaloneProps.marProps('sm');
            callback.multiloop(client, shelfWrapCls, properties, 'sm');
            //standalone shlf bg color--white 
            properties = props.StandaloneProps.shelfBgProps('sm');
            callback.multiloop(client, shelfBgClass, properties, 'sm');
            //standalone shlf bg whitesmoke check
            properties = props.StandaloneProps.shelfBgGreyProps('sm');
            callback.multiloop(client, shelfBgGreyClass, properties, 'sm');
            //standalone icon props
            properties = props.StandaloneProps.iconProps('sm');
            callback.multiloop(client,iconWrapCls,properties, 'sm');
            //colors of yellow icon Check
            properties = props.StandaloneProps.yellowProps('sm');
            callback.multiloop(client, yellowClr, properties, 'sm');
            //colors of red icon Check
            properties = props.StandaloneProps.pinkProps('sm');
            callback.multiloop(client, pinkClr, properties, 'sm');
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            console.log("isXSDevice");
            //Standalone wrapper padding props
            properties = props.StandaloneProps.marProps('xs');
            callback.multiloop(client, shelfWrapCls, properties, 'xs');
            //standalone shlf bg color--white 
            properties = props.StandaloneProps.shelfBgProps('xs');
            callback.multiloop(client, shelfBgClass, properties, 'xs');
            //standalone shlf bg whitesmoke check
            properties = props.StandaloneProps.shelfBgGreyProps('xs');
            callback.multiloop(client, shelfBgGreyClass, properties, 'xs');
            //standalone icon props
            properties = props.StandaloneProps.iconProps('xs');
            callback.multiloop(client,iconWrapCls,properties, 'xs');
            //colors of yellow icon Check
            properties = props.StandaloneProps.yellowProps('xs');
            callback.multiloop(client, yellowClr, properties, 'xs');
            //colors of red icon Check
            properties = props.StandaloneProps.pinkProps('xs');
            callback.multiloop(client, pinkClr, properties, 'xs');

            }
        }    
   },

    "check for title properties": function(client){
        var pageObj = client.page.Standalone_selectors(),
            callback = client.page.common(),
            titleWrapCls = pageObj.elements.titleWrapper.selector,
            titTextCls = pageObj.elements.titText.selector,
            size = client.globals.size.widths;
            client.maximizeWindow();

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Standalone title wrapper padding props
            properties = titleComp.text.titleStandalone(scr);
            callback.multiloop(client, titleWrapCls, properties, scr);
             //Standalone title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h3props(scr);
            callback.multiloop(client,titTextCls,properties, scr);
             //Standalone title text properties
            properties = globalTitleComp.globaltitle.fontProperties(scr);
            callback.multiloop(client, titTextCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
            console.log("isLGDevice");
            //Standalone title wrapper padding props
            properties = titleComp.text.titleStandalone('lg');
            callback.multiloop(client, titleWrapCls, properties, 'lg');
             //Standalone title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h3props('lg');
            callback.multiloop(client,titTextCls,properties, 'lg');
             //Standalone title text properties
            properties = globalTitleComp.globaltitle.fontProperties('lg');
            callback.multiloop(client, titTextCls, properties, 'lg');
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            console.log("isSMDevice");
            //Standalone title wrapper padding props
            properties = titleComp.text.titleStandalone('sm');
            callback.multiloop(client, titleWrapCls, properties, 'sm');
             //Standalone title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h3props('sm');
            callback.multiloop(client,titTextCls,properties, 'sm');
             //Standalone title text properties
            properties = globalTitleComp.globaltitle.fontProperties('sm');
            callback.multiloop(client, titTextCls, properties, 'sm');
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            console.log("isXSDevice");
           //Standalone title wrapper padding props
            properties = titleComp.text.titleStandalone('xs');
            callback.multiloop(client, titleWrapCls, properties, 'xs');
             //Standalone title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h3props('xs');
            callback.multiloop(client,titTextCls,properties, 'xs');
             //Standalone title text properties
            properties = globalTitleComp.globaltitle.fontProperties('xs');
            callback.multiloop(client, titTextCls, properties, 'xs');

            }
        }    

    },
   "check for text properties" : function(client){
         var pageObj = client.page.Standalone_selectors(),
            callback = client.page.common(),
            textWrapCls = pageObj.elements.textWrapper.selector,
            textWrapCl = pageObj.elements.textWrapWithoutTit.selector,
            legalCpyCls = pageObj.elements.legalCpy.selector,
            richtextCls = pageObj.elements.richtextsel.selector,
            size = client.globals.size.widths,
            textWrapperClass = pageObj.elements.textWrap.selector;//text wrapper without title
            client.maximizeWindow();

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
            //Standalone with title wrapper padding props
            properties = props.StandaloneProps.textProps(scr);
            callback.multiloop(client, textWrapCls,properties, scr);
            //Standalone without title wrapper padding props
            properties = props.StandaloneProps.textProp(scr);
            callback.multiloop(client, textWrapCl,properties, scr);
            //standalone text props(fs and lh)
            properties = globalTitleComp.globaltitle.legalCopy(scr);
            callback.multiloop(client, legalCpyCls , properties, scr);
            //standalone rich text props
            properties = props.StandaloneProps.linktext(scr);
            callback.multiloop(client, richtextCls , properties, scr);
            }
         
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
            console.log("isLGDevice");
            for(scr in size){
            //Standalone with title wrapper padding props
            properties = props.StandaloneProps.textProps('lg');
            callback.multiloop(client, textWrapCls,properties, 'lg');
            //Standalone without title wrapper padding props
            properties = props.StandaloneProps.textProp('lg');
            callback.multiloop(client, textWrapCl,properties, 'lg');
            //standalone text props(fs and lh)
            properties = globalTitleComp.globaltitle.legalCopy('lg');
            callback.multiloop(client, legalCpyCls , properties, 'lg');
            //standalone rich text props
            properties = props.StandaloneProps.linktext('lg');
            callback.multiloop(client, richtextCls , properties, 'lg');
            }
    
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            console.log("isSMDevice");
            for(scr in size){
            //Standalone with title wrapper padding props
            properties = props.StandaloneProps.textProps('sm');
            callback.multiloop(client, textWrapCls,properties, 'sm');
            //Standalone without title wrapper padding props
            properties = props.StandaloneProps.textProp('sm');
            callback.multiloop(client, textWrapCl,properties, 'sm');
            //standalone text props(fs and lh)
            properties = globalTitleComp.globaltitle.legalCopy('sm');
            callback.multiloop(client, legalCpyCls , properties, 'sm');
            //standalone rich text props
            properties = props.StandaloneProps.linktext('sm');
            callback.multiloop(client, richtextCls , properties, 'sm');
            }
    
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            console.log("isXSDevice");
           for(scr in size){
            //Standalone with title wrapper padding props
            properties = props.StandaloneProps.textProps('xs');
            callback.multiloop(client, textWrapCls,properties, 'xs');
            //Standalone without title wrapper padding props
            properties = props.StandaloneProps.textProp('xs');
            callback.multiloop(client, textWrapCl,properties, 'xs');
            //standalone text props(fs and lh)
            properties = globalTitleComp.globaltitle.legalCopy('xs');
            callback.multiloop(client, legalCpyCls , properties, 'xs');
            //standalone rich text props
            properties = props.StandaloneProps.linktext('xs');
            callback.multiloop(client, richtextCls , properties, 'xs');
         }

            }
        }        

    },

    'Closing Browser': function(client){
      client.pause(1000);
      client.end();
    }
    
}