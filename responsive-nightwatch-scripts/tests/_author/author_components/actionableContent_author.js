var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   actionableContent_parsys = require('../author_parsys/actionableContent_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          titleText =property['$act_content_TitleText'],
          pageinTitle=property['$act_content_pageTitle'],
          pageinName=property['$act_content_pageName'],
          getcompShelfName =property['$comp_shelfs_name_act_content'],
          templateName =property['$StandardtemplateName'],  
          shelves_group_under_sidekick=property['$shelves_group_under_sidekick'],
          innerTitle_sel=property["$innerTitle_sel"],
          innerTitComp_text=property["$innerTitComp_text"],
          textComp_act_content_sel=property["$textComp_act_content_sel"],
          textComp_act_content_text=property["$textComp_act_content_text"],
          ctaComp_sel_act_content = property['$ctaComp_sel_act_content'],
          ctaComp_text_act_content = property['$ctaComp_text_act_content'],
          ctaComp_targetUrl_act_content= property['$ctaComp_targetUrl_act_content'],
          ctaComp_targetWindow_act_content=property['$ctaComp_targetWindow_act_content'],
          leftSide_image=property['$leftSide_image'],
          image_alttext=property['$image_alttext'],
          ieeight_image=property['$ieeight_images'],
          getcompShelfName=property['$getcompShelfNameactContent'];


       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
       actionableContent_parsys.Shelf_props(client);
       actionableContent_parsys.titleComp(client);         
       actionableContent_parsys.titleInput(client,titleText);
       actionableContent_parsys.headerType(client);//to select h2 header type in drop down
       actionableContent_parsys.innerTitle(client,innerTitle_sel,innerTitComp_text);   // for slider column title component
       actionableContent_parsys.innerText(client,textComp_act_content_sel,textComp_act_content_text);   // text component
       actionableContent_parsys.CTAType(client,ctaComp_sel_act_content,ctaComp_text_act_content,ctaComp_targetUrl_act_content,ctaComp_targetWindow_act_content);//for selecting CTA properites in drop down
       actionableContent_parsys.image_comp(client,leftSide_image,image_alttext,ieeight_image);
       actionableContent_parsys.activate_page(client);
       //actionableContent_parsys.Ending_the_session(client);
  }
};