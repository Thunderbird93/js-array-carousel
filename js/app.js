const imagesArray = [
    '01.jpg',
    '02.jgp', 
    '03.jpg', 
    '04.jpg', 
    '05.jpg'
];

let imagesTags = '';

const slider = document.querySelector('.slider');

for (let i = 0; i < imagesArray.length; i++){
    imagesTags += `
        <img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
    `;
}

let counterImages = 0;

const up = document.querySelector('.up');
const down = document.querySelector('.down');

slider.innerHTML += imagesTags;