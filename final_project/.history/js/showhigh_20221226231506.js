let sidebaritem=document.querySelectorAll('.sidebar-item')
for(let i=0;i<sidebaritem;i++){
    sidebaritem[i].addEventListener('click',function(){
        for(let j=0;i<sidebaritem.length;j++){
            sidebaritem[j].classList.remove('active')
        }
        this.classList.add('active')
    })
}