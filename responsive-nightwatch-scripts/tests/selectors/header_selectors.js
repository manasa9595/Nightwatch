module.exports = {
   
  //natwest-premier
   //url:"https://rbs-natwest-retail-test-61.adobecqms.net/responsive-premier/test.html",
  //natwest-personal
 // url: 'https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-personal.html',
  //url:"https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-personal/at-a-glance-shelf.html",
  //'https://rbs-retail-stage-61.adobecqms.net/responsive_personal/regression1/final_reg_1.html',
  //rbs-premier
  url: 'https://rbs-retail-test-61.adobecqms.net/responsive-premier/sprint1demo.html',
  //rbs-personal
  //url:"https://rbs-retail-stage-61.adobecqms.net/responsive_personal/regression1/final_reg_1.html",
  elements : {  
    headerBackgroundLarge:{
      selector:"header .nav-level1"
    },
    headerBackgroundSmall:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li.you-are-in>ul>li:not(.active)>a"
    },
    menuClick_in_Small:{
      selector:"header .nav-level2 .navbar-default .navbar-header .navbar-toggle"
    },
    active_header_selector_Large:{
      selector:"header .nav-level1 .navbar-nav>li.active a"
    },
    active_headerBackgroundSmall:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li.you-are-in>ul>li.active>a"
    },
    headerLinksStylesLarge:{
      selector:"header .nav-level1 .navbar-nav>li:not(.active) a"
    },
    headerLinksStylesSmall:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li.you-are-in>ul>li:not(.active)>a"
    },
    L_2_Section_li:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li+li"
    },
    L_2_Section_anchors_in_li:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li:not(.active)>a"
    },
    clickable_L2_Section:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li:first-child"
    },
    L3links:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li>ul>li>a"
    },
    L3InactivelinksXL_L:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .nav.navbar-nav>li.active>ul>li:not(.active)>a"
    },
    L3first_link:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li>ul>li:first-child>a"
    },
    L4Link_SelectorsXl:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav > li > ul > li.active > ul>li:not(.sub-menu) a"
    },
    L5Link_SelectorsXl:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li>ul>li.active>ul li ul li a"
    },
    L3LaterLink_Selectors_Small:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li>a"
    },
    L2firstchildLarge:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li:first-child"
    },
    L3firstChildLarge:{
      selector:"header .nav-level2 .navbar-default .navbar-collapse .navbar-nav>li.active>ul>li:first-child>a"
    },
    left_top_menu:{
      selector:"header .nav-level2 .navbar-default .navbar-header .navbar-toggle"
    }
  }    
};


