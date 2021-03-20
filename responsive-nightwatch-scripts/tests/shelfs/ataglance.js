var props = require('../components/other_comp/ataglance_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js');
module.exports={
    "Opening the URL at a glance": function(client) {
        var pageObj = client.page.ataglance_selectors(),
            callback = client.page.common(),
            size = client.globals.size.widths;
        client.maximizeWindow();
            pageObj.navigate();
            client.pause(20000);
            client.waitForElementVisible("body",35000);       
    },
    "Verifying Shelf's top and Bottom spacings": function(client) {
        var pageObj = client.page.ataglance_selectors(), 
            callback = client.page.common(),
            atAGlanceShelf = pageObj.elements.wholeShelf.selector,
            size = client.globals.size.widths; 
        client.maximizeWindow();                     
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.atAGlanceShelf.TopBottomPaddings(scr);
                callback.multiloop(client, atAGlanceShelf, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.TopBottomPaddings('lg');  
                callback.multiloop(client, atAGlanceShelf, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.TopBottomPaddings('sm');  
                callback.multiloop(client, atAGlanceShelf, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.TopBottomPaddings('xs');  
                callback.multiloop(client, atAGlanceShelf, properties, 'xs');
            }
        }
    },
    "Verifying Title properties" : function(client) {
       var pageObj = client.page.ataglance_selectors(),           
            callback = client.page.common(),
            atAGlanceShelf = pageObj.elements.titleWrapper.selector,
            atAGlanceShelfTitle = pageObj.elements.title.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.atAGlanceShelf.Title_max_height_property(scr);
                callback.multiloop(client, atAGlanceShelf, properties, scr);
                properties1 = globalTitleComp.globaltitle.h2custprops(scr);
                callback.multiloop(client, atAGlanceShelfTitle, properties1, scr);
                properties2 = props.atAGlanceShelf.Title_properties(scr);
                callback.multiloop(client, atAGlanceShelfTitle, properties2, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.Title_max_height_property('lg');  
                callback.multiloop(client, atAGlanceShelf, properties, 'lg');
                properties1 = globalTitleComp.globaltitle.h2custprops('lg');
                callback.multiloop(client, atAGlanceShelfTitle, properties1, 'lg');
                properties2 = props.atAGlanceShelf.Title_properties('lg');
                callback.multiloop(client, atAGlanceShelfTitle, properties2, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.Title_max_height_property('sm');  
                callback.multiloop(client, atAGlanceShelf, properties, 'sm');
                properties1 = globalTitleComp.globaltitle.h2custprops('sm');
                callback.multiloop(client, atAGlanceShelfTitle, properties1, 'sm');
                properties2 = props.atAGlanceShelf.Title_properties('sm');
                callback.multiloop(client, atAGlanceShelfTitle, properties2, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.Title_max_height_property('xs');  
                callback.multiloop(client, atAGlanceShelf, properties, 'xs');
                properties1 = globalTitleComp.globaltitle.h2custprops('xs');
                callback.multiloop(client, atAGlanceShelfTitle, properties1, 'xs');
                properties2 = props.atAGlanceShelf.Title_properties('xs');
                callback.multiloop(client, atAGlanceShelfTitle, properties2, 'xs');
            }
        } 
    },
    "Verifying text below title" : function(client) {
        var pageObj = client.page.ataglance_selectors(),           
            callback = client.page.common(),
            atAGlanceShelf = pageObj.elements.textbelowtitlewrapper.selector,
            atAGlanceShelftext = pageObj.elements.textBelowTitle.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.atAGlanceShelf.Text_top_space(scr);
                callback.multiloop(client, atAGlanceShelf, properties, scr);
                properties1 = textComp.text.pageOverviewTextprops(scr);
                callback.multiloop(client, atAGlanceShelftext, properties1, scr);
                properties2 = props.atAGlanceShelf.Text_properties(scr);
                callback.multiloop(client, atAGlanceShelftext, properties2, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.Text_top_space('lg');  
                callback.multiloop(client, atAGlanceShelf, properties, 'lg');
                properties1 = textComp.text.pageOverviewTextprops('lg');  
                callback.multiloop(client, atAGlanceShelftext, properties1, 'lg');
                properties2 = props.atAGlanceShelf.Text_properties('lg');  
                callback.multiloop(client, atAGlanceShelftext, properties2, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.Text_top_space('sm');  
                callback.multiloop(client, atAGlanceShelf, properties, 'sm');
                properties1 = textComp.text.pageOverviewTextprops('sm');  
                callback.multiloop(client, atAGlanceShelftext, properties1, 'sm');
                properties2 = props.atAGlanceShelf.Text_properties('sm');  
                callback.multiloop(client, atAGlanceShelftext, properties2, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.Text_top_space('xs');  
                callback.multiloop(client, atAGlanceShelf, properties, 'xs');
                properties1 = textComp.text.pageOverviewTextprops('xs');  
                callback.multiloop(client, atAGlanceShelftext, properties1, 'xs');
                properties2 = props.atAGlanceShelf.Text_properties('xs');  
                callback.multiloop(client, atAGlanceShelftext, properties2, 'xs');
            }
        }
    },
    "Verifying standalone shelf" : function(client) {
        var pageObj = client.page.ataglance_selectors(),           
            callback = client.page.common(),
            atAGlanceShelf = pageObj.elements.compliancewrapper.selector,
            atAGlanceShelf1 = pageObj.elements.complianceicon.selector,
            atAGlanceStanaloneText = pageObj.elements.compliancetext.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){ 
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.atAGlanceShelf.compliance_top_spacing(scr);
                callback.multiloop(client, atAGlanceShelf, properties, scr);
                properties1 = props.atAGlanceShelf.compliance_icon_props(scr);
                callback.multiloop(client, atAGlanceShelf1, properties1, scr);
                properties2 = textComp.text.pageOverviewTextprops(scr);
                callback.multiloop(client, atAGlanceStanaloneText, properties2, scr);
                properties3 = props.atAGlanceShelf.compliance_text_props(scr);
                callback.multiloop(client, atAGlanceStanaloneText, properties3, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.compliance_top_spacing('lg');  
                callback.multiloop(client, atAGlanceShelf, properties, 'lg');
                properties1 = props.atAGlanceShelf.compliance_icon_props('lg');  
                callback.multiloop(client, atAGlanceShelf1, properties1, 'lg');
                properties2 = textComp.text.pageOverviewTextprops('lg');  
                callback.multiloop(client, atAGlanceStanaloneText, properties2, 'lg');
                properties3 = props.atAGlanceShelf.compliance_text_props('lg');  
                callback.multiloop(client, atAGlanceStanaloneText, properties3, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.compliance_top_spacing('sm');  
                callback.multiloop(client, atAGlanceShelf, properties, 'sm');
                properties1 = props.atAGlanceShelf.compliance_icon_props('sm');  
                callback.multiloop(client, atAGlanceShelf1, properties1, 'sm');
                properties2 = textComp.text.pageOverviewTextprops('sm');  
                callback.multiloop(client, atAGlanceStanaloneText, properties2, 'sm');
                properties3 = props.atAGlanceShelf.compliance_text_props('sm');  
                callback.multiloop(client, atAGlanceStanaloneText, properties3, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(atAGlanceShelf,95000);
                client.pause(5000);
                properties = props.atAGlanceShelf.compliance_top_spacing('xs');  
                callback.multiloop(client, atAGlanceShelf, properties, 'xs');
                properties1 = props.atAGlanceShelf.compliance_icon_props('xs');  
                callback.multiloop(client, atAGlanceShelf1, properties1, 'xs');
                properties2 = textComp.text.pageOverviewTextprops('xs');  
                callback.multiloop(client, atAGlanceStanaloneText, properties2, 'xs');
                properties3 = props.atAGlanceShelf.compliance_text_props('xs');  
                callback.multiloop(client, atAGlanceStanaloneText, properties3, 'xs');
            }
        }
    },
    "Ending the session" :function(client){
        client.end();
    }     
};