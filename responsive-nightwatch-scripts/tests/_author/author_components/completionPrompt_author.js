var values = require('../../_data/author_data.js'),
	 pageCreation = require('../author_scripts/page_creation.js'),
	 commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   completionPrompt_parsys = require('../author_parsys/completionPrompt_parsys.js');
   
module.exports= {
  'Create Page and Populate title':function(client){
   		var property = values.data,
  	  		titleText =property['$completion_titleText'],
          pageinTitle=property['$completion_pageTitle'],
          pageinName=property['$completion_pageName'],
          titleInputSel=property['$titleInputSel'],
          completion_rteInput=property['$completion_rteInput'],
          getcompShelfName =property['$completion_getcompShelfName'],
          templateName =property['$templateName'];


       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName);   //page creation
       completionPrompt_parsys.titleComp(client);   //double clicking title component      
       completionPrompt_parsys.titleInput(client,titleText);
       completionPrompt_parsys.rteComp(client);
       completionPrompt_parsys.rte(client,completion_rteInput);
       completionPrompt_parsys.image_comp(client);
       completionPrompt_parsys.remove_cta(client);
       completionPrompt_parsys.remove_completionPrompt(client); //to hide shelf
       completionPrompt_parsys.remove_completionPrompt(client); //to unhide shelf
       completionPrompt_parsys.activate_page(client);
       completionPrompt_parsys.Ending_the_session(client);
  }
};