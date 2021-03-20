var data = {
//url for all brands
//personal Natwest
$brandUrl : "https://author-rbs-retail-test-61.adobecqms.net/siteadmin#/content/natwest_com/en_uk/responsive-personal/NightWatch_Author_Pages",
//personal RBS
//$brandUrl : "https://author-rbs-retail-test-61.adobecqms.net/siteadmin#/content/rbs_co_uk/en_uk/responsive_personal/NightWatch_Author_Pages",
//business NatWest
//$brandUrl : "https://author-rbs-retail-test-61.adobecqms.net/siteadmin#/content/natwest_com/en_uk/responsive-business/NightWatch_Author_Pages",
//premier URL
//$brandUrl : "https://author-rbs-retail-test-61.adobecqms.net/siteadmin#/content/natwest_com/en_uk/responsive-premier/NightWatch_Author_Pages",
 //"https://author-rbs-retail-test-61.adobecqms.net/cf#/content/natwest_com/en_uk/responsive-personal/NightWatch_Author_Pages/Table_shelf.html",
//Stage-Premier for Actionable content
//"https://author-rbs-retail-stage-61.adobecqms.net/siteadmin#/content/natwest_com/en_uk/responsive-premier/Nightwatch_pages",
 //Page creation Selectors and variable which should not be modified
    $templateSel:".template-title",
    $redirectSel : ".cq-siteadmin-grid .x-panel-body .x-grid3-col.x-grid3-td-name div",
    $existingPages : ".cq-siteadmin-grid .x-grid3-col .x-grid3-col-title",
    $ComponentSel:".x-panel-body .cq-sidekick-buttons:nth-child(2) .x-panel-bwrap .x-btn-noicon tr:nth-child(2) .x-btn-mc button",
    //$ComponentSel:".x-panel-body .cq-sidekick-buttons:nth-child(3) .x-panel-bwrap .x-btn-noicon tr:nth-child(3) .x-btn-mc button",
    $titleInputSel : "input[name='./text']",
    $textInputSel : ".x-form-textarea.x-form-field",
    $rteInputSel : 'body#CQrte',
    //Page creation variables
    $templateName:  "Standard Template (Responsive)",
    $shelves_group_under_sidekick: "Responsive Shelves",
    //$templateName : "Home Page Template (Responsive)",
    // $templateName:  "Blank Template (Responsive)", //FOR BLANK TEMPLATE SELECTION
    //Page creation variables and selectors which can be modfied

//INPAGE NAVIGATION VARIABLES
    $pagein_pageTitle:"In-Page-Navigation",
    $pagein_pageName: "In-Page-Navigation",
    $pagein_titleText : "On Page Navigation",
    $pagein_getcompShelfName:"On Page Navigation",
    $pagein_cta_link: ['At a glance','What do I get?','How to apply online','Everyday bank account','Accounts with extra features','Students & graduates',"Children's account",'Already a customer','Our other accounts'],

//STANDALONE SHELF VARIABLES
    $standalone_pageTitle:"Standalone-shelf",
    $standalone_pageName: "Standalone-shelf",
    $standalone_titleText : "Standalone compliance",
    $comp_shelfs_name_standalone:"Eligibility And Legal",
    $shelfClass:"div.x-panel[class*='standalone'] .x-panel-bwrap .x-panel-body-noheader button",
    $standalone_rteContent:"To apply for a Student Bank Account you must be aged 17 or over & completing a full-time undergraduate course that lasts at least 2 years; completing a full-time post-graduate course; or training as a nurse, at a UK university or college of higher education. To apply for an Arranged Overdraft you must be a UK resident, aged 18 or over.",
    $articlesCount:'5',

//CONTEXTUAL HELP VARIABLES  --DO NOT DELETE
   $Cont_help_pageTitle:"contextual_help",
   $Contextual_pageName: "contextual_help",
   $ContextualHelpTitleText : "Here are some common questions about business loans",   
   $contextAccordTitle : "business loans",
   $classTitle:"input[name='./text']",
   $contexual_getcompShelfName:"Contextual Help",

//ACTIONABLE CONTENT VARIABLES  
   $act_content_pageTitle:"Actionable_Content",
   $act_content_pageName: "Actionable_Content",
   $comp_shelfs_name_act_content:"Actionable Content",
   $act_content_TitleText : "Ways to join Premier", 
   $getcompShelfNameactContent:"Actionable Content",
   $innerTitle_sel :".actionable-main-content .title-wrapper .auth--info",
   $innerTitComp_text :"A flexiable title with two lines of text",
   $textComp_act_content_sel:".actionable-main-content .text-wrapper .auth--info",
   $textComp_act_content_text:"Claiming online is easy to do through your membership services, it takes about 10 mins and you will hear back from us within xx hrs/days",
   $ctaComp_sel_act_content:".actionable-main-content .cta-wrapper .auth--info",
   $ctaComp_text_act_content:"Make a claim online",
   $ctaComp_targetUrl_act_content:"#google",
   $ctaComp_targetWindow_act_content:"checked",
   $leftSide_image:"branchPrima.svg",//"webchatNWPrima.svg",==>stage and test respe
   $image_alttext:"left side image",
   $ieeight_images:"icon_webchat_purpleNWPremier.png",
   $webchatSlector:".actionable-main-content .right-content .auth--info",

//DOWNLOAD SHELF VARIABLES
   $Download_shelf_pageTitle:"Download_shelf",
   $Download_shelf_pageName: "Download_shelf",
   $download_shelfs_name_Cont_help:"Download Shelf",
   $downloadTitleText :"Here are some important documents to read", 
   $download_name:"Download",  
   //$shelfClass:"div.x-panel[class*='download'] .x-panel-bwrap .x-panel-body-noheader button",  

//IMPORTANT FIGURES SHELF VARIABLES
   $imp_pageTitle:"Important_fig",
   $imp_pageName: "Important_fig",
   $comp_shelfs_name_imp:"Important Figures",
   $imp_titleText :"Representative example",   
   //$shelfClass:"div.x-panel[class*='importantfigures'] .x-panel-bwrap .x-panel-body-noheader button",
   $impFig_getcompShelfName:"Important Figures",
   $h2selector:".x-form-field-wrap x-form-field-trigger-wrap x-trigger-wrap-focus",
   $imp_headertype :"H2",
   $imp_titText : "Title goes here",
   $titInputSel : ".item-list .title-wrapper .auth--info",
   $imp_textComp : '.impfigcomp .item-list .text-wrapper .auth--info',
   $imp_rteComp : '.impfigcomp .item-list .rte-wrapper .auth--info',
   $imp_textComp_text : ['12.3%','12.3%','12.3%','12.3%'],
   $imp_rteComp_text : ['Description here','Description here','Description here','Description here'],
   $impfig_rteContent : "You will not pay interest on new purchases if you pay your balance in full and on time. Otherwise, the period over which interest is charged will be as follows:",

//TABLE SHELF VARIABLES
   $Table_shelf_pageTitle:"Tableshelf",
   $Table_shelf_populateTitle : "Title of table here",
   $TableshlefPopulateText : "This is some blurb about how we’re very clear with all our information and everything is very transparent.",
   $Table_shelf_pageName: "Table_shelf",
   $comp_shelfs_name_table_shelf:"Table Shelf",
   $ctaInputSel:"input[name='./ctaLinkText']",
   $Table_dropDownText:"i want to borrow against a 100,00 invoice for",
   $table_editBtnClick:"div.x-panel[class*='table'] .x-panel-bwrap .x-panel-body-noheader button",
   $optionInputSel : "input[name='./tables/item_1/tableOptionText']",
   $optionTxtPopulate:"Table1",
   $optionValSel:"input[name='./tables/item_1/tableOptionVal']",
   $optionValPopulate:"25000",
   $noOfCol:"5", //number of colums
   $noOfRow:"5", //number of rows

//TEXT ONLY HEADER SHELF VARIABLES
   $TextOnlyHeader_shelf_pageTitle:"TextOnlyHeader_shelf",
   $TextOnlyHeader_shelf_pageName: "TextOnlyHeader_shelf",
   $TextOnlyHeader_shelf_populateTitle : "Existing customer bank accounts",
   $TextOnlyHeader_getcompShelfName:"Text Only Header",
   $TextOnlyHeader_shelf_populateText : "A flexible title on 1 line",
   //$shelfClass:"div.x-panel[class*='textonlyheader'] .x-panel-bwrap .x-panel-body-noheader button",
   
//TASK-BASED PANEL VARIABLES
    $taskBased_pageTitle:"taskBased",
    $taskBased_pageName: "taskBased",
    $taskBased_titleText : "What would you like to do today?",
    //comment drag drop function in pagecreation
    $taskBased_getcompShelfName:"Task-Based Panel",
    //$ComponentSel:".x-panel-body .cq-sidekick-buttons:nth-child(1) .x-panel-bwrap .x-btn-noicon tr:nth-child(2) .x-btn-mc button",
    //$shelfClass:"div.x-panel[class*='taskpanel'] .x-panel-bwrap .x-panel-body-noheader button",
    $taskBased_cta_text: ['Find a current account','Get a personal loan','Explore mortgages','Choose a credit card','Find a savings account'],
    $search_titleText : "Or ask us a question...",

//Incident Notification variables
    $incident_pageTitle:"IncidentNotification",
    $incident_pageName: "IncidentNotification",
    $incident_titleText : "We are Working on it",
    $incident_getcompShelfName:"Incident Notification",
    $incident_textAreaInput:"We're unable to help you apply right now (it's us not you). Please try again later.",

//COMPLETION PROMPT
    $completion_pageTitle:"CompletionPrompt",
    $completion_pageName: "CompletionPrompt",
    $completion_titleText : "Hello again",
    //componentSel: nth-child(1)
    $completion_getcompShelfName:"Completion Prompt",
    $completion_rteInput:"Want to carry on where you left off with your Reward Silver application?",

//CAMPAIGN PROMO
    $campaignPromo_pageTitle:"Campaign-Promo",
    $campaignPromo_pageName: "Campaign-Promo",
    $campaignPromo_titleText : "Big and lovely title goes here",
    $campaignPromo_rteContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    $campaignPromo_getcompShelfName:"Campaign Promo",
    //comp_sel--nth-child(2), Hp
    //$shelfClass:"div.x-panel[class*='campaignpromo'] .x-panel-bwrap .x-panel-body-noheader button",
    $comp_shelfs_name:"Campaign Promo",
    $imgInputSel: '#cq-cf-wrapper #cq-cf-west .x-panel .x-form-text',
    $imgContent: "nw-pers-ill-celebratorymoment-rectangle-yelow.png",
   
//404-500 Error Page variables
   $errorPage_shelf_pageTitle:"ErrorPage_shelf",
   $errorPage_shelf_pageName: "ErrorPage_shelf",
   $errorPage_shelf_populateTitle : "Well that's embarassing",
   $errorPage_getcompShelfName:"Missing Page and Site Down",
   $errorPage_shelf_populateText : "Try a page refresh. If that doesn't work, please accept our apologies and try again later.",  

//PAGE OVERVIEW VARIABLES
   $page_overview_pageTitle:"Page_Overview",
   $page_overview_pageName: "Page_Overview",
   $comp_shelfs_name_page_overview:"Page Overview",
   $page_over_title_sel:".ataglance .at-a-glance__title-wrapper  .auth--info",
   $page_over_title_text:"Premier banking is designed to help you take control of your situation. We've been there and done it. We're here to help you.",
   $page_over_text_sel:".ataglance div[class*='col-lg-10'] .at-a-glance__text-wrapper .auth--info",
   $page_over_text_value:"Premier is an exclusive service providing financial strategies to help you run your life more easily. Our services and products are designed to enable you to achieve your financial goals.",
   $page_overvview_compliance_sel:".ataglance .at-a-glance__compliance__shelf-textarea  .auth--info",
   $page_overvview_compliance_text:"Available to Premier banking customers who are aged 18 or over, a permanent UK resident and not been declared bankrupt in the last 6 years, with a sole income of at least £100,000 or a joint income of £120,000 paid in to this account, or a mortgage of at least £500,000, or £100,000 in savings and investments.",

//What i need to know(Step_by_step) variables
   $wink_pageTitle:"What_i_need_to_know",
   $wink_pageName:"What_i_need_to_know",
   $comp_shelfs_name_wink:"Step By Step",
   $wink_titleText:"Interested in this account?",
   $wink_col_title_sel:'.slider-col .title-wrapper .auth--info',
   $wink_col_title_text:['How can I apply?','What will I need to prepare?','How long will it take?'],
   $wink_textComp_sel : '.slider-col .text-wrapper .auth--info',
   $wink_textComp_text : ["You can apply online right now if you're ready. If you want to use our Switching Service we'll move everything across for you from your existing current account.","You'll need to provide us with some details, such as monthly income and we'll also need some ID from you.","Once you've got all your bits and pieces together, your application will take about 10 minutes"],
   $wink_col_cta_sel:'.slider-col .cta-wrapper .auth--info',
   $wink_col_cta_text:['Get Started','Find out','Find out More'],
   $wink_col_cta_targetUrl:["#","www.google.co.in",""],
   $wink_col_cta_targetWindow:["checked","","checked"],
   $wink_images:['icon-laptop.png','what-i-icon-pencils.svg','icon-tea.png'],
   $wink_imgsalttext:["laptop","pencils","tea"],
   $wink_hover_imgs:['/content/dam/BoB-SVG/winkshelfimgs/icon-pencils.gif','/content/dam/BoB-SVG/winkshelfimgs/icon-pencils1.gif','/content/dam/BoB-SVG/winkshelfimgs/icon-pencils11.gif'],
   $wink_ieeight_imgs:['/content/dam/BoB-SVG/winkshelfimgs/icon-laptop.png','/content/dam/BoB-SVG/winkshelfimgs/icon-tea.png','/content/dam/BoB-SVG/winkshelfimgs/icon-pencils.png'],

//Hero Shelf RBS & NW
    $Hero_pageTitle:"Hero",
    $Hero_pageName: "Hero",
    $Hero_getcompShelfName:"Hero",
};

module.exports = {
    data: data
}
