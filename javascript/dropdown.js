/* Clickable dropdown menu code reference from the source below 
https://www.w3schools.com/howto/howto_js_dropdown.asp */

/* control sound dropdown menu */
function showSoundMenu() {
    document.getElementById("soundDropDown").classList.toggle("show");
}
window.onclick = function(event){
    if (!event.target.matches('.sound')){
        var dropdowns = document.getElementsByClassName("sound-content");
        var i;
        for(i = 0; i<dropdowns.lengths; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* control director dropdown menu */
function showDirectorMenu() {
    document.getElementById("directorDropDown").classList.toggle("show");
}
window.onclick = function(event){
    if (!event.target.matches('.director1')){
        var dropdowns = document.getElementsByClassName("director-content");
        var i;
        for(i = 0; i<dropdowns.lengths; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* control main dropdown menu */ 
function showMainMenu() {
    document.getElementById("mainDropDown").classList.toggle("show");
}
window.onclick = function(event){
    if (!event.target.matches('.main')){
        var dropdowns = document.getElementsByClassName("main-content");
        var i;
        for(i = 0; i<dropdowns.lengths; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}