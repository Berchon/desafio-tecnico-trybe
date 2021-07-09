const crypto = (text, booCode) => {
  let code = -4;
  if (booCode) code = 4;

  let newText = "";
  for (index = 0; index < text.length; index += 1) {
    newText += String.fromCharCode(text[index].charCodeAt(0) + code);
  }

  return newText.toString();
}

word = "MarioKart";

console.log(crypto(word, 1));
console.log(crypto(crypto(word, 1), 0) == word);

// O que faltou fazer =>
//    - Caso de encode: se o código ascii for menor que 255
//    - Caso de Decode: se o código ascii for menor que 0