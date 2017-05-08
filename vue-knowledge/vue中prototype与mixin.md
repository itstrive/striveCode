这篇文章来源于上午与国外朋友在vue社区的争论，有个朋友问了一个问题，说:

Vue.prototype.xx=xx  这样书写代码，是否会影响性能？

答案是: 肯定影响，建议用 mixin，官方也推荐。

遂之，记录此文。

比如，我有一个模块(插件)，在各个vue组件里面，都需要用到。怎么办？

当然，之前有人发过一篇文章(记得在知乎里面看到过，刚找了下，没找到)

拿moment举例来说:

#### 第一种办法:

moment.js的代码如下:

```javascript
import moment from 'moment'

export default {
	formatDisplayDate: function(dateValue) {
		const formattedDate = moment(dateValue).format('DD/MM/YYYY')

		return formattedDate
	},

	formatInputDate: function(dateValue) {
		const formattedDate = moment(dateValue).format('YYYY-MM-DD')

		return formattedDate
	}
}
```

在main.js(入口文件):

```javascript
import moment from './moment'

Vue.prototype.$dateFormat = moment.formatDisplayDate;
Vue.prototype.$dateFormat2 = moment.formatInputDate;
```

这样在任何vue文件(组件)里面可以方便的使用:

```javascript
mounted(){
	this.time=this.$dateFormat(this.time);
	this.time2=this.$dateFormat2(this.time2);
}
```

#### 第二种办法:

moment.js代码如下:

```javascript
import Vue from 'vue'
import moment from 'moment'

var myMixin = {
  methods: {
    formatDisplayDate: function(dateValue) {
      const formattedDate = moment(dateValue).format('DD/MM/YYYY')

      return formattedDate
    },

    formatDisplayDate2: function(dateValue) {
      const formattedDate = moment(dateValue).format('YYYY-MM-DD')

      return formattedDate
    }
  }
}

Vue.mixin(myMixin);
```

在main.js(入口文件):

```javascript
import './moment.js'
```

这样在任何vue文件(组件)里面可以方便的使用:

```javascript
mounted(){
	console.log(this.formatDisplayDate(this.time));
	console.log(this.formatDisplayDate2(this.time));
}
```

大家觉得这两种办法，哪种办法好点呢?



当然还有一个 extends和mixin用法一样，也可以实现，大家自己尝试吧。

https://vuejs.org/v2/guide/mixins.html#Global-Mixin

https://vuejs.org/v2/api/#extends



