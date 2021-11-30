const about = document.getElementById("about")
const resume = document.getElementById("resume")
const resume1 = document.getElementById("resume1")
const work = document.getElementById("Work")
const blog = document.getElementById("Blog")
const contact = document.getElementById("Contact")
const menu = document.getElementsByClassName(".menu")
const buttons = document.querySelectorAll("li")

buttons.forEach(x=> {
    x.onclick = () => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("selected")
            // buttons[i].classList.add("d-none")
        }
        x.classList.add("selected")
        // x.classList.remove("d-none")
        // x.classList.add("d-block")

    }

})

// for (let i = 0; i < menu.length; i++) {
//     buttons.forEach( x=>{
//         if(x.classList = "selected"){
//             console.log("aa")
//     }
//
// })
// }
resume1.onclick = () => {
    resume.classList.remove("d-none")
 // resume.classList.add("d-block")
}
function showDiv() {
    for (let i = 0; i < menu.length; i++) {
        menu[i].style.display = "block"
    }

}