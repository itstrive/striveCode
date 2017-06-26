> 这里大体做个基本记录，主要以官方doc为主

#### React Native的API:

1. ##### NetInfo

   > 获取用户的网络状况
   >
   > android需要在 /android/app/src/main/AndroidManifest.xml 文件中加上:
   >
   > <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>

   ```javascript
   //使用
   import {NetInfo} from 'react-native'

   NetInfo.fetch().done((reach) => {
   	console.log(reach);  //WIFI  NONE 
   });
   ```

   具体: http://reactnative.cn/docs/0.45/netinfo.html#content

2. ##### Linking

   > 在app里面打开其他应用(网页、其他app)

   ```javascript
   //使用
   import {Linking} from 'react-native'

   let url = 'http://www.baidu.com'
   	Linking.canOpenURL(url).then(supported => {
       if (!supported) {  //检测是否支持
       	console.log('Can\'t handle url: ' + url);
       } else {
       	return Linking.openURL(url);  //支持直接打开
       }
   }).catch(err => console.error('An error occurred', err));
   ```

3. ##### PixelRatio

   > PixelRatio.get()  获取设备的像素密度

   ```
   //比如制作1像素边框
   1/PixelRatio.get()
   ```

4. ##### BackHandler

   > 手机回退事件

   ```
   BackHandler.addEventListener('hardwareBackPress', function() {
   	alert('点击后退了');
   	return true;
   });

   //http://reactnative.cn/docs/0.45/backhandler.html#content
   ```

5. ##### ClipBoard

   > 往剪切板里面读写内容

   ```javascript
   fnClipboard = async() => {
       Clipboard.setString('Hello World' + Date.now());
       try {
         var content = await Clipboard.getString();
         alert(content)
       } catch (e) {
         this.setState({
           content: e.message
         });
       }
     }
   ```

6. ##### Vibration

   > 设备震动
   >
   > android端需要在 AndroidManifest.xml中添加
   >
   > <uses-permission android:name="android.permission.VIBRATE"/>

   ```javascript
   Vibration.vibrate([0,500,1000,500]) //意思为，一上来震动500ms，然后停1000ms然后震动500
   Vibration.vibrate([500],true)  //第二个参数true，意味着，重复，就是一直震动

   Vibration.cancel();	//取消震动
   ```

7. ##### ToastAndroid

   > 在Android端显示一个消息提示

   ```javascript
   ToastAndroid.show('这里是消息提示', ToastAndroid.SHORT);
   ToastAndroid.showWithGravity('这里是消息提示', ToastAndroid.SHORT, ToastAndroid.CENTER);
   ```

8. ##### TimePickerAndroid

   > 打开android时间选择器对话框

   ```jsx
   import {TimePickerAndroid} from 'react-native'

   openTimePicker = async() => {
       //TODO
       try {
         const {
           action,
           hour,
           minute
         } = await TimePickerAndroid.open({
           hour: 14,
           minute: 0,
           is24Hour: false, // 会显示为'2 PM'
         });
         if (action !== TimePickerAndroid.dismissedAction) {
           // 这里开始可以处理用户选好的时分两个参数：hour (0-23), minute (0-59)
           alert(`${hour}:${minute}`);
         }
       } catch ({
         code,
         message
       }) {
         console.warn('Cannot open time picker', message);
       }
     }
     
   <View>
   	<Button onPress={this.openTimePicker} title="打开时间选择器" />
   </View>
   ```

9. ##### DatePickerAndroid

   > 打开android日历选择器对话框

   ```jsx
   import {DatePickerAndroid} from 'react-native'

   openDatePicker = async() => {
       try {
         const {
           action,
           year,
           month,
           day
         } = await DatePickerAndroid.open({
           // 要设置默认值为今天的话，使用`new Date()`即可。
           // 下面显示的会是2020年5月25日。月份是从0开始算的。
           date: new Date(2020, 4, 25)
         });
         if (action !== DatePickerAndroid.dismissedAction) {
           // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
           alert(`${year}-${month+1}-${day}`);
         }
       } catch ({
         code,
         message
       }) {
         console.warn('Cannot open date picker', message);
       }
     }
     
   <View>
   	<Button title="打开日历" onPress={this.openDatePicker} />
   </View>
   ```

10. ##### Dimensions

    > 获取设备屏幕的宽高

    ```jsx
    var {
    	height,
    	width
    } = Dimensions.get('window');

    console.log(height, width);
    ```

11. ##### ActivityIndicator

    > 显示一个圆形的loading提示符号

    ```jsx
    // animating为true则显示
    <ActivityIndicator size="large" animating={this.state.loading} />
    ```

12. ##### Stylesheet

    > 这个恐怕都见过，写样式的地方，抽离样式用的

    ```jsx
    var styles = StyleSheet.create({
      container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
      },
      title: {
        fontSize: 19,
        fontWeight: 'bold',
      },
      activeTitle: {
        color: 'red',
      },
    });

    <View style={styles.container}>
      <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
    </View>
    ```

13. ##### Share

    > 打开一个对话框，共享文本内容

    ```jsx
    Share.share({
      message: "分享一个有用的网址",
      url: 'http://facebook.github.io/react-native/',
      title: 'strive的分享'
    }, {
      dialogTitle: "strive分享的东东",
      tintColor: 'green'
    }).then((result) => {

    }).catch((error) => {

    })
    ```

14. ##### 组件身上自带的方法(NativeMethodsMixin)

    ```jsx
    setTimeout(() => {
      this.refs.t1.measure((x, y, width, height) => {
      	alert(`x:${x}, y:${y}, width:${width}, height:${height}`)
      });

      this.refs.textinput1.focus();
    })

    <Text ref="t1">{this.state.msg}</Text>
    <TextInput ref="textinput1" />
    ```

    参考链接: http://reactnative.cn/docs/0.45/nativemethodsmixin.html#content

15. geolocation

    > 地理信息
    >
    > android需要在AndroidManifest.xml加入:
    >
    > <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />