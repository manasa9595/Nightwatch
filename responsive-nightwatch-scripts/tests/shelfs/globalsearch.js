var props = require('../components/other_comp/globalsearch_props.js');

module.exports = {
  "Check for Search Box": function(client) {
        var pageObj = client.page.globalsearch_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            gsWrapper = pageObj.elements.gsWrap.selector,
            gsArea= pageObj.elements.gloSearchbox.selector,
            gsInput= pageObj.elements.gloSearchInput.selector,
            gsBtnimg= pageObj.elements.gloSearchbtnimg.selector,
            size = client.globals.size.widths;
        signup.navigate()
        .signInAsAdmin();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);

            // gsearch wrapper
            properties = props.globalSearchProps.gswrapProps(scr);
            callback.singleElem(client, gsWrapper, properties, scr);

            // gsearch area
            properties = props.globalSearchProps.golSearchArea(scr);
            callback.singleElem(client, gsArea, properties, scr);

            // gsearch input
            properties = props.globalSearchProps.golSearchInput(scr);
            callback.singleElem(client, gsInput, properties, scr);

            //
            properties = props.globalSearchProps.golButtonImg(scr);
            callback.singleElem(client, gsBtnimg, properties, scr);
        }
    }
     
}