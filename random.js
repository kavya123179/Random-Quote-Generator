let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '""Anyone who has never made a mistake has never tried anything new." —Albert Einstein',
  
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '"Dont let your happiness depend on something you may lose." —C.S. Lewis',
    '“Life is a journey, not a destination.” —Ralph Waldo Emerson',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})