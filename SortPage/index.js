document.querySelector('#sort_button').onclick = sortType;

let sortArrow = document.querySelector('#sort-arrow');

let clicks = 0;

let goodsList = document.querySelector('#ul');

function sortType() {
    clicks++;
    if (clicks % 2 != 0) {
        ascendingSort();
        sortArrow.style.transform = 'rotate(0deg)';
    } else {
        descendingSort();
        sortArrow.style.transform = 'rotate(180deg)';
    }
}

function ascendingSort() {
    for (let i = 0; i < goodsList.children.length; i++) {
        for (let j = i; j < goodsList.children.length; j++) {
            if (+goodsList.children[i].getAttribute('item-price') > +goodsList.children[j].getAttribute('item-price')) {
                let currentElement = goodsList.children[i];
                goodsList.children[i].replaceWith(goodsList.children[j]);
                goodsList.children[i].after(currentElement);
            }
        }
    }
}

function descendingSort() {
    for (let i = 0; i < goodsList.children.length; i++) {
        for (let j = i; j < goodsList.children.length; j++) {
            if (+goodsList.children[i].getAttribute('item-price') < +goodsList.children[j].getAttribute('item-price')) {
                let currentElement = goodsList.children[i];
                goodsList.children[i].replaceWith(goodsList.children[j]);
                goodsList.children[i].after(currentElement);
            }
        }
    }
}

