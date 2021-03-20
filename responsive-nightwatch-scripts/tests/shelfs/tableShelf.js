var props = require('../components/other_comp/tableshelf_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    textComp = require('../components/text/text.js');
   // ctaComp = require('../components/cta/cta.js');


module.exports = { 
    "1.Check for UI-properties of shelf title and shelf Txt": function(client) {
        var pageObj = client.page.tableShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfTitle = pageObj.elements.shelfTitle.selector,
            shelfTxt = pageObj.elements.shelfTxt.selector,
            titleSelUI = pageObj.elements.titleSelUI.selector,
            textSelUI = pageObj.elements.textSelUI.selector,
            iebrowser=client.options.desiredCapabilities.isIEbrowser, 

            size = client.globals.size.widths;
        //pageObj.navigate();
        client.url(pageObj.url);
        client.waitForElementVisible("body", 9000);
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            // properties = props.tableShelfProps.shelfTitProps(scr);
            // callback.multiloop(client, shelfTitle, properties, scr);
            //shlef title UI props
            properties = globalTitleComp.globaltitle.h1props(scr);
            callback.multiloop(client, titleSelUI, properties, scr);
             //shelf text props
            properties = props.tableShelfProps.shelfTxtProps(scr);
            callback.multiloop(client, shelfTxt, properties, scr);
            //shlef text UI props
            properties = textComp.text.tableShelfTextComp(scr);
            callback.multiloop(client, textSelUI, properties, scr);

        }
      }
      else{
        if(client.options.desiredCapabilities.isLGDevice){
            // properties = props.tableShelfProps.shelfTitProps('lg');
            // callback.multiloop(client, shelfTitle, properties, 'lg');
            //shlef title UI props
            properties = globalTitleComp.globaltitle.h1props('lg');
            callback.singleElem(client, titleSelUI, properties, 'lg');
             //shelf text props
            properties = props.tableShelfProps.shelfTxtProps('lg');
            callback.singleElem(client, shelfTxt, properties, 'lg');
            //shlef text UI props
            properties = textComp.text.tableShelfTextComp('lg',iebrowser);
            callback.singleElem(client, textSelUI, properties, 'lg');
        } 
            else if(client.options.desiredCapabilities.isSMDevice){
            // properties = props.tableShelfProps.shelfTitProps('sm');
            // callback.multiloop(client, shelfTitle, properties, 'sm');
            //shlef title UI props
            properties = globalTitleComp.globaltitle.h1props('sm');
            callback.multiloop(client, titleSelUI, properties, 'sm');
             //shelf text props
            properties = props.tableShelfProps.shelfTxtProps('sm');
            callback.multiloop(client, shelfTxt, properties, 'sm');
            //shlef text UI props
            properties = textComp.text.tableShelfTextComp('sm');
            callback.multiloop(client, textSelUI, properties, 'sm');
        } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
            // properties = props.tableShelfProps.shelfTitProps('xs');
            // callback.multiloop(client, shelfTitle, properties, 'xs');
            //shlef title UI props
            properties = globalTitleComp.globaltitle.h1props('xs');
            callback.multiloop(client, titleSelUI, properties, 'xs');
             //shelf text props
            properties = props.tableShelfProps.shelfTxtProps('xs');
            callback.multiloop(client, shelfTxt, properties, 'xs');
            //shlef text UI props
            properties = textComp.text.tableShelfTextComp('xs');
            callback.multiloop(client, textSelUI, properties, 'xs');

            }
      }


    },
    "2.Check for UI-properties of Table shelf dropdown": function(client) {
        var pageObj = client.page.tableShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            tableDropdown = pageObj.elements.tableDropdown.selector,
            dropDownTxtUI = pageObj.elements.dropDownTxtUI.selector,
            iebrowser=client.options.desiredCapabilities.isIEbrowser,
            size = client.globals.size.widths;
        client.maximizeWindow();
        client.pause(5000);
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.tableShelfProps.dropDownProps(scr);
            callback.multiloop(client, tableDropdown, properties, scr);
            //fs and lh props
            properties = globalTitleComp.globaltitle.h4props(scr);
            callback.multiloop(client, '.table-shelf-dropdown span.text-comp', properties, scr);
            //font-family & color props
            properties = props.tableShelfProps.dropDownTxtProps(scr);
            callback.multiloop(client, '.table-shelf-dropdown span.text-comp', properties, scr);
            //color property
            properties = props.tableShelfProps.ddcolorProp(scr);
            callback.singleElem(client, dropDownTxtUI, properties, scr);

           } 
        }
        else{
        if(client.options.desiredCapabilities.isLGDevice){
            console.log("----lg--work");
            client.pause(5000);
            //drop down padding prop
            properties = props.tableShelfProps.dropDownProps('lg');
            callback.singleElem(client, tableDropdown, properties, 'lg');
            //fs and lh props
            properties = globalTitleComp.globaltitle.h4props('lg');
            callback.singleElem(client, '.table-shelf-dropdown .text-comp', properties, 'lg');
            //font-family & color props
            properties = props.tableShelfProps.dropDownTxtProps('lg',iebrowser);
            callback.singleElem(client, '.table-shelf-dropdown .text-comp', properties, 'lg');
            //color property
            properties = props.tableShelfProps.ddcolorProp('lg');
            callback.singleElem(client, dropDownTxtUI, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
           
            properties = props.tableShelfProps.dropDownProps('sm');
            callback.multiloop(client, tableDropdown, properties, 'sm');
            
            //fs and lh props
            properties = globalTitleComp.globaltitle.h4props('sm');
            callback.multiloop(client, '.table-shelf-dropdown .text-comp, properties', 'sm');
            //font-family & color props
            properties = props.tableShelfProps.dropDownTxtProps('sm');
            callback.multiloop(client, '.table-shelf-dropdown .text-comp', properties, 'sm');
            //color property
            properties = props.tableShelfProps.ddcolorProp('sm');
            callback.singleElem(client, dropDownTxtUI, properties, 'sm');
        }
        else if(client.options.desiredCapabilities.isXSDevice){
            
            properties = props.tableShelfProps.dropDownProps('xs');
            callback.multiloop(client, tableDropdown, properties, 'xs');
            //fs and lh props
            properties = globalTitleComp.globaltitle.h4props('xs');
            callback.multiloop(client, '.table-shelf-dropdown .text-comp, properties', properties, 'xs');
            //font-family & color props
            properties = props.tableShelfProps.dropDownTxtProps('xs');
            callback.multiloop(client, '.table-shelf-dropdown .text-comp, properties', properties, 'xs');
            //color property
            properties = props.tableShelfProps.ddcolorProp('xs');
            callback.singleElem(client, dropDownTxtUI, properties, 'xs');
        }
      }
    },
    //max height for title copy check 
    /*"3.Check for max height for title and title UI props": function(client) {
        var pageObj = client.page.tableShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            maxHtTitle = pageObj.elements.maxHtTitle.selector,
            tableTitleSel = pageObj.elements.tableTitleSel.selector,
            iebrowser=client.options.desiredCapabilities.isIEbrowser, 
            tableTitColor =pageObj.elements.tableTitColor.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //table  title max height
            properties = props.tableShelfProps.maxHtTitleProps(scr);
            callback.multiloop(client, maxHtTitle, properties, scr);
            //table  titlefs and lh props
            properties = globalTitleComp.globaltitle.h4props(scr);
            callback.multiloop(client, tableTitleSel, properties, scr);
            //table title font-family and color props
            properties = props.tableShelfProps.tabletitprops(scr);
            callback.multiloop(client, tableTitleSel, properties, scr);
            //table title color property
            properties = props.tableShelfProps.tableTitClrProp(scr);
            callback.multiloop(client, tableTitColor, properties, scr);
        }
    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){
           
            //table  title max height
            properties = props.tableShelfProps.maxHtTitleProps('lg');
            callback.singleElem(client, maxHtTitle, properties, 'lg');
            //table  titlefs and lh props
            properties = globalTitleComp.globaltitle.h4props('lg');
            callback.singleElem(client, tableTitleSel, properties, 'lg');
            //table title font-family and color props
            // properties = props.tableShelfProps.tabletitprops('lg',iebrowser);
            // callback.singleElem(client, tableTitleSel, properties, 'lg');

            properties = props.tableShelfProps.tableTitClrProp('lg');
            callback.singleElem(client, tableTitColor, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
            
            //table  title max height
            properties = props.tableShelfProps.maxHtTitleProps('sm');
            callback.singleElem(client, maxHtTitle, properties, 'sm');
            //table  titlefs and lh props
            properties = globalTitleComp.globaltitle.h4props('sm');
            callback.singleElem(client, tableTitleSel, properties, 'sm');
            //table title font-family and color props
            properties = props.tableShelfProps.tabletitprops('sm');
            callback.singleElem(client, tableTitleSel, properties, 'sm');

            properties = props.tableShelfProps.tableTitClrProp('sm');
            callback.singleElem(client, tableTitColor, properties, 'sm');

        }
        else if(client.options.desiredCapabilities.isXSDevice){
            
            //table  title max height
            properties = props.tableShelfProps.maxHtTitleProps('xs');
            callback.singleElem(client, maxHtTitle, properties, 'xs');
            //table  titlefs and lh props
            properties = globalTitleComp.globaltitle.h4props('xs');
            callback.singleElem(client, tableTitleSel, properties, 'xs');
            //table title font-family and color props
            properties = props.tableShelfProps.tabletitprops('xs');
            callback.singleElem(client, tableTitleSel, properties, 'xs');

            properties = props.tableShelfProps.tableTitClrProp('xs');
            callback.singleElem(client, tableTitColor, properties, 'xs');

        }
     }
 },*/
   
    "4.Check for text of table": function(client) {
        var pageObj = client.page.tableShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            tableTextCls = pageObj.elements.tableTextCls.selector,
            tablerowMargin = pageObj.elements.tablerowMargin.selector,
            tableTextMB = pageObj.elements.tableTextMB.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //fs,lh,ff and color check
            properties = props.tableShelfProps.tableTextProps(scr);
            callback.multiloop(client, tableTextCls, properties, scr);
            //Margin props of row1
            properties = props.tableShelfProps.tableMgProps(scr);
            callback.multiloop(client, tablerowMargin, properties, scr);
            //Margin bottom of all rows
            properties = props.tableShelfProps.tableTextMgProps(scr);
            callback.multiloop(client, tableTextMB, properties, scr);

        }
    }
    else {
        if(client.options.desiredCapabilities.isLGDevice){
            //fs,lh,ff and color check
            properties = props.tableShelfProps.tableTextProps('lg');
            callback.multiloop(client, tableTextCls, properties, 'lg');
            //Margin props of row1
            properties = props.tableShelfProps.tableMgProps('lg');
            callback.multiloop(client, tablerowMargin, properties, 'lg');
            //Margin bottom of all rows
            properties = props.tableShelfProps.tableTextMgProps('lg');
            callback.multiloop(client, tableTextMB, properties, 'lg');

        }
        else if(client.options.desiredCapabilities.isSMDevice){
            //fs,lh,ff and color check
            properties = props.tableShelfProps.tableTextProps('sm');
            callback.multiloop(client, tableTextCls, properties, 'sm');
            //Margin props of row1
            properties = props.tableShelfProps.tableMgProps('sm');
            callback.multiloop(client, tablerowMargin, properties, 'sm');
            //Margin bottom of all rows
            properties = props.tableShelfProps.tableTextMgProps('sm');
            callback.multiloop(client, tableTextMB, properties, 'sm');


        }
        else if(client.options.desiredCapabilities.isXSDevice){
            //fs,lh,ff and color check
            properties = props.tableShelfProps.tableTextProps('xs');
            callback.multiloop(client, tableTextCls, properties, 'xs');
            //Margin props of row1
            properties = props.tableShelfProps.tableMgProps('xs');
            callback.multiloop(client, tablerowMargin, properties, 'xs');
            //Margin bottom of all rows
            properties = props.tableShelfProps.tableTextMgProps('xs');
            callback.multiloop(client, tableTextMB, properties, 'xs');
              }
         }

    },

    //compliance text properties check 
   "5.Check for text properties in compliance": function(client) {
        var pageObj = client.page.tableShelf_selectors(),
            callback = client.page.common(),
            complText = pageObj.elements.complText.selector,
            complianceTableSel = pageObj.elements.complianceTableSel.selector,
            complLineMB = pageObj.elements.complLineMB.selector,
            complTextML = pageObj.elements.complTextML.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.bodyCopyCustProps(scr);
            callback.multiloop(client, complText, properties, scr);

            properties = props.tableShelfProps.complTextMLProps(scr);
            callback.multiloop(client, complTextML, properties, scr);

            properties = globalTitleComp.globaltitle.bodyCopyCustProps(scr);
            callback.multiloop(client, complTextML, properties, scr);
            
             properties = props.tableShelfProps.complTextMBProps(scr);
            callback.multiloop(client, complianceTableSel, properties, scr);

            properties = props.tableShelfProps.complTextMBProps(scr);
            callback.multiloop(client, complLineMB, properties, scr);
        }
    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){
            properties = globalTitleComp.globaltitle.bodyCopyCustProps('lg');
            callback.multiloop(client, complText, properties, 'lg');

            properties = props.tableShelfProps.complTextMLProps('lg');
            callback.multiloop(client, complTextML, properties, 'lg');

            properties = globalTitleComp.globaltitle.bodyCopyCustProps('lg');
            callback.multiloop(client, complTextML, properties, 'lg');
            
             properties = props.tableShelfProps.complTextMBProps('lg');
            callback.multiloop(client, complianceTableSel, properties, 'lg');

            } 
             else if(client.options.desiredCapabilities.isSMDevice){
             properties = globalTitleComp.globaltitle.bodyCopyCustProps('sm');
            callback.multiloop(client, complText, properties, 'sm');

            properties = props.tableShelfProps.complTextMLProps('sm');
            callback.multiloop(client, complTextML, properties, 'sm');

            properties = globalTitleComp.globaltitle.bodyCopyCustProps('sm');
            callback.multiloop(client, complTextML, properties, 'sm');
            
             properties = props.tableShelfProps.complTextMBProps('sm');
            callback.multiloop(client, complianceTableSel, properties, 'sm');

             }
             else if(client.options.desiredCapabilities.isXSDevice){
            properties = globalTitleComp.globaltitle.bodyCopyCustProps('xs');
            callback.multiloop(client, complText, properties, 'xs');

            properties = props.tableShelfProps.complTextMLProps('xs');
            callback.multiloop(client, complTextML, properties, 'xs');

            properties = globalTitleComp.globaltitle.bodyCopyCustProps('xs');
            callback.multiloop(client, complTextML, properties, 'xs');
            
             properties = props.tableShelfProps.complTextMBProps('xs');
            callback.multiloop(client, complianceTableSel, properties, 'xs');

             }
               
        }

    },

    //compliance image properties check 
    "6.Check for image properties in compliance": function(client) {
        var pageObj = client.page.tableShelf_selectors(),
            callback = client.page.common(),
            complImage = pageObj.elements.complImage.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.tableShelfProps.complImageProps(scr);
            callback.multiloop(client, complImage, properties, scr);
        }
    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){
            properties = props.tableShelfProps.complImageProps('lg');
            callback.multiloop(client, complImage, properties, 'lg');    
        }
        else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.tableShelfProps.complImageProps('sm');
            callback.multiloop(client, complImage, properties, 'sm');  
        }
        else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.tableShelfProps.complImageProps('xs');
            callback.multiloop(client, complImage, properties, 'xs'); 

        }
    }

    },

     "check for accordion link props" : function(client){
        var pageObj = client.page.tableShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

        var accWrapper = pageObj.elements.accWrapper.selector;
           cross1 = pageObj.elements.cross1.selector;
           accText = pageObj.elements.accText.selector;
           size = client.globals.size.widths; 
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
             //Check for Margin properties of acc wrapper
            properties = props.tableShelfProps.accWrapper(scr);
            callback.multiloop(client, accWrapper, properties, scr);

            //Check for acc icon props
            properties = props.tableShelfProps.accIcon(scr);
            callback.multiloop(client, cross1, properties, scr);

             //Check for acc text props
            properties = props.tableShelfProps.accText(scr);
            callback.multiloop(client, accText, properties, scr);
            }
         
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
             //Check for Margin properties of acc wrapper
            properties = props.tableShelfProps.accWrapper('lg');
            callback.multiloop(client, accWrapper, properties, 'lg');

            //Check for acc icon props
            properties = props.tableShelfProps.accIcon('lg');
            callback.multiloop(client, cross1, properties, 'lg');

             //Check for acc text props
            properties = props.tableShelfProps.accText('lg');
            callback.multiloop(client, accText, properties, 'lg');
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            //Check for Margin properties of acc wrapper
            properties = props.tableShelfProps.accWrapper('sm');
            callback.multiloop(client, accWrapper, properties, 'sm');

            //Check for acc icon props
            properties = props.tableShelfProps.accIcon('sm');
            callback.multiloop(client, cross1, properties, 'sm');

             //Check for acc text props
            properties = props.tableShelfProps.accText('sm');
            callback.multiloop(client, accText, properties, 'sm');
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            //Check for Margin properties of acc wrapper
            properties = props.tableShelfProps.accWrapper('xs');
            callback.multiloop(client, accWrapper, properties, 'xs');

            //Check for acc icon props
            properties = props.tableShelfProps.accIcon('xs');
            callback.multiloop(client, cross1, properties, 'xs');

             //Check for acc text props
            properties = props.tableShelfProps.accText('xs');
            callback.multiloop(client, accText, properties, 'xs');
            } 
        }        

    },    

    "click on accordion":function(client){
            client.click('.accordion-global .product-accordion .product-acr-header .accordion-header a .acordion-crossicon', function(result) {
            });
        },

    "table shelf properties for product accordion container" : function(client){
          var pageObj = client.page.tableShelf_selectors(),
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
            properties = props.tableShelfProps.accContainer(scr);
            callback.multiloop(client, accContainer, properties, scr);

            //Check for title properties of prod accordian
            properties = props.tableShelfProps.accPara(scr);
            callback.singleElem(client, accPara, properties, scr);

            //impFig-para text properties(global props)
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, accPara, properties, scr);

            //Check for h3 title properties of prod accordian
            properties = props.tableShelfProps.acch3(scr);
            callback.multiloop(client, acch3, properties, scr);

            properties = globalTitleComp.globaltitle.h3custprops(scr);
            callback.multiloop(client, acch3, properties, scr);

             //Check for list text properties of prod accordian
            properties = props.tableShelfProps.accList(scr);
            callback.multiloop(client, accList, properties, scr);

             properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, accList, properties, scr);


             //Check for list close button- prod accordian
            properties = props.tableShelfProps.accClose(scr);
            callback.multiloop(client, accClose, properties, scr);

            properties = props.tableShelfProps.accClosetext(scr);
            callback.multiloop(client, accClosetext, properties, scr);

            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, accClosetext, properties, scr);
            }
         
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
           //Check for Margin properties of prod accordian
            properties = props.tableShelfProps.accContainer('lg');
            callback.multiloop(client, accContainer, properties, 'lg');

            //Check for title properties of prod accordian
            properties = props.tableShelfProps.accPara('lg');
            callback.multiloop(client, accPara, properties, 'lg');

            //impFig-para text properties(global props)
            properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
            callback.multiloop(client, accPara, properties, 'lg');

            //Check for h3 title properties of prod accordian
            properties = props.tableShelfProps.acch3('lg');
            callback.multiloop(client, acch3, properties, 'lg');

            properties = globalTitleComp.globaltitle.h3custprops('lg');
            callback.multiloop(client, acch3, properties, 'lg');

             //Check for list text properties of prod accordian
            properties = props.tableShelfProps.accList('lg');
            callback.multiloop(client, accList, properties, 'lg');

             properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
            callback.multiloop(client, accList, properties, 'lg');


             //Check for list close button- prod accordian
            properties = props.tableShelfProps.accClose('lg');
            callback.multiloop(client, accClose, properties, 'lg');

            properties = props.tableShelfProps.accClosetext('lg');
            callback.multiloop(client, accClosetext, properties, 'lg');

            properties = globalTitleComp.globaltitle.bodyCopyProps('lg');
            callback.multiloop(client, accClosetext, properties, 'lg');
            
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
           //Check for Margin properties of prod accordian
            properties = props.tableShelfProps.accContainer('sm');
            callback.multiloop(client, accContainer, properties, 'sm');

            //Check for title properties of prod accordian
            properties = props.tableShelfProps.accPara('sm');
            callback.multiloop(client, accPara, properties, 'sm');

            //impFig-para text properties(global props)
            properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
            callback.multiloop(client, accPara, properties, 'sm');

            //Check for h3 title properties of prod accordian
            properties = props.tableShelfProps.acch3('sm');
            callback.multiloop(client, acch3, properties, 'sm');

            properties = globalTitleComp.globaltitle.h3custprops('sm');
            callback.multiloop(client, acch3, properties, 'sm');

             //Check for list text properties of prod accordian
            properties = props.tableShelfProps.accList('sm');
            callback.multiloop(client, accList, properties, 'sm');

             properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
            callback.multiloop(client, accList, properties, 'sm');


             //Check for list close button- prod accordian
            properties = props.tableShelfProps.accClose('sm');
            callback.multiloop(client, accClose, properties, 'sm');

            properties = props.tableShelfProps.accClosetext('sm');
            callback.multiloop(client, accClosetext, properties, 'sm');

            properties = globalTitleComp.globaltitle.bodyCopyProps('sm');
            callback.multiloop(client, accClosetext, properties, 'sm');
    
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            //Check for Margin properties of prod accordian
            properties = props.tableShelfProps.accContainer('xs');
            callback.multiloop(client, accContainer, properties, 'xs');

            //Check for title properties of prod accordian
            properties = props.tableShelfProps.accPara('xs');
            callback.multiloop(client, accPara, properties, 'xs');

            //impFig-para text properties(global props)
            properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
            callback.multiloop(client, accPara, properties, 'xs');

            //Check for h3 title properties of prod accordian
            properties = props.tableShelfProps.acch3('xs');
            callback.multiloop(client, acch3, properties, 'xs');

            properties = globalTitleComp.globaltitle.h3custprops('xs');
            callback.multiloop(client, acch3, properties, 'xs');

             //Check for list text properties of prod accordian
            properties = props.tableShelfProps.accList('xs');
            callback.multiloop(client, accList, properties, 'xs');

             properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
            callback.multiloop(client, accList, properties, 'xs');


             //Check for list close button- prod accordian
            properties = props.tableShelfProps.accClose('xs');
            callback.multiloop(client, accClose, properties, 'xs');

            properties = props.tableShelfProps.accClosetext('xs');
            callback.multiloop(client, accClosetext, properties, 'xs');

            properties = globalTitleComp.globaltitle.bodyCopyProps('xs');
            callback.multiloop(client, accClosetext, properties, 'xs');
         
            }
        }        

    }, 
     "check for accordion container close props" : function(client){
        var pageObj = client.page.tableShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();

        var accContClose = pageObj.elements.accContClose.selector;
           size = client.globals.size.widths;
        if(client.globals.test_settings.isLocal){
            client.maximizeWindow();
            for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
             //Check for properties of acc close
            properties = props.tableShelfProps.accCloseProps(scr);
            callback.multiloop(client, accContClose, properties, scr);
            }
         
        } 
        else {
            if(client.options.desiredCapabilities.isLGDevice){
            properties = props.tableShelfProps.accCloseProps('lg');
            callback.multiloop(client, accContClose, properties, 'lg');
            } 

            else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.tableShelfProps.accCloseProps('sm');
            callback.multiloop(client, accContClose, properties, 'sm');
            } 

            else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.tableShelfProps.accCloseProps('xs');
            callback.multiloop(client, accContClose, properties, 'xs');
            } 
        }        

    },       

   /* 'Check for links on hover(imp)': function(client) {
        var pageObj = client.page.tableShelf_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          selector = pageObj.elements.Textanimation1.selector,
          size = client.globals.size.widths;
        // pageObj.navigate()
        client.maximizeWindow();
        client.elements('css selector', selector, test) 

        function test(elems) {
            for (scr in size) {
                var properties = props.tableShelfProps.TextanimationProps(scr);
                client.resizeWindow(size[scr].width, size[scr].height);
                 
                client.moveToElement(selector, 10, 10);
                client.pause(10000);
                callback.singleElem(client, selector, properties, scr);  
   
            }
        }
    },

    'Check for cross properties on hover(imp)': function(client) {
        var pageObj = client.page.tableShelf_selectors(),
          signup = client.page.signup(),
          callback = client.page.common(),
          selector = pageObj.elements.cross1.selector,
          size = client.globals.size.widths;
   
        client.maximizeWindow();
        client.elements('css selector', selector, test) 

        function test(elems) {
            for (scr in size) {
                var properties = props.tableShelfProps.crossProps(scr);
                client.resizeWindow(size[scr].width, size[scr].height);
                client.moveToElement(selector, 10, 10);
                client.pause(10000);
                callback.singleElem(client, selector, properties, scr);
                
            }
        }
    },
     'Check for cross props (imp)': function(client) {
         var pageObj = client.page.tableShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            cross = pageObj.elements.cross1.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.tableShelfProps.cross1Props(scr);
            callback.singleElem(client, cross, properties, scr);
        }
    },*/
    "Ending the session":function(client){
        client.end();
    }



}