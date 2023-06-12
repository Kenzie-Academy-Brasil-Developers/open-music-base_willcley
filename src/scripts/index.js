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
    price.innerText = product.price;
    buyButton.innerText = 'Comprar';
    
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

        buttonContainer.appendChild(button);
        listAllButtons.appendChild(buttonContainer);
    });
}

const renderCards = (list) => {
    const cardsList = document.querySelector('.cards__list');

    list.forEach((product) => {
        const newCard = createCard(product);
        cardsList.appendChild(newCard);
    });
}

renderGenres(categories);
renderCards(products);