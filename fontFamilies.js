// Array of different font families
const fonts = [

  "'Dancing Script', cursive",
  "'Indie Flower', cursive",
  "'Shadows Into Light', cursive",
  "'Caveat Brush', cursive",
  "'Just Another Hand', cursive",
  "'Permanent Marker', cursive",
  "'Rock Salt', cursive",
  // Add more fonts as needed
];

// Get references to the content elements
const contentElements = document.querySelectorAll('.grid-item');

// Assign random fonts to each content element
contentElements.forEach((element) => {
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  element.style.fontFamily = randomFont;
  console.log(randomFont)
});
