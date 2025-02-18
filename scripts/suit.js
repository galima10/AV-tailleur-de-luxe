let choices = [
  {
    row: 1,
    list: [
      {
        choice: 2,
        listChoices: [
          {
            title: "Costume travaille",
            description:
              "Choisissez le costume sur mesure qui répond aux codes de votre milieu professionnel : costume 3 pièces, costume croisé, caviar, à rayures ou à carreaux… Nous adaptons le niveau de confort grâce à l’ajustement sur-mesure et au choix de tissu adéquat : flanelle pour l’hiver, laine légère ou coton pour les beaux jours.",
            priceInfo: "Costume sur mesure à 2500 € , toute option inclue",
            img: "../assets/images/suit/costume_4.webp",
            alt: "Portrait de mannequin illustrant Costume Travaillé"
          },
          {
            title: "Costume Ville",
            description:
              "Restez élégant en toutes circonstances grâce à nos costumes sur mesure casual. Lin, coton, velours, tissus naturellement stretch : vous profitez du confort et libérez votre style en dépareillant les pièces ou en les associant à un jean ou un chino. Une veste terra cotta ? Un pantalon coupe courte ? Osez les couleurs et les coupes moins formelles !",
            priceInfo: "Costume sur mesure à 1975 € , toute option inclue",
            img: "../assets/images/suit/costume_5.webp",
            alt: "Portrait de mannequin illustrant Costume Ville"
          },
          {
            title: "Costume Fête et Ball",
            description:
              "Brillez lors de votre prochain événement avec notre costume de bal de luxe, conçu pour les hommes qui recherchent l’excellence. Ce costume allie sophistication et modernité, offrant une silhouette impeccable et un confort inégalé. Préparez-vous à être le centre de l’attention avec ce chef-d’œuvre de raffinement.",
            priceInfo: "Costume sur mesure à 1500 € , toute option inclue",
            img: "../assets/images/suit/costume_2.webp",
            alt: "Portrait de mannequin illustrant Costume Fête et Ball"
          },
          {
            title: "Costume hiver",
            description:
              "Découvrez notre costume de luxe spécialement conçu pour affronter l’hiver avec style et confort. Parfaitement adapté à l’homme moderne, ce costume allie raffinement, chaleur et fonctionnalité, pour que chaque journée soit un mélange de sophistication et de bien-être.",
            priceInfo: "Costume sur mesure à 2100 € , toute option inclue",
            img: "../assets/images/suit/costume_3.webp",
            alt: "Portrait de mannequin illustrant Costume Hiver"
          },
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
            title: "Chino sur mesure",
            description:
              "Vous voulez assortir une veste avec un pantalon chino capable d’allier chic et décontraction ? Rien de plus simple, nous créons avec vous le chino sur mesure qui vous ira parfaitement: selon votre style propre, vous le choisirez serré ou bien ample, avec des pinces ou une large ceinture.",
            priceInfo: "Pantalon sur mesure à 500 € , toute option inclue",
            img: "../assets/images/suit/bas_1.webp",
            alt: "Photographie d'un bas illustrant Chino sur Mesure"
          },
          {
            title: "Un large choix de tissus",
            description:
              "De la toile de coton pour l’été au velours côtelé pour l’hiver, une grande variété de tissus est à votre disposition pour réaliser un pantalon sur mesure adapté à chaque saison. Nous vous proposons aussi de nombreuses couleurs et différentes matières, du 100% coton à la laine, en passant par les mélanges coton / élasthanne, avec différents grammages disponibles (de 260g à 450g).",
            priceInfo: "Pantalon sur mesure à 500 € , toute option inclue",
            img: "../assets/images/suit/bas_2.webp",
            alt: "Photographie d'un bas illustrant Un Large Choix de Tissus"
          },
        ],
      },
      {
        choice: 3,
        listChoices: [
          {
            title: "Chaussures en cuire",
            description:
              "Transformez chaque pas en une déclaration de style avec nos chaussures en cuir de luxe. Conçues pour les hommes exigeants, ces chaussures incarnent l’équilibre parfait entre sophistication, confort et artisanat exceptionnel. Que ce soit pour un événement formel, une journée de travail ou une soirée, elles seront votre allié incontournable.",
            priceInfo: "Chaussure sur mesure à 250 € , toute option inclue",
            img: "../assets/images/suit/chaussure_1.webp",
            alt: "Photographie de chaussures illustrant Chaussures en Cuire"
          },
          {
            title: "Chaussures de marche",
            description:
              "Alliez style, confort et qualité avec nos chaussures, spécialement conçues pour offrir une expérience de marche exceptionnelle. Parce qu’élégance ne devrait jamais signifier inconfort, ces chaussures sont le choix idéal pour les hommes qui recherchent à la fois sophistication et bien-être.",
            priceInfo: "chaussure sur mesure à 265 € , toute option inclue",
            img: "../assets/images/suit/chaussure_2.webp",
            alt: "Photographie de chaussures illustrant Chaussures de Marche"
          },
          {
            title: "Chaussures d’hiver",
            description:
              "Faites face à l’hiver avec style et confort grâce à nos chaussures de luxe, spécialement conçues pour protéger vos pieds du froid tout en assurant une élégance incomparable. Parfaitement adaptées aux conditions hivernales, ces chaussures allient chaleur, durabilité et sophistication, pour que chaque pas soit une déclaration de luxe.",
            priceInfo: "Chaussure sur mesure à 250 € , toute option inclue",
            img: "../assets/images/suit/chaussure_3.webp",
            alt: "Photographie de chaussures illustrant Chaussures d'Hiver"
          },
        ],
      },
    ],
  },
];



let id, row, choice, elementList,li, figure, img, figcaption, h2, p1, p2, a,elementListIncrement;

document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    removeElementList()
    getChoice(choice);
    searchChoice();
    choice.classList.toggle('activeSuitChoice')
    getChoiceList();
    addElement(elementList);
  });
});

function getChoice(element) {
  id = element.id.slice(8, 9);
  row = element.id.slice(1, 2);
}

function searchChoice() {
  choice = choices.find((c) => c.row == row).list.find((c) => c.choice == id);
}

function getChoiceList() {
  elementList = document.querySelector(`#choiceList${row}`);
}

function createElement(){
    li = document.createElement("li");
    figure = document.createElement("figure");
    img = document.createElement("img");
    figcaption = document.createElement("figcaption");
    h2 = document.createElement("h2");
    p1 = document.createElement("p");
    p2 = document.createElement("p");
    a = document.createElement("a");
}

function addContentToElement(){
    img.src = choice.listChoices[elementListIncrement].img;
    img.alt = choice.listChoices[elementListIncrement].alt;
    h2.textContent = choice.listChoices[elementListIncrement].title;
    p1.textContent = choice.listChoices[elementListIncrement].description;
    p2.textContent = choice.listChoices[elementListIncrement].priceInfo;
    a.textContent = 'Venez en boutique';
    a.href='/pages/shop.html#informations';
}

function addElement(element) {
    elementListIncrement = 0;
    if (choice){
        while (elementListIncrement < choice.listChoices.length) {
            createElement();
            addContentToElement();
            if (!Number.isInteger(elementListIncrement/2)){
                figure.classList.add('rowReverse')
            }
            
        
            figure.appendChild(img);
            figcaption.appendChild(h2);
            figcaption.appendChild(p1);
            figcaption.appendChild(p2);
            figcaption.appendChild(a);
            figure.appendChild(figcaption);
            li.appendChild(figure);
            li.classList.add('elementList')
            element.appendChild(li);
        
            elementListIncrement++;
          }
    }
  

  
}

function removeElementList() {
  document.querySelectorAll('.choice').forEach(element=>{
    element.classList.remove('activeSuitChoice');
  })
    document.querySelectorAll('.choiceList li').forEach(element=>{
        element.remove()
    })
}