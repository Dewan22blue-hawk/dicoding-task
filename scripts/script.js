// tahun footer
document.addEventListener("DOMContentLoaded", function () {
  const currentYearElement = document.getElementById("jsyear");
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;

  const textContainer = document.getElementById("text-container");
  const cursor = document.querySelector(".cursor");
  const texts = ["Web Developer", "IT Support", "Technical Support", "Cohort Bangkit 2024🌟", "Junior Network Administrator", "Freelancer"];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    textContainer.textContent += texts[textIndex][charIndex];
    charIndex++;
    if (charIndex < texts[textIndex].length) {
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 3000);
    }
  }

  function erase() {
    const currentText = texts[textIndex];
    textContainer.textContent = currentText.substring(0, charIndex);
    charIndex--;
    if (charIndex >= 0) {
      setTimeout(erase, 50);
    } else {
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      cursor.style.display = "inline-block";
      cursorBlink();
      setTimeout(type, 500);
    }
  }

  function cursorBlink() {
    let isVisible = true;
    setInterval(() => {
      isVisible = !isVisible;
      cursor.style.opacity = isVisible ? "1" : "0";
    }, 500);
  }

  // Memulai animasi pengetikan
  type();
});
