document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const response = document.getElementById("response");
    const dancingTomato = document.getElementById("dancing-tomato");
  
    // Safety check
    if (!yesBtn || !noBtn || !response || !dancingTomato) {
      console.error("❌ One or more required elements not found in DOM");
      return;
    }
  
    /* ---------- CONFETTI ---------- */
    function spawnConfetti() {
      const types = ["heart", "orange", "tomato"];
  
      for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");
        const type = types[Math.floor(Math.random() * types.length)];
  
        confetti.className = `confetti ${type}`;
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration =
          Math.random() * 2 + 2 + "s";
  
        document.body.appendChild(confetti);
  
        setTimeout(() => confetti.remove(), 4000);
      }
    }
  
    /* ---------- HEART POP ---------- */
    function spawnHeart(x, y) {
      const heart = document.createElement("div");
      heart.className = "confetti heart";
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.animationDuration = "2s";
  
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 2000);
    }
  
    /* ---------- FINAL MESSAGE ---------- */
    function showLoveMessage(e) {
      response.innerHTML =
        `That made me really happy ❤️  
    I promise I’ll be gentle… and I might steal a shy smile or two 🌹`;
  
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
  
      spawnConfetti();
      spawnHeart(e.clientX, e.clientY);
  
      // 🍅 START DANCING TOMATO
      dancingTomato.classList.add("dance");
      console.log("🍅 Tomato is dancing!");
    }
  
    yesBtn.addEventListener("click", showLoveMessage);
    noBtn.addEventListener("click", showLoveMessage);
  
    /* ---------- PLAYFUL NO BUTTON ---------- */
    noBtn.addEventListener("mouseover", () => {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  