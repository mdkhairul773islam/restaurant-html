$(document).ready(function(){
    // navigation click function
    $('.nav-menu a').on('click', function () {
        var $el = $(this)
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - 0
        }, 700);

        $('.navbar-collapse').collapse('hide');
        return false;
    });

    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });
});
