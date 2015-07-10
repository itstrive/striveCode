/*
	@Author:xxx
	@Date:
	@Licence:MIT
*/
;(function($){
	$.fn.tab=function(json){
		json=json || {};
		json.sEvent=json.sEvent || 'click';
		json.autoPlay=json.autoPlay || false;
		json.playTime=json.playTime || 3000;

		this.each(function(index,element){
			var iNow=0;
			var timer=null;
			
			var aBtn=$(this).find('input');
			var aDiv=$(this).find('div');	
			aBtn[json.sEvent](function(){
				iNow=$(this).index();
				tab();
			});
			
			function tab(){
				aBtn.removeClass('on');	
				aBtn.eq(iNow).addClass('on');
				aDiv.hide();
				aDiv.eq(iNow).show();	
			}
			
			//编写自动播放
			if(!json.autoPlay)return;
			function next(){
				iNow++;
				if(iNow==aBtn.length)iNow=0;
				tab();	
			}
			timer=setInterval(next,json.playTime);
			
			$(this).mouseover(function(){
				clearInterval(timer);	
			});
			$(this).mouseout(function(){
				timer=setInterval(next,json.playTime);	
			});
		});
	};
})($);