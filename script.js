const nembre = Math.floor(Math.random() * 100);
const input = document.getElementById('valeur');
const msg = document.getElementById('msg');
const p = document.getElementById('p');
let i=7;
function etape(){
p.textContent=" n : "+(7-i);}


function verifier() {
    
  const valeur = Number(input.value);
  if(input.value!="" && input.value<=100){
    msg.style.color="black";
  
  if(i==0){
    msg.textContent="vous avez perdu le nembre est: "+nembre+"";
  }
  else{
    if (valeur > nembre) {
    msg.textContent = "Choisir un nombre plus petit que : "+input.value+"";
    i--;
    input.value="";
  } else if (valeur < nembre) {
    msg.textContent = "Choisir un nombre plus grand que : " +input.value+"";
    i--;
    input.value="";
  } else{
    msg.textContent = "Super !!";
  }
  }
}
else{
    msg.style.color="red";
}
etape();
}
input.addEventListener('keydown', function(e){
if (e.key === 'Enter') 
{
  verifier();
}
})

 

