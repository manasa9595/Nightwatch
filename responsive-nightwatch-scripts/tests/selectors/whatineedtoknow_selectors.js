module.exports = {
	url: 'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-business/test-page.html',
	elements: {
      title:{
          selector:'.what_need_to_know_shelf .slider-col .title-wrapper'  
      },
      text:{
          selector:'.what_need_to_know_shelf .slider-col .text-wrapper' 
      },
      image:{
         selector:'.what_need_to_know_shelf .slider-col .image-wrapper'  
      },
      imageBlock:{
        selector:'.what_need_to_know_shelf .slider-col.tile-block'
      },
      contentBlock:{
        selector:'.what_need_to_know_shelf .slider-col .contentheight'
      },
      mainBlock:{
          selector:'.what_need_to_know_shelf .row.responsiveSlider' 
      },
      mainTitle:{
          selector:'.what_need_to_know_shelf .slidertitle'
      },
      ctaComp:{
          selector:'.what_need_to_know_shelf .slider-col .cta-wrapper' 
      },
      dotClass:{
           selector:'.what_need_to_know_shelf .row.responsiveSlider ul.slick-dots'
       },
      dotClassbef:{
           selector:'.what_need_to_know_shelf .row.responsiveSlider ul.slick-dots li button:before'
       },
      nextClass:{
          selector:'.what_need_to_know_shelf .row.responsiveSlider .slick-next'
      },
      imgCheck:{
          selector:'.what_need_to_know_shelf .image-wrapper .comp-img-generic img'
      }
     }
};