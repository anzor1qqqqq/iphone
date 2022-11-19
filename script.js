let getData = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.status === 200 && request.readyState == 4) {
        const objProd = JSON.parse(request.response);
        callback(objProd);
        };
    });
};

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
        characterItem.forEach((elem) => {
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
    const cardTitleText = document.querySelector('.card-details__title');
    const modalTitleText = document.querySelector('.modal__title');

    let openModal = () => {
        buttonBuy.addEventListener('click', (event) => {
            modalElem.classList.add('open');
            document.body.style.overflowY = 'hidden';
            modalSubtitle.textContent = event.target.dataset.buy;
            modalTitleText.textContent = cardTitleText.textContent;
            closeModal();
        });

        buttonDelivery.addEventListener('click', (event) => {
            modalElem.classList.add('open');
            document.body.style.overflowY = 'hidden';
            modalSubtitle.textContent = event.target.dataset.buy;
            modalTitleText.textContent = cardTitleText.textContent;
            closeModal();
        });
    };

    let closeModal = () => {
        closeBtn.addEventListener('click', () => {
            modalElem.classList.remove('open');
            document.body.style.overflowY = '';
        });

        document.addEventListener('keydown', event => {
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
};

let additProducts = () => {
    const elemMoreButton = document.querySelector('.elem_more_button');
    const sellList = document.querySelector('.cross-sell__list');

    let counter = 0;
    let base = [];
    let list = '';
    let counter2 = 0;

    let createlistProd = (arr) => {

        if (base.length === 12) {
            return;
        };
        
         for (let i = 0; i < 4;) {
            counter = Math.floor(Math.random(i) * 13);
            if (base.indexOf(counter, 0) === -1) {
                base[counter2] = counter;
                list += `
                <li>
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src="${arr[counter].photo}" alt="">
                        <h3 class="cross-sell__title">${arr[counter].name}</h3>
                        <p class="cross-sell__price">${arr[counter].price}</p>
                        <button type="button" class="button button_buy cross-sell__button">Купить</>
                    </article>
                </li>
                `
                i++;
                counter2++;
                };
            };

        sellList.innerHTML = list;
        
        if (base.length === 12) {
            elemMoreButton.classList.remove('active');
        };
    };
    
    elemMoreButton.addEventListener('click', () => {
        getData('cross-sell-dbase/dbase.json', createlistProd);
    });

    getData('cross-sell-dbase/dbase.json', createlistProd);
};

modal();
accordion();
tabs();     
additProducts();