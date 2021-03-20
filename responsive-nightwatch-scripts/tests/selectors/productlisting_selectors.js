module.exports = {
    url: 'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-personal/productlisting_multiple.html',
	elements : {
		singleImgwidthSel :{
			selector : '.productcomp-single-shelf .product-comp.single-bgcolor .image-wrapper'
		},
		singleTitleH4Sel :{
			selector : '.product-comp .single-content .title-wrapper h4'
		},
		singleContentTextSel :{
			selector : '.product-comp .single-content .text-wrapper h4'
		},
		singleContentSel :{
			selector : '.product-comp .single-content .comp-rich-text p'
		},
		singleContentH3Sel :{
			selector : '.product-comp .single-content .comp-rich-text h3'
		},
		singleConRTAWraperSel :{
			selector : '.product-comp .single-content .comp-rich-text'
		},
		singleContentLiCircleSel :{
			selector : '.product-comp .single-content .comp-rich-text ul li'
		},
		complText : {
			selector : '.productcomp-single-shelf .product-comp .single-content .singlelisting__compliance .shelf-textarea'
		},
		complTextML : {
			selector : '.productcomp-single-shelf .product-comp .single-content .singlelisting__compliance .shelf-textarea'
		},
		complPadding : {
			selector : '.productcomp-single-shelf .product-comp .single-content .singlelisting__compliance'
		},
		complImage : {
			selector : '.productcomp-single-shelf .product-comp .single-content .singlelisting__compliance .shelf-textarea'
		},
		singleContentCTAbSel :{
			selector : '.productcomp-multiple-shelf .multi-product-comp .product-comp .multi-content .cta-wrapper'
		},
		singleContentCTASel :{
			selector : '.product-comp .single-content .cta.cta-primary'
		},
		singleContentLiSquareSel :{
			selector : '.comp-rich-text span.list-item-square'
		},		
		buttonTextSel :{
			selector : '.cta.cta-primary .cta-text'
		},		
		productTitleH2Sel :{
			selector : '.shelf-titleWrapper h2'
		},
		productShelfTextSel :{
			selector : '.shelf-textWrapper'
		},
		productTitleLCSel :{
			selector : '.product-content .text-comp'
		},
		productTitleImgSel :{
			selector : '.shelf-imageWrapper'
		},
		/*Start: For SingleProduct shelf*/
		productSingleShelfSel :	{
			selector : '.productcomp-single-shelf'
		},
		proSingleShelfProCompSel :	{
			selector : '.productcomp-single-shelf .product-comp'
		},
		/*End: For SingleProduct shelf*/
		/*Start: For MultiProduct shelf*/
		
		multiproductShelfSel :	{
			selector : '.productcomp-multiple-shelf'
		},
		multiproductcompSel : {
			selector : '.productcomp-multiple-shelf .multi-product-comp'
		},

		multiproductImg :	{
			selector : '.productcomp-multiple-shelf .multi-product-comp .product-comp .multi-img .image-wrapper'
		},

		multiproSingleShelfProCompSel :	{
			selector : '.productcomp-multiple-shelf .product-comp'
		},
		/*End: For MultiProduct shelf*/
		imageBg1Sel : {
			selector : '.productcomp-multiple-shelf .multi-product-comp .yellow .image-wrapper'
		},
		imageBg2Sel : {
			selector : '.productcomp-multiple-shelf .multi-product-comp .blue .image-wrapper'
		},
		imageBg3Sel : {
			selector : '.productcomp-multiple-shelf .multi-product-comp .red .image-wrapper'
		},
		imageBg4Sel : {
			selector : '.productcomp-multiple-shelf .multi-product-comp .purple .image-wrapper'
		},
		imageBgSingleSel : {
			selector : '.productcomp-single-shelf .product-comp.single-bgcolor .image-wrapper'
		}

  }
};
