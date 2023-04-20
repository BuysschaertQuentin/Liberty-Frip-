const arrayPrice = [2, 3, 4, 5, 8, 10];
const pathOfImg = [
  `<img src="/images/accessoire.png">`,
  `<img src="/images/tshirt.png">`,
  `<img src="/images/jupe.png">`,
  `<img src="/images/marque.png">`,
  `<img src="/images/sac.png">`,
  `<img src="/images/manteau.png">`,
  `<img src="/images/robe.png">`,
  `<img src="/images/total.png">`,
];
const numberOfArticles = [];
let total = 0;
let turnOver = [];

function addPrice(id, price) {
  const button = document.getElementById(`${id}`);
  console.log(button);
  button.addEventListener('click', () => {
    total += price;
    const result = document.getElementById('8');
    result.textContent = `${total} €`;
    result.style.fontSize = '6rem';
    result.innerHTML = `${total} € ${pathOfImg[7]}`;
  });
}

function addNumberofArticles(id) {
  numberOfArticles.push(0);
  const button = document.getElementById(`${id}`);
  button.addEventListener('click', () => {
    numberOfArticles[id - 1]++;
    const updatedValue = numberOfArticles[id - 1];
    button.textContent = `${updatedValue}`;
    button.style.fontSize = '6rem';
    if (id !== 4) {
      button.innerHTML = `${updatedValue} ${pathOfImg[id - 1]}`;
    }
  });
}

function addPriceToChoose() {
  const button = document.querySelector('.marques');
  button.addEventListener('click', () => {
    let price = prompt("Veuillez entrer le prix de l'article");
    if (price !== null && price !== '' && !isNaN(price)) {
      total += parseInt(price);
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
      turnOver.push(parseInt(button.textContent));
      console.log(turnOver);
      button.textContent = total -= total;
      let turnOverTotal = 0;
      turnOver.forEach(value => {
        turnOverTotal += value;
      });
      const turnOverDiv = document.querySelector('.turnhover');
      turnOverDiv.textContent = '';
      turnOverDiv.textContent = `Le chiffre d'affaire est de : ${turnOverTotal}€`;
    }
  });
}
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

displayTotal();
addPriceToChoose();
addPrice(1, arrayPrice[0]);
addPrice(2, arrayPrice[1]);
addPrice(3, arrayPrice[2]);
addPrice(4, arrayPrice[3]);
addPrice(5, arrayPrice[4]);
addPrice(6, arrayPrice[5]);

addNumberofArticles(1);
addNumberofArticles(2);
addNumberofArticles(3);
addNumberofArticles(4);
addNumberofArticles(5);
addNumberofArticles(6);

// - quand tu appuie sur un boutons cele retire l'image TOTAL
// À prévoir absolument :

// 2) afficher le nombre de clics déjà faits sur chaque bouton, en police 150 000, histoire que ça soit bien visible.

// 3) prévoir un bouton "annuler" pour retirer des articles ou des clics excédentaires.

// 4) le texte dans le bouton noir doit être en blanc pour une meilleure lisibilité

// Pas essentiel / pas pour tout de suite

// 1) implémenter un comptage des vêtements dans le détail de la journée

// 2) ajouter une fonction prix cassés (-30% sur le total par exemple) GALERE

// 3) basculer sur une version tactile pour iPad.

// 4) devenir richissime et acheter une île dans le Pacifique pour y élever des dinosaures.
