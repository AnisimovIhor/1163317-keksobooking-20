
var COUNT = 8;

var adverts = [];
var times = ['12:00', '13:00', '14:00'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var type = ['palace', 'flat', 'house', 'bungalo'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var shuffleArray = function () {
  return array;
};

var getRandomInt = function () {
  return Math.random();
};

var addAdverts = function () {
  for (var i = 0; i < COUNT; i++) {
    adverts.push({
      "author": {
        "avatar": 'img/avatars/user' + (i + 1) + '.png'
      },
    "offer": {
      "title": 'Домик',
      "address": getRandomInt(1,600) + ', ' + getRandomInt(1,350),
      "price": getRandomInt(1,25000),
      "type": type[getRandomInt(0, type.length -1)],
      "rooms": getRandomInt(1,10),
      "guests": getRandomInt(1,6),
      "checkin": times[getRandomInt(0, times.length - 1)],
      "checkout": times[getRandomInt(0, times.length - 1)],
      "features": shuffleArray(features).slice(0, getRandomInt(0, features.length)),
        "description": 'Красивый дом в сидом на центр города',
        "photos": массив строк случайной длинТы, содержащий адреса фотографий
    },
    "location": {
      "x":  getRandomInt(130,630),
      "y": getRandomInt(130,630)
    }
  });
  }
};


var mapSection = document.querySelector('.map');
mapSection.classList.remove('map--faded');


