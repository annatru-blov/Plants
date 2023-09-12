(function () {
let pricesContent = document.querySelectorAll('.content');
let selectContent = document.querySelectorAll('.select');

pricesContent.forEach(function(item) {
  item.classList.add('hidden');
})

selectContent.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const id = e.target.id;
    if (id === 'name_basics') {
      pricesContent[0].classList.remove('hidden');
      pricesContent[1].classList.add('hidden');
      pricesContent[2].classList.add('hidden');
    }
    if (id === 'name_standart') {
      pricesContent[0].classList.add('hidden');
      pricesContent[1].classList.remove('hidden');
      pricesContent[2].classList.add('hidden');
    }
    if (id === 'name_pro') {
      pricesContent[0].classList.add('hidden');
      pricesContent[1].classList.add('hidden');
      pricesContent[2].classList.remove('hidden');
    }
  });
});

document.addEventListener('click', (e) => {
pricesContent[0].classList.add('hidden');
     pricesContent[1].classList.add('hidden');
     pricesContent[2].classList.add('hidden');
  
     const id = e.target.id;
       if (id === 'name_basics') {
         pricesContent[0].classList.remove('hidden');
         pricesContent[1].classList.add('hidden');
         pricesContent[2].classList.add('hidden');
       }
       if (id === 'name_standart') {
         pricesContent[0].classList.add('hidden');
         pricesContent[1].classList.remove('hidden');
         pricesContent[2].classList.add('hidden');
       }
       if (id === 'name_pro') {
        pricesContent[0].classList.add('hidden');
        pricesContent[1].classList.add('hidden');
         pricesContent[2].classList.remove('hidden');
       }
})
}());




(function () {
    const burgerItem = document.querySelector('.burger');
    console.log(burgerItem);
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.nav-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav_active');
    });
    //console.log(window.innerWidth);
    if (window.innerWidth <= 1500) {

        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav_active');
            });
        }
    }

}());
(function () {
    const gardenItem = document.querySelector('.Gardens-but');
    const lawnItem = document.querySelector('.Lawn-but');
    const plantingItem = document.querySelector('.Planting-but');
   
    const titleItem = document.querySelectorAll('.card-title1');
   

    const cardItem = document.querySelectorAll('.card');

   
   
    gardenItem.onclick=function(e) {
        cardItem.forEach(function(i) {
          i.classList.remove('card_active'); 
        })
        titleItem.forEach(function(Item, index) {
          let button_name = e.target.textContent;
  
          if(button_name === 'Gardens'){
            button_name = 'Garden care';
          }
          
          else if (button_name === 'Lawn'){
            button_name = 'Lawn care';
          }
          
          if(button_name !== Item.textContent){
            cardItem[index].classList.add('card_active'); 
          }
            
        });
      }
      
    lawnItem.onclick=function(e) {
        cardItem.forEach(function(i) {
          i.classList.remove('card_active'); 
        })
        titleItem.forEach(function(Item, index) {
          let button_name = e.target.textContent;
  
          if(button_name === 'Gardens'){
            button_name = 'Garden care';
          }
          
          else if (button_name === 'Lawn'){
            button_name = 'Lawn care';
          }
          
          if(button_name !== Item.textContent){
            cardItem[index].classList.add('card_active'); 
          }
            
        });
      }
      plantingItem.onclick=function(e) {
        cardItem.forEach(function(i) {
          i.classList.remove('card_active'); 
        })
        titleItem.forEach(function(Item, index) {
          let button_name = e.target.textContent;
  
          if(button_name === 'Gardens'){
            button_name = 'Garden care';
          }
          
          else if (button_name === 'Lawn'){
            button_name = 'Lawn care';
          }
          
          if(button_name !== Item.textContent){
            cardItem[index].classList.add('card_active'); 
          }
            
        });
      }
           
        

  
}());




let select = function () {
  let selectHeader = document.querySelectorAll('.select_header');
  let selectItem = document.querySelectorAll('.select_item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.nu_select'),
          currentText = select.querySelector('.select_curent');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }

};


select();
(function () {
  const selItem = document.querySelectorAll('.select_body');
  const sitiItem = document.querySelectorAll('.select_content_city');
  
  console.log('selItem');
  console.log('sitiItem');
  sitiItem.forEach(function(item) {
    item.classList.add('hidden');
  })
  
  selItem.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id;
      if (id === 'Canandaigua,NY') {
        sitiItem[0].classList.remove('hidden');
        sitiItem[1].classList.add('hidden');
        sitiItem[2].classList.add('hidden');
        sitiItem[3].classList.add('hidden');
      }
      if (id === 'New York Cityt') {
        sitiItem[0].classList.add('hidden');
        sitiItem[1].classList.remove('hidden');
        sitiItem[2].classList.add('hidden');
        sitiItem[3].classList.add('hidden');
      }
      if (id === 'Yonkers, NY') {
        sitiItem[0].classList.add('hidden');
        sitiItem[1].classList.add('hidden');
        sitiItem[2].classList.remove('hidden');
        sitiItem[3].classList.add('hidden');
      }
      if (id === 'Sherrill, NY') {
        sitiItem[0].classList.add('hidden');
        sitiItem[1].classList.add('hidden');
        sitiItem[2].classList.add('hidden');
        sitiItem[3].classList.remove('hidden');
      }

    });
  });

}());