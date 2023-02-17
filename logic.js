var imageNodes = document.getElementsByClassName('portraits');
addEventListeners(imageNodes);

function addEventListeners(imageNodes){
    for (var i = 0; i < imageNodes.length; i++){
        
        imageNodes[i].addEventListener("click", function() {
            if($(this).hasClass("dark")){
                $(this).removeClass("dark");

            }else if(!$(this).hasClass('dark')){
                $(this).addClass("dark");
            }
        });
    }
}

let nightModeOn = false;
$("#nightBtn").click(function() {
    if(!nightModeOn){
        $('body').css('background-image','url(assets/night.jpg)');
        $('body').css('color', 'white');

        $('#nightBtn').css("backgroundColor", "red");
        nightModeOn = true;

    }else{
        $('body').css('background-image','url(assets/day.webp)');
        $('body').css('color', 'black');

        $('#nightBtn').css("backgroundColor", "rgba(255, 255, 255, 0.2)");
        nightModeOn = false;
    }
});

let femaleToggle = false;
$("#female").click(function() {
    if(!femaleToggle){
        $(".portraits").filter(".female").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        femaleToggle = true;

        $('#female').css("backgroundColor", "red");
    }else{
        $(".portraits").filter(".female").css("backgroundColor", "");
        femaleToggle = false;

        $('#female').css("backgroundColor", "rgba(255, 255, 255, 0.2)");
    }
});

let maleToggle = false;
$("#male").click(function() {
    if(!maleToggle){
        $(".portraits").filter(".male").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        maleToggle = true;

        $('#male').css("backgroundColor", "red");
    }else{
        $(".portraits").filter(".male").css("backgroundColor", "");
        maleToggle = false;

        $('#male').css("backgroundColor", "rgba(255, 255, 255, 0.2)");

    }
});

let pyroToggle = false;
$("#pyro").click(function() {
    if(!pyroToggle){
        $(".portraits").filter(".pyro").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        pyroToggle = true;

        $('#pyro').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".pyro").css("backgroundColor", "");
        pyroToggle = false;

        $('#pyro').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let hydroToggle = false;
$("#hydro").click(function() {
    if(!hydroToggle){
        $(".portraits").filter(".hydro").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        hydroToggle = true;

        $('#hydro').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".hydro").css("backgroundColor", "");
        hydroToggle = false;

        $('#hydro').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let electroToggle = false;
$("#electro").click(function() {
    if(!electroToggle){
        $(".portraits").filter(".electro").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        electroToggle = true;

        $('#electro').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".electro").css("backgroundColor", "");
        electroToggle = false;

        $('#electro').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let anemoToggle = false;
$("#anemo").click(function() {
    if(!anemoToggle){
        $(".portraits").filter(".anemo").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        anemoToggle = true;

        $('#anemo').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".anemo").css("backgroundColor", "");
        anemoToggle = false;

        $('#anemo').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let cryoToggle = false;
$("#cryo").click(function() {
    if(!cryoToggle){
        $(".portraits").filter(".cryo").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        cryoToggle = true;

        $('#cryo').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".cryo").css("backgroundColor", "");
        cryoToggle = false;

        $('#cryo').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let geoToggle = false;
$("#geo").click(function() {
    if(!geoToggle){
        $(".portraits").filter(".geo").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        geoToggle = true;

        $('#geo').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".geo").css("backgroundColor", "");
        geoToggle = false;

        $('#geo').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let dendroToggle = false;
$("#dendro").click(function() {
    if(!dendroToggle){
        $(".portraits").filter(".dendro").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        dendroToggle = true;

        $('#dendro').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".dendro").css("backgroundColor", "");
        dendroToggle = false;

        $('#dendro').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let swordsToggle = false;
$("#swords").click(function() {
    if(!swordsToggle){
        $(".portraits").filter(".swords").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        swordsToggle = true;

        $('#swords').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".swords").css("backgroundColor", "");
        swordsToggle = false;

        $('#swords').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let claymoresToggle = false;
$("#claymores").click(function() {
    if(!claymoresToggle){
        $(".portraits").filter(".claymores").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        claymoresToggle = true;

        $('#claymores').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".claymores").css("backgroundColor", "");
        claymoresToggle = false;

        $('#claymores').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let polearmsToggle = false;
$("#polearms").click(function() {
    if(!polearmsToggle){
        $(".portraits").filter(".polearms").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        polearmsToggle = true;

        $('#polearms').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".polearms").css("backgroundColor", "");
        polearmsToggle = false;

        $('#polearms').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let catalystsToggle = false;
$("#catalysts").click(function() {
    if(!catalystsToggle){
        $(".portraits").filter(".catalysts").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        catalystsToggle = true;

        $('#catalysts').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".catalysts").css("backgroundColor", "");
        catalystsToggle = false;

        $('#catalysts').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let bowsToggle = false;
$("#bows").click(function() {
    if(!bowsToggle){
        $(".portraits").filter(".bows").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        bowsToggle = true;

        $('#bows').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".bows").css("backgroundColor", "");
        bowsToggle = false;

        $('#bows').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let mondstadtToggle = false;
$("#mondstadt").click(function() {
    if(!mondstadtToggle){
        $(".portraits").filter(".mondstadt").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        mondstadtToggle = true;

        $('#mondstadt').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".mondstadt").css("backgroundColor", "");
        mondstadtToggle = false;

        $('#mondstadt').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let liyueToggle = false;
$("#liyue").click(function() {
    if(!liyueToggle){
        $(".portraits").filter(".liyue").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        liyueToggle = true;

        $('#liyue').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".liyue").css("backgroundColor", "");
        liyueToggle = false;

        $('#liyue').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let inazumaToggle = false;
$("#inazuma").click(function() {
    if(!inazumaToggle){
        $(".portraits").filter(".inazuma").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        inazumaToggle = true;

        $('#inazuma').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".inazuma").css("backgroundColor", "");
        inazumaToggle = false;

        $('#inazuma').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});
let sumeruToggle = false;
$("#sumeru").click(function() {
    if(!sumeruToggle){
        $(".portraits").filter(".sumeru").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        sumeruToggle = true;

        $('#sumeru').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".sumeru").css("backgroundColor", "");
        sumeruToggle = false;

        $('#sumeru').css("backgroundColor", "rgba(255, 255, 255, 0.2)");


    }
});









    



