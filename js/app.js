$( document ).ready(function() {
    $button=$(".news__show")
    $button.click( function ()
    {
        $(".news__item").show();
        $button.hide();
    })
});