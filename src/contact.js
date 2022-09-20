import chef from './img/chef.jpeg';
import sous from './img/sous.jpeg';

const contact = () => {
    const content = document.getElementById('content');

    // Adds contact information to contents div
    const contactUs = document.createElement('p');
    contactUs.textContent = 'Contact Us'
    contactUs.classList.add('contactTitle');

    content.appendChild(contactUs);

    const chefTitle = document.createElement('p');
    chefTitle.textContent = 'Chef'
    chefTitle.classList.add('chefTitle');

    content.appendChild(chefTitle);

    const chefPic = new Image();
    chefPic.src = chef;
    chefPic.classList.add('contactPic');

    content.appendChild(chefPic);

    const sousTitle = document.createElement('p');
    sousTitle.textContent = 'Sous-Chef'
    sousTitle.classList.add('chefTitle');

    content.appendChild(sousTitle);

    const sousPic = new Image();
    sousPic.src = sous;
    sousPic.classList.add('contactPic');

    content.appendChild(sousPic);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (214) 412-2142'
    phone.classList.add('phone');

    content.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email: SoufsideRells@resaurant.com'
    email.classList.add('email');

    content.appendChild(email);
};

export {contact};