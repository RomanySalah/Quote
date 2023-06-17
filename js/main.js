let qoutesArr = [
    {
        'author': 'Oscar Wilde',
        'quote': "Be yourself; everyone else is already taken."
    },
    {
        'author': ' Albert Einstein',
        'quote': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        'author': ' Frank Zappa',
        'quote': 'So many books, so little time.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Be the change that you wish to see in the world.'
    },
    {
        'author': 'Robert Frost',
        'quote': 'In three words I can sum up everything Ive learned about life: it goes on.'
    },
 
];

function QuoteRand() {
    let random = Number.parseInt(Math.random() * qoutesArr.length);
    document.getElementById('quoteOne').innerHTML = `${qoutesArr[random].quote}`;
    document.getElementById('quoteTwo').innerHTML = `${qoutesArr[random].author}`;

}
