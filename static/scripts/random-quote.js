///////////////////////
// API random quotes //
///////////////////////
async function fetchQuote() {
  const url = 'https://cat-fact.herokuapp.com/facts/random';
  //http://dog-api.kinduff.com
  let response = await fetch(url);
  let quote = await response.json();
  let randomQuote = document.querySelector('.random-quote');

  randomQuote.innerHTML = quote.text;
}

fetchQuote();
