/*
Feature: Verify that the JM can configure the a page 
*/
var props = require('../components/other_comp/heroShelf_Props.js');

module.exports = {    

    function (client) {

        var aem_login_page = client.page.aem_login_page();
        var aem_siteadmin_page = client.page.aem_siteadmin_page();
       	var new_page = client.globals.test.standard_page;
       	aem_login_page.admin_login();
		aem_siteadmin_page.navigate();
        aem_siteadmin_page.create_page(new_page, 'Standard');

       // client.end();

    },
                
    "Given a Standard page has been Authored\
    When I open the page in AEM Content Finder\
    Then I can add a shelf to the page":

    function (client) {

    var aem_authored_page = client.page.aem_authored_page();
    var hub_page_url = 'https://author-rbs-retail-test-61.adobecqms.net/cf#/content/natwest_com/en_uk/responsive-personal/' + client.globals.test.standard_page + '.html';
        
    
    	console.log(hub_page_url);
    
        aem_authored_page.navigate(hub_page_url);
        
        aem_authored_page.initialize_window_settings();

        aem_authored_page.open_the_menu_list_at_location('@first_shelf_drag_and_drop_area');

        aem_authored_page.insert_a_new_component('Hero Shelf');

        client.pause(2000);

    },
                
    "Populate data in Hero Shelf":
    
    function (client){
                                
        var aem_authored_page = client.page.aem_authored_page();
       	var hub_page_url = 'https://author-rbs-retail-test-61.adobecqms.net/cf#/content/natwest_com/en_uk/responsive-personal/' + client.globals.test.standard_page + '.html';
        var standard_page_title1 = client.globals.data.standard_page_title1;
        var standard_page_description1 = client.globals.data.standard_page_description1;
        var standard_page_title2 = client.globals.data.standard_page_title2;
        var standard_page_description2 = client.globals.data.standard_page_description2;
        var standard_page_alt_title = client.globals.data.standard_page_alt_title;

        // 1 Title  -- .titleWrapper.cq-element-master-par_47articlecolumnlayout_47_39articlecolumntitleeven_95column0_39 .title-comp
        client
        .click('.hero-title-block .product-title .auth--info')
        .doubleClick()
        .pause(2000)
        .setValue(".x-window.x-window-plain.x-resizable-pinned:not([style*='visibility: hidden']) input[name='./text']",standard_page_title1)
        .click('.x-window.x-window-plain.x-resizable-pinned:not([style*="visibility: hidden"]) .x-toolbar-right-row .cq-btn-ok')
        client.pause(3000)

        //Lovely title for hero-shelf
        client
       	.click('.hero-title-block .titleWrapper .auth--info')
    	.doubleClick()
        .pause(2000)
        .setValue(".x-window.x-window-plain.x-resizable-pinned:not([style*='visibility: hidden']) input[name='./text']",standard_page_description1)
        .click('.x-window.x-window-plain.x-resizable-pinned:not([style*="visibility: hidden"]) .x-toolbar-right-row .cq-btn-ok');
        client.pause(3000)

         //h3 title for hero-shelf
     	client
     	.click('.apr-title .auth--info')
    	.doubleClick()
        .pause(2000)
        .setValue(".x-window.x-window-plain.x-resizable-pinned:not([style*='visibility: hidden']) input[name='./text']",standard_page_title2)
        .click('.x-window.x-window-plain.x-resizable-pinned:not([style*="visibility: hidden"]) .x-toolbar-right-row .cq-btn-ok');
        client.pause(3000)

         //Body text for hero-shelf
        client
        .click('.apr-text .auth--info')
        .doubleClick()
        .pause(2000)
        .setValue(".x-window.x-window-plain.x-resizable-pinned:not([style*='visibility: hidden']) input[name='./text']",standard_page_description2)
        .click('.x-window.x-window-plain.x-resizable-pinned:not([style*="visibility: hidden"]) .x-toolbar-right-row .cq-btn-ok');
     	client.pause(3000)

        
},

    "Given a Standard page has been Authored\
    When I open the page in AEM Content Finder\
    Then I can Activate the new page":

    function (client) {

        var aem_authored_page = client.page.aem_authored_page();
        var aem_published_page_url = 'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-personal/'+ client.globals.test.standard_page + '.html';

   		aem_authored_page.activate_page();
   		aem_authored_page.navigate(aem_published_page_url);
        
    },

    "hero-shelf properties for hero-title-block natwest(illustration mode)": function(client) {
        var callback = client.page.common();
        var heroTitCls ='.product-title .title-comp';
           
        var size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Check for Margin properties of hero title block
            properties = props.heroShelfProps.heroAuthTitProps(scr);
            callback.singleElem(client, heroTitCls, properties, scr);
           /* //check for hero title text properties
            properties = props.heroShelfProps.heroTitTextProps(scr);
            callback.singleElem(client, heroTitTextCls, properties, scr);
            //check for hero-title padding props
            properties = props.heroShelfProps.heroTitPad(scr);
            callback.singleElem(client, heroTitlePaddingCls, properties, scr);
            //hero-title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h1props(scr);
            callback.singleElem(client, heroTitTextCls, properties, scr);*/
        }
       // client.end();
    }
   
};
/*//image component drag and drop
        aem_authored_page.open_the_menu_list('.nwhero-illustration-wrapper .image-wrapper');
        client
        .moveToElement('.x-panel-body x-panel-body-noheader > .cq-cft-dataview > .thumb-wrap x-view-selected', 0, 0)
        .mouseButtonDown('left')
        .moveToElement('.x-panel-body x-panel-body-noheader x-panel-body-noborder', 10, 10)
        .mouseButtonUp('left')
        .pause(2000)
        

        .click('.x-tab-right')
        .setValue(".x-form-text x-form-field x-form-invalid",standard_page_alt_title)
        .click('.x-toolbar-right-row .cq-btn-ok');*/


       //image component drag and drop
        /*aem_authored_page.open_the_menu_list('.nwhero-illustration-wrapper .image-wrapper');
		aem_authored_page.select_an_action_from_the_menu_list('Edit');*/
			//aem_authored_page.drag_drop('.thumb-wrap .thumb','input.x-form-file','callback');
		/*client
		.execute("$('.nwhero-illustration-wrapper .image-wrapper img').attr('src', '/content/dam/BoB-SVG/BOB-SVG/rbs-bus-illustration-rbs-01.png');")
		*//*.pause(1000)
		.moveToElement('#cfTab-Images .x-panel-body #ext-comp-1033 .x-panel-bwrap .x-panel-body .thumb-wrap:first-child', 10, 10)
		.click('#cfTab-Images .x-panel-body #ext-comp-1033 .x-panel-bwrap .x-panel-body .thumb-wrap:first-child')
		.mouseButtonDown(0)
		.pause(1000)
		.moveToElement('.x-form-field-wrap .x-form-file', 10, 10)
        .mouseButtonUp(0)
        .pause(2000)
        
		
        .click('.x-tab-right')
        .setValue(".x-form-text x-form-field x-form-invalid",standard_page_alt_title)
        .click('.x-toolbar-right-row .cq-btn-ok');*/


        // 2 Title  -- .titleWrapper.cq-element-master-par_47articlecolumnlayout_47_39articlecolumntitleodd_95column0_39 .title-comp
        /*aem_authored_page.open_the_menu_list_at_location('.titleWrapper.cq-element-master-par_47articlecolumnlayout_47_39articlecolumntitleodd_95column0_39 .auth--info');
        client
        .waitForElementVisible('.x-menu.x-menu-floating.x-layer:not(.x-hide-offsets) >  .x-menu-list', 2000)
        .click('.x-menu.x-menu-floating.x-layer:not(.x-hide-offsets) >  .x-menu-list > li:nth-child(1)')
        client
        .pause(2000)
        .setValue(".x-window.x-window-plain.x-resizable-pinned:not([style*='visibility: hidden']) input[name='./text']",standard_page_title2)
        .click(".x-window.x-window-plain.x-resizable-pinned:not([style*='visibility: hidden']) .x-toolbar-right-row .cq-btn-ok");
        
        // 2 Description -- .textWrapper.cq-element-master-par_47articlecolumnlayout_47_39articlecolumntextareaodd_95column0_39 .text-comp
        aem_authored_page.open_the_menu_list_at_location('.textWrapper.cq-element-master-par_47articlecolumnlayout_47_39articlecolumntextareaodd_95column0_39 .auth--info');
        client
        .waitForElementVisible('.x-menu.x-menu-floating.x-layer:not(.x-hide-offsets) >  .x-menu-list', 2000)
        .click('.x-menu.x-menu-floating.x-layer:not(.x-hide-offsets) >  .x-menu-list > li:nth-child(1)')
        .pause(2000)
        .setValue('.x-window.x-window-plain.x-resizable-pinned:not([style*="visibility: hidden"]) textarea',standard_page_description2)
        .click('.x-window.x-window-plain.x-resizable-pinned:not([style*="visibility: hidden"]) .x-toolbar-right-row .cq-btn-ok')
        .pause(1000);*/
        //.end();
        