let labelswitch=document.querySelector('.check-box')
let toggle_switch=document.querySelector('.check-handler')
let switchBefore=window.getComputedStyle(toggle_switch,'::before');
let submitcheck=document.querySelector('.submitcheck')

let boolen=true
let pietitle=document.getElementById('pietitle')
let hottitle=document.getElementById('hottitle')
let numbertitle=document.querySelectorAll('#numberandline .numberview h5')

 //获取伪元素
submitcheck.addEventListener('click',function(){

    let beforecontent=switchBefore.content;
    if(beforecontent=='"入"'){
        boolen=true
        pietitle.innerHTML='迁入国家排行饼图'
        hottitle.innerHTML='迁入国家排行热点图'
        for(let i=0;i<numbertitle.length;i++){
            numbertitle.innerHTML=`${i*5+1990}年迁入总量`
        }
    }
    else{
        boolen=false
        pietitle.innerHTML='迁出国家排行饼图'
        hottitle.innerHTML='迁出国家排行热点图'
        for(let i=0;i<numbertitle.length;i++){
            numbertitle.innerHTML=`${i*5+1990}年迁出总量`
        }

    }
})

