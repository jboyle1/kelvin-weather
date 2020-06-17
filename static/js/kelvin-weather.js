// Create a variable named kelvin, and set it equal to 293.
const kelvin = 293;

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin. Convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
const celsius = kelvin - 273;

// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit:

// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;

// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);

// Use console.log and string interpolation to log the temperature in fahrenheit to the console. Link 'kelvin-weather.js' to index.html before the closing body tag and check in browser devtools.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// --------- Add Interactivity -------------

// Create Function that takes user name and outputs the value in a HTML string.
function say_hi () {
    let fname = document.getElementById('first-name').value;
    let html = `Hello ${fname}, please enter your degrees in Kelvin below to convert them to degrees in celcius!`;
    document.getElementById('result1').innerHTML = html;
    return fname;
}

// Add an event listener for the say_hi function.
document.getElementById('say-hi').addEventListener('click', say_hi);

// Create a function that takes a the Kelvin number and and displays the calculated Celcius number in the browser.

function kelvin_to_celcius_calc() {
    let userInput = document.getElementById('kelvin').value;
    let fname = document.getElementById('first-name').value;
    const celsius = userInput - 273;
    let userInputHtml = `${fname} asked: What is ${userInput} Kelvin in Celcius? The answer is ${celsius}`
    document.getElementById('result2').innerHTML = userInputHtml
}

// Add an event listener for the kelvin_to_celcius_calc function.
document.getElementById('submit').addEventListener('click', kelvin_to_celcius_calc);


