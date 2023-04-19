const arrayPrice = [2, 3, 4, 5, 8, 10];

let myNumber = 0;
let monchiffredaffaires = 0;

function addPrice(id, price) {
  const button = document.getElementById(`${id}`);
  button.addEventListener('click', e => {
    e.preventDefault();
    myNumber += price;
    monchiffredaffaires += price;
    const result = document.getElementById('8');
    result.textContent = `${myNumber} €`;
  });
}

function priceFree() {
  const button = document.getElementById('7');
  button.addEventListener('click', event => {
    let result = prompt("Veuillez rentrez le prix de l'article");
    const total = document.getElementById('8');
    total.textContent = `${parseInt(result)}`;
  });
}
priceFree();
addPrice(1, arrayPrice[0]);
addPrice(2, arrayPrice[1]);
addPrice(3, arrayPrice[2]);
addPrice(4, arrayPrice[3]);
addPrice(5, arrayPrice[4]);
addPrice(6, arrayPrice[5]);
addPrice(7, text);
// addPrice(7, leprixdynamique);
