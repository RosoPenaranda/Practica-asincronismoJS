let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', url_api, true)
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error: ' + url_api)
        return callback(error, null)
      }
    }
  }
  xhttp.send()
}

fetchData(API, function (err, data) {
  if (err) return console.error(err)
  fetchData(API + data.results[0].id, function (err1, data1) {
    if (err1) return console.error(err1)
    fetchData(data1.origin.url, function (err2, data2) {
      if (err2) return console.error(err2)
      console.log(data.info.count);
      console.log(data1.name);
      console.log(data2.dimension);
    })
  })
})