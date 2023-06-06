// OpenWeatherMap API
const getWeatherData = async (countryName) => {
    try {
      // to fetch the data from the api
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(countryName)}&appid=ad0536549d37c335378450fbdb95e002&units=metric`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
  
      const weatherContainer = document.querySelector('.weather-container');
      weatherContainer.innerHTML = '';
  
      const weatherInfo = document.createElement('p');
      weatherInfo.textContent = `Temperature in ${countryName}: ${data.main.temp}°C`;
      weatherContainer.appendChild(weatherInfo);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  
  // Fetch button event listener
  const fetchButton = document.querySelector('.fetch-button');
  fetchButton.addEventListener('click', () => {
    const countryInput = document.querySelector('.country-input');
    const countryName = countryInput.value;
    //calls getWeatherData function
    getWeatherData(countryName);
  });
  