const filterByCategory = (categoryList, productList) => {
    const categoryButtons = document.querySelector('.genresButtons__allButtons').querySelectorAll('button');
    const priceText = document.querySelector('.price__texts').querySelector('p');
    const rangeInput = document.querySelector('#rangeInput');
    let filteredProducts = [...productList];
    let buttonIndex = 0;
    let inputValue = rangeInput.value;

    categoryButtons.forEach((button, i) => {
        if (i === 0) {
            button.addEventListener('click', () => {
                buttonIndex = categoryList.indexOf(button.innerText);
                
                filteredProducts = productList.filter((product) => product.price <= inputValue);

                renderCards(filteredProducts);
            });
        } else {
            button.addEventListener('click', () => {
                buttonIndex = categoryList.indexOf(button.innerText);

                filteredProducts = productList.filter((product) => {
                    return product.category === buttonIndex && product.price <= inputValue;
                });
                
                renderCards(filteredProducts);
            });
        }
    });

    rangeInput.addEventListener('input', () => {
        inputValue = rangeInput.value;
        
        priceText.innerText = `Até R$ ${inputValue}`;
        
        if (buttonIndex === 0) {
            filteredProducts = productList.filter((product) => {
                return product.price <= inputValue;
            });
        } else {
            filteredProducts = productList.filter((product) => {
                return product.category === buttonIndex && product.price <= inputValue;
            });
        }

        renderCards(filteredProducts);
    });

    return filteredProducts;
}