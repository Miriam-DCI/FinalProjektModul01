// Event-Listener für das DOMContentLoaded-Event
document.addEventListener('DOMContentLoaded', function () {
    const textContainers = document.querySelectorAll('.text-container'); // Klasse "text-container" statt "textContainer" verwenden
    
    textContainers.forEach(textContainer => {
        const filePath = textContainer.getAttribute('data-filepath'); // Hier wird der Dateipfad aus dem Attribut ausgelesen
        
        // Lese den Text aus der Datei
        fetch(filePath)
            .then(response => response.text())
            .then(text => {
                // Füge den Text in das HTML-Dokument ein
                textContainer.innerHTML = `<p>${text}</p>`;
                 // Text formatieren und in das HTML-Element einfügen
                 text = text.replace(/\n/g, '<br>'); // Zeilenumbrüche hinzufügen
                 text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Fett geschriebenen Text hervorheben
                 textContainer.innerHTML = text; // HTML-Tags interpretieren
            })
            .catch(error => {
                console.error('Fehler beim Laden der Datei:', error);
            });
    });
});

            


//             // URL zur Textdatei
//             // Funktion, die den JavaScript-Code ausführt
//             function loadText() {
//                 // URL zur Textdatei
//                 let textFileUrl = '../content/004_tierwesen.txt';
                
//                 console.log(textFileUrl);
//                 // Element, in dem der Text angezeigt werden soll
//                 let textContainer = document.getElementById('text-container');

//                 // Text aus der Datei einlesen
//                 fetch(textFileUrl)
//                     .then(response => {
//                         console.log(response);
//                         if (!response.ok) {
//                             throw new Error('Network response was not ok');
//                         }
//                         return response.text();
//                     })
//                     .then(text => {
//                 // Text formatieren und in das HTML-Element einfügen
//                 text = text.replace(/\n/g, '<br>'); // Zeilenumbrüche hinzufügen
//                 text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Fett geschriebenen Text hervorheben
//                 textContainer.innerHTML = text; // HTML-Tags interpretieren
//             })
//                     .catch(error => {
//                         console.error('Error:', error);
//                     });
//             }

//             // Event-Listener für das DOMContentLoaded-Event
//             document.addEventListener('DOMContentLoaded', loadText);
// 