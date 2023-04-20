if (
  localStorage.getItem(`CA`) === undefined ||
  localStorage.getItem(`CA`) === null
) {
  localStorage.setItem(`CA`, 0);
}

const turnOverDiv = document.querySelector('.turnhover');
turnOverDiv.textContent = '';
turnOverDiv.textContent = `Le chiffre d'affaire est de : ${localStorage.getItem(
  `CA`
)}€`;

const arrayPrice = [2, 3, 4, 0, 8, 10, 5];
const pathOfImg = [
  `<img src="./images/accessoire.png">`,
  `<img src="./images/tshirt.png">`,
  `<img src="./images/jupe.png">`,
  `<img src="./images/marque.png">`,
  `<img src="./images/sac.png">`,
  `<img src="./images/manteau.png">`,
  `<img src="./images/robe.png">`,
  `<img src="./images/total.png">`,
];
const numberOfArticles = [];
let total = 0;
let turnOver = [];
let price = 0;

function addPrice(id, price) {
  const button = document.getElementById(`${id}`);
  button.addEventListener('click', () => {
    if (id !== 4) {
      total += price;
      const result = document.getElementById('8');
      result.textContent = `${total} €`;
      result.style.fontSize = '7rem';
      result.innerHTML = `${total} € ${pathOfImg[7]}`;
    }
  });
}

function addPriceToChoose() {
  const button = document.querySelector('.marques');
  button.addEventListener('click', () => {
    price = prompt("Veuillez entrer le prix de l'article");
    if (price !== null && price !== '' && !isNaN(price)) {
      total += parseInt(price);
      const resultButton = document.getElementById('8');
      resultButton.style.fontSize = '7rem';
      resultButton.innerHTML = `${total} € ${pathOfImg[7]}`;
    } else if (price !== null && price !== '') {
      alert('Veuillez entrer un nombre valide.');
    }
    return price;
  });
}

function addNumberofArticles(id) {
  numberOfArticles.push(0);
  const button = document.getElementById(`${id}`);
  button.addEventListener('click', () => {
    if (id !== 4) {
      numberOfArticles[id - 1]++;
      const updatedValue = numberOfArticles[id - 1];
      button.textContent = `${updatedValue}`;
      button.style.fontSize = '7rem';
      button.innerHTML = `${updatedValue} ${pathOfImg[id - 1]}`;
    } else {
      if (price !== null && price !== '' && !isNaN(price)) {
        numberOfArticles[id - 1]++;
        const updatedValue = numberOfArticles[id - 1];
        button.textContent = `${updatedValue}`;
        button.style.fontSize = '7rem';
        button.innerHTML = `${updatedValue} ${pathOfImg[id - 1]}`;
      }
    }
    if (id === 2) {
      button.style.color = 'white';
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
      button.textContent = total -= total;
      let turnOverTotal = 0;
      turnOver.forEach(value => {
        turnOverTotal += value;
      });
      turnOverTotal += parseInt(localStorage.getItem(`CA`));
      const turnOverDiv = document.querySelector('.turnhover');
      turnOverDiv.textContent = '';
      localStorage.setItem(`CA`, turnOverTotal);
      turnOverDiv.textContent = `Le chiffre d'affaire est de : ${localStorage.getItem(
        `CA`
      )}€`;
      button.innerHTML = ` 0 € ${pathOfImg[7]}`;
      turnOver = [];
      // A partir d'ici la fonction repasse le nombre d'articles à 0 et réaffiche les élément correctement.
      numberOfArticles.fill(0);
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button, index) => {
        if (index !== 7 && index !== 3) {
          if (
            button.classList.contains('btn') ||
            button.classList.contains('dropdown-toggle')
          ) {
            return;
          }
          button.textContent = '0';
          button.innerHTML = `0 ${pathOfImg[index]}`;
          button.style.fontSize = '7rem';
        } else if (index === 3) {
          button.textContent = '0';
          button.innerHTML = `Indiquer le prix ${pathOfImg[index]}`;
          button.style.fontSize = '3rem';
        }
      });
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

function resetInput() {
  const btn = document.querySelector('.btn');
  const buttontotal = document.getElementById('8');
  btn.addEventListener('click', () => {
    numberOfArticles.fill(0);
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (index !== 7 && index !== 3) {
        if (
          button.classList.contains('btn') ||
          button.id === 'dropdownMenuButton'
        ) {
          return;
        }
        button.textContent = '0';
        button.innerHTML = `0 ${pathOfImg[index]}`;
        button.style.fontSize = '7rem';
      } else if (index === 3) {
        button.textContent = '0';
        button.innerHTML = `Indiquer le prix ${pathOfImg[index]}`;
        button.style.fontSize = '3rem';
      } else if (buttontotal) {
        total = 0;
        buttontotal.innerHTML = `0 € ${pathOfImg[7]}`;
        buttontotal.style.fontSize = '6rem';
      }
    });
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
addPrice(7, arrayPrice[6]);

addNumberofArticles(1);
addNumberofArticles(2);
addNumberofArticles(3);
addNumberofArticles(4);
addNumberofArticles(5);
addNumberofArticles(6);
addNumberofArticles(7);
resetInput();

const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('click', function () {
  dropdownMenu.classList.toggle('show');
});

// 1) implémenter un comptage des vêtements dans le détail de la journée OK + display resultat.html

// 2) ajouter une fonction prix cassés (-30% sur le total par exemple)

// 3) basculer sur une version tactile pour iPad.

// 4) devenir richissime et acheter une île dans le Pacifique pour y élever des dinosaures.

// Faire légende en position fixed
