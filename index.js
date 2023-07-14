//grabing the container 
let newsCards     = document.getElementById('newsCards');
let newsAccordion = document.getElementById('newsAccordion');

// setting up news variables
let apiKey = '66fa0acc4ffa4a38bb3c6af79a5522c0';
let source = 'bbc-news';

// creating an ajax GET request
const xhr1 = new XMLHttpRequest();
xhr1.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// after getting response for creating cards
xhr1.onload = function() {
    if(this.status === 200){

        // parsing the resonse data
       let json = JSON.parse(this.responseText);
       
        // assigning the necessary variables
       let articles = json.articles;
       let newsHtml = "";

        // creating multiple cards with for-each loop   
       articles.forEach(function (element) {
       
        let news = `<!-- card -->
        <div class="col-sm-3 mb-3 mb-sm-0 my-4">
            <div class="card" style="width: 20rem; margin-left:18px;  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);">
                <img src='${element["urlToImage"]}' class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title">${element['author']}</h5>
                    <p class="card-text">${element['title']}</p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more...</a>
                </div>
            </div>
        </div>`;

        newsHtml += news;
       });
       newsCards.innerHTML = newsHtml;
       
    //    for debugging purpose
    //    console.log(articles);
    }
    else{
        console.log('some error occured!');
    }
}

// sending data to front-end
xhr1.send();


// for creating news accordions
let country = 'in';
const xhr2 = new XMLHttpRequest();
xhr2.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

// after getting response for creating accordions
xhr2.onload = function() {
    if(this.status === 200){

        // parsing the resonse data
       let json = JSON.parse(this.responseText);
       
        // assigning the necessary variables
       let articles = json.articles;
       newsHtml = "";
       let i = 1;

        // creating multiple cards with for-each loop   
       articles.forEach(function (element) {
       
       if(i != 1){ 
        var news = `  <!-- accordian -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${i}" aria-expanded="false" aria-controls="${i}">
                ${i}) ${element['title']}
                </button>
            </h2>
            <div id="${i}" class="accordion-collapse collapse" data-bs-parent="#newsAccordion">
                <div class="accordion-body">
                    <strong>Description: </strong> ${element['description']}
                    <div>
                    <img src="${element['urlToImage']}" alt="image not found!" class="rounded" style="margin-right:20px; height:200px; width:200px;">
                    <a class="btn btn-primary my-2" href = "${element['url']}" target="_blank"> Read more...</a>
                    </div>
                </div>
            </div>
        </div>`;
    }
    else{
        var news = `  <!-- accordian -->
        <div class="accordion-item my-1">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${i}" aria-expanded="true" aria-controls="${i}">
                ${i}) ${element['title']}
                </button>
            </h2>
            <div id="${i}" class="accordion-collapse collapse show" data-bs-parent="#newsAccordion">
                <div class="accordion-body">
                    <strong>Description: </strong> ${element['description']}
                    <div>
                    <img src="${element['urlToImage']}" alt="image not found!" class="rounded" style="margin-right:20px; height:200px; width:200px;">
                    <a class="btn btn-primary my-2" href = "${element['url']} "target="_blank"> Read more...</a>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // incrementing the value of 'i'
    i++;

        newsHtml += news;
       });
       newsAccordion.innerHTML = newsHtml;
       
    //    for debugging purpose
       console.log(articles);
    }
    else{
        console.log('some error occured!');
    }
}

// sending data to front-end
xhr2.send();
