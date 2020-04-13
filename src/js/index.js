console.log('fdsfsf');

const modalForm = `
<a class="modal-btn">
    <img src="../favicon/close-24px (1).svg" alt="close" width="24" height="24">
</a>
<div class="modal_form-wrapper">
    <div class="modal_form">
        <h2 class="modal_form-title">Оставить заявку</h2>
        <input type="text" placeholder="Ваше имя">
        <input type="text" placeholder="Телефон">
        <button>Отправить</button>
    </div>
</div>
`;

const modalDiscount = `
<a class="modal-btn"> 
    <img src="../favicon/close-24px (1).svg" alt="close" width="24" height="24"> 
</a>
<div class="modal_discount-wrapper">
      <div class="modal_discount">
        <p class="modal_discount-title">Акции</p>
        <h2 class="modal_discount-subTitle">Мальчишник</h2>
        <p class="modal_discount-text">Караоке - скидка <span>50% </span></p>
        <p class="modal_discount-text">Скидка на заказ <span>10%</span></p>
        <h2 class="modal_discount-subTitle">Девичник</h2>
        <p class="modal_discount-text">Караоке - скидка <span>50% </span></p>
        <p class="modal_discount-text">Бутылка <span>шампанского</span> в подарок!</p>
        <h2 class="modal_discount-subTitle">День рождения</h2>
        <p class="modal_discount-text">Отпразднуй день рождения День в День</p>
        <p class="modal_discount-text">и получи <span>караоке Бесплатно </span>+</p>
        <p class="modal_discount-text">скидка <span>10%</span> на заказ!</p>
      </div>
    </div>
`;

const modalBurger = `<div class="burger_open">
    <a class="modal-btn"> 
        <img src="../favicon/close-24px (1).svg" alt="close" width="24" height="24"> 
    </a>
      <p class="burger_open-phone">38 067 700 92 00</p>
      <div><img src="./icons/place24px.svg" alt="location" height="24" width="24" /></div>
      <p class="burger_open-address">Киев</p>
      <p class="burger_open-address">пр-т Маяковского, 6</p>
      <div class="burger_open-sm">
        <a href="#" target="_blank"> <img class="icon" src="./icons/facebook.svg" alt="fb" height="16" width="16" /> </a>
        <a href="#" target="_blank"> <img src="./icons/instagram.svg" alt="insta" height="16" width="16" /> </a>
      </div>
    </div>`


function openModalBackDrop(modalFormStr) {
    const instance = basicLightbox.create(modalFormStr, {
        onShow: (instance) => {
            instance.element().querySelector('a').onclick = instance.close
        }
    })
    instance.show()
}

document.querySelector('button[data-action = "contactus"]').addEventListener('click', (e) => {
    openModalBackDrop(modalForm)
})

document.querySelector('button[data-action = "slider_button"]').addEventListener('click', (e) => {
    openModalBackDrop(modalForm)
})

document.querySelector('button[data-action = "reservation__imgBar-button"]').addEventListener('click', (e) => {
    openModalBackDrop(modalForm)
})

document.querySelector('button[data-action = "discount__imgBar-button"]').addEventListener('click', (e) => {
    openModalBackDrop(modalDiscount)
})



