console.info("main.js - Author: Pessi Vilppolahti")
//start of opinions
var opinionElement = document.getElementById("opinions");
function jsonGetter(filename, ename, cfunc) {
    opinionElement = document.getElementById(ename)
    fetch("https://pessiv.github.io/data/"+filename)
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(cfunc);
    })
    .catch(e => {console.log(e)})
}
function opinionated(opinion) {
    opinionElement.innerHTML += "<h2>"+opinion.otitle+"</h2>";
    opinionElement.innerHTML += "<p>"+opinion.omessage+"</p>" 
}
//end of opinions