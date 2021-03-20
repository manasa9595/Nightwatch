module.exports = {    
	//RBS Premier	
	url:"https://rbs-retail-stage-61.adobecqms.net/responsive-premier/homepage_ac3.html?cq_ck=1522652444734",
	//Natwest Premier
	//url:"https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-premier/DemoPages1/sprint6demopages/actioncontent_brandbg.html",
	elements : {
		titleTopPaddingSel : {
			selector : '.actionable-content .main-title-wrapper'
		},	
		titlePropertySel : {
			selector : '.actionable-content .main-title-wrapper h2.title-comp'
		},
		titleBottomSpaceSel : {
			selector : '.actionable-main-content'
		},
		whiteGreyBar : {
			selector : '.actionable-main-content:not(.brand-bg-col-shelf) .row>div>div:not(.brand-bg) .grey-bar'
		},
		brandGreyBar: {
			selector : '.brand-bg-col-shelf .grey-bar, .brand-bg .grey-bar'
		},
		imageLeftSpaceexceptonlyoneBG : {
			selector : '.actionable-main-content .row>div>div:not(.brand-bg)  .image-wrapper'
		},	
		imageLeftSpaceForOnlyoneBG : {
			selector : '.brand-bg  .image-wrapper'
		},
		imageDimensions : {
			selector : '.actionable-main-content .image-wrapper img'
		},
		imageDimensionsSVG : {
			selector : '.actionable-main-content .image-wrapper svg'
		},
		imageColorBrandbgSVG : {
			selector : '.brand-bg-col-shelf .image-wrapper .svg-image-wrap path[fill], .brand-bg .image-wrapper .svg-image-wrap path[fill]'
		},
		imageColorWhiteBgSVG : {
			selector:'.actionable-main-content:not(.brand-bg-col-shelf) .row>div>div:not(.brand-bg) .image-wrapper .svg-image-wrap path[fill]'
		},
		contentSpacings : {
			selector : '.actionable-main-content:not(.brand-bg-col-shelf) .row>div>div:not(.brand-bg)  .text-content-wrapper'
		},
		contentSpacingsBrandBgWhole : {
			selector : '.brand-bg-col-shelf   .row>div>div:not(.brand-bg) .text-content-wrapper'
		},
		contentSpacingsonBrandBgonLeftOnly : {
			selector : '.brand-bg  .text-content-wrapper'
		},
		contentTitleSpacings : {
			selector : '.actionable-main-content .title-wrapper'
		},
		whitebgContentTitleProps : {
			selector : '.actionable-main-content:not(.brand-bg-col-shelf) .row>div>div:not(.brand-bg) .text-content-wrapper .title-wrapper h3'
		},
		brandBgContentTitleProps : {
			selector : '.actionable-main-content.brand-bg-col-shelf .text-content-wrapper .title-wrapper h3, .brand-bg .text-content-wrapper .title-wrapper h3'
		},
		textPropsOnWhiteBg : {
			selector : '.actionable-main-content:not(.brand-bg-col-shelf) .row>div>div:not(.brand-bg) .text-content-wrapper .text-comp'
		},
		textPropsOnBrandBg : {
			selector : '.actionable-main-content.brand-bg-col-shelf .text-content-wrapper .text-comp, .brand-bg .text-content-wrapper .text-comp'
		},
		secCTATopSpacings : {
			selector : '.actionable-main-content .text-content-wrapper .cta-secondary'
		},
		primaryCTATopSpacings : {
			selector : '.actionable-main-content .text-content-wrapper .cta-primary'
		},
		primaryCTAPropsonWhiteBg : {
			selector : '.actionable-main-content:not(.brand-bg-col-shelf) .row>div>div:not(.brand-bg) .cta-primary .cta-text'
		},
		primaryCTAPropsonBrandBg : {
			selector : '.actionable-main-content.brand-bg-col-shelf .cta-primary .cta-text, .brand-bg .cta-primary .cta-text'
		},
		secCTAPropsonWhiteBg : {
			selector : '.actionable-main-content:not(.brand-bg-col-shelf) .row>div>div:not(.brand-bg) .cta-secondary .cta-text'
		},
		secCTAPropsonBrandBg : {
			selector : '.actionable-main-content.brand-bg-col-shelf .cta-secondary .cta-text, .brand-bg .cta-secondary .cta-text'
		}	
  	}
};
