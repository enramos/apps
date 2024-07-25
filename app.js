const apiUrl = 'data.json';
let data = [];

async function fetchData() {
    const response = await fetch(apiUrl);
    data = await response.json();
    displayData();
}

function displayData() {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p><strong>Website:</strong> <a href="${item.official_website}" target="_blank">${item.official_website}</a></p>
            <p><strong>Repository:</strong> <a href="${item.repository}" target="_blank">${item.repository}</a></p>
            <p><strong>License:</strong> ${item.license}</p>
            <p><strong>Technology:</strong> ${item.technology}</p>
            <p><strong>Operating Systems:</strong> ${item.operating_systems.join(', ')}</p>
            <p><strong>Description:</strong> ${item.description}</p>
            <p><strong>Tags:</strong> ${item.tags.join(', ')}</p>
            <button onclick="editItem(${data.indexOf(item)})">Edit</button>
            <button onclick="deleteItem(${data.indexOf(item)})">Delete</button>
        `;
        appDiv.appendChild(itemDiv);
    });
}

document.getElementById('app').innerHTML = '<button onclick="addItem()">Add Item</button>';
fetchData();

