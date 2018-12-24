# 效果图
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo1.gif" width="195"  />
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo2.gif" width="195"  />
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo3.gif" width="195"  />
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo4.gif" width="195"  />
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo5.gif" width="195"  />

>说明：这是基于vue开发的一个模拟时钟组件。

# 1.安装&使用
* 安装
```javascript
npm install -D vue-analog-clock
```
+ 使用
```javascript
//方法1
import AnalogClock from 'vue-analog-clock'
Vue.use(AnalogClock);

//方法2
import {AnalogClock} from 'vue-analog-clock'
Vue.component("AnalogClock",AnalogClock);

//方法3 假设是test.vue文件 <script>标签内使用局部注册AnalogClock组件
import {AnalogClock} from 'vue-analog-clock'
export default{
    components:{AnalogClock}
}
```

# 2.例子
## 2.1 最简单使用
* 代码
```html
<AnalogClock/>
```
* 效果  
<br/>
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo1.gif" width="300"  />

## 2.2 显示罗马数字
* 代码
```html
<AnalogClock :size="size" scaleType="roman"/>
```
* 效果  
<br/>
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo2.gif" width="300"  />

## 2.3 自定义边框颜色、背景色、刻度线颜色以及小时数字颜色
* 代码
```html
<AnalogClock bordercolor="brown" backgroundColor="black" hourColor="white" scaleColor="yellow"/>
```
* 效果
<br/>
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo3.gif" width="300"  />

## 2.4 自定义边框图片、背景图片
* 代码1
```html
<AnalogClock borderImage="/static/img/border.png" backgroundImage="/static/img/bg.jpg"/>
```
* 代码2 使用远程图片
```html
<AnalogClock
        borderImage="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545553805386&di=ec656215a2958d617ef30631e96304e0&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fshouyou%2Fupload%2Fimage%2F2018%2F07%2F09%2F584_2018070952816881.png"
        backgroundImage="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545553773235&di=1c768f80fc088c2edc20fa75af77c515&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F03%2F20160703164252_2WySB.jpeg"
    />
```
* 效果
<br/>
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo4.gif" width="300"  />
<img src="https://raw.githubusercontent.com/destiny-wenlun/concise-clock/master/img/demo5.gif" width="300"  />


# 3. props
|属性|说明|类型|默认值|
|:-|:-|:-|:-|
|size|模拟时钟大小|Number|500|
|time|指定显示某个时间，若有指定，那么时钟会停在指定的时间,类型可以是Date对象或字符串，如果是字符串，那么必须满足格式:"hh:mm:ss"|String \| Date|-|
|padding|内边距|Number|5|
|borderWidth|边框宽度|Number|20|
|borderColor|边框颜色|String|black|
|borderImage|边框背景图片，优先级高于borderColor|String|-|
|backgroundColor|背景色|String|white|
|backgroundImage|背景图片，优先级高于backgroundColor|String|-|
|backgroundMode|背景图显示模式,可选值part或full|String|full|
|backgroundAlpha|背景图片的透明度|Number|0.5|
|scaleType|显示的刻度类型，roman：罗马数字，arabic：阿拉伯数字，none：不显示|String|arabic|
|scaleColor|刻度线颜色|String|#666|
|hourColor|刻度值颜色|String|#666|
|secondHandColor|秒针颜色|String|red|
|minuteHandColor|分针颜色|String|#666|
|hourHandColor|时针颜色|String|black|
|showShadow|时针颜色|Boolean|true|

# 4. 方法
>提示：给AnalogClock组件增加ref属性可获取组件的Vue实例，实例可执行下面的方法。例如：
```html
<AnalogClock ref="ac"/>
```
```javascript
export default{
    mounted(){
        let ac = this.$refs.ac;
        //如果props没有传入time,那么会默认执行run方法
        // ac.run();
        // ac.stop();
    }
}
```

|方法名|说明|
|:-|:-|
|run|如果模拟时钟处于停止状态，那么可以执行此方法重新运行模拟时钟。|
|stop|执行此方法，可以停止一个正在运行的模拟时钟。|