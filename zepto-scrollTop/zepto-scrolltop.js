/**
 * Created by strive-智能社 on 2017/2/23.
 */
;(function(_){
    _.scrollTop=function(json){
        json=json || {};
        json.duration=json.duration || 500;
        json.target=json.target || 0;

        var body=document.body;
        clearInterval(body.timer);
        var count=Math.floor(json.duration/16);
        var start=document.body.scrollTop;
        var dis=json.target-start;

        var n=0;
        body.timer=setInterval(function(){
            n++;

            var a=1-n/count;
            var cur=start+dis*(1-Math.pow(a,3));

            document.body.scrollTop=cur;

            if(n==count){
                clearInterval(body.timer);
            }
        },16);
    };
})($)





































