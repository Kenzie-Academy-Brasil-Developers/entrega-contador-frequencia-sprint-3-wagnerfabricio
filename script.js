const button = document.getElementById("countButton");

button.addEventListener("click", function () {
  //   Capture and clean result divs
  const wordsDiv = document.getElementById("wordsDiv");
  const letters = document.getElementById("lettersDiv");
  wordsDiv.innerText = "";
  letters.innerText = "";

  let typedText = document.getElementById("textInput").value;

  //transform text in lower case
  typedText = typedText.toLowerCase();

  //remove special char in comum letters
  typedText = typedText.replace(/[^a-z'\s]+/g, "");

  /* -------------------- count letters -------------------- */
  const letterCounts = {};

  for (let i = 0; i < typedText.length; i++) {
    let currentLetter = typedText[i];

    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }

  for (let letter in letterCounts) {
    //   create results

    const span = document.createElement("span");
    const textContent = `${letter}: ${letterCounts[letter]}, `;
    span.innerText = textContent;
    letters.appendChild(span);

    // create graphic
    let newGraphic = document.createElement("div");
    newGraphic.style.width = `${letterCounts[letter]}px`;
    newGraphic.classList.add("newGraphic");
    letters.appendChild(newGraphic);
  }

  /* --------------------- Count words --------------------- */
  let words = typedText.split(/\s/);
  const wordsCounts = {};

  for (let j = 0; j < words.length; j++) {
    let currentWord = words[j];

    if (wordsCounts[currentWord] === undefined) {
      wordsCounts[currentWord] = 1;
    } else {
      wordsCounts[currentWord]++;
    }
  }

  for (let word in wordsCounts) {
    //   create results
    const span = document.createElement("span");
    const textContent = `${word}: ${wordsCounts[word]}, `;
    span.innerText = textContent;
    wordsDiv.appendChild(span);

    // create graphic
    let newGraphic = document.createElement("div");
    newGraphic.style.width = `${wordsCounts[word]}px`;
    newGraphic.classList.add("newGraphic");
    wordsDiv.appendChild(newGraphic);
  }
});
