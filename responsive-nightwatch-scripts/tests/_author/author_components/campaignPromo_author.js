var values = require('../../_data/author_data.js'),
	 pageCreation = require('../author_scripts/page_creation.js'),
	 commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   campaignPromo_parsys = require('../author_parsys/campaignPromo_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
   		var property = values.data,
  	  		titleText =property['$campaignPromo_titleText'],
          pageinTitle=property['$campaignPromo_pageTitle'],
          pageinName=property['$campaignPromo_pageName'],
          pageinddsel=property['$inpageddsel'],
          getcompShelfName =property['$campaignPromo_getcompShelfName'],
          templateName =property['$templateName'],  
          shelves_group_under_sidekick=property['$shelves_group_under_sidekick'],
          campaignPromo_rteContent =property['$campaignPromo_rteContent'];


       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
       //campaignPromo_parsys.ShelfId(client);
       campaignPromo_parsys.titleComp(client);   //double clicking title component
       campaignPromo_parsys.titleInput(client,titleText); //populating the data for title
       campaignPromo_parsys.headerType(client);
       campaignPromo_parsys.rteWrapper(client);
       campaignPromo_parsys.rteInput(client,campaignPromo_rteContent);
       campaignPromo_parsys.okBtns(client,'OK');
       campaignPromo_parsys.imageWrap(client);
       campaignPromo_parsys.image_placement(client);
       campaignPromo_parsys.activate_page(client);
       campaignPromo_parsys.Ending_the_session(client);
  }
};