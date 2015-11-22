require.config({
	baseUrl:'./', //相对的目录
	paths:{
		jquery:[ //优先访问第一个，第一个不能访问，访问第二个
			'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min',
			'lib/jquery-1.7.2'
		]	
	}	
});

require(['jquery'],function($){ //require() requirejs() 都可以
	$('body').css('background','red');
});