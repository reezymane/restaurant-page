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

    // Add div for main contents of Home page
    const mainContents = document.createElement('div');
    mainContents.classList.add('mainContents');

    content.appendChild(mainContents);

    // Add logo to mainContents
    const myLogo = new Image();
    myLogo.src = logo;
    
    mainContents.appendChild(myLogo);

    // Add description/history to mainContents
    const description = document.createElement('p');
    description.textContent = 'World Class Southern-Cajun Cuisine';

    mainContents.appendChild(description);

    const history = document.createElement('p');
    history.textContent = 'Been Bussin Since 1492';

    mainContents.appendChild(history);

    // Add welcome message and location
    const welcomeDiv = document.createElement('footer');
    welcomeDiv.classList.add('welcomeDiv');

    mainContents.appendChild(welcomeDiv);

    const message = document.createElement('p');
    message.textContent = 'Come for the food, stay for the itis!'

    welcomeDiv.appendChild(message);

    const location = document.createElement('p');
    location.textContent = 'Location: 5155 Cookin Soul Ave, Dallas, TX 75226'

    welcomeDiv.appendChild(location);
})();

export {initialPage};