const arrayPrice = [2, 3, 4, 5, 8, 10];

let total = 0;

let turnOver = [];

function addPrice(id, price) {
  const button = document.getElementById(`${id}`);
  button.addEventListener('click', e => {
    e.preventDefault();
    total += price;
    const result = document.getElementById('8');
    result.innerHTML = `${total} €`;
    console.log(total);
  });
}

function addPriceToChoose() {
  const button = document.querySelector('.marques');
  button.addEventListener('click', () => {
    let price = prompt("Veuillez entrer le prix de l'article");
    if (price !== null && price !== '' && !isNaN(price)) {
      total += parseInt(price);
      console.log(total);
      const resultButton = document.getElementById('8');
      resultButton.innerHTML = `${total} €`;
    } else if (price !== null && price !== '') {
      alert('Veuillez entrer un nombre valide.');
    }
  });
}

function displayTotal() {
  const button = document.getElementById('8');

  button.addEventListener('click', () => {
    if (total === 0) {
      alert("Vous n'avez pas d'article");
    } else {
      turnOver.push(button.textContent);
      console.log(turnOver);
      button.textContent = total -= total;
    }
  });
}
displayTotal();
addPriceToChoose();
addPrice(1, arrayPrice[0]);
addPrice(2, arrayPrice[1]);
addPrice(3, arrayPrice[2]);
addPrice(4, arrayPrice[3]);
addPrice(5, arrayPrice[4]);
addPrice(6, arrayPrice[5]);

const buttonOnPush = document.querySelectorAll('button');
buttonOnPush.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    element.classList.add('button-push');
    setTimeout(() => {
      element.classList.remove('button-push');
    }, 500);
  });
});

// - les boutons dépassent de leurs cercle (a cause de l'image)
// - quand tu appuie sur un boutons cele retire l'image TOTAL
