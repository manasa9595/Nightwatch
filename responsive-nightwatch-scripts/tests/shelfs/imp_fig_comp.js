var props = require('../components/other_comp/imp_figshelf_Props.js'),
    globalTitleComp = require('../components/title/globaltitle.js');
    

module.exports = {
    "Browser Login ": function(client) {
        var pageObj = client.page.imp_fig_comp_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            size = client.globals.size.widths;
            signup.navigate()
            .signInAsAdmin();
            client.maximizeWindow();
           
   },
   "Imp-fig-shelf properties for imp-fig-title-block": function(client) {
       var pageObj = client.page.imp_fig_comp_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

        var impFigShelfCls = pageObj.elements.impFigShelfTit.selector;
        var impFigShelf = pageObj.elements.impFigShelf.selector;
        var size = client.globals.size.widths;
            //client.waitForElementVisible("body", 5000);
            //client.waitForElementVisible(impFigShelf, 15000);   


        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Check for Margin properties of impFig title block
            properties = props.impFigShelfProps.impFigShelf(scr);
            callback.multiloop(client, impFigShelf, properties, scr);

            //check for impFig title color properties
            properties = props.impFigShelfProps.impFigShelfTitle(scr);
            callback.multiloop(client, impFigShelfCls, properties, scr);
          
            //impFig-title text properties(global props)
            properties = globalTitleComp.globaltitle.h2props(scr);
            callback.singleElem(client, impFigShelfCls, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
            console.log("isLGDevice");
            //Check for Margin properties of impFig title block
            properties = props.impFigShelfProps.impFigShelf('lg');
            callback.multiloop(client, impFigShelf, properties, 'lg');

            //check for impFig title color properties
            properties = props.impFigShelfProps.impFigShelfTitle('lg');
            callback.multiloop(client, impFigShelfCls, properties, 'lg');
          
            //impFig-title text properties(global props)
            properties = globalTitleComp.globaltitle.h2props('lg');
            callback.singleElem(client, impFigShelfCls, properties, 'lg');
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            console.log("isSMDevice");
           //Check for Margin properties of impFig title block
            properties = props.impFigShelfProps.impFigShelf('sm');
            callback.multiloop(client, impFigShelf, properties, 'sm');

            //check for impFig title color properties
            properties = props.impFigShelfProps.impFigShelfTitle('sm');
            callback.multiloop(client, impFigShelfCls, properties, 'sm');
          
            //impFig-title text properties(global props)
            properties = globalTitleComp.globaltitle.h2props('sm');
            callback.singleElem(client, impFigShelfCls, properties, 'sm');
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            console.log("isXSDevice");
            //Check for Margin properties of impFig title block
            properties = props.impFigShelfProps.impFigShelf('xs');
            callback.multiloop(client, impFigShelf, properties, 'xs');

            //check for impFig title color properties
            properties = props.impFigShelfProps.impFigShelfTitle('xs');
            callback.multiloop(client, impFigShelfCls, properties, 'xs');
          
            //impFig-title text properties(global props)
            properties = globalTitleComp.globaltitle.h2props('xs');
            callback.singleElem(client, impFigShelfCls, properties, 'xs');

            }
        }    
   },


     "Imp-fig-shelf properties for imp-fig-column": function(client){
        var pageObj = client.page.imp_fig_comp_selectors(),
                callback = client.page.common();

            var impFigColCls = pageObj.elements.impFigColTit.selector;
            var impFigCompWrapper = pageObj.elements.impFigCompWrapper.selector;
            var impFigColTextWrap = pageObj.elements.impFigColTextWrap.selector;
            var impFigColDescWrap = pageObj.elements.impFigColDescWrap.selector;
            var impFigColText = pageObj.elements.impFigColText.selector;
            var impFigColDesc = pageObj.elements.impFigColDesc.selector;
            var impFigHrline = pageObj.elements.impFigHrline.selector;
            var size = client.globals.size.widths;
           
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Check for Margin & color properties of impFigcol block
                properties = props.impFigShelfProps.impFigCompWrapper(scr);
                callback.multiloop(client, impFigCompWrapper, properties, scr);

                properties = props.impFigShelfProps.imgFigTextProps(scr);
                callback.multiloop(client, impFigColTextWrap, properties, scr);

                properties = props.impFigShelfProps.imgFigDescProps(scr);
                callback.multiloop(client, impFigColDescWrap, properties, scr);

                //check for impFigCol title color properties
                properties = props.impFigShelfProps.impFigShelfTitle(scr);
                callback.multiloop(client, impFigColCls, properties, scr);
              
                //impFig-title text properties(global props)
                properties = globalTitleComp.globaltitle.h4props(scr);
                callback.multiloop(client, impFigColCls, properties, scr);

                properties = globalTitleComp.globaltitle.h2props(scr);
                callback.multiloop(client, impFigColTextWrap, properties, scr);

                properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
                callback.multiloop(client, impFigColDescWrap, properties, scr);

                //impFig horizontal line assert check
                properties = props.impFigShelfProps.impFigHrlineProps(scr);
                callback.multiloop(client, impFigHrline, properties, scr);
            }
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
            console.log("isLGDevice");
            //Check for Margin & color properties of impFigcol block
                properties = props.impFigShelfProps.impFigCompWrapper('lg');
                callback.multiloop(client, impFigCompWrapper, properties, 'lg');

                properties = props.impFigShelfProps.imgFigTextProps('lg');
                callback.multiloop(client, impFigColTextWrap, properties, 'lg');

                properties = props.impFigShelfProps.imgFigDescProps('lg');
                callback.multiloop(client, impFigColDescWrap, properties, 'lg');

                //check for impFigCol title color properties
                properties = props.impFigShelfProps.impFigShelfTitle('lg');
                callback.multiloop(client, impFigColCls, properties, 'lg');
              
                //impFig-title text properties(global props)
                properties = globalTitleComp.globaltitle.h4props('lg');
                callback.multiloop(client, impFigColCls, properties, 'lg');

                properties = globalTitleComp.globaltitle.h2props('lg');
                callback.multiloop(client, impFigColTextWrap, properties, 'lg');

                properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
                callback.multiloop(client, impFigColDescWrap, properties, 'lg');

                //impFig horizontal line assert check
                //properties = props.impFigShelfProps.impFigHrlineProps('lg');
                //callback.multiloop(client, impFigHrline, properties, 'lg');
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            console.log("isSMDevice");
             //Check for Margin & color properties of impFigcol block
                properties = props.impFigShelfProps.impFigCompWrapper('sm');
                callback.multiloop(client, impFigCompWrapper, properties, 'sm');

                properties = props.impFigShelfProps.imgFigTextProps('sm');
                callback.multiloop(client, impFigColTextWrap, properties, 'sm');

                properties = props.impFigShelfProps.imgFigDescProps('sm');
                callback.multiloop(client, impFigColDescWrap, properties, 'sm');

                //check for impFigCol title color properties
                properties = props.impFigShelfProps.impFigShelfTitle('sm');
                callback.multiloop(client, impFigColCls, properties, 'sm');
              
                //impFig-title text properties(global props)
                properties = globalTitleComp.globaltitle.h4props('sm');
                callback.multiloop(client, impFigColCls, properties, 'sm');

                properties = globalTitleComp.globaltitle.h2props('sm');
                callback.multiloop(client, impFigColTextWrap, properties, 'sm');

                properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
                callback.multiloop(client, impFigColDescWrap, properties, 'sm');

                //impFig horizontal line assert check
                properties = props.impFigShelfProps.impFigHrlineProps('sm');
                callback.multiloop(client, impFigHrline, properties, 'sm');
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            console.log("isXSDevice");
            //Check for Margin & color properties of impFigcol block
                properties = props.impFigShelfProps.impFigCompWrapper('xs');
                callback.multiloop(client, impFigCompWrapper, properties, 'xs');

                properties = props.impFigShelfProps.imgFigTextProps('xs');
                callback.multiloop(client, impFigColTextWrap, properties, 'xs');

                properties = props.impFigShelfProps.imgFigDescProps('xs');
                callback.multiloop(client, impFigColDescWrap, properties, 'xs');

                //check for impFigCol title color properties
                properties = props.impFigShelfProps.impFigShelfTitle('xs');
                callback.multiloop(client, impFigColCls, properties, 'xs');
              
                //impFig-title text properties(global props)
                properties = globalTitleComp.globaltitle.h4props('xs');
                callback.multiloop(client, impFigColCls, properties, 'xs');

                properties = globalTitleComp.globaltitle.h2props('xs');
                callback.multiloop(client, impFigColTextWrap, properties, 'xs');

                properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
                callback.multiloop(client, impFigColDescWrap, properties, 'xs');

                //impFig horizontal line assert check
                properties = props.impFigShelfProps.impFigHrlineProps('xs');
                callback.multiloop(client, impFigHrline, properties, 'xs');

            }
        }    

    },

   
    "check for accordion link props" : function(client){
        var pageObj = client.page.imp_fig_comp_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

        var accWrapper = pageObj.elements.accWrapper.selector;
           cross1 = pageObj.elements.cross1.selector;
           accText = pageObj.elements.accText.selector;
           size = client.globals.size.widths;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
             //Check for Margin properties of acc wrapper
            properties = props.impFigShelfProps.accWrapper(scr);
            callback.multiloop(client, accWrapper, properties, scr);

            //Check for acc icon props
            properties = props.impFigShelfProps.accIcon(scr);
            callback.multiloop(client, cross1, properties, scr);

             //Check for acc text props
            properties = props.impFigShelfProps.accText(scr);
            callback.multiloop(client, accText, properties, scr);
            }
         
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
            console.log("isLGDevice");
            for(scr in size){
             //Check for Margin properties of acc wrapper
            properties = props.impFigShelfProps.accWrapper('lg');
            callback.multiloop(client, accWrapper, properties, 'lg');

            //Check for acc icon props
            properties = props.impFigShelfProps.accIcon('lg');
            callback.multiloop(client, cross1, properties, 'lg');

             //Check for acc text props
            properties = props.impFigShelfProps.accText('lg');
            callback.multiloop(client, accText, properties, 'lg');
            }
    
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            console.log("isSMDevice");
            for(scr in size){
            //Check for Margin properties of acc wrapper
            properties = props.impFigShelfProps.accWrapper('sm');
            callback.multiloop(client, accWrapper, properties, 'sm');

            //Check for acc icon props
            properties = props.impFigShelfProps.accIcon('sm');
            callback.multiloop(client, cross1, properties, 'sm');

             //Check for acc text props
            properties = props.impFigShelfProps.accText('sm');
            callback.multiloop(client, accText, properties, 'sm');
            }
    
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            console.log("isXSDevice");
           for(scr in size){
            //Check for Margin properties of acc wrapper
            properties = props.impFigShelfProps.accWrapper('xs');
            callback.multiloop(client, accWrapper, properties, 'xs');

            //Check for acc icon props
            properties = props.impFigShelfProps.accIcon('xs');
            callback.multiloop(client, cross1, properties, 'xs');

             //Check for acc text props
            properties = props.impFigShelfProps.accText('xs');
            callback.multiloop(client, accText, properties, 'xs');
         }

            }
        }        

    },    

    "click on accordion":function(client){
            client.click('.impfigcomp .accordion-global .product-accordion .product-acr-header .accordion-header a .acordion-crossicon', function(result) {
            this.assert.cssProperty('.accordion-global .product-accordion .product-acr-body.active','display','block');
            this.pause(1000);
            });
           
    },

    "Imp-fig-shelf properties for product accordian container" : function(client){
          var pageObj = client.page.imp_fig_comp_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

        var size = client.globals.size.widths;
            accContainer = pageObj.elements.accContainer.selector;
            accPara = pageObj.elements.accPara.selector;
            acch3 = pageObj.elements.acch3.selector;
            accList = pageObj.elements.accList.selector;
            accClose = pageObj.elements.accClose.selector;
            accClosetext = pageObj.elements.accClosetext.selector;

        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
            //Check for Margin properties of prod accordian
            properties = props.impFigShelfProps.accContainer(scr);
            callback.multiloop(client, accContainer, properties, scr);

            //Check for title properties of prod accordian
            properties = props.impFigShelfProps.accPara(scr);
            callback.multiloop(client, accPara, properties, scr);

            //impFig-para text properties(global props)
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, accPara, properties, scr);

            //Check for h3 title properties of prod accordian
            properties = props.impFigShelfProps.acch3(scr);
            callback.multiloop(client, acch3, properties, scr);

            properties = globalTitleComp.globaltitle.h3custprops(scr);
            callback.multiloop(client, acch3, properties, scr);

             //Check for list text properties of prod accordian
            properties = props.impFigShelfProps.accList(scr);
            callback.multiloop(client, accList, properties, scr);

             properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, accList, properties, scr);


             //Check for list close button- prod accordian
            properties = props.impFigShelfProps.accClose(scr);
            callback.multiloop(client, accClose, properties, scr);

            properties = props.impFigShelfProps.accClosetext(scr);
            callback.multiloop(client, accClosetext, properties, scr);
            }
         
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
            console.log("isLGDevice");
            for(scr in size){
           //Check for Margin properties of prod accordian
            properties = props.impFigShelfProps.accContainer('lg');
            callback.multiloop(client, accContainer, properties, 'lg');

            //Check for title properties of prod accordian
            properties = props.impFigShelfProps.accPara('lg');
            callback.multiloop(client, accPara, properties, 'lg');

            //impFig-para text properties(global props)
            properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
            callback.multiloop(client, accPara, properties, 'lg');

            //Check for h3 title properties of prod accordian
            properties = props.impFigShelfProps.acch3('lg');
            callback.multiloop(client, acch3, properties, 'lg');

            properties = globalTitleComp.globaltitle.h3custprops('lg');
            callback.multiloop(client, acch3, properties, 'lg');

             //Check for list text properties of prod accordian
            properties = props.impFigShelfProps.accList('lg');
            callback.multiloop(client, accList, properties, 'lg');

             properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
            callback.multiloop(client, accList, properties, 'lg');


             //Check for list close button- prod accordian
            properties = props.impFigShelfProps.accClose('lg');
            callback.multiloop(client, accClose, properties, 'lg');

            properties = props.impFigShelfProps.accClosetext('lg');
            callback.multiloop(client, accClosetext, properties, 'lg');
            }
    
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            console.log("isSMDevice");
            for(scr in size){
           //Check for Margin properties of prod accordian
            properties = props.impFigShelfProps.accContainer('sm');
            callback.multiloop(client, accContainer, properties, 'sm');

            //Check for title properties of prod accordian
            properties = props.impFigShelfProps.accPara('sm');
            callback.multiloop(client, accPara, properties, 'sm');

            //impFig-para text properties(global props)
            properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
            callback.multiloop(client, accPara, properties, 'sm');

            //Check for h3 title properties of prod accordian
            properties = props.impFigShelfProps.acch3('sm');
            callback.multiloop(client, acch3, properties, 'sm');

            properties = globalTitleComp.globaltitle.h3custprops('sm');
            callback.multiloop(client, acch3, properties, 'sm');

             //Check for list text properties of prod accordian
            properties = props.impFigShelfProps.accList('sm');
            callback.multiloop(client, accList, properties, 'sm');

             properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
            callback.multiloop(client, accList, properties, 'sm');


             //Check for list close button- prod accordian
            properties = props.impFigShelfProps.accClose('sm');
            callback.multiloop(client, accClose, properties, 'sm');

            properties = props.impFigShelfProps.accClosetext('sm');
            callback.multiloop(client, accClosetext, properties, 'sm');
            }
    
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            console.log("isXSDevice");
           for(scr in size){
            //Check for Margin properties of prod accordian
            properties = props.impFigShelfProps.accContainer('xs');
            callback.multiloop(client, accContainer, properties, 'xs');

            //Check for title properties of prod accordian
            properties = props.impFigShelfProps.accPara('xs');
            callback.multiloop(client, accPara, properties, 'xs');

            //impFig-para text properties(global props)
            properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
            callback.multiloop(client, accPara, properties, 'xs');

            //Check for h3 title properties of prod accordian
            properties = props.impFigShelfProps.acch3('xs');
            callback.multiloop(client, acch3, properties, 'xs');

            properties = globalTitleComp.globaltitle.h3custprops('xs');
            callback.multiloop(client, acch3, properties, 'xs');

             //Check for list text properties of prod accordian
            properties = props.impFigShelfProps.accList('xs');
            callback.multiloop(client, accList, properties, 'xs');

             properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
            callback.multiloop(client, accList, properties, 'xs');


             //Check for list close button- prod accordian
            properties = props.impFigShelfProps.accClose('xs');
            callback.multiloop(client, accClose, properties, 'xs');

            properties = props.impFigShelfProps.accClosetext('xs');
            callback.multiloop(client, accClosetext, properties, 'xs');
         }

            }
        }        

    },    

      

  /*   'Check for links on hover(imp)': function(client) {
        var pageObj = client.page.imp_fig_comp_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          selector = pageObj.elements.Textanimation1.selector,
          size = client.globals.size.widths;
        // pageObj.navigate()
        client.maximizeWindow();
        client.elements('css selector', selector, test) 

        function test(elems) {
            for (scr in size) {
                var properties = props.impFigShelfProps.TextanimationProps(scr);
                client.resizeWindow(size[scr].width, size[scr].height);
                 
                client.moveToElement(selector, 10, 10);
                client.pause(10000);
                callback.singleElem(client, selector, properties, scr);  
   
            }
        }
    },

    'Check for cross properties on hover(imp)': function(client) {
        var pageObj = client.page.imp_fig_comp_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          selector = pageObj.elements.cross1.selector,
          size = client.globals.size.widths;
   
        client.maximizeWindow();
        client.elements('css selector', selector, test) 

        function test(elems) {
            for (scr in size) {
                var properties = props.impFigShelfProps.crossProps(scr);
                client.resizeWindow(size[scr].width, size[scr].height);
                client.moveToElement(selector, 10, 10);
                client.pause(10000);
                callback.singleElem(client, selector, properties, scr);
                
            }
        }
    },
     'Check for cross props (imp)': function(client) {
         var pageObj = client.page.imp_fig_comp_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            cross = pageObj.elements.cross1.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.impFigShelfProps.cross1Props(scr);
            callback.singleElem(client, cross, properties, scr);
        }
        client.end(); 
    },*/

    'Closing Browser': function(client){
      client.pause(1000);
      client.end();
    }
}