const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
const sum = require('./operations/sum');

app.post('/sum', (req, res) => {
    const { num1 , num2 } = req.body
    res.send(sum(num1,num2))
})

app.listen(port, () => {
    console.log(`Calculator API listening at http://localhost:${port}`)
})
