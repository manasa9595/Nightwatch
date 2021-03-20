var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   pagein_parsys = require('../author_parsys/pagein_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          titleText =property['$pagein_titleText'],
          pageinTitle=property['$pagein_pageTitle'],
          pageinName=property['$pagein_pageName'],
          getcompShelfName =property['$pagein_getcompShelfName'],
          templateName =property['$templateName'], 
          shelves_group_under_sidekick = property['$shelves_group_under_sidekick'],
          pagein_cta_link=property['$pagein_cta_link'];       

       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
       pagein_parsys.titleComp(client);   //double clicking title component
       pagein_parsys.titleInput(client,titleText); //populating the data for title
       pagein_parsys.primaryCta(client);
       pagein_parsys.sec_linksConfigure(client,pagein_cta_link);
       pagein_parsys.additional_secCTA(client,pagein_cta_link);
       pagein_parsys.hide_primaryCta_space(client);
       pagein_parsys.activate_page(client);
       pagein_parsys.Ending_the_session(client);
  }
};