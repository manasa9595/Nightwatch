
 var siteAdminCommands = {
	 
	create_page: function(test_page, search_item) {
 
       // this.waitForElementVisible('@table_last_row', 70000)
		this.waitForElementVisible('@new_page_btn', 70000)
			.click('button.x-btn-text.cq-siteadmin-create-page-icon')
			.click('a.x-menu-item.cq-siteadmin-create-page.x-menu-item-default')


     
		this.waitForElementVisible('@create_page_title', 70000);
		this.waitForElementVisible('div.template-item:nth-child(1)', 100000);
		
//		this.api.pause(3000);
		
        this.setValue('@create_page_title', test_page)
			.setValue('@create_page_name', test_page);
		
		this.click('@create_page_templates');

		this.api.elements('css selector','.template-item', function(list) {
			var self = this;
			list.value.some(function(item_on_list, index) {				
				self.elementIdText(item_on_list.ELEMENT, function(item_on_list_text){
					if (item_on_list_text.value.search(search_item) >= 0) {
						self.moveTo(item_on_list.ELEMENT, 0, 0, function(result) {	
							self.pause(5000);
							//Hack to set focus on the element ok for now
							self.elementIdClick(item_on_list.ELEMENT);  
							self.elementIdClick(item_on_list.ELEMENT);
						});
					};	
				});
			});
		});
        
		this.expect.element('@create_page_btn').text.to.contain("Create");
		
		this.click('@create_page_btn');
			
		this.api.pause(5000);
		
		this.waitForElementVisible('@table_last_row_template', 70000)
			.waitForElementVisible('@table_last_row_title', 70000);
	}
		
 };
 
module.exports = {
	
    url: function() {
       // return this.api.launchUrl + '/siteadmin#/content/automation_test'
        return 'https://author-rbs-retail-test-61.adobecqms.net/siteadmin#/content/natwest_com/en_uk/responsive-personal/important-figures';
    },
	
	commands: [siteAdminCommands],
 
    elements: {

        siteadmin_title: '#title',
        new_page_btn: 'button.x-btn-text.cq-siteadmin-create-page-icon',
        //new_page_btn: '.x-btn-text cq-siteadmin-create-page-icon',
		workflow_btn: '.x-btn.cq-siteadmin-workflow.x-btn-noicon',

		
//create page dialog


        create_page_title: '.x-window.x-window-plain.x-resizable-pinned input[name="title"]',
		create_page_name: '.x-window.x-window-plain.x-resizable-pinned input[name="label"]',
		create_page_templates: 'input[name="template"]',

		landing_template: 'div.template-item:nth-child(5) > div:nth-child(2)',
		hub_template: 'div.template-item:nth-child(6) > div:nth-child(2)',
		home_template: 'div.template-item:nth-child(11) > div:nth-child(2)',
		spoke_template: 'div.template-item:nth-child(15) > div:nth-child(2)',
		tool_template: 'div.template-item:nth-child(16) > div:nth-child(2)',

		create_page_btn: '.x-window.x-window-plain.x-resizable-pinned .x-toolbar-right-row .cq-btn-ok',
		
//create workflow dialog
		workflows_available: '.x-form-trigger.x-form-arrow-trigger',
		publish_buddy_check: 'div.x-combo-list-item:nth-child(12)',
		workflow_assign_to: '#ext-comp-1210',
		workflow_comment: '#ext-comp-1211',
		workflow_title: '#ext-comp-1212',
		workflow_start_btn: '.x-btn.cq-btn-ok.x-btn-noicon',
		
//Deactivate
		deactivate_page_btn: '#ext-comp-1086',
		deactivate_page_option: '#ext-comp-1177',
		
//new pages table
		table_last_row: '.x-grid3-row-last',
		table_last_row_selected: '.x-grid3-row-last.x-grid3-row-selected',
		table_last_row_template: '.x-grid3-row-last > table > tbody > tr > td.x-grid3-col.x-grid3-cell.x-grid3-td-template > div',
		table_last_row_title: '.x-grid3-row-last > table > tbody > tr > td.x-grid3-col.x-grid3-cell.x-grid3-td-title > div',
		table_last_row_name: '.x-grid3-row-last > table > tbody > tr > td.x-grid3-col.x-grid3-cell.x-grid3-td-name > div',
		table_last_row_published: '.x-grid3-row-last > table > tbody > tr > td.x-grid3-col.x-grid3-cell.x-grid3-td-published > div',
		table_last_row_workflow_status: '.x-grid3-row-last > table > tbody > tr > td.x-grid3-col.x-grid3-cell.x-grid3-td-status > div > span.status',
		
//window dialog common		
		window_header: '.x-window-header-text',
		window_dialog: '.x-window.x-window-plain.x-window-dlg',
		window_dialog_text: '.ext-mb-text',
		
//Workflow        
        sidekick_tab_icon_workflow: '.x-tab-strip-text.cq-sidekick-tab.cq-sidekick-tab-icon-workflow',
		sidekick_open_workflow:'.x-form-trigger.x-form-arrow-trigger',
		sidekick_start_workflow: '#cq\.sidekick\.workflow\.start',
		sidekick_workflow_type: '#ext-comp-1150', 
		sidekick_workflow_form: '#ext-comp-1154',
		sidekick_workflow_info: '#ext-comp-1227', 
		
    }
};
