document.title = "Portfolio Of Pessi Vilppolahti";
const sectiondivider = document.getElementById("ssections")
function createSections(sectionsarr) {
    sectionsarr.forEach(element => {
        sectiondivider.innerHTML += "<div id=\""+element+"\"></div>"
    });
}