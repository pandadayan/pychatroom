let url = "ws://10.31.162.48:5000"; //连接通信服务器地址

var user = JSON.parse(cookie.get('user'))

let ws = new WebSocket(url);

ws.onopen = function() {
    // 连接时发送的信息
    user.msg = "我上线了"
    ws.send(JSON.stringify(user));
}

ws.onmessage = function(msg) { // 接收服务端数据
    console.log(msg.data); //从事件对象中获取数据
    let speak_box = $('.speak_box');
    var data = JSON.parse(msg.data)
    if (data.username == user.username) {
        var str = `
        <div class="answer mysee">
        <div class="heard_img right"><span class="usermsg">${data.username}</span><img src="${data.sex=='man'?'../img/test/man.jpg':'../img/test/head_120.png'}"></div>
        <div class="mysee_text right">
            <p>${data.msg}</p>

        </div>
    </div>
        `
    } else {
        str = `
        <div class="answer">
        <div class="heard_img left"><span class="usermsg">${data.username}</span><img src="${data.sex=='man'?'../img/test/man.jpg':'../img/test/head_120.png'}"></div>
        <div class="answer_text">
            <p>${data.msg}</p>
        </div>
            </div>
        `
    }


    speak_box.html(speak_box.html() + str);
}