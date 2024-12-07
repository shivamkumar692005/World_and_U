# World_and_U React App

This project is a React application that displays information about countries around the world. It uses the `react-router-dom` library for navigation and fetches country data from an external API.

## Features

* **Homepage:** Displays a list of countries with basic information.
* **Country Details:** Provides detailed information about a specific country, including its flag, native names, population, region, subregion, capital, top-level domain, currencies, and languages.
* **Navigation:** Uses a navigation bar for easy access to different sections of the app.
* **Error Handling:** Includes an error page for handling routing errors.
* **Routing:** Utilizes `react-router-dom` for client-side routing.
* **API Integration:** Fetches data from an external API (`getCountryIndData`) to populate country information.
* **Loading State:** Displays a loader while fetching country data.

 
## File Structure
World_and_U/ ├── src/ │ ├── Components/ │ │ └── Layout/ │ │ ├── AppLayout.jsx │ │ └── CountryDetails.jsx │ ├── pages/ │ │ ├── About.jsx │ │ ├── Contact.jsx │ │ ├── Country.jsx │ │ ├── ErrorPage.jsx │ │ └── Home.jsx │ ├── Api/ │ │ └── PostApi.js │ ├── App.jsx │ └── app.css └── ...

## Components

* **`App.jsx`**: The main application component that sets up the router and renders the application.
* **`AppLayout.jsx`**:  Provides the main layout for the application, including the navigation bar.
* **`CountryDetails.jsx`**: Displays detailed information about a specific country.  Fetches data based on the `id` parameter in the URL.
* **`Country.jsx`**: Displays a list of countries (likely with summary information).
* **`Home.jsx`, `About.jsx`, `Contact.jsx`**:  Represent different pages/views within the application.
* **`ErrorPage.jsx`**:  Handles routing errors.
* **`PostApi.js`**: Contains functions for interacting with external APIs (in this case, `getCountryIndData`).

## Installation and Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/shivamkumar692005/World_and_U
    ```
2.  Navigate to the project directory:
    ```bash
    cd World_and_U
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm start
    ```



## Dependencies

* `react`
* `react-dom`
* `react-router-dom`
* `axios`





