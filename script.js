updateView();
function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
    <ul>
      ${displayNum()}
    </ul>
  `;
}

function displayNum() {
  var printedNumbers = "";
  for (let i = 1; i <= 10; i++) {
    printedNumbers += /*html*/ `
      <li>${i * 2}</li>
    `;
  }
  return printedNumbers;
}
