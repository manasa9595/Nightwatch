var props = require('../components/other_comp/getHelpShelf_props.js');

module.exports={
    '@tags': ['select_account','gethelp'],
    "1.navigate to Page": function(client) {
      var pageObj = client.page.getHelpShelf_selector(),
          signup = client.page.signup(),
          callback = client.page.common(),
          size = client.globals.size.widths;
          signup.navigate();
          //client.url(pageObj.url);
          //.signInAsAdmin();
          client.maximizeWindow();
          client.url(signup.url);         
          client.waitForElementVisible("body",25000);        
    },
    'Testing Shelf Title Faq Search Properties': function(client){
       var pageObj = client.page.getHelpShelf_selector(),
            callback = client.page.common(),
            x,y,
            getHelpShelfPageTool = pageObj.elements.getHelpShelfPageTool.selector,
            size = client.globals.size.widths;

            client.getLocation(getHelpShelfPageTool, function (result) {
			  x = result.value.x;
			  y = result.value.x;
			});
            client.moveToElement(getHelpShelfPageTool, 0, y, function (result) {
			 client.pause(1000)
			});

			var shelfContainer = pageObj.elements.getHelpShelfContainer.selector,
	            properties = props.whyUsShelfProps.containerSearchProps();
	            callback.singleElem(client,shelfContainer,properties);
			if(client.globals.test_settings.isLocal){
           for(scr in size){
             	client.resizeWindow(size[scr].width, size[scr].height);

	            var getHelpShelfTitle = pageObj.elements.getHelpShelfTitle.selector,
	            properties = props.whyUsShelfProps.getHelpTitleProps(scr);
	            callback.singleElem(client,getHelpShelfTitle,properties,scr);

	            var getHelpShelfSearch = pageObj.elements.getHelpShelfSearch.selector,
	            properties2 = props.whyUsShelfProps.getHelpSearchProp(scr);
	            callback.singleElem(client,getHelpShelfSearch,properties2,scr);

	            var getHelpShelfSearchWrap = pageObj.elements.getHelpShelfSearchWrap.selector,
	            properties3 = props.whyUsShelfProps.getHelpSearchWrapProp(scr);
	            callback.singleElem(client,getHelpShelfSearchWrap,properties3,scr);

                var getHelpShelfSearchText = pageObj.elements.getHelpShelfSearchText.selector,
                properties4 = props.whyUsShelfProps.getHelpSearchTextProp(scr);
                callback.singleElem(client,getHelpShelfSearchText,properties4,scr);

                var getHelpShelfSearchIcon = pageObj.elements.getHelpShelfSearchIcon.selector,
                properties5 = props.whyUsShelfProps.getHelpSearchIconProp(scr);
                callback.pseudoSingleElem(client,getHelpShelfSearchIcon,':before',properties5);
	        }
        }
         else {
          if(client.options.desiredCapabilities.isLGDevice){
                var getHelpShelfTitle = pageObj.elements.getHelpShelfTitle.selector,
                properties = props.whyUsShelfProps.getHelpTitleProps('lg');
                callback.singleElem(client,getHelpShelfTitle,properties,'lg');

                var getHelpShelfSearch = pageObj.elements.getHelpShelfSearch.selector,
                properties2 = props.whyUsShelfProps.getHelpSearchProp('lg');
                callback.singleElem(client,getHelpShelfSearch,properties2,'lg');

                var getHelpShelfSearchWrap = pageObj.elements.getHelpShelfSearchWrap.selector,
                properties3 = props.whyUsShelfProps.getHelpSearchWrapProp('lg');
                callback.singleElem(client,getHelpShelfSearchWrap,properties3,'lg');

                var getHelpShelfSearchText = pageObj.elements.getHelpShelfSearchText.selector,
                properties4 = props.whyUsShelfProps.getHelpSearchTextProp('lg');
                callback.singleElem(client,getHelpShelfSearchText,properties4,'lg');

                var getHelpShelfSearchIcon = pageObj.elements.getHelpShelfSearchIcon.selector,
                properties5 = props.whyUsShelfProps.getHelpSearchIconProp('lg');
                callback.pseudoSingleElem(client,getHelpShelfSearchIcon,':before',properties5);
          }
          else if(client.options.desiredCapabilities.isSMDevice){
                var getHelpShelfTitle = pageObj.elements.getHelpShelfTitle.selector,
                properties = props.whyUsShelfProps.getHelpTitleProps('sm');
                callback.singleElem(client,getHelpShelfTitle,properties,'sm');

                var getHelpShelfSearch = pageObj.elements.getHelpShelfSearch.selector,
                properties2 = props.whyUsShelfProps.getHelpSearchProp('sm');
                callback.singleElem(client,getHelpShelfSearch,properties2,'sm');

                var getHelpShelfSearchWrap = pageObj.elements.getHelpShelfSearchWrap.selector,
                properties3 = props.whyUsShelfProps.getHelpSearchWrapProp('sm');
                callback.singleElem(client,getHelpShelfSearchWrap,properties3,'sm');

                var getHelpShelfSearchText = pageObj.elements.getHelpShelfSearchText.selector,
                properties4 = props.whyUsShelfProps.getHelpSearchTextProp('sm');
                callback.singleElem(client,getHelpShelfSearchText,properties4,'sm');

                var getHelpShelfSearchIcon = pageObj.elements.getHelpShelfSearchIcon.selector,
                properties5 = props.whyUsShelfProps.getHelpSearchIconProp('sm');
                callback.pseudoSingleElem(client,getHelpShelfSearchIcon,':before',properties5);
          }
          else if(client.options.desiredCapabilities.isXSDevice){
                var getHelpShelfTitle = pageObj.elements.getHelpShelfTitle.selector,
                properties = props.whyUsShelfProps.getHelpTitleProps('xs');
                callback.singleElem(client,getHelpShelfTitle,properties,'xs');

                var getHelpShelfSearch = pageObj.elements.getHelpShelfSearch.selector,
                properties2 = props.whyUsShelfProps.getHelpSearchProp('xs');
                callback.singleElem(client,getHelpShelfSearch,properties2,'xs');

                var getHelpShelfSearchWrap = pageObj.elements.getHelpShelfSearchWrap.selector,
                properties3 = props.whyUsShelfProps.getHelpSearchWrapProp('xs');
                callback.singleElem(client,getHelpShelfSearchWrap,properties3,'xs');

                var getHelpShelfSearchText = pageObj.elements.getHelpShelfSearchText.selector,
                properties4 = props.whyUsShelfProps.getHelpSearchTextProp('xs');
                callback.singleElem(client,getHelpShelfSearchText,properties4,'xs');

                var getHelpShelfSearchIcon = pageObj.elements.getHelpShelfSearchIcon.selector,
                properties5 = props.whyUsShelfProps.getHelpSearchIconProp('xs');
                callback.pseudoSingleElem(client,getHelpShelfSearchIcon,':before',properties5);
          }

      }
            
    },
   
    'Testing Shelf Properties': function(client){
       var pageObj = client.page.getHelpShelf_selector(),
            callback = client.page.common(),
            getHelpShelf = pageObj.elements.getHelpShelf.selector,
            size = client.globals.size.widths;
             if(client.globals.test_settings.isLocal){
             for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);
                
                properties = props.whyUsShelfProps.getHelpShelfProps(scr);
                callback.singleElem(client,getHelpShelf,properties,scr)
            }
        }
        else {
          if(client.options.desiredCapabilities.isLGDevice){
                properties = props.whyUsShelfProps.getHelpShelfProps('lg');
                callback.singleElem(client,getHelpShelf,properties,'lg')
          }
          else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.whyUsShelfProps.getHelpShelfProps('sm');
                callback.singleElem(client,getHelpShelf,properties,'sm')
          }
          else if(client.options.desiredCapabilities.isXSDevice){
                properties = props.whyUsShelfProps.getHelpShelfProps('xs');
                callback.singleElem(client,getHelpShelf,properties,'xs')
          }
      }
            
    },
    'Testing Tool Wrapper': function(client){
        var pageObj = client.page.getHelpShelf_selector(),
            callback = client.page.common(),
            size = client.globals.size.widths;            
            if(client.globals.test_settings.isLocal){
            for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);

                var ToolWrapper = pageObj.elements.ToolWrapper.selector,
                properties1 = props.whyUsShelfProps.tolWrapperProp(scr);
                callback.singleElem(client,ToolWrapper,properties1,scr);

                var ToolWrapperTitle = pageObj.elements.ToolWrapperTitle.selector,
                properties3 = props.whyUsShelfProps.tolWrapperTitleProp(scr);
                callback.singleElem(client,ToolWrapperTitle,properties3,scr);
            }
        }
        else {
          if(client.options.desiredCapabilities.isLGDevice){
                var ToolWrapper = pageObj.elements.ToolWrapper.selector,
                properties1 = props.whyUsShelfProps.tolWrapperProp('lg');
                callback.singleElem(client,ToolWrapper,properties1,'lg');

                var ToolWrapperTitle = pageObj.elements.ToolWrapperTitle.selector,
                properties3 = props.whyUsShelfProps.tolWrapperTitleProp('lg');
                callback.singleElem(client,ToolWrapperTitle,properties3,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
                var ToolWrapper = pageObj.elements.ToolWrapper.selector,
                properties1 = props.whyUsShelfProps.tolWrapperProp('sm');
                callback.singleElem(client,ToolWrapper,properties1,'sm');

                var ToolWrapperTitle = pageObj.elements.ToolWrapperTitle.selector,
                properties3 = props.whyUsShelfProps.tolWrapperTitleProp('sm');
                callback.singleElem(client,ToolWrapperTitle,properties3,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
                var ToolWrapper = pageObj.elements.ToolWrapper.selector,
                properties1 = props.whyUsShelfProps.tolWrapperProp('xs');
                callback.singleElem(client,ToolWrapper,properties1,'xs');

                var ToolWrapperTitle = pageObj.elements.ToolWrapperTitle.selector,
                properties3 = props.whyUsShelfProps.tolWrapperTitleProp('xs');
                callback.singleElem(client,ToolWrapperTitle,properties3,'xs');
          }
      }
    },
    'Testing Title and Hover effect' : function(client){
       var pageObj = client.page.getHelpShelf_selector(),
            callback = client.page.common(),
            size = client.globals.size.widths,
            ToolWrapperTitleAnchor = pageObj.elements.ToolWrapperTitleAnchor.selector;

             for(scr in size){
                var properties1 = props.whyUsShelfProps.tolWrapperTitleAcrProp(scr);
                callback.singleElem(client,ToolWrapperTitleAnchor,properties1,scr);
             }

           client.maximizeWindow();
            var properties2 = props.whyUsShelfProps.tolWrapperTitleAcrStyleProp();
            callback.pseudoSingleElem(client,ToolWrapperTitleAnchor,':after',properties2);
            
            client.moveToElement(ToolWrapperTitleAnchor, 0, 0, function (result) {
                client.pause(500)
            });

            var properties3 = props.whyUsShelfProps.tolWrapperTitleAcrHoverProp();
            callback.pseudoSingleElem(client,ToolWrapperTitleAnchor,':after',properties3);
    },
    /*'Check Hover' : function(client){
        var pageObj = client.page.getHelpShelf_selector(),
            callback = client.page.common(),
            selector = pageObj.elements.ToolWrapperTitleAnchor.selector,
            properties3 = props.whyUsShelfProps.tolWrapperTitleAcrHoverProp();
        client.elements('css selector',selector,function(result){             
             for (var x = 0; x < result.value.length; x++){
                client.moveToElement(result.value[x].ELEMENT, 1, 1);
                client.elementIdAttribute(result.value[x].ELEMENT, "width", function(links) {
                    console.log(links.value);
                });
            }
        })
    },*/


    'Closing Browser': function(client){
      client.pause(1000);
      client.end();
    }
};

/*var checkHover = function(res,client,sel,props){
     res.value.forEach(function(client,element,index){
        Actions actions = new Actions(driver);
        client.moveToElement(element.ELEMENT, 1, 1, function (result) {
                client.pause(500)
        });
     })
}*/