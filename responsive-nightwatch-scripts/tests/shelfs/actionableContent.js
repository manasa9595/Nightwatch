var props = require('../components/other_comp/actionableContent_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js');

module.exports = {
    "Opening the URL": function(client) {
        var pageObj = client.page.actionableContent_selectors(),
            callback = client.page.common(),
            size = client.globals.size.widths;
            pageObj.navigate();
            client.pause(20000);
            client.waitForElementVisible("body",35000);       
    },
    "Verifying Main Title Props": function(client) {
        var pageObj = client.page.actionableContent_selectors(),           
            callback = client.page.common(),
            actconttSel = pageObj.elements.titleTopPaddingSel.selector,
            actconttSel1 = pageObj.elements.titlePropertySel.selector,
            actconttSel2 = pageObj.elements.titleBottomSpaceSel.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.actionableContentProps.titleTopPaddingSel(scr);
                callback.multiloop(client, actconttSel, properties, scr); 
                properties = globalTitleComp.globaltitle.h2props(scr);
                callback.multiloop(client, actconttSel1, properties, scr); 
                properties = props.actionableContentProps.titlePropertySel(scr);
                callback.multiloop(client, actconttSel1, properties, scr);             
                properties = props.actionableContentProps.titleBottomSpaceSel(scr);
                callback.multiloop(client, actconttSel2, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                
                properties = props.actionableContentProps.titleTopPaddingSel('lg');
                callback.multiloop(client, actconttSel, properties, 'lg'); 
                properties = globalTitleComp.globaltitle.h2props('lg');
                callback.multiloop(client, actconttSel1, properties, 'lg'); 
                properties = props.actionableContentProps.titlePropertySel('lg');
                callback.multiloop(client, actconttSel1, properties, 'lg');             
                properties = props.actionableContentProps.titleBottomSpaceSel('lg');
                callback.multiloop(client, actconttSel2, properties, 'lg');

            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.titleTopPaddingSel('sm');
                callback.multiloop(client, actconttSel, properties, 'sm'); 
                properties = globalTitleComp.globaltitle.h2props('sm');
                callback.multiloop(client, actconttSel1, properties, 'sm'); 
                properties = props.actionableContentProps.titlePropertySel('sm');
                callback.multiloop(client, actconttSel1, properties, 'sm');             
                properties = props.actionableContentProps.titleBottomSpaceSel('sm');
                callback.multiloop(client, actconttSel2, properties, 'sm');
                
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.titleTopPaddingSel('xs');
                callback.multiloop(client, actconttSel, properties, 'xs'); 
                properties = globalTitleComp.globaltitle.h2props('xs');
                callback.multiloop(client, actconttSel1, properties, 'xs'); 
                properties = props.actionableContentProps.titlePropertySel('xs');
                callback.multiloop(client, actconttSel1, properties, 'xs');             
                properties = props.actionableContentProps.titleBottomSpaceSel('xs');
                callback.multiloop(client, actconttSel2, properties, 'xs');

            }
        }
    },
    "Verifying grey bar Props":function (client){
        var pageObj = client.page.actionableContent_selectors(),           
            callback = client.page.common(),
            actconttSel = pageObj.elements.whiteGreyBar.selector,
            actconttSel1 = pageObj.elements.brandGreyBar.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.actionableContentProps.whiteGreyBar(scr);
                callback.multiloop(client, actconttSel, properties, scr);               
                properties = props.actionableContentProps.brandGreyBar(scr);
                callback.multiloop(client, actconttSel1, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.whiteGreyBar('lg');  
                callback.multiloop(client, actconttSel, properties, 'lg');
                properties = props.actionableContentProps.brandGreyBar('lg');  
                callback.multiloop(client, actconttSel1, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.whiteGreyBar('sm');  
                callback.multiloop(client, actconttSel, properties, 'sm');
                properties = props.actionableContentProps.brandGreyBar('sm');  
                callback.multiloop(client, actconttSel1, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.whiteGreyBar('xs');  
                callback.multiloop(client, actconttSel, properties, 'xs');
                properties = props.actionableContentProps.brandGreyBar('xs');  
                callback.multiloop(client, actconttSel1, properties, 'xs');

            }
        }
    }, 
   "Verifying image props":function (client){
        var pageObj = client.page.actionableContent_selectors(),           
            callback = client.page.common(),
            actconttSel = pageObj.elements.imageLeftSpaceexceptonlyoneBG.selector,
            actconttSel5 = pageObj.elements.imageLeftSpaceForOnlyoneBG.selector,
            actconttSel1 = pageObj.elements.imageDimensions.selector,
            actconttSel2 = pageObj.elements.imageDimensionsSVG.selector,
            actconttSel3 = pageObj.elements.imageColorBrandbgSVG.selector,
            actconttSel4 = pageObj.elements.imageColorWhiteBgSVG.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.actionableContentProps.imageLeftSpaceexceptonlyoneBG(scr);
                callback.multiloop(client, actconttSel, properties, scr);               
                properties = props.actionableContentProps.imageDimensions(scr);
                callback.multiloop(client, actconttSel1, properties, scr);
                properties = props.actionableContentProps.imageDimensionsSVG(scr);
                callback.multiloop(client, actconttSel2, properties, scr);               
                properties = props.actionableContentProps.imageColorBrandbgSVG(scr);
                callback.multiloop(client, actconttSel3, properties, scr);
                properties = props.actionableContentProps.imageColorWhiteBgSVG(scr);
                callback.multiloop(client, actconttSel4, properties, scr); 
                properties = props.actionableContentProps.imageLeftSpaceForOnlyoneBG(scr);
                callback.multiloop(client, actconttSel5, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.imageLeftSpaceexceptonlyoneBG('lg');
                callback.multiloop(client, actconttSel, properties, 'lg');               
                properties = props.actionableContentProps.imageDimensions('lg');
                callback.multiloop(client, actconttSel1, properties, 'lg');
                properties = props.actionableContentProps.imageDimensionsSVG('lg');
                callback.multiloop(client, actconttSel2, properties, 'lg');               
                properties = props.actionableContentProps.imageColorBrandbgSVG('lg');
                callback.multiloop(client, actconttSel3, properties, 'lg');
                properties = props.actionableContentProps.imageColorWhiteBgSVG('lg');
                callback.multiloop(client, actconttSel4, properties, 'lg'); 
                properties = props.actionableContentProps.imageLeftSpaceForOnlyoneBG('lg');
                callback.multiloop(client, actconttSel5, properties, 'lg');


            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.imageLeftSpaceexceptonlyoneBG('sm');
                callback.multiloop(client, actconttSel, properties, 'sm');               
                properties = props.actionableContentProps.imageDimensions('sm');
                callback.multiloop(client, actconttSel1, properties, 'sm');
                properties = props.actionableContentProps.imageDimensionsSVG('sm');
                callback.multiloop(client, actconttSel2, properties, 'sm');               
                properties = props.actionableContentProps.imageColorBrandbgSVG('sm');
                callback.multiloop(client, actconttSel3, properties, 'sm');
                properties = props.actionableContentProps.imageColorWhiteBgSVG('sm');
                callback.multiloop(client, actconttSel4, properties, 'sm'); 
                properties = props.actionableContentProps.imageLeftSpaceForOnlyoneBG('sm');
                callback.multiloop(client, actconttSel5, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.imageLeftSpaceexceptonlyoneBG('xs');
                callback.multiloop(client, actconttSel, properties, 'xs');               
                properties = props.actionableContentProps.imageDimensions('xs');
                callback.multiloop(client, actconttSel1, properties, 'xs');
                properties = props.actionableContentProps.imageDimensionsSVG('xs');
                callback.multiloop(client, actconttSel2, properties, 'xs');               
                properties = props.actionableContentProps.imageColorBrandbgSVG('xs');
                callback.multiloop(client, actconttSel3, properties, 'xs');
                properties = props.actionableContentProps.imageColorWhiteBgSVG('xs');
                callback.multiloop(client, actconttSel4, properties, 'xs'); 
                properties = props.actionableContentProps.imageLeftSpaceForOnlyoneBG('xs');
                callback.multiloop(client, actconttSel5, properties, 'xs');
            }
        }      
    },
    "Verifying content spacings":function (client){
        var pageObj = client.page.actionableContent_selectors(),           
            callback = client.page.common(),
            actconttSel = pageObj.elements.contentSpacings.selector,
            actconttSel1 = pageObj.elements.contentSpacingsBrandBgWhole.selector,
            actconttSel2 = pageObj.elements.contentSpacingsonBrandBgonLeftOnly.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.actionableContentProps.contentSpacings(scr);
                callback.multiloop(client, actconttSel, properties, scr);               
                properties = props.actionableContentProps.contentSpacingsBrandBgWhole(scr);
                callback.multiloop(client, actconttSel1, properties, scr);
                properties = props.actionableContentProps.contentSpacingsonBrandBgonLeftOnly(scr);
                callback.multiloop(client, actconttSel2, properties, scr);  
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.contentSpacings('lg');
                callback.multiloop(client, actconttSel, properties, 'lg');               
                properties = props.actionableContentProps.contentSpacingsBrandBgWhole('lg');
                callback.multiloop(client, actconttSel1, properties, 'lg');
                properties = props.actionableContentProps.contentSpacingsonBrandBgonLeftOnly('lg');
                callback.multiloop(client, actconttSel2, properties, 'lg');


            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);
                properties = props.actionableContentProps.contentSpacings('sm');
                callback.multiloop(client, actconttSel, properties, 'sm');               
                properties = props.actionableContentProps.contentSpacingsBrandBgWhole('sm');
                callback.multiloop(client, actconttSel1, properties, 'sm');
                properties = props.actionableContentProps.contentSpacingsonBrandBgonLeftOnly('sm');
                callback.multiloop(client, actconttSel2, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                
                properties = props.actionableContentProps.contentSpacings('xs');
                callback.multiloop(client, actconttSel, properties, 'xs');               
                properties = props.actionableContentProps.contentSpacingsBrandBgWhole('xs');
                callback.multiloop(client, actconttSel1, properties, 'xs');
                properties = props.actionableContentProps.contentSpacingsonBrandBgonLeftOnly('xs');
                callback.multiloop(client, actconttSel2, properties, 'xs');
            }
        }
    },
    "Verifying content inner Title Props":function (client){
      var pageObj = client.page.actionableContent_selectors(),           
            callback = client.page.common(),
            actconttSel = pageObj.elements.contentTitleSpacings.selector,
            actconttSel1 = pageObj.elements.whitebgContentTitleProps.selector,
            actconttSel2 = pageObj.elements.brandBgContentTitleProps.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.actionableContentProps.contentTitleSpacings(scr);
                callback.multiloop(client, actconttSel, properties, scr);
                properties = props.actionableContentProps.whitebgContentTitleProps(scr);
                callback.multiloop(client, actconttSel1, properties, scr);
                properties = props.actionableContentProps.brandBgContentTitleProps(scr);
                callback.multiloop(client, actconttSel2, properties, scr);  
                properties = globalTitleComp.globaltitle.h3custprops(scr);
                callback.multiloop(client, actconttSel1, properties, scr);
                properties = globalTitleComp.globaltitle.h3custprops(scr);
                callback.multiloop(client, actconttSel2, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                              
                properties = props.actionableContentProps.contentTitleSpacings('lg');
                callback.multiloop(client, actconttSel, properties, 'lg');
                properties = props.actionableContentProps.whitebgContentTitleProps('lg');
                callback.multiloop(client, actconttSel1, properties, 'lg');
                properties = props.actionableContentProps.brandBgContentTitleProps('lg');
                callback.multiloop(client, actconttSel2, properties, 'lg');  
                properties = globalTitleComp.globaltitle.h3custprops('lg');
                callback.multiloop(client, actconttSel1, properties, 'lg');
                properties = globalTitleComp.globaltitle.h3custprops('lg');
                callback.multiloop(client, actconttSel2, properties, 'lg');


            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                               
                properties = props.actionableContentProps.contentTitleSpacings('sm');
                callback.multiloop(client, actconttSel, properties, 'sm');
                properties = props.actionableContentProps.whitebgContentTitleProps('sm');
                callback.multiloop(client, actconttSel1, properties, 'sm');
                properties = props.actionableContentProps.brandBgContentTitleProps('sm');
                callback.multiloop(client, actconttSel2, properties, 'sm');  
                properties = globalTitleComp.globaltitle.h3custprops('sm');
                callback.multiloop(client, actconttSel1, properties, 'sm');
                properties = globalTitleComp.globaltitle.h3custprops('sm');
                callback.multiloop(client, actconttSel2, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                               
                properties = props.actionableContentProps.contentTitleSpacings('xs');
                callback.multiloop(client, actconttSel, properties, 'xs');
                properties = props.actionableContentProps.whitebgContentTitleProps('xs');
                callback.multiloop(client, actconttSel1, properties, 'xs');
                properties = props.actionableContentProps.brandBgContentTitleProps('xs');
                callback.multiloop(client, actconttSel2, properties, 'xs');  
                properties = globalTitleComp.globaltitle.h3custprops('xs');
                callback.multiloop(client, actconttSel1, properties, 'xs');
                properties = globalTitleComp.globaltitle.h3custprops('xs');
                callback.multiloop(client, actconttSel2, properties, 'xs');
            }
        }  
    },
    "Verifying content Text Props":function (client){
        var pageObj = client.page.actionableContent_selectors(),           
            callback = client.page.common(),
            actconttSel = pageObj.elements.textPropsOnWhiteBg.selector,
            actconttSel1 = pageObj.elements.textPropsOnBrandBg.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.actionableContentProps.textPropsOnWhiteBg(scr);
                callback.multiloop(client, actconttSel, properties, scr);  
                properties = props.actionableContentProps.textPropsOnBrandBg(scr);
                callback.multiloop(client, actconttSel1, properties, scr); 
                properties = textComp.text.textCompsACt(scr);
                callback.multiloop(client, actconttSel, properties, scr); 
                properties = textComp.text.textCompsACt(scr);
                callback.multiloop(client, actconttSel1, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                
                properties = props.actionableContentProps.textPropsOnWhiteBg('lg');
                callback.multiloop(client, actconttSel, properties, 'lg');  
                properties = props.actionableContentProps.textPropsOnBrandBg('lg');
                callback.multiloop(client, actconttSel1, properties, 'lg'); 
                properties = textComp.text.textCompsACt('lg');
                callback.multiloop(client, actconttSel, properties, 'lg'); 
                properties = textComp.text.textCompsACt('lg');
                callback.multiloop(client, actconttSel1, properties, 'lg');


            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                
                properties = props.actionableContentProps.textPropsOnWhiteBg('sm');
                callback.multiloop(client, actconttSel, properties, 'sm');  
                properties = props.actionableContentProps.textPropsOnBrandBg('sm');
                callback.multiloop(client, actconttSel1, properties, 'sm'); 
                properties = textComp.text.textCompsACt('sm');
                callback.multiloop(client, actconttSel, properties, 'sm'); 
                properties = textComp.text.textCompsACt('sm');
                callback.multiloop(client, actconttSel1, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                
                properties = props.actionableContentProps.textPropsOnWhiteBg('xs');
                callback.multiloop(client, actconttSel, properties, 'xs');  
                properties = props.actionableContentProps.textPropsOnBrandBg('xs');
                callback.multiloop(client, actconttSel1, properties, 'xs'); 
                properties = textComp.text.textCompsACt('xs');
                callback.multiloop(client, actconttSel, properties, 'xs'); 
                properties = textComp.text.textCompsACt('xs');
                callback.multiloop(client, actconttSel1, properties, 'xs');
            }
        }
    },
    "Verifying content CTA Props":function (client){
        var pageObj = client.page.actionableContent_selectors(),           
            callback = client.page.common(),
            actconttSel = pageObj.elements.secCTATopSpacings.selector,
            actconttSel1 = pageObj.elements.primaryCTATopSpacings.selector,
            actconttSel2 = pageObj.elements.primaryCTAPropsonWhiteBg.selector,
            actconttSel3 = pageObj.elements.primaryCTAPropsonBrandBg.selector,
            actconttSel4 = pageObj.elements.secCTAPropsonWhiteBg.selector,
            actconttSel5 = pageObj.elements.secCTAPropsonBrandBg.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.actionableContentProps.secCTATopSpacings(scr);
                callback.multiloop(client, actconttSel, properties, scr);  
                properties = props.actionableContentProps.primaryCTATopSpacings(scr);
                callback.multiloop(client, actconttSel1, properties, scr); 
                properties = props.actionableContentProps.primaryCTAPropsonWhiteBg(scr);
                callback.multiloop(client, actconttSel2, properties, scr);  
                properties = props.actionableContentProps.primaryCTAPropsonBrandBg(scr);
                callback.multiloop(client, actconttSel3, properties, scr);
                properties = props.actionableContentProps.secCTAPropsonWhiteBg(scr);
                callback.multiloop(client, actconttSel4, properties, scr);  
                properties = props.actionableContentProps.secCTAPropsonBrandBg(scr);
                callback.multiloop(client, actconttSel5, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                
                properties = props.actionableContentProps.secCTATopSpacings('lg');
                callback.multiloop(client, actconttSel, properties, 'lg');  
                properties = props.actionableContentProps.primaryCTATopSpacings('lg');
                callback.multiloop(client, actconttSel1, properties, 'lg'); 
                properties = props.actionableContentProps.primaryCTAPropsonWhiteBg('lg');
                callback.multiloop(client, actconttSel2, properties, 'lg');  
                properties = props.actionableContentProps.primaryCTAPropsonBrandBg('lg');
                callback.multiloop(client, actconttSel3, properties, 'lg');
                properties = props.actionableContentProps.secCTAPropsonWhiteBg('lg');
                callback.multiloop(client, actconttSel4, properties, 'lg');  
                properties = props.actionableContentProps.secCTAPropsonBrandBg('lg');
                callback.multiloop(client, actconttSel5, properties, 'lg');


            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                
                properties = props.actionableContentProps.secCTATopSpacings('sm');
                callback.multiloop(client, actconttSel, properties, 'sm');  
                properties = props.actionableContentProps.primaryCTATopSpacings('sm');
                callback.multiloop(client, actconttSel1, properties, 'sm'); 
                properties = props.actionableContentProps.primaryCTAPropsonWhiteBg('sm');
                callback.multiloop(client, actconttSel2, properties, 'sm');  
                properties = props.actionableContentProps.primaryCTAPropsonBrandBg('sm');
                callback.multiloop(client, actconttSel3, properties, 'sm');
                properties = props.actionableContentProps.secCTAPropsonWhiteBg('sm');
                callback.multiloop(client, actconttSel4, properties, 'sm');  
                properties = props.actionableContentProps.secCTAPropsonBrandBg('sm');
                callback.multiloop(client, actconttSel5, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(actconttSel,95000);
                client.pause(5000);                
                properties = props.actionableContentProps.secCTATopSpacings('xs');
                callback.multiloop(client, actconttSel, properties, 'xs');  
                properties = props.actionableContentProps.primaryCTATopSpacings('xs');
                callback.multiloop(client, actconttSel1, properties, 'xs'); 
                properties = props.actionableContentProps.primaryCTAPropsonWhiteBg('xs');
                callback.multiloop(client, actconttSel2, properties, 'xs');  
                properties = props.actionableContentProps.primaryCTAPropsonBrandBg('xs');
                callback.multiloop(client, actconttSel3, properties, 'xs');
                properties = props.actionableContentProps.secCTAPropsonWhiteBg('xs');
                callback.multiloop(client, actconttSel4, properties, 'xs');  
                properties = props.actionableContentProps.secCTAPropsonBrandBg('xs');
                callback.multiloop(client, actconttSel5, properties, 'xs');
            }
        }
    },
    "Ending the session":function(client){
        client.end();
    }
    
}
