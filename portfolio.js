// hamburger
const hamburger =
document.getElementById("hamburger");
const navMenu=
document.getElementById("navMenu");

hamburger.addEventListener("click", ()
=>{
   navMenu.classList.toggle("show");
});

// CLOSE MENU WHEN LINK IS CLICKED
document.querySelectorAll("nav").forEach(link =>{
    link.addEventList.remove("click", () =>
    navMenu.classList.remove("show"));
});

// ACTIVE NAVBAR ON SCROLL
const sections =
document.querySelectorAll("section");
const navLinks=
document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>
{
    let current="home"
    sections.forEach(sec=> {
     if (window.scrollY>= sec.offsetTop -150)current =sec.id;
    });
    navLinks.forEach(link=> {
        limk.classList.remove("active");
        if (link.getAttribute("href")===
        "#" + current)

        link.classList.add("active")

    })
});


// contact
function sendMessage(e){
    e.preventDefault();
    const name =
    document.getElementById("name").value;
    alert("Thank you" + name + "! Your message has been received.");
    e.target.reset();
}