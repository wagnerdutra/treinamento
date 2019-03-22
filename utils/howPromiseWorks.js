const name = " wagner azevedo dutra    ";

function removeWhiteSpace(name) {
  return Promise.resolve(name.trim());
}

function setUpperCase(name) {
  return Promise.resolve(name.toUpperCase());
}

function returnFirstletter(name) {
  return name.charAt(0);
}

Promise.resolve(name)
  .then(removeWhiteSpace)
  .then(setUpperCase)
  .then(returnFirstletter)
  .then(finalName => console.log(finalName));

