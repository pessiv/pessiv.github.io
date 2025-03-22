console.info("main.js - Author: Pessi Vilppolahti")
var opinionElement = document.getElementById("opinions");
opinionElement.innerHTML += "<h1>Opinion:</h1>"
var currentJson = []
function jsonGetter(filename) {
    console.info("loading "+filename)
    fetch("https://pessiv.github.io/data/"+filename)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        currentJson.push(data)
        console.log(currentJson)
    })
    .catch(e => {console.log(e)})
    console.info("loaded"+filename)
}
function tagsWithStyle(tag,content) {

}