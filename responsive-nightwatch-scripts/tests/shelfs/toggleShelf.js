var props = require('../components/toggle_comp/toggle_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    ctaComp = require('../components/cta/cta.js');


module.exports = {

    //shelf background color check 
    "Check for bg color": function(client) {
        var pageObj = client.page.toggle_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            toggBgColor = pageObj.elements.toggBgColor.selector,
            size = client.globals.size.widths;
        signup.navigate()
            .signInAsAdmin();
        client.waitForElementVisible("body", 5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.bgProps(scr);
            callback.singleElem(client, toggBgColor, properties, scr);
        }

    },

    //shelf padding check 
    "Check for shelf padding": function(client) {
        var pageObj = client.page.toggle_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            tShelfPadding = pageObj.elements.tShelfPadding.selector,
            size = client.globals.size.widths;

        // client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfPadProps(scr);
            callback.singleElem(client, tShelfPadding, properties, scr);
        }

    },

    //title properties check 
    "Check for title properties": function(client) {
        var pageObj = client.page.toggle_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfTitle = pageObj.elements.shelfTitle.selector,

            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.h3props(scr);
            callback.singleElem(client, shelfTitle, properties, scr);
        }

    },

    //titleWrapper properties check 
    "Check for titleWrapper properties": function(client) {
        var pageObj = client.page.toggle_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfTitleWrap = pageObj.elements.shelfTitleWrap.selector,

            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfTitleWrapProps(scr);
            callback.singleElem(client, shelfTitleWrap, properties, scr);
        }

    },

    //buttonWrapper properties check 
    "Check for buttonWrapper properties": function(client) {
        var pageObj = client.page.toggle_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfButtonWrap = pageObj.elements.shelfButtonWrap.selector,

            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfButtonWrapProps(scr);
            callback.singleElem(client, shelfButtonWrap, properties, scr);
        }

    },
    //appButton properties check 
    "Check for appButton properties": function(client) {
        var pageObj = client.page.toggle_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfAppButton = pageObj.elements.shelfAppButton.selector,

            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfAppButtonProps(scr);
            callback.singleElem(client, shelfAppButton, properties, scr);
        }
    },
    //appButton properties check 
    "Check for appButtonnth properties": function(client) {
        var pageObj = client.page.toggle_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfAppnthchild = pageObj.elements.shelfAppnthchild.selector,

            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfAppnthProps(scr);
            callback.singleElem(client, shelfAppnthchild, properties, scr);
        }
    },
    "Check for CTAWrap properties": function(client) {
        var pageObj = client.page.toggle_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfCTAWrap = pageObj.elements.shelfCTAWrap.selector,

            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfCTAWrapProps(scr);
            callback.singleElem(client, shelfCTAWrap, properties, scr);
        }
    },

    "Check for CTAText properties": function(client) {
        var pageObj = client.page.toggle_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfCTAText = pageObj.elements.shelfCTAText.selector,

            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfCTATextProps(scr);
            callback.singleElem(client, shelfCTAText, properties, scr);
        }
        client.end();
    }

}