'use strict';

let artistName = "";

let searchBar = document.querySelector('.searchBar');
let searchResults = document.querySelector('.searchResults');
let mainText = document.querySelector('.mainText');

searchBar.addEventListener('focus', function(){
    searchBar.style.width = "60%";
})

searchBar.addEventListener('blur', function(){
    searchBar.style.width = "40%";
})

searchBar.addEventListener('keypress', findResults);

function findResults(e) {
    if (e.which == 13)
    {
        searchResults.innerHTML = "";
        artistName = e.target.value;
    }
        
    
    fetch(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        mainText.textContent = `${data.results.length} results for "${artistName}"`;
        data.results.forEach(result => {
            const outerCard = document.createElement('div');
            outerCard.style.width = "15%";
            outerCard.style.backgroundColor = "#a4cbd4";
            outerCard.style.margin = "10px";
            outerCard.style.textAlign = "center";
            outerCard.style.minHeight = "10vh";
            outerCard.style.padding = "5px";
            outerCard.style.borderRadius = "0.5rem"
            outerCard.innerHTML = `
            <img src = "${result.artworkUrl100}">
            <h3>${result.artistName}</h3>
            <p>${result.collectionName}</p>
            `;
            searchResults.append(outerCard);
        });
    });
}


// const displayResult = results => {
//     results.forEach(result => {
//         const outerCard = document.createElement('div');
//         outerCard.innerHTML = `<img src = "${result.artworkUrl100}">`;
//         searchResults.append(outerCard);
//     });
// }
