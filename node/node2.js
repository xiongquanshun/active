//����required ģ��
var http=require("http");

//����������
http.createServer(function(request,response){
	//����httpͷ��
	//http״ֵ̬��200��ok
	//��������: text/plain
	response.writeHead(200,{"Content-type":"text/plain"});

	//������Ӧ���� "Hello World"
	response.end("Hello World\n");
	
}).listen(8888);

//�ն˴�ӡ��Ϣ
console.log('server running at http://127.0.0.1:8888/');