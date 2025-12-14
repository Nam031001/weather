const button = document.querySelector('.button');

button.addEventListener('click', () => {
  console.log(button);
});
//button 정보 받아오기

button.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(success, fail);
});

const fail = () => {
  alert('좌표를 받아올 수 없음');
};

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
};

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  );
};
//위치 좌표 값 받아오기

const API_KEY = 'KEY값';
