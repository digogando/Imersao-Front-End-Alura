const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.array.array.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
}


document.addEventListener('input', function() {
    const searchTerm = searchInput.ariaValueMax.toLowerCase();
    if (searchTerm === '') {
        ressultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }
})