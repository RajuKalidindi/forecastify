# Forecastify

A weather application built with React using Openweathermap API.

## Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js**: Download and install Node.js from the [official website](https://nodejs.org/). npm (Node Package Manager) is included with Node.js.

## Installation Instructions

Follow these steps to set up and run the application locally:

1.  **Fork and Clone the Repository**

    First, fork the repository on GitHub, then clone it to your local machine using:

    ```bash
    git clone {repository-url}
    ```

    Replace {repository-url} with the URL of your forked repository.

2.  **Navigate into the Project Directory:**

    ```bash
    cd forecastify
    ```

3.  **Install Dependencies Install the required dependencies by running:**

    ```bash
    npm install
    ```

4.  **Create Environment Files:**

    Create the following .env file in the root of the project:

    -   .env

5.  **Set Environment Variables Inside each .env file:**
    Set the VITE_API_URL variable:

    -   For .env:

        ```bash
        VITE_API_KEY={your_openweather_api_key}
        ```

        Replace {your_openweather_api_key} with your actual API Key.

6.  **Running the Application:**

    To start the application, run the following command:

        ```bash
        npm run dev
        ```

    Access the Application Open your web browser and navigate to http://localhost:5173 to view your application in action.
