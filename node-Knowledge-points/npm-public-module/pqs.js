exports.pqs=function(str){
	if(str.indexOf('&')==-1)return;
	var arr=str.split('&');
	var json={};
	for(var i=0; i<arr.length; i++){
		var arr2=arr[i].split('=');
		json[arr2[0]]=arr2[1];
	}
	return json;
};