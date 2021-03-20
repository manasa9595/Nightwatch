var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   tableShelf_parsys = require('../author_parsys/tableShelf_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          titleText =property['$Table_shelf_populateTitle'],
          populateText =property['$TableshlefPopulateText'],
          dropDownText=property['Table_dropDownText']
          pageinTitle=property['$Table_shelf_pageTitle'],
          pageinName=property['$Table_shelf_pageName'],
          getcompShelfName =property['$comp_shelfs_name_table_shelf'],
          templateName =property['$StandardtemplateName'],
          optionTxtPopulate=property['$optionTxtPopulate'],
          optionValPopulate=property['$optionValPopulate'],
          okbtnClick=property['$okbtnClick'],
          shelves_group_under_sidekick=property['$shelves_group_under_sidekick'];      
         
          


       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
       //tableShelf_parsys.titleComp(client); //double clicking title component
       //tableShelf_parsys.titleInput(client,titleText);//populating data for title
       //commonFunctions.setddvalues(client,'.x-combo-list-item','H2'); //selecting header dropdown
       //tableShelf_parsys.textComp(client,'.table-shelf-text-wrapper .auth--info');
       //tableShelf_parsys.textInput(client,populateText);
       //tableShelf_parsys.multipletbns(client,'.x-btn.cq-btn-ok.x-btn-noicon','OK');
       

       //tableShelf_parsys.textComp(client,'.cq-element-master-par_47modulartable_47dropdowntext .auth--info');
       //tableShelf_parsys.dropDownInput(client,populateText);
       
       tableShelf_parsys.toolbarClick(client); //click on edit button 
       tableShelf_parsys.dropdownLink(client); //click dropdown link(add item)
       tableShelf_parsys.optionBoxPopulate(client, optionTxtPopulate, optionValPopulate, okbtnClick);
       client.pause(5000);
       tableShelf_parsys.tableLoopTitle(client);
       //commonFunctions.setddvalues(client,'.x-form-text.x-form-field.x-trigger-noedit','H4');
       

       //tableShelf_parsys.textComp(client,'.table-shelf-description-wrapper .auth--info');
       //tableShelf_parsys.ctaClick(client);
       //commonFunctions.setddvalues(client,'.x-form-text','CTA Secondary');
       //tableShelf_parsys.dropDowntextComp(client);//populating data for text
       
      
      //pagein_parsys.titleComp(client);   //double clicking title component
       /*pagein_parsys.titleInput(client,titleText); //populating the data for title
       for(var i=0;i<3;i++){
        // ctalinkssel=".in-page-nav-links div[class*='inpagenavigation-cta'] a[title='Secondary CTA']";
         
         ctalinkssel=".in-page-nav-links div[class*='inpagenavigation-cta'"+i+"'] a[title='Secondary CTA']";
         pagein_parsys.multiplepageinConfigure(client,ctalinkssel,pageinddsel,pageinddval,pageinlinkval,pageinlinkurl,pageinbtnsel,pageinbtnval,i);
       }*/
   //'.table-shelf-text-wrapper .auth--info'  
  }
};