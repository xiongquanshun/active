//事件驱动程序
//引入event模块
var events = require("events");

//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
	console.log("连接成功");
	
	//触发data_received事件
	eventEmitter.emit("data_received")
}

//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler());

//使用匿名函数绑定data_received事件
eventEmitter.on("data_received",function(){
	console.log("连接数据成功")
});

//触发connection事件
event.Emitter.emit("connection")

//绑定事件及事件的处理程序
eventEmitter.on("eventName",eventHandler);

console.log("程序执行完毕")；
