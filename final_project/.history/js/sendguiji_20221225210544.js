let submitcheck2=document.querySelector('.submitcheck2')
let yearselect=document.querySelectorAll('.radiosel')
let inoutselect=document.querySelectorAll('.radiosel2')
let inputori=document.getElementById('input-ori')
let inputdes=document.getElementById('input-des')
let yearcom=[]
let inoutcom=[]
let resultcom=[]
let oritext
let destext
submitcheck2.addEventListener('click',function(){
    for(let i=0;i<yearselect.length;i++){
        if(yearselect[i].checked){
            yearcom.push(i)
        }
    }
    for(let i=0;i<inoutselect.length;i++){
        if(inoutselect[i].checked){
            inoutcom.push(i)
        }
    }
    oritext=inputori.value;
    destext=inputdes.value;
    $.ajax({
        type: "get",
        url: "http://43.143.132.59:8080/regionflow?region=West",
        changeOrigin: true,
        dataType: "json",
        success: function (res) {
            resultcom=res;
        }
    });
})
