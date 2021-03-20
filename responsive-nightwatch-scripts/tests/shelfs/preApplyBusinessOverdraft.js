var props = require('../components/other_comp/preApplyBusinessOverdraft_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js');
    

module.exports = {

    "pre-apply business-overdraft toggle shelf": function(client) {
        var pageObj = client.page.preApplyBusinessOverdraft_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

       
        var themePurple = pageObj.elements.themePurple.selector,
            shelfPadding = pageObj.elements.shelfPadding.selector,
            titleComph3 = pageObj.elements.titleComph3.selector,
            btnNotSelected = pageObj.elements.btnNotSelected.selector,
            btnSelected = pageObj.elements.btnSelected.selector,
            marProps = pageObj.elements.marProps.selector,
            shelfColor = pageObj.elements.shelfColor.selector,
            shelfpara = pageObj.elements.shelfpara.selector,
            imgWrapProps = pageObj.elements.imgWrapProps.selector,
            size = client.globals.size.widths;

          signup.navigate();
            //signInAsAdmin();

        client.maximizeWindow();
        for (scr in size) {
            console.log(size);
            client.resizeWindow(size[scr].width, size[scr].height);
            
            /*//Toggle shelf background color
            properties = props.preApplyBusinessOverdraftprops.themePurple(scr);
            callback.multiloop(client,themePurple,properties,scr);

            //shelf top and bottom paddings
            properties = props.preApplyBusinessOverdraftprops.shelfPadding(scr);
            callback.multiloop(client,shelfPadding,properties,scr);

            //title component props
            properties = props.preApplyBusinessOverdraftprops.titleComph3(scr);
            callback.multiloop(client,titleComph3,properties,scr);

            properties = globalTitleComp.globaltitle.h3props(scr);
            callback.multiloop(client, titleComph3, properties, scr);*/


        }
       
    },

    //appButton properties check 
    "Check for appButton properties": function(client) {
        var pageObj = client.page.preApplyBusinessOverdraft_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfAppButton = pageObj.elements.shelfAppButton.selector,
            shelfAppButtonEven = pageObj.elements.shelfAppButtonEven.selector,
            t4shelfAppButton = pageObj.elements.t4shelfAppButton.selector,
            size = client.globals.size.widths;

        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);

            /*properties = props.preApplyBusinessOverdraftprops.shelfAppButtonProps(scr);
            callback.singleElem(client, shelfAppButton, properties, scr);
            callback.singleElem(client, t4shelfAppButton, properties, scr);

            properties = props.preApplyBusinessOverdraftprops.shelfAppButtonEvenProps(scr);
            callback.singleElem(client, shelfAppButtonEven, properties, scr);*/
        }
    },


    "click on new business customer": function(client) {
        var pageObj = client.page.preApplyBusinessOverdraft_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

       
        var titleComph3 = pageObj.elements.titleComph3.selector,
            btnNotSelected = pageObj.elements.btnNotSelected.selector,
            btnSelected = pageObj.elements.btnSelected.selector,
            marProps = pageObj.elements.marProps.selector,
            shelfColor = pageObj.elements.shelfColor.selector,
            shelfpara = pageObj.elements.shelfpara.selector,
            imgWrapProps = pageObj.elements.imgWrapProps.selector,
            size = client.globals.size.widths;


        client.maximizeWindow();
        for (scr in size) {
            console.log(size);
            client.resizeWindow(size[scr].width, size[scr].height);
            
            
            //click on new business customer
            client.click('.preapply-shelf .theme-purple .apptogglebtn2 .btnwrapper:first-child .appbtn, .preapply-shelf .theme-bluebg .apptogglebtn2 .btnwrapper:first-child .appbtn, .preapply-shelf .theme-rose .apptogglebtn2 .btnwrapper:first-child .appbtn', function(result) {
            this.assert.cssProperty('#New_business_customer','display','block');

            });

            /*//properties of button selected
            properties = props.preApplyBusinessOverdraftprops.btnSelected(scr);
            callback.multiloop(client,btnSelected,properties,scr);
            
            //single article paddings
            properties = props.preApplyBusinessOverdraftprops.marProps(scr);
            callback.multiloop(client,marProps,properties,scr);

            //color check for h3 and links
            properties = props.preApplyBusinessOverdraftprops.titleComph3(scr);
            callback.multiloop(client,shelfColor,properties,scr);

            //shelf para props
            properties = props.preApplyBusinessOverdraftprops.shelfpara(scr);
            callback.multiloop(client,shelfpara,properties,scr);

            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, shelfpara, properties, scr);*/

            //image props
            //properties = props.preApplyBusinessOverdraftprops.imgWrapProps(scr);
            //callback.singleElem(client,imgWrapProps,properties,scr);*/

            //properties of unselected button 
            //properties = props.preApplyBusinessOverdraftprops.btnNotSelected(scr);
            //callback.multiloop(client,btnNotSelected,properties,scr);

        }
       
    },



    "click existing business customer": function(client) {
        var pageObj = client.page.preApplyBusinessOverdraft_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

        var linkText = pageObj.elements.linkText.selector,
            size = client.globals.size.widths;

        client.maximizeWindow();
        for (scr in size) {
            console.log(size);
            client.resizeWindow(size[scr].width, size[scr].height);

            //click on existing business customer
            client.click('.preapply-shelf .theme-purple .apptogglebtn2 .btnwrapper:last-child .appbtn, .preapply-shelf .theme-bluebg .apptogglebtn2 .btnwrapper:last-child .appbtn, .preapply-shelf .theme-rose .apptogglebtn2 .btnwrapper:last-child .appbtn', function(result) {
            this.assert.cssProperty('#Existing_business_customer','display','block');

            });

           /* //link test props
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client,linkText,properties,scr);

             properties = props.preApplyBusinessOverdraftprops.linkText(scr);
            callback.multiloop(client, linkText, properties, scr);*/

 
        }

       
    },

    "click Relationship Manager yes or no ": function(client) {
        var pageObj = client.page.preApplyBusinessOverdraft_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

        var size = client.globals.size.widths;

        client.maximizeWindow();
        for (scr in size) {
            console.log(size);
            client.resizeWindow(size[scr].width, size[scr].height);

            //selected yes for relationship manager
            client.click('.toggle-app.apptogglebtn2 .btnwrapper:first-child .appbtn:nth-child(1)', function(result) {
            this.assert.cssProperty('#Yes','display','block');
            this.pause(2000);
            });
  
            //selected not sure for relationship manager
            client.click('.preapply-shelf .toggle-shelf .cta-wrapper a.cta-secondary', function(result) {
            this.assert.cssProperty('#toggle2','display','block');
            this.pause(2000);
            });
            
            //selected no for relationship manager
            client.click('.toggle-app.apptogglebtn2 .btnwrapper .appbtn[data-target-id="No"] ', function(result) {
            this.assert.cssProperty('#No','display','block');
            this.pause(2000);
            });

        }

    },          

    "click Online Banking yes or no ": function(client) {
        var pageObj = client.page.preApplyBusinessOverdraft_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

        var size = client.globals.size.widths;

        client.maximizeWindow();
        for (scr in size) {
            console.log(size);
            client.resizeWindow(size[scr].width, size[scr].height);

            //selected yes for Online Banking
            client.click('.shared-content .shared-content .success-Wrapper  .toggle-shelf .apptogglebtn2 .btnwrapper:first-child .appbtn', function(result) {
            //this.assert.cssProperty('#Yes','display','block');
            this.pause(2000);
            });


             

            //selected No for Online Banking
            /*client.click('.shared-content .shared-content .success-Wrapper  .toggle-shelf .apptogglebtn2 .btnwrapper:last-child .appbtn', function(result) {
            this.assert.cssProperty('#No','display','block');
            this.pause(2000);
            });

           /* //selected set up online banking
            client.click('.preapply-shelf .toggle-shelf .cta-wrapper a.cta-secondary .cta-text[data-target-id="_self"]', function(result) {
            this.assert.cssProperty('#toggle','display','block');
            this.pause(2000);
            });*/
  
        }
       
    },


    "Check click properties": function(client) {
        var pageObj = client.page.preApplyBusinessOverdraft_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            size = client.globals.size.widths;
            //signup.navigate()
            //.signInAsAdmin();
        //client.waitForElementVisible("body", 5000);
        client.maximizeWindow();
         
    client.click('.shared-content .shared-content .success-Wrapper  .toggle-shelf .apptogglebtn2 .btnwrapper:last-child .appbtn', function(result) {
         for(var n=0; n<=1; n++){
             client.click(".shared-content .shared-content .success-Wrapper  .toggle-shelf .apptogglebtn2 .btnwrapper:last-child .appbtn:nth-child(" + (n+1) + ")  ", function(result){
                 console.log("hi");
                 this.pause(3000);
                 
                 this.pause(3000);
             });
             this.pause(3000);
        }
        
       });
},


    "Setup Online Banking and apply today ": function(client) {
        var pageObj = client.page.preApplyBusinessOverdraft_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

        var size = client.globals.size.widths;

        client.maximizeWindow();
        for (scr in size) {
            console.log(size);
            client.resizeWindow(size[scr].width, size[scr].height);




            /*//selected No for Online Banking and apply today
            client.click('.toggle-app.apptogglebtn2 .btnwrapper .appbtn:nth-child(7)', function(result) {
            this.assert.cssProperty('#No','display','block');
            this.pause(2000);
            });*/


           

            /*//selected Sole trader
            client.click('.sa-wrap .cq-dd-paragraph .preapply-shelf .theme-rose .btnwrapper .appbtn', function(result) {
            //this.assert.cssProperty('#Sole_trader','display','block');
            this.pause(5000);
            });

            //selected Online trading
            client.click('.sa-wrap .cq-dd-paragraph .preapply-shelf .theme-rose .btnwrapper .appbtn[data-target-id="Limited_company"]', function(result) {
            this.assert.cssProperty('#Limited_company','display','block');
            this.pause(2000);
            });

            /* 
            client.click('.toggle-app.apptogglebtn2 .btnwrapper .appbtn[data-target-id="No"]', function(result) {
            this.assert.cssProperty('#No','display','block');
            this.pause(2000);
            });*/

            /* //selected No for Online Banking
            client.click('.toggle-app.apptogglebtn2 .btnwrapper .appbtn[data-target-id="No"]', function(result) {
            this.assert.cssProperty('#No','display','block');
            this.pause(2000);
            });*/


        }

        client.end();
       
    }


} 

       
