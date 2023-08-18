let timecontainer=document.querySelector('.timecontainer')
let divcontainer1=document.createElement('div')
let divcontainer2=document.createElement('div')
divcontainer1.style.display='flex'
divcontainer2.style.display='flex'
divcontainer2.style.marginTop='10px'
for(let i=0;i<4;i++){
    let smalldiv=
    `<div style="flex:1;display:flex">
    <div style="flex:1"></div>
    <div class="item"></div>
    <div class="dot"></div>
    <div class="item"></div>
    </div>`
    divcontainer1.innerHTML+=smalldiv;
}
for(let i=0;i<4;i++){
    let smalldiv=
    `<div style="flex:1;display:flex">
    <div style="flex:1"></div>
    <div class=""> ${1990+i*5}</div>
    <div class="item1"></div>
</div>`
    divcontainer2.innerHTML+=smalldiv;
}
timecontainer.appendChild(divcontainer1)
timecontainer.appendChild(divcontainer2)


let timecontainerworld=document.querySelector('.timecontainerworld')
let divcontainer1w=document.createElement('div')
let divcontainer2w=document.createElement('div')
divcontainer1w.style.display='flex'
divcontainer2w.style.display='flex'
divcontainer2w.style.marginTop='10px'
for(let i=0;i<4;i++){
    let smalldiv=
    `<div style="flex:1;display:flex">
    <div style="flex:1"></div>
    <div class="item"></div>
    <div class="dot"></div>
    <div class="item"></div>
    </div>`
    divcontainer1w.innerHTML+=smalldiv;
}
for(let i=0;i<4;i++){
    let smalldiv=
    `<div style="flex:1;display:flex">
    <div style="flex:1"></div>
    <div class=""> ${1990+i*5}</div>
    <div class="item1"></div>
</div>`
    divcontainer2w.innerHTML+=smalldiv;
}
timecontainerworld.appendChild(divcontainer1w)
timecontainerworld.appendChild(divcontainer2w)