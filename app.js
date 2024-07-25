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

function addItem() {
    const name = prompt('Enter name:');
    const official_website = prompt('Enter official website:');
    const repository = prompt('Enter repository:');
    const license = prompt('Enter license:');
    const technology = prompt('Enter technology:');
    const operating_systems = prompt('Enter operating systems (comma-separated):').split(',').map(os => os.trim());
    const description = prompt('Enter description:');
    const tags = prompt('Enter tags (comma-separated):').split(',').map(tag => tag.trim());
    const newItem = { name, official_website, repository, license, technology, operating_systems, description, tags };
    data.push(newItem);
    displayData();
}

function editItem(index) {
    const item = data[index];
    const name = prompt('Enter new name:', item.name);
    const official_website = prompt('Enter new official website:', item.official_website);
    const repository = prompt('Enter new repository:', item.repository);
    const license = prompt('Enter new license:', item.license);
    const technology = prompt('Enter new technology:', item.technology);
    const operating_systems = prompt('Enter new operating systems (comma-separated):', item.operating_systems.join(',')).split(',').map(os => os.trim());
    const description = prompt('Enter new description:', item.description);
    const tags = prompt('Enter new tags (comma-separated):', item.tags.join(',')).split(',').map(tag => tag.trim());
    data[index] = { name, official_website, repository, license, technology, operating_systems, description, tags };
    displayData();
}

function deleteItem(index) {
    data.splice(index, 1);
    displayData();
}

document.getElementById('app').innerHTML = '<button onclick="addItem()">Add Item</button>';
fetchData();

