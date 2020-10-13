$('.anchors a:not([data-anchors]), [data-anchors="single"]').on("click", function(e){
    e.preventDefault();
    var elementid = $(this).attr("href");
    console.log(elementid);

    if ( document.querySelector("#"+elementid) ) {
        var destination = $("#"+elementid).offset().top;
    console.log(destination);
        $('html').animate({
            scrollTop: destination}, 1500, function(){
            });
    } else {
        location.href = '/main/#' + elementid;
    }
});