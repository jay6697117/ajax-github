// js部分
var form = $('#search');
var input = $('#username');
var result = $('#result');
var username;

form.on('submit', function(event) {
    event.preventDefault();
    username = input.val();
    $.ajax('https://api.github.com/users/' + username).done(function(data) {
        var htmlStr =
            '<div id="activeClass">' +
            '<div>用户名: ' +
            data.login +
            '</div>' +
            '<div>ID: ' +
            data.id +
            '</div>' +
            '<div>网址: ' +
            data.url +
            '</div>' +
            '<div>城市: ' +
            (data.location || '无') +
            '</div>' +
            '<div>介绍: ' +
            (data.bio || '无') +
            '</div>' +
            '<div>公司: ' +
            (data.company || '无') +
            '</div>' +
            '</div>';
        result.html(htmlStr);
    });
});
