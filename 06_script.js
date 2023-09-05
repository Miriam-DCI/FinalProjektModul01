// URL zur Textdatei
let textFileUrl = 'content/001_terranier.txt';
console.log(textFileUrl);
// Element, in dem der Text angezeigt werden soll
let textContainer = document.getElementById('text-container');

// Text aus der Datei einlesen
fetch(textFileUrl)
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        // Den eingelesenen Text in das HTML-Element einfügen
        textContainer.textContent = text;
    })
    .catch(error => {
        console.error('Error:', error);
    });
