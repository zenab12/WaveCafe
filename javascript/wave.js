$(document).ready(function() {

$('.drinks ul li a').on('click', function(){
    $('.container figure').parent('div').removeClass('active');
    $("." + $(this).data('name')).addClass('active').siblings().removeClass('active');
    $(this).parent('li').removeClass('active');
    $(this).parent('li').addClass('active').siblings().removeClass('active');
   

});



    $('.special figure i').on("click", function () {
        $(this).toggleClass('fa-plus fa-minus');

        $(this).parent().next('p').slideToggle();

});
});