var score = 0;

function init() {
  var cookie = document.getElementsByClassName ("cookie")[0];
  var score_div = document.getElementsByClassName("score")[0];
  score_div.innerHTML = score_div.innerHTML + score;

  /*Making a score count for the clicks*/
  cookie.addEventListener("click", function() {
    score = score + 1;
  var score_div = document.getElementsByClassName("score")[0];
  score_div.innerHTML = "Score: " + score;
  })
}

init();