$(function() {
    var user = JSON.parse(cookie.get('user'))
    var text = $('.see')
        // text.on('keydown', function(ev) {
        //     if (ev.keyCode === 13) {
        //         // user.msg = text.value
        //         // ws.send(JSON.stringify(user));
        //         // text.value = '';


    //     }
    // })
    $('.btn').on('click', function() {
        user.msg = text.val()
        ws.send(JSON.stringify(user));
        text.val('');
    })

})