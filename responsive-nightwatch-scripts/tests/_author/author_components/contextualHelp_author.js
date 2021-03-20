var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   contextualHelp_parsys = require('../author_parsys/contextualHelp_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          titleText =property['$ContextualHelpTitleText'],
          pageinTitle=property['$Cont_help_pageTitle'],
          pageinName=property['$Contextual_pageName'],
          templateName =property['$templateName'],        
          contextAccordTitle=property['$contextAccordTitle'],
          shelves_group_under_sidekick=property['$shelves_group_under_sidekick'],
          getcompShelfName=property['$contexual_getcompShelfName'];


       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
       // contextualHelp_parsys.titleComp(client);   //double clicking title component
       // contextualHelp_parsys.titleInput(client,titleText);
       /*contextualHelp_parsys.contextualAccordionSel(client);
       contextualHelp_parsys.contextAccordTitleInput(client,contextAccordTitle);*/
       contextualHelp_parsys.AccContent(client); 
       contextualHelp_parsys.Accheader(client);
       
  }
};