1. 流式布局
	布局采用百分比
	缺点：
	大屏手机上容易被拉长，只有少数的手机看起来是跟设计师设计的一样的

	eg:
	http://m.ctrip.com/html5/  采用的是百分比
2. 固定宽度的做法
	早期把页面的宽度设置成320，太宽的两边留白

	缺点：
	大屏手机两边留白，并且看起来操作按钮很小，早起的淘宝就是固定宽，现在不是了，现在是rem
3. 响应式做法
	可以，但是工作量太大，维护性差
	有些博客直接一步到位，手机跟pc一套
4. 对viewport进行缩放
	据听说会让页面元素变模糊
	<meta name="viewport" content="width=320,maximum-scale=1.3,user-scalable=no">

	最大缩放比例是1.3
	那：320*1.3=416  基本plus就搞定了
5. rem可以等比适配所有屏幕
	rem是通过根元素进行适配的，网页中的根元素指的是html我们通过设置html的字体大小就可以控制rem的大小，看demo.html

	http://m.dx.com/

	或者根据media query去适配
	html {
    font-size : 20px;
}
@media only screen and (min-width: 401px){
    html {
        font-size: 25px !important;
    }
}
@media only screen and (min-width: 428px){
    html {
        font-size: 26.75px !important;
    }
}
@media only screen and (min-width: 481px){
    html {
        font-size: 30px !important; 
    }
}
@media only screen and (min-width: 569px){
    html {
        font-size: 35px !important; 
    }
}
@media only screen and (min-width: 641px){
    html {
        font-size: 40px !important; 
    }
}

