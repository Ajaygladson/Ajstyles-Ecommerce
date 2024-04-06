document.getElementById("hamburger-icon").onclick=function()
{
  document.getElementById("side-bar-container").style.right="0";
}

document.getElementById("xicon").onclick=function()
{
  document.getElementById("side-bar-container").style.right="-80%";
}


//----------------------------------------------------------- 


// ==============================================================

document.getElementById("searchvalue").addEventListener("keyup",searching);
let products=document.getElementById("clothes-bag").querySelectorAll("div");
function searching(event)
{
   let enteredvalue=event.target.value.toUpperCase();
   for(let i=0;i<products.length;i++)
   {
    if(products[i].querySelector("p").textContent.toUpperCase().indexOf(enteredvalue)<0)
    {
      products[i].style.display="none";
    }
    else
    {
      products[i].style.display="block";
    }
   }
}


// Scroll reveal================================================

