module.exports = {
    url: 'https://author-rbs-retail-test-61.adobecqms.net/content/natwest_com/en_uk/responsive-business/png_svg/testing_text.html?wcmmode=disabled',
    elements: {
       
        ShelfPadding : { 
            selector : '.text-only-header__inner'
        },
        shelfBgBlue : {
        	selector : '.text-only-header__inner.theme--light-blue'
        },
        shelfBgGrad : {
        	selector : '.text-only-header__inner.theme--gradient'
        },
        shelfBgPurple : {
        	selector : '.text-only-header__inner.theme--purple'
        },
        shelfBgGold : {
        	selector : '.text-only-header__inner.theme--gold'
        },
        shelfBgRB : {
        	selector : '.text-only-header__inner.theme--royal-blue'
        },
        textMar : {
        	selector : '.text-only-header__inner .text-only-header__product-title'
        },
        textOnlyHeadertitle : {
        	//selector : '.text-only-header__inner.theme--purple .title-comp,.text-only-header__inner.theme--gradient .title-comp'
            /* For RBS */
            selector : '.text-only-header__inner.theme--royal-blue .twill-component .title.one'
        },
        textOnlyHeadertext : {
        	selector : '.text-only-header__inner.theme--purple .text-comp,.text-only-header__inner.theme--gradient .text-comp, .text-only-header__inner.theme--gradient .title-comp,.text-only-header__inner.theme--royal-blue .text-comp'
        },
        complShelfPadding : {
        	selector : '.text-only-header__compliance'
        },
        complianceText : {
        	selector : '.text-only-header__compliance .shelf-textarea'
        },
        twillTitle1 : {
        	selector : '.text-only-header__inner.theme--royal-blue .twill-component .title.one'
        },
        twillTitle2 : {
            selector : '.text-only-header__inner.theme--royal-blue .twill-component .title.two'
        },
        twillTitle : {
            selector : '.text-only-header__inner.theme--royal-blue .twill-component .title > span'
        }  

    }
}