$(document).ready(function() {
    $('[data-toggle="offcanvas"]').click(function() {
        console.log("click");
        $('#side-menu').toggleClass('hidden-xs');
    });
});
