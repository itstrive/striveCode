Page({
  data:{
    nowDate:'',
    calendarData:''
  },
  fetchCalendar(day){
    var _this=this;
    wx.request({
      url: 'http://v.juhe.cn/calendar/day',
      data: {
        date:day,
        key:'d7639a113e63ffe9c61d7ceb3df1200e'
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
        _this.setData({
          calendarData:res.data.result.data
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  formatDate(str){
    var arr=str.match(/\d+/g);
    return arr[0]+'-'+parseInt(arr[1],10)+'-'+parseInt(arr[2],10);
  },
  changeDate(ev){
    //console.log(ev.detail.value);
    this.setData({
      nowDate:ev.detail.value
    });

    var d=this.formatDate(ev.detail.value);
    //console.log(d);
    this.fetchCalendar(d);
  }
});
