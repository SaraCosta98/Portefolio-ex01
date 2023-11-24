/*https://dev.to/official_fire/create-a-random-quote-generator-with-html-css-and-javascript-4n66*/

// Function to generate a random sentence
function getRandomWord() {
  const word = [
      "Empática",
      "Adaptável",
      "Dedicado",
      "Organizado",
      "Motivada",
      "HTML",
      "CSS",
      "Javascript",
      "SQL",
      "WordPress",
      "illustrator",
      "Figma",
      "GitHub",
  ];

  const randomIndex = Math.floor(Math.random() * word.length);
  return word[randomIndex];
}

// Function to add a random sentence to each element with class "info"
function addRandomWordToInfoElements() {
  const infoElements = document.querySelectorAll(".skill");
  infoElements.forEach(function (element) {
      const pElement = document.createElement("p");
      pElement.textContent = getRandomWord();
      element.appendChild(pElement);
  });
}

// Call the function when the page is loaded
window.addEventListener("load", addRandomWordToInfoElements);