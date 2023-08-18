let timedotnumber=document.querySelectorAll(".timenumber .dot")
let ducenternumber=document.querySelector('.ducenternumber')
let dunumber=document.querySelector('.dunumber')
let strenghnumber=document.querySelector('.strenghnumber')
let yeardot1
let tabledegree
let tablecen
let tablestrengh
let tablecom


let resultdegree
let resultcen
let resultstrength
let resultcommuity

let selectcountry1=document.querySelector('#selectcountry')

for(let i=0;i<timedotnumber.length;i++){
    timedotnumber[i].addEventListener('click',function(){
        this.style.cursor='pointer'
        for(let j=0;j<timedotnumber.length;j++){
            timedotnumber[j].style.background='white'
        }
        this.style.background='blue';
        yeardot1=`${1990+i*5}`
        tabledegree='degree_'+yeardot1
        tablecen='centrality_'+yeardot1
        tablestrengh='strength_'+yeardot1
        tablecom='community_'+yeardot1
        $.ajax({
            type: "get",
            url: `http://43.143.132.59:8080/degree?table=${tabledegree}`,
            changeOrigin: true,
            dataType: "json",
            success: function (res) {
                resultdegree=res
            }
        });
        $.ajax({
            type: "get",
            url: `http://43.143.132.59:8080/strength?table=${tablestrengh}`,
            changeOrigin: true,
            dataType: "json",
            success: function (res) {
                resultstrength=res
            }
        });
        $.ajax({
            type: "get",
            url: `http://43.143.132.59:8080/centrality?table=${tablecen}`,
            changeOrigin: true,
            dataType: "json",
            success: function (res) {
                resultcen=res
            }
        });
        $.ajax({
            type: "get",
            url: `http://43.143.132.59:8080/community?table=${tablecom}`,
            changeOrigin: true,
            dataType: "json",
            success: function (res) {
                resultcommuity=res
            }
        });
    })
}