var props = require('../components/other_comp/productDetails_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js');

module.exports = {
      //tab component properties start
    "Opening the URL": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
             signup = client.page.signup(),
            size = client.globals.size.widths;
            pageObj.navigate();
            //.signInAsAdmin();
            client.waitForElementVisible("body",35000);       
    },
    "Check for background color purple": function(client) {
        var pageObj = client.page.productDetails_selectors(),           
            callback = client.page.common(),
            tablayOutCls = pageObj.elements.tablayOutSel.selector,
            size = client.globals.size.widths;                         
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.tabLayoutProps(scr);
                callback.singleElem(client, tablayOutCls, properties, scr);
            }
        } 
        else {

            if(client.options.desiredCapabilities.isLGDevice){
                client.maximizeWindow();
                client.waitForElementVisible(tablayOutCls,35000);
                properties = props.productDetailProps.tabLayoutProps('lg');  
                callback.singleElem(client, tablayOutCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(tablayOutCls,35000);
                properties = props.productDetailProps.tabLayoutProps('sm');  
                callback.singleElem(client, tablayOutCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                client.waitForElementVisible(tablayOutCls,35000);
                properties = props.productDetailProps.tabLayoutProps('xs');  
                callback.singleElem(client, tablayOutCls, properties, 'xs');

            }
        }
    },
    "Check for background color of tab(yellow)": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            tabPosCls = pageObj.elements.tabPosSel.selector,
            size = client.globals.size.widths;           
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.tabPositionProps(scr);
                callback.singleElem(client, tabPosCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(tabPosCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.tabPositionProps('lg');  
                callback.singleElem(client, tabPosCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(tabPosCls,50000);
                properties = props.productDetailProps.tabPositionProps('sm');  
                callback.singleElem(client, tabPosCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(tabPosCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.tabPositionProps('xs');  
                callback.singleElem(client, tabPosCls, properties, 'xs');

            }
        }
    },
    "Check for tab(yellow) properties": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.tabSel.selector,
            size = client.globals.size.widths;
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.tabProps(scr);
                callback.singleElem(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.tabProps('lg');  
                callback.singleElem(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = props.productDetailProps.tabProps('sm');  
                callback.singleElem(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.tabProps('xs');  
                callback.singleElem(client, bgClrCls, properties, 'xs');

            }
        }
    },
    "Check for tab content top": function(client) {
        var pageObj = client.page.productDetails_selectors(),            
            callback = client.page.common(),
            bgClrCls = pageObj.elements.tabContainerSel.selector,
            size = client.globals.size.widths;  

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.tabBelowContentProps(scr);
                callback.singleElem(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.tabBelowContentProps('lg');  
                callback.singleElem(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = props.productDetailProps.tabBelowContentProps('sm');  
                callback.singleElem(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.tabBelowContentProps('xs');  
                callback.singleElem(client, bgClrCls, properties, 'xs');

            }
        }

    },
     
    "Check for tabs text fs & lh and padding": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            tabLiACls = pageObj.elements.tabLiASel.selector,
            tabLiPadding = tabLiACls+" span",
            existingProps,
            size = client.globals.size.widths;
           // client.waitForElementVisible(tabLiACls,25000);
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                //properties = globalTitleComp.globaltitle.productDetailfontProps(scr);
                //callback.singleElem(client, tabLiACls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(tabLiACls,35000);
                client.maximizeWindow();
               // properties = globalTitleComp.globaltitle.productDetailfontProps('lg');  
                //callback.singleElem(client, tabLiACls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(tabLiACls,35000);
                //properties = globalTitleComp.globaltitle.productDetailfontProps('sm');  
                //callback.singleElem(client, tabLiACls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(tabLiACls,35000);
                console.log("isXSDevice");
                //properties = globalTitleComp.globaltitle.productDetailfontProps('xs');  
                //callback.singleElem(client, tabLiACls, properties, 'xs');
            }
        }

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                //existingProps = globalTitleComp.globaltitle.bodyCopyProps(scr);
                //callback.multiloop(client, tabLiACls, existingProps, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(tabLiACls,35000);
                client.maximizeWindow();
                //existingProps = globalTitleComp.globaltitle.bodyCopyProps('lg');  
                //callback.multiloop(client, tabLiACls, existingProps, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(tabLiACls,35000);
                //existingProps = globalTitleComp.globaltitle.bodyCopyProps('sm');  
                //callback.multiloop(client, tabLiACls, existingProps, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(tabLiACls,35000);
                console.log("isXSDevice");
                //existingProps = globalTitleComp.globaltitle.bodyCopyProps('xs');  
                //callback.multiloop(client, tabLiACls, existingProps, 'xs');
            }
        }
    },
    "Check for span indicator": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            spanIndicatorCls = pageObj.elements.spanIndicator.selector,
            size = client.globals.size.widths;        
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.indicatorProps(scr);
                callback.singleElem(client, spanIndicatorCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(spanIndicatorCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.indicatorProps('lg');  
                callback.singleElem(client, spanIndicatorCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(spanIndicatorCls,35000);
                properties = props.productDetailProps.indicatorProps('sm');  
                callback.singleElem(client, spanIndicatorCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(spanIndicatorCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.indicatorProps('xs');  
                callback.singleElem(client, spanIndicatorCls, properties, 'xs');
            }
        }
    },

      "Check for image props": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            imageCls = pageObj.elements.imageSel.selector,
            size = client.globals.size.widths;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.imgProps(scr);
                callback.singleElem(client, imageCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(imageCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.imgProps('lg');  
                callback.singleElem(client, imageCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(imageCls,35000);
                properties = props.productDetailProps.imgProps('sm');  
                callback.singleElem(client, imageCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(imageCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.imgProps('xs');  
                callback.singleElem(client, imageCls, properties, 'xs');
            }
        }
    },
     "Check for right content header": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.rightH3Sel.selector,
            size = client.globals.size.widths;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = titleComp.text.rightH3Props(scr);
                callback.multiloop(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = titleComp.text.rightH3Props('lg');  
                callback.multiloop(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = titleComp.text.rightH3Props('sm');  
                callback.multiloop(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = titleComp.text.rightH3Props('xs');  
                callback.multiloop(client, bgClrCls, properties, 'xs');
            }
        }
    },
    "Check for right content header wrapper": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            articleTitWrapCls = pageObj.elements.articleTitWrapSel.selector,
            size = client.globals.size.widths,
            existingProps;
       
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = titleComp.text.titWrapProps(scr);            
                callback.multiloop(client, articleTitWrapCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(articleTitWrapCls,35000);
                client.maximizeWindow();
                properties = titleComp.text.titWrapProps('lg');  
                callback.multiloop(client, articleTitWrapCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(articleTitWrapCls,35000);
                properties = titleComp.text.titWrapProps('sm');  
                callback.multiloop(client, articleTitWrapCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(articleTitWrapCls,35000);
                console.log("isXSDevice");
                properties = titleComp.text.titWrapProps('xs');  
                callback.multiloop(client, articleTitWrapCls, properties, 'xs');
            }
        }        
    },
    /*"Check for yellow tab Active": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.tabActiveSel.selector,
            size = client.globals.size.widths;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.tabActiveProps(scr);
                callback.singleElem(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.tabActiveProps('lg');  
                callback.singleElem(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = props.productDetailProps.tabActiveProps('sm');  
                callback.singleElem(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.tabActiveProps('xs');  
                callback.singleElem(client, bgClrCls, properties, 'xs');
            }
        }        
    },*/
 
   "Check for Acc title": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.accTitleSel.selector,
            size = client.globals.size.widths,
            existingProps;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.ACCtitleProps(scr);
                callback.multiloop(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.ACCtitleProps('lg');  
                callback.multiloop(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = props.productDetailProps.ACCtitleProps('sm');  
                callback.multiloop(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.ACCtitleProps('xs');  
                callback.multiloop(client, bgClrCls, properties, 'xs');
            }
        }
    },
    "Check for Product Acc ": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.productAccSel.selector,
            size = client.globals.size.widths,
            existingProps;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.productAccProps(scr);
                callback.multiloop(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.productAccProps('lg');  
                callback.multiloop(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = props.productDetailProps.productAccProps('sm');  
                callback.multiloop(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.productAccProps('xs');  
                callback.multiloop(client, bgClrCls, properties, 'xs');
            }
        }
    },




    //Standard features start
    "Check for Standard Title": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            standardCls = pageObj.elements.standardSel.selector,
            size = client.globals.size.widths,
            existingProps;       

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = globalTitleComp.globaltitle.h1props(scr);
                callback.singleElem(client, standardCls, properties, scr);
                existingProps = textComp.text.standardTitleProps(scr);
                callback.multiloop(client, standardCls, existingProps, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                var iebrowser=client.options.desiredCapabilities.isIEbrowser;
                console.log(iebrowser);
                client.waitForElementVisible(standardCls,35000);
                client.maximizeWindow();
                properties = globalTitleComp.globaltitle.h1props('lg');  
                callback.singleElem(client, standardCls, properties, 'lg');
                client.waitForElementVisible(standardCls,35000);
                existingProps = textComp.text.standardTitleProps('lg',iebrowser);  
                callback.multiloop(client, standardCls, existingProps, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(standardCls,35000);
                properties = globalTitleComp.globaltitle.h1props('sm');  
                callback.singleElem(client, standardCls, properties, 'sm');
                client.waitForElementVisible(standardCls,35000);
                existingProps = textComp.text.standardTitleProps('sm');  
                callback.multiloop(client, standardCls, existingProps, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(standardCls,35000);
                console.log("isXSDevice");
                properties = globalTitleComp.globaltitle.h1props('xs');  
                callback.singleElem(client, standardCls, properties, 'xs');
                client.waitForElementVisible(standardCls,35000);
                existingProps = textComp.text.standardTitleProps('xs');  
                callback.multiloop(client, standardCls, existingProps, 'xs');
            }            
        }
    },
    "Check for Standard Image ": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.standardImg.selector,
            size = client.globals.size.widths; 
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.standardImgProps(scr);
                callback.multiloop(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.standardImgProps('lg');  
                callback.multiloop(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = props.productDetailProps.standardImgProps('sm');  
                callback.multiloop(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.standardImgProps('xs');  
                callback.multiloop(client, bgClrCls, properties, 'xs');
            }
        }
    },
    "Check for Standard title bottom margin": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            standardSelfSpaceCls = pageObj.elements.standardSpaceBottomSel.selector,
            size = client.globals.size.widths;
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.standardSpaceBotomProps(scr);
                callback.multiloop(client, standardSelfSpaceCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(standardSelfSpaceCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.standardSpaceBotomProps('lg');  
                callback.multiloop(client, standardSelfSpaceCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(standardSelfSpaceCls,35000);
                properties = props.productDetailProps.standardSpaceBotomProps('sm');  
                callback.multiloop(client, standardSelfSpaceCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(standardSelfSpaceCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.standardSpaceBotomProps('xs');  
                callback.multiloop(client, standardSelfSpaceCls, properties, 'xs');
            }
        }
    },

    "Check for Standard title Top margin": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.standardSelfTopSel.selector,
            size = client.globals.size.widths;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.standardSpaceTopProps(scr);
                callback.multiloop(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.standardSpaceTopProps('lg');  
                callback.multiloop(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = props.productDetailProps.standardSpaceTopProps('sm');  
                callback.multiloop(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.standardSpaceTopProps('xs');  
                callback.multiloop(client, bgClrCls, properties, 'xs');
            }
        }
    },
    "Check for Standard H3 title ": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.standardH3Sel.selector,
            size = client.globals.size.widths,
            existingProps; 
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = globalTitleComp.globaltitle.h3custprops(scr);
                callback.multiloop(client, bgClrCls, properties, scr);
                //font-family
                existingProps = titleComp.text.titleText3(scr);
                callback.multiloop(client, bgClrCls, existingProps, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = globalTitleComp.globaltitle.h3custprops('lg');  
                callback.multiloop(client, bgClrCls, properties, 'lg');
                client.waitForElementVisible(bgClrCls,35000);
                existingProps = titleComp.text.titleText3('lg');  
                callback.multiloop(client, bgClrCls, existingProps, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = globalTitleComp.globaltitle.h3custprops('sm');  
                callback.multiloop(client, bgClrCls, properties, 'sm');
                client.waitForElementVisible(bgClrCls,35000);
                existingProps = titleComp.text.titleText3('sm');  
                callback.multiloop(client, bgClrCls, existingProps, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = globalTitleComp.globaltitle.h3custprops('xs');  
                callback.multiloop(client, bgClrCls, properties, 'xs');
                client.waitForElementVisible(bgClrCls,35000);
                existingProps = titleComp.text.titleText3('xs');  
                callback.multiloop(client, bgClrCls, existingProps, 'xs');
            }
        }
    },
    "Check for Standard H3 Margin title ": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.standardH3MarginSel.selector,//error
            size = client.globals.size.widths;
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.standardH3MarginProps(scr);
                callback.multiloop(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.standardH3MarginProps('lg');  
                callback.multiloop(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = props.productDetailProps.standardH3MarginProps('sm');  
                callback.multiloop(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.standardH3MarginProps('xs');  
                callback.multiloop(client, bgClrCls, properties, 'xs');
            }
        }
    },
     "Check for article textwrapper and text props ": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            articleTextWrapCls = pageObj.elements.articleTextWrapSel.selector,
            articleTitleSle=pageObj.elements.articleTitleSle.selector,            
            spanPropsCls = articleTextWrapCls+ " span",
            size = client.globals.size.widths;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.articleTextProps(scr);
                callback.multiloop(client, articleTitleSle, properties, scr);
                
               properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
               callback.multiloop(client, spanPropsCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(spanPropsCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.articleTextProps('lg');  
                callback.multiloop(client, articleTitleSle, properties, 'lg');
                client.waitForElementVisible(spanPropsCls,35000);
                properties = globalTitleComp.globaltitle.bodyCopyProps('lg');  
                callback.multiloop(client, spanPropsCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(spanPropsCls,35000);
                properties = props.productDetailProps.articleTextProps('sm');  
                callback.multiloop(client, articleTitleSle, properties, 'sm');
                client.waitForElementVisible(spanPropsCls,35000);
                properties = globalTitleComp.globaltitle.bodyCopyProps('sm');  
                callback.multiloop(client, spanPropsCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(spanPropsCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.articleTextProps('xs');  
                callback.multiloop(client, articleTitleSle, properties, 'xs');
                client.waitForElementVisible(spanPropsCls,35000);
                properties = globalTitleComp.globaltitle.bodyCopyProps('xs');  
                callback.multiloop(client, spanPropsCls, properties, 'xs');
            }
        }
    },
    "Check for Standard whole H3 ": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            articleCls = pageObj.elements.articleSel.selector,
            size = client.globals.size.widths;
        
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.articleProps(scr);
                callback.multiloop(client, articleCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(articleCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.articleProps('lg');  
                callback.multiloop(client, articleCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(articleCls,35000);
                properties = props.productDetailProps.articleProps('sm');  
                callback.multiloop(client, articleCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(articleCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.articleProps('xs');  
                callback.multiloop(client, articleCls, properties, 'xs');
            }
        }
    },
    "Check for Standard Acc Text ": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.standardAccTextSel.selector,
            size = client.globals.size.widths;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.productDetailProps.standardAccTextProps(scr);
                callback.multiloop(client, bgClrCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = props.productDetailProps.standardAccTextProps('lg');  
                callback.multiloop(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = props.productDetailProps.standardAccTextProps('sm');  
                callback.multiloop(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = props.productDetailProps.standardAccTextProps('xs');  
                callback.multiloop(client, bgClrCls, properties, 'xs');
            }
        }
    },
    "Check for Standard Acc Anchor ": function(client) {
        var pageObj = client.page.productDetails_selectors(),
            callback = client.page.common(),
            bgClrCls = pageObj.elements.standardAccTextSel.selector,
            size = client.globals.size.widths,
            existingProps;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = textComp.text.standardAccTextAProps(scr);
                callback.multiloop(client, bgClrCls, properties, scr); 
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
                client.waitForElementVisible(bgClrCls,35000);
                client.maximizeWindow();
                properties = textComp.text.standardAccTextAProps('lg');  
                callback.multiloop(client, bgClrCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                client.waitForElementVisible(bgClrCls,35000);
                properties = textComp.text.standardAccTextAProps('sm');  
               callback.multiloop(client, bgClrCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                client.waitForElementVisible(bgClrCls,35000);
                console.log("isXSDevice");
                properties = textComp.text.standardAccTextAProps('xs');  
                callback.multiloop(client, bgClrCls, properties, 'xs');
            }
        }

    },     
     
    /*'Check for presence of aria attributes' : function (client) {
         var pageObj = client.page.productDetails_selectors(),
            accClass = pageObj.elements.accClass.selector,
            accSel = pageObj.elements.accCloseSel.selector;
            
            client.elements('css selector', accClass, function(element) {                 
              element.value.forEach(function(el,index) {
                client.expect.element(accClass).to.have.attribute('aria-expanded').which.equals('false');
                client.expect.element(accClass).to.have.attribute('aria-selected').which.equals('false');
                //client.expect.element(accSel).to.have.attribute('aria-expanded').which.equals('false');
                //client.expect.element(accSel).to.have.attribute('aria-selected').which.equals('false');
             });              
            })

             client.elements('css selector', accClass, function(element) {                 
              element.value.forEach(function(el,index) {
                client.click(accClass,function(result){
                 client.expect.element(accClass).to.have.attribute('aria-expanded').which.equals('true');
                 client.expect.element(accClass).to.have.attribute('aria-selected').which.equals('true');
                 client.expect.element(accSel).to.have.attribute('aria-expanded').which.equals('true');
                 client.expect.element(accSel).to.have.attribute('aria-selected').which.equals('true');
                });                   
               });              
            })   
    }, */ 
    /*'Check for links on hover': function(client) {
        var pageObj = client.page.productDetails_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          selector = pageObj.elements.Textanimation.selector,
          size = client.globals.size.widths;
        // pageObj.navigate()
        client.maximizeWindow();
        client.elements('css selector', selector, test) 

        function test(elems) {
            for (scr in size) {
                var properties = props.productDetailProps.TextanimationProps(scr);
                client.resizeWindow(size[scr].width, size[scr].height);
                client.moveToElement(selector, 10, 10);
                client.pause(10000);
                callback.singleElem(client, selector, properties, scr);  
            }
        }
    },

    'Check for cross properties on hover': function(client) {
        var pageObj = client.page.productDetails_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          selector = pageObj.elements.cross.selector,
          size = client.globals.size.widths;
          client.maximizeWindow();
          client.elements('css selector', selector, test) 

        function test(elems) {
            for (scr in size) {
                var properties = props.productDetailProps.crossProps(scr);
                client.resizeWindow(size[scr].width, size[scr].height);
                client.moveToElement(selector, 10, 10);
                client.pause(10000);
                callback.singleElem(client, selector, properties, scr);   
            }
        }
    },
     'Check for cross properties': function(client) {
         var pageObj = client.page.productDetails_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            cross = pageObj.elements.cross.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.productDetailProps.cross1Props(scr);
            callback.singleElem(client, cross, properties, scr);
        } 
    },*/

    "Ending the session":function(client){
        client.end();
    }
    
}
