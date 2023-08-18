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
for(let i=0;i<country.length;i++){
    let option=document.createElement('option')
    option.innerHTML=country[i]
    option.value=country[i]
    selectlist.appendChild(option)
}