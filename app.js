require('dotenv').config({ path: `${process.cwd()}/.env` });

const express = require('express')
require('dotenv').config();
const authRouter = require('./route/authRoute')

const app = express();




app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Api is running'
    })
})


app.use('/api/v1/auth', authRouter)


app.listen(3000, () => {
    console.log('server rinning in port 3000')
})