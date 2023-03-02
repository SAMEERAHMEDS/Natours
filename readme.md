# Natours Application

The tour booking website is an online platform that allows users to book their favorite tours. The website is built using various technologies such as Node.js, Express, Mongoose, and MongoDB.

The website allows users to search for tours based on various criteria such as location, activity, price, and duration. Users can also view tour details such as duration, places, amount, and reviews. Once the user has selected a tour, they can proceed to make a booking and payment through the website.

# Setting Up Local Environment To Run The Application

-> Install all the necessary dependencies, can refer to the package.json file for all dependencies.

-> Need to have the accounts with the following sites: MongoDB, MAPBOX, STRIPE, SENDGRID and MAILTRAP. Good to have the least basic knowledge of how these services work and how to use them.

-> In your .env file, set environment variables for the following:

    DATABASE DETAILS:-
    - DATABASE = your_mongodb_database_url
    - DATABASE_PASSWORD = your_mongodb_password

    JWT WEB TOKEN DETAILS:-
    - SECRET = your_json_web_token_secret
    - JWT_EXPIRES_IN = 90d
    - JWT_COOKIE_EXPIRES_IN = 90

    MAILTRAP DETAILS:-
    - EMAIL_USERNAME = your_mailtrap_username
    - EMAIL_PASSWORD = your_mailtrap_password
    - EMAIL_HOST = smtp.mailtrap.io
    - EMAIL_PORT = 25
    - EMAIL_FROM = your_real_life_email_address

    SENDGRID DETAILS:-
    - SENDGRID_USERNAME = apikey
    - SENDGRID_PASSWORD = your_sendgrid_password

    STRIPE DETAILS:-
    - STRIPE_SECRET_KEY = your_stripe_secret_key
    - STRIPE_WEBHOOK_SECRET = your_stripe_web_hook_secret

-> Start the server and have fun.
