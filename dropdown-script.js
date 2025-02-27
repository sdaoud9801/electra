function toggleDropDown(){
    let elements = document.getElementsByClassName("dropdown");
    for(element of elements) { 
        element.classList.toggle("hide-mobile");
    }
    elements = document.getElementsByClassName("nav-links-wrapper");
    for(element of elements) {
        element.classList.toggle("hide-mobile");
    }
    
}