module.exports = {
   elements: {
      title:{
          selector:'.what_need_to_know_shelf .slider-col .title-wrapper'  
      }
  },
  commands:[{
    multiloop:function(client,selector,props,size){
        let scr=size;
                client.elements('css selector',selector,function(result){
                    titleCheck(result,client,selector,props,scr);
                });
    },
    singleElem:function(client,selector,props,size){
        var sizeLen = Object.keys(props).length;
        for(var i=0;i<sizeLen;i++){
            let currentSize=Object.keys(props)[i];
            client.getCssProperty(selector, currentSize, function(result) {
                this.verify.equal(result.value, props[currentSize],"Property "+currentSize+" equals to "+props[currentSize]);
            });
        }
    },
    pseudoSingleElem: function(client,cssPath, pseudo, props){
      var sizeLen = Object.keys(props).length;
      for(var i=0;i<sizeLen;i++){
          let currentProp=Object.keys(props)[i];
          client.pseudoElement(cssPath,pseudo,currentProp,props[currentProp]);
      }
    }
  }]    
};
var titleCheck=function(res,client,sel,props,scr){
     var sizeLen = Object.keys(props).length,keys=Object.keys(props);
    res.value.forEach(function(element,index){
           for(key in props){
           let currentVal=props[key],test = key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal);
            });
          }
    });
};