module.exports = {
    url: 
    //natwest-personal
    //'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-personal/singlearticleshelf.html',
    //RBS-personal
    //'https://rbs-retail-stage-61.adobecqms.net/responsive_personal/singlearticle/comb_white.html',
    //RBS-Premier
    "https://rbs-retail-test-61.adobecqms.net/responsive-premier/single-article.html",
    //"https://rbs-natwest-retail-stage-61.adobecqms.net/personal/current-accounts/select_account.html",
	elements : {
		shelfMargin : {
			selector : '.shelf-margin'
		},	
		shelfSel : {
            selector : '.single-article-shelf.theme-white'
	    },
		WhiteshelfSel : {
			selector : '.single-article-shelf.theme-white'
		},
		NonWhiteshelfSel : {
			selector : '.single-article-shelf:not(.theme-white)'
		},
		shelfSelBgColor : {
			selector : ".single-article-shelf.theme-rose"
		},
		imgWrap : {
			selector : '.single-article-shelf .image-wrapper'
		},
		titSel : {
			selector : '.single-article-shelf .title-wrapper'
		},
		rteSel : {
			selector : '.single-article-shelf .rte-wrapper'
		},
		titTextSel : {
			selector : '.single-article-shelf .title-wrapper h2'
		},
        titThemeblue : {
			selector : '.theme-blue h2'
		},
		rteText : {
			selector : '.single-article-shelf .rte-wrapper .comp-rich-text p'
		},
		rteWhite : {
			selector : '.single-article-shelf.theme-blue .rte-wrapper .comp-rich-text p'
		},
		rteGrey : {
			selector : '.single-article-shelf.theme-white .rte-wrapper .comp-rich-text p'
		},
		bgRoseSel : {
			selector : '.single-article-shelf.theme-rose'
		},
		ctaSecondary : {
			selector : '.single-article-shelf.theme-white .cta-wrapper .cta.cta-secondary'
		},
		ctaPrimary : {
			selector : '.cta.cta-primary .cta-text'
		},
		violetPadding : {
			selector : '.single-article-shelf.theme--violet'
		},
		heatherPadding : {
			selector : '.single-article-shelf.theme--heather'
		},
		royalbluePadding : {
			selector : '.single-article-shelf.theme--royal-blue'
		},
		rteprops : {
			selector : '.single-article-shelf .rte-wrapper .comp-rich-text p'
		},
		ctaPrimaryprops : {
			selector : '.single-article-shelf  .cta.cta-primary .cta-text'
		},
		ctaPrimarymar : {
			selector : '.single-article-shelf  .cta.cta-primary'
		},
		ctaSecondaryprops : {
			selector : '.single-article-shelf .cta-wrapper .cta.cta-secondary'
		},
		imgleft : {
			selector : '.single-article-shelf.single-article--left-align .image-wrapper'
		}

		
  }
};
