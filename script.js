let tabs = () => {
    const cardDetailButton = document.querySelectorAll('.card-detail__change');
    const cardTitle = document.querySelector('.card-details__title');
    const cardPrice = document.querySelector('.card-details__price');
    const cardImage = document.querySelector('.card__image_item');
    const descripMemory = document.querySelector('.description__memory');

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
            descripMemory.textContent = `Встроенная память (ROM) ${product[i].memory} ГБ`


        });
    });
};

tabs();



