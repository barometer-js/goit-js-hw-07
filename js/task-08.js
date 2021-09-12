// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const refs = {
    div: document.querySelector('#boxes'),
    render: document.querySelector('button[data-action="render"]'),
    destroy: document.querySelector('button[data-action="destroy"]'),
    input: document.querySelector('#controls input'),
}

console.log(refs.div);
console.log(refs.render);
console.log(refs.destroy);
console.log(refs.input);

refs.render.addEventListener('click', createBoxes);
refs.destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = refs.input.value;
    let widthFirstBox = 30;
    let heightFirstBox = 30;
    const newArray = [];

    for (let i = 0; i < amount; i++) {
        const newBox = document.createElement('div');
        newBox.style.width = `${widthFirstBox + i * 10}px`;
        newBox.style.height = `${heightFirstBox + i * 10}px`;
        newBox.style.backgroundColor = `rgb(${onRandomBackground()})`;

        newArray.push(newBox);
    }

    refs.div.append(...newArray);
}

function destroyBoxes() {
    refs.div.innerHTML = '';
    refs.input.value = '';
}

function onRandomBackground(min=0, max=255) {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;
   
    return [ r, g, b ].join(',');
}

console.log(onRandomBackground());

console.log(`rgb(${onRandomBackground()})`);