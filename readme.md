# Natours Application

Built using modern technologies: node.js, express, mongoDB, mongoose and others.

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
