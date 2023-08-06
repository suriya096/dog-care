//home slide
document.querySelectorAll(".carousel slide").forEach(carousel =>{
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonHtml =Array.from(items, () => {
        return` <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>`;
    });
carousel.insertAdjacentHTML("beforeend,"`
<ol class="carousel-indicators">
${ buttonHtml.join("")}
</ol>
`);
const buttons =carousel.querySelectorAll("#carouselExampleIndicators");
buttons.forEach((button, i) =>{
    button.addEventListener("click", () => {

        items.forEach(item => item.classList.remove(".carousel-item--selected "));
        buttons.forEach(button => button.classlist.remove("#carouselExampleIndicators-selected"));
        items[i].classlist.add("car");
        button.classList.add("car");
    });
});
items[0].classlist.add("carousel-item--selected");
button[0].classList.add("#carouselExampleIndicators-selected");
});

var a=document.getElementById("first");
var b=document.getElementById("f-error");
  function validfirst(){
    if(a.value===""){
        b.innerHTML="Enter Your First Name"
        a.style.border="5px solid red"
        return false;
    }
    else if(a.value.length<3 ||a.value.length>15){
        b.innerHTML="enter your name";
        a.style.border="5px solid red";
        return false;
    }
    else{
        b.innerHTML="name registered";
        a.style.border="5px solid green";
        return true;
    }
}
// gmail
let pingm=document.getElementById("gmail");
let f=document.getElementById("gm-error");

function validmail(){
    if(pingm.value===""){
        f.innerHTML="Enter Your gmail"
        pingm.style.border="5px solid red"
        return false;
    }
    else if(!pingm.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        f.innerHTML="Enter Your valid gmail"
        pingm.style.border="5px solid red";
        return false;
    }
    else{
        f.innerHTML="gmail regisitered";
        pingm.style.border="5px solid green";
        return true;
    }
}
// number
let g=document.getElementById("mobile")
let h=document.getElementById("m-error")

function validmobile(){
    if(g.value===""){
        h.innerHTML="Enter Your Mobile Number"
        g.style.border="5px solid red"
        return false;
    }
    else if(isNaN(g.value) || g.value.length<10 || g.value.length>10){
        h.innerHTML="Enter a Valid Number";
        g.style.border="5px solid red";
        return false;
    }
    else{
        h.innerHTML="number registered";
        g.style.border="5px solid green";
        return true;
    }
}
//address
let pinadd=document.getElementById("address")
let j=document.getElementById("a-error")

function validaddress(){
    if(pinadd.value===""){
        j.innerHTML="Enter Your message"
        pinadd.style.border="5px solid red"
        return false;
    }
    else if(!pinadd.value.match(/^[a-z A-Z 0-9 , .]*$/)){
        j.innerHTML="Enter a valid address";
        pinadd.style.border="5px solid red";
        return false;
    }
    else{
        j.innerHTML="address registered";
        pinadd.style.border="5px solid green";
        return true;
    }
}
 // review
 const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

leftArrow.addEventListener('click',function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1:0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
});

rightArrow.addEventListener('click',function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1:3;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
});