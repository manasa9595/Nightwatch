var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   imp_fig_parsys = require('../author_parsys/imp_fig_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          pageinTitle=property['$imp_pageTitle'],
          pageinName=property['$imp_pageName'],
          templateName =property['$templateName'], 
          getcompShelfName =property['$impFig_getcompShelfName'],
          shelves_group_under_sidekick=property['$shelves_group_under_sidekick'],
          titleText =property['$imp_titleText'],
          titText =property['$imp_titText'],
          headertype =property['$imp_headertype'],
          textComp = property['$imp_textComp'],
          rteComp = property['$imp_rteComp'],
          textComp_text = property['$imp_textComp_text'],
          rteComp_text = property['$imp_rteComp_text'],
          impfig_rteContent =property['$impfig_rteContent'];

         
         //page creation
         pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);  
         imp_fig_parsys.UniqueShelfId(client);
         imp_fig_parsys.titleComp(client);   //double clicking title component
         imp_fig_parsys.titleInput(client,titleText);//title input
         imp_fig_parsys.headerType(client);//double clicking header component
         imp_fig_parsys.titComp(client);   // title component
         imp_fig_parsys.desccomp(client,textComp,textComp_text);   // title component
         imp_fig_parsys.desccomp(client,rteComp,rteComp_text);   // description
         imp_fig_parsys.infoTitle(client);//accordian info title
         imp_fig_parsys.acccTitle(client);// accordion title
         imp_fig_parsys.rteWrapper(client);// rte selector
         imp_fig_parsys.rteInput(client,impfig_rteContent);// rte text
         
  }
};