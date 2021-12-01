const about = document.getElementById("about")
const about1 = document.getElementById("about1")
const resume = document.getElementById("resume")
const resume1 = document.getElementById("resume1")
const work = document.getElementById("work")
const work1 = document.getElementById("work1")
const blog = document.getElementById("blog")
const blog1 = document.getElementById("blog1")

const contact = document.getElementById("contact")
const contact1 = document.getElementById("contact1")


const buttons = document.querySelectorAll("li")



function showDiv(x){
    for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("selected")
                  }
        x.classList.add("selected")
    if (x.getAttribute("class")==="selected" && x.getAttribute("id")==="resume1"){
        resume.classList.remove("d-none")
    about.classList.add("d-none")
    work.classList.add("d-none")
    blog.classList.add("d-none")
    contact.classList.add("d-none")
    }
    if (x.getAttribute("class")==="selected" && x.getAttribute("id")==="about1"){

        resume.classList.add("d-none")
    about.classList.remove("d-none")
    work.classList.add("d-none")
    blog.classList.add("d-none")
    contact.classList.add("d-none")
    }
    if (x.getAttribute("class")==="selected" && x.getAttribute("id")==="work1"){
        resume.classList.add("d-none")
    about.classList.add("d-none")
    work.classList.remove("d-none")
    blog.classList.add("d-none")
    contact.classList.add("d-none")
    }
    if (x.getAttribute("class")==="selected" && x.getAttribute("id")==="blog1"){
        resume.classList.add("d-none")
    about.classList.add("d-none")
    work.classList.add("d-none")
    blog.classList.remove("d-none")
    contact.classList.add("d-none")
    }
    if (x.getAttribute("class")==="selected" && x.getAttribute("id")==="contact1"){
        resume.classList.add("d-none")
    about.classList.add("d-none")
    work.classList.add("d-none")
    blog.classList.add("d-none")
    contact.classList.remove("d-none")
    }

}
buttons.forEach( x => {
    x.onclick = () => {
        showDiv(x)

    }
})
const zoom = document.querySelectorAll("img")
for (let i = 2; i < zoom.length; i++) {
    zoom[i].classList.add("zoom")
}
