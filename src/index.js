import './style.css';
import {initialPage} from './initialPage';
import {menu} from './menu';

initialPage;

// Clears current page contents and adds appropriate tab content
const navButtons = document.querySelectorAll('button');
navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const mainContents = document.getElementsByClassName('mainContents');
        
        while(mainContents.item(0).firstChild != null) {
            mainContents.item(0).removeChild(mainContents.item(0).firstChild);
        };
    });
});