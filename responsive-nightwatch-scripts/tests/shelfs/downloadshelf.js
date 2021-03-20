var titleComp =require('../components/title/title.js'),
    downlinksComp =require('../components/downloadlinks/downloadlinks.js');
   props = require('../components/other_comp/downloadshelf_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),

module.exports={
   "Navigate to Page": function(client) {
        var pageObj = client.page.downloadshelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            size = client.globals.size.widths;
            signup.navigate()
            .signInAsAdmin();
            client.maximizeWindow();
            //client.url(signup.url);    
   },
    "Check for download Shelf props": function(client) {
        var pageObj = client.page.downloadshelf_selectors(),
            callback = client.page.common(),
            dIcon = pageObj.elements.dShelfIcon.selector,
            dShelfPadding = pageObj.elements.dShelfPadding.selector,
            dShelfnoPadding = pageObj.elements.dShelfnoPadding.selector,
            dTitleWrapper = pageObj.elements.dTitleWrapper.selector,
            dshelfTitle = pageObj.elements.dshelfTitle.selector,
            dTextWrapper = pageObj.elements.dTextWrapper.selector,
            dContent = pageObj.elements.dContent.selector,
            dLinkWrapper = pageObj.elements.dLinkWrapper.selector,
            dLink = pageObj.elements.dLink.selector,
            dLinkIcon = pageObj.elements.dLinkIcon.selector,
            iebrowser=client.options.desiredCapabilities.isIEbrowser;
            size = client.globals.size.widths;
            client.waitForElementVisible("body", 5000);
            client.waitForElementVisible(dIcon, 15000);   

            if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
            //download shelf icon props
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.downloadShelfProps.dIconProps(scr);
            callback.multiloop(client, dIcon, properties, scr);
 
            //check for download shelf padding
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.downloadShelfProps.dShelfPaddingProps(scr);
            callback.multiloop(client, dShelfPadding, properties, scr);
        
            properties = props.downloadShelfProps.dShelfnoPaddingProps(scr);
            callback.multiloop(client, dShelfnoPadding, properties, scr);

            //check for download shelf title wrapper properties
            properties = props.downloadShelfProps.dTitleWrapperProps(scr);
            callback.multiloop(client, dTitleWrapper, properties, scr);

            //download shelf title properties check 
             properties = globalTitleComp.globaltitle.h3props(scr);
            callback.multiloop(client, dshelfTitle, properties, scr);

            //download shelf title font-color,family
            properties = props.downloadShelfProps.titprops(scr);
            callback.multiloop(client, dshelfTitle, properties, scr);

            //check for download shelf text wrapper properties
             properties = props.downloadShelfProps.dTextWrapperProps(scr);
            callback.multiloop(client, dTextWrapper, properties, scr);

            //check for download shelf content properties
             properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, dContent, properties, scr);

            //check for download shelf link wrapper properties
              properties = props.downloadShelfProps.dLinkWrapperProps(scr);
            callback.multiloop(client, dLinkWrapper, properties, scr);

             //check for download shelf link properties
               properties = props.downloadShelfProps.dLinkProps(scr);
            callback.multiloop(client, dLink, properties, scr);

             //check for download link Icon properties
               properties = props.downloadShelfProps.dLinkIconProps(scr);
            callback.multiloop(client, dLinkIcon, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
            console.log("isLGDevice");
            //download shelf icon props
            properties = props.downloadShelfProps.dIconProps('lg');
            callback.singleElem(client, dIcon, properties, 'lg');
 
            //check for download shelf padding
            properties = props.downloadShelfProps.dShelfPaddingProps('lg');
            callback.singleElem(client, dShelfPadding, properties, 'lg');
        
            properties = props.downloadShelfProps.dShelfnoPaddingProps('lg');
            callback.singleElem(client, dShelfnoPadding, properties, 'lg');

            //check for download shelf title wrapper properties
            properties = props.downloadShelfProps.dTitleWrapperProps('lg');
            callback.multiloop(client, dTitleWrapper, properties, 'lg');

            //download shelf title properties check 
             properties = globalTitleComp.globaltitle.h3props('lg');
            callback.multiloop(client, dshelfTitle, properties, 'lg');

            //download shelf title font-color,family
            properties = props.downloadShelfProps.titprops('lg',iebrowser);
            //properties = props.downloadShelfProps.titprops('lg');
            callback.multiloop(client, dshelfTitle, properties, 'lg');

            //check for download shelf text wrapper properties
            properties = props.downloadShelfProps.dTextWrapperProps('lg',iebrowser);
            //properties = props.downloadShelfProps.dTextWrapperProps('lg');
            callback.multiloop(client, dTextWrapper, properties, 'lg');

            //check for download shelf content properties
             properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
            callback.multiloop(client, dContent, properties, 'lg');

            //check for download shelf link wrapper properties
              properties = props.downloadShelfProps.dLinkWrapperProps('lg');
            callback.multiloop(client, dLinkWrapper, properties, 'lg');

             //check for download shelf link properties
             properties = props.downloadShelfProps.dLinkProps('lg',iebrowser);
            //properties = props.downloadShelfProps.dLinkProps('lg');
            callback.multiloop(client, dLink, properties, 'lg');

             //check for download link Icon properties
               properties = props.downloadShelfProps.dLinkIconProps('lg');
            callback.multiloop(client, dLinkIcon, properties, 'lg');
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            console.log("isSMDevice");
           //download shelf icon props
            properties = props.downloadShelfProps.dIconProps('sm');
            callback.singleElem(client, dIcon, properties, 'sm');
 
            //check for download shelf padding
            properties = props.downloadShelfProps.dShelfPaddingProps('sm');
            callback.singleElem(client, dShelfPadding, properties, 'sm');
        
            properties = props.downloadShelfProps.dShelfnoPaddingProps('sm');
            callback.singleElem(client, dShelfnoPadding, properties, 'sm');

            //check for download shelf title wrapper properties
            properties = props.downloadShelfProps.dTitleWrapperProps('sm');
            callback.multiloop(client, dTitleWrapper, properties, 'sm');

            //download shelf title properties check 
             properties = globalTitleComp.globaltitle.h3props('sm');
            callback.multiloop(client, dshelfTitle, properties, 'sm');

            //download shelf title font-color,family
            properties = props.downloadShelfProps.titprops('sm');
            callback.multiloop(client, dshelfTitle, properties, 'sm');

            //check for download shelf text wrapper properties
             properties = props.downloadShelfProps.dTextWrapperProps('sm');
            callback.multiloop(client, dTextWrapper, properties, 'sm');

            //check for download shelf content properties
             properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
            callback.multiloop(client, dContent, properties, 'sm');

            //check for download shelf link wrapper properties
              properties = props.downloadShelfProps.dLinkWrapperProps('sm');
            callback.multiloop(client, dLinkWrapper, properties, 'sm');

             //check for download shelf link properties
               properties = props.downloadShelfProps.dLinkProps('sm');
            callback.multiloop(client, dLink, properties, 'sm');

             //check for download link Icon properties
               properties = props.downloadShelfProps.dLinkIconProps('sm');
            callback.multiloop(client, dLinkIcon, properties, 'sm');
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            console.log("isXSDevice");
           //download shelf icon props
            properties = props.downloadShelfProps.dIconProps('xs');
            callback.singleElem(client, dIcon, properties, 'xs');
 
            //check for download shelf padding
            properties = props.downloadShelfProps.dShelfPaddingProps('xs');
            callback.singleElem(client, dShelfPadding, properties, 'xs');
        
            properties = props.downloadShelfProps.dShelfnoPaddingProps('xs');
            callback.singleElem(client, dShelfnoPadding, properties, 'xs');

            //check for download shelf title wrapper properties
            properties = props.downloadShelfProps.dTitleWrapperProps('xs');
            callback.multiloop(client, dTitleWrapper, properties, 'xs');

            //download shelf title properties check 
             properties = globalTitleComp.globaltitle.h3props('xs');
            callback.multiloop(client, dshelfTitle, properties, 'xs');

            //download shelf title font-color,family
            properties = props.downloadShelfProps.titprops('xs');
            callback.multiloop(client, dshelfTitle, properties, 'xs');

            //check for download shelf text wrapper properties
             properties = props.downloadShelfProps.dTextWrapperProps('xs');
            callback.multiloop(client, dTextWrapper, properties, 'xs');

            //check for download shelf content properties
             properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
            callback.multiloop(client, dContent, properties, 'xs');

            //check for download shelf link wrapper properties
              properties = props.downloadShelfProps.dLinkWrapperProps('xs');
            callback.multiloop(client, dLinkWrapper, properties, 'xs');

             //check for download shelf link properties
               properties = props.downloadShelfProps.dLinkProps('xs');
            callback.multiloop(client, dLink, properties, 'xs');

             //check for download link Icon properties
               properties = props.downloadShelfProps.dLinkIconProps('xs');
            callback.multiloop(client, dLinkIcon, properties, 'xs');

            }
        }    
   },
    

    "opening attachment":function(client){
            client.click('a.dlinks span', function(result) {
            });
           
    },          

    'Closing Browser': function(client){
      client.pause(1000);
      client.end();
    }
         
};


