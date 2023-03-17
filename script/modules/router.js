import { renderProfile, renderRepos } from "./renderData.js";

export function router() {
    routie({
        '': () => {
            renderProfile();
            console.log("home")
        },
        'repos': () => {
            renderRepos();
            console.log("detail")
        }
    })
}