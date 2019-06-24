const fetch = require('node-fetch')



const albumList = (req, res, next) => {

    const url = 'https://jsonplaceholder.typicode.com/albums' 

    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.locals.data = data
        next()
    })
    .catch(err => console.log('error'))
}

module.exports = albumList;