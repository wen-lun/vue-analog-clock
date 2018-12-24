<template>
	<div>
		<AnalogClock :size="size"/>
		<AnalogClock :size="size" scaleType="roman" bordercolor="brown" backgroundColor="black" hourHandColor="white" minuteHandColor="white" hourColor="white" scaleColor="yellow"/>
		<AnalogClock :size="size" borderImage="/static/img/border.png" backgroundImage="/static/img/bg.jpg"/>
		<AnalogClock
			:size="size"
			borderImage="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545553805386&di=ec656215a2958d617ef30631e96304e0&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fshouyou%2Fupload%2Fimage%2F2018%2F07%2F09%2F584_2018070952816881.png"
			backgroundImage="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545553773235&di=1c768f80fc088c2edc20fa75af77c515&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F03%2F20160703164252_2WySB.jpeg"
		/>
	</div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
	name: "App",
	data() {
		return {
			size: 400
		};
	}
});
</script>
