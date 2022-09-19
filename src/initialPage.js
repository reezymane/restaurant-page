import logo from './logo.png';

const initialPage = (() => {
    const content = document.getElementById('content');

    const header = document.createElement('header');
    header.classList.add('header');

    content.appendChild(header);

    // Add restaurant name to header
    const restName = document.createElement('p');
    restName.textContent = 'Soufside Rell\'s';

    header.appendChild(restName);

    // Add logo to header
    const myLogo = new Image();
    myLogo.src = logo;

    header.appendChild(myLogo);
})();

export {initialPage};