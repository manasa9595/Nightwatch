var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   standalone_parsys = require('../author_parsys/standalone_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          standaloneTitleText =property['$standalone_titleText'],
          standalonePageTitle=property['$standalone_pageTitle'],
          standalonePageName=property['$standalone_pageName'],
          templateName =property['$templateName'], 
          getcompShelfName =property['$comp_shelfs_name_standalone'];
          shelves_group_under_sidekick=property['$shelves_group_under_sidekick'], 
          standalone_rteContent =property['$standalone_rteContent'], 
          ComponentSel=property['ComponentSel'];   

       pageCreation.createPage(client,standalonePageTitle,standalonePageName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
       standalone_parsys.titleComp(client);   // clicking title component
       standalone_parsys.textWrapper(client);//select textwrapper
       standalone_parsys.rteInput(client,standalone_rteContent);//text Wrapper input

       //case-2 (without title)
       //standalone_parsys.parsysSelect(client); //
       //standalone_parsys.dragdropFunc(client,shelves_group_under_sidekick);
       standalone_parsys.hideTitle(client);//hide title
       //standalone_parsys.textWrapper(client);//select textwrapper
       //standalone_parsys.compSelection(client,ComponentSel,getcompShelfName);
      // standalone_parsys.compSelectiontemp(client,ComponentSel);

       //case-2 (grey background)
       //standalone_parsys.parsysSelect(client);//
       //standalone_parsys.dragdropFunc(client);
       standalone_parsys.Shelf_props(client);
       standalone_parsys.dropdown(client);//selecting grey background
       //standalone_parsys.titleComp(client);   // clicking title component
       //standalone_parsys.textWrapper(client);//select textwrapper
       //standalone_parsys.rteInput(client,standalone_rteContent);//text Wrapper input

       //case-3 (grey background without title)
       //standalone_parsys.parsysSelect(client);//
       //standalone_parsys.dragdropFunc(client);
       //standalone_parsys.Shelf_props(client);
       //standalone_parsys.dropdown(client);//selecting grey background
       //standalone_parsys.hideTitle(client);//hide title
       //standalone_parsys.textWrapper(client);//select textwrapper
       //standalone_parsys.rteInput(client,standalone_rteContent);//text Wrapper input
  }
};