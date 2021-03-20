var titleComp =require('../components/title/title.js');
var ctaProps = require('../components/cta/cta.js');
var globalTitleComp = require('../components/title/globaltitle.js');
var brand = require('../branding/natwest_personal.js');
var imageComp = require('../components/image/image.js');
var sldrprops = require('../components/slider/ccslider_props.js');

module.exports = {
	"check for title props test":function(client){
     var pageObj = client.page.creditcard_page_obj(),signup = client.page.signup(),
     	   callback=client.page.common(),
         headerblock = pageObj.elements.cctitlewrapper.selector,
         titlewrapper = headerblock+' .titleWrapper',
         h2selector = titlewrapper+' h2',
         size = client.globals.size.widths,properties;
           
           signup.navigate();
          //.signInAsAdmin();
       //titlewrapper
       for(scr in size){ 
       	client.resizeWindow(size[scr].width, size[scr].height);
        //margin tops
        properties=titleComp.text.cctitlecompProps(scr); 
	      callback.singleElem(client,headerblock,properties);
        //color,font families,weight
        properties=titleComp.text.cctitlewrapperProps(scr);
        callback.singleElem(client,titlewrapper,properties);
        // h2 styles
        properties = globalTitleComp.globaltitle.h1props(scr);
        callback.singleElem(client,h2selector,properties);
        }
       
     },
    /* "check for subtitlewrap props test":function(client){
       var pageObj = client.page.creditcard_page_obj(),
           callback=client.page.common(),
           subtitlewrapper = pageObj.elements.ccsubtitlewrapper.selector,
           h3selector = subtitlewrapper+' h3',
           size = client.globals.size.widths,properties;
         
       //subtitlewrapper  
       for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //margins 
        properties=titleComp.text.ccsubtitlecompProps(scr);
        callback.singleElem(client,subtitlewrapper,properties);
        //color,font families,weight 
        properties=titleComp.text.cctitlewrapperProps(scr);
        callback.singleElem(client,subtitlewrapper,properties);
        //h3 styles
        properties = globalTitleComp.globaltitle.h3props(scr);
        callback.singleElem(client,h3selector,properties);
        }
        
     },

     "check for ccimagewrapper props test":function(client){
       var pageObj = client.page.creditcard_page_obj(),
           callback=client.page.common(),
           imagewrapper = pageObj.elements.ccimagewrapper.selector,
           size = client.globals.size.widths,properties;

        //imagewrapper  
       for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //margins for img 
        properties=sldrprops.sldr.ccimagewrapprops(scr);
        callback.singleElem(client,imagewrapper,properties);
        }
       
      },
      "check for tooltip props test":function(client){
       var pageObj = client.page.creditcard_page_obj(),
           callback=client.page.common(),
           tooltip = pageObj.elements.cctooltipimg.selector,
          
           size = client.globals.size.widths,properties;

       //tooltip  
       for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        //margins 
        properties=titleComp.text.cctooltipProps(scr);
        callback.multiloop(client,tooltip,properties);
       
        }
   
     },
     "Clicked on toggle yes & No" : function(client){
    var pageObj = client.page.creditcard_page_obj(),
        callback=client.page.common(),
        
        size = client.globals.size.widths;
        client.maximizeWindow();

    for(scr in size){
    client.resizeWindow(size[scr].width, size[scr].height);
  
       client.click('.toggle-comp.togglebtn2 .btn:first-child', function(result) {
          this.assert.cssProperty('.toggle-comp.toggle-arrow .btn.selected','background-color',brand.props.$primary_1);
          this.pause(1000);
         });
       client.click('.toggle-comp.togglebtn2 .btn:last-child', function(result) {
          this.assert.cssProperty('.toggle-comp.toggle-arrow .btn.selected','background-color',brand.props.$primary_1);
          this.pause(1000);
         });
    }
    
  },
  "check for  NoSecondary toggles test":function(client){
       var pageObj = client.page.creditcard_page_obj(),
           callback=client.page.common(),
           secondarytitle = pageObj.elements.cccardtitle.selector,
           h3selector = secondarytitle+' h3',
           tooltip = pageObj.elements.cctooltipimg.selector,
           size = client.globals.size.widths,properties;

            client.click('.toggle-comp.togglebtn2 .btn:last-child', function(result) {
            this.assert.cssProperty('.cardtypes','display','block');
            this.pause(1000);
          });

             for(scr in size){
             client.resizeWindow(size[scr].width, size[scr].height);
              //margins 
              properties=titleComp.text.cccardtitlecompProps(scr);
              callback.singleElem(client,secondarytitle,properties);
              //color,font families,weight 
              properties = titleComp.text.cctitlewrapperProps(scr);
              callback.singleElem(client,h3selector,properties);
              // global h3 font size and line height
              properties = globalTitleComp.globaltitle.h3props(scr);
              callback.singleElem(client,h3selector,properties);
              // tooltip
               properties=titleComp.text.cctooltipProps(scr);
               callback.multiloop(client,tooltip,properties);
              }
              
            },
    "check for Nocccardtypes props test":function(client){
       var pageObj = client.page.creditcard_page_obj(),
           callback=client.page.common(),
          
           size = client.globals.size.widths,properties;


        for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);
        client.click('.cards-blk .toggle-comp.secondary-toggle.togglebtn4 .btn:nth-of-type(1)', function(result) {
        this.assert.cssProperty('.cards-blk .toggle-comp.secondary-toggle.togglebtn4 .btn.selected','background-color',brand.props.$primary_1);
        this.pause(1000);
       });
         client.click('.cards-blk .toggle-comp.secondary-toggle.togglebtn4 .btn:nth-of-type(2)', function(result) {
        this.assert.cssProperty('.cards-blk .toggle-comp.secondary-toggle.togglebtn4 .btn.selected','background-color',brand.props.$primary_1);
        this.pause(1000);
       });
          client.click('.cards-blk .toggle-comp.secondary-toggle.togglebtn4 .btn:nth-of-type(3)', function(result) {
        this.assert.cssProperty('.cards-blk .toggle-comp.secondary-toggle.togglebtn4 .btn.selected','background-color',brand.props.$primary_1);
        this.pause(1000);
       });
          client.click('.cards-blk .toggle-comp.secondary-toggle.togglebtn4 .btn:nth-of-type(4)', function(result) {
        this.assert.cssProperty('.cards-blk .toggle-comp.secondary-toggle.togglebtn4 .btn.selected','background-color',brand.props.$primary_1);
        this.pause(1000);
       });
      }
    },
    "check for the percDropdown test" : function(client){
      var pageObj = client.page.creditcard_page_obj(),
           callback=client.page.common(),
           percDropdown = pageObj.elements.ccNopercddwn.selector, 
           
           size = client.globals.size.widths,properties;
           //clsArray =[]
         client.resizeWindow(size[scr].width, size[scr].height);
         for(var i=0; i<=2; i++){
         client.click('.cards-blk .toggle-comp.secondary-toggle.togglebtn4 .btn:nth-of-type(1)', function(result) {
        this.pause(1000);
        
       });

       if(size=="lg"|| "md"){
        client.click(percDropdown, function(result) {
        //this.assert.cssProperty('.ui-menu.ui-widget.ui-widget-content','background-color',brand.props.$color_whitesmoke);
        this.click('.ui-selectmenu-open li:nth-child(2)');
        this.pause(1000);
       });

       }
       
       else if(size=="sm"||"xs"){
       
        client.click('.dropdown-select', function(result) {
        this.click('.dropdown-select option:nth-child(2)');
        this.assert.cssProperty('.dropdown-select','color','rgba(66, 20, 95, 1)');
        this.pause(1000);
       });
       }
     }
    },
    "check for the inputno test" : function(client){
               var pageObj = client.page.creditcard_page_obj(),
              callback=client.page.common();
            
            client.click('.text-field-comp input:nth-child(1)', function(result){
              this.setValue('#new_form_no-total-amt', ['1000', client.Keys.ENTER]);
              this.setValue('#new_form_no-month-amt', ['250', client.Keys.ENTER]);
           });
          
    },
    "check for slider props ":function(client){
       var pageObj = client.page.creditcard_page_obj(),
           callback=client.page.common(),
           subTxtSel= pageObj.elements.ccSliderWrap.selector,          
           size = client.globals.size.widths,properties;
       //tooltip  
       for(scr in size){
        client.resizeWindow(size[scr].width, size[scr].height);       
        properties=sldrprops.sldr.ccsliderProps(scr);
        callback.multiloop(client,subTxtSel,properties); 
        }
     },*/
     "check for cardtypetitle props test":function(client){
     var pageObj = client.page.creditcard_page_obj(),
         callback=client.page.common(),
         sfirsttitle1 = pageObj.elements.ccsectog1title.selector,
         sfirsttitle2 = pageObj.elements.ccsectog2title.selector,
         sfirsttitle3 = pageObj.elements.ccsectog3title.selector,
         sfirsttitle4 = pageObj.elements.ccsectog4title.selector,
         
         size = client.globals.size.widths,properties;
         for(scr in size){ 
         for(let i=1;i<=4;i++){
            var testval='.noJourney-container .noStep2Bot1 .s2-titleWrap-'+i+' h3',
             titletest='.noJourney-container .s2-titleWrap-'+i,
            properties=titleComp.text.cccardtitle1compProps(scr),
            properties2=titleComp.text.cccardtitle2compProps(scr),
            properties3=titleComp.text.cccardtitle3compProps(scr);
            console.log(titletest +i);
            if(i==1){
              console.log('hey');
                callback.multiloop(client,titletest,properties);
            }
            else if(i==2){
                callback.multiloop(client,titletest,properties2);
            }
            else if(i==3){
               callback.multiloop(client,titletest,properties3);
            }
            else if(i==1 || i==2 || i==3){
               callback.multiloop(client,titletest,properties3);
            }
            
          }
          
        }           
       //titlewrapper
      /* for(scr in size){ 
        client.resizeWindow(size[scr].width, size[scr].height);
        //first title
        //margin tops  
        properties=titleComp.text.cccardtitle1compProps(scr); 
        callback.multiloop(client,s2firsttitle,properties);
        //color,font families,weight
        properties=titleComp.text.cctitlewrapperProps(scr);

        callback.multiloop(client,s2firsttitle+' h3',properties);
        // h3 styles
        properties = globalTitleComp.globaltitle.h3props(scr);
        callback.multiloop(client,s2firsttitle+' h3',properties);

        //second title
        //margin tops  
        properties=titleComp.text.cccardtitle2compProps(scr); 
        callback.multiloop(client,s2scndtitle,properties);
        //color,font families,weight
        properties=titleComp.text.cctitlewrapperProps(scr);
        callback.multiloop(client,s2scndtitle+' h3',properties); 
        // h3 styles
        properties = globalTitleComp.globaltitle.h3props(scr);
        callback.multiloop(client,s2scndtitle+' h3',properties);

        //Third title
        //margin tops  
        properties=titleComp.text.cccardtitle3compProps(scr); 
        callback.multiloop(client,s2thirdtitle,properties);
        //color,font families,weight
        properties=titleComp.text.cctitlewrapperProps(scr);
        callback.multiloop(client,s2thirdtitle+' h3',properties); 
        // h3 styles
        properties = globalTitleComp.globaltitle.h3props(scr);
        callback.multiloop(client,s2thirdtitle+' h3',properties);

        //Fourth title
        //margin tops  
        properties=titleComp.text.cccardtitle4compProps(scr); 
        callback.multiloop(client,s2fourthtitle,properties);
        //color,font families,weight
        properties=titleComp.text.cctitlewrapperProps(scr);
        callback.multiloop(client,s2fourthtitle+' h3',properties); 
        // h3 styles
        properties = globalTitleComp.globaltitle.h3props(scr);
        callback.multiloop(client,s2fourthtitle+' h3',properties);
        
        }*/
     },

      
}

