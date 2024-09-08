
# Specialty Crop Market Data Fetching and Display

## Project Overview

As a small-scale farmer focused on specialty crops, I often find myself needing access to up-to-date market data, particularly for crops like **bell peppers** and **tomatoes**. The information from terminal markets provides valuable insights into pricing trends, origins, and other key details that can influence my farming decisions. This project is an attempt to automate the process of retrieving such information using a backend API and displaying it in a simple, user-friendly front-end interface.

Although my primary passion lies in farming, I’ve recently completed a coding bootcamp to gain skills in software development. I’m still very much a beginner, but this project represents my growing understanding of full stack development—integrating my interests in agriculture with technology.

## Features

- Fetches real-time data on specialty crops such as bell peppers and tomatoes from the USDA Market News API.
- Displays key market details, including:
  - **Package Type**
  - **Low and High Prices**
  - **Origin**
  - **Environment**
  - **Size**
  - **Grade**
  - **Organic Status**
  - **Published Date**
- Simple, intuitive front-end that appends this information under corresponding commodity listings for easy viewing.

## Motivation

As a farmer, having access to current market data is crucial to making informed decisions about pricing, crop management, and where to sell my produce. This project allows me to explore how technology can aid in that decision-making process, while also helping me grow as a software developer.

## Tech Stack

- **Node.js** for the backend server.
- **Express** for handling API requests.
- **node-fetch** for making HTTP requests to the USDA API.
- **HTML/CSS/JavaScript** for the front-end interface.
- **Cors** to allow cross-origin requests.

## Project Structure

```
/project-root
    /frontend
        index.html           // Frontend UI
        script.js            // Fetching and displaying data
        styles.css           // Styling for the front end
    /backend
        server.mjs           // Backend server logic, including API calls
        .env                 // Environment variables (API keys, etc.)
        package.json         // Dependencies and scripts
    .gitignore               // Ignore sensitive files
    README.md                // This file
```

## How It Works

1. The backend server (written in **Node.js**) makes requests to the USDA API to retrieve market reports for various specialty crops.
2. These reports are filtered on the front end, displaying only the crops I’m particularly interested in, like **bell peppers** and **tomatoes**.
3. Each crop's details, such as its **origin**, **prices**, and whether it’s **organic**, are presented in a list format for easy interpretation.

## How to Run the Project

1. Clone the repository.
2. Install dependencies by running `npm install` in the backend folder.
3. Create a `.env` file in the backend folder and add your USDA API key.
4. Run the backend server using `node server.mjs`.
5. Open the frontend `index.html` in a web browser to see the data displayed.

## Challenges and Learning

Though I’m still getting familiar with full stack development, I’ve found this project to be a great opportunity to apply the skills I learned during my bootcamp. From setting up the server to managing API requests and integrating the front end with the back end, each step has been a valuable learning experience.

## Future Improvements

- Adding more filtering options for other specialty crops.
- Improving the front-end design and responsiveness.
- Optimizing the backend for faster API responses and better error handling.
- Deploying the app for public use, so other farmers can benefit from real-time market data.

## Acknowledgments

This project wouldn't have been possible without the skills and foundation I gained from my coding bootcamp. Though I'm still learning and growing as a software developer, I'm excited to explore how technology can support the farming community and provide valuable insights into market conditions.
