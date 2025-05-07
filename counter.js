const apiUrl = "https://ei4551lalf.execute-api.us-east-1.amazonaws.com/testing/site-counter";

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
