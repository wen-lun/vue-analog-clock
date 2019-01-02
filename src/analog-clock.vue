<template>
	<canvas ref="clock"/>
</template>

<script>
import Vue from "vue";
import Clock from "concise-clock";
export default Vue.extend({
	props: {
		size: { type: Number }, //尺寸
		time: { type: [String, Date] }, //指定显示某个时间，若有值，则不会运行
		padding: { type: Number }, //内边距
		borderWidth: { type: Number }, //边框宽度
		borderColor: { type: String }, //边框颜色
		borderImage: { type: String }, //边框背景图片，优先级高于borderColor
		backgroundColor: { type: String }, //背景色，默认white
		backgroundImage: { type: String }, //背景图片，优先级高于backgroundColor
		backgroundMode: { type: String },
		backgroundAlpha: { type: Number }, //背景图片的透明度，默认0.5
		scaleType: { type: String }, //显示的刻度类型,默认值arabic, roman：罗马数字，arabic：阿拉伯数字，none：不显示
		scaleColor: { type: String }, //刻度线颜色
		hourColor: { type: String }, //显示的小时文字颜色
		handType: { type: String }, //指针类型
		secondHandColor: { type: String }, //秒针颜色
		minuteHandColor: { type: String }, //分针颜色
		hourHandColor: { type: String }, //时针颜色
		showShadow: { type: Boolean } //是否显示阴影
	},
	data() {
		return {
			clock: null
		};
	},
	mounted() {
		let isRun = !this.time; //如果time没有值，那么就可以先运行
		let options = {
			...this.$props,
			...(isRun ? {} : { onload: clock => clock.show(this.time) })
		};
		this.clock = new Clock(this.$refs.clock, options);
		if (isRun) this.clock.run();
	},
	beforeDestroy() {
		this.stop();
	},
	methods: {
		updateOptions(props) {
			//更新options
			this.clock && this.clock.setOptions(this.$props);
		},
		run() {
			this.clock && this.clock.run();
		},
		stop() {
			this.clock && this.clock.stop();
		}
	},
	watch: {
		size() {
			this.updateOptions();
		},
		time() {
			this.clock && this.clock.show(this.time);
		},
		padding() {
			this.updateOptions();
		},
		borderWidth() {
			this.updateOptions();
		},
		borderColor() {
			this.updateOptions();
		},
		borderImage() {
			this.updateOptions();
		},
		backgroundColor() {
			this.updateOptions();
		},
		backgroundImage() {
			this.updateOptions();
		},
		backgroundMode() {
			this.updateOptions();
		},
		backgroundAlpha() {
			this.updateOptions();
		},
		scaleType() {
			this.updateOptions();
		},
		scaleColor() {
			this.updateOptions();
		},
		hourColor() {
			this.updateOptions();
		},
		handType() {
			this.updateOptions();
		},
		secondHandColor() {
			this.updateOptions();
		},
		minuteHandColor() {
			this.updateOptions();
		},
		hourHandColor() {
			this.updateOptions();
		},
		showShadow() {
			this.updateOptions();
		}
	}
});
</script>
