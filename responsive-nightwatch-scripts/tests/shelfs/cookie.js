var props = require('../components/cookie/cookie_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js');
module.exports = {
    "cookie": function(client) {
        var pageObj = client.page.cookie_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var marSelCls = pageObj.elements.marSel.selector,
            headSelCls = pageObj.elements.cookieHeading.selector,
            wrapSelCls = pageObj.elements.rteWrapper.selector,
            closeButtonSelCls = pageObj.elements.closeButton.selector,
             size = client.globals.size.widths;
            //signup.navigate()
            //.signInAsAdmin();
            client.maximizeWindow();
            client.url(signup.url);
             client.waitForElementVisible("body", 10000);
            client.waitForElementVisible(marSelCls, 10000);
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //cookie padding properties
            properties = props.cookieProps.marProps(scr);
            callback.singleElem(client, marSelCls, properties, scr);

             //cookie heading properties
            properties = props.cookieProps.cookieHeading(scr);
            callback.singleElem(client, headSelCls, properties, scr);

            //cookie Paragraph properties
            properties = props.cookieProps.paraProps(scr);
            callback.singleElem(client, wrapSelCls, properties, scr);

            //cookie close button properties
            properties = props.cookieProps.closeButtonProps(scr);
            callback.singleElem(client, closeButtonSelCls, properties, scr);

         }
    client.end();
    },
}    