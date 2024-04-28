// Wait for the DOM to completely load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON file
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log('Loaded JSON data:', data); // Log the data to the console
        displayData(data); // Function to display data in the web page
        displayDescriptions(data); // Function to display descriptions about the data
    })
    .catch(error => console.error('Error loading the JSON file:', error));
});

// Function to display each data item in the HTML document
function displayData(data) {
    const display = document.getElementById('data-display');
    data.forEach(item => {
        const element = document.createElement('p');
        element.textContent = `Name: ${item.name}, Age: ${item.age}`;
        display.appendChild(element);
    });
}

// Functions to describe data
function countStudents(data) {
    return `Number of students: ${data.filter(item => item.isStudent).length}`;
}

function averageAge(data) {
    const totalAge = data.reduce((acc, item) => acc + item.age, 0);
    return `Average age: ${(totalAge / data.length).toFixed(2)}`;
}

function listNames(data) {
    return `Names: ${data.map(item => item.name).join(', ')}`;
}

// Display descriptive statistics in the HTML document
function displayDescriptions(data) {
    const desc = document.getElementById('data-display');
    desc.innerHTML += `<p>${countStudents(data)}</p>`;
    desc.innerHTML += `<p>${averageAge(data)}</p>`;
    desc.innerHTML += `<p>${listNames(data)}</p>`;
}
