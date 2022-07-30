let body = document.querySelector(`body`)
let button = document.querySelector(`.heading button`)
let isDarkMode = false
let heading = document.querySelector(`.heading h2`)
button.addEventListener(`click`, darkModeToggler)

    function darkModeToggler(){
       isDarkMode = !isDarkMode
        body.classList.toggle(`darkMode`)
    }

    if(isDarkMode == true){
      heading.innerHTML = "Dark Mode"
    } else {
        heading.innerHTML = "Light Mode"
    }

    


    //.heading button:hover .sun{
    //margin-top: -100%;
