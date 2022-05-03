const $panel = document.querySelector('.panel'),
$panelBtn = document.querySelector('.hamburger');

$panelBtn.addEventListener('click',(e)=>{
    $panel.classList.toggle('active')
    $panelBtn.classList.toggle('is-active')
})