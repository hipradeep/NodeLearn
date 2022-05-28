import express from 'express'

const app = express()

const port = process.env.PORT || 3000

import web  from './routers/web.js'

//set tamplets engine
app.set('view engine', 'ejs')


//Load routers
app.use('/', web)


app.listen(
    port,
    () => {
        console.log("Server runnng on http://localhost:3000");
    }
)