/**
 *  Author: Strive
 *  Date: 2017-12-8
 *  Update: 2020-9-4
 */
(function(global){
    function remChange(){
        var d = document.documentElement;
        var winW = d.clientWidth;
        if(winW>=640){
            d.style.fontSize = '40px'
        }else{
            d.style.fontSize=20*winW/375+'px';
        }
    }
    remChange();
    global.addEventListener('resize',remChange,false);
    global.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            remChange();
        }
    })
})(window);