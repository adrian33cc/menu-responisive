
(function(){
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburger');

  const addClick = () =>{
    listElements.forEach(element => {
      element.addEventListener('click', () => {
        let submenu = element.children[1];
        let height = 0;
        element.classList.toggle('menu__item--active')
        if(submenu.clientHeight === 0){
          height = submenu.scrollHeight;
        }

        submenu.style.height = `${height}px`
      });
    })
  };


  const deleteStyleHeigth = () => {
    listElements.forEach(element => {
      if(element.children[1].getAttribute('style')){
        element.children[1].removeAttribute('style');
        element.classList.remove('menu__item--active')
      }
    })
  }

  window.addEventListener('resize', () => {
    if(window.innerWidth > 800){
      deleteStyleHeigth();
    }else{
      addClick();
    }

  })

  if(window.innerWidth <= 800) {
    addClick()
  }
  menu.addEventListener('click', () => 
    list.classList.toggle('menu__links--show'));


 
  console.log('Cargando...')

})();

eventListers();
function eventListers(){
  document.addEventListener('DOMContentLoaded', inicioApp);
}


function inicioApp () {
  console.log('Iniciando App')
}
