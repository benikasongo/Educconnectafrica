//=======================
//MENU MOBILE
//=======================

const menuToggle =
document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

if(menuToggle && menu){
    menuToggle.addEventListener("click",()=>{
        menu.classList.toggle("active");
    })
}

// =====================
// RETOUR EN HAUT
// =====================

const topBtn =
document.getElementById("topBtn");

if(topBtn) {

    window.addEventListener("scroll",()=>{

        if(window.scrollY>300{
            topBtn.style.display="block";
            } else {
                topBtn.style.display="none";
            }    
        });

        topBtn.addEventListener("click",()=>{

            window.scrollTo({
                top:0,
                behavior:"smooth"
        });
    });
}

// =========================
// ANIMATION D'APPPARITION
// =========================

const reveals =
document.querySelectorAll(".reveal");

function revealElements(){

    const elementTop =
    element.getBoundingClientRect().top;

    if(elementTop<WindowHeight-100){
        element.classList.add("active");
    }
}



window.addEventListener("scroll",
revealElements);
revealElements()