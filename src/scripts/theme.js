const renderMode = () => {
    const btnDarkMode = document.querySelector('.btn__mode');
    const btnModeIcon = document.querySelector('.mode__icon');
    const body = document.querySelector('body');
    const verifyIcon = () => {
        if (body.classList.contains('darkMode')) {
            btnModeIcon.src = './src/assets/img/sun.svg';
            btnModeIcon.alt = 'sun';
        } else {
            btnModeIcon.src = './src/assets/img/moon.svg';
            btnModeIcon.alt = 'moon';
        }
    };

    btnDarkMode.addEventListener('click', () => {
        body.classList.toggle('darkMode');

        if (body.classList.contains('darkMode')) {
            localStorage.setItem('dark-mode', true);
        } else {
            localStorage.setItem('dark-mode', false);
        }

        verifyIcon();
    });

    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('darkMode');
    }

    verifyIcon();
};

renderMode();