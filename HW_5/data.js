const content = document.querySelector('.content-box');

fetch('https://api.slingacademy.com/v1/sample-data/photos')
    .then(dataset => dataset.json())
    .then(item => item.photos.forEach(e => {
        const contentBox = document.createElement('div');
        contentBox.classList.add('content');
        content.append(contentBox);

        const contentImg = document.createElement('img');
        contentImg.classList.add('content__image');
        contentImg.src = e.url;
        contentBox.append(contentImg);

        const contentHeading = document.createElement('h1');
        contentHeading.classList.add('content__heading');
        contentHeading.textContent = e.title;
        contentBox.append(contentHeading);

        const contentDescription = document.createElement('p');
        contentDescription.classList.add('content__text');
        contentDescription.textContent = e.description;
        contentBox.append(contentDescription);

    }));