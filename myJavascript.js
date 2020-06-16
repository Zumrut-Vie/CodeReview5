//JSON file to JS
var moviesJS = JSON.parse(movies);

//Creating the HTML 

function movieTemplate(movie){
		return`
<div class="favmovies">
<img class="movie-img" src="${movie.img}">
<h2 class="movie-name">${movie.name}</h2>
<p class="movie-desc">${movie.desc}</p>
<button class="btn">${movie.likes}<span>Likes</span</button>
</div>
  	`}

document.getElementById("main").innerHTML = `${moviesJS.map(movieTemplate).join("")}`

//Like BUTTON

let likeButton = document.getElementsByClassName("btn");
for(let i=0; i<likeButton.length; i++) {
	var button = likeButton[i];
	button.onclick = function() {
	likeButton[i].innerHTML = moviesJS[i].likes++;
	}
}
