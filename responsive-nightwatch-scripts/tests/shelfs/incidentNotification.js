var props = require('../components/other_comp/incidentNotification_props.js');
    globalTitleComp = require('../components/title/globaltitle.js');

module.exports = {

    'Testing properties of incidentNotification' : function(client){
        var pageObj = client.page.incidentNotification_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),

            incidentNotification = pageObj.elements.incidentNotification.selector,
            size = client.globals.size.widths;   

            signup.navigate()
             .signInAsAdmin();
            client.url(signup.url);  


            client.waitForElementVisible("body", 10000);
            client.waitForElementVisible(incidentNotification, 10000);     
        
            if(client.globals.test_settings.isLocal){
                client.maximizeWindow();
                for (scr in size) {
                      client.resizeWindow(size[scr].width, size[scr].height);
                        //incident Notification shelf bg color 
                        properties = props.incidentProps.incidentNotificationBgcolor(scr);
                        callback.singleElem(client, incidentNotification, properties, scr);
                    }
            }
            else {
                if(client.options.desiredCapabilities.isLGDevice){
                    client.maximizeWindow();
                    properties = props.incidentProps.incidentNotificationBgcolor('lg');  
                    callback.singleElem(client, incidentNotification , properties, 'lg');
                } 
                else if(client.options.desiredCapabilities.isSMDevice){
                    client.waitForElementVisible(incidentNotification, 10000); 
                    properties = props.incidentProps.incidentNotificationBgcolor('sm');  
                    callback.singleElem(client, incidentNotification , properties, 'sm');
                } 
                else if(client.options.desiredCapabilities.isXSDevice){
                    properties = props.incidentProps.incidentNotificationBgcolor('xs');  
                    callback.singleElem(client, incidentNotification , properties, 'xs');

                }
            }
   
    },
    'Testing incidentNotification Image & Content properties' : function(client){
        var pageObj = client.page.incidentNotification_selectors(),
            callback = client.page.common(),
            incidentNotificationImage = pageObj.elements.incidentNotificationImage.selector;
            incidentNotificationContentwrap = pageObj.elements.incidentNotificationContentwrap.selector;
            incidentNotificationTitlewrap = pageObj.elements.incidentNotificationTitlewrap.selector;
            incidentNotificationRtewrap = pageObj.elements.incidentNotificationRtewrap.selector;
            incidentNotificationCtawrap = pageObj.elements.incidentNotificationCtawrap.selector;
            incidentNotificationGlobalTitlewrap = pageObj.elements.incidentNotificationGlobalTitlewrap.selector;
            size = client.globals.size.widths;   
           //client.waitForElementVisible(incidentNotificationImage, 10000);    

            if(client.globals.test_settings.isLocal){  
                client.maximizeWindow();    
                for (scr in size) {
                      client.resizeWindow(size[scr].width, size[scr].height);
                       //incident Notification Image properties 
                      properties = props.incidentProps.incidentNotificationImage(scr);
                    callback.singleElem(client, incidentNotificationImage, properties, scr);

                    //incident Notification content wrap properties
                    properties = props.incidentProps.incidentNotificationContentwrap(scr);
                    callback.singleElem(client, incidentNotificationContentwrap, properties, scr);

                     //incident Notification Title properties 
                    properties = props.incidentProps.incidentNotificationTitlewrap(scr);
                    callback.singleElem(client, incidentNotificationTitlewrap, properties, scr);

                    //incident Notification Title properties(global props)
                    properties = globalTitleComp.globaltitle.h3props(scr);
                    callback.singleElem(client, incidentNotificationGlobalTitlewrap, properties, scr);

                    properties = props.incidentProps.incidentNotificationTitleprops(scr);
                    callback.singleElem(client, incidentNotificationGlobalTitlewrap, properties, scr);

                     //incident Notification RTE properties 
                    properties = props.incidentProps.incidentNotificationRtewrap(scr);
                    callback.singleElem(client, incidentNotificationRtewrap, properties, scr);

                    //incident Notification RTE properties(global props)
                    properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
                    callback.singleElem(client, incidentNotificationRtewrap, properties, scr);     
                }
            }
            else {
                 if(client.options.desiredCapabilities.isLGDevice){
                    client.maximizeWindow();
                    //incident Notification Image properties 
                    properties = props.incidentProps.incidentNotificationImage('lg');
                    callback.singleElem(client, incidentNotificationImage, properties, 'lg');

                    //incident Notification content wrap properties
                    properties = props.incidentProps.incidentNotificationContentwrap('lg');
                    callback.singleElem(client, incidentNotificationContentwrap, properties, 'lg');

                     //incident Notification Title properties 
                    properties = props.incidentProps.incidentNotificationTitlewrap('lg');
                    callback.singleElem(client, incidentNotificationTitlewrap, properties, 'lg');

                    //incident Notification Title properties(global props)
                    properties = globalTitleComp.globaltitle.h3props('lg');
                    callback.singleElem(client, incidentNotificationGlobalTitlewrap, properties, 'lg');

                    properties = props.incidentProps.incidentNotificationTitleprops('lg');
                    callback.singleElem(client, incidentNotificationGlobalTitlewrap, properties, 'lg');

                     //incident Notification RTE properties 
                    properties = props.incidentProps.incidentNotificationRtewrap('lg');
                    callback.singleElem(client, incidentNotificationRtewrap, properties, 'lg');

                    //incident Notification RTE properties(global props)
                    properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
                    callback.singleElem(client, incidentNotificationRtewrap, properties, 'lg');

                   
                } 
            
            else if(client.options.desiredCapabilities.isSMDevice){
                 client.waitForElementVisible(incidentNotificationImage, 10000);
                //incident Notification Image properties 
                properties = props.incidentProps.incidentNotificationImage('sm');
                callback.singleElem(client, incidentNotificationImage, properties, 'sm');

                //incident Notification content wrap properties
                properties = props.incidentProps.incidentNotificationContentwrap('sm');
                callback.singleElem(client, incidentNotificationContentwrap, properties, 'sm');

                 //incident Notification Title properties 
                properties = props.incidentProps.incidentNotificationTitlewrap('sm');
                callback.singleElem(client, incidentNotificationTitlewrap, properties, 'sm');

                //incident Notification Title properties(global props)
                properties = globalTitleComp.globaltitle.h3props('sm');
                callback.singleElem(client, incidentNotificationGlobalTitlewrap, properties, 'sm');

                properties = props.incidentProps.incidentNotificationTitleprops('sm');
                    callback.singleElem(client, incidentNotificationGlobalTitlewrap, properties, 'sm');

                 //incident Notification RTE properties 
                properties = props.incidentProps.incidentNotificationRtewrap('sm');
                callback.singleElem(client, incidentNotificationRtewrap, properties, 'sm');

                //incident Notification RTE properties(global props)
                properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
                callback.singleElem(client, incidentNotificationRtewrap, properties, 'sm');
      
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                 client.waitForElementVisible(incidentNotificationImage, 10000);
                //incident Notification Image properties                 
                properties = props.incidentProps.incidentNotificationImage('xs');
                callback.singleElem(client, incidentNotificationImage, properties, 'xs');

                //incident Notification content wrap properties
                properties = props.incidentProps.incidentNotificationContentwrap('xs');
                callback.singleElem(client, incidentNotificationContentwrap, properties, 'xs');

                 //incident Notification Title properties 
                properties = props.incidentProps.incidentNotificationTitlewrap('xs');
                callback.singleElem(client, incidentNotificationTitlewrap, properties, 'xs');

                //incident Notification Title properties(global props)
                properties = globalTitleComp.globaltitle.h3props('xs');
                callback.singleElem(client, incidentNotificationGlobalTitlewrap, properties, 'xs');

                properties = props.incidentProps.incidentNotificationTitleprops('xs');
                    callback.singleElem(client, incidentNotificationGlobalTitlewrap, properties, 'xs');

                 //incident Notification RTE properties 
                properties = props.incidentProps.incidentNotificationRtewrap('xs');
                callback.singleElem(client, incidentNotificationRtewrap, properties, 'xs');

                //incident Notification RTE properties(global props)
                properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
                callback.singleElem(client, incidentNotificationRtewrap, properties, 'xs');

            }
        }
    },
    'Testing incidentNotification Secondary CTA properties' : function(client){
        var pageObj = client.page.incidentNotification_selectors(),
            callback = client.page.common(),
            incidentNotificationsecCTASProps = pageObj.elements.incidentNotificationsecCTASProps.selector;
            
            size = client.globals.size.widths;   

             client.waitForElementVisible(incidentNotificationsecCTASProps, 10000);
             if(client.globals.test_settings.isLocal){ 
                client.maximizeWindow();     
                for (scr in size) {
               
                    client.resizeWindow(size[scr].width, size[scr].height);                
                    //incident Notification Secondary CTA properties 
                    properties = props.incidentProps.incidentNotificationsecCTASProps(scr);
                    callback.singleElem(client, incidentNotificationsecCTASProps, properties, scr);
                }

            }
            else {
                if(client.options.desiredCapabilities.isLGDevice){
                    client.waitForElementVisible(incidentNotificationsecCTASProps, 10000);
                    properties = props.incidentProps.incidentNotificationsecCTASProps('lg');
                    callback.singleElem(client, incidentNotificationsecCTASProps, properties, 'lg');
                } 
                else if(client.options.desiredCapabilities.isSMDevice){
                    client.waitForElementVisible(incidentNotificationsecCTASProps, 10000);
                    properties = props.incidentProps.incidentNotificationsecCTASProps('sm');
                    callback.singleElem(client, incidentNotificationsecCTASProps, properties,'sm');
                } 
                else if(client.options.desiredCapabilities.isXSDevice){
                    client.waitForElementVisible(incidentNotificationsecCTASProps, 10000);                   
                    properties = props.incidentProps.incidentNotificationsecCTASProps('xs');
                    callback.singleElem(client, incidentNotificationsecCTASProps, properties, 'xs');

                }
            }

    },
    'Testing incidentNotification Close Button properties' : function(client){
        var pageObj = client.page.incidentNotification_selectors(),
            callback = client.page.common(),
            incidentNotificationClose = pageObj.elements.incidentNotificationClose.selector;
            incidentNotificationCloseIcon = pageObj.elements.incidentNotificationCloseIcon.selector;
           
            size = client.globals.size.widths; 
            client.waitForElementVisible(incidentNotificationClose, 10000);
            if(client.globals.test_settings.isLocal){
                client.maximizeWindow();                  
                for (scr in size) {                
                    client.resizeWindow(size[scr].width, size[scr].height);
                    //incident Notification Close button properties 
                    properties = props.incidentProps.incidentNotificationClose(scr);
                    callback.singleElem(client, incidentNotificationClose, properties, scr);

                    //incident Notification Close Icon properties 
                    properties = props.incidentProps.incidentNotificationCloseIcon(scr);
                    callback.singleElem(client, incidentNotificationCloseIcon, properties, scr);
                    }               
            }
            else {
                if(client.options.desiredCapabilities.isLGDevice){
                    //incident Notification Close button properties 
                    properties = props.incidentProps.incidentNotificationClose('lg');  
                    callback.singleElem(client, incidentNotificationClose, properties, 'lg');

                    //incident Notification Close Icon properties 
                    properties = props.incidentProps.incidentNotificationCloseIcon('lg');
                    callback.singleElem(client, incidentNotificationCloseIcon, properties, 'lg');
                } 
                else if(client.options.desiredCapabilities.isSMDevice){
                    //incident Notification Close button properties 
                    properties = props.incidentProps.incidentNotificationClose('sm');  
                    callback.singleElem(client, incidentNotificationClose, properties, 'sm');

                    //incident Notification Close Icon properties 
                    properties = props.incidentProps.incidentNotificationCloseIcon('sm');
                    callback.singleElem(client, incidentNotificationCloseIcon, properties, 'sm');
                } 
                else if(client.options.desiredCapabilities.isXSDevice){
                    //incident Notification Close button properties 
                    properties = props.incidentProps.incidentNotificationClose('xs');  
                    callback.singleElem(client, incidentNotificationClose, properties, 'xs');

                    //incident Notification Close Icon properties 
                    properties = props.incidentProps.incidentNotificationCloseIcon('xs');
                    callback.singleElem(client, incidentNotificationCloseIcon, properties, 'xs');

                }
            }
    },
    //Natwest only
    /*'Testing  completion Prompt verticle Line Properties' : function(client){
          var pageObj = client.page.incidentNotification_selectors(),
            callback = client.page.common(),
            size = client.globals.size.widths,

            incidentNotificationverticleLineProps = pageObj.elements.incidentNotificationverticleLineProps.selector;
            //client.waitForElementVisible(incidentNotificationverticleLineProps, 10000);
            if(client.globals.test_settings.isLocal){
                client.maximizeWindow();

                for (scr in size) {                
                    client.resizeWindow(size[scr].width, size[scr].height);
                    //incident Notification vertical line properties 
                    properties = props.incidentProps.incidentNotificationverticleLineProps(scr);
                    callback.singleElem(client,incidentNotificationverticleLineProps,properties,scr);
                }
           
        }
        else {
            if(client.options.desiredCapabilities.isLGDevice){
               //incident Notification vertical line properties 
                    properties = props.incidentProps.incidentNotificationverticleLineProps('lg');
                    callback.singleElem(client,incidentNotificationverticleLineProps,properties,'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                //incident Notification vertical line properties 
                    properties = props.incidentProps.incidentNotificationverticleLineProps('sm');
                    callback.singleElem(client,incidentNotificationverticleLineProps,properties,'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                //incident Notification vertical line properties 
                    properties = props.incidentProps.incidentNotificationverticleLineProps('xs');
                    callback.singleElem(client,incidentNotificationverticleLineProps,properties,'xs');

            }
        }
    }, */
    "End Session": function(client) {
        client.pause(2000);
        client.end();
    }
    
} 