
let ola_tab = document.getElementById("ola_tab");
let tvs_tab = document.getElementById("tvs_tab");   
let hero_tab = document.getElementById("hero_tab");
let disp_tab = document.getElementById("disp_tab");

function ola() {
    disp_tab.style.display = "none";
    ola_tab.style.display = "block";
    tvs_tab.style.display = "none";
    hero_tab.style.display = "none";

}
function tvs() {
    disp_tab.style.display = "none";
    ola_tab.style.display = "none";
    tvs_tab.style.display = "block";
    hero_tab.style.display = "none";

}
function hero() {
    disp_tab.style.display = "none";
    ola_tab.style.display = "none";
    tvs_tab.style.display = "none";
    hero_tab.style.display = "block";

}