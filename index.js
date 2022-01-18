const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["Purée de topinambour", "Frites truffées", "Châtaignes croustillantes", "Brunoise carotte-cèleri", "Oeuf parfait", "Crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];
const menu = `${getRandom(mainCourses)} ${getRandom(techniques)} <br><br> *** <br><br> ${getRandom(sides)} ${getRandom(seasonings)}`
document.querySelector('.menu section').innerHTML = menu; 

const menuTab = document.querySelectorAll('header a')[1];
menuTab.addEventListener('click', () => {
  const menuDiv = document.getElementsByClassName('menu')[0];
  menuDiv.style.visibility = 'visible';
  menuDiv.style.width = '500px';
  document.getElementById('menuTab').style.display = 'none';
});

const changeMenuButton = document.querySelector('.menu button');
changeMenuButton.addEventListener('click', () => {
  const newMenu = `${getRandom(mainCourses)} ${getRandom(techniques)} <br><br> *** <br><br> ${getRandom(sides)} ${getRandom(seasonings)}`
  console.log(newMenu);
  document.querySelector('.menu section').innerHTML = newMenu; 
});


function onMouseOut(event) {
  // If the mouse is near the top of the window, show the popup
  // Also, do NOT trigger when hovering or clicking on selects
  if (
    event.clientY < 25 &&
    event.relatedTarget == null &&
    event.target.nodeName.toLowerCase() !== 'select') {
    // Remove this event listener
    document.removeEventListener("mouseout", onMouseOut);

    // Show the popup
    document.getElementById("popup").style.display = "block";
    popupActive = true;

    document.addEventListener('click', () => {
      document.getElementById('popup').style.display = 'none';
    });
  }
}
document.addEventListener("mouseout", onMouseOut);

const galeryButton = document.querySelector('#right a');
galeryButton.addEventListener('click', () => {
  const galery = document.createElement('div');
  console.log(galery);
  document.getElementsByTagName('main').innerHTML = galery;
});