const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = ''; //
const APP_ID ='';     //
const APP_key = '';   //
const baseURL = '';   // 

searchForm.addEvenListner('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
});

async function feachAPI (){
  const basURL =''
  const response = await fetch(baseURL);
  const data =await fetch.json();
  generationHTML(data.hits);
  console.log(data)
}
function generationHTML(results){
  const generatedHTML = '';
  results.map(result => {
    generatedHTML += 
    `
    <div class="item">
      <img src="${results.recipe.image}" alt=""> 
      <div class="flex-container">
        <h1 class="title">${result.recipe.label}This is a recipe</h1>
        <a class="view-button" href="#">View Recipe</a>
      </div>
      <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}120</p>
    </div>
    `
  }) //
  searchResultDiv.innerHTML = generatedHTML;
}