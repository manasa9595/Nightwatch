var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   wink_parsys = require('../author_parsys/step_by_step_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          pageinTitle=property['$wink_pageTitle'],
          pageinName=property['$wink_pageName'],
          templateName =property['$templateName'], 
          getcompShelfName =property['$comp_shelfs_name_wink'],
          shelves_group_under_sidekick=property['$shelves_group_under_sidekick'],
          titleText =property['$wink_titleText'],
          slidetitleText =property['$wink_slidetitleText'],
          sliderTitComp = property['$wink_col_title_sel'],
          sliderTitComp_text = property['$wink_col_title_text'],
          textComp = property['$wink_textComp_sel'],
          textComp_text = property['$wink_textComp_text'],
          ctaComp = property['$wink_col_cta_sel'],
          ctaComp_text = property['$wink_col_cta_text'],
          ctaComp_targetUrl= property['$wink_col_cta_targetUrl'],
          ctaComp_targetWindow=property['$wink_col_cta_targetWindow'],
          slider_images=property['$wink_images'],
          imgs_alttext=property['$wink_imgsalttext'],
          hover_imgs=property['$wink_hover_imgs'],
          ieeight_imgs=property['$wink_ieeight_imgs'];

         //page creation
         pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);  
         //populating data for Shelf title
         wink_parsys.Shelf_props(client);
         wink_parsys.titleComp(client);         
         wink_parsys.titleInput(client,titleText);
         wink_parsys.headerType(client);//for selecting header types in drop down
         wink_parsys.slidertitleComp(client,sliderTitComp,sliderTitComp_text);   // for slider column title component
         wink_parsys.slidertextComp(client,textComp,textComp_text);   // text component
         wink_parsys.CTAType(client,ctaComp,ctaComp_text,ctaComp_targetUrl,ctaComp_targetWindow);//for selecting CTA properites in drop down
         wink_parsys.image_comp(client,slider_images,imgs_alttext,ieeight_imgs,hover_imgs);
         wink_parsys.activate_page(client);
         wink_parsys.Ending_the_session(client);
  }
};