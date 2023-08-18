let labelswitch=document.querySelector('.check-box')
let toggle_switch=document.querySelector('.check-handler')
let switchBefore=window.getComputedStyle(toggle_switch,'::before'); //获取伪元素
labelswitch.addEventListener('click',function(){
    let beforecontent=switchBefore.content;
    if(beforecontent=='"入"'){
        alert(123)
    }
    else{
        alert(12312312)
    }
})

