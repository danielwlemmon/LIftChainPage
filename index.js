
window.onload = function () {
  const track1 = document.getElementById("1");
  const track1_icon = document.getElementById("icon1");


  console.log("window loaded");
  track1_icon.onclick = function () {
    console.log("click registered");
    if (track1.paused) {
      track1.play();
      track1_icon.src = "public/images/pause.png";
      document.getElementById("eq").style.display = "inline-block";
    } else {
      track1.pause();
      track1_icon.src = "public/images/play.png";
      document.getElementById("eq").style.display = "none";
    };
  };
};