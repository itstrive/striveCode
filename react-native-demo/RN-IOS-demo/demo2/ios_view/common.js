'use strict';
const request={};

request.get=function(url,fnSucc,fnFail){
	var xhr=new XMLHttpRequest();
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onload=function(){
		if(xhr.status==200){
			fnSucc && fnSucc(xhr.responseText);
		}
	};
}

export const config={
	Jokeurl:'https://bird.ioliu.cn/joke/rand',
	JokeTextUrl:'https://bird.ioliu.cn/joke/rand?type=text'
};
export default request;
