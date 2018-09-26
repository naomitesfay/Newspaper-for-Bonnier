// Our variables
const key = "bd9cf21acc024c8d8d95b0017f592410"
const url = `https://newsapi.org/v2/everything?language=sv&q=hållbarhet&q=teknik&sortBy=popularity&apiKey=${key}`
// const url = `https://newsapi.org/v2/everything?language=en&q=sustainability&q=renewable&q=green-tech&sortBy=relevancy&apiKey=${key}`





// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) => {



      if (article.urlToImage && index < 1) {
        document.querySelector(".allNews").innerHTML +=
        `<div class="topNews">
          <div class="news-image">
            <img src="${article.urlToImage}"/>
          </div>
          <div class="news-content">
            <p>Publicerad ${article.publishedAt}</p>
            <p>${article.source.name.toLowerCase()}</p>
            <h2>${article.title}</h2>
          </div>
            <div class="news-description">
              <p>${article.description}</p>
              <a href="${article.url}">Read more</a>
            </div>
        </div>`
      }

    else if (article.urlToImage && index=== 1){
  document.querySelector(".allNews").innerHTML +=
        `<div class="topNewssecond">
        <div class="news-image">
          <img src="${article.urlToImage}"/>
        </div>
          <div class="news-content">
            <p>Publicerad ${article.publishedAt}</p>
            <p>${article.source.name.toLowerCase()}</p>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}">Read more</a>
          </div>`
      }
      else {

					document.querySelector(".allNews").innerHTML +=

            `<div class="news">
              <div class="news-image">
                <img src="${article.urlToImage}"/>
              </div>
                <div class="news-content">
                  <p>Publicerad ${article.publishedAt}</p>
                  <p>${article.source.name.toLowerCase()}</p>
                  <h2>${article.title}</h2>
                  <p>${article.description}</p>
                  <a href="${article.url}">Read more</a>
                </div>
            </div>`
          }
    })


   // document.getElementByClassName("topNews").onclick = showDescription
    // showDescription()
}


//navbar function

window.onscroll = function() {stickyScroll()}

const navbar = document.getElementById("header")
const sticky =navbar.offsetTop

function stickyScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}



//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

// Weather API
fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=fec26f317908e347bad7fa3fb67882ea")
.then((response) => {
  return response.json()
}).then((data) => {
  const cityName = data.name.toUpperCase()
  const myTemperature = data.main.temp.toFixed(1)
  const myWeather = data.weather[0].description

  document.getElementById("cityDiv").innerHTML = cityName
  document.getElementById("tempDiv").innerHTML = myTemperature + ' \xB0'
  document.getElementById("weatherDiv").innerHTML = myWeather
})
