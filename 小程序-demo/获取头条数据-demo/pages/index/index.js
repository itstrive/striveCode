//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    newData:[]
  },
  get(){
    app.showLoading(); //显示loading

    var _this=this;
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data: {
        type:'top',
        key:'d54a7ae78f4852d38a3474e87e743a1a'
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        app.hideLoading(); //隐藏loading
        // success
        console.log(res);
        _this.setData({
          newData:res.data.result.data
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
