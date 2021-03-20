var props = require('../components/Rte/rte.js'),
    rteHgProps = require('../components/title/globaltitle.js');

module.exports = {
  "Check for RTE properties": function(client) {
        var pageObj = client.page.rte_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            bodyCust = pageObj.elements.rteCustbody.selector,
            rtehg2= pageObj.elements.rteH2.selector,
            rtehg3= pageObj.elements.rteH3.selector,
            rtehg4= pageObj.elements.rteH4.selector,
            lstItemTick= pageObj.elements.lstTick.selector,
            lstItemSqu= pageObj.elements.lstSquare.selector,
            lstItemNum= pageObj.elements.lstNumber.selector,
            size = client.globals.size.widths;
        signup.navigate()
        .signInAsAdmin();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);

            // class h2 properties area
            properties = rteHgProps.globaltitle.h2props(scr);
            callback.singleElem(client, rtehg2, properties, scr);

            // class h3 properties area
            properties = rteHgProps.globaltitle.h3props(scr);
            callback.singleElem(client, rtehg3, properties, scr);

            // class h3 properties area
            properties = rteHgProps.globaltitle.h4props(scr);
            callback.singleElem(client, rtehg4, properties, scr);

             // body custom style
            properties = props.rte.rteBodyCust(scr);
            callback.singleElem(client, bodyCust, properties, scr);

        }
        client.end();  
    }
     
}