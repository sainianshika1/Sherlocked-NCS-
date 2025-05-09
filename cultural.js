<script>
  const mask = document.createElement("img");
  mask.src = "images/kathakali-mask.png"; // Use a Kathakali mask or similar PNG
  mask.alt = "Kathakali Graphic";
  mask.style.position = "fixed";
  mask.style.top = "50px";
  mask.style.right = "-100px";
  mask.style.width = "100px";
  mask.style.zIndex = "1000";
  mask.style.animation = "floatIn 15s linear infinite";
  document.body.appendChild(mask);

  const maskAnim = document.createElement("style");
  maskAnim.textContent = `
    @keyframes floatIn {
      0% { right: -100px; transform: rotate(0deg); }
      50% { right: 50%; transform: rotate(15deg); }
      100% { right: 110%; transform: rotate(0deg); }
    }
  `;
  document.head.appendChild(maskAnim);
</script>
