function json2url(json){
	json.t=Math.random(); //解决缓存问题
	
	var arr=[];
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	return arr.join('&');
}
function ajax(json){
	json=json || {};
	if(!json.url)return;
	json.data=json.data || {};
	json.type=json.type || 'get';
	json.timeout=json.timeout || 3000;
	json.jsonp=json.jsonp || 'cb';

	
	
	
	var timer=null;
	
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	switch(json.type.toLowerCase()){
		case 'get':
			oAjax.open('GET',json.url+'?'+json2url(json.data),true);
			oAjax.send();
			break;
		case 'post':
			oAjax.open('POST',json.url,true);
			oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			oAjax.send(json2url(json.data));
			break;
		case 'jsonp':
			var fnName='jsonp_'+Math.random();
			fnName=fnName.replace('.','');
			window[fnName]=function(data){
				json.success && json.success(data);
				
				//删除
				oHead.removeChild(oS);
			};
			
			
			json.data[json.jsonp]=fnName;
			
			
			var oS=document.createElement('script');
			oS.src=json.url+'?'+json2url(json.data);
			var oHead=document.getElementsByTagName('head')[0];
			oHead.appendChild(oS);
			break;
	}
	
	//加载
	json.fnLoading && json.fnLoading();
	
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			
			//完成
			json.complete && json.complete();
			
			clearTimeout(timer);
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
				if(json.dataType=='xml'){
					json.success && json.success(oAjax.responseXML);
				}else{
					json.success && json.success(oAjax.responseText);
				}
			}else{
				json.error && json.error(oAjax.status);
			}
		}
	};
	
	if(json.type=='jsonp')return;
	timer=setTimeout(function(){
		alert('亲，您的网络不给力');
		oAjax.onreadystatechange=null;
	},json.timeout);
}









