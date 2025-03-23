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
    const projectsec = document.getElementById(divid)
    projectsec.innerHTML += "<h1 class=\"text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl\">Projects</h1>"
    fetch("https://pessiv.github.io/data/projects.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(item => {
            var htmlinsanity = "<div class=\"grid h-screen place-items-center\" id=\""+item.repo+"\">";
            htmlinsanity += "<h2 class=\"text-4xl font-extrabold\">"+item.name+"</h2>";
            htmlinsanity += "<p>"+item.description+"</p>";
            htmlinsanity += "<img src=\""+item.image+"\" width=\"400\" height=\"auto\">";
            htmlinsanity += "<p>Git repo:"+item.repo+"</p></div>";
            projectsec.innerHTML += htmlinsanity;
        })
    })
}