<div align="center">
  <h1>🌍 Around The World</h1>
  <p><strong>A modern, highly optimized country explorer web application.</strong></p>

  <p>
    <a href="https://around-the-w0rld.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Live_Demo-View_Site-10B981?style=for-the-badge&logo=vercel" alt="Live Demo">
    </a>
  </p>

  <p>
    <a href="https://github.com/N3ssar/around-the-world/issues"><img src="https://img.shields.io/github/issues/N3ssar/around-the-world?style=for-the-badge&color=f75c7e" alt="Issues"></a>
    <a href="https://github.com/N3ssar/around-the-world/stargazers"><img src="https://img.shields.io/github/stars/N3ssar/around-the-world?style=for-the-badge&color=f75c7e" alt="Stars"></a>
    <a href="https://github.com/N3ssar/around-the-world/network/members"><img src="https://img.shields.io/github/forks/N3ssar/around-the-world?style=for-the-badge&color=f75c7e" alt="Forks"></a>
  </p>
</div>

---

## 📖 About The Project

**Around The World** is an interactive frontend web application that provides detailed information about countries worldwide using the [REST Countries API](https://restcountries.com/). Built to demonstrate modern architecture and engineering best practices, it focuses on performance, type safety, and seamless user experience.

Whether you're searching for a specific nation, filtering by region, or clicking through border countries, the app ensures a blazing-fast, visually pleasing journey across the globe.

---

## 📸 Project Previews

<div align="center">
  <h3>Home Page (Search & Filter - Dark Mode)</h3>
  <img src="./docs/filter%20by%20search%20and%20region.png" alt="Home Page - Filter and Search" width="100%" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  
  <br><br>

  <h3>Country Details Page (Dark Mode)</h3>
  <img src="./docs/deatils%20page.png" alt="Country Details Page" width="100%" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
</div>

---

## ✨ Key Features

- **🚀 Advanced Tech Stack:** Built with React and TypeScript for maximum type safety, powered by Vite for lightning-fast bundling.
- **🎨 Rapid Styling:** Fully responsive and elegantly styled using Tailwind CSS.
- **🌓 Theme Customization:** Integrated Dark/Light mode toggling that respects user preferences.
- **🧭 Dynamic Routing:** Uses React Router DOM for seamless transitions between the main grid and deep-dive detail pages.
- **🛡️ Polished UI/UX:** Features smooth micro-interactions, robust error handling, loading spinners, and beautifully crafted "Empty States".

---

## ⚡ Performance Optimizations

- **💾 Client-Side Caching (Local Storage):** Implemented a repository pattern in the API layer to cache the heavy initial payload of all countries. This ensures **instant load times (0ms)** on return visits and provides a resilient offline-first experience.
- **🖼️ UI Rendering Efficiency:** Managed complex React state lifecycles to prevent unnecessary re-renders when filtering and searching through the 250+ country array.
- **📦 Bundle Size Reduction:** Utilized Vite for a highly optimized, minified production build with rapid Hot Module Replacement (HMR) during development.

---

## 🧠 Challenges Overcome

- **Complex API Data Structures:** Handling dynamic nested keys in the REST Countries API (e.g., varying currency objects and native names per country) required robust TypeScript interfaces and careful object mapping logic.
- **Accurate Border Routing:** Transitioned from searching by country names (which caused partial-match bugs, e.g., "Oman" returning "Romania") to using strict `cca3` country codes. This eliminated edge cases and ensured 100% accurate border navigation.
- **Eliminating UI Flickering:** Refactored initial loading states to prevent "Empty State" flashes before data was retrieved from the cache or API, resulting in a buttery-smooth, professional user experience.

---

## 🛠️ Built With

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js and npm installed on your machine.
* npm
  ```sh
  npm install npm@latest -g
````

### Installation

1.  Clone the repo
    ```sh
    git clone [https://github.com/N3ssar/around-the-world.git](https://github.com/N3ssar/around-the-world.git)
    ```
2.  Navigate to the project directory
    ```sh
    cd around-the-world
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Start the development server
    ```sh
    npm run dev
    ```

-----

## 👨‍💻 Author

**Muhammad Nassar**

  * GitHub: [@N3ssar](https://www.google.com/search?q=https://github.com/N3ssar)
  * LinkedIn: [Muhammad Ahmad Nassar](https://www.linkedin.com/in/muhammad-ahmad-nassar/)

If you like this project, please consider giving it a ⭐\!