TabBarIOS组件的使用：

>TabBarIOS是ios平台下的导航栏

使用：

```jsx
<TabBarIOS
	barTintColor="#369"   //导航栏的背景颜色
	tintColor="#fff"	//当前被选中的标签图标的颜色
	unselectedItemTintColor="yellow"	//当前没有被选中的标签图标的颜色
>
	里面放 TarBarIOS.item
</TabBarIOS>
```

TabBarIOS.Item

>嵌入到TabBarIOS中使用

用法:

```jsx
<TabBarIOS>
	<TabBarIOS.Item
    	title="主页"	//在图标下面显示的文字，若定义了systemIcon，此属性被忽略
      	icon={{uri:base64/img-url}}	//给当前标签指定一个定义图标，若定义了systemIcon,此属性被忽略
      	systemIcon="more"	//一些预定义的系统图标。注意如果你使用了此属性，标题和自定义图标都会被覆盖为系统定义的值。
      	selectedIcon="{{uri:base64/img-url, scale:2}}"	//当标签被选中的时候显示的自定义图标
      	selected={true}	//是否显示子元素，也就是导航切换，该显示谁
      	badge={5}	//在图标右上角显示红色气泡
      	onPress={fn}	//事件
    >
  	</TabBarIOS.Item>
</TabBarIOS>
```

---

react-native-vector-icons

> 有很多图标可以选择，比系统带的TabBarIOS.Item要强一点

使用:

```bash
//1. 安装
npm i react-native-vector-icons --save-dev
//2. 安装rnpm	rnpm的作用主要是建立rn和组件的联系
npm i rnpm -g
//3. 关联
rnpm link react-native-vector-icons
```

代码引入:

```jsx
import Icon from 'react-native-vector-icons/Ionicons';

<Icon name="ios-person" size={30} color="#4F8EF7" />	//这是最简单的引入
```

放入导航中:

> 可以拿 <Icon.TabBarItem> 替换之前的 <TabBarIOS.Item> 

```jsx
<Icon.TabBarItem
  title="Home"
  iconName="ios-home-outline"
  selectedIconName="ios-home"
  selected={}
  onPress={}
>
	<View style={styles.tabContent}><Text>Home Tab</Text></View>
</Icon.TabBarItem>
```



具体可以去: http://ionicons.com/  里面查看你需要的icons

