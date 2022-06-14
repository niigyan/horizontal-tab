let tabs = document.querySelectorAll('.tabs h3');
let tabContent = document.querySelectorAll('.content div');

tabs.forEach((tab, index)=>{
    tab.addEventListener("click",()=>{
        tabContent.forEach((content)=>{
            content.classList.remove("active");
        })
        tabs.forEach((tab)=>{
            tab.classList.remove('active');
        })
        tabs[index].classList.add("active");
        tabContent[index].classList.add("active");
    })
})