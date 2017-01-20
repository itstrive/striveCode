//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
      src:'',
      author:'',
      poster:'',
      name:'',
      musicList:[]
  },
  fetchSongList(){
      var _this=this;
      wx.request({
        url: 'https://bird.ioliu.cn/netease',
        data: {
            playlist_id:222222
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
          //console.log(res.data.data.result.tracks);
          _this.setData({
              musicList:res.data.data.result.tracks
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
  onReady(){
      this.oA = wx.createAudioContext('audio');
      this.fetchSongList();
  },
  playSong(ev){
      //console.log(ev.target.dataset.url);
      this.setData({
          src:ev.target.dataset.url,
          author:ev.target.dataset.author,
          poster:ev.target.dataset.pic,
          name:ev.target.dataset.name
      });
      this.oA.play();
  }
})
