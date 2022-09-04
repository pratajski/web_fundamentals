// program pyta o InputDeviceInfokończy się gdy wcisniemy klawisz q
// pozwala dodać wartość tablicy
// pozwala odczytać wartość tablicy

var tablica = [];

while (true) {
    var userInput = prompt("Wciśnij q aby wyjść. Wciśnij a aby odać wartość, r aby odczytać");
    if (userInput.toLowerCase() == "q") {
        break;
    }
    if (userInput.toLowerCase() == "a") {
        var newItem = prompt("Podaj wartość do dodania");
        tablica.push(newItem);
        console.log("Dodano wartość")
    }
    if (userInput.toLowerCase() == "r") {
        for (i = 0; i < tablica.length; i++) {
            console.log(tablica[i]);
        }
    }
}