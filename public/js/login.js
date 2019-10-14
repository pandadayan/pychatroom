$(function() {
    var sex = $('.signin-sex')
    var username = $('.user')
    var age = $('.age')
    sex.on('change', function() {
        if (sex.val() == "women") {
            $('.img-circle').attr("src", "../img/test/woman.jpg");
        } else {
            $('.img-circle').attr("src", "../img/test/man.jpg");
        }
    })
    $('.btn-block').on('click', function() {
        addUser(username.val(), age.val(), sex.val())
        console.log()
    })


})

function addUser(username, age, sex) {
    var user = {
        username: username,
        age: age,
        sex: sex,
    };
    cookie.set('user', JSON.stringify(user), 1);
}