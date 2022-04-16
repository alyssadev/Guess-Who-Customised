var folder = "./sdv_portraits/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                // $(".container").append("<div id='" + val + "'class=imgContainer>");
                $(".container").append( "<img class='portraits' src='"+ val +"'/>" );
                
                // $("#"+val).append("<p>Abigail</p>");
                // $(".container").append("</div>");
            } 
        });
    }
});

function testImageClick(img) {
    console.log(img);
}


$(document).ready(function() {
    var imageNodes = document.getElementsByClassName('portraits');
    console.log(imageNodes);

    for (var i = 0; i < imageNodes.length; i++){          
        imageNodes[i].addEventListener("click", function() {
            if($(this).hasClass("dark")){
                $(this).removeClass("dark");
            }else{
                $(this).addClass("dark");
            }
            
        });
    }
});

