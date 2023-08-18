let labelswitchw=document.querySelector('.check-boxworld')
let toggle_switchw=document.querySelector('.check-handlerworld')
let switchBeforew=window.getComputedStyle(toggle_switchw,'::before');
let submitcheckw=document.querySelector('.submitcheckworld')

let exceltitleworld=document.querySelector('.exceltitleworld')
let boolenw=true
let pietitleworld=document.getElementById('pietitleworld')
let startitleworld=document.querySelector('.startitleworld')
let hottitleworld=document.getElementById('hottitleworld')
let numbertitleworld=document.querySelectorAll('#numberandlineworld .numberviewworld h5')
let linetitleworld=document.querySelector('.linetitleworld')
let selectworld=document.querySelector('#selectworld')
let timedotworld=document.querySelectorAll(".timecontainerworld .dot")
let yeardotworld
for(let i=0;i<timedotworld.length;i++){
    timedotworld[i].addEventListener('click',function(){
        for(let j=0;j<timedotworld.length;j++){
            timedotworld[j].style.background='white'
        }
        this.style.background='blue';
        yeardotworld=`${1990+i*5}`
    })
}
let con=''
let result=[]
 //获取伪元素
submitcheckw.addEventListener('click',function(){
    let beforecontentw=switchBeforew.content;
    if(beforecontentw=='"入"'){
        boolenw=true
        pietitleworld.innerHTML='迁入区域排行饼图'
        hottitleworld.innerHTML='迁入区域排行热点图'
        for(let i=0;i<numbertitleworld.length;i++){
            numbertitleworld[i].innerHTML=`${i*5+1990}年迁入总量`
        }
        linetitleworld.innerHTML='迁入区域变化折线图'
        startitleworld.innerHTML='迁入区域排行榜'
        exceltitleworld.innerHTML='迁入区域直方图'
        con=(selectworld.value+'_in')
    $.ajax({
        type: "get",
        url: `http://43.143.132.59:8080//regionflow?table=${con}`,
        changeOrigin: true,
        dataType: "json",
        success: function (res) {
            result=res
        }
    });
    }
    else{
        boolenw=false
        pietitleworld.innerHTML='迁出区域排行饼图'
        hottitleworld.innerHTML='迁出区域排行热点图'
        for(let i=0;i<numbertitleworld.length;i++){
            numbertitleworld[i].innerHTML=`${i*5+1990}年迁出总量`
        }
        linetitleworld.innerHTML='迁出区域变化折线图'
        startitleworld.innerHTML='迁出区域排行榜'
        exceltitleworld.innerHTML='迁出区域直方图'
        con=(selectworld.value+'_out')
    $.ajax({
        type: "get",
        url: `http://43.143.132.59:8080//regionflow?table=${con}`,
        changeOrigin: true,
        dataType: "json",
        success: function (res) {
            result=res
        }
    });
    }
})



