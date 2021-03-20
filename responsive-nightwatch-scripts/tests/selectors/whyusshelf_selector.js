module.exports = {
	//url: 'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-personal/whyusshelf.html?',
	//url: 'https://rbs-retail-test-61.adobecqms.net/responsive_business/whyuscta.html',
	url: 'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-premier/test/whyuscta0.html?',
		elements : {
		whiteShelf : {
			selector : '.comp_whyUs_shelf.shelf-margin'
		},
		purpleShelf : {
			selector : '.comp_whyUs_shelf.bgPurple' 
		},
		Shelfprop : {
			selector : '.comp_whyUs_shelf.shelf-margin h3.title-comp'
		},
		Shelftitle : {
			selector : '.comp_whyUs_shelf.bgPurple .whyUs-col-block .title-wrapper h3.title-comp'
		},
		shelfText : {
			selector : '.container-fluid:not(.bgPurple) .whyUs-col-block .text-wrapper .text-comp'
		},
		shelfTextPurplebg : {
			selector : '.bgPurple .whyUs-col-block .text-wrapper .text-comp'
		},
		title : {
			selector : '.container-fluid:not(.bgPurple) .whyus-shelf-title-wrapper .title-comp'
		},
		titleColorBg : {
			selector : '.bgPurple .whyus-shelf-title-wrapper .title-comp'
		},
		grid : {
			selector : '#main-content-wrapper .comp_whyUs_shelf .whyUs-col-block'
		},
		grid1 : {
			selector : '#main-content-wrapper .comp_whyUs_shelf .col-num-1 .whyUs-col-block'
		},
		grid2 : {
			selector : '#main-content-wrapper .comp_whyUs_shelf .col-num-2 .whyUs-col-block'
		},
		grid3 : {
			selector : '#main-content-wrapper .comp_whyUs_shelf .col-num-3 .whyUs-col-block'
		},
		grid4 : {
			selector : '#main-content-wrapper .comp_whyUs_shelf .col-num-4 .whyUs-col-block'
		},
		gridImage : {
			selector : '#main-content-wrapper .comp_whyUs_shelf .whyUs-col-block .comp-svg-generic'
		},
		gridTitle : {
			selector : '#main-content-wrapper .comp_whyUs_shelf .whyUs-col-block .title-wrapper'
		},
		gridTitleComp : {
			selector : '#main-content-wrapper .comp_whyUs_shelf .whyUs-col-block .title-wrapper .title-comp'
		},
		gridText : {
			selector : '#main-content-wrapper .comp_whyUs_shelf .whyUs-col-block .text-wrapper'
		},
		gridSecCTAWrap : {
			selector : '.comp_whyUs_shelf .whyUs-col-block .cta-wrapper'
		},
		gridSecCTA : {
			selector : '.container-fluid:not(.bgPurple) .whyUs-col-block .cta.cta-secondary .cta-text'
		},
		gridSecCTAPurple : {
			selector : '.bgPurple .whyUs-col-block .cta.cta-secondary .cta-text'
		},
		TwillPseudo : {
			selector : '.comp_whyUs_shelf.bgPurple'
		}
		
	}
}