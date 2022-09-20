import './style.css';
import {initialPage} from './initialPage';
import {menu} from './menu';
import {contact} from './contact';

initialPage();

// Clears current page contents and adds appropriate tab content
const navButtons = document.querySelectorAll('button');
navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const content = document.getElementById('content');
        
        while(content.firstChild != null) {
            content.removeChild(content.firstChild);
        };

        if(button.textContent === 'Home') {
            initialPage();
        } else if (button.textContent === 'Menu') {
            menu();
        };
    });
});