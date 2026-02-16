git # Weather App

A simple weather app that shows current conditions for any city. Search by city name to see temperature, humidity, wind speed, and a weather icon. The card background updates with the weather (e.g. sunny, cloudy, rain, snow).

## Features

- **Search by city** — Enter a city name and get current weather (OpenWeatherMap API).
- **Current conditions** — Temperature (°F), humidity, wind speed.
- **Weather-based UI** — Background gradient and icon change by condition (clear, clouds, rain, drizzle, snow).
- **Responsive layout** — Card stays readable on different screen sizes.

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (with `@tailwindcss/vite`)
- **OpenWeatherMap** — [Current Weather API](https://openweathermap.org/current)

## Setup

1. **Clone and install**

   ```bash
   git clone <your-repo-url>
   cd weather-app
   npm install
   ```

2. **API key**

   Get a free API key from [OpenWeatherMap](https://openweathermap.org/api). Create a file in the project root named `.env`:

   ```env
   VITE_KEY=your_api_key_here
   ```

   Restart the dev server after adding or changing `.env`.

3. **Run the app**

   ```bash
   npm run dev
   ```

   Open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server (HMR)   |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint               |

## Project Structure

- `src/App.jsx` — Root layout and Weather component.
- `src/components/Weather.jsx` — Search, API call, and weather display (icons, gradients).
- `src/index.css` — Global styles and Tailwind.
- `src/assets/` — Weather and UI icons (search, clear, cloud, rain, etc.).

