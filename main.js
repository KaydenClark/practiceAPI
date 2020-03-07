const express = require('express')
const app = express()

const port = process.env.PORT || 5050

app.use(require('./Routes'))

app.use((req, res) => {
    res.status(404)
        .send('Unknown Request');
});

app.listen(port, () =>{
    console.log(`Express listening on port ${port}`)
})