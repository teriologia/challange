const fetch = require('node-fetch')

//gettin data from https://jsonplaceholder.typicode.com/albums and sending to page
const albumList = (req, res, next) => {

    const url = 'https://jsonplaceholder.typicode.com/albums' 
    
    //fetch with node-fetch module also support promise
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.locals.data = data
        next()
    })
    .catch(err => console.log('error'))
}

module.exports = albumList;