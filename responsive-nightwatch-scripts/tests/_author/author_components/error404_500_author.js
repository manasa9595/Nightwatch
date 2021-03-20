var values = require('../../_data/author_data.js'),
	 pageCreation = require('../author_scripts/page_creation.js'),
	 commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   error404_500_parsys = require('../author_parsys/error404_500_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
   		var property = values.data,
  	  		titleText =property['$errorPage_shelf_populateTitle'],
          populateText =property['$errorPage_shelf_populateText'],
          pageinTitle=property['$errorPage_shelf_pageTitle'],
          pageinName=property['$errorPage_shelf_pageName'],
          pageinddsel=property['$inpageddsel'],
          getcompShelfName =property['$errorPage_getcompShelfName'],
          templateName =property['$templateName'],
          shelves_group_under_sidekick = property['$shelves_group_under_sidekick'];


       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
        error404_500_parsys.titleComp(client);   //double clicking title component
        error404_500_parsys.titleInput(client,titleText); //populating the data for title
        error404_500_parsys.headerType(client);
        error404_500_parsys.textComp(client);   //double clicking text component
        error404_500_parsys.textInput(client,populateText);
        error404_500_parsys.okBtns(client); 
        /*error404_500_parsys.searchTitleComp(client);
        error404_500_parsys.searchTitleInput(client);*/
        error404_500_parsys.imageWrap(client);
        error404_500_parsys.enter_search_text(client);
        error404_500_parsys.hide_search(client);
        error404_500_parsys.activate_page(client);
        error404_500_parsys.Ending_the_session(client);
  }
};