/*点击页面展示一个a*/

window.onload=function(){
	function show(arg1,arg2){
		alert(arg1+arg2);
	}	
	
	document.onclick=function(){
		show(12,6);	
	}
};
/*点击页面展示一个a*/

(function(){
	alert(1);	
})();