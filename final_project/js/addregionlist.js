let region=[
    "North America",
    "Oceania",
    "Asia",
    "Africa",
    "South America",
    "Europe",
]
let selectlistworld=document.getElementById('selectworld')
for(let i=0;i<region.length;i++){
    let option=document.createElement('option')
    option.innerHTML=region[i]
    option.value=region[i]
    selectlistworld.appendChild(option)
}