let timedotnumber=document.querySelectorAll(".timenumber .dot")
let ducenternumber=document.querySelector('.ducenternumber')
let dunumber=document.querySelector('.dunumber')
let strenghnumber=document.querySelector('.strenghnumber')

for(let i=0;i<timedotnumber.length;i++){
    timedotnumber[i].addEventListener('click',function(){
        for(let j=0;j<timedotnumber.length;j++){
            timedotnumber[j].style.background='white'
        }
        this.style.background='blue';
    })
}