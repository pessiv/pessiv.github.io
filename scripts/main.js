document.title = "Portfolio Of Pessi Vilppolahti";
//section divider
const sectiondivider = document.getElementById("ssections")
function createSections(sectionsarr) {
    sectionsarr.forEach(element => {
        sectiondivider.innerHTML += "<div id=\""+element+"\"></div>"
    });
}
//projects handler
function projectsSection(divid) {
    fetch("https://pessiv.github.io/data/projects.json")
    .then(response => {
        console.log(response)
    })
}