# SCAMPS
This project is intended to demonstrate the skills I have gained during phase 4 at Flatiron. The project comprises a single page application designed using Rails and React. The purpose of the application is for parents to sign their children up for Summer camps. Its main components are:

-A back-end built with Ruby on Rails and PostgreSQL

-A front-end built with React where users can interact with the API to register for camps, edit their registrations and communicate with camp staff.

-Camp staff can view the rosters for each camp and can view and respond to communications from parents.

## Running

 From the root directory run
 $ bundle install
 $ rails db: migrate db:seed
 $ npm install --prefix client

Then to start run
$ rails s
$ npm start --prefix client

---IMPORTANT---
Users are required to log in to access most of the functionality of the app. Users can create a new account under sign up. To access the admin version of the site you need to log in as:
  username: admin
  password: password