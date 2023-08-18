let region=[
    "North America",
    "Oceania",
    "South East Asia",
    "East Asia",
    "Africa",
    "South America",
    "South Asia",
    "Europe",
    "Soviet Union",
    "West Asia",
]
let selectlistworld=document.getElementById('selectworld')
for(let i=0;i<region.length;i++){
    let option=document.createElement('option')
    option.innerHTML=region[i]
    option.value=region[i]
    selectlistworld.appendChild(option)
}