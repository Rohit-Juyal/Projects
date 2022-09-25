const meals = document.getElementById("meals");
const favMeals = document.getElementById("favMeals");
const searchTerm = document.getElementById("searchTerm");
const searchBtn = document.getElementById("searchBtn");


getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    console.log(randomMeal);

    addMeal(randomMeal, true);
}

async function getMealById(id) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id);

    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal;
}

async function getMealBySearch(term) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);

    const respData = await resp.json();
    const meal = respData.meals;

    return meal;

}

function addMeal(mealData, random = false) {     //  ?
    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        <div class="newMealHeader">
            ${random ? `<div class="new">New in Menu</div>` : ""}
            <img src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}" id="img">
        </div>
        <div class="favourite">
            <div id="foodName">${mealData.strMeal}</div>
            <button class="favBtn"><i class="fa-solid fa-heart"></i></button>
        </div>
    `;

    const btn = meal.querySelector(".favourite .favBtn"); 

    btn.addEventListener("click", () => {
        if(btn.classList.contains("active")) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
            btn.style.color = "#c8c4c4";
        } else {
            addMealLS(mealData.idMeal);
            btn.classList.add("active");
            btn.style.color = "red";
        }

        
        fetchFavMeals();
    })

    meals.appendChild(meal);
} 

function addMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter(id => id !== mealId)));
}

function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));

    return mealIds === null ? [] : mealIds;
}

async function fetchFavMeals() {
    // clean the container
    favMeals.innerHTML = "";
    const mealIds = getMealsLS();

    for(let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        const meal = await getMealById(mealId);
        
        addMealFav(meal);
    }
}

function addMealFav(mealData) {     //  ?
    const favMeal = document.createElement("div");
    favMeal.classList.add("favMeal");

    favMeal.innerHTML = `
    <img src="${mealData.strMealThumb}"
        alt="${mealData.strMeal}" class="favImg">
    <span>${mealData.strMeal}</span>
    <button class="clear"><i class="fa-solid fa-circle-xmark"></i></i></button>
    `;

    const btn = favMeal.querySelector(".clear");

    btn.addEventListener("click", () => {
        removeMealLS(mealData.idMeal);
        fetchFavMeals();

    });

    favMeals.appendChild(favMeal);
}

searchBtn.addEventListener("click", async () => {
    const search = searchTerm.value;

    const meals = await getMealBySearch(search);

    meals.forEach((meal) => {
        addMeal(meal);
    })
})