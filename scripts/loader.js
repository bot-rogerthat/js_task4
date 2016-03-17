"use strict";
$(document).ready(function () {
    $.ajax('http://jsonplaceholder.typicode.com/albums', {
        method: 'GET'
    }).then(function (albums) {
        for (var i = 0; i < albums.length; i++) {
            $("<div>").attr("id", i + 1).append(albums[i].title).appendTo("#albums");
        }
        $('#albums').find("div").click(function () {
            $('#albums').find('div').removeClass('clicked');
            $(this).addClass('clicked');
            var target = this;
            $.ajax('http://jsonplaceholder.typicode.com/photos', {
                method: 'GET'
            }).then(function (photos) {
                $("#photos").empty();
                for (var i = 0; i < photos.length; i++) {
                    if (target.id == photos[i].albumId) {
                        $("<img>").attr("src", photos[i].url).appendTo("#photos");
                    }
                }
            });
        });
    });
});
