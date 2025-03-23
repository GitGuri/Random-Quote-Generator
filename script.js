const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

//array of quotes 
const quotes = [{text:'Sango rinopa aneta', author:'Shona Proverb'},
    {text:'No friends in the industry' , author:'Aubrey Graham'},
    {text: 'Life iGame dzidzira analog' , author:'Mugaratia'},
    {text:'Learn or Parish', author:'Shadaya Knight'}
];

//function to generate random quote 
function getRandomQuote(){
    const randomIndex=Math.floor(Math.random()*quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.text;
    authorText.textContent= randomQuote.author
}

//event listerner
newQuoteBtn.addEventListener('click',getRandomQuote);




