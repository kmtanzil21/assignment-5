

 const lives = document.getElementsByClassName('lives');

  for (let i = 0; i < lives.length; i++) {
    lives[i].addEventListener('click', function () {
      let livesCount = parseInt(document.getElementById('initialLives').innerText);

      livesCount += 1;

      document.getElementById('initialLives').innerText = livesCount;
    });
  }