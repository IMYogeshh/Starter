$(document).ready(function(){
    $('.form-check input').click(function(){
        $('.form-check input:not(:checked)').parent().removeClass("bgClr");
        $('.form-check input:checked').parent().addClass("bgClr");
    });
    $('.form-check-2 input').click(function(){
        $('.form-check-2 input:not(:checked)').parent().removeClass("bgClr");
        $('.form-check-2 input:checked').parent().addClass("bgClr");
    });

    $("#married").click(function (){
        $(".form-group").removeClass("d-none");
    })
});
