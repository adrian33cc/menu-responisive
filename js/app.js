(function(){
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelectorAll('.menu__hamburger');

  const addClick = () =>{
    listElements.forEach(element => {
      console.log('Estoy DENTRO')
    })
  }
})();