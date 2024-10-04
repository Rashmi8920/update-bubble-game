
var score = 0;
var timer = 60;
//  var hitrn=0;

// Make bubble in this section
function makebubble() {
   var clutter = "";
   for (i = 0; i <= 118; i++) {
      var rn = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble"> ${rn}</div>`
   }
   document.getElementById("pbtm").innerHTML = clutter;
}
makebubble();
// start button ki onclick functionality
document.querySelector("#start").addEventListener("click", function () {

   var check = prompt("Are you sure to play this game  ...?")

   if (check == "yes" || check == "Yes" || check == "YES") {


      //  changing hits change in this section
      function increasehit() {
         hitrn = Math.floor(Math.random() * 10);
         document.querySelector("#hitval").innerHTML = hitrn;
      }

      // increase score by 10
      function increasescore() {
         score += 10;
         document.getElementById("scoreval").textContent = score;
      }
      // timer increase 
      function runtime() {
         var timerinc = setInterval(function () {
            if (timer > 0) {
               timer--;
               document.getElementById("timeval").innerHTML = timer;
            }
            else {
               clearInterval(timerinc);
               document.getElementById("pbtm").innerHTML = "<div> <h1>GAME OVER</h1></div>"
               // end mai alert wait time
               var alertwait = setTimeout(function () { alert("Thanku!!  for play this game") }, 1000);
            }
         }, 1000);
      }

      // add an event listener to all bubble
      document.querySelector("#pbtm").addEventListener("click", function (details) {
         // alert("hi")
         var clickbub = Number(details.target.textContent);
         if (clickbub === hitrn) {
            increasescore();
            makebubble();
            increasehit();
         }
      })

      runtime();
      //  increasescore();
      increasehit();
      makebubble();

      
   }
   else{
      if (check == "no" || check == "No" || check == "NO") {
         alert("Ok as your choice.....")
      }
      else{
         alert("plz give the Correct Choice  (Yes/No)   .....")
      }
      }
     

})


