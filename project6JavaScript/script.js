let emoset=["😂","🤣","😘","😁","😒","😊","😎","😢","😜","😀","😅","😆","😉","😊","😋","🤦‍♀️","🤷‍♀️","😗","🤩","😑","🫡","😶‍🌫️","🙄","😮","🫥","😴","🥱","😫","😪","😯","🤐","😌","😛","😜","🤤","😒","🙃","😖","😞","😦","😭","😢","😤","🤑","😟","😨","😱","🥶","😵","😷","😵‍💫"];
const emoji=document.querySelector(".emoji");
emoji.addEventListener("mouseover",function(){
    emoji.innerHTML=emoset[Math.floor(Math.random()*emoset.length)];
})