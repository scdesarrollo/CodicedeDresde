
$(".hotspot_over").mouseover(function() { 
 $(".hotspot_over").removeClass("hotspot_on");
 $("span").removeClass("select_augurio");
});

$select_hp = null;
$(".hotspot_over").click(function() { 
     $(".hotspot_over").removeClass("hotspot_on");
     $(this).addClass("hotspot_on");
     $("span").removeClass("select_augurio");

     $select_hp = $(this).attr('class').split(' ')[1];
     console.log("nombreZ "+ $select_hp);

     $(".augurio-"+$select_hp + " span").addClass("select_augurio");

});



// Contamos la cantidad de Slider, esto es contando los span de los bullets
$count_bullets = document.getElementById("bullets").getElementsByTagName("span");
$total_sliders = $count_bullets.length;


$count_hp = document.getElementById("count_hp").getElementsByTagName("img");
$total_count_hp = $count_hp.length;


console.log("TOTAL DE HOTSPOTS " + $total_count_hp);
console.log("TOTAL DE SLIDERS " + $total_sliders);

var name; 
var id_hotspots;
for (i = 0; i < $total_count_hp - $total_sliders; i++) { 
   var num = i+1

    $('#id-'+num).click(function() {
         name = $(this).attr('id');
         id_hotspots = name.substring(name.indexOf("id")+3);
         console.log(id_hotspots);
         scrolling();
    });
}

function scrolling(){
    $('html, body').animate({
        scrollTop: $('#to-'+id_hotspots).offset().top
    }, 1000);
}// Scrolling 


 


