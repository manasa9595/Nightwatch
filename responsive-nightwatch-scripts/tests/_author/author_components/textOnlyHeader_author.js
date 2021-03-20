var values = require('../../_data/author_data.js'),
	 pageCreation = require('../author_scripts/page_creation.js'),
	 commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   textOnlyHeader_parsys = require('../author_parsys/textOnlyHeader_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
   		var property = values.data,
  	  		titleText =property['$TextOnlyHeader_shelf_populateTitle'],
          productTitleText = property['$TextOnlyHeader_shelf_populateText'],
          pageinTitle=property['$TextOnlyHeader_shelf_pageTitle'],
          pageinName=property['$TextOnlyHeader_shelf_pageName'],
          pageinddsel=property['$inpageddsel'],
          getcompShelfName =property['$TextOnlyHeader_getcompShelfName'],
          templateName =property['$templateName'],
          shelves_group_under_sidekick = property['$shelves_group_under_sidekick'];


       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
       textOnlyHeader_parsys.titleComp(client);   //double clicking title component
       textOnlyHeader_parsys.titleInput(client,titleText); //populating the data for title
       //RBS
       // textOnlyHeader_parsys.MultiLineTitle(client);

       //NATWEST
       textOnlyHeader_parsys.textComp(client);   //double clicking text component
       textOnlyHeader_parsys.textInput(client,productTitleText); 
       textOnlyHeader_parsys.headerType(client);
       
       textOnlyHeader_parsys.Enable_Compliance(client);
       textOnlyHeader_parsys.clickCompliance(client);
       textOnlyHeader_parsys.ComplianceInput(client);
       textOnlyHeader_parsys.Shelf_props(client);
  },
  'Add new shelf(BG) into NATWEST-Personal parsys':function(client){    
       var property = values.data,
       getcompShelfName =property['$TextOnlyHeader_getcompShelfName'],
       shelves_group_under_sidekick = property['$shelves_group_under_sidekick'];

       // textOnlyHeader_parsys.new_shelf(client); // Click new button for new shelf
       // pageCreation.newShelf(client,getcompShelfName,shelves_group_under_sidekick); //Drag new shelf into parsys
       // textOnlyHeader_parsys.GoldBG_personal(client); //select gold background in NW_Personal
  },
  'Add new shelf(BG) into NATWEST-Business parsys':function(client){    
       var property = values.data,
       getcompShelfName =property['$TextOnlyHeader_getcompShelfName'],
       shelves_group_under_sidekick = property['$shelves_group_under_sidekick'];

       textOnlyHeader_parsys.new_shelf(client); // Click new button for new shelf
       pageCreation.newShelf(client,getcompShelfName,shelves_group_under_sidekick); //Drag new shelf into parsys
       textOnlyHeader_parsys.BlueBG_business(client); //select gold background in NW_Personal     
  },
  'Activate and End page':function(client){
      textOnlyHeader_parsys.activate_page(client);
      textOnlyHeader_parsys.Ending_the_session(client);
  }
};