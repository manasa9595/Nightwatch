var props = require('../components/header/header_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js');
module.exports = {
    "1Check for Header background-color XL-L": function(client) {
        var pageObj = client.page.header_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            BgColorLargeSelector = pageObj.elements.headerBackgroundLarge.selector,
            size = client.globals.size.widths;
        pageObj.navigate();
       // .signInAsAdmin();
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValuePairsFromZeplin = props.headerProps.bgcolor_and_height_XL_and_L(scr);  
            callback.singleElem(client,BgColorLargeSelector, propertyNameValuePairsFromZeplin, scr);
        }
    },
    /*"2Check for Header background-color XL-L-ACTIVE": function(client) {
        var pageObj = client.page.header_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            BgColorLargeSelector = pageObj.elements.active_header_selector_Large.selector,
            size = client.globals.size.widths;
            pageObj.navigate();
       // .signInAsAdmin();
        client.maximizeWindow();       
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValuePairsFromZeplin = props.headerProps.bgcolor_and_height_XL_and_L_active(scr);  
            callback.singleElem(client,BgColorLargeSelector, propertyNameValuePairsFromZeplin, scr);
        }
    },*/

   "3Checking bgcolr_and_links_outer_padding_S_M":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            bgColorSmallSelectortoFetchValues=pageObj.elements.headerBackgroundSmall.selector,
            menuClick_in_Small=pageObj.elements.menuClick_in_Small.selector,
            size = client.globals.size.widths;
        pageObj.navigate();
               // .signInAsAdmin();
         client.maximizeWindow();
         client.click(menuClick_in_Small);
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValuePairsFromZeplin = props.headerProps.bgcolr_and_links_outer_padding_S_M(scr);  
            callback.multiloop(client,bgColorSmallSelectortoFetchValues, propertyNameValuePairsFromZeplin, scr);
        }           
    },

    "4Checking bgcolr_and_links_outer_padding_S_M_active":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            bgColorSmallSelectortoFetchValues=pageObj.elements.active_headerBackgroundSmall.selector,
            size = client.globals.size.widths;
        //pageObj.navigate();
               // .signInAsAdmin();
         client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValuePairsFromZeplin = props.headerProps.bgcolr_and_links_outer_padding_S_M_active(scr);  
            callback.multiloop(client,bgColorSmallSelectortoFetchValues, propertyNameValuePairsFromZeplin, scr);
        }           
    },

    "5Checking headerLinkPropsXL_L":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            linkPropLargeSelectortoFetchValues=pageObj.elements.headerLinksStylesLarge.selector,
            size = client.globals.size.widths;
        //pageObj.navigate();
               // .signInAsAdmin();
         client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValuePairs = props.headerProps.headerLinkPropsXL_L(scr);  
            callback.multiloop(client,linkPropLargeSelectortoFetchValues, propertyNameValuePairs, scr);
        }           
    },

    "6Checking headerLinkPropsM_S":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            linkPropSmallSelectortoFetchValues=pageObj.elements.headerLinksStylesSmall.selector,
            size = client.globals.size.widths;
        //pageObj.navigate();
               // .signInAsAdmin();
         client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValues = props.headerProps.headerLinkPropsM_S(scr);  
            callback.singleElem(client,linkPropSmallSelectortoFetchValues, propertyNameValues, scr);
        }           
    },

    "7.Checking L2 Links all sizes":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            linkPropSmallSelectortoFetchValues=pageObj.elements.L_2_Section_anchors_in_li.selector,
            size = client.globals.size.widths;
        pageObj.navigate();
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValues = props.headerProps.L2SectionAnchors(scr);  
            callback.multiloop(client,linkPropSmallSelectortoFetchValues, propertyNameValues, scr);
        }           
    },

    "8To open till L5 Section":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            L2Clickable=pageObj.elements.L2firstchildLarge.selector,
            L3item=pageObj.elements.L3firstChildLarge.selector,
            size = client.globals.size.widths;
       pageObj.navigate();
            client.pause(8000);
        client.maximizeWindow();
        client.click(L2Clickable) 
              .pause(9000) 
              .click(L3item);  
    },

    "9.L3Section Properties testingXL and L":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            linkPropSmallSelectortoFetchValues=pageObj.elements.L3InactivelinksXL_L.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValues = props.headerProps.L3_Section_Anchor_PropertiesXL_L(scr);  
            callback.multiloop(client,linkPropSmallSelectortoFetchValues, propertyNameValues, scr);
        }   
    }, 
    "10.L4Section Properties testingXL and L":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            linkPropSmallSelectortoFetchValues=pageObj.elements.L4Link_SelectorsXl.selector,
            L2Clickable=pageObj.elements.L2firstchildLarge.selector,
            L3item=pageObj.elements.L3firstChildLarge.selector,
            size = client.globals.size.widths;

        //pageObj.navigate();
        //client.pause(8000);
        //client.maximizeWindow();
        //client.click(L2Clickable) 
             // .pause(9000) 
              //.click(L3item); 
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValues = props.headerProps.L4_Section_Anchor_PropertiesXL_L(scr);  
            callback.multiloop(client,linkPropSmallSelectortoFetchValues, propertyNameValues, scr);
        }   
    }, 
    "11.L5Section Properties testingXL and L":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            linkPropSmallSelectortoFetchValues=pageObj.elements.L5Link_SelectorsXl.selector,
            L2Clickable=pageObj.elements.L2firstchildLarge.selector,
            L3item=pageObj.elements.L3firstChildLarge.selector,
            size = client.globals.size.widths;

        pageObj.navigate();
        //client.pause(8000);
        client.maximizeWindow();
        client.click(L2Clickable) 
              .pause(9000) 
              .click(L3item); 
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValues = props.headerProps.L5_Section_Anchor_PropertiesXL_L(scr);  
            callback.multiloop(client,linkPropSmallSelectortoFetchValues, propertyNameValues, scr);
        }   
    }, 
    "12.L3_L4_L5_Section Properties testing_Small":function(client){
        var pageObj = client.page.header_selectors(),
            callback = client.page.common(),
            linkPropSmallSelectortoFetchValues=pageObj.elements.L3LaterLink_Selectors_Small.selector,
            menuClickable=pageObj.elements.left_top_menu.selector,
            size = client.globals.size.widths;
        pageObj.navigate();
        client.pause(8000)
                .click(menuClickable)
                .maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            propertyNameValues = props.headerProps.L3_L4_L5_Section_Anchor_PropertiesS_and_M(scr);  
            callback.multiloop(client,linkPropSmallSelectortoFetchValues, propertyNameValues, scr);
        }   
    },
};



