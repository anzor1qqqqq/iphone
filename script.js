let tabs = () => {
    const cardDetailButton = document.querySelectorAll('.card-detail__change');
    const cardTitle = document.querySelector('.card-details__title');
    const cardPrice = document.querySelector('.card-details__price');
    const cardImage = document.querySelector('.card__image_item');
    const descripMemory = document.querySelector('.description__memory');
    const memory = document.querySelector('.memory');
    
    let product = [
        {
            name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
            img: 'img/iPhone-graphite.png',
            price: 99990,
            memory: 128
        },
        {
            name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
            img: 'img/iPhone-silver.png',
            price: 100990,
            memory: 256 
        },
        {
            name: 'Смартфон Apple iPhone 12 Pro 512GB Pacific Blue',
            img: 'img/iPhone-blue.png',
            price: 150990,
            memory: 512
        },
    ];

    cardDetailButton.forEach((elem, i) => {
        elem.addEventListener('click', () => {

            cardDetailButton.forEach((elem) => {
                elem.classList.remove('active');    
            });

            elem.classList.add('active');

            cardTitle.textContent = product[i].name;
            cardPrice.textContent = product[i].price + '₽';
            cardImage.src = product[i].img;
            descripMemory.textContent = `Встроенная память (ROM) ${product[i].memory} ГБ`;
            memory.textContent = product[i].memory;
        });
    });
};

let accordion = () => {
    const characterlList = document.querySelector('.characteristics__list');
    const characterItem = document.querySelectorAll('.characteristics__item');

    let open = (btn, elemShow) => {
        clearElem();
        elemShow.style.height = elemShow.scrollHeight + 'px';
        btn.classList.add('active');    
        elemShow.classList.add('active');
    };

    let close = (btn, elemShow) => {
        elemShow.style.height = '';
        btn.classList.remove('active');
        elemShow.classList.remove('active');
    };

    let clearElem = () => {
        characterItem.forEach((elem, i) => {
            const target = elem.querySelector('.characteristics__title');
            const elemCharact = elem.querySelector('.characteristics__description');

            if (target.classList.contains('active') && elemCharact.classList.contains('active')) {
                close(target, elemCharact);
            };
        });
    };

    characterlList.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('characteristics__title')) {
        const parent = target.closest('.characteristics__item');
        const elemCharact = parent.querySelector('.characteristics__description');

        elemCharact.classList.contains('active') ? close(target, elemCharact) : open(target, elemCharact);
        }; 
    });
};

let modal = () => {
    const buttonBuy = document.querySelector('.card-details__button_buy');
    const buttonDelivery = document.querySelector('.card-details__button_delivery');
    const modalElem = document.querySelector('.modal');
    const closeBtn = document.querySelector('.modal__close');
    const modalSubtitle = document.querySelector('.modal__subtitle');

    let openModal = () => {
        buttonBuy.addEventListener('click', () => {
            modalElem.classList.add('open');
            document.body.style.overflowY = 'hidden';
            modalSubtitle.textContent = 'Оплата';
        });

        buttonDelivery.addEventListener('click', () => {
            modalElem.classList.add('open');
            document.body.style.overflowY = 'hidden';
            modalSubtitle.textContent = 'Доставка';
        });
    };

    let closeModal = () => {
        closeBtn.addEventListener('click', () => {
            modalElem.classList.remove('open');
            document.body.style.overflowY = '';
        });

        document.addEventListener('keydown', event => {
            console.log(event.code);
            if (event.code === 'Escape') {
                modalElem.classList.remove('open');
                document.body.style.overflowY = '';
            };
        });

        modalElem.addEventListener('click', elem => {
            const target = elem.target;

            if (target.classList.contains('modal')) {
                modalElem.classList.remove('open');
                document.body.style.overflowY = '';
            };
        });

    };

  openModal();
  closeModal();
}

modal();
accordion();
tabs();     