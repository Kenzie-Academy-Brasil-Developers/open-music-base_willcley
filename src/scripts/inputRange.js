const progressBar = () => {
    const rangeInput = document.querySelector('#rangeInput');
    const progressBar = document.querySelector('.progressBar');

    rangeInput.addEventListener('input', () => {
        progressBar.style = `width: ${rangeInput.value}%`;
    });
};

progressBar();