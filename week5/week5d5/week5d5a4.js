/* 
Öncelikle YOUR_API_KEY'i kendi api keyiniz ile değiştirin
*/

export const apiKey = '211644c4';

/*

Görev: DisplayMovieInfo fonksiyonunu aşağıdaki isterlere göre oluşturun.

1. Bir tane argüman alacak: film datasını içeren bir obje.
2. Eğer bu objenin içindeki "Response" özelliği string olarak "True" ise aşağıdaki movieInfo id'li div element'ini dönecek.

<div id="movieInfo">
  <h2>{Title}</h2>
  <p><span>Year:</span> {Year}</p>
  <p><span>Genre:</span> {Genre}</p>
  <p><span>Plot:</span> {plot}</p>
  <img src="{Poster}" alt="{Title}">
</div>

Eğer "Response" !== "True" ise aşağıdaki paragrafı dönecek

<p>No movie found with that title.</p>

*/

export function DisplayMovieInfo(movieInfo) {
  if (movieInfo.Response === 'True') {
    const movieInfoDiv = document.createElement('div');
    movieInfoDiv.id = 'movieInfo';
    movieInfoDiv.className = 'movieInfo';

    const h2 = document.createElement('h2');
    h2.textContent = movieInfo.Title;

    const p1 = document.createElement('p');
    const span1 = document.createElement('span');
    span1.textContent = 'Year:';
    p1.appendChild(span1);
    p1.append(` ${movieInfo.Year}`);

    const p2 = document.createElement('p');
    const span2 = document.createElement('span');
    span2.textContent = 'Genre: ';
    p2.appendChild(span2);
    p2.append(` ${movieInfo.Genre}`);

    const p3 = document.createElement('p');
    const span3 = document.createElement('span');
    span3.textContent = 'Plot: ';
    p3.appendChild(span3);
    p3.append(` ${movieInfo.Plot}`);

    const img = document.createElement('img');
    img.src = movieInfo.Poster;
    img.alt = `${movieInfo.Title} Poster`;

    movieInfoDiv.appendChild(h2);
    movieInfoDiv.appendChild(p1);
    movieInfoDiv.appendChild(p2);
    movieInfoDiv.appendChild(p3);
    movieInfoDiv.appendChild(img);

    return movieInfoDiv;
  } else {
    const p4 = document.createElement('p');
    p4.textContent = 'No movie found with that title.';
    return p4;
  }
}
