let timedotnumber=document.querySelectorAll(".timenumber .dot")
let ducenternumber=document.querySelector('.ducenternumber')
let dunumber=document.querySelector('.dunumber')
let strenghnumber=document.querySelector('.strenghnumber')
let yeardot1
let tabledegree
for(let i=0;i<timedotnumber.length;i++){
    timedotnumber[i].addEventListener('click',function(){
        this.style.cursor='pointer'
        for(let j=0;j<timedotnumber.length;j++){
            timedotnumber[j].style.background='white'
        }
        this.style.background='blue';
        yeardot1=`${1990+i*5}`
        tabledegree='degree'+yeardot1
        $.ajax({
            type: "get",
            url: `http://43.143.132.59:8080/countryflow?table=${con}&flag=0`,
            changeOrigin: true,
            dataType: "json",
            success: function (res) {
                result=res
            }
        });
    })
}