const track1 = document.getElementById("1");
const track1_icon = document.getElementById("icon1");

track1_icon.onclick = function () {
  if (track1.paused) {
    track1.play();
    track1_icon.src = "/public/images/pause.png";
  } else {
    track1.pause();
    track1_icon.src = "/public/images/play.png"
  }
}