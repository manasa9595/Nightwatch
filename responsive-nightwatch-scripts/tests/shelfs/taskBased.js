var props = require('../components/other_comp/taskBased_props.js')/*,
    globalTitleComp = require('../components/title/globaltitle.js')*/;
module.exports = {
  '@tags': ['taskpanel_publish'],
  "taskpanel-shelf properties for taskpanel": function(client) {
        
        var pageObj = client.page.taskBased_selectors(),
        signup = client.page.signup(),
            callback = client.page.common();
            taskpanelTasks = pageObj.elements.taskpanelTasks.selector;
            size = client.globals.size.widths;      
        //pageObj.navigate();
       //signInAsAdmin();
        client.maximizeWindow();
        client.url(signup.url); 
        if(client.globals.test_settings.isLocal){      
        for (scr in size) {
              client.resizeWindow(size[scr].width, size[scr].height);
            properties1 = props.taskBasedProps.taskpanelTaskProps(scr);
            callback.singleElem(client, taskpanelTasks, properties1, scr);
        }
      }
         else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties1 = props.taskBasedProps.taskpanelTaskProps('lg');
            callback.singleElem(client, taskpanelTasks, properties1, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
             properties1 = props.taskBasedProps.taskpanelTaskProps('sm');
            callback.singleElem(client, taskpanelTasks, properties1, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties1 = props.taskBasedProps.taskpanelTaskProps('xs');
            callback.singleElem(client, taskpanelTasks, properties1, 'xs');
          }

         }

    }, 
    

  'Testing task imgWrap': function(client){
      var pageObj = client.page.taskBased_selectors(),
          callback = client.page.common();
      var taskimgWrap=pageObj.elements.taskimgWrap.selector;
        size = client.globals.size.widths;
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
          for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);           
              properties = props.taskBasedProps.taskBasedimgWrap(scr);
              callback.multiloop(client,taskimgWrap,properties,scr);
          }
        } 
         else {
          if(client.options.desiredCapabilities.isLGDevice){
              properties = props.taskBasedProps.taskBasedimgWrap('lg');
              callback.multiloop(client,taskimgWrap,properties,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){ 
             properties = props.taskBasedProps.taskBasedimgWrap('sm');
              callback.multiloop(client,taskimgWrap,properties,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.taskBasedProps.taskBasedimgWrap('xs');
              callback.multiloop(client,taskimgWrap,properties,'xs');
          }

          }              
    },
    'Testing task imgSize': function(client){
      var pageObj = client.page.taskBased_selectors(),
          callback = client.page.common(),         
          size = client.globals.size.widths;
          client.maximizeWindow();
          for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
              var taskimgSize=pageObj.elements.taskimgSize.selector,
                  properties = props.taskBasedProps.taskBasedImgSizeProps(scr);
              callback.multiloop(client,taskimgSize,properties,scr);
          }                 
    }, 

    'Testing task ctaWrap': function(client){
      var pageObj = client.page.taskBased_selectors(),
          callback = client.page.common();
          var taskctaWrap=pageObj.elements.taskctaWrap.selector;         
          size = client.globals.size.widths;
          client.maximizeWindow();
           if(client.globals.test_settings.isLocal){
          for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
                  properties = props.taskBasedProps.taskBasedctaWrap(scr);
              callback.multiloop(client,taskctaWrap,properties,scr);
          }
          }
           else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.taskBasedProps.taskBasedctaWrap('lg');
            callback.multiloop(client,taskctaWrap,properties,'lg');
          }
           else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.taskBasedProps.taskBasedctaWrap('sm');
            callback.multiloop(client,taskctaWrap,properties,'sm');
           }
           else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.taskBasedProps.taskBasedctaWrap('xs');
            callback.multiloop(client,taskctaWrap,properties,'xs');
           }
        }

    },

    'Testing task panel for RBS and NW Medium device': function(client){
      var pageObj = client.page.taskBased_selectors(),
          callback = client.page.common(),         
          size = client.globals.size.widths;
          client.maximizeWindow();
          if(client.globals.test_settings.isLocal){
          for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
                  var tasksMediumDevicerow=pageObj.elements.tasksMediumDevicerow.selector,
                  properties = props.taskBasedProps.tasksMediumDevicerowProps(scr);
                  callback.singleElem(client,tasksMediumDevicerow,properties,scr);

                  var tasksMediumDeviceTabview=pageObj.elements.tasksMediumDeviceTabview.selector,
                  properties = props.taskBasedProps.tasksMediumDeviceTabviewProps(scr);
                  callback.singleElem(client,tasksMediumDeviceTabview,properties,scr);

                  var tasksMediumDeviceList=pageObj.elements.tasksMediumDeviceList.selector,
                  properties = props.taskBasedProps.tasksMediumDeviceListProps(scr);
                  callback.singleElem(client,tasksMediumDeviceList,properties,scr);
          }
          }
           else {
          if(client.options.desiredCapabilities.isLGDevice){
            var tasksMediumDevicerow=pageObj.elements.tasksMediumDevicerow.selector,
                  properties = props.taskBasedProps.tasksMediumDevicerowProps('lg');
                  callback.singleElem(client,tasksMediumDevicerow,properties,'lg');

                  var tasksMediumDeviceTabview=pageObj.elements.tasksMediumDeviceTabview.selector,
                  properties = props.taskBasedProps.tasksMediumDeviceTabviewProps('lg');
                  callback.singleElem(client,tasksMediumDeviceTabview,properties,'lg');

                  var tasksMediumDeviceList=pageObj.elements.tasksMediumDeviceList.selector,
                  properties = props.taskBasedProps.tasksMediumDeviceListProps('lg');
                  callback.singleElem(client,tasksMediumDeviceList,properties,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            var tasksMediumDevicerow=pageObj.elements.tasksMediumDevicerow.selector,
                  properties = props.taskBasedProps.tasksMediumDevicerowProps('sm');
                  callback.singleElem(client,tasksMediumDevicerow,properties,'sm');

                  var tasksMediumDeviceTabview=pageObj.elements.tasksMediumDeviceTabview.selector,
                  properties = props.taskBasedProps.tasksMediumDeviceTabviewProps('sm');
                  callback.singleElem(client,tasksMediumDeviceTabview,properties,'sm');

                  var tasksMediumDeviceList=pageObj.elements.tasksMediumDeviceList.selector,
                  properties = props.taskBasedProps.tasksMediumDeviceListProps('sm');
                  callback.singleElem(client,tasksMediumDeviceList,properties,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            var tasksMediumDevicerow=pageObj.elements.tasksMediumDevicerow.selector,
                  properties = props.taskBasedProps.tasksMediumDevicerowProps('xs');
                  callback.singleElem(client,tasksMediumDevicerow,properties,'xs');

                  var tasksMediumDeviceTabview=pageObj.elements.tasksMediumDeviceTabview.selector,
                  properties = props.taskBasedProps.tasksMediumDeviceTabviewProps('xs');
                  callback.singleElem(client,tasksMediumDeviceTabview,properties,'xs');

                  var tasksMediumDeviceList=pageObj.elements.tasksMediumDeviceList.selector,
                  properties = props.taskBasedProps.tasksMediumDeviceListProps('xs');
                  callback.singleElem(client,tasksMediumDeviceList,properties,'xs');
          }

        }

    },

    'Testing task SearchWrap': function(client){
      var pageObj = client.page.taskBased_selectors(),
          callback = client.page.common();
          var taskpanelSearchwrap=pageObj.elements.taskpanelSearchwrap.selector;         
          size = client.globals.size.widths;
          client.maximizeWindow();
          if(client.globals.test_settings.isLocal){
          for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
                  properties = props.taskBasedProps.taskBasedSearchWrap(scr);
              callback.multiloop(client,taskpanelSearchwrap,properties,scr);
          } 
        }
       else {
          if(client.options.desiredCapabilities.isLGDevice){
          properties = props.taskBasedProps.taskBasedSearchWrap('lg');
              callback.multiloop(client,taskpanelSearchwrap,properties,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.taskBasedProps.taskBasedSearchWrap('sm');
              callback.multiloop(client,taskpanelSearchwrap,properties,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
             properties = props.taskBasedProps.taskBasedSearchWrap('xs');
              callback.multiloop(client,taskpanelSearchwrap,properties,'xs');
          }

          }                 
    },

   'Testing task Search Label': function(client){
      var pageObj = client.page.taskBased_selectors(),
          callback = client.page.common();  
          var taskpanelSearchLabel=pageObj.elements.taskpanelSearchLabel.selector;       
          size = client.globals.size.widths;
          client.maximizeWindow();
           if(client.globals.test_settings.isLocal){
          for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
                  properties = props.taskBasedProps.taskpanelSearchLabelProps(scr);
              callback.multiloop(client,taskpanelSearchLabel,properties,scr);
          } 
        }
        else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.taskBasedProps.taskpanelSearchLabelProps('lg');
              callback.multiloop(client,taskpanelSearchLabel,properties,'lg');
          }
           else if(client.options.desiredCapabilities.isSMDevice){
             properties = props.taskBasedProps.taskpanelSearchLabelProps('sm');
              callback.multiloop(client,taskpanelSearchLabel,properties,'sm');
           }
           else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.taskBasedProps.taskpanelSearchLabelProps('xs');
              callback.multiloop(client,taskpanelSearchLabel,properties,'xs');
           }
        }                
    },

    'Testing task Search inpWrap': function(client){
      var pageObj = client.page.taskBased_selectors(),
          callback = client.page.common(); 
          var taskpanelSearchwrapinp=pageObj.elements.taskpanelSearchwrapinp.selector;        
          size = client.globals.size.widths;
          client.maximizeWindow();
          if(client.globals.test_settings.isLocal){
          for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
              properties = props.taskBasedProps.taskpanelSearchwrapinpProps(scr);
              callback.multiloop(client,taskpanelSearchwrapinp,properties,scr);
          } 
          }
          else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.taskBasedProps.taskpanelSearchwrapinpProps('lg');
            callback.multiloop(client,taskpanelSearchwrapinp,properties,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.taskBasedProps.taskpanelSearchwrapinpProps('sm');
            callback.multiloop(client,taskpanelSearchwrapinp,properties,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.taskBasedProps.taskpanelSearchwrapinpProps('xs');
            callback.multiloop(client,taskpanelSearchwrapinp,properties,'xs');
          }

        }

    },

//NW props -- Default Mode
  "taskBased-shelf Bg properties": function(client) {
        var pageObj = client.page.taskBased_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var taskBasedBgClr = pageObj.elements.taskBasedBgClr.selector;
        var size = client.globals.size.widths;
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //taskBased-title text properties
            properties = props.taskBasedProps.taskBasedBgProps(scr);
            callback.singleElem(client, taskBasedBgClr, properties, scr);
        }

      }
      else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties = props.taskBasedProps.taskBasedBgProps('lg');
            callback.singleElem(client, taskBasedBgClr, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.taskBasedProps.taskBasedBgProps('sm');
            callback.singleElem(client, taskBasedBgClr, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.taskBasedProps.taskBasedBgProps('xs');
            callback.singleElem(client, taskBasedBgClr, properties, 'xs');
          }

        }


    },

  "taskBased-shelf title properties": function(client) {
        var pageObj = client.page.taskBased_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var taskBasedTitCls = pageObj.elements.taskBasedTitCls.selector;
        var size = client.globals.size.widths;
        //signup.navigate()
        //.signInAsAdmin();
        client.maximizeWindow();
        client.url(signup.url);
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //taskBased-title text properties
            properties = props.taskBasedProps.taskBasedFontProps(scr);
            callback.singleElem(client, taskBasedTitCls, properties, scr);
            //check for taskBased title text properties
            properties = props.taskBasedProps.taskBasedTitTextProps(scr);
            callback.singleElem(client, taskBasedTitCls, properties, scr);
        }
      }
      else {
          if(client.options.desiredCapabilities.isLGDevice){
             properties = props.taskBasedProps.taskBasedFontProps('lg');
            callback.singleElem(client, taskBasedTitCls, properties, 'lg');
            //check for taskBased title text properties
            properties = props.taskBasedProps.taskBasedTitTextProps('lg');
            callback.singleElem(client, taskBasedTitCls, properties, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
             properties = props.taskBasedProps.taskBasedFontProps('sm');
            callback.singleElem(client, taskBasedTitCls, properties, 'sm');
            //check for taskBased title text properties
            properties = props.taskBasedProps.taskBasedTitTextProps('sm');
            callback.singleElem(client, taskBasedTitCls, properties, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.taskBasedProps.taskBasedFontProps('xs');
            callback.singleElem(client, taskBasedTitCls, properties, 'xs');
            //check for taskBased title text properties
            properties = props.taskBasedProps.taskBasedTitTextProps('xs');
            callback.singleElem(client, taskBasedTitCls, properties, 'xs');
          }

        }

    },
     
  /*  //RBS --Photographic mode

   "taskpanel-shelf properties for image-wrap RBS (photography mode)": function(client) {
        
        var pageObj = client.page.taskBased_selectors(),
            callback = client.page.common();
            imgWrapRbs = pageObj.elements.imgWrapRbs.selector;
            imgPadRbs = pageObj.elements.imgPadRbs.selector;
            size = client.globals.size.widths;
        client.maximizeWindow();
         if(client.globals.test_settings.isLocal){
        for (scr in size) {
            properties1 = props.taskBasedProps.taskBasedBgimgWrap(scr);
            callback.singleElem(client, imgWrapRbs, properties1, scr);

            properties2 = props.taskBasedProps.taskBasedBgimgPad(scr);
            callback.singleElem(client, imgPadRbs, properties2, scr);
        }
      }
      else {
          if(client.options.desiredCapabilities.isLGDevice){
             properties1 = props.taskBasedProps.taskBasedBgimgWrap('lg');
            callback.singleElem(client, imgWrapRbs, properties1, 'lg');

            properties2 = props.taskBasedProps.taskBasedBgimgPad('lg');
            callback.singleElem(client, imgPadRbs, properties2, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
             properties1 = props.taskBasedProps.taskBasedBgimgWrap('sm');
            callback.singleElem(client, imgWrapRbs, properties1, 'sm');

            properties2 = props.taskBasedProps.taskBasedBgimgPad('sm');
            callback.singleElem(client, imgPadRbs, properties2, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties1 = props.taskBasedProps.taskBasedBgimgWrap('xs');
            callback.singleElem(client, imgWrapRbs, properties1, 'xs');

            properties2 = props.taskBasedProps.taskBasedBgimgPad('xs');
            callback.singleElem(client, imgPadRbs, properties2, 'xs');
          }

        }


    },
  
   "taskpanel-shelf properties for taskpanel-title-block RBS (photography mode)": function(client) {
        var pageObj = client.page.taskBased_selectors(),
            callback = client.page.common();
            size = client.globals.size.widths;
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Check for Margin properties of taskpanel title block
            var taskpanelTitCls = pageObj.elements.taskpanelTitCls.selector,
            properties1 = props.taskBasedProps.taskpanelTitProps(scr);
            callback.singleElem(client, taskpanelTitCls, properties1, scr);

            //check for taskpanel title text properties
            var taskpanelTitTextCls = pageObj.elements.taskpanelTitTextCls.selector,
            properties2 = props.taskBasedProps.taskpanelTitTextProps(scr);
            callback.singleElem(client, taskpanelTitTextCls, properties2, scr);

            //check for taskpanel title1 text properties
            var taskpanelTit1TextCls = pageObj.elements.taskpanelTit1TextCls.selector,
            properties3 = props.taskBasedProps.taskpanelTit1TextProps(scr);
            callback.singleElem(client, taskpanelTit1TextCls, properties3, scr);

            //check for taskpanel title2 text properties
            var taskpanelTit2TextCls = pageObj.elements.taskpanelTit2TextCls.selector,
            properties4 = props.taskBasedProps.taskpanelTit2TextProps(scr);
            callback.singleElem(client, taskpanelTit2TextCls, properties4, scr);

            //check for taskpanel title3 text properties
            //var taskpanelTit3TextCls = pageObj.elements.taskpanelTit3TextCls.selector,
            //properties5 = props.taskBasedProps.taskpanelTit3TextProps(scr);
            //callback.singleElem(client, taskpanelTit3TextCls, properties5, scr);

            //check for taskpanel-title span padding props
            var taskpanelSpanTitTextCls = pageObj.elements.taskpanelSpanTitTextCls.selector,
            properties6 = props.taskBasedProps.taskpanelSpanTitProps(scr);
            callback.singleElem(client, taskpanelSpanTitTextCls, properties6, scr);

            //check for taskpanel-title1 padding props
            var taskpanelSpanTit1TextCls = pageObj.elements.taskpanelSpanTit1TextCls.selector,
            properties7 = props.taskBasedProps.taskpanelSpanTit1Props(scr);
            callback.singleElem(client, taskpanelSpanTit1TextCls, properties7, scr);

           //check for taskpanel-title2 padding props
            var taskpanelSpanTit2TextCls = pageObj.elements.taskpanelSpanTit2TextCls.selector,
            properties8 = props.taskBasedProps.taskpanelSpanTit2Props(scr);
            callback.singleElem(client, taskpanelSpanTit2TextCls, properties8, scr);

        }
      }
      else {
          if(client.options.desiredCapabilities.isLGDevice){
            //Check for Margin properties of taskpanel title block
            var taskpanelTitCls = pageObj.elements.taskpanelTitCls.selector,
            properties1 = props.taskBasedProps.taskpanelTitProps('lg');
            callback.singleElem(client, taskpanelTitCls, properties1, 'lg');

            //check for taskpanel title text properties
            var taskpanelTitTextCls = pageObj.elements.taskpanelTitTextCls.selector,
            properties2 = props.taskBasedProps.taskpanelTitTextProps('lg');
            callback.singleElem(client, taskpanelTitTextCls, properties2, 'lg');

            //check for taskpanel title1 text properties
            var taskpanelTit1TextCls = pageObj.elements.taskpanelTit1TextCls.selector,
            properties3 = props.taskBasedProps.taskpanelTit1TextProps('lg');
            callback.singleElem(client, taskpanelTit1TextCls, properties3, 'lg');

            //check for taskpanel title2 text properties
            var taskpanelTit2TextCls = pageObj.elements.taskpanelTit2TextCls.selector,
            properties4 = props.taskBasedProps.taskpanelTit2TextProps('lg');
            callback.singleElem(client, taskpanelTit2TextCls, properties4, 'lg');


            //check for taskpanel-title span padding props
            var taskpanelSpanTitTextCls = pageObj.elements.taskpanelSpanTitTextCls.selector,
            properties6 = props.taskBasedProps.taskpanelSpanTitProps('lg');
            callback.singleElem(client, taskpanelSpanTitTextCls, properties6, 'lg');

            //check for taskpanel-title1 padding props
            var taskpanelSpanTit1TextCls = pageObj.elements.taskpanelSpanTit1TextCls.selector,
            properties7 = props.taskBasedProps.taskpanelSpanTit1Props('lg');
            callback.singleElem(client, taskpanelSpanTit1TextCls, properties7, 'lg');

            //check for taskpanel-title2 padding props
            var taskpanelSpanTit2TextCls = pageObj.elements.taskpanelSpanTit2TextCls.selector,
            properties8 = props.taskBasedProps.taskpanelSpanTit2Props('lg');
            callback.singleElem(client, taskpanelSpanTit2TextCls, properties8, 'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
             //Check for Margin properties of taskpanel title block
            var taskpanelTitCls = pageObj.elements.taskpanelTitCls.selector,
            properties1 = props.taskBasedProps.taskpanelTitProps('sm');
            callback.singleElem(client, taskpanelTitCls, properties1, 'sm');

            //check for taskpanel title text properties
            var taskpanelTitTextCls = pageObj.elements.taskpanelTitTextCls.selector,
            properties2 = props.taskBasedProps.taskpanelTitTextProps('sm');
            callback.singleElem(client, taskpanelTitTextCls, properties2, 'sm');

            //check for taskpanel title1 text properties
            var taskpanelTit1TextCls = pageObj.elements.taskpanelTit1TextCls.selector,
            properties3 = props.taskBasedProps.taskpanelTit1TextProps('sm');
            callback.singleElem(client, taskpanelTit1TextCls, properties3, 'sm');

            //check for taskpanel title2 text properties
            var taskpanelTit2TextCls = pageObj.elements.taskpanelTit2TextCls.selector,
            properties4 = props.taskBasedProps.taskpanelTit2TextProps('sm');
            callback.singleElem(client, taskpanelTit2TextCls, properties4, 'sm');


            //check for taskpanel-title span padding props
            var taskpanelSpanTitTextCls = pageObj.elements.taskpanelSpanTitTextCls.selector,
            properties6 = props.taskBasedProps.taskpanelSpanTitProps('sm');
            callback.singleElem(client, taskpanelSpanTitTextCls, properties6, 'sm');

            //check for taskpanel-title1 padding props
            var taskpanelSpanTit1TextCls = pageObj.elements.taskpanelSpanTit1TextCls.selector,
            properties7 = props.taskBasedProps.taskpanelSpanTit1Props('sm');
            callback.singleElem(client, taskpanelSpanTit1TextCls, properties7, 'sm');

            //check for taskpanel-title2 padding props
            var taskpanelSpanTit2TextCls = pageObj.elements.taskpanelSpanTit2TextCls.selector,
            properties8 = props.taskBasedProps.taskpanelSpanTit2Props('sm');
            callback.singleElem(client, taskpanelSpanTit2TextCls, properties8, 'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            //Check for Margin properties of taskpanel title block
            var taskpanelTitCls = pageObj.elements.taskpanelTitCls.selector,
            properties1 = props.taskBasedProps.taskpanelTitProps('xs');
            callback.singleElem(client, taskpanelTitCls, properties1, 'xs');

            //check for taskpanel title text properties
            var taskpanelTitTextCls = pageObj.elements.taskpanelTitTextCls.selector,
            properties2 = props.taskBasedProps.taskpanelTitTextProps('xs');
            callback.singleElem(client, taskpanelTitTextCls, properties2, 'xs');

            //check for taskpanel title1 text properties
            var taskpanelTit1TextCls = pageObj.elements.taskpanelTit1TextCls.selector,
            properties3 = props.taskBasedProps.taskpanelTit1TextProps('xs');
            callback.singleElem(client, taskpanelTit1TextCls, properties3, 'xs');

            //check for taskpanel title2 text properties
            var taskpanelTit2TextCls = pageObj.elements.taskpanelTit2TextCls.selector,
            properties4 = props.taskBasedProps.taskpanelTit2TextProps('xs');
            callback.singleElem(client, taskpanelTit2TextCls, properties4, 'xs');


            //check for taskpanel-title span padding props
            var taskpanelSpanTitTextCls = pageObj.elements.taskpanelSpanTitTextCls.selector,
            properties6 = props.taskBasedProps.taskpanelSpanTitProps('xs');
            callback.singleElem(client, taskpanelSpanTitTextCls, properties6, 'xs');

            //check for taskpanel-title1 padding props
            var taskpanelSpanTit1TextCls = pageObj.elements.taskpanelSpanTit1TextCls.selector,
            properties7 = props.taskBasedProps.taskpanelSpanTit1Props('xs');
            callback.singleElem(client, taskpanelSpanTit1TextCls, properties7, 'xs');

            //check for taskpanel-title2 padding props
            var taskpanelSpanTit2TextCls = pageObj.elements.taskpanelSpanTit2TextCls.selector,
            properties8 = props.taskBasedProps.taskpanelSpanTit2Props('xs');
            callback.singleElem(client, taskpanelSpanTit2TextCls, properties8, 'xs');
          }
        } 

        
    },*/
    "Ending the session":function(client){
        client.end();
    }

}