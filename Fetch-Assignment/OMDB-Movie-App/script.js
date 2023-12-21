/* ------------- JavaScript Code Started Here------------------ */
const movieDetailsSection = document.getElementById('movieDetailsSection');
const Container = document.querySelector('.container');
const MovieSearchform = document.getElementById('searchForm');
const movieSearchBtn = document.getElementById('searchBtn');
const homeMovieContainer = document.querySelector('.container')
MovieSearchform.addEventListener('submit' , function(event) {
    event.preventDefault();
    movieDetailsSection.innerHTML = "";
    fetchData();
});


function showMovie(moviesList) {
    Container.innerHTML = "";
    const movieContainer = document.createElement('div');
          movieContainer.className = "movie-container";
    const movieImgBox = document.createElement('div');
          movieImgBox.className = "img-box";
    const movieContentBox = document.createElement('div');
        movieContentBox.className = "content-box";
            
    const movieImg = document.createElement('img');
        movieImg.src = moviesList.Poster;
    
    /* ---------Movie Info Element--------- */
    const MovieTitleElement = document.createElement('h1');
          MovieTitleElement.textContent = moviesList.Title;
    const MovieYearElement = document.createElement('p');
          MovieYearElement.textContent = moviesList.Year;
    const MovieRateElement = document.createElement('p');
          MovieRateElement.textContent = moviesList.Rated;
    const MovieReleasedElement = document.createElement('p');
         MovieReleasedElement.textContent = moviesList.Released;
    const MovieRuntimeElement = document.createElement('p');
         MovieRuntimeElement.textContent = moviesList.Runtime;


    /* ---------Append the Element in movies Container Dynamically ---------*/
    movieImgBox.append(
        movieImg
    ) 

    movieContentBox.append(
        MovieTitleElement ,
        MovieRateElement,
        MovieReleasedElement,
        MovieRuntimeElement
    )

    movieContainer.append(
        movieImgBox ,
        movieContentBox
    )
    movieDetailsSection.append (
    movieContainer
    )
}

async function fetchData() {
    try {
        const key = "c33066f1";
        const searchMovie = document.getElementById("search-movie").value;
        const apiUrl = `http://www.omdbapi.com/?i=tt3896198&t=${encodeURIComponent(searchMovie)}&apikey=${key}`;

        const response = await fetch(apiUrl);
        const finalResponse = await response.json();

        showMovie(finalResponse);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


localStorage.setItem('thmeMode1' , JSON.stringify(1));
localStorage.setItem('thmeMode2' , 2);
let whichmode = JSON.parse(localStorage.getItem('thmeMode2'));
console.log(typeof(whichmode));























// function showMoview(moviesData) {
//     console.log(moviesData)
// }

// const key = "c33066f1";
// const searchMovie = document.getElementById('search-movie').value;
// const apiUrl = `http://www.omdbapi.com/?i=tt3896198&t=${encodeURIComponent(searchMovie)}&apikey=${key}`;

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(function(finalResponse) {
//         showMoview(finalResponse);
//     })
//     .catch(function(err) {
//         console.error("Error fetching data:", err);
//     });



// /*----------------- JavaScript Code Started Here---------------------------*/
