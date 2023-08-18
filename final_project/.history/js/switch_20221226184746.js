let labelswitch=document.querySelector('.check-box')
let toggle_switch=document.querySelector('.check-handler')
let switchBefore=window.getComputedStyle(toggle_switch,'::before');
let submitcheck=document.querySelector('.submitcheck')

let exceltitle=document.querySelector('.exceltitle')
let boolen=true
let pietitle=document.getElementById('pietitle')
let startitle=document.querySelector('.startitle')
let hottitle=document.getElementById('hottitle')
let numbertitle=document.querySelectorAll('#numberandline .numberview h5')
let linetitle=document.querySelector('.linetitle')
let selectcountry=document.querySelector('#selectcountry')
let timedot=document.querySelectorAll(".timecontainer .dot")
let yeardot
let sum=[4]
for(let i=0;i<timedot.length;i++){
    timedot[i].addEventListener('click',function(){
        for(let j=0;j<timedot.length;j++){
            timedot[j].style.background='white'
        }
        this.style.background='blue';
        yeardot=`${1990+i*5}`
    })
}
let con=''
let result=[]
 //获取伪元素
submitcheck.addEventListener('click',function(){
    let beforecontent=switchBefore.content;
    if(beforecontent=='"入"'){
        boolen=true
        pietitle.innerHTML='迁入国家排行饼图'
        hottitle.innerHTML='迁入国家排行热点图'
        for(let i=0;i<numbertitle.length;i++){
            numbertitle[i].innerHTML=`${i*5+1990}年迁入总量`
        }
        linetitle.innerHTML='迁入数据变化折线图'
        startitle.innerHTML='迁入国家排行榜'
        exceltitle.innerHTML='迁入国家直方图'
        con=(selectcountry.value+'_in').toLowerCase()
    $.when($.ajax({
        type: "get",
        url: `http://43.143.132.59:8080/countryflow?table=${con}&flag=0`,
        changeOrigin: true,
        dataType: "json",
        success: function (res) {
            result=res
        }
    })).done(function(){
        for(let i=0;i<result.length;i++){
            for(let j=0;j<4;j++){
                year=`countryflow_${j*5+1990}`
                sum[j]+=result[i].year
                console.log(sum[j])
            }
        }
    })
    }
    else{
        boolen=false
        pietitle.innerHTML='迁出国家排行饼图'
        hottitle.innerHTML='迁出国家排行热点图'
        for(let i=0;i<numbertitle.length;i++){
            numbertitle[i].innerHTML=`${i*5+1990}年迁出总量`
        }
        linetitle.innerHTML='迁出数据变化折线图'
        startitle.innerHTML='迁出国家排行榜'
        exceltitle.innerHTML='迁出国家直方图'
        con=(selectcountry.value+'_out').toLowerCase()
    $.ajax({
        type: "get",
        url: `http://43.143.132.59:8080/countryflow?table=${con}&flag=0`,
        changeOrigin: true,
        dataType: "json",
        success: function (res) {
            result=res
        }
    });
    }
})



