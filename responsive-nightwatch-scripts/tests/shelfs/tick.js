var tickComponent = require('../components/other_comp/tick_props.js');
module.exports = {
	"Tick wrapper test" : function(client){
		client.maximizeWindow();
		client.url(client.globals.urls.url);
		client.url();
		var tickpageObj = client.page.tick_page_selectors(),callback=client.page.common(),
			tickWrapperCls = tickpageObj.elements.tickWrapper.selector,
			size = client.globals.size.widths,tickWrapperProps;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
			tickWrapperProps = tickComponent.tickComp.tickWrapper(scr);
			callback.singleElem(client,tickWrapperCls,tickWrapperProps);
		}
	},
	"Tick Block test" : function(client){
		var tickpageObj = client.page.tick_page_obj(),callback=client.page.common(),
			tickBlockCls = tickpageObj.elements.tickCompBlock.selector,
			size = client.globals.size.widths,tickBlockProps;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
			tickBlockProps = tickComponent.tickComp.tickCompBlock(scr);
			callback.singleElem(client,tickBlockCls,tickBlockProps);
		}
	},
	"Tick icon test" : function(client){
		var tickpageObj = client.page.tick_page_obj(),callback=client.page.common(),
			titlIconCls = tickpageObj.elements.tickIcon.selector,
			size = client.globals.size.widths,titlIconProps;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
			titlIconProps = tickComponent.tickComp.tickComp(scr);
			callback.singleElem(client,titlIconCls,titlIconProps);
		}
	},
	"Title Wrapper test" : function(client){
		var tickpageObj = client.page.tick_page_obj(),callback=client.page.common(),
			titleWrapperCls = tickpageObj.elements.titleWrapper.selector,
			size = client.globals.size.widths,titleWrapperProps;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
			titleWrapperProps = tickComponent.tickComp.titleWrapper(scr);
			callback.singleElem(client,titleWrapperCls,titleWrapperProps);
		}
	},
	"Title component test" : function(client){
		var tickpageObj = client.page.tick_page_obj(),callback=client.page.common(),
			titleCompCls = tickpageObj.elements.titleComp.selector,
			size = client.globals.size.widths,titleProps;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
			titleProps = tickComponent.tickComp.titleComp(scr);
			callback.singleElem(client,titleCompCls,titleProps);
		}
	},
	"Text Wrapper test" : function(client){
		var tickpageObj = client.page.tick_page_obj(),callback=client.page.common(),
			textWrapperCls = tickpageObj.elements.textWrapper.selector,
			size = client.globals.size.widths,textWrapperProps;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
			textWrapperProps = tickComponent.tickComp.textWrapper(scr);
			callback.singleElem(client,textWrapperCls,textWrapperProps);
		}
	},
	"Text component test" : function(client){
		var tickpageObj = client.page.tick_page_obj(),callback=client.page.common(),
			textCompCls = tickpageObj.elements.textComp.selector,
			size = client.globals.size.widths,textProps;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
			textProps = tickComponent.tickComp.textComp(scr);
			callback.singleElem(client,textCompCls,textProps);
		}
		client.end();
	}
}