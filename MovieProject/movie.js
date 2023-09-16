// let title = document.getElementById("Title");
// let year = document.getElementById("Year");
// let awards = document.getElementById("awards");
// let country = document.getElementById("country");
// let boxoffice = document.getElementById("boxoffice");
// let director = document.getElementById("director");
// let genre = document.getElementById("genre");
// let description = document.getElementById("description");
// let language = document.getElementById("language");
// let ratings = document.getElementById("ratings")
// let searchmovie = document.getElementById("moviename");
// let btn = document.getElementById("btn");
// let image = document.getElementById("image")
// let loader = document.getElementById("loader")

// btn.addEventListener("click",()=>{
//     fetch('http://www.omdbapi.com/?apikey=61e576a4&t='+ searchmovie.value).then((response)=>{
//         return response.json().then((data)=>{
//             title.innerText = data.Title;
//             year.innerText = data.Year;
//             awards.innerText= data.Awards;
//             country.innerText = data.Country;
//             boxoffice.innerText = data.BoxOffice;
//             director.innerText = data.Director;
//             genre.innerText = data.Genre;
//             description.innerText = data.Plot;
//             language.innerText = data.Language;
//             ratings.innerText = data.Ratings;
//         })
//     })
// })



// btn.addEventListener("click",()=>{
//     loader.classList.add("loader")
//     fetch(`http://www.omdbapi.com/?apikey=61e576a4&t=${searchmovie.value}`).then((response)=>{
//         return response.json().then((data)=>{
//             title.innerText = data.Title;
//                         year.innerText = data.Year;
//                         awards.innerText= data.Awards;
//                         country.innerText = data.Country;
//                         boxoffice.innerText = data.BoxOffice;
//                         director.innerText = data.Director;
//                         genre.innerText = data.Genre;
//                         description.innerText = data.Plot;
//                         language.innerText = data.Language;
//                         ratings.innerText = data.Ratings[0].Value;
//                         image.src = data.Poster;
//                         loader.classList.remove("loader")
//         })
//     })
// })





// let title = document.getElementById("title");
// let genre = document.getElementById("genre");
// let awards = document.getElementById("awards");
// let director = document.getElementById("director");
// let language = document.getElementById("language");
// let description = document.getElementById("description");
// let type = document.getElementById("type");
// let boxoffice = document.getElementById("boxoffice");
// let ratings = document.getElementById("ratings");
// let moviename = document.getElementById("moviename");
// let btn = document.getElementById("btn")
// let image = document.getElementById("image")
// let loader = document.getElementById("loader")


// btn.addEventListener("click",()=>{
//     loader.classList.add("loader")
//     fetch(`http://www.omdbapi.com/?apikey=61e576a4&t=${moviename.value}`)
//     .then((message)=>{
//         return message.json().then((data)=>{
//             title.innerText = "Title : "+ data.Title;
//             genre.innerText= "Genre : "+ data.Genre;
//             awards.innerText = "Awards : "+ data.Awards;
//             director.innerText = "Director : "+ data.Director;
//             language.innerText = "Language : "+ data.Language;
//             description.innerText = "Description : "+ data.Plot;
//             type.innerText = "Type : "+ data.Type;
//             boxoffice.innerText = "Boxoffice : "+ data.BoxOffice;
//             ratings.innerText = "Ratings : "+ data.Ratings[0].Value;
//             image.src =  data.Poster;
//             loader.classList.remove("loader")

            

//             document.getElementById("title").style.color="red"
            

            
//         })
//     })
// })