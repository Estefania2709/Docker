const express = require('express');
const app = express();
const port = 3000
const fs = require('fs');

app.use(express.static('public'));

const readhtml = (page) => { 
    app.get('/', (req, res) => {    
    fs.readFile(`${__dirname}/${page}`, (err, data) => {    
        
        if (err) {
        res.writeHead(500)
        return res.end('Error al cargar index.html')
        } else {  
        res.writeHead(200)
        res.end(data)
        }
    })
    })
}

readhtml('./index.html')

app.listen(port, () => {
console.log(`listen on port ${port}`)
})
