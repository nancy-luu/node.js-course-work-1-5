const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=bc4b2f778a340e20f3c280094bf0b198&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''
    
    // allows us to register a handler
    response.on('data', (chunk) => {
        // chunk.toString() converts buffer
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

// sends request
request.end()