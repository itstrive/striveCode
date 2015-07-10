'use strict';
function ZQuery(arg){  //目的主要用来存储元素
	this.elements=[];
	
	this.domString=''; //存储dai添加的字符串元素
	
	switch(typeof arg){
		case 'function':
			domReady(arg);
			break;
		case 'string':
			if(arg.indexOf('<')!=-1){
				this.domString=arg;
			}else{
				this.elements=getEle(arg);
			
				this.length=this.elements.length;	
			}
			break;
		default:
			if(arg instanceof Array){
				this.elements=arg;
			
				this.length=this.elements.length;
			}else{
				this.elements.push(arg);
			}
			break;
	}	
}

//css
ZQuery.prototype.css=function(name,value){
	if(arguments.length==2){
		for(var i=0; i<this.elements.length; i++){
			this.elements[i].style[name]=value;
		}
	}else{
		if(typeof name=='string'){
			//获取
			return getStyle(this.elements[0],name);
		}else{
			var json=name;	
			for(var i=0; i<this.elements.length; i++){
				for(var name in json){
					this.elements[i].style[name]=json[name];
				}
			}
		}
	}
};
//attr
ZQuery.prototype.attr=function(name,value){
	if(arguments.length==2){
		for(var i=0; i<this.elements.length; i++){
			this.elements[i].setAttribute(name,value);
		}
	}else{
		if(typeof name=='string'){
			//获取
			return this.elements[0].getAttribute(name);
		}else{
			var json=name;	
			for(var i=0; i<this.elements.length; i++){
				for(var name in json){
					this.elements[i].setAttribute(name,json[name]);
				}
			}
		}
	}
};
//html
ZQuery.prototype.html=function(str){
	if(str || str==''){
		for(var i=0; i<this.elements.length; i++){
			this.elements[i].innerHTML=str;
		}
	}else{
		return this.elements[0].innerHTML;
	}
};
//val
ZQuery.prototype.val=function(str){
	if(str || str==''){
		for(var i=0; i<this.elements.length; i++){
			this.elements[i].value=str;
		}
	}else{
		return this.elements[0].value;
	}
};
//class
ZQuery.prototype.addClass=function(sClass){
	var reg=new RegExp('\\b'+sClass+'\\b');
	for(var i=0; i<this.elements.length; i++){
		if(this.elements[i].className){
			if(!reg.test(this.elements[i].className)){
				this.elements[i].className+=' '+sClass;
			}
		}else{
			this.elements[i].className=sClass;
		}
	}	
};
ZQuery.prototype.removeClass=function(sClass){
	var reg=new RegExp('\\b'+sClass+'\\b','g');
	for(var i=0; i<this.elements.length; i++){
		if(reg.test(this.elements[i].className)){
			this.elements[i].className=this.elements[i].className.replace(reg,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
		}
	}
};
//运动
ZQuery.prototype.animate=function(json,options){
	for(var i=0; i<this.elements.length; i++){
		move(this.elements[i],json,options);
	}
};
//事件
/*ZQuery.prototype.click=function(fn){
	for(var i=0; i<this.elements.length; i++){
		addEvent(this.elements[i],'click',fn);
	}
};*/
;'click dblclick mouseover mouseout mousemove mousedown mouseout contextmenu blur focus load resize scroll kedown keyup'.replace(/\w+/g,function(sEv){
	ZQuery.prototype[sEv]=function(fn){
		for(var i=0; i<this.elements.length; i++){
			addEvent(this.elements[i],sEv,fn);
		}
	};
});
ZQuery.prototype.hide=function(){
	for(var i=0; i<this.elements.length; i++){
		this.elements[i].style.display='none';
	}
};
ZQuery.prototype.show=function(){
	for(var i=0; i<this.elements.length; i++){
		this.elements[i].style.display='block';
	}
};
//index
ZQuery.prototype.index=function(){
	var obj=this.elements[this.elements.length-1];	
	var aSibling=obj.parentNode.children;
	
	for(var i=0; i<aSibling.length; i++){
		if(obj==aSibling[i])return i;
	}
};
//eq
ZQuery.prototype.eq=function(n){
	return $(this.elements[n]);
};
//get
ZQuery.prototype.get=function(n){
	return this.elements[n];
};

//其他事件
ZQuery.prototype.mouseenter=function(fn){
	for(var i=0; i<this.elements.length; i++){
		addEvent(this.elements[i],'mouseover',function(ev){
			var from=ev.fromElement || ev.relatedTarget;
			if(this.contains(from))return;
			fn && fn.apply(this,arguments);	
		});
	}	
};
ZQuery.prototype.mouseleave=function(fn){
	for(var i=0; i<this.elements.length; i++){
		addEvent(this.elements[i],'mouseout',function(ev){
			var to=ev.toElement || ev.relatedTarget;
			if(this.contains(to))return;
			fn && fn.apply(this,arguments);	
		});
	}	
};
ZQuery.prototype.hover=function(fnOver,fnOut){
	this.mouseenter(fnOver);
	this.mouseleave(fnOut);
};
ZQuery.prototype.toggle=function(){
	var arg=arguments;
	var _this=this;
	
	for(var i=0; i<this.elements.length; i++){
		(function(count){
			addEvent(_this.elements[i],'click',function(){
				var fn=arg[count%arg.length];
				
				fn && fn.apply(this,arguments);
				
				count++;	
			});
		})(0);
	}
};

//DOM
ZQuery.prototype.appendTo=function(str){
	var aParent=getEle(str);	
	for(var i=0; i<aParent.length; i++){
		aParent[i].insertAdjacentHTML('beforeEnd',this.domString);
	}
};
ZQuery.prototype.prependTo=function(str){
	var aParent=getEle(str);	
	for(var i=0; i<aParent.length; i++){
		aParent[i].insertAdjacentHTML('afterBegin',this.domString);
	}
};
ZQuery.prototype.insertAfter=function(str){
	var aParent=getEle(str);	
	for(var i=0; i<aParent.length; i++){
		aParent[i].insertAdjacentHTML('afterEnd',this.domString);
	}
};
ZQuery.prototype.insertBefore=function(str){
	var aParent=getEle(str);	
	for(var i=0; i<aParent.length; i++){
		aParent[i].insertAdjacentHTML('beforeBegin',this.domString);
	}
};
ZQuery.prototype.remove=function(){
	for(var i=0; i<this.elements.length; i++){
		this.elements[i].parentNode.removeChild(this.elements[i]);
	}	
};



function $(arg){
	return new ZQuery(arg);	
}
//交互
$.ajax=ZQuery.ajax=function(json){
	ajax(json);
};
$.getScript=ZQuery.getScript=function(json){
	jsonp(json);
};

//find
ZQuery.prototype.find=function(str){
	var aEle=getEle(str,this.elements);
	
	return $(aEle);
};
ZQuery.prototype.each=function(fn){
	for(var i=0; i<this.elements.length; i++){
		fn.call(this.elements[i], i, this.elements[i]);
	}
};

//插件
/*ZQuery.prototype.toRed=function(){
	this.css('background','red');	
};*/
$.fn=ZQuery.prototype;
$.fn.extend=ZQuery.prototype.extend=function(json){
	for(var name in json){
		ZQuery.prototype[name]=json[name];
	}
};




function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,function(ev){
			var oEvent=ev || event;
			if(fn.call(obj,oEvent)==false){
				oEvent.cancelBubble=true;
				oEvent.preventDefault();
			}	
		},false);
	}else{
		obj.attachEvent('on'+sEv,function(ev){
			var oEvent=ev || event;
			
			if(fn.call(obj,oEvent)==false){
				oEvent.cancelBubble=true;
				return false;
			}	
		});
	}
}
function json2url(json){
	json.t=Math.random();
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
	}
	
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			clearTimeout(timer);
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
				json.success && json.success(oAjax.responseText);
			}else{
				json.error && json.error(oAjax.status);
			}
		}
	};
	
	//网络超时
	timer=setTimeout(function(){
		alert('网络有问题');
		oAjax.onreadystatechange=null;
	},json.timeout);
}
function jsonp(json){
	json=json || {};
	if(!json.url)return;
	json.data=json.data || {};
	json.cbName=json.cbName || 'cb';
	
	var fnName='jsonp_'+Math.random();
	fnName=fnName.replace('.','');
	
	window[fnName]=function(data){
		json.success && json.success(data);
		
		//delete
		oHead.removeChild(oS);
		window[fnName]=null;
	};
	
	
	json.data[json.cbName]=fnName;
	
	var oS=document.createElement('script');
	oS.src=json.url+'?'+json2url(json.data);
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);
}


function getStyle(obj,name){
	return (obj.currentStyle || getComputedStyle(obj,false))[name]
}
function move(obj,json,options){
	options=options || {};
	options.duration=options.duration || 600;
	options.easisng=options.easing || 'linear';
	
	var count=Math.floor(options.duration/30);
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
					break;
				case 'top':
					start[name]=obj.offsetTop;
					break;
				case 'opacity':
					start[name]=1;
					break;
				//....
			}
		}
		dis[name]=json[name]-start[name];
	}
	var n=0;
		
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		
		for(var name in json){
			
			switch(options.easisng){
				case 'linear':
					var a=n/count;
					var cur=start[name]+dis[name]*a;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*a*a*a;
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-a*a*a);
					break;
			}
			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				
				obj.style[name]=cur+'px';
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
			options.complete && options.complete.call(obj);
		}
	},30);
}


function domReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				fn && fn();
			}	
		});
	}
}
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var arr=[];
		var reg=new RegExp('\\b'+sClass+'\\b');
		var aEle=oParent.getElementsByTagName('*');
		for(var i=0; i<aEle.length; i++){
			if(reg.test(aEle[i].className)){
				arr.push(aEle[i]);
			}
		}
		return arr;
	}
}
function getByStr(aParent,str){
	var aChild=[];
	for(var i=0; i<aParent.length; i++){
		switch(str.charAt(0)){
			case '#':
				var obj=document.getElementById(str.substring(1));
				aChild.push(obj);
				break;
			case '.':
				var aEle=getByClass(aParent[i],str.substring(1));
				for(var j=0; j<aEle.length; j++){
					aChild.push(aEle[j]);
				}
				break;
			default:
				if(/\w+\.\w+/.test(str)){  //li.red
					var aStr=str.split('.');
					var aEle=aParent[i].getElementsByTagName(aStr[0]);
					var reg=new RegExp('\\b'+aStr[1]+'\\b');
					for(var j=0; j<aEle.length; j++){
						if(reg.test(aEle[j].className)){
							aChild.push(aEle[j]);
						}
					}
				}else if(/\w+\[\w+=\w+\]/.test(str)){  //input[type=button]
					var aStr=str.split(/\[|=|\]/);
					var aEle=aParent[i].getElementsByTagName(aStr[0]);
					for(var j=0; j<aEle.length; j++){
						if(aEle[j].getAttribute(aStr[1])==aStr[2]){
							aChild.push(aEle[j]);
						}
					}
				}else if(/\w+:\w+(\(\d+\))?/.test(str)){ //li:first li:eq(3)
					var aStr=str.split(/:|\(|\)/);
					var aEle=aParent[i].getElementsByTagName(aStr[0]);
					switch(aStr[1]){
						case 'first':
							aChild.push(aEle[0]);
							break;
						case 'last':
							aChild.push(aEle[aEle.length-1]);
							break;
						case 'eq':
							aChild.push(aEle[aStr[2]]);
							break;
						case 'lt':
							for(var j=0; j<aStr[2]; j++){
								aChild.push(aEle[j]);
							}
							break;
						case 'gt':
							for(var j=parseInt(aStr[2])+1; j<aEle.length; j++){
								aChild.push(aEle[j]);
							}
							break;
						case 'odd':
							for(var j=1; j<aEle.length; j+=2){
								aChild.push(aEle[j]);
							}
							break;
						case 'even':
							for(var j=0; j<aEle.length; j+=2){
								aChild.push(aEle[j]);
							}
							break;
					}
				}else{
					var aEle=aParent[i].getElementsByTagName(str);
					for(var j=0; j<aEle.length; j++){
						aChild.push(aEle[j]);
					}	
				}
				break;
		}	
	}
	return aChild;
}
function getEle(str,aParent){
	var arr=str.replace(/^\s+|\s+$/g,'').split(/\s+/);
	
	var aParent=aParent || [document];
	var aChild=[];
	for(var i=0; i<arr.length; i++){
		aChild=getByStr(aParent,arr[i]);
		
		aParent=aChild;
	}
	return aChild;
}












