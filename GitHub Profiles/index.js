const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search");

async function getUser(user) {
    const resp = await fetch(APIURL + user);
    const respData = await resp.json();
    // console.log(respData);
    createUserCard(respData);

    getRepo(user);

}

async function getRepo(username) {
    const resp = await fetch(APIURL + username + "/repos");
    const respData = await resp.json();
    console.log(respData)

    createRepoForCard(respData)
}


function createUserCard(user) {
    const card = `
    <div class="card">
    <div class="image">
    <img src="${user.avatar_url}" alt="avatar" >
    </div>
    <div class="profileContent">
            <h2>${user.name}</h2>
            <p>${user.bio ? user.bio : ""}</p>
            <ul>
                <li>${user.followers}<span>Followers</span></li>
                <li>${user.following}<span>Following</span></li>
                <li>${user.public_repos}<span>Repos</span></li>
            </ul>
            <div class="repos">
            <div class="head">Repos:</div>
            </div>
            </div>
        </div>
    `
    main.innerHTML = card;

}

function createRepoForCard(repos) {
    const reposEl = document.querySelector(".repos");

    repos.forEach((repo) => {
        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl)

    });
}
form.addEventListener("submit", e => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);
        search.value = "";
    }
});
