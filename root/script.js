const img1 = document.getElementById("ep1");
const img2 = document.getElementById("single");
const img3 = document.getElementById("ep2");

img1.addEventListener("mouseover", function(){
  let html = '';
  html += '<dl>';
  html += '<h2 class="center">Decisive Drama EP</h2>';
  html += '<dd>- Dog</dd>';  
  html += '<dd>- Ghost and a Cliff</dd>';  
  html += '<dd>- Grey Everywhere</dd>';  
  html += '<dd>- Demon in My Mirror</dd>';  
  html += '</dl>';
  document.getElementById('ep1-txt').innerHTML = html;
});
img1.addEventListener("mouseleave", function(){
  document.getElementById('ep1-txt').innerHTML = '';
});
img1.addEventListener("click", function(){
  //just use href in html
  //window.open("https://www.youtube.com/watch?v=dQw4w9Wg
});

img2.addEventListener("mouseover", function(){
  let html = '';
  html += '<h2 class="center">Crimes Away</h2>';
  document.getElementById('single-txt').innerHTML = html;
});
img2.addEventListener("mouseleave", function(){
  document.getElementById('single-txt').innerHTML = '';
});
img2.addEventListener("click", function(){

});

img3.addEventListener("mouseover", function(){
  let html = '';
  html += '<dl>';
  html += '<h2 class="center">Minerva: Triple Feature</h2>';
  html += '<dd>- Forget The Odds</dd>';  
  html += '<dd>- Regale Road</dd>';  
  html += '<dd>- Lovely Violence</dd>'; 
  html += '</dl>';
  document.getElementById('ep2-txt').innerHTML = html;
});
img3.addEventListener("mouseleave", function(){
  document.getElementById('ep2-txt').innerHTML = '';
});
img3.addEventListener("click", function(){

});