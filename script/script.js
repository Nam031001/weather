const button = document.querySelector('.button');

button.addEventListener('click', () => {
  console.log(button);
});
//button 정보 받아오기

const tempSection = document.querySelector('.temperature');
const placeSection = document.querySelector('.place');
const descSection = document.querySelector('.description');

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

const API_KEY = 'd399bb539b9cfd6d01c40c127f04881c';

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  );
  then((response) => {
    return response.json();
  });
  then((json) => {
    const temperature = json.main.temp;
    const place = json.name;
    const description = json.weather[0].description;

    tempSection.innerText = temperature;
    placeSection.innerText = place;
    descSection.innerText = description;
  });
  //json으로 변환 (fetch를 사용시 응답데이터를 JSON으로 인코딩해야 사용가능)
};
//위치 좌표 값 받아오기
