//引入required 模块
var http=require("http");

//创建服务器
http.createServer(function(request,response){
	//发送http头部
	//http状态值：200：ok
	//内容类型: text/plain
	response.writeHead(200,{"Content-type":"text/plain"});

	//发送响应数据 "Hello World"
	response.end("Hello World\n");
	
}).listen(8888);

//终端打印信息
console.log('server running at http://127.0.0.1:8888/');