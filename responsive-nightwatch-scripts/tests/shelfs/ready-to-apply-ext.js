var titleComp =require('../components/title/title.js');
var props = require('../components/other_comp/readytoapply_ext_props.js');
var ctaProps = require('../components/cta/cta.js');
var globalTitleComp = require('../components/title/globaltitle.js');


module.exports = {
	"Navigate and Click On Existing Customer Button" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			signup = client.page.signup(),
			size = client.globals.size.widths;
        signup.navigate()
        .signInAsAdmin();
		client.maximizeWindow();		
		client.waitForElementVisible(extSelector.elements.existingCustomerBtn.selector,5000);
		client.click(extSelector.elements.existingCustomerBtn.selector, function(result) {
		    this.assert.cssProperty(extSelector.elements.existingCustomerBtn.selector,'display','block');
		    this.pause(1000);
		});

	},
	/*"Checking All Button Properties" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),callback = client.page.common(),
			size = client.globals.size.widths,btnselc=extSelector.elements.btnselector.selector;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
		     properties = ctaProps.cta.Btn(scr);
		     callback.multiloop(client,btnselc,properties,scr);
          
		}
		client.end();
	},*/
	"Change Or Open new account section properties" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			callback = client.page.common(),
			themeSelector = extSelector.elements.ChangeOrOpenAcSection.selector,
			size = client.globals.size.widths;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
		    //color block-1 rose background-color check
		     properties = props.readytoapplyProps.ThemeVoilet(scr);
		     callback.singleElem(client,themeSelector,properties,scr);            
		}
	},

	"Click On Change My Account Button" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			changeMyAcSelector = extSelector.elements.changeMyAcSection.selector,
			changeAcSelector = extSelector.elements.changeAcSelector.selector,
			size = client.globals.size.widths;
		client.maximizeWindow();
		client.click(changeMyAcSelector, function(result) {
			client.waitForElementVisible(changeAcSelector,5000);
		    this.assert.cssProperty(changeAcSelector,'display','block');
		    this.pause(1000);
		});

	},
	"Validate Change My AC open section properties" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			callback = client.page.common(),
			changeAcOpenProp = extSelector.elements.changeAcOpenProp.selector,
			size = client.globals.size.widths;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
		    //color block-1 rose background-color check
		     properties = props.readytoapplyProps.CheckNReadOpen(scr);
		     callback.singleElem(client,changeAcOpenProp,properties,scr);            
		}

	},
	"Validate Yellow section properties" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			callback = client.page.common(),
			changeAcOpenProp = extSelector.elements.changeAcOpenProp.selector,
			size = client.globals.size.widths;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
		    //color block-1 rose background-color check
		     properties = props.readytoapplyProps.CheckNReadOpen(scr);
		     callback.singleElem(client,changeAcOpenProp,properties,scr);            
		}

	},
	"Click On Check And Read This Button" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			changeAcCheckRead = extSelector.elements.CheckNReadSelection.selector,
			changeAcCheckReadOpen = extSelector.elements.checkNReadSelectionOpen.selector,
			size = client.globals.size.widths;
		client.maximizeWindow();
		client.click(changeAcCheckRead, function(result) {
			client.waitForElementVisible(changeAcCheckReadOpen,5000);
		    this.assert.cssProperty(changeAcCheckReadOpen,'display','block');
		    this.pause(1000);
		});

	},
	"Change my account check and read this Open section properties" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			callback = client.page.common(),
			changeAcCheckReadOpen = extSelector.elements.checkNReadSelectionOpen.selector,
			size = client.globals.size.widths;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
		    //color block-1 rose background-color check
		     properties = props.readytoapplyProps.CheckNReadOpen(scr);
		     callback.singleElem(client,changeAcCheckReadOpen,properties,scr);            
		}
	},
	"Click On Change AC YES Button" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			changeAcYesBtn = extSelector.elements.changeACYesSelection.selector,
			changeACYesOpen = extSelector.elements.changeACYesOpenSelection.selector,
			size = client.globals.size.widths;
		client.maximizeWindow();
		client.click(changeAcYesBtn, function(result) {
			client.waitForElementVisible(changeACYesOpen,5000);
		    this.assert.cssProperty(changeACYesOpen,'display','block');
		    this.pause(1000);
		});

	},
	"Click Open new AC Button" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			openNewAcSelector = extSelector.elements.openNewAcSection.selector,
			openAcSelector = extSelector.elements.openAcSelector.selector,
			size = client.globals.size.widths;
		client.maximizeWindow();
		client.click(openNewAcSelector, function(result) {
			client.waitForElementVisible(openAcSelector,5000);
		    this.assert.cssProperty(openAcSelector,'display','block');
		    this.pause(1000);
		});

	},
	"Validate Open new accout open section properties" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			callback = client.page.common(),
			OpenAcOpenProp = extSelector.elements.OpenAcOpenProp.selector,
			size = client.globals.size.widths;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
		    //color block-1 rose background-color check
		     properties = props.readytoapplyProps.OpenAcBlock1(scr);
		     callback.singleElem(client,OpenAcOpenProp,properties,scr);            
		}

	},
	"Click On Open new AC Check And Read This Button" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			OpenACCheckNReadSelection = extSelector.elements.OpenACCheckNReadSelection.selector,
			OpenACCheckNReadSelectionOpen = extSelector.elements.OpenACCheckNReadSelectionOpen.selector,
			size = client.globals.size.widths;
		client.maximizeWindow();
		client.click(OpenACCheckNReadSelection, function(result) {
			client.waitForElementVisible(OpenACCheckNReadSelectionOpen,5000);
		    this.assert.cssProperty(OpenACCheckNReadSelectionOpen,'display','block');
		    this.pause(1000);
		});

	},
	"Change Open New AC and read this Open section properties" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			callback = client.page.common(),
			OpenACCheckNReadSelectionOpen = extSelector.elements.OpenACCheckNReadSelectionOpen.selector,
			size = client.globals.size.widths;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
		    //color block-1 rose background-color check
		     properties = props.readytoapplyProps.CheckNReadOpen(scr);
		     callback.singleElem(client,OpenACCheckNReadSelectionOpen,properties,scr);            
		}
	},
	"Click On Open New AC YES Button" : function(client){
		var extSelector = client.page.readytoapply_ext_selector(),
			openACYesSelection = extSelector.elements.openACYesSelection.selector,
			openACYesOpen = extSelector.elements.openACYesOpenSelection.selector,
			size = client.globals.size.widths;
		client.maximizeWindow();
		client.click(openACYesSelection, function(result) {
			client.waitForElementVisible(openACYesOpen,5000);
		    this.assert.cssProperty(openACYesOpen,'display','block');
		    this.pause(1000);
		});

	},
	
	'Closing Browser': function(client){
      client.pause(1000);
      client.end();
    }
}