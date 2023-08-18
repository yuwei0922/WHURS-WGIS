for(let i=0;i<timedotnumber.length;i++){
    timedotnumber[i].addEventListener('click',function(){
        for(let i=0;i<resultdegree.length;i++){
            if(resultdegree[i].country==selectcountry1.value){
                dunumber.innerHTML=resultdegree[i].degree;
                strenghnumber.innerHTML=resultstrength[i].strength
            }
        }
    })}
