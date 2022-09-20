import sangria from './img/sangria.jpeg';
import libertine from './img/libertine.jpeg';
import spokes from './img/spokes.jpeg';
import gator from './img/gator.jpeg';
import boudin from './img/boudin.jpeg';
import chicken from './img/chicken.jpeg';
import shrimp from './img/shrimp.jpg';
import chops from './img/chops.jpeg';
import gumbo from './img/chops.jpeg';


const menu = () => {
    const content = document.getElementById('content');
    
    // Add beverages to contents div
    const beverages = document.createElement('div');
    beverages.classList.add('beverages');

    content.appendChild(beverages);

    const beverageTitle = document.createElement('p');
    beverageTitle.classList.add('title')
    beverageTitle.textContent = 'Beverages';

    beverages.appendChild(beverageTitle);

    const beverageItem1 = document.createElement('p');
    beverageItem1.classList.add('item');
    beverageItem1.textContent = 'Purple Potion';

    beverages.appendChild(beverageItem1);

    const bev1Description = document.createElement('p');
    bev1Description.classList.add('description');
    bev1Description.textContent = 'Orange Juice, Ginger, Cinnamon, Triple Sec, Cherries, Red Wine, and Blackberries';

    beverages.appendChild(bev1Description);

    const sangriaPic = new Image();
    sangriaPic.src = sangria;
    sangriaPic.classList.add('pic');

    beverages.appendChild(sangriaPic);

    const beverageItem2 = document.createElement('p');
    beverageItem2.classList.add('item');
    beverageItem2.textContent = '3 Wheel Motion';

    beverages.appendChild(beverageItem2);

    const bev2Description = document.createElement('p');
    bev2Description.classList.add('description');
    bev2Description.textContent = 'Simple Syrup, Rosemary, Bourbon, Lemon Juice, Orange Marmalade, Maple Syrup, Orange Juice, Egg Whites';

    beverages.appendChild(bev2Description);

    const libertinePic = new Image();
    libertinePic.src = libertine;
    libertinePic.classList.add('pic');

    beverages.appendChild(libertinePic);

    // Add sides to contents div
    const sides = document.createElement('div');
    sides.classList.add('sides');

    content.appendChild(sides);

    const sidesTitle = document.createElement('p');
    sidesTitle.classList.add('title')
    sidesTitle.textContent = 'Sides';

    sides.appendChild(sidesTitle);

    const sideItem1 = document.createElement('p');
    sideItem1.classList.add('item');
    sideItem1.textContent = 'Gold Spokes';

    sides.appendChild(sideItem1);

    const side1Description = document.createElement('p');
    side1Description.classList.add('description');
    side1Description.textContent = 'A basket of golden fries, served with a side of Souf Sauce';

    sides.appendChild(bev2Description);

    const spokesPic = new Image();
    spokesPic.src = spokes;
    spokesPic.classList.add('pic');

    sides.appendChild(spokesPic);
};

export {menu};