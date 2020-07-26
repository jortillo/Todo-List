//Check off a Todo upon click
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add new list from text input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grab text from text input 
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})