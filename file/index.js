let header = document.querySelector("header");
let about = document.querySelector(".about");
let product = document.querySelector(".product");
let services = document.querySelector(".services");
let contact = document.querySelector(".contact");
let icons = document.querySelectorAll(".icon li");
let links = document.querySelectorAll(".links li")
let menu = document.querySelector(".links");

console.log(contact)


window.onscroll = function(){
    if(window.scrollY >= about.offsetTop - 60){
        header.style.backgroundColor = '#000';
    }
    else if(window.scrollY <= about.offsetTop - 60){
        header.style.backgroundColor = '#00000000'
    }
    /* ============================== Adding Class Active ============================= */
    if(window.scrollY <= about.offsetTop - 60){
        links.forEach((e) => e.classList.remove("active"));
        links[0].classList.add("active")
    }
    else if(window.scrollY >= about.offsetTop - 60 && window.scrollY < product.offsetTop - 70){
        links.forEach((e) => e.classList.remove("active"));
        links[1].classList.add("active")
    }
    else if(window.scrollY >= product.offsetTop - 70 && window.scrollY < services.offsetTop){
        links.forEach((e) => e.classList.remove("active"));
        links[2].classList.add("active")
    }
    else if(window.scrollY >= services.offsetTop - 70 && window.scrollY < contact.offsetTop - 100){
        links.forEach((e) => e.classList.remove("active"));
        links[3].classList.add("active");
    }
    else{
        links.forEach((e) => e.classList.remove("active"));
        links[4].classList.add("active");
    }
}
icons.forEach(function(ele){
    ele.addEventListener('click' , function(){
        if(this.getAttribute("class") == "menu"){
            menu.classList.toggle("open");
            if(menu.getAttribute("class") == "links open"){
                menu.style.cssText = "display:block"
            }
            else{
                menu.style.cssText = "display:none";
            }
        }
        else{
            menu.style.cssText = "display:none";
        }
    })
})