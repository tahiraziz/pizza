This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Pizzam: An idea I have to create a more social way to discover and order pizza. (Still in the works)

Built with CRA, React Router 4, and Firebase. Learning React and ES6 in the process.

Done:

* pizza data structure
* read in pizzas from firebase and generate list on home page
* read in specific pizza data for ordering using routing and generate inputs
* update state based on custom pizza creation, with option to reset to previously chosen pizza
* validation for invalid input (such as no cheese chosen or no name/description)
* validation for invalid routes (redirects to home)
* showing confirmed pizza order on successful order, with option to go back home
* successful order updates firebase and updates are live immediately. existing pizzas update pizzams, and new pizzas added to firebase

To-do:

* styles
* user authentication and user information
* determine how to integrate social aspect

- remove error message in pizzaview because redirect handles that already

Note: this is a low-fi code prototype of an idea in the works

© Copyright Tahir Aziz 2017
