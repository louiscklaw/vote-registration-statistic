export const csv_api_call_sample = (url) => {
  return `
#!/usr/bin/env node

// yarn init -y && yarn add node-fetch

// enable with nodejs
// const fetch = require('node-fetch')

fetch('${url}')
  .then(res => res.text())
`.trim()
}
