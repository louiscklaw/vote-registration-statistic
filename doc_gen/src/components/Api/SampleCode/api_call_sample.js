
export const api_call_sample1 = (url) => {
  return `
#!/usr/bin/env node

// yarn init -y && yarn add node-fetch

// enable with nodejs
// const fetch = require('node-fetch')

fetch("${url}")
  .then(res => res.json())
  .then(res_json => console.log(res_json))
`.trim()
}

export const api_call_sample = (url) => {
  return `

// if you working with nodejs, i prefer "node-fetch"
// yarn init -y && yarn add node-fetch
// const fetch = require('node-fetch')

fetch('${url}')
  .then(res => res.json())
`.trim()
}
