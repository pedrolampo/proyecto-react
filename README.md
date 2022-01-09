# Guitar Store

This project was created during the React Js course at Coderhouse.

It was bootstrapped with [React Create App](https://github.com/facebook/create-react-app), using the [React Js](https://reactjs.org/) library.

This app acts like an e-commerce where you can search threw a catalogue with differents products; filter by category and add the items to you cart.

Before moving forward with the purchase you must create an account and sing in. This authentication process is made with Firestore Authentication.

## Configuration

The first thing you should do is clone the repository like so:

### `git clone https://github.com/pedrolampo/proyecto-react.git`

Then add all the dependencies with:

### `npm i`

## Setting up Firebase

Before initializing our project we have to create a new [Firebase](https://firebase.google.com/).

Log In and create a new app. On the overview of the project select "Web" as your app to add it, you can follow the steps and set it up for your needs.

When you are asked to add an SDK go the project folder and create an .env.local file on the top level folder (same level as package.json).

Use the .env.example file provided to guide yourself on how to name your credentials; if you want to modify them, you have to modify them in the firebase.js file aswell; and fill it with your credentials that Firebase gives you.

Make sure the .env.local file is in the .gitignore file, it should be under "misc". If it is not, go ahead and add it like so:

```
# misc
.env.local
```

#### Firestore Database

After setting Firebase up, create a Firestore Database.
Choose "production mode" on the first step, and choose the region that best suits you on step 2 (it is usually the recommended one).

When done, enable it.

Create a new collection named "products" and there you will be uploading all the items you want in your shop.

To do so, you have to create a new document on the `products` collection, you can give it an auto ID (recommended), or just give it one yourself.
Each product has to have 8 fields:

-   category (string)
-   description (string)
-   fullName (string)
-   image (string)
-   inCart (number - set it on 0 by default)
-   name (string)
-   price (number)
-   stock (number)

And there you should have all your products uploaded to the Firestore Database.

#### Authentication

First of all, go to the "Authentication" panel and set it up.

On my case I only used `email/password provider`, but you can use which ever you want, just make sure to add it to the app later.

Enable the sign in methods you want, and save.

And that is it with the Firebase configuration.

## Running the application

To start the application just run the npm command:

### `npm start`

This runs the app in the development mode.
It would automatically open [http://localhost:3000](http://localhost:3000) on the browser and load it.

The page will reload if you make any edits.
You will also see any lint errors in the console.

## About the app

If you go to the [App.js](https://github.com/pedrolampo/proyecto-react/blob/main/src/App.js) file, you can see I am using version 17 of React, so if you want to use other paths change them inside the Route component, but make sure to update the Params on every component if you do it.
