document.getElementById("hamburger-icon").onclick=function()
{
  document.getElementById("side-bar-container").style.right="0";
}

document.getElementById("xicon").onclick=function()
{
  document.getElementById("side-bar-container").style.right="-80%";
}


//----------------------------------------------------------- 

function subscribe()
{
  document.getElementById("signup-space").value=null;
}


window.addEventListener("scroll",reveal);

function reveal(){
  let revealdivs=document.querySelectorAll(".reveal");
  for(let i=0;i<revealdivs.length;i++)
  {
   let windowheight=window.innerHeight;
   let revealtop=revealdivs[i].getBoundingClientRect().top;
   const revealpoint=150; 

   if(revealtop < windowheight-revealpoint)
   {
    revealdivs[i].classList.add('active');
   }
   else{
    revealdivs[i].classList.remove('active');
   }
  }
}