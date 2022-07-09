const quotes = [
{
    "Bill Watterson":'You know, Hobbes, some days even my lucky rocketship underpants dont help.',
    "Stephen Chbosky":'You know, Hobbes, some days even my lucky rocketship underpants dont help.',
    "John Steinbeck":"And now that you don't have to be perfect, you can be good.",
    "J.K. Rowling":"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.", 
    "J.K. Rowling":"But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.",
    "Ray Bradbury":"We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out.",
    "Oscar Wilde":"Life is never fair, and perhaps it is a good thing for most of us that it is not",
    "Dr. Seuss":"Don't cry because it's over. Smile because it happened",
    "Johann Wolfgang von Goethe":"Everything is hard before it is easy",
    "Albert Einstein":"Anyone who has never made a mistake has never tried anything new.",
    "C.S. Lewis":"Don't let your happiness depend on something you may lose."
}
]

function quote(){
const auth = JSON.stringify(quotes).slice(1,-1).replace(/":/g, "\"DELIM").replace(/","/g, "\"DELIM\"").split("DELIM");
const random = Math.floor(Math.random() * (auth.length)/2 ) * 2 + 1 ;
const re = auth[random]
document.write(re);
}

window.onload = quote;