// var ipData = require('testdata/inputs.js')
// var getfunctions = require('../../testdata/inputs.js');

module.exports = {

	elements: {
		Sites : {
			// selector : 'button>span>coral-icon:first-child'
			selector:'coral-masonry-item div[data-foundation-collection-navigator-href="/sites.html/content"]'
			// selector : '//*[@class="globalnav-homecard-title"and text()="Sites"]',
			// locateStrategy: 'xpath' 
		},	
		MainPath : {
			// selector : 'coral-columnview-item:nth-child(4)',
			selector : 'coral-columnview-column-content:first-child>coral-columnview-item>coral-columnview-item-content>div[title="alexanderforbes"]'
			/*selector : '//*[@class="foundation-collection-item coral3-ColumnView-item coral3-ColumnView-item--drilldown is-active" and @data-foundation-collection-item-id="/content/alexander-forbes"]',
			locateStrategy: 'xpath' */
		},	
		SubPath : {
			selector : 'coral-columnview-column-content:first-child>coral-columnview-item>coral-columnview-item-content>div[title="AFSAAutomation"]'
			/*selector : '//*[@class="foundation-collection-item-title" and contains(text(),"AFSAAutomation")]',
			locateStrategy: 'xpath' */
		},
		CreateButton : {
			selector : 'button[data-granite-collection-create-target=".cq-siteadmin-admin-childpages"]'
		},	
		PageIcon :{
			selector : 'a[icon="experience"]:first-child>coral-icon'
		},
		BasePage :{
			selector : 'coral-card-asset:first-child>img'
		},
		NextButton :{
			// selector : '.coral-Button--primary>coral-button-label:first-child'
			// selector : '.coral-Panel.is-selected .coral-button-label:first-child'
			selector : '.coral-Panel.is-selected>coral-panel-content >div>button'
		},

		NameText : {
			selector : 'input[name="pageName"]'
		},
		TitleText : {
			selector : 'input[name="./jcr:title"]'
		},
		BaseCreateButton :{
			// selector : 'button[data-foundation-wizard-control-action="next"]:nth-child(2)'
			// selector : '.coral-Panel.is-selected>coral-panel-content >div>button:nth-child(2)'
			selector : '.coral-Panel.is-selected>coral-panel-content>div>button:last-child'
		},
		OpenButton : {
			selector : 'coral-dialog-footer button:last-child'
		},				
		DoneButton : {
			selector : '//coral-button-label[contains(text(),"Done")]',
			locateStrategy: 'xpath' 
		},
		checkboxpage : {
			selector : 'coral-columnview-column:nth-child(3)>coral-columnview-column-content>coral-columnview-item:nth-last-child(2)>coral-columnview-item-thumbnail>img'
		},
		pageEdit : {
			selector : 'button.cq-siteadmin-admin-actions-edit-activator>coral-icon'
		}

	},

	commands:[{

		sites:function() {
			return this
				.waitForElementVisible('@Sites', 30000)			
				.click('@Sites');			
		},		
		MainPath:function() {
			return this
				.waitForElementVisible('@MainPath', 60000)			
				.click('@MainPath');				
		},
		SubPath:function() {
			return this
				.waitForElementVisible('@SubPath', 60000)			
				.click('@SubPath')
				.api.pause(5000);	
		},
		CreateButton:function(client) {
			return this
				.waitForElementVisible('@CreateButton', 60000)			
				.click('@CreateButton');
				
		},
		PageIcon:function(client) {
			return this
				.waitForElementVisible('@PageIcon', 60000)			
				.click('@PageIcon')

		},
		BasePage:function(client) {
			return this
				.waitForElementVisible('@BasePage', 60000)			
				.click('@BasePage');	
		},
		NextButton:function(client) {
			return this
				.waitForElementVisible('@NextButton', 60000)			
				.click('@NextButton');	
		},
		NameText:function(client, pName) {
			console.log(pName);
			return this
				.waitForElementVisible('@NameText', 60000)			
				.setValue('@NameText', pName);	
		},
		TitleText:function(client, pTitle) {			
			return this
				.waitForElementVisible('@TitleText', 90000)			
				.setValue('@TitleText', pTitle);	
		},
      	BaseCreateButton:function(client) {
			return this
				.waitForElementVisible('@BaseCreateButton', 60000)
				.click('@BaseCreateButton');
		},
		OpenButton:function(client) {
			return this
				.waitForElementVisible('@OpenButton', 60000)
				.click('@OpenButton')
				.api.pause(20000);
		},
		DoneButton:function(client) {
			return this
				.waitForElementVisible('@DoneButton', 60000)
				.click('@DoneButton')
				.api.pause(20000);
		},
		checkboxpage:function(client) {
			return this
				.waitForElementVisible('@checkboxpage', 60000)
				.click('@checkboxpage')
				.waitForElementVisible('.betty-ActionBar',10000);
		},
		pageEdit:function(client) {
			return this
				.waitForElementVisible('@pageEdit', 60000)
				.click('@pageEdit');
		}
	}]
};

