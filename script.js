// header active
$(document).on('click', '.navMenu ul li ', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

function checkUncheck() {
    var checkbox = document.getElementById('checkbox');
    if (checkbox.checked) {
        checkbox.checked = false;
    }else{
        checkbox.checked = true;
    }
}

// theme switcher
var themeSwitcher = document.querySelector(".themeSwitcher")
var themeOpen = document.querySelector(".themeSetting")
var iconFlip = document.querySelector(".themeSetting i")

themeSwitcher.style.right = "-230px";
iconFlip.style.transform="scaleX(1)";
themeOpen.onclick = function(){
    if ((themeSwitcher.style.right == "-230px")&&(iconFlip.style.transform="scaleX(1)")) {
        themeSwitcher.style.right = "10px";
        iconFlip.style.transform="scaleX(-1)"
    }else{
        themeSwitcher.style.right = "-230px";
        iconFlip.style.transform="scaleX(1)";
    }
}

// =================== Light Dark toggle ==============
var darkMode = document.getElementById('dark');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
})
// is DarkMode on then dark color pelete position
var darkOn = document.querySelector('.darkMode');
var darkpalette = document.querySelector('.themeDark');
var LightNone = document.querySelector('.themeLight');
var LightTheme = document.querySelector('.lightDarkSwitch');
var lighthtmlAttribute = document.querySelector('html');
var isDarkMode = false;
darkOn.onclick = function(event){
    darkpalette.classList.toggle('active')
    LightNone.classList.toggle('none')
    
    if(!isDarkMode){
        lighthtmlAttribute.setAttribute("data-selected-theme", "defaultDark");
        isDarkMode=true;
    }else{
        lighthtmlAttribute.setAttribute("data-selected-theme", "defaultLight");
        isDarkMode=false;
    }
}



// ============  theme colro switche by https://fossheim.io/writing/posts/accessible-theme-picker-html-css-js/

// selects all buttons
const themeColorLight = document.querySelector('.themeLight');
const themeColorButtonLight = themeColorLight.querySelectorAll('button');


// Logs the clicked button
const handleThemeSelectionLight = (event) =>{
    const theme = event.target.getAttribute('data-theme')
    const isPressrd = event.target.getAttribute('aria-pressed');
    document.documentElement.setAttribute("data-selected-theme",theme);

    // delete 'aria-pressed="true" ' form previous button
    const prevBtn = document.querySelector('.themeLight [data-theme][aria-pressed="true"]');
    prevBtn.setAttribute('aria-pressed', false);
    event.target.setAttribute('aria-pressed', true);

}
// Adds the handleThemeSelection as a click handler to each of the buttons

themeColorButtonLight.forEach((button) =>{
    button.addEventListener('click', handleThemeSelectionLight);
});


// selects all buttons
const themeColorDark = document.querySelector('.themeDark');
const themeColorButtonDark = themeColorDark.querySelectorAll('button');

// Logs the clicked button
const handleThemeSelectionDark = (event) =>{
    const theme = event.target.getAttribute('data-theme')
    const isPressrd = event.target.getAttribute('aria-pressed');
    document.documentElement.setAttribute("data-selected-theme",theme);

    // delete 'aria-pressed="true" ' form previous button
    const prevBtn = document.querySelector('.themeDark [data-theme][aria-pressed="true"]');
    prevBtn.setAttribute('aria-pressed', false);
    event.target.setAttribute('aria-pressed', true);

}
// Adds the handleThemeSelection as a click handler to each of the buttons

themeColorButtonDark.forEach((button) =>{
    button.addEventListener('click', handleThemeSelectionDark);
});