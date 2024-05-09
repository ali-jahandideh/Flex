let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector(".header__icon i")


menuBtn.addEventListener("click", function(){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
        menuBtnIcon.style.position = "fixed"
        menuBtnIcon.style.right = "1rem"
        menuBtnIcon.style.top = "1.5rem"
    }else {
        menu.style.left = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
        menuBtnIcon.style.position = ""
        menuBtnIcon.style.right = ""
        menuBtnIcon.style.top = ""
    }
})