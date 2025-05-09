<script>
  const boat = document.createElement("img");
  boat.src = "images/kerala-boat.png"; // Use an image of Vallam Kali (snake boat race)
  boat.alt = "Kerala Boat Race";
  boat.style.position = "fixed";
  boat.style.bottom = "20px";
  boat.style.left = "-200px";
  boat.style.width = "150px";
  boat.style.zIndex = "999";
  boat.style.animation = "boatMove 12s linear infinite";
  document.body.appendChild(boat);

  const boatStyle = document.createElement("style");
boatStyle.textContent = `
  @keyframes boatMove {
    0% { left: -200px; }
    100% { left: 100vw; }
  }
`;
document.head.appendChild(boatStyle);




</script>
