const featuredItems = `
[
    {
        "id": 1,
        "photo": "./img/model_1.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 2,
        "photo": "./img/model_2.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 3,
        "photo": "./img/model_3.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 4,
        "photo": "./img/model_4.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 5,
        "photo": "./img/model_5.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 6,
        "photo": "./img/model_6.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    }
]
`;

const createFeatured = document.createElement('div');
createFeatured.classList.add('featured');
document.body.appendChild(createFeatured);

JSON.parse(featuredItems).forEach(item => {
    const createItem = document.createElement('div');
    createItem.classList.add('item');
    createFeatured.appendChild(createItem);

    const createImg = document.createElement('img');
    createImg.classList.add('item_img');
    createItem.appendChild(createImg);
    createImg.src = item.photo;
    console.log(createImg);

    const createInfo = document.createElement('div');
    createInfo.classList.add('item_info');
    createItem.appendChild(createInfo);

    const createInfoTitle = document.createElement('a');
    createInfoTitle.classList.add('item_info__title');
    createInfoTitle.setAttribute('href', '#');
    createInfo.appendChild(createInfoTitle);
    createInfoTitle.textContent = item.brand;
    console.log(createInfoTitle);

    const createInfoText = document.createElement('p');
    createInfoText.classList.add('item_info__text');
    createInfo.appendChild(createInfoText);
    createInfoText.textContent = item.text;

    const createInfoPrice = document.createElement('p');
    createInfoPrice.classList.add('item_info__price');
    createInfo.appendChild(createInfoPrice);

    const createInfoPriceCurr = document.createElement('span');
    createInfoPriceCurr.classList.add('item_info__price-currency');
    createInfoPrice.appendChild(createInfoPriceCurr);
    createInfoPriceCurr.textContent = item.currency;

    const createInfoPriceValue = document.createElement('span');
    createInfoPriceValue.classList.add('item_info__price-value');
    createInfoPrice.appendChild(createInfoPriceValue);
    createInfoPriceValue.textContent = item.price;
});