document.addEventListener('DOMContentLoaded',()=>{


    const menuOpen = document.querySelector('.menu-open');
    const menuClose = document.querySelector('.menu-close-close-xmax');
    const menuContainer = document.querySelector('.menu');

    if(menuOpen !== null){

    menuOpen.addEventListener('click',()=>{

        menuContainer.classList.add('open-menu');
    });
}

 if(menuClose !== null){
     menuClose.addEventListener('click',()=>{

        menuContainer.classList.remove('open-menu');
    });
  }
})