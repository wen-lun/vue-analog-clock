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
		let options = {};
		let isRun = true;
		Object.keys(this.$props).forEach(key => {
			let val = this.$props[key];
			if ("time" == key && val) {
				isRun = false;
				options.onload = clock => {
					clock.show(val);
				};
			} else if (val !== undefined) {
				options[key] = val;
			}
		});
		this.clock = new Clock(this.$refs.clock, options);
		if (isRun) this.clock.run();
	},
	beforeDestroy() {
		this.stop();
	},
	methods: {
		run() {
			this.clock && this.clock.run();
		},
		stop() {
			this.clock && this.clock.stop();
		}
	}
});
</script>
