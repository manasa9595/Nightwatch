var props = require('../components/breadcrumb/breadcrumb_props.js');
module.exports = {
    "breadcrumb": function(client) {
        var pageObj = client.page.breadcrumb_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var marSelCls = pageObj.elements.marSel.selector,
            size = client.globals.size.widths;
        signup.navigate()
        .signInAsAdmin();
        client.maximizeWindow();
        client.url(signup.url);
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //breadcrumb margin-padding properties
            properties = props.breadcrumbprops.marProps(scr);
            callback.singleElem(client, marSelCls, properties, scr);

         }
    },

     "Check for breadcrumb links": function(client) {
        var pageObj = client.page.breadcrumb_selectors(),
            callback = client.page.common(),
            linkCls = pageObj.elements.links.selector,
            currentlinkCls = pageObj.elements.currentLink.selector,
            lispanCls = pageObj.elements.lispan.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //breadcrumb links properties 
            properties = props.breadcrumbprops.links(scr);
            callback.singleElem(client,linkCls, properties, scr);
            //breadcrumb current link properties 
            properties = props.breadcrumbprops.currentLink(scr);
            callback.singleElem(client,currentlinkCls, properties, scr);
            //breadcrumb li span properties 
            properties = props.breadcrumbprops.lispan(scr);
            callback.singleElem(client,lispanCls, properties, scr);
        }

    },

}    