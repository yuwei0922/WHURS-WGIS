let labelswitch=document.querySelector('.check-box')
let toggle_switch=document.querySelector('.check-handler')
let switchBefore=window.getComputedStyle(toggle_switch,'::before');
let submitcheck=document.querySelector('submitcheck')


let pietitle=document.getElementById('pietitle')

 //获取伪元素
submitcheck.addEventListener('click',function(){
    let beforecontent=switchBefore.content;
    if(beforecontent=='"入"'){
        pietitle.innerHTML='迁入国家排行饼图'
    }
    else{
        pietitle.innerHTML='迁出国家排行饼图'
    }
})

