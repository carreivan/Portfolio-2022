let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
//ocultar menu al seleccionar
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//animaciones
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("git");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("sqlite");
        habilidades[5].classList.add("node");
        habilidades[6].classList.add("figma");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("responsabilidad");
        habilidades[12].classList.add("capacidad");
        habilidades[13].classList.add("orientacion");
        
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

let hideText_btn = document.getElementById("hideText_btn");
let texto = document.getElementById("hideText");
hideText_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');

if(hideText.classList.contains('show')){
    hideText_btn.innerHTML = 'Leer Menos';
}else{
    hideText_btn.innerHTML = 'Leer Más';
}

}