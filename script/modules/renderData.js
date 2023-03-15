import { user, repos } from "./getData.js"

const dataBody = document.querySelector("body")
// const dataItems = document.querySelector("article")

export function renderProfile() {

    const markup = `
    <article>
    <img src=${user.data.avatar_url} alt='${user.data}'/>
    <h1>${user.data.name}</h1>
    <h2>${user.data.bio}</h2>
    <section>
    <a href=#repos>repos</a>  
    <a href=https://${user.data.blog}>${user.data.blog}</a>
    </section>
    </article>
    `

    dataBody.insertAdjacentHTML('afterbegin', markup)
}

export function renderRepos() {
    const dataItems = document.querySelector("article")
    dataItems.remove();

    const markup = `
    <article></article>
    `
    for (let i = 0; i < repos.data.length; i++) { 
        if (repos.data[i].language == "JavaScript") {
            console.log("hallo")

            const markup = `
            <section>
            <h2>${repos.data[i].full_name}</h2>
            <p language-type="JavaScript">${repos.data[i].language}</p>
            <a href=${repos.data[i].html_url}>Bekijk repository</a>
            <a href=${repos.data[i].homepage}>Bekijk de site</a>
            </section>
            `
        dataBody.insertAdjacentHTML('afterbegin', markup)
        }

        if (repos.data[i].language == "CSS") {
            console.log("hallo")

            const markup = `
            <section>
            <h2>${repos.data[i].full_name}</h2>
            <p language-type="CSS">${repos.data[i].language}</p>
            <a href=${repos.data[i].html_url}>Bekijk repository</a>
            <a href=${repos.data[i].homepage}>Bekijk de site</a>
            </section>
            `
        dataBody.insertAdjacentHTML('afterbegin', markup)
        }

        if (repos.data[i].language == "HTML") {
            console.log("hallo")

            const markup = `
            <section>
            <h2>${repos.data[i].full_name}</h2>
            <p language-type="HTML">${repos.data[i].language}</p>
            <a href=${repos.data[i].html_url}>Bekijk repository</a>
            <a href=${repos.data[i].homepage}>Bekijk de site</a>
            </section>
            `
        dataBody.insertAdjacentHTML('afterbegin', markup)
        }
    // console.log(repos.data[i].language, repos.data[i].full_name)
    }

    // dataBody.insertAdjacentHTML('afterbegin', markup)
    // <p>${repos.data[i].description}</p
}