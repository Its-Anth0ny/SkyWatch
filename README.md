# Weather Forecast Website

This project is a modern weather forecast website built using React, Redux and TailwindCSS. The website provides current weather data based on the user's location or a searched location. It fetches weather data from the OpenWeatherMap API.

## Demo

For a demo of the website, you can view the recorded demo [here](https://drive.google.com/drive/folders/1z-auIOqvOogsHG5QJ1Whg3mPkf_NSzB3?usp=sharing).

## Live Site

Check out the live site [here](https://sky-watch-eta.vercel.app/).

## Features

- Fetches current weather data based on user's location.
- Allows users to search for weather data by city name.
- Displays weather details such as temperature, weather description, feels-like temperature, min and max temperatures, pressure, humidity, visibility, wind speed and direction, and cloudiness.
- Responsive design suitable for desktop, tablet, and mobile screens. Also, available in both Light and Dark theme.

## Technologies Used

- React.js
- Redux (for state management)
- TailwindCSS
- OpenWeatherMap API


## Usage

- The website will prompt you to allow location access. If allowed, it will display the current weather for your location.
- You can also search for the weather of any city using the search bar.

## Installation

1. Fork the repository:
    - Click the 'Fork' button at the top right of this page to create a copy of this repository under your own GitHub account.

2. Clone the forked repository:
    ```bash
    git clone https://github.com/yourusername/weather-forecast-website.git
    cd weather-forecast-website
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```plaintext
    REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```
