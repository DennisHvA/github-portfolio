import { renderProfile, renderRepos } from "./renderData.js";

export function router() {
    routie({
        '': () => {
            renderProfile();
            console.log("home")
        },
        ':id': test => {
            renderRepos();
            console.log("detail")
        }
    })
}