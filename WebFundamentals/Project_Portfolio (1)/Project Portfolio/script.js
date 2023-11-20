var h1=document.getElementById("h1").innerText;
var right=document.querySelector("#right");
var left=document.querySelector("#left");
var div=document.querySelector("#profile");
var leftTest=document.querySelector("#left-link");
var rightTest=document.querySelector("#right-link")
var pages1="jasser.html";

// right.remove();
// right.fill=""
// left.remove();

document.getElementById("profile").addEventListener("mouseover",()=>{
    console.log("jasser");
    if(h1=="Anis Rouis"){
        // document.getElementById("profile").innerHTML = "<a href=''><svg id='left' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-caret-left' viewBox='0 0 16 16'><path d='M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z'/></svg></a>" +
        // "<img src='./images/ninjalogo.png' alt='' class='img-fluid rounded-circle mt-5'>" +
        // "<a href='souleim.html'><svg id='right' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-caret-right' viewBox='0 0 16 16'><path d='M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z'/></svg></a>";
        leftTest.href="jasser.html";
        rightTest.href="souleim.html";
    }else if(h1=="Jasser Boulila")
    {
        leftTest.href="souleim.html";
        rightTest.href="anis.html";
        // div.innerHTML = "<a href='souleim.html'><svg id='left' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-caret-left' viewBox='0 0 16 16'><path d='M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z'/></svg></a>" +
        // "<img src='./images/ninjalogo.png' alt='' class='img-fluid rounded-circle mt-5'>" +
        // "<a href='souleim.html'><svg id='right' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-caret-right' viewBox='0 0 16 16'><path d='M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z'/></svg></a>";
    }else if(h1=="Med Soulaim ben Said"){
        leftTest.href="anis.html";
        rightTest.href="jasser.html";
    }
});