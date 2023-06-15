const createCard = (product) => {
    const card = document.createElement('li');
    const cover = document.createElement('img');
    const info = document.createElement('p');
    const title = document.createElement('h2');
    const buy = document.createElement('span');
    const price = document.createElement('p');
    const buyButton = document.createElement('button');

    cover.src = product.img;
    cover.alt = `Capa do álbum: ${product.title}`;
    info.innerText = `${product.band} ${product.year}`;
    title.innerText = product.title;
    price.innerText = `R$ ${product.price.toFixed(2)}`;
    buyButton.innerText = 'Comprar';

    card.classList.add('card');
    cover.classList.add('card__img');
    info.classList.add('text-3', 'card__info');
    title.classList.add('title-2', 'card__title');
    buy.classList.add('card__buy');
    price.classList.add('text-1');
    buyButton.classList.add('btn__buy');
    
    buy.append(price, buyButton);
    card.append(cover, info, title, buy);

    return card;
}

const renderGenres = (list) => {
    const listAllButtons = document.querySelector('.genresButtons__allButtons');

    list.forEach((element) => {
        const buttonContainer = document.createElement('li');
        const button = document.createElement('button');

        button.innerText = element;

        button.classList.add('btn__greylow');

        button.addEventListener('click', () => {
            const allButtons = document.querySelector('.genresButtons__allButtons').querySelectorAll('button');

            allButtons.forEach((btn) => {
                btn.classList.remove('btn__greylow--active');
                btn.classList.add('btn__greylow');
            });

            button.classList.remove('btn__greylow');
            button.classList.add('btn__greylow--active');
        });

        buttonContainer.appendChild(button);
        listAllButtons.appendChild(buttonContainer);
    });

    const btnTodos = listAllButtons.querySelector('button');

    btnTodos.classList.remove('btn__greylow');
    btnTodos.classList.add('btn__greylow--active');
}

const renderCards = (list) => {
    const cardsList = document.querySelector('.cards__list');

    cardsList.innerHTML = null;
    
    list.forEach((product) => {
        const newCard = createCard(product);
        cardsList.appendChild(newCard);
    });
}

renderGenres(categories);
renderCards(filterByCategory(categories, products));