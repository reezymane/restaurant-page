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

    content.appendChild(description);

    const history = document.createElement('p');
    history.textContent = 'Been Bussin Since 1492';

    content.appendChild(history);
};

export {initialPage};