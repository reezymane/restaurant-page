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

    // Add nav for Home, Menu and Contact pages
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    header.appendChild(nav);

    const home = document.createElement('button');
    home.textContent = 'Home';

    const menu = document.createElement('button');
    menu.textContent = 'Menu';

    const contact = document.createElement('button');
    contact.textContent = 'Contact';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
})();

export {initialPage};