import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import { KEYS } from "../keys.js";

const octokit = new Octokit({
    auth: KEYS
});

export const user = await octokit.request("GET /user");
// console.log(user.data)

export const repos = await octokit.request("GET /user/repos");
// console.log(repos.data)

// export const languages = await octokit.request("GET /repos/{owner}/{repo}/languages", {
//     owner: "DennisHvA",
//     repo: repos.data[9].name
// });
// console.log(languages)