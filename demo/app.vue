<template>
	<div class="container">
		<div class="left">
			<AnalogClock
				:size="size"
				:borderColor="borderColor"
				:backgroundColor="backgroundColor"
				:scaleColor="scaleColor"
				:hourColor="hourColor"
				:scaleType="scaleType"
				:borderImage="borderImage"
				:backgroundImage="backgroundImage"
				:handType="handType"
				:hourHandColor="hourHandColor"
				:minuteHandColor="minuteHandColor"
				:secondHandColor="secondHandColor"
			/>
		</div>
		<div class="right">
			<div class="panel panel-default">
				<div class="panel-heading">参数</div>
				<div class="panel-body">
					<div class="item">
						<span>尺寸：</span>
						<select v-model="size" class="form-control input-sm">
							<option :value="300">300px</option>
							<option :value="400">400px</option>
							<option :value="500">500px</option>
							<option :value="600">600px</option>
						</select>
					</div>
					<div class="item">
						<span>边框颜色：</span>
						<select v-model="borderColor" class="form-control input-sm">
							<option value="black">黑色</option>
							<option value="red">红色</option>
							<option value="brown">棕色</option>
						</select>
					</div>
					<div class="item">
						<span>背景颜色：</span>
						<select v-model="backgroundColor" class="form-control input-sm">
							<option value="white">白</option>
							<option value="black">黑色</option>
						</select>
					</div>
					<div class="item">
						<span>刻度线颜色：</span>
						<select v-model="scaleColor" class="form-control input-sm">
							<option value="black">黑色</option>
							<option value="white">白</option>
							<option value="yellow">黄色</option>
						</select>
					</div>
					<div class="item">
						<span>刻度值颜色：</span>
						<select v-model="hourColor" class="form-control input-sm">
							<option value="black">黑色</option>
							<option value="white">白</option>
							<option value="yellow">黄色</option>
						</select>
					</div>
					<div class="item">
						<span>刻度值类型：</span>
						<select v-model="scaleType" class="form-control input-sm">
							<option value="arabic">阿拉伯数字</option>
							<option value="roman">罗马数字</option>
							<option value="none">不显示</option>
						</select>
					</div>
					<div class="item">
						<span>边框背景图：</span>
						<select v-model="borderImage" class="form-control input-sm">
							<option :value="null">无</option>
							<option value="/static/img/border.png">图片1</option>
							<option
								value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545553805386&di=ec656215a2958d617ef30631e96304e0&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fshouyou%2Fupload%2Fimage%2F2018%2F07%2F09%2F584_2018070952816881.png"
							>图片2</option>
						</select>
					</div>
					<div class="item">
						<span>表盘背景图：</span>
						<select v-model="backgroundImage" class="form-control input-sm">
							<option :value="null">无</option>
							<option value="/static/img/bg.jpg">图片1</option>
							<option
								value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545553773235&di=1c768f80fc088c2edc20fa75af77c515&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F03%2F20160703164252_2WySB.jpeg"
							>图片2</option>
						</select>
					</div>
					<div class="item">
						<span>指针类型：</span>
						<select v-model="handType" class="form-control input-sm">
							<option value="triangle">三角形</option>
							<option value="line">线条</option>
						</select>
					</div>
					<div class="item">
						<span>时针颜色：</span>
						<select v-model="hourHandColor" class="form-control input-sm">
							<option value="black">黑色</option>
							<option value="red">红色</option>
							<option value="green">绿色</option>
							<option value="blue">蓝色</option>
						</select>
					</div>
					<div class="item">
						<span>分针颜色：</span>
						<select v-model="minuteHandColor" class="form-control input-sm">
							<option value="black">黑色</option>
							<option value="red">红色</option>
							<option value="green">绿色</option>
							<option value="blue">蓝色</option>
						</select>
					</div>
					<div class="item">
						<span>秒针颜色：</span>
						<select v-model="secondHandColor" class="form-control input-sm">
							<option value="red">红色</option>
							<option value="green">绿色</option>
							<option value="blue">蓝色</option>
							<option value="black">黑色</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			size: 300,
			borderColor: "black",
			backgroundColor: "white",
			scaleColor: "black",
			hourColor: "black",
			scaleType: "arabic",
			borderImage: null,
			backgroundImage: null,
			handType: "triangle",
			hourHandColor: "black",
			minuteHandColor: "black",
			secondHandColor: "red"
		};
	}
};
</script>

<style>
html,
body,
#app,
.container {
	padding: 0;
	margin: 0;
	height: 100%;
	width: 100%;
}
.left {
	float: left;
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.right {
	float: left;
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
}
.right .panel {
	width: 60%;
}
.right .item {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
}
.right .item span {
	width: 120px;
}
</style>

