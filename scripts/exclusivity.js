let choices = [
  {
    row: 1,
    list: [
      {
        choice: 3,
        listChoices: [
          {
            title: "Costume Italien Lyon",
            description:
              "Découvrez notre collection exceptionnelle de costumes italien Lyon",
            info: "Chez Antoine Vandervorst, chaque détail compte, pour refléter parfaitement votre style unique. Nos costumes de mariage bordeaux, confectionnés sur mesure, offrent à chaque futur marié l’opportunité d’éblouir avec une allure incomparable le jour.",
            img: "../assets/images/exclusivity/costume_1.webp",
            alt: "Photographie d'un mannequin en costume gris en train de marcher"
          },
          {
            title: "Unique au monde",
            description:
              "Avec une veste à simple boutonnage et une coupe ajustée, parfait pour une cérémonie de mariage décontractée au bord de la mer.",
            info: "Le prix de chaque pièce de votre costume de mariage bordeaux sur mesure dépend uniquement du tissu que vous sélectionnerez.",
            img: "../assets/images/exclusivity/costume_2.webp",
            alt: "Photographie d'un mannequin en costume bleu avec des lunettes de soleil en train de marcher"
          },
          {
            title: "Venez vite ",
            description:
              "Ensuite la quasi-totalité de la personnalisation (boutons, poches ,doublures…) est entièrement gratuit et sans limite.",
            info: "Enfin, une majoration de 10% à 20% sera appliquée pour les grandes tailles (tour de poitrine et / ou tour de taille supérieure(s) à 120 cm).",
            img: "../assets/images/exclusivity/costume_3.webp",
            alt: "Photographie d'un mannequin en costume bleu en 3/4 les mains dans les poches"
          }
        ],
      },
    ],
  },
  {
    row: 2,
    list: [
      {
        choice: 1,
        listChoices: [
          {
            title: "Costume de mariage Bordeaux",
            description:
              "Découvrez notre collection exceptionnelle de costumes de mariage bordeaux sur mesure.",
            info: "Chez Antoine Vandervorst, chaque détail compte, pour refléter parfaitement votre style unique. Nos costumes de mariage bordeaux, confectionnés sur mesure, offrent à chaque futur marié l’opportunité d’éblouir avec une allure incomparable le jour.",
            img: "../assets/images/exclusivity/costume_5.webp",
            alt: "Photographie d'un mannequin en costume rouge en train de marcher avec une main dans la poche"
          },
          {
            title: "Unique au monde",
            description:
              "Avec une veste à simple boutonnage et une coupe ajustée, parfait pour une cérémonie de mariage décontractée au bord de la mer.",
            info: "Le prix de chaque pièce de votre costume de mariage bordeaux sur mesure dépend uniquement du tissu que vous sélectionnerez.",
            img: "../assets/images/exclusivity/costume_6.webp",
            alt: "Photographie d'un mannequin en costume rouge posé avec une main dans la poche"
          },
          {
            title: "Venez vite",
            description:
              "Ensuite la quasi-totalité de la personnalisation (boutons, poches ,doublures…) est entièrement gratuite et sans limite.",
            info: "Enfin, une majoration de 10% à 20% sera appliquée pour les grandes tailles (tour de poitrine et / ou tour de taille supérieure(s) à 120 cm).",
            img: "../assets/images/exclusivity/costume_7.webp",
            alt: "Photographie d'un mannequin en costume rouge en train de marcher avec les mains dans les poche"
          }
        ],
      },
    ],
  },
];

let id,
  row,
  choice,
  elementList,
  li,
  figure,
  img,
  figcaption,
  h2,
  p1,
  p2,
  a,
  elementListIncrement;

document.querySelectorAll(".limitedRangeChoice").forEach((choice) => {
  choice.addEventListener("click", () => {
    removeElementList();
    choice.children[1].classList.toggle('limitedRangeChoiceActive')
    getChoice(choice);
    searchChoice();
    addElement(document.querySelector('#limitedRangeInfo'));
  });
});

function getChoice(element) {
  id = element.id.slice(8, 9);
  
  row = element.id.slice(1, 2);
  console.log(id,row);
}

function searchChoice() {
  choice = choices.find((c) => c.row == row).list.find((c) => c.choice == id);
  
}

function createElement() {
  li = document.createElement("li");
  figure = document.createElement("figure");
  img = document.createElement("img");
  figcaption = document.createElement("figcaption");
  h2 = document.createElement("h2");
  p1 = document.createElement("p");
  p2 = document.createElement("p");
  a = document.createElement("a");
}

function addContentToElement() {
  img.src = choice.listChoices[elementListIncrement].img;
  img.alt = choice.listChoices[elementListIncrement].alt;
  h2.textContent = choice.listChoices[elementListIncrement].title;
  p1.textContent = choice.listChoices[elementListIncrement].description;
  p2.textContent = choice.listChoices[elementListIncrement].info;
  a.textContent = "Venez en boutique";
  a.href = "/pages/shop.html#informations";
}

function addElement(element) {
  elementListIncrement = 0;
  if (choice) {
    while (elementListIncrement < choice.listChoices.length) {
      createElement();
      addContentToElement();
      if (!Number.isInteger(elementListIncrement / 2)) {
        figure.classList.add("rowReverse");
      }

      figure.appendChild(img);
      figcaption.appendChild(h2);
      figcaption.appendChild(p1);
      figcaption.appendChild(p2);
      figcaption.appendChild(a);
      figure.appendChild(figcaption);
      li.appendChild(figure);
      li.classList.add("elementList");
      element.appendChild(li);

      elementListIncrement++;
    }
  }
}
function removeElementList() {
  document.querySelectorAll(".limitedRangeChoiceActive").forEach((element) => {
    element.classList.remove('limitedRangeChoiceActive');
  });
  document.querySelectorAll("#limitedRangeInfo li").forEach((element) => {
    element.remove();
  });
}
