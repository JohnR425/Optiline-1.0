const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

//app.use(express.static(__dirname + '/home.html')); // html
app.use(express.static(path.join(__dirname, "midware"))); // js, css, images


const server = app.listen(process.env.PORT || 4999);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/home.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/prefs.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/prefs.html'));
});


const io = require('socket.io')(server);
io.on('connection', function(socket){
    socket.on("input", (m) =>{
        runCompletion(m.p).then(text => {
            console.log("\noutput: ", text)
            io.emit("output", text);
        });
    })
});


const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function runCompletion(prompt) {

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    let response;
    let attempts = 0;

    while (attempts < 10) {
        try {
            const result = await model.generateContent(prompt);
            response = await result.response;
            break; // if successful, break the loop
        } catch (error) {
            //console.error(error);
            attempts++;
            console.log(`Attempt ${attempts} failed. Retrying...`);
        }
    }

    if (response) {
        return response.text();
    } else {
        throw new Error('Failed to generate content after 10 attempts');
    }
}







