(function(window){
  if(window.ui){
    return;
  }


	var ui=window.ui={};

	//高亮字符串
	ui.hightLightStr=function(str,query){
	  var query=query.toUpperCase(),
	      tempStr=str.toUpperCase(),
	      startIndex=tempStr.indexOf(query),
	      endIndex=startIndex+query.length;

	  if(startIndex==-1){
	    return str;
	  }
	  return str.substring(0,startIndex)+'<span class="ui-hightlight">'+str.substring(startIndex,endIndex)+'</span>'+str.substring(endIndex);
	};

})(window);