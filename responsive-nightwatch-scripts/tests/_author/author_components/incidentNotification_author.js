var values = require('../../_data/author_data.js'),
	 pageCreation = require('../author_scripts/page_creation.js'),
	 commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   incident_parsys = require('../author_parsys/incident_parsys.js');
   
module.exports= {
  'Create Page and Populate title':function(client){
   		var property = values.data,
  	  		titleText =property['$incident_titleText'],
          pageinTitle=property['$incident_pageTitle'],
          pageinName=property['$incident_pageName'],
          titleInputSel=property['$titleInputSel'],
          incident_textAreaInput=property['$incident_textAreaInput'],
          getcompShelfName =property['$incident_getcompShelfName'],
          templateName =property['$templateName'];


       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName);   //page creation
       incident_parsys.titleComp(client);   //double clicking title component      
       incident_parsys.titleInput(client,titleText);
       incident_parsys.textAreaComp(client);
       incident_parsys.textArea(client,incident_textAreaInput);
       incident_parsys.image_comp(client);
       incident_parsys.remove_cta(client);
       incident_parsys.activate_page(client);
       incident_parsys.Ending_the_session(client);
  }
};