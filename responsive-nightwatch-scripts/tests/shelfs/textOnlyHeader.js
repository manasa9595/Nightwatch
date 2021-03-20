 var props = require('../components/other_comp/textOnlyHeader_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js')

module.exports = {
//shelf padding check 
    "Check for shelf padding": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ShelfPadding = pageObj.elements.ShelfPadding.selector,
            size = client.globals.size.widths;
             signup.navigate()
             .signInAsAdmin();
        client.url(signup.url); 
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.shelfPadProps(scr);
            callback.singleElem(client, ShelfPadding, properties, scr);
        }

    },
    /* For Natwest business 
    "Check for blue background color": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfBgBlue = pageObj.elements.shelfBgBlue.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.shelfBgBlueProps(scr);
            callback.singleElem(client, shelfBgBlue, properties, scr);
        }

    },
    /* For Natwest business 
    "Check for gradient background color": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfBgGrad = pageObj.elements.shelfBgGrad.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.shelfBgGradProps(scr);
            callback.singleElem(client, shelfBgGrad, properties, scr);
        }

    },
    /* For Natwest personal 
     "Check for purple background color": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfBgPurple = pageObj.elements.shelfBgPurple.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.shelfBgPurpleProps(scr);
            callback.singleElem(client, shelfBgPurple, properties, scr);
        }

    }, 
    /* For Natwest personal 
    "Check for gold background color": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfBgGold = pageObj.elements.shelfBgGold.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.shelfBgGoldProps(scr);
            callback.singleElem(client, shelfBgGold, properties, scr);

            properties = props.textOnlyHeaderProps.shelfBgGoldtextProps(scr);
            callback.singleElem(client, shelfBgGold, properties, scr);
        }

    },
    /* For RBS business and personal */
     "Check for royal blue background color": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfBgRB = pageObj.elements.shelfBgRB.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.shelfBgRBProps(scr);
            callback.singleElem(client, shelfBgRB, properties, scr);
        }

    },
    "Check for text margin": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            textMar = pageObj.elements.textMar.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.textMarProps(scr);
            callback.singleElem(client, textMar, properties, scr);
        }

    },
    "Check for title properties": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            textOnlyHeadertitle = pageObj.elements.textOnlyHeadertitle.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.h2props(scr);
            callback.singleElem(client, textOnlyHeadertitle, properties, scr);

            properties = props.textOnlyHeaderProps.textOnlyHeadertitleProps(scr);
            callback.singleElem(client, textOnlyHeadertitle, properties, scr);
        }

    },
     "Check for text properties": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            textOnlyHeadertext = pageObj.elements.textOnlyHeadertext.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.h4props(scr);
            callback.singleElem(client, textOnlyHeadertext, properties, scr);

            properties = props.textOnlyHeaderProps.textOnlyHeadertextProps(scr);
            callback.singleElem(client, textOnlyHeadertext, properties, scr);
        }

    },
    "Check for compliance shelf padding": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            complShelfPadding = pageObj.elements.complShelfPadding.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.complShelfPadProps(scr);
            callback.singleElem(client, complShelfPadding, properties, scr);
        }

    },
    "Check for compliance text properties": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            complianceText = pageObj.elements.complianceText.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.bodyCopyCustProps(scr);
            callback.singleElem(client, complianceText, properties, scr);

            properties = props.textOnlyHeaderProps.complTextProps(scr);
            callback.singleElem(client, complianceText, properties, scr);
        }

    },
    /* For RBS */
    "Check for twill properties for title 1": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            twillTitle1 = pageObj.elements.twillTitle1.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.twillTitle1Props(scr);
            callback.singleElem(client, twillTitle1, properties, scr);
        }

    },

     /* For RBS */
    "Check for twill properties for title 2": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            twillTitle2 = pageObj.elements.twillTitle2.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.twillTitle2Props(scr);
            callback.singleElem(client, twillTitle2, properties, scr);
        }

    },
    /* For RBS */
    "Check for twill properties for title (common)": function(client) {
        var pageObj = client.page.textOnlyHeader_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            twillTitle = pageObj.elements.twillTitle.selector,
            size = client.globals.size.widths;   
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.textOnlyHeaderProps.twillTitleProps(scr);
            callback.singleElem(client, twillTitle, properties, scr);
        }

    }, 
    "Ending the session":function(client){
        client.end();
    }

}