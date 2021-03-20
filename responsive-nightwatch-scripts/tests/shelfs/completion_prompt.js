var props = require('../components/other_comp/completionPrompt_props.js');
    globalTitleComp = require('../components/title/globaltitle.js');

module.exports = { 

    'Testing properties of completionPrompt' : function(client){
        var pageObj = client.page.completionPrompt_selector(),
            signup = client.page.signup(),
            callback = client.page.common(), 

            completionPrompt = pageObj.elements.completionPrompt.selector,
            size = client.globals.size.widths;   

            signup.navigate()
            .signInAsAdmin();
            client.maximizeWindow();
            //client.url(signup.url);       
        
        if(client.globals.test_settings.isLocal){
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                //completion Prompt shelf bg color 
                properties = props.cpromptProps.cPromptBgcolor(scr);
                callback.singleElem(client, completionPrompt, properties, scr);
                }
               
            }
        else {
          if(client.options.desiredCapabilities.isLGDevice){
                properties = props.cpromptProps.cPromptBgcolor('lg');
                callback.singleElem(client, completionPrompt, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.cpromptProps.cPromptBgcolor('sm');
                callback.singleElem(client, completionPrompt, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
                properties = props.cpromptProps.cPromptBgcolor('xs');
                callback.singleElem(client, completionPrompt, properties, 'xs');
          }

        }
    },
    'Testing completionPrompt Image & Content properties' : function(client){
        var pageObj = client.page.completionPrompt_selector(),
            callback = client.page.common(),
            completionPromptImage = pageObj.elements.completionPromptImage.selector;
            completionPromptContentwrap = pageObj.elements.completionPromptContentwrap.selector;
            completionPromptTitlewrap = pageObj.elements.completionPromptTitlewrap.selector;
            completionPromptTitle = pageObj.elements.completionPromptTitle.selector;
            completionPromptRtewrap = pageObj.elements.completionPromptRtewrap.selector;
            completionPromptRte = pageObj.elements.completionPromptRte.selector;
            completionPromptCtawrap = pageObj.elements.completionPromptCtawrap.selector;

            size = client.globals.size.widths;   

            client.maximizeWindow();
            if(client.globals.test_settings.isLocal){     
                for (scr in size) {
                
                  client.resizeWindow(size[scr].width, size[scr].height);
                  //completion Prompt Image properties 
                properties = props.cpromptProps.completionPromptImage(scr);
                callback.singleElem(client, completionPromptImage, properties, scr);

                //completion Prompt content wrap properties
                properties = props.cpromptProps.completionPromptContentwrap(scr);
                callback.singleElem(client, completionPromptContentwrap, properties, scr);

                 //completion Prompt Title wrap properties 
                properties = props.cpromptProps.completionPromptTitlewrap(scr);
                callback.singleElem(client, completionPromptTitlewrap, properties, scr);

                //completion Prompt Title properties(global props)
                properties = globalTitleComp.globaltitle.h3props(scr);
                callback.singleElem(client, completionPromptTitle, properties, scr);

                //completion Prompt Title properties
                properties = props.cpromptProps.completionPromptTitleProps(scr);
                callback.singleElem(client, completionPromptTitle, properties, scr);


                 //completion Prompt RTE wrap properties 
                properties = props.cpromptProps.completionPromptRtewrap(scr);
                callback.singleElem(client, completionPromptRtewrap, properties, scr);

                //completion Prompt RTE properties(global props)
                properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
                callback.singleElem(client, completionPromptRte, properties, scr);

                //completion Prompt RTE properties
                properties = props.cpromptProps.completionPromptRteProps(scr);
                callback.singleElem(client, completionPromptRte, properties, scr);

                 //completion Prompt CTA properties 
                properties = props.cpromptProps.completionPromptCtawrap(scr);
                callback.singleElem(client, completionPromptCtawrap, properties, scr);
                }
                
            }
          else {
          if(client.options.desiredCapabilities.isLGDevice){
                //completion Prompt Image properties 
                properties = props.cpromptProps.completionPromptImage('lg');
                callback.singleElem(client, completionPromptImage, properties, 'lg');

                //completion Prompt content wrap properties
                properties = props.cpromptProps.completionPromptContentwrap('lg');
                callback.singleElem(client, completionPromptContentwrap, properties, 'lg');

                 //completion Prompt Title wrap properties 
                properties = props.cpromptProps.completionPromptTitlewrap('lg');
                callback.singleElem(client, completionPromptTitlewrap, properties, 'lg');

                //completion Prompt Title properties(global props)
                properties = globalTitleComp.globaltitle.h3props('lg');
                callback.singleElem(client, completionPromptTitle, properties, 'lg');

                //completion Prompt Title properties
                properties = props.cpromptProps.completionPromptTitleProps('lg');
                callback.singleElem(client, completionPromptTitle, properties, 'lg');


                 //completion Prompt RTE wrap properties 
                properties = props.cpromptProps.completionPromptRtewrap('lg');
                callback.singleElem(client, completionPromptRtewrap, properties, 'lg');

                //completion Prompt RTE properties(global props)
                properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
                callback.singleElem(client, completionPromptRte, properties, 'lg');

                //completion Prompt RTE properties
                properties = props.cpromptProps.completionPromptRteProps('lg');
                callback.singleElem(client, completionPromptRte, properties, 'lg');

                 //completion Prompt CTA properties 
                properties = props.cpromptProps.completionPromptCtawrap('lg');
                callback.singleElem(client, completionPromptCtawrap, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
                //completion Prompt Image properties 
                properties = props.cpromptProps.completionPromptImage('sm');
                callback.singleElem(client, completionPromptImage, properties, 'sm');

                //completion Prompt content wrap properties
                properties = props.cpromptProps.completionPromptContentwrap('sm');
                callback.singleElem(client, completionPromptContentwrap, properties, 'sm');

                 //completion Prompt Title wrap properties 
                properties = props.cpromptProps.completionPromptTitlewrap('sm');
                callback.singleElem(client, completionPromptTitlewrap, properties, 'sm');

                //completion Prompt Title properties(global props)
                properties = globalTitleComp.globaltitle.h3props('sm');
                callback.singleElem(client, completionPromptTitle, properties, 'sm');

                //completion Prompt Title properties
                properties = props.cpromptProps.completionPromptTitleProps('sm');
                callback.singleElem(client, completionPromptTitle, properties, 'sm');


                 //completion Prompt RTE wrap properties 
                properties = props.cpromptProps.completionPromptRtewrap('sm');
                callback.singleElem(client, completionPromptRtewrap, properties, 'sm');

                //completion Prompt RTE properties(global props)
                properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
                callback.singleElem(client, completionPromptRte, properties, 'sm');

                //completion Prompt RTE properties
                properties = props.cpromptProps.completionPromptRteProps('sm');
                callback.singleElem(client, completionPromptRte, properties, 'sm');

                 //completion Prompt CTA properties 
                properties = props.cpromptProps.completionPromptCtawrap('sm');
                callback.singleElem(client, completionPromptCtawrap, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
                //completion Prompt Image properties 
                properties = props.cpromptProps.completionPromptImage('xs');
                callback.singleElem(client, completionPromptImage, properties, 'xs');

                //completion Prompt content wrap properties
                properties = props.cpromptProps.completionPromptContentwrap('xs');
                callback.singleElem(client, completionPromptContentwrap, properties, 'xs');

                 //completion Prompt Title wrap properties 
                properties = props.cpromptProps.completionPromptTitlewrap('xs');
                callback.singleElem(client, completionPromptTitlewrap, properties, 'xs');

                //completion Prompt Title properties(global props)
                properties = globalTitleComp.globaltitle.h3props('xs');
                callback.singleElem(client, completionPromptTitle, properties, 'xs');

                //completion Prompt Title properties
                properties = props.cpromptProps.completionPromptTitleProps('xs');
                callback.singleElem(client, completionPromptTitle, properties, 'xs');


                 //completion Prompt RTE wrap properties 
                properties = props.cpromptProps.completionPromptRtewrap('xs');
                callback.singleElem(client, completionPromptRtewrap, properties, 'xs');

                //completion Prompt RTE properties(global props)
                properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
                callback.singleElem(client, completionPromptRte, properties, 'xs');

                //completion Prompt RTE properties
                properties = props.cpromptProps.completionPromptRteProps('xs');
                callback.singleElem(client, completionPromptRte, properties, 'xs');

                 //completion Prompt CTA properties 
                properties = props.cpromptProps.completionPromptCtawrap('xs');
                callback.singleElem(client, completionPromptCtawrap, properties, 'xs');
          }

        }  
    },
    'Testing completionPrompt Primary CTA properties' : function(client){
        var pageObj = client.page.completionPrompt_selector(),
            callback = client.page.common(),
            completionPromptprimCTA = pageObj.elements.completionPromptprimCTA.selector;
            
            size = client.globals.size.widths;   

            client.maximizeWindow();
         if(client.globals.test_settings.isLocal){
            for (scr in size) {
               
                  client.resizeWindow(size[scr].width, size[scr].height);
                   //completion Prompt Secondary CTA properties 
                properties = props.cpromptProps.completionPromptprimCTAProps(scr);
                callback.singleElem(client, completionPromptprimCTA, properties, scr);
                }
            }
        else {
          if(client.options.desiredCapabilities.isLGDevice){
                properties = props.cpromptProps.completionPromptprimCTAProps('lg');
                callback.singleElem(client, completionPromptprimCTA, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.cpromptProps.completionPromptprimCTAProps('sm');
                callback.singleElem(client, completionPromptprimCTA, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
                properties = props.cpromptProps.completionPromptprimCTAProps('xs');
                callback.singleElem(client, completionPromptprimCTA, properties, 'xs');
          }
        }
    },
    'Testing completionPrompt Secondary CTA properties' : function(client){
        var pageObj = client.page.completionPrompt_selector(),
            callback = client.page.common(),
            completionPromptsecCTASProps = pageObj.elements.completionPromptsecCTASProps.selector,
            completionPromptsecCTAtextProps = pageObj.elements.completionPromptsecCTAtextProps.selector;
            size = client.globals.size.widths;   

            client.maximizeWindow();
            if(client.globals.test_settings.isLocal){     
            for (scr in size) {
                
                  client.resizeWindow(size[scr].width, size[scr].height);
                  //completion Prompt Secondary CTA wrap properties 
                properties = props.cpromptProps.completionPromptsecCTASProps(scr);
                callback.singleElem(client, completionPromptsecCTASProps, properties, scr);

                //completion Prompt Secondary CTA properties 
                properties = props.cpromptProps.completionPromptsecCTAtextProps(scr);
                callback.singleElem(client, completionPromptsecCTAtextProps, properties, scr);
                }
            }
             else {
          if(client.options.desiredCapabilities.isLGDevice){
                //completion Prompt Secondary CTA wrap properties 
                properties = props.cpromptProps.completionPromptsecCTASProps('lg');
                callback.singleElem(client, completionPromptsecCTASProps, properties, 'lg');

                //completion Prompt Secondary CTA properties 
                properties = props.cpromptProps.completionPromptsecCTAtextProps('lg');
                callback.singleElem(client, completionPromptsecCTAtextProps, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
                //completion Prompt Secondary CTA wrap properties 
                properties = props.cpromptProps.completionPromptsecCTASProps('sm');
                callback.singleElem(client, completionPromptsecCTASProps, properties, 'sm');

                //completion Prompt Secondary CTA properties 
                properties = props.cpromptProps.completionPromptsecCTAtextProps('sm');
                callback.singleElem(client, completionPromptsecCTAtextProps, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
                 //completion Prompt Secondary CTA wrap properties 
                properties = props.cpromptProps.completionPromptsecCTASProps('xs');
                callback.singleElem(client, completionPromptsecCTASProps, properties, 'xs');

                //completion Prompt Secondary CTA properties 
                properties = props.cpromptProps.completionPromptsecCTAtextProps('xs');
                callback.singleElem(client, completionPromptsecCTAtextProps, properties, 'xs');
          }
        }
    },
    'Testing completionPrompt Close Button properties' : function(client){
        var pageObj = client.page.completionPrompt_selector(),
            callback = client.page.common(),
            completionPromptClose = pageObj.elements.completionPromptClose.selector,
            completionPromptCloseIcon = pageObj.elements.completionPromptCloseIcon.selector;
           
            size = client.globals.size.widths;   

            client.maximizeWindow();
            if(client.globals.test_settings.isLocal){     
            for (scr in size) {
                
                  client.resizeWindow(size[scr].width, size[scr].height);
                  //completion Prompt Close button properties 
                properties = props.cpromptProps.completionPromptClose(scr);
                callback.singleElem(client, completionPromptClose, properties, scr);

                //completion Prompt Close Icon properties 
                properties = props.cpromptProps.completionPromptCloseIcon(scr);
                callback.singleElem(client, completionPromptCloseIcon, properties, scr);
                }
            }
            else {
          if(client.options.desiredCapabilities.isLGDevice){
            //completion Prompt Close button properties 
                properties = props.cpromptProps.completionPromptClose('lg');
                callback.singleElem(client, completionPromptClose, properties, 'lg');

                //completion Prompt Close Icon properties 
                properties = props.cpromptProps.completionPromptCloseIcon('lg');
                callback.singleElem(client, completionPromptCloseIcon, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
                //completion Prompt Close button properties 
                properties = props.cpromptProps.completionPromptClose('sm');
                callback.singleElem(client, completionPromptClose, properties, 'sm');

                //completion Prompt Close Icon properties 
                properties = props.cpromptProps.completionPromptCloseIcon('sm');
                callback.singleElem(client, completionPromptCloseIcon, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
                //completion Prompt Close button properties 
                properties = props.cpromptProps.completionPromptClose('xs');
                callback.singleElem(client, completionPromptClose, properties, 'xs');

                //completion Prompt Close Icon properties 
                properties = props.cpromptProps.completionPromptCloseIcon('xs');
                callback.singleElem(client, completionPromptCloseIcon, properties, 'xs');
          }
        } 
    },
    /*For Natwest only*/
    /*'Testing  completion Prompt verticle Line Properties' : function(client){
        var pageObj = client.page.completionPrompt_selector(),
            callback = client.page.common(),
            size = client.globals.size.widths,

            completionPromptverticleLineProps = pageObj.elements.completionPromptverticleLineProps.selector;
                client.maximizeWindow();
            if(client.globals.test_settings.isLocal){
            for (scr in size) {
                
                  client.resizeWindow(size[scr].width, size[scr].height);
                  //completion Prompt vertical line properties 
            properties = props.cpromptProps.completionPromptverticleLineProps(scr);
            callback.singleElem(client,completionPromptverticleLineProps,properties,scr);
                }
           
        }
         else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.cpromptProps.completionPromptverticleLineProps('lg');
            callback.singleElem(client,completionPromptverticleLineProps,properties,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.cpromptProps.completionPromptverticleLineProps('sm');
            callback.singleElem(client,completionPromptverticleLineProps,properties,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.cpromptProps.completionPromptverticleLineProps('xs');
            callback.singleElem(client,completionPromptverticleLineProps,properties,'xs');
          }

        }

    },*/
     "Ending the session":function(client){
        client.end();
    }
    
    
}