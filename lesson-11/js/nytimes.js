// The URL for the Article Search API at nytimes.com
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
// STEP 1: Get your own API key and paste it below…
const key = 'TwuyAl1DPPdaP52dYYpiq0T9VQixKu5g';
let url;
// Grab references to all the DOM elements you'll need to access
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
// STEP 2: Add a submit event listener for the search form, referencing the fetchResults function as the callback

searchForm.addEventListener("submit",fetchResults);
// Functions
function fetchResults(event) {
    // Use preventDefault() to stop the form submitting
    event.preventDefault();
    // STEP 3: Assemble the full URL, according to the API documentation at the New York Times
    url = `${baseURL}?api-key=${key}&q=${searchTerm.value}&fq=document_type:("article")`;
    //Add start and end dates

    if(startDate.value !== ""){
        url = `${url}&begin_date=${startDate.value}`;
    }
    if(endDate.value !== ""){
        url = `${url}&end_date=${endDate.value}`;
    }
    console.log(url);
    // STEP 4: Use fetch() to pass the URL that we built as a request to the API service, then pass the JSON to the displayResults() function
    fetch(url).then(result => {
        return result.json();
    }).then(json=>{displayResults(json)})
    .catch(error=>{
        console.log('Error:',error);
    });

};

function displayResults(json) {
    // STEP 5: Log to the console the results from the API
    console.log(json);

    // Clear out the old results…
    while (section.firstChild) {
            section.removeChild(section.firstChild);
    };
    // STEP 6: Create the variable articles to capture the articles from the JSON object
    	let articles = json.response.docs;

    if (articles.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results returned.'
        section.appendChild(para);
    } else {
        for(let i = 0; i < articles.length; i++) {
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const link = document.createElement('a');
            const img = document.createElement('img');
            const para1 = document.createElement('p');

            const current = articles[i];
            console.log(current);
            // STEP 7a: Look at the console output from the API…
            link.href= articles[i].web_url;
            link.textContent=articles[i].headline.main;
            console.log(link);
            
            // STEP 7b: Grab the content from the JSON for the hyperlink and the article teaser (snippet)
            para1.textContent =articles[i].snippet;

            if(current.multimedia.length > 0) {
                img.src = 'https://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            };
            // STEP 8: Put each article together as an ARTICLE element and append it as a child of the SECTION element in the HTML
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para1);
            console.log(article);
            section.appendChild(article);

            
        };
    };
};

// This example adapted from "Third-party APIs" at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs


// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const randomNumber = Math.random();
//         if(randomNumber<0.5) {
//             resolve(randomNumber);
//         }else{
//             reject(error)
//         }
//     },1000);
// });

// myPromise
// .then((result)=>{
//     console.log('Promise is fulfilled',result)
// })
// .catch((error)=>{
//     console.log("promise is rejected",error)
// })