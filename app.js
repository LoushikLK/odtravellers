const express = require('express')

const path = require('path');

const app = express()

const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }))


app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

const homeTemplate = require('./routes/hometemplate')
const admin = require('./routes/admin')
const api = require('./routes/api')

const upload = require('./routes/gallery')
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/templatedata', homeTemplate)
app.use('/admin', admin)
app.use('/api', api)
app.use('/upload', upload)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})