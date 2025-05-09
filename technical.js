<script>
  const gear = document.createElement("img");
  gear.src = "images/gear.png"; // A transparent PNG of a gear or code icon
  gear.alt = "Tech Gear";
  gear.style.position = "fixed";
  gear.style.bottom = "40px";
  gear.style.right = "40px";
  gear.style.width = "80px";
  gear.style.animation = "spin 6s linear infinite";
  document.body.appendChild(gear);

  const gearStyle = document.createElement("style");
  gearStyle.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(gearStyle);
</script>
