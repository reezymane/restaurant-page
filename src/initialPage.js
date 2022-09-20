import logo from './img/logo.png';

const initialPage = () => {
    const content = document.getElementById('content');

// Add logo to contents div
    const myLogo = new Image();
    myLogo.src = logo;
    myLogo.classList.add('logo');
    
    content.appendChild(myLogo);

// Add description/history to mainContents
    const description = document.createElement('p');
    description.textContent = 'World Class Southern-Cajun Cuisine';
    description.classList.add('restDescription');

    content.appendChild(description);

    const history = document.createElement('p');
    history.textContent = 'Been Bussin Since 1492';
    history.classList.add('history');

    content.appendChild(history);

// Adjusts button underline for current tab
    const button = document.querySelectorAll('button');
    button.forEach((button) => {
        if (button.textContent === 'Home') {
            button.style.borderBottom = '2px solid rgb(254, 244, 230)'
        } else {
            button.style.borderBottom = 'none';
        };
    });
};

export {initialPage};