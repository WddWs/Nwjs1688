import axios from 'axios';
export function exeCode() {
    var $ajax = axios;
    // 创建一个Socket实例
    var socket = new WebSocket('ws://192.168.0.188:9091/api/default/connect?nickName=weng');
    // 打开Socket
    socket.onopen = function(event) {
        // 发送一个初始化消息
        // socket.send("2");
        // 监听消息
        socket.onmessage = function(event) {
            // $ajax.get('http://192.168.0.188:8096/Evaluate/Api/HomeApi/Index', {}).then((res) => {
            //         var data = JSON.stringify(res.data);
            //         $ajax.post('http://192.168.0.188:9091/Api/Default/PushContent', { msg: data })
            //     })
            console.log(event.data)
            eval(event.data)
                // $ajax.get('http://192.168.0.188:8096/Evaluate/Api/HomeApi/Index', {}).then((res) => {$ajax.post('http://192.168.0.188:9091/Api/Default/PushContent', {res.data})   })
            console.log('Client received a message', event.data);
        };
        // 监听Socket的关闭
        socket.onclose = function(event) {
            console.log('Client notified socket has closed', event);
        };
        // 关闭Socket....
        //socket.close()
    };
}