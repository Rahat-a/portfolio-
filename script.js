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