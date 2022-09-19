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

    const beverageItem2 = document.createElement('p');
    beverageItem2.classList.add('item');
    beverageItem2.textContent = '3 Wheel Motion';

    beverages.appendChild(beverageItem2);

    const bev2Description = document.createElement('p');
    bev2Description.classList.add('description');
    bev2Description.textContent = 'Simple Syrup, Rosemary, Bourbon, Lemon Juice, Orange Marmalade, Maple Syrup, Orange Juice, Egg Whites';

    beverages.appendChild(bev2Description);
};

export {menu};