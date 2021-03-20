var titleComp =require('../components/title/title.js'),
    props = require('../components/other_comp/readytoapply_props.js'),
    ctaProps = require('../components/cta/cta.js'),
    globalTitleComp = require('../components/title/globaltitle.js');

module.exports = {
    "Clicked on Rose New customer" : function(client){
        var pageObj = client.page.readytoapply_selectors(),signup = client.page.signup(),
            callback=client.page.common();
        var contentBlcok1Image = pageObj.elements.contentBlock1ImageWrapper.selector;
        var bgRose= pageObj.elements.preApplyColorBlock.selector;
        var size = client.globals.size.widths;
        signup.navigate()
        .signInAsAdmin();
        client.maximizeWindow();        
        client.waitForElementVisible('.toggle-comp .btn',5000);
        client.click('.color-block-1-rose .toggle-comp .btn', function(result) {
            this.assert.cssProperty('#newcustomer-journey .block-1','display','block');
            this.pause(1000);
           });
            for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);
                //color block-1 rose background-color check
                 properties = props.readytoapplyProps.bgColorRose(scr);
                 callback.singleElem(client,bgRose,properties);
                //image properties
                properties = props.readytoapplyProps.contentBlockImageWrapper(scr);
                callback.singleElem(client,contentBlcok1Image,properties);
            }
          
    },
        "CTA Test" : function(client){
        var pageObj = client.page.readytoapply_selectors(),callback=client.page.common();
        //var newCusToggleSel = pageObj.elements.toggleBtnClass.selector;
        var Tog1Class=pageObj.elements.contentBlock1YellowToggleBtn1.selector,ctaProperties;
        //var yellowTog2Cls=pageObj.elements.colBlo2ToggBtn.selector;
        //var btn1Selected=pageObj.elements.ToggBtn1Sel.selector;
        //var btn2Selected=pageObj.elements.ToggBtn2Sel.selector;
        var size = client.globals.size.widths;
        client.maximizeWindow();

        for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
            
              //yellow toggle1 properties 
            ctaProperties = ctaProps.cta.yellowToggle(scr);
            callback.singleElem(client,Tog1Class,ctaProperties);
              //yellow toggle1 after clicking p
          //    ctaProperties = ctaProps.cta.TogSelected(scr);
            //callback.singleElem(client,btn1Selected,ctaProperties);

             //yellow toggle2 properties
            //  ctaProperties = ctaProps.cta.yellowToggle(scr);
        //  callback.singleElem(client,yellowTog2Cls,ctaProperties);
            
            //yellow toggle2 after clicking properties
            //  ctaProperties = ctaProps.cta.TogSelected(scr);
            //callback.singleElem(client,btn2Selected,ctaProperties);


        }
        
    },
    "Clicked on Yellow start Block" : function(client){
        var pageObj = client.page.readytoapply_selectors(),size = client.globals.size.widths,
            bgYellow=   pageObj.elements.contentBlock1YellowWrapper.selector,callback=client.page.common();
        client.waitForElementVisible('#newcustomer-journey .block-1 .color-block-1-yellow .toggleWrapper .toggle-comp.togglebtn1 .btn',1000);
        client.click('#newcustomer-journey .block-1 .color-block-1-yellow .toggleWrapper .toggle-comp.togglebtn1 .btn', function(){
            this.assert.cssProperty('#newcustomer-journey .block-2','display','block');
            this.pause(1000);
            //client.verify.cssProperty('#newcustomer-journey .block-1 .color-block-1-yellow','background-color','rgba(220, 105, 21, 1)');
        });
              //color block-1 yellow background-color check
              for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);
                 properties = props.readytoapplyProps.bgColorYellow(scr);
                 callback.singleElem(client,bgYellow,properties);
                }
        
    },
    "Clicked(Yes) on Yellow End Block" : function(client){
        var size = client.globals.size.widths,
            pageObj = client.page.readytoapply_selectors(),
           bgYellow=    pageObj.elements.colBlock2Bg.selector,callback=client.page.common();
        client.waitForElementVisible('#newcustomer-journey .color-block-2-yellow-end .toggleWrapper .toggle-comp.togglebtn1 .btn',1000);
        client.click('#newcustomer-journey .color-block-2-yellow-end .toggleWrapper .toggle-comp.togglebtn1 .btn', function(){
            this.verify.cssProperty('#newcustomer-journey .block-3','display','block');
            this.pause(1000);
            //client.verify.cssProperty('#newcustomer-journey .color-block-2-yellow-end','background-color','rgba(220, 105, 21, 1)');
        });

        for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);
                //color block2-yellow
                 properties = props.readytoapplyProps.bgColorYellow(scr);
                 callback.singleElem(client,bgYellow,properties);
                }
        
    },
   
   "Preapply Title wrapper test and title(fs and lh)test" : function(client){
        client.maximizeWindow();
        var pageObj = client.page.readytoapply_selectors(),callback=client.page.common(),
             titleWrapperCls = pageObj.elements.preapplyTitleWrapper.selector,
             pretitle = titleWrapperCls+" h1",
             titleWrapperRoseCls = pageObj.elements.colorBoxTitleWrapper.selector,
             colorBoxTextProps = pageObj.elements.colorBoxTitle.selector,
             contTitleWrap = pageObj.elements.contentBlock1TitleWrapper.selector,
             contentBlockTitText = pageObj.elements.contentBlock1Title.selector,
             infoBloTitWrap = pageObj.elements.InfoBlockTitleWrapper.selector, 
             infoBloTitText = pageObj.elements.infoBlockTitText.selector, 
             yellowBlockTit = pageObj.elements.contentBlock1YellowTitleWrapper.selector,
             yellowbloTitText = pageObj.elements.contentBlock1YellowTitle.selector,
             colorBlocTitleWrap = pageObj.elements.colorBlock2TitWrap.selector,
             colorBloTitText = pageObj.elements.colorBlock2TitText.selector, 
             headerBlockTitle = pageObj.elements.headerBlockTit.selector,
             headerBlockWrapCls = pageObj.elements.headerBloWrapper.selector,
             headerBloTitleText =   pageObj.elements.headerBloTitText.selector,
             contBlock2TitleWrap=  pageObj.elements.contentBlock2TitWrap.selector, 
             contBlo2TitText = pageObj.elements.contentBlock2TitText.selector,                    
             size = client.globals.size.widths,titleWrapperProps;

        
        
        for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
            //Main title wrapper
            titleWrapperProps = props.readytoapplyProps.preapplyTitleWrapper(scr);
            callback.singleElem(client,titleWrapperCls,titleWrapperProps);
             //Main title wrapper(fs and lh)
            properties=globalTitleComp.globaltitle.h1props(scr);         
            callback.singleElem(client,pretitle,properties);
             //Color-block1-rose title wrapper 
            titleWrapperRose = props.readytoapplyProps.titlewrapRose(scr);
            callback.singleElem(client,titleWrapperRoseCls,titleWrapperRose);
            //color-block1-rose(fs and lh global)
            properties=globalTitleComp.globaltitle.h3props(scr);         
            callback.singleElem(client,colorBoxTextProps,properties);
              //Color-block1-rose titletext 
            titleRoseText = props.readytoapplyProps.titleTextRose(scr);
            callback.singleElem(client,colorBoxTextProps,titleRoseText);
                //content block title wrapper
            titleProps=titleComp.title.titlewrap3(scr);           
            callback.singleElem(client,contTitleWrap,titleProps);
            //content block1-(fs and lh global)
            properties=globalTitleComp.globaltitle.h3props(scr);         
            callback.singleElem(client,contentBlockTitText,properties);
             //content block1 title text props
            titleProps=titleComp.title.titleText3(scr);           
            callback.singleElem(client,contentBlockTitText,titleProps);
             //info block title wrapper
            titleProps=titleComp.title.titlewrap4(scr);           
            callback.singleElem(client,infoBloTitWrap,titleProps);
            //info block title(fs and lh global)
            properties=globalTitleComp.globaltitle.h3props(scr);         
            callback.singleElem(client,infoBloTitText,properties);
              //info block title text
            titleProps=titleComp.title.titleText3(scr);      
            callback.singleElem(client,infoBloTitText,titleProps);
             //color block-1-yellow title wrapper
            titleProps=titleComp.title.titlewrap5(scr);      
            callback.singleElem(client,yellowBlockTit,titleProps);
            //color block-1-yellow title text(fs and lh global)
            properties=globalTitleComp.globaltitle.h3props(scr);         
            callback.singleElem(client,yellowbloTitText,properties);
            //color block-1 yellow title text
            titleProps=titleComp.title.titleText3(scr);      
            callback.singleElem(client,yellowbloTitText,titleProps);
            //color block-2 yellow title wrapper
            titleProps=titleComp.title.titlewrap5(scr);      
            callback.singleElem(client,colorBlocTitleWrap,titleProps);
            //color block-2-yellow title text(fs and lh global)
            properties=globalTitleComp.globaltitle.h3props(scr);         
            callback.singleElem(client,colorBloTitText,properties);
            //color block-2-yellow title text
            properties=titleComp.title.titleText3(scr);         
            callback.singleElem(client,colorBloTitText,properties);
             //header block title wrapper
            titleProps=titleComp.title.headBlockTitWrap(scr);
            callback.singleElem(client,headerBlockTitle,titleProps);
             //header block title text(fs and lh global)
            properties=globalTitleComp.globaltitle.h3props(scr);//have to be changed for natwest
            callback.singleElem(client,headerBloTitleText,properties);
            //header block title text
            titleProps=titleComp.title.titleText3(scr);
            callback.singleElem(client,headerBloTitleText,titleProps);
            //content block2 title wrapper
            titleProps=titleComp.title.titlewrap3(scr);           
            callback.singleElem(client,contBlock2TitleWrap,titleProps);
            //content block2-(fs and lh global)
            properties=globalTitleComp.globaltitle.h1props(scr);         
            callback.singleElem(client,contBlo2TitText,properties);
             //content block2 title text props
            titleProps=titleComp.title.titleText3(scr);           
            callback.singleElem(client,contBlo2TitText,titleProps);
         }
    },
    "Content Block Image Wrapper Test" : function(client){
        var pageObj = client.page.readytoapply_selectors(),callback=client.page.common(),
            contImgWrap=pageObj.elements.contentBlock1ImageWrapper.selector,
            size = client.globals.size.widths;
        for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
            properties=props.readytoapplyProps.contentBlockImageWrapper(scr);
            callback.singleElem(client,contImgWrap,properties);
            }
    },
    "All Blocks Wrapper Test" : function(client){
        var pageObj = client.page.readytoapply_selectors(),callback=client.page.common();
        var conBlock=pageObj.elements.contentBlock1.selector,listprops,HeadBlockMarginprops;
        var conBlock2=pageObj.elements.contentBlock2.selector,infoBlockWrap;
        var infoBlockWrapCls=pageObj.elements.infoBlockWrapper.selector;
        var headerBlockWrapCls=pageObj.elements.headerBloWrapper.selector;
        var size = client.globals.size.widths,contentBlo2Props;
        for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
                 //content block1 wrapper
                listprops=props.readytoapplyProps.contentBlock1(scr);
                callback.singleElem(client,conBlock,listprops);
                 //header blocker wrapper
                HeadBlockMarginprops = props.readytoapplyProps.headerBlockWrap(scr);
                callback.singleElem(client,headerBlockWrapCls,HeadBlockMarginprops);
                //content-block2-wrapper
                contentBlo2Props=props.readytoapplyProps.contentBlock2(scr);
                callback.singleElem(client,conBlock2,contentBlo2Props);

                //info block wrapper
                infoBlockWrap=props.readytoapplyProps.infoBlockMargin(scr);
                callback.singleElem(client,infoBlockWrapCls,infoBlockWrap);
            }
    },

    "listwrapper and list check": function(client){ //all checked
         var pageObj = client.page.readytoapply_selectors(),callback=client.page.common();
         var listWrap2Class=pageObj.elements.listWrapperClass.selector,listproperties;
         var listMarCls= pageObj.elements.contentBlock1ListMarClas.selector;
         var listWrap1Class=pageObj.elements.contentBlock1ListWrapper.selector,listTextMargin;
         var size = client.globals.size.widths,contentBlo2Props,listText2Margin,listpropsMar;
         for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
               //listwrapper1 margins
                listproperties=props.readytoapplyProps.listWrapper(scr);
                callback.singleElem(client,listWrap1Class,listproperties);

                //list margins
                 listTextMargin=props.readytoapplyProps.listProps(scr);
                callback.singleElem(client,listMarCls,listTextMargin);

                //list wrapper-2 margins
                listpropsMar=props.readytoapplyProps.listWrapper2(scr);
                callback.singleElem(client,listWrap2Class,listpropsMar)

                 //list2 margins
                 listText2Margin=props.readytoapplyProps.listProps(scr);
                 callback.singleElem(client,listMarCls,listText2Margin);
        } 

    },
    
    "check for all the toggle wrappers":function(client){
       var pageObj = client.page.readytoapply_selectors(),callback=client.page.common();
       var toggleWrap1Cls =pageObj.elements.colorBoxToggleWrapper.selector;
       var toggleWrap2Cls=pageObj.elements.contentBlock1YellowToggleWrapper.selector;
       var toggleWrap3Class=pageObj.elements.ToggleWrapper3Cls.selector;
       var size = client.globals.size.widths;
       client.maximizeWindow();
       for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
         //toggle wrap1
        toggleProps1=props.readytoapplyProps.toggleWrap1(scr);
        callback.singleElem(client,toggleWrap1Cls,toggleProps1);
        //toggle wrap2
        toggleProps2=props.readytoapplyProps.toggleWrap2(scr);
        callback.singleElem(client,toggleWrap2Cls,toggleProps2);
        //toggle wrap3
        toggleProps3=props.readytoapplyProps.toggleWrap3(scr);
        callback.singleElem(client,toggleWrap3Class,toggleProps3);
        }
        client.end();
    }
    


}


































/*"Content Block Title Wrapper Test" : function(client){
        var pageObj = client.page.readytoapply_selectors();
        var contTitleWrap=pageObj.elements.contentBlock1TitleWrapper.selector;
        var globaltitlecomponent = pageObj.elements.titleComponent.selector;
        var size = client.globals.size.widths;
        for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);

            titleProps=titleComp.title.titlewrap3(scr);           
            pageObj.singleElem(client,contTitleWrap,titleProps);

            properties=globalTitleComp.globaltitle.h3props(scr);
            console.log(properties);            
            pageObj.singleElem(client,globaltitlecomponent,properties);

            client.assert.cssProperty('h3.title-comp','color','rgba(66, 20, 95, 1)');
            client.assert.cssProperty('.preapply-customer-selection .color-block-1-rose .titleWrapper h3','color','rgba(255, 255, 255, 1)');
        }
    },*/
    // function titleWrapper1(client,pageObj,contentBlcok1Title,size){
//  for(scr in size){
//      client.resizeWindow(size[scr].width, size[scr].height);
//      props = props.readytoapplyProps.contentBlock1TitleWrapper(scr);
//      pageObj.singleElem(client,contentBlcok1Title,props);
//  }
// }
// function rteBlockWrapper1(client,pageObj,contentBlcok1Rte,size){
//  for(scr in size){
//      client.resizeWindow(size[scr].width, size[scr].height);
//      props = props.readytoapplyProps.preapplyTitleWrapper(scr);
//      pageObj.singleElem(client,contentBlcok1Rte,props);
//  }
// }