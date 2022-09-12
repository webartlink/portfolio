// КУРС ВАЛЮТ.

// Объект с курсами 3-х валют.
const rates = {};

// Элементы для отображения
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');

// Элементы формы. Ввод суммы, выбор валюты, поле с результатом.
const input = document.querySelector('#input');
const select = document.querySelector('#select');
const result = document.querySelector('#result');

getCurrencies();

// Получение курса валют и отображение их на странице.
async function getCurrencies() {

const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
const data = await response.json();
const result = await data;

rates.USD = result.Valute.USD;
rates.EUR = result.Valute.EUR;
rates.GBP = result.Valute.GBP;

console.log(rates)

elementUSD.textContent = rates.USD.Value.toFixed(2);
elementEUR.textContent = rates.EUR.Value.toFixed(2);
elementGBP.textContent = rates.GBP.Value.toFixed(2);

// Цвет для информера USD
if (rates.USD.Value > rates.USD.Previous) {
    elementUSD.classList.add('top')
} else {
    elementUSD.classList.add('bottom')
}

// Цвет для информера EUR
if (rates.EUR.Value > rates.EUR.Previous) {
    elementEUR.classList.add('top')
} else {
    elementEUR.classList.add('bottom')
}

// Цвет для информера GBP
if (rates.GBP.Value > rates.GBP.Previous) {
    elementGBP.classList.add('top')
} else {
    elementGBP.classList.add('bottom')
}
}


// API WEATHER

fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=4a1862841768d4b2aecbc8098ec63d1e')
.then(function (resp) { return resp.json() })
.then(function (data) {
	console.log(data)
	document.querySelector('.weather__city').textContent = data.name;
	document.querySelector('.weather__temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg';
	// document.querySelector('.weather__sky').textContent = data.weather[0]['description'];
	document.querySelector('.weather__img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}.png">`;

})
.catch(function () {
	
})
// https://openweathermap.org/img/wn/04d@2x.png

// Дата и время.

function addZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

function getDateTime(t = new Date()) {
	let year = t.getFullYear();
	let month = months[(t.getMonth())];
	let day = addZero(t.getDate());
	let weekDay = days[t.getDay()];
	let hours = addZero(t.getHours());
	let minutes = addZero(t.getMinutes());

	console.log(year, month, day, weekDay, hours, minutes);

	return `${day} ${month} ${year} ${weekDay} ${hours}:${minutes}`
	}

console.log(getDateTime())

document.querySelector('.dateTime').innerHTML = getDateTime();


$(function(){


    $('.portfolio__slider').slick({

        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>'
    });


});


var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

























































