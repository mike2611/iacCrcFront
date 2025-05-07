const apiUrl = "@@API_URL@@";


//Llamada a la API del counter

fetch(apiUrl, {
    method: 'GET'
})
.then(response => {
    if(!response.ok) {
        throw new Error('Network response was not ok');  
    }

    return response.json();
})
.then(data => {
    document.getElementById('visitor-counter-text').innerText = `Visitor Count: ${data.count}`
})
.catch(error => {
    console.error('Error: ', error);
})
