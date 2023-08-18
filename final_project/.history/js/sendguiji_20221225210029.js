let submitcheck2=document.querySelector('.submitcheck2')
let yearselect=document.querySelectorAll('.radiosel')
let yearcom=[]
for(let i=0;i<yearselect.length;i++){
    if(yearselect[i].checked){
        yearcom.pop(i)
    }
}
submitcheck2.addEventListener('click',function(){
    $.ajax({
        type: "get",
        url: "http://43.143.132.59:8080/regionflow?region=West",
        changeOrigin: true,
        dataType: "json",
        success: function (res) {
            var list = res.features;
            for (var i = 0; i < list.length; i++) {
                temp +=
                    '<tr>' +
                    '<td>' + list[i].id+ '</td>' +
                    '<td>' + list[i].geometry.coordinates + '</td>' +
                    '<td>' + list[i].geometry.type + '</td>' +
                    '<td>' +list[i].properties.str1 + '</td>' +
                    '</tr>';
                    console.log(typeof(list[i].id))
            }
            $("#jsonList tr:not(:first)").html("");
            $("#jsonList").append(temp);
        }
    });
})
