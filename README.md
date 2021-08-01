# Super Galactic Age Calculator

#### An application that takes a person's age in Earth years and converts that age depending on other planet's orbits around the sun. It also determines their average life expectancy on each planet depending on inputted life expectancy on Earth. If they have passed their life expectancy, the app will return how many years they have lived passed it.

#### **By Shane Graff**

#### Table of Contents

1. [Technologies Used](#technologies)
2. [Description](#description)
3. [Setup/Installation Requirements](#setup)
4. [Additional Setup/Installation Note for Windows Users](#mac)
5. [Specifications](#specs)
6. [Known Bugs](#bugs)
7. [License](#license)
8. [Contact Information](#contact)

## Technologies Used <a id="technologies"></a>

* Babel
* Bootstrap
* CSS
* css-loader
* eslint
* eslint-loader
* HTML5
* package-json
* Javascript
* Jest
* JQuery
* Node.js
* Node Package Manager
* popper.js
* style-loader
* webpack
* webpack-cli
* webpack-dev-server

## Description <a id="description"></a>

The Super Galactic Age Calculator takes two inputs from a user: _Earth Age_, and _Life Expectancy_ instantiates a Person object with both values. The application then returns the Person objects' age in "Mercury years", "Venus years", "Mars years", and "Jupiter years." The different planet years are determined by how long it takes for them to fully orbit the sun. The app also returns the _Life Expectancy_ for each planet from the converted planet years for each planet. If the age entered surpasses that of the life expectancy entered, the app will return the number of years the person has lived beyond their life expectancy. See below for setting up the build environment.

## Setup/Installation Requirements <a id="setup"></a>

1. Open the terminal on your local machine
2. Install [Node.js](https://nodejs.org/en/) if not already installed
3. Install [Nope Package Manager (npm)](https://www.npmjs.com/) if not already installed on your local machine. You can find installation instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)
4. Navigate to the directory where you will be cloning the project to
5. Clone the project to your current directory using the following command: `git clone https://github.com/ShanGGraff/`
6. Make sure to `cd` into the the cloned project directory. Make sure to be in the root directory of the project
7. Run `npm install` in the terminal to install project environment and required dependencies 
8. Run `npm run build` to create production environment
9. If you'd like to run project in a development server run the following: _`npm run start`_
10. To run Lint, use the following command: `npm run lint`
11. To run tests with Jest, use the following: `npm test`

## Additional Setup/Installation Note for Mac Users <a id="mac"></a>

To get the environment to work properly on a Mac, change line 8 in the package.json file in the root directory to: `"start": "npm run build, webpack-dev-server --open  -mode development",`

Also add .DS_Store to the .gitignore file in the root directory.

## Specifications <a id="specs"></a>

Describe: Person Object

"Create a Person object with constructor for age, life expectancy, and the difference betwee both"
Expect(let person = new Person(20, 76); Person { age: 20, lifeExpectancy: 76, yearsLeft: 56 })

Test1: "Convert the Earth age of a person to the age they would have in Mercury years"
If the interger **20** is inputed, the method should return **83.33** as Mercury's orbit around the sun is .24 that of Earth's.

Test2: "Convert the Earth age of a person to the age they would have in Venus years"
If the interger **20** is inputed, the method should return **32.26** since Venus' orbit around the sun is .62 that of Earth's.

Test3: "Convert the Earth age of a person to the age they would have in Mars years"
If the interger **20** is inputed, the method should return **10.64** since Mars' orbit around the sun is 1.88 that of Earth's. 

Test4: "Convert the Earth age of a person to the age they would have in Jupiter years"
If the interger **20** is inputed, the method should return **01.69** since Jupiter's orbit around the sun is 11.86 that of Earth's.

Test5-9: "Return the amount of years left on each planet by finding the difference between age and life expectancy"

Expected behavior: If age is greater than life expectancy, return the difference between both as the amount of expected years left before reaching life expectancy for each planet. If age is equal to life expectancy, return that you have reached life expectancy for each plant. If age is less than life expectancy, return how many years you have lived passed life expectancy for each planet. 

Example: if you are 20 and life expectancy is 76, you would be 83.33 in Mercury years with 233.33 years left until you reach life expectancy on Mercury.

## Known Bugs <a id="bugs"></a>
* Need to add UI and exception handling for input.

## License
* [MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2021 Creators 

## Contact Information <a id="contact"></a>

* Shane Graff <copellius@gmail.com>
* Github page: https://github.com/ShanGGraff
* LinkedIn: https://www.linkedin.com/in/shanegraff/