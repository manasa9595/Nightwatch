module.exports = {
	//url: 'https://rbs-retail-test-61.adobecqms.net/responsive_personal/hero-shelf-demo.html', //rbs url
	//url: 'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-premier/heroshelf1.html', //natwest premier url
	url:"https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-personal/regression/final_reg_2.html",

	elements : {
		imgWrapClsNW:{
			selector:".heroimagewrapper.natwest"
		},
		ImgCls:{
			selector:".heroimagecontainer .image-wrapper img"
		},
		imgWrapperNW:{
			selector:".heroimagewrapper.natwest .heroimagecontainer .image-wrapper"
		},
		ImgContentCls:{
			selector:".heroimagewrapper.natwest .heroimagecontainer .hero-image-content"
		},
		ImgCompGeneric:{
			selector:".heroimagewrapper.natwest .heroimagecontainer .image-wrapper .comp-img-generic"
		},
		heroTitBlock:{
			selector:".heroimagewrapper.natwest .heroimagecontainer .hero-image-content .hero-title-block"
		},
		heroTitText:{
			selector:".heroimagewrapper.natwest .heroimagecontainer .hero-image-content .hero-title-block .titleWrapper h1"
		},
		heroTitNwPad:{
			selector:".heroimagewrapper.natwest .heroimagecontainer .hero-image-content .hero-title-block .titleWrapper"
		},
		prodTitCls:{
			selector:".heroimagewrapper.natwest .heroimagecontainer .hero-title-block .product-title"
		},
		prodTitText:{
			selector:".heroimagewrapper.natwest .heroimagecontainer .hero-image-content .hero-title-block .product-title .title-comp"
		},
		aprTitle:{
			selector:".apr-container .apr-title .title-comp"
		},
		aprMargin:{
			selector:".apr-container"
		},
		aprTitleTxt:{
			selector:".apr-container .apr-title h1, .apr-container .apr-title h2"
		},
		aprLegalCls:{
			selector:".apr-container .legal-copy"
		},
		//natwest illustration mode(selectors)
		illWrapper:{
			selector:".nwhero-illustration-wrapper"
		},
		illImage:{
			selector:".nwhero-illustration-wrapper .image-wrapper"
		},
		illHeroTitBlock:{
			selector:".nwhero-illustration-wrapper .hero-title-block"
		},
		illProdTit:{
			selector:".nwhero-illustration-wrapper .hero-title-block .product-title"
		},
		illProdTitText:{
			selector:".nwhero-illustration-wrapper .hero-title-block .product-title .title-comp"
		},
		illHeroTitBloh1:{
			selector:".nwhero-illustration-wrapper .hero-title-block .titleWrapper .title-comp"
		},
		illCompImg:{
			selector:".nwhero-illustration-wrapper .image-wrapper .comp-img-generic"
		},
		illHeroTitH1:{
			selector:".nwhero-illustration-wrapper .hero-title-block .titleWrapper"
		},
		//RBS selectors(photography-mode)
		imgWrapperRBS:{
			selector:".heroimagewrapper.rbs"
		},
		heroImgCont:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content"
		},
		prodTitRbs:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .product-title"
		},
		prodTitTxtCls:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .product-title h4"
		},
		twillBlockCls:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block"
		},
		twillBlockTitle:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block h1"
		},
		twillBloTitleAll:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block .title"
		},
		twillBloTitSpan:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block .title span"
		},
		twillBloTitOne:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block .title.one"
		},
		twillBlockTitTwo:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block .title.two"
		},
		twillBlockTitThree:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block .title.three"
		},
		twillBlockSpanTit1:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block .title .title1"
		},
		twillBlockSpanTit2:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block .title .title2"
		},
		heroImg:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .image-wrapper img"
		},
		heroImgWrapper:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .image-wrapper"
		},
		//rbs selectors(illustration-mode)
		illWrapRbs:{
			selector:".container-fluid.rbshero-illustration-wrapper"
		},
		illProdTitMar:{
			selector:".rbshero-illustration-wrapper .hero-image-content .product-title"
		},
		illProdTitRbsh4:{
			selector:".rbshero-illustration-wrapper .hero-image-content .product-title h4"
		},
		illHeroTwillMar:{
			selector:".rbshero-illustration-wrapper .hero-image-content .hero-twill-block"
		},
		illHeroRbsTitle:{
			selector:".rbshero-illustration-wrapper .hero-image-content .hero-twill-block .title"
		},
		illHeroTitOne:{
			selector:".rbshero-illustration-wrapper .hero-image-content .hero-twill-block .title.one"
		},
		illHeroTitTwo:{
			selector:".rbshero-illustration-wrapper .hero-image-content .hero-twill-block .title.two"
		},
		illSpanTit1:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block .title .title1"
		},
		illSpan:{
			selector:".heroimagewrapper.rbs .heroimagecontainer .hero-image-content .hero-twill-block .title > span"
		},
		illSpanTitThree:{
			selector:".rbshero-illustration-wrapper .hero-image-content .hero-twill-block .title.three"
		},
		illSpanTitle1:{
			selector:".rbshero-illustration-wrapper .hero-image-content .hero-twill-block .title .title1"
		},
		illSpanComTit:{
			selector:".rbshero-illustration-wrapper .hero-image-content .hero-twill-block .title > span"
		},
		illImgHeight:{
			selector:".rbshero-illustration-wrapper .image-wrapper"
		},
		illImgCls:{
			selector:".rbshero-illustration-wrapper .image-wrapper img"
		}
	}

};