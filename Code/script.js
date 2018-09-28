// Our variables
const key = "bd9cf21acc024c8d8d95b0017f592410"
const url = `https://newsapi.org/v2/everything?language=sv&q=klimat&q=miljö&q=teknik&pageSize=23&apiKey=${key}`
// const url = `https://newsapi.org/v2/everything?language=en&q=sustainability&q=renewable&q=green-tech&sortBy=relevancy&apiKey=${key}`





// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) => {

      if (article.urlToImage){
      const publishedAtLength = 10;
          let shortDate = article.publishedAt.substring(0,publishedAtLength)

      const descriptionLength = 100;
            let shortDescription = article.description;
            if (article.description.length > descriptionLength) {
              shortDescription = article.description.substring (0,descriptionLength)+'...';
            }

      if (index < 1) {
        document.querySelector(".allNews").innerHTML +=
        `<div class="topNews">
          <div class="newsShow">
            <div class="news-image">
              <img src="${article.urlToImage}"/>
            </div>
            <div class="newsContent">
              <div class="published">
                <p>Publicerad: ${shortDate}</p>
                <p>Källa: ${article.source.name.toLowerCase()}</p>
              </div>
              <h2>${article.title}</h2>
            </div>
          </div>
          <div class="newsHide">
              <p>${shortDescription}</p>
              <a href="${article.url}">Read more</a>
          </div>
        </div>`
      }

    else if (index=== 1){
  document.querySelector(".allNews").innerHTML +=
        `<div class="topNewssecond">
          <div class="newsShow">
            <div class="news-image">
              <img src="${article.urlToImage}"/>
            </div>
            <div class="newsContent">
              <div class="published">
                <p>Publicerad: ${shortDate}</p>
                <p>Källa: ${article.source.name.toLowerCase()}</p>
              </div>
              <h2>${article.title}</h2>
            </div>
          </div>
          <div class="newsHide">
              <p>${shortDescription}</p>
              <a href="${article.url}">Read more</a>
          </div>
        </div>`
      }
      else {

					document.querySelector(".allNews").innerHTML +=


            `<div class="news">
              <div class="newsShow">
                <div class="news-image">
                  <img src="${article.urlToImage}"/>
                </div>
                <div class="newsContent">
                  <div class="published">
                    <p>Publicerad: ${shortDate}</p>
                    <p>Källa: ${article.source.name.toLowerCase()}</p>
                  </div>
                  <h2>${article.title}</h2>
                </div>
              </div>
              <div class="newsHide">
                  <p>${shortDescription}</p>
                  <a href="${article.url}">Read more</a>
              </div>
            </div>`
          }
        }
    })


// Toggle function

const showHide = document.getElementsByClassName("newsShow");
   [...showHide].forEach ((element) => {

         element.addEventListener("click", (e) => {
           element.classList.toggle("active");
           let newsHide = element.nextElementSibling;
           if (newsHide.style.display === "block") {
               newsHide.style.display = "none";
           } else {
               newsHide.style.display = "block";
           }

       })})

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
