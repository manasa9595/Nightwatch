var values = require('../../_data/author_data.js'),
 //values calling from author_data.js
   property = values.data,
   brandUrl =property['$brandUrl'],
   deleteClass = property['$deleteclass'];


module.exports = {
   url : brandUrl,
	elements: {
		newPage : {
			selector:'button.x-btn-text.cq-siteadmin-create-page-icon'
		},
		pageTitle : {
			selector : 'input[name="title"]'
		},
		pageName :{
			selector : 'input[name="label"]'
		},
		tempName :{
			selector : '.template-item'
		},
		redPageName :{
			selector : '.cq-siteadmin-grid .x-panel-body .x-grid3-col.x-grid3-td-name'
		},
		parsysSelector:{
			selector : 'iframe#cq-cf-frame'
		}
	},

	commands:[{
		NewPage:function() {
			return this
				.waitForElementVisible('@newPage', 60000)	
				.api.pause(5000)
				.click('button.x-btn-text.cq-siteadmin-create-page-icon')
				.pause(9000);
			},
		PageTitle:function(client, pageTitle) {
			// var ptitle = data.$standTemp
			return this
				.waitForElementVisible('@pageTitle', 60000)			
				.setValue('@pageTitle', pageTitle )
				.api.pause(5000);	
		},	
		PageName:function(client, pageName) {
			return this
				.waitForElementVisible('@pageName', 20000)			
				.setValue('@pageName', pageName);	
		},
		deletePage:function(client,existingPages,pageTitle){
		return client
		    .pause(9000)
			.elements('css selector',existingPages,function(result){
				result.value.forEach(function(element) {
			        client.elementIdText(element.ELEMENT, function(res){
			        	var getval=res.value;
			                console.log(getval);
				        	if(getval==pageTitle){
				        		console.log("...."+getval+"...."+pageTitle);
			        			client.elementIdClick(element.ELEMENT)
								.pause(9000)
								//.keys(client.Keys.SHIFT)
								.moveTo('.cq-siteadmin-grid .x-grid3-col .x-grid3-col-title')
								.mouseButtonClick('right')
								.pause(5000)
								.click('.x-menu-item.cq-siteadmin-delete')
								.keys(client.Keys.ENTER)
								.pause(10000);
			        		} 
				    });
				});
			});
		},
	   	tempSelection:function(client,TemplateSel,templateName){
		return client
			.elements('css selector',TemplateSel,function(result){
				result.value.forEach(function(element) {
			        client.elementIdText(element.ELEMENT, function(res){
			        	var getval=res.value;
			        	 //values calling from author_data.js
							if(getval==templateName){
			        			client.elementIdClick(element.ELEMENT)
								.pause(4000)
								.click(".x-btn.cq-btn-ok.x-btn-noicon")
								.pause(5000);
			        		} 
				    });
				});
			});
		},

		redPage:function(client,redirectSel,pageName){
			return client
				.elements('css selector',redirectSel,function(result){
					result.value.forEach(function(element) {
				        client.elementIdText(element.ELEMENT, function(res){
				        	/*var arrayName=res.value[1];
				        	 console.log("Total "+"....."+arrayName);*/
				        	var getval=res.value,
				        	 //values calling from author_data.js
				                redirectSel=property['$redirectSel'];
				               // console.log(getval+"....."+pageName);
					        	if(getval==pageName){
					        		console.log("..Inside..."+getval+"....."+pageName);
				        			client.elementIdClick(element.ELEMENT)
					        			  .doubleClick().windowHandles(function(result) {
											var handle = result.value[1];
											client.pause(5000);
											client.switchWindow(handle);
											client.pause(5000);
									});
				        		} 
					    });
					});
				});
		},	
		parsysSelect : function(client){
			return client
			.waitForElementPresent('#cq-cf-frame', 200000)
 			.perform(() => {
                    client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                      client
                        .frame(result.value)
                         client.waitForElementVisible('.cq-wcm-edit', 15000);
                         client.click('.cq-wcm-edit .cq-editrollover-insert-container')
                         .pause(5000)
                         .doubleClick();
                    });
            });
		 },
		
		 dragdropFunc : function(client,shelves_group_under_sidekick){
		 	return client
		 	.waitForElementPresent('div[class*="cq-insertdialog"] .x-panel-body .cq-sidekick-buttons span', 10000)
		 	.pause(9000)
			.elements('css selector','div[class*="cq-insertdialog"] .x-panel-body .cq-sidekick-buttons span',function(result){
				result.value.forEach(function(element) {
			        client.elementIdText(element.ELEMENT, function(res){
			        	var getval=res.value;
			        	console.log(getval+""+""+res.value);
			        	 //values calling from author_data.js			              
				        	if(getval===shelves_group_under_sidekick){
			        			client.elementIdClick(element.ELEMENT)
								.pause(9000)
			        		} 
				    });
				});
			}); 
		 },

		 compSelection : function(client,ComponentSel,getcompShelfName){
		 	return client
			.elements('css selector',ComponentSel,function(result){
				result.value.forEach(function(element) {
			        client.elementIdText(element.ELEMENT, function(res){
			        	var getval=res.value;
			        	 //values calling from author_data.js
			               
				        	if(getval==getcompShelfName){
				        		console.log("getval"+getval+"getcompShelfName"+getcompShelfName);
			        			client.elementIdClick(element.ELEMENT)
								.pause(9000)
								.click(".x-btn.cq-btn-ok.x-btn-noicon")
								.pause(5000);
			        		} 
				    });
				});
			}); 	
		 },
		 compSelectiontemp : function(client,ComponentSel){
		 	var ComponentSel =property['$inPageNavsel'];
		 	return client
		 	.waitForElementPresent(ComponentSel, 10000)
		 	.pause(9000)
		 	.click(ComponentSel)
		 	.pause(9000)
		 	.click(".x-btn.cq-btn-ok.x-btn-noicon");
		 }
	}]
};

