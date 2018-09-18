const key = "94ff14c339d649d39c5e5ac1dfe41eaa"
const url = 'https://newsapi.org/v2/everything?language=en&q=sustainability&q=technology&q=innovation&sortBy=relevancy&apiKey=${key}'

// Our main function

const recievedNews=(newsdata) => {

newsdata.articles.forEach((article)=> {

  document.querySelector(".news_grid").innerHTML +=
             `<div class=“news”>
               <img src=“${article.urlToImage}“/>
               <h2>${article.title}</h2>
               <p>${article.description}</p>
               <a href=“${article.url}“>Read more</a>
             </div>`
     })
}


fetch(url)
  .then(response => response.json())
  .then (recievedNews)
