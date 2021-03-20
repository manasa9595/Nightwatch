var props = require('../components/other_comp/error_404_500_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js');

module.exports = {
    //Opening the URL
    /*"Opening the URL": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
        signup = client.page.signup(),
            callback = client.page.common(),
            size = client.globals.size.widths;
            signup.navigate()
        .signInAsAdmin();
        client.maximizeWindow();
        client.url(signup.url); 
            pageObj.navigate();
            client.waitForElementVisible("body",35000);       
    },*/

    //Check for shelf padding
    "Check for shelf padding": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ShelfPadding = pageObj.elements.ShelfPadding.selector,
            size = client.globals.size.widths;
            signup.navigate()
        .signInAsAdmin();
        client.maximizeWindow();
        client.url(signup.url);
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.errorPageProps.shelfPadProps(scr);
            callback.singleElem(client, ShelfPadding, properties, scr);
        }
    }
    else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.errorPageProps.shelfPadProps('lg');
            callback.singleElem(client, ShelfPadding, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.errorPageProps.shelfPadProps('sm');
            callback.singleElem(client, ShelfPadding, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.errorPageProps.shelfPadProps('xs');
            callback.singleElem(client, ShelfPadding, properties, 'xs');
          }
        }

    },

    //Check for image margin
    "Check for image margin": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imgMargin = pageObj.elements.imgMargin.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.errorPageProps.imgMarginProps(scr);
            callback.singleElem(client, imgMargin, properties, scr);
        }
    }
    else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.errorPageProps.imgMarginProps('lg');
            callback.singleElem(client, imgMargin, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.errorPageProps.imgMarginProps('sm');
            callback.singleElem(client, imgMargin, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.errorPageProps.imgMarginProps('xs');
            callback.singleElem(client, imgMargin, properties, 'xs');
          }
        }

    },

    //Check for image width and height
    "Check for image size": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imgSize = pageObj.elements.imgSize.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.errorPageProps.imgSizeProps(scr);
            callback.singleElem(client, imgSize, properties, scr);
        }
    }
     else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.errorPageProps.imgSizeProps('lg');
            callback.singleElem(client, imgSize, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.errorPageProps.imgSizeProps('sm');
            callback.singleElem(client, imgSize, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.errorPageProps.imgSizeProps('xs');
            callback.singleElem(client, imgSize, properties, 'xs');
          }
        }


    },


    //Check for title margin
    "Check for title margin": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            titleMargin = pageObj.elements.titleMargin.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.errorPageProps.titleMarginProps(scr);
            callback.singleElem(client, titleMargin, properties, scr);
        }
    }
    else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.errorPageProps.titleMarginProps('lg');
            callback.singleElem(client, titleMargin, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.errorPageProps.titleMarginProps('sm');
            callback.singleElem(client, titleMargin, properties, 'sm');
          }
           else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.errorPageProps.titleMarginProps('xs');
            callback.singleElem(client, titleMargin, properties, 'xs');
           }
        }

    },

     //Check for title properties
    "Check for title properties": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfTitle = pageObj.elements.shelfTitle.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);

            properties = globalTitleComp.globaltitle.h1props(scr);
            callback.singleElem(client, shelfTitle, properties, scr);

            properties = props.errorPageProps.shelfTitleProps(scr);
            callback.singleElem(client, shelfTitle, properties, scr);
        }
    }
    else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = globalTitleComp.globaltitle.h1props('lg');
            callback.singleElem(client, shelfTitle, properties, 'lg');

            properties = props.errorPageProps.shelfTitleProps('lg');
            callback.singleElem(client, shelfTitle, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = globalTitleComp.globaltitle.h1props('sm');
            callback.singleElem(client, shelfTitle, properties, 'sm');

            properties = props.errorPageProps.shelfTitleProps('sm');
            callback.singleElem(client, shelfTitle, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
             properties = globalTitleComp.globaltitle.h1props('xs');
            callback.singleElem(client, shelfTitle, properties, 'xs');

            properties = props.errorPageProps.shelfTitleProps('xs');
            callback.singleElem(client, shelfTitle, properties, 'xs');
          }
        }

    },

    //Check for search margin
    "Check for search margin": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            searchMargin = pageObj.elements.searchMargin.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.errorPageProps.searchMarginProps(scr);
            callback.singleElem(client, searchMargin, properties, scr);
        }
    }
     else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.errorPageProps.searchMarginProps('lg');
            callback.singleElem(client, searchMargin, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.errorPageProps.searchMarginProps('sm');
            callback.singleElem(client, searchMargin, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.errorPageProps.searchMarginProps('xs');
            callback.singleElem(client, searchMargin, properties, 'xs');
          }
        }

    },

     //Check for text properties
    "Check for text properties": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfText = pageObj.elements.shelfText.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);

            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.singleElem(client, shelfText, properties, scr);
     
            properties = props.errorPageProps.shelfTextProps(scr);
            callback.singleElem(client, shelfText, properties, scr);
        }
    }
     else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
            callback.singleElem(client, shelfText, properties, 'lg');
     
            properties = props.errorPageProps.shelfTextProps('lg');
            callback.singleElem(client, shelfText, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
            callback.singleElem(client, shelfText, properties, 'sm');
     
            properties = props.errorPageProps.shelfTextProps('sm');
            callback.singleElem(client, shelfText, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
            callback.singleElem(client, shelfText, properties, 'xs');
     
            properties = props.errorPageProps.shelfTextProps('xs');
            callback.singleElem(client, shelfText, properties, 'xs');
          }
        }

    },
     //Check for search bar properties
    "Check for search bar properties": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            searchPadding = pageObj.elements.searchPadding.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
     
            properties = props.errorPageProps.searchPaddingProps(scr);
            callback.singleElem(client, searchPadding, properties, scr);
        }
    }
    else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.errorPageProps.searchPaddingProps('lg');
            callback.singleElem(client, searchPadding, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.errorPageProps.searchPaddingProps('sm');
            callback.singleElem(client, searchPadding, properties, 'sm');
           }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.errorPageProps.searchPaddingProps('xs');
            callback.singleElem(client, searchPadding, properties, 'xs');
          }
        }

    },
     //Check for search bar text properties
    "Check for search bar text properties": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            searchText = pageObj.elements.searchText.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
     
            properties = props.errorPageProps.searchTextProps(scr);
            callback.singleElem(client, searchText, properties, scr);
        }
    }
    else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.errorPageProps.searchTextProps('lg');
            callback.singleElem(client, searchText, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.errorPageProps.searchTextProps('sm');
            callback.singleElem(client, searchText, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.errorPageProps.searchTextProps('xs');
            callback.singleElem(client, searchText, properties, 'xs');
          }
        }

    },

     "Check for new header img and bg properties": function(client) {
        var pageObj = client.page.error_404_500_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            messageOnlyHeader = pageObj.elements.messageOnlyHeader.selector,
            messageOnlyHeaderImg = pageObj.elements.messageOnlyHeaderImg.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);

            properties = props.errorPageProps.messageOnlyHeaderProps(scr);
            callback.singleElem(client, messageOnlyHeader, properties, scr);
            properties = props.errorPageProps.messageOnlyHeaderImgProps(scr);
            callback.singleElem(client, messageOnlyHeaderImg, properties, scr);    
            
        }
    }
    else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.errorPageProps.messageOnlyHeaderProps('lg');
            callback.singleElem(client, messageOnlyHeader, properties, 'lg');
            properties = props.errorPageProps.messageOnlyHeaderImgProps('lg');
            callback.singleElem(client, messageOnlyHeaderImg, properties, 'lg');
            
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.errorPageProps.messageOnlyHeaderProps('sm');
            callback.singleElem(client, messageOnlyHeader, properties, 'sm');
            properties = props.errorPageProps.messageOnlyHeaderImgProps('sm');
            callback.singleElem(client, messageOnlyHeaderImg, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.errorPageProps.messageOnlyHeaderProps('xs');
            callback.singleElem(client, messageOnlyHeader, properties, 'xs');
            properties = props.errorPageProps.messageOnlyHeaderImgProps('xs');
            callback.singleElem(client, messageOnlyHeaderImg, properties, 'xs');
          }
        }

    },

    "Ending the session":function(client){
        client.end();
    }
    
}