//�¼���������
//����eventģ��
var events = require("events");

//����eventEmitter����
var eventEmitter = new events.EventEmitter();

//�����¼��������
var connectHandler = function connected(){
	console.log("���ӳɹ�");
	
	//����data_received�¼�
	eventEmitter.emit("data_received")
}

//��connection�¼��������
eventEmitter.on('connection',connectHandler());

//ʹ������������data_received�¼�
eventEmitter.on("data_received",function(){
	console.log("�������ݳɹ�")
});

//����connection�¼�
event.Emitter.emit("connection")

//���¼����¼��Ĵ������
eventEmitter.on("eventName",eventHandler);

console.log("����ִ�����")��
