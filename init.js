function getts(){
    $.getScript( "/js/theme.init.js");
}
function setLocation(curLoc){
    location.href = curLoc;
    location.hash = curLoc;
}
$( document ).ready(function() {
    $("body").on('click', '.ajax_link', function () {
            var PageSlug = $(this).attr('id');
        var PageHref = $(this).attr('href');
            $.ajax({
                url:     'http://camerdom.listryx.com/ajax_webhook/',
                method: "POST",
                data: ({ page_slug: PageSlug }), //отправляем постом id элемента
                success: function(data) {
                    jQuery('#mnu').modal('hide');
                    $('.main').html(data);
                    getts();

                    history.pushState(null, null, PageHref);
                    $("html, body").animate({scrollTop:0},"slow")
                },

                beforeSend: function(data) {

                },

                complete: function(data) {


                }

            });
            return false;
        }
    );

    $('body').on('click','.ajax_post', function (event) {
        event.preventDefault();

        var PostID = $(this).attr('id');
        var PostHref = $(this).attr('href');
        $.ajax({
            url:     'http://camerdom.listryx.com/ajax_post/',
            method: "POST",
            data: ({ post_load_id: PostID }), //отправляем постом id элемента
            success: function(data) {

                $('.main').html(data);
                getts();
                // заносим ссылку в историю
                history.pushState(null, null, PostHref);
                $("html, body").animate({scrollTop:0},"slow")

            },

            beforeSend: function(data) {

            },

            complete: function(data) {



            }

        });
    });


    // вешаем событие на popstate которое срабатывает при нажатии back/forward в браузере
    $(window).on('popstate', function(e) {



        // просто сообщение
      
    });

});
