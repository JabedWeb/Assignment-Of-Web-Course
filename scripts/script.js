document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".task-content").forEach(el => el.style.display = 'none');
    document.querySelector(".container").style.visibility = 'hidden';
});

function showTask(taskId, element) {
    // Hide all task contents
    document.querySelectorAll(".task-content").forEach(el => el.style.display = 'none');
    document.querySelector(".container").style.visibility = 'visible';
    // Show the selected task content
    document.getElementById(taskId).style.display = 'block';

    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('active'));

    // Add active class to the clicked tab button
    element.classList.add('active');
}

// Task 1: Perfect Number
function checkPerfectNumber() {
    console.log('checkPerfectNumber');
    var number = document.getElementById('perfectNumberInput').value;
    fetch('perfect_number.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'number=' + number
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('perfectNumberOutput').innerHTML = data;
    });
    document.getElementById('perfectNumberInput').value='';
}

// Task 2: Arithmetic Operations
function performArithmetic() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    fetch('arithmetic_operations.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'number1=' + number1 + '&number2=' + number2
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('arithmeticOutput').innerHTML = data;
    });
    document.getElementById('number1').value='';
    document.getElementById('number2').value='';
}

// Task 3: Fetching Information using AJAX
function fetchWeather() {
    fetch('fetch_weather.php')
    .then(response => response.json())
    .then(data => {
        var output = '<table class="weather-table">';
        output += '<tr><th>City</th><th>Temperature</th><th>Condition</th></tr>';
        data.weather.forEach((city, index) => {
            output += `<tr class="${index % 2 === 0 ? 'even' : 'odd'}"><td>${city.city}</td><td>${city.temperature}°C</td><td>${city.condition}</td></tr>`;
        });
        output += '</table>';
        document.getElementById('weatherOutput').innerHTML = output;
    });
}


// Task 4: Number Guessing Game
function startGame() {
    fetch('start_game.php', {
        method: 'POST',
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('gameOutput').innerHTML = '<input type="number" id="guessInput" placeholder="Enter your guess"><button onclick="guessNumber()">Guess</button><div id="guessFeedback"></div>';
    });
}

function guessNumber() {
    var guess = document.getElementById('guessInput').value;
    fetch('guess_number.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'guess=' + guess
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('guessFeedback').innerHTML = data;
        document.getElementById('guessInput').value = '';
    });
}