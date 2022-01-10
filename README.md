# Guitar Store

This project was created during the React Js course at Coderhouse.

It was bootstrapped with [React Create App](https://github.com/facebook/create-react-app), using the [React Js](https://reactjs.org/) library.

This app acts like an e-commerce where you can search threw a catalogue with differents products; filter by category and add the items to you cart.

Before moving forward with the purchase you must create an account and sing in. This authentication process is made with Firestore Authentication.

#### Table of Contents

[Configuration](https://github.com/pedrolampo/proyecto-react#configuration)<br>
[Setting up Firebase](https://github.com/pedrolampo/proyecto-react#setting-up-firebase)<br>
[Firestore Database](https://github.com/pedrolampo/proyecto-react#firestore-database)<br>
[Authentication](https://github.com/pedrolampo/proyecto-react#authentication)<br>
[Running the application](https://github.com/pedrolampo/proyecto-react#running-the-application)<br>
[About the app](https://github.com/pedrolampo/proyecto-react#about-the-app)<br>

## Configuration

The first thing you should do is clone the repository like so:

#### `git clone https://github.com/pedrolampo/proyecto-react.git`

Then add all the dependencies with:

#### `npm i`

This will add:

-   React
-   React-dom
-   React-router-dom
-   Firebase
-   React-scripts
-   Web-vitals

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

## Firestore Database

After setting Firebase up, create a Firestore Database.<br>
Select "production mode" on the first step, and choose the region that best suits you on step 2 (it is usually the recommended one).

When done, enable it.

Create a new collection named `products` and there you will be uploading all the items you want in your shop.

To do so, you have to create a new document on the `products` collection, you can give it an auto ID (recommended), or just give it one yourself.<br>
Each product has to have 8 fields:

-   category (string)
-   description (string)
-   fullName (string)
-   image (string)
-   inCart (number - set it on 0 by default)
-   name (string)
-   price (number)
-   stock (number)

In the "image" field you should write the path like this:

#### `/img/image.png`

The images should go on public and inside the [img](https://github.com/pedrolampo/proyecto-react/tree/main/public/img) folder.

And there you should have all your products uploaded to the Firestore Database.

## Authentication

First of all, go to the "Authentication" panel and set it up.

On my case I only used `email/password provider`, but you can use which ever you want, just make sure to add it to the app later.

Enable the sign in methods you want, and save.

And that is it with the Firebase configuration.

## Running the application

To start the application just run the npm command:

### `npm start`

This runs the app in the development mode.<br>
It would automatically open [http://localhost:3000](http://localhost:3000) on the browser and load it.

The page will reload if you make any edits.<br>
You will also see any lint errors in the console.

## About the app

If you go to the [App.js](https://github.com/pedrolampo/proyecto-react/blob/main/src/App.js) file, you can see I am using version 17 of React, so if you want to use other paths change them inside the Route component, but make sure to update the Params on every component if you do it.

### How to make a purchase

When you load the app, the first thing you do is see all the products there are, including the out of stock ones.

You can filter by category, and go into the detail of the ones you choose.

In there you can choose the quantity you want to buy, and add them to the cart.<br>
Note that this only works with products that have stock available, if a product runs out of stock, all the buttons (quantity and add to cart) will be disabled.

You won't be able to see the items in you cart, unless you are signed in.<br>
So at the top, on the navbar, you can go to the Login page and login if you have an account, or sign up if you don't.

When creating an account, all the data will be stored in the Firestore Database under the `users` collection. In there you will have the full name, email, username, password, and the date the user created his account.<br>
You will also have the user ID on the `Authentication` page.

Now that you are signed in, you can move on on your purchase. You have to add the contact info and then the purchase will be processed.

If all the info is OK, then you will have a purchase ID that you can see over your user dashboard.

Next I will be adding a GIF to show the process of purchasing an item.

`GIF`

And that will be all of my app.<br>
Thank you for checking it and your interest. Also I'm happy to receive any feedback.
