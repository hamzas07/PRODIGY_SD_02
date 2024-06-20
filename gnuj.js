
function guess(event) {
event.preventDefault();
    let a = parseInt(document.getElementById("uin").value);
    let x = Math.floor(Math.random() * 100) + 1;
   

    if (a == x) {
     result.textContent="Congratulations!! You are right ";
    } else if (a > x) {
     result.textContent="Try again Guess is too high :(";
    } else {
     result.textContent="Try again Guess is too low :(";
    }


}
   document.getElementById("frid").addEventListener("submit", guess);