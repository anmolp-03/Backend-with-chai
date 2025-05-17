const express = require('express')
const app = express()
const port = 3000

const githubdata = {
  "login": "anmolp-03",
  "id": 154700503,
  "node_id": "U_kgDOCTiK1w",
  "avatar_url": "https://avatars.githubusercontent.com/u/154700503?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/anmolp-03",
  "html_url": "https://github.com/anmolp-03",
  "followers_url": "https://api.github.com/users/anmolp-03/followers",
  "following_url": "https://api.github.com/users/anmolp-03/following{/other_user}",
  "gists_url": "https://api.github.com/users/anmolp-03/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/anmolp-03/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/anmolp-03/subscriptions",
  "organizations_url": "https://api.github.com/users/anmolp-03/orgs",
  "repos_url": "https://api.github.com/users/anmolp-03/repos",
  "events_url": "https://api.github.com/users/anmolp-03/events{/privacy}",
  "received_events_url": "https://api.github.com/users/anmolp-03/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Anmol Panjwani",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-12-23T18:56:29Z",
  "updated_at": "2025-04-29T17:04:58Z"
}

app.get('/', (req, res) => {
  res.send('Hello Anmol! Welcome to index.js Backend')
})

app.get('/instagram', (req, res) =>{
    res.send('arre.yrrr.anmol')
})

app.get('/login', (req,res) =>{
    res.send('<h1>Login here </h1>')
})

app.get('/github', (req, res) => {
    res.json(githubdata)
})

app.listen(port, () => {
  console.log(`App listening on port ${port} :) `)
})
