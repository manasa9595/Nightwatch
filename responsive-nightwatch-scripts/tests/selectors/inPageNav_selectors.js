module.exports = {
    //url:'https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-business/inpagenavigation/page1.html',
   url:"https://rbs-natwest-retail-stage-61.adobecqms.net/personal/current-accounts/select_account.html",
   elements : {
	titleWrap:{
		selector:".in-page-nav .title-wrapper"
	},
	titleText : {
		selector : ".in-page-nav .title-wrapper .text-comp"
	},
    titRowSel : {
        selector : ".in-page-nav .title-wrapper.row"
    },
	pageNavTable : {
		selector : ".in-page-nav .tableRow"
	},
	inPageLinksSel : {
		selector:".in-page-nav .in-page-nav-links"
	},
    wrapColorClass: {
    	selector: ".in-page-nav .pagenav-wrapper"
    },
    vcenterSel : {
    	selector :".in-page-nav .vcenter"
    },
    linkSel : {
    	selector :".in-page-nav .cta.cta-secondary"
    },
    linksHover : {
    	selector : ".in-page-nav .cta.cta-secondary:hover"
    },
    rowCtaSel : {
    	selector : ".in-page-nav .navCta"
    },
    ctaWrap : {
    	selector : ".in-page-nav .navCta .cta-wrapper"
    },
    ctaPrimary : {
    	selector : ".in-page-nav .cta.cta-primary"
    },
    ctaText : {
    	selector: ".in-page-nav .cta.cta-primary .cta-text"
    }
  }
}