module.exports = {
    //url: 'https://author-rbs-retail-test-61.adobecqms.net/content/rbs_co_uk/en_uk/responsive_personal/product-details-shelf/new-product-shelf.html?wcmmode=disabled',
	
//	Natwest-Personal:
	url:"https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-personal/regression/final_reg_2.html",
//RBS Premier
	//url:"https://rbs-retail-test-61.adobecqms.net/responsive-premier/ProductDetails/ProductDetails-with-title.html",
	//standard Features
	//url:"https://rbs-natwest-retail-test-61.adobecqms.net/responsive-premier/ProductDetails1.html",

//Natwest Premier
	//url:"https://rbs-natwest-retail-test-61.adobecqms.net/responsive-premier/ProductDetails/ProductDetails-with-title.html",
	//url:"https://rbs-natwest-retail-test-61.adobecqms.net/responsive-premier/ProductDetails/StandardFeatures.html",
	elements : {
		tablayOutSel : {
			selector : '.product-details-self .tabbedlayout'
		},
		tabPosSel : {
			selector : ".tabbedlayout .overflow-item"
		},
		tabSel :{
			selector : '.tabbedlayout #tabs ul'
		},
		tabContainerSel :{
			selector : '.tabbedlayout #tabs .tab_container'
		},
		wholeTabSel :{
			selector : '.tabbedlayout #tabs '
		},
		tabLiASel :{
			selector : '.product-details-self .tabbedlayout #tabs ul li:not(.ui-tabs-active) a'
		},
		tabActiveSel :{
			selector : '.product-details-self .tabbedlayout #tabs ul li.ui-tabs-active a'
		},
		imageSel :{
			selector : '.tabbedlayout #tabs .tab_container .tab_content .tab_inner .tab-image'
		},
		spanIndicator : {
			selector : ".product-details-self .tabbedlayout #tabs span.indicator"
		},
		rightH3Sel :{
			selector : '.tabbedlayout #tabs .tab_container .tab_content .tab_inner .title-wrapper h3.title-comp'
		},
		articleTitWrapSel :{
			selector : '.tabbedlayout #tabs .tab_container .tab_content .tab_inner .title-wrapper '
		},		
		tabFontSel :{
			selector : '.tabbedlayout #tabs .tab_container .tab_content .tab_inner'
		},
		accTitleSel :{
			selector : '.product-details-self .tabbedlayout.bgPurple .tab_inner.articlelist .accordion-wrapper .product-accordion .product-acr-header .accordion-header .acordion-header-icon'
		},
		productAccSel :{
			selector : '.product-accordion .acordion-header-icon'
		},
		/*Standard features Sel*/
		standardSel :{
			selector : '.product-details-self .titleWrapper h2'
		},
		standardImg :{
			selector : ' .product-details-self .bgWhite .tab_inner.articlelist .tab-image'
		},
		standardSpaceBottomSel :{
			selector : '.product-details-self .articlelist .tab_inner.articlelist'
		},
		standardSelfTopSel :{
			selector : '.product-details-self'
		},
		standardH3Sel : {
			selector : '.bgWhite .title-wrapper h3.title-comp'
		},
		standardH3MarginSel :{
			selector : '.product-details-self .articlelist .tab_inner.articlelist .articles-wrapper .article-list .title-wrapper'
		},
		articleTitleSle:{
			selector:".product-details-self .articlelist .tab_inner.articlelist .articles-wrapper .article-list .title-wrapper"
		},
		articleTextWrapSel :{
			selector : '.product-details-self .articlelist .tab_inner.articlelist .articles-wrapper .article-list .text-wrapper'
		},
		articleSel :{
			selector : '.product-details-self .articlelist .tab_inner.articlelist .articles-wrapper .article-list'
		},
		standardAccTextSel : {
			selector : '.product-details-self .bgWhite .tab_inner.articlelist .accordion-wrapper .product-accordion .product-acr-header .accordion-header a span.acordion-header-icon'
		},
		standardAccTextASel : {
			selector : '.product-details-self .articlelist .tab_inner.articlelist .accordion-wrapper .product-accordion .product-acr-header .accordion-header a'
		},
		standardAccImgSel : {
			selector : '.product-details-self .articlelist .tab_inner.articlelist .accordion-wrapper .product-accordion .product-acr-header .accordion-header'
		},
		standardAccContainerSel : {
			selector : '.product-details-self .articlelist .product-acr-container'
		},
		standardAccContainerH3Sel : {
			selector : '.product-details-self .titleWrapper h3'
		},
		standardAccContainerBodySel : {
			selector : '.comp-rich-text p'
		},
		standardAccFooterSel : {
			selector : '.product-details-self .articlelist .product-acr-footer'
		},
		standardAccFooterTextSel : {
			selector : '.product-details-self .articlelist .product-acr-footer a'
		},
		/*Accessibility: Accordian*/		
		accClass:{
			 selector : '.product-details-self .articlelist .tab_inner.articlelist .accordion-wrapper .product-accordion .product-acr-header .accordion-header .acordion-header-icon'
		},
		accCloseSel:{
			selector : '.product-details-self .articlelist .tab_inner.articlelist .accordion-wrapper .product-accordion .product-acr-header .accordion-header.active .acordion-icon'
		},
		Textanimation : {
			selector : '.product-details-self .articlelist .tab_inner.articlelist .accordion-wrapper .product-accordion .product-acr-header .accordion-header a span.animated_underline'
		},
		cross : {
			selector : '.product-details-self .articlelist .tab_inner.articlelist .accordion-wrapper .product-accordion .product-acr-header .accordion-header a .acordion-crossicon'
		}

  }
};
