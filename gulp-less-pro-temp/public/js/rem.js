/**
 *  Author: Strive
 *  Date: 2017-12-8
 */
(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/375+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);