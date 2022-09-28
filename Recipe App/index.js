const mealsEl = document.getElementById("meals");
const favMeals = document.getElementById("favMeals");
const mealPopup = document.getElementById("mealPopup");
const mealInfoEl = document.getElementById("mealInfo");
const popupCloseBtn = document.getElementById("closePopup");

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
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);

    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal;
}

async function getMealBySearch(term) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);

    const respData = await resp.json();
    const meals = respData.meals;

    return meals;

}

function addMeal(mealData, random = false) {     //  ?
    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        <div class="newMealHeader">
            ${random ? `<div class="new">New in Menu</div>` : ""}
            <img src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}" class="newMenuImg">
        </div>
        <div class="favourite">
            <div id="foodName">${mealData.strMeal}</div>
            <button class="favBtn"><i class="fa-solid fa-heart"></i></button>
        </div>
    `;

    const btn = meal.querySelector(".favourite .favBtn");

    btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
            btn.style.color = "#c8c4c4";
        } else {
            addMealLS(mealData.idMeal);
            btn.classList.add("active");
            btn.style.color = "red";
            location.reload();
        }

        fetchFavMeals();

    })

    newMenuImg = meal.querySelector(".newMenuImg");

    newMenuImg.addEventListener("click", () => {
        showMealInfo(mealData);
    })


    // meal.addEventListener("click", () => {
    //     showMealInfo(mealData);
    // })

    mealsEl.appendChild(meal);
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

    for (let i = 0; i < mealIds.length; i++) {
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
        alt="${mealData.strMeal}" class="favImg"/>
    <span>${mealData.strMeal}</span>
    <button class="clear"><i class="fa-solid fa-circle-xmark"></i></i></button>
    `;

    const btn = favMeal.querySelector(".clear");

    btn.addEventListener("click", () => {
        removeMealLS(mealData.idMeal);
        fetchFavMeals();

    });

    // favMeal.addEventListener("click", () => {
    //     showMealInfo(mealData);
    // })

    const favbtn = favMeal.querySelector(".favImg");

    favbtn.addEventListener("click", () => {
        showMealInfo(mealData);
    })

    favMeals.appendChild(favMeal);
}

function showMealInfo(mealData) {
    // clean it up
    mealInfoEl.innerHTML = "";

    // update the Meal info
    const mealEl = document.createElement("div");

    const ingredients = [];

    // get ingredients and measures
    for (let i = 1; i <= 20; i++) {
        if (mealData["strIngredient" + i]) {
            ingredients.push(`${mealData["strIngredient" + i]} - ${mealData["strMeasure" + i]}`
            )
        } else {
            break;
        }
    }

    mealEl.innerHTML = `
    <h1>${mealData.strMeal}</h1>
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    <p>${mealData.strInstructions}</p>
    <h3>Ingredients:</h3>
        <ul>
            ${ingredients.map((ing) => `
            <li>${ing}</li>
            `).join("")}
        </ul>
        `

    mealInfoEl.appendChild(mealEl);

    // show the popup

    mealPopup.classList.remove("hidden")
}


const node = document.querySelector(".input");
node.addEventListener("keyup", async (event) => {
    if (event.key === "Enter") {
    mealsEl.innerHTML = "";

    const search = searchTerm.value;

    const meals = await getMealBySearch(search);

    meals.forEach((meal) => {
        addMeal(meal);
    })
    }
});

searchBtn.addEventListener("click", async () => {

    // clean container 
    mealsEl.innerHTML = "";

    const search = searchTerm.value;

    const meals = await getMealBySearch(search);

    meals.forEach((meal) => {
        addMeal(meal);
    })
})

popupCloseBtn.addEventListener("click", () => {
    mealPopup.classList.add("hidden");
})