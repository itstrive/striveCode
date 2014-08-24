/*
	Date:2014-8-23
	Author:strive
	useage:
		s_slider(选择器)
			eg: s_slider('#box');
				s_slider('.box');
				s_slider('div.box');
*/
function s_slider(arg){
	document.addEventListener('DOMContentLoaded',function(){
		var aBox=document.querySelectorAll(arg);
		
		for(var i=0; i<aBox.length; i++){
			do_slider(aBox[i]);
		}
		
		function do_slider(oBox){
			var oUl=oBox.children[0];
			var aLi=oUl.children;
			var aBtn=oBox.querySelectorAll('ol li');
			
			oUl.innerHTML+=oUl.innerHTML;
			
			oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
			
			
			var W=oUl.offsetWidth/2;
			
			var translateX=0;
			
			var iNow=0;
			oUl.addEventListener('touchstart',function(ev){
				clearInterval(oUl.timer);
				var disX=ev.targetTouches[0].pageX-translateX;
				
				var downX=ev.targetTouches[0].pageX;
				
				function fnMove(ev){
					translateX=ev.targetTouches[0].pageX-disX;
					if(translateX<0){
						oUl.style.WebkitTransform='translateX('+translateX%W+'px)';
					}else{
						oUl.style.WebkitTransform='translateX('+(translateX%W-W)%W+'px)';
					}
				}
				
				function fnEnd(ev){
					oUl.removeEventListener('touchmove',fnMove,false);
					oUl.removeEventListener('touchend',fnEnd,false);
					
					if(Math.abs(ev.changedTouches[0].pageX-downX)>10){
						if(downX>ev.changedTouches[0].pageX){
							iNow++;	
							
							startMove(oUl,-iNow*aLi[0].offsetWidth);
							tab();
						}else{
							iNow--;	
							startMove(oUl,-iNow*aLi[0].offsetWidth);
							tab();
						}
					}else{
						startMove(oUl,-iNow*aLi[0].offsetWidth);	
					}	
				}
				oUl.addEventListener('touchmove',fnMove,false);
				
				oUl.addEventListener('touchend',fnEnd,false);
				ev.preventDefault();
			},false);
			
			function tab(){
				for(var i=0; i<aBtn.length; i++){
					aBtn[i].className='';
				}
				if(iNow>0){
					aBtn[iNow%aBtn.length].className='on';	
				}else{
					aBtn[(iNow%aBtn.length+aBtn.length)%aBtn.length].className='on';	
				}
			}
			
			function startMove(obj,iTarget){
				clearInterval(obj.timer);
				
				obj.timer=setInterval(function(){
					var iSpeed=(iTarget-translateX)/8;
					iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
					
					translateX+=iSpeed;
					
					if(translateX<0){
						obj.style.WebkitTransform='translateX('+translateX%W+'px)';
					}else{
						obj.style.WebkitTransform='translateX('+(translateX%W-W)%W+'px)';	
					}
				},30);
			}	
		}
	},false);	
}