let toggle_switch=document.querySelector('.check-handler')
var switchBefore=window.getComputedStyle(toggle_switch,'::before'); //获取伪元素
toggle_switch.addEventListener('click',function(){
    alert(123)
})

