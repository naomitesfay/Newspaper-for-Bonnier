// Our variables
const key = "bd9cf21acc024c8d8d95b0017f592410"
const url = `https://newsapi.org/v2/everything?language=en&q=sustainability&q=renewable&q=green-tech&sortBy=relevancy&apiKey=${key}`


// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {

      let smallTitle = article.title;
      if (article.title.length > 90) {
        smallTitle = article.title.fontsize(4);
      }

      const descriptionLength = 100;
      let shortDescription = article.description;
      if (article.description.length > descriptionLength) {
        shortDescription = article.description.substring (0,descriptionLength)+'...';
      }
					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
              <img src="${article.urlToImage}"/>
              <p>${article.source.name}</p>
              <h2>${smallTitle}</h2>
              <p>${shortDescription}</p>
              <a href="${article.url}">Read more</a>
            </div>`
    })
}




//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
