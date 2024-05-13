//main updated
const socket = io("http://localhost:4999");
let hList;

// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Function to erase a cookie
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}



//recieves output data from socket and displays it on home.html
socket.on("output", (text)=>{
    document.getElementById("output").innerHTML = text;
});


//helper function for below
function handleTabs(e){
    if (e.key == 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);

        // put caret at right position again
        this.selectionStart =
        this.selectionEnd = start + 1;
    }
}

//called in main.js to handle tabs
function callTabs(){
    document.getElementById('codeblock').addEventListener('keydown', handleTabs);
    document.getElementById('instructions').addEventListener('keydown', handleTabs);
}

//send input information through the socket
// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Send input information through the socket
function debug(){
    let instructions = document.getElementById('instructions');
    let codeblock = document.getElementById('codeblock');
    if(instructions.value == "" || codeblock.value == ""){
        alert("Please enter text in both boxes");
        return;
    }

    let preferences = JSON.parse(getCookie('preferences')) || {};

    let prompt = instructions.value + "\n" + codeblock.value;

    if(preferences.packages){
        prompt += "\nProvide a single line of code that I can put in terminal to download all of the necessary libraries or package dependencies for this code and a sentence for each package, explaining what it does.";
    } else if(preferences.documentation){
        prompt += "\nRewrite this code with documentation in it. Include comments. Make sure not to change the input code under any circumstances, even if it doesn't match the instrunctions.";        
    } else if (preferences.opti) {
        prompt += "\nRewrite this code to optimize time and memory. Explain what was changed as well.";
    } else if (preferences.refactor) {
        prompt += "\nRefactor the code to make it cleaner and more concise by changing the spacing, structuring, and/or implemenation. Make sure the functionality does not change though. Also provide an explanation of the changes made.";
    } else if (preferences.debug) {
        prompt += "\nThere is an error in this code, debug it and provide the corrected solution. Also, explain what was changed.";
    } else {
       alert("Please select a preference")
       return
    }

    socket.emit("input", {p: prompt});
    document.getElementById("output").innerHTML = "Generating response...";
}



function copyText(){ 
    if(this.innerHTML == ""){
        return;
    }
    navigator.clipboard.writeText(this.innerHTML);
    alert("Output copied to clipboard.")
}

function copyOutput(){
    document.getElementById("output").addEventListener('click', copyText);
}
