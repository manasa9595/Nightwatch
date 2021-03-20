var props = require('../components/other_comp/businessLogin_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js');

module.exports = {
    
    "Check for btnlogin active": function(client) {
        var pageObj = client.page.businessLogin_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.btnloginActive.selector,
            size = client.globals.size.widths;
            signup.navigate() 
                .signInAsAdmin();
            client.click('header .btn-login', function(result) {
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);            
                properties = props.businessLoginProps.btnloginActiveProps(scr);
                callback.singleElem(client, selector, properties, scr);
                       
            }
        });
    },
    
     "Check for btnlogin top": function(client) {
        var pageObj = client.page.businessLogin_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.btnloginTop.selector,
            size = client.globals.size.widths;
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);     
            
            properties = props.businessLoginProps.btnloginTopProps(scr);
          //  callback.singleElem(client, selector, properties, scr);
        }
    },

    "Check for btnlogin anchor": function(client) {
        var pageObj = client.page.businessLogin_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.btnloginA.selector,
            size = client.globals.size.widths;
            
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height); 

            properties = props.businessLoginProps.btnloginAProps(scr);
            callback.multiloop(client, selector, properties, scr);
        }
    },
     "Check for btnlogin bottom": function(client) {
        var pageObj = client.page.businessLogin_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.btnloginBottom.selector,
            size = client.globals.size.widths;
           
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.businessLoginProps.btnloginbottomProps(scr);
            callback.singleElem(client, selector, properties, scr);
        }
    },
     "Check for btnlogin H3": function(client) {
        var pageObj = client.page.businessLogin_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.btnloginH3.selector,
            selector2 = pageObj.elements.btnloginText.selector,
            selector3 = pageObj.elements.btnloginBottomA.selector,
            size = client.globals.size.widths;
           
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            
            properties = globalTitleComp.globaltitle.h3custprops(scr);
            //callback.multiloop(client, selector, properties, scr);
            
            properties = props.businessLoginProps.btnloginTextProps(scr);
            //callback.multiloop(client, selector2, properties, scr);

            properties = props.businessLoginProps.btnloginTextProps(scr);
            //callback.multiloop(client, selector3, properties, scr);
        }
    }
   }