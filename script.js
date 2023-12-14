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



// ============  theme colro switche by https://fossheim.io/writing/posts/accessible-theme-picker-html-css-js/

// selects all buttons
const themeColor = document.querySelector('.themeColorButton');
const themeColorButton = themeColor.querySelectorAll('button');

// Logs the clicked button
const handleThemeSelection = (event) =>{
    const theme = event.target.getAttribute('data-theme')
    const isPressrd = event.target.getAttribute('aria-pressed');
    document.documentElement.setAttribute("data-selected-theme",theme);

    // delete 'aria-pressed="true" ' form previous button
    const prevBtn = document.querySelector('[data-theme][aria-pressed="true"]');
    prevBtn.setAttribute('aria-pressed', false);
    event.target.setAttribute('aria-pressed', true);

}
