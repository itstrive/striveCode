EventSource 服务器推送消息给客户端，之前可以用websocket可以实现

简称: SSE (Server Sent Event) 

它不像websocket是双向通信，**SSE是单向的**，可以认为，只要客户端与服务器建立一次连接，后期服务器可以实时的向服务器推送数据

#### 客户端API

使用:

```javascript
let es=new EventSource(url)
```

与服务器建立连接成功会触发open事件

```javascript
es.onopen=function(){
  //...
}
```

客户端接收服务器发来的数据，会触发message事件:

```javascript
es.onmessage=function(event){
  //event.data   后端发过来的数据
};
```

通信错误(比如突然中断), 会触发error事件

```javascript
es.onerror=function(){
  //...
};
```

close方法可以关闭SSE的连接:

```javascript
es.close()
```

#### 服务器端

服务器向浏览器发送的SSE数据，需要包含以下HTTP头信息

```
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
```

向前台发送数据:

```
data: 数据一\n
data: 数据二\n\n
```

---

可以看本目录里面的 client.html和server.js

可以参考: http://www.ruanyifeng.com/blog/2017/05/server-sent_events.html