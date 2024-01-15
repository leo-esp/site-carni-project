import offerImage1 from "./assets/carni-offer-image-1.jpg";
import offerImage2 from "./assets/carni-offer-image-2.jpg";
import offerImage3 from "./assets/carni-offer-image-3.jpg";

import {
  BgBanner1,
  BgBanner2,
  BgBanner3,
  Salada1,
  Salada2,
  Salada3,
  Salada4,
  Couvert,
  Entrada1,
  Entrada2,
  Entrada3,
  Entrada4,
  Entrada5,
  Entrada6,
  Entrada7,
  Entrada8,
  Entrada9,
  PrincipalBovino1,
  PrincipalBovino2,
  PrincipalBovino3,
  PrincipalBovino4,
  PrincipalBovino5,
  PrincipalBovino6,
  PrincipalBovino7,
  PrincipalBovino8,
  PrincipalBovino9,
  PrincipalBovino10,
  PrincipalBovino11,
  PrincipalBovino12,
  PrincipalOvino1,
  PrincipalAves1,
  PrincipalKids1,
  Acompanhamentos1,
  Acompanhamentos2,
  Acompanhamentos4,
  Acompanhamentos5,
  Acompanhamentos6,
  Acompanhamentos8,
  Acompanhamentos9,
  Acompanhamentos10,
  Acompanhamentos11,
  Acompanhamentos12,
  Acompanhamentos13,
  CarniLogo,
  PrincipalSuino2,
  PrincipalSuino3,
  ThumbExecutivo,
  PratoExecutivoFrango,
  PratoExecutivoPescado,
  PratoExecutivoPicanha,
  PratoExecutivoAncho,
  PratoExecutivoBrisket,
  PratoExecutivoChorizo,
} from "./assets";

const MainHeaderContent = {
  address:
    "Av. Dr. Antônio Carlos Couto de Barros, 1400 - Jardim Conceição - Campinas/SP",
  schedule: "Diariamente : 8.00 am to 10.00 pm",
  phone: "+5519984051623",
  formatedPhone: "+55 19 984051623",
  email: "contato@carnigastronomia.com.br",
};

const BannerSectionContent = {
  banners: [
    {
      imageUrl: BgBanner1,
      tag: "experiência gastronômica",
      htmlTitle: "<span>Carne Nobres na<br />Parrilha</span>",
      subTitle: "Venha com a família e aproveite",
      textButton: "Veja o cardápio",
    },
    {
      imageUrl: BgBanner2,
      tag: "experiência gastronômica",
      htmlTitle: "<span>Aperitivos <br />Incríveis</span>",
      subTitle: "Venha experimentar",
      textButton: "Veja o cardápio",
    },
    {
      imageUrl: BgBanner3,
      tag: "experiência gastronômica",
      htmlTitle: "<span>Drinks<br />maravilhosos</span>",
      subTitle: "Experimente cada um deles",
      textButton: "Veja o cardápio",
    },
  ],
};

const WeOfferContent = {
  cards: [
    {
      image: offerImage1,
      link: "/cardapio-a-la-carte",
      type: "A la Cartè",
      name: "Cardápio a la Cartè",
    },
    {
      image: ThumbExecutivo,
      link: "/cardapio-executivo",
      type: "Executivo",
      name: "Cardápio Executivo",
    },
    {
      image: offerImage3,
      link: "/cardapio-de-drinks",
      type: "Drinks",
      name: "Cardápio de Drinks",
    },
  ],
  title: "O que oferecemos",
  subtitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever.",
  tag: "Flavors for royalty",
};

const ExecutiveMenu = {
  Apptizers: {
    menuTitle: "Entradas",
    tagTitle: "Entradas",
    plates: [
      {
        name: "Mix de Folhas com Nozes",
        description: "Alface, rúcula, azeite temperado e nozes caramelizadas",
        image: "",
        price: 0,
      },
      {
        name: "Tartelete de Queijos",
        description: "Mix de folhas, mostarda e iogurte",
        image: "",
        price: 0,
      },
    ],
  },
  Main: {
    plates: [
      {
        image: PratoExecutivoFrango,
        type: "frango",
        title: "Filé de Frango",
        price: 55,
        description:
          "Filé de frango, creme de milho, arroz Carní é molho de mostarda",
      },
      // {
      //   image: PratoExecutivoPescado,
      //   type: "peixe",
      //   title: "Pescada",
      //   description: "Pescada do dia com Liguine",
      //   price: 55,
      // },
      {
        image: PratoExecutivoPicanha,
        type: "carne",
        title: "Picanha",
        description:
          "Picanha, arroz branco, mandioca com alho frito, vinagrete de melancia é molho roti",
        price: 55,
      },
      {
        image: PratoExecutivoAncho,
        type: "carne",
        title: "Ancho",
        description:
          "Bife ancho, arroz branco, feijão gordo, batata ao murro é molho mostarda",
        price: 55,
      },
      {
        image: PratoExecutivoBrisket,
        type: "carne",
        title: "Brisket",
        description: "Brisket, macarrão com queijo e farofa de bacon",
        price: 55,
      },
      {
        image: PratoExecutivoChorizo,
        type: "carne",
        title: "Chorizo",
        description:
          "Bife de chorizo, mil folhas de batata, palmito assado com ervas é molho chimichurri",
        price: 55,
      },
    ],
  },
  Season: {
    menuTitle: "Sazonal",
    tagTitle: "Sazonal",
    plates: [
      {
        name: "Arroz de Costela",
        description: "Costela e ovo perfeito",
        image: "",
        price: 27,
      },
    ],
  },
  Desserts: {
    menuTitle: "Sobremesas",
    tagTitle: "Sobremesas",
    plates: [
      {
        name: "Salada de Frutas",
        description: "Mix de frutas de estação com espuma de limão siciliano",
        image: "",
        price: 0,
      },
      {
        name: "Brownie de Licor 43",
        description: "Sorvete de creme e merengue",
        image: "",
        price: 0,
      },
    ],
  },
};

const DrinksMenu = {
  AuthoralCocktail: [
    {
      title: "Orleans",
      description:
        "Johnnie Walker Black Label, Licor de gengibre Carní, limão siciliano, xarope de mel levemente defumado",
      image: "",
      value: "42",
    },
    {
      title: "leadbelly",
      description:
        "Cachaça Santo Grau CXC, xarope de mel de laranjeira, limão siciliano e Fernet Branca",
      image: "",
      value: "41",
    },
    {
      title: "holiday",
      description:
        "Limoncello Carní, Vermute envelhecido Carní, Cachaça Santo Grau CXC, Campari e água gaseificada",
      image: "",
      value: "41",
    },
    {
      title: "blosson",
      description:
        "Gordon's London Dry, licor de frutas vermelhas, água tônica e espuma de limão siciliano",
      image: "",
      value: "41",
    },
    {
      title: "parker",
      description:
        "Jim Beam Black, Yuzu, suco de abacaxi, xarope de hortelã e água gaseificada",
      image: "",
      value: "39",
    },
    {
      title: "cole",
      description:
        "Ballantine's Finest, Bitter Angostura, purê de pera Williams, suco de limão siciliano e xarope de Matchá",
      image: "",
      value: "41",
    },
    {
      title: "fitz",
      description: "Lillet Blanc, Yuzu, água tônica 202 e Yuzu Bitter Carní",
      image: "",
      value: "42",
    },
    {
      title: "bolden",
      description:
        "Jim Bean Bourbon, maracujá, Yuzu, xarope de mel de laranjeira e água tônica 202",
      image: "",
      value: "41",
    },
    {
      title: "david",
      description:
        "Jim Beam Bourbon, purê de pera Williams, limão siciliano e água gaseificada",
      image: "",
      value: "40",
    },
    {
      title: "coltrane",
      description:
        "Absolut Raspberry, xarope de amarena, limão siciliano e tintura de mel com especiarias",
      image: "",
      value: "40",
    },
  ],
  Classics: [
    {
      title: "fitzgerald",
      description:
        "Gin Premium Larios 12, limão siciliano, xarope de açúcar e Bitter Angostura",
      image: "",
      value: "43",
    },
    {
      title: "bloody mary",
      description:
        "Vodka Stolichnaya, suco de tomate, molho inglês, suco de limão, tabasco e sal de aipo",
      image: "",
      value: "41",
    },
    {
      title: "negroni",
      description: "Beefeater London Dry, Vermute envelhecido Carní e Campari",
      image: "",
      value: "40",
    },
    {
      title: "boulevardier",
      description: "Jim Beam Black, Vermute envelhecido Carní e Campari",
      image: "",
      value: "42",
    },
    {
      title: "old fashioned",
      description:
        "Marker's Mark Bourbon Supre Premium, Bitter Angostura, cubo de açúcar e cereja Amarena",
      image: "",
      value: "45",
    },
    {
      title: "XV sazerac",
      description:
        "Chivas Regal XV, Peychaud's Bitter, Absintho e cubo de açúcar",
      image: "",
      value: "47",
    },
    {
      title: "whiskey sour",
      description:
        "Jim Beam Black, xarope de açúcar, suco de limão siciliano e Bitter Angostura",
      image: "",
      value: "42",
    },
    {
      title: "dry martini",
      description: "Roku Gin(japonês), Vermute Noilly Prat e azeitona",
      image: "",
      value: 45,
    },
    {
      title: "moscow mule",
      description:
        "Absolut Vodka, suco de limão, xarope de gengibre e espuma de limão siciliano",
      image: "",
      value: 42,
    },
    {
      title: "margarita",
      description:
        "Tequila José Cuervo Prata, suco de limão e licor fino de laranja",
      image: "",
      value: 41,
    },
    {
      title: "aperol spritz",
      description: "Aperol, água gaseificada e Espumante Brut",
      image: "",
      value: 41,
    },
  ],
  Gin: [
    {
      title: "GyT Roku",
      description: "Roku Gin(japonês), yuzu e tônica 202",
      image: "",
      value: 45,
    },
    {
      title: "GyT Amazzoni",
      description:
        "Gin Amazzoni Maniuara, Orange Bitter Angostura e tônica 202",
      image: "",
      value: 42,
    },
    {
      title: "GyT Beefeater",
      description:
        "Gin Beefeater London Dry, limão siciliano, alecrim e tônica 202",
      image: "",
      value: 43,
    },
    {
      title: "GyT Larios 12",
      description: "Gin Premium Larios 12, framboesas e tônica 202",
      image: "",
      value: 43,
    },
    {
      title: "GyT Tanqueray",
      description: "Gin Tanqueray, suco de limão e tônica 202",
      image: "",
      value: 43,
    },
    {
      title: "GyT Frutas Vermelhas",
      description: "Gin Tanqueray, frutas vermelhas e tônica 202",
      image: "",
      value: 42,
    },
    {
      title: "GyT Tropical",
      description: "Gordon's London Dry, Red Bull Tropical e fatias de laranja",
      image: "",
      value: 43,
    },
  ],
  Bourbon: [
    {
      title: "Marker's Mark Bourbon Super Premium",
      image: "",
      value: 32,
    },
    {
      title: "Jim Beam Black",
      image: "",
      value: 27,
    },
    {
      title: "Jim Beam Bourbon",
      image: "",
      value: 25,
    },
    {
      title: "Jameson Caskmates Ipa",
      image: "",
      value: 26,
    },
    {
      title: "Jack Daniel's",
      image: "",
      value: 26,
    },
  ],
  SchotchWhisky: [
    {
      title: "Chivas Regal XV",
      image: "",
      value: 38,
    },
    {
      title: "Chivas Regas 13 YO",
      image: "",
      value: 32,
    },
    {
      title: "Chivas Regal 12 YO",
      image: "",
      value: 28,
    },
    {
      title: "Johnnie Walker Black Label",
      image: "",
      value: 28,
    },
    {
      title: "Ballantine's Finest",
      image: "",
      value: 25,
    },
  ],
};

const MenuStarters = [
  {
    type: "Salada & Couvert",
    tag: "Leves e Frescas",
    items: [
      {
        name: "Alface",
        description:
          "Alface americana, rúcula, nozes , queijo brie, tomate cereja, pera laminada e molho de mel e limão.",
        price: 38,
        image: Salada1,
      },
      {
        name: "Cevadinha",
        description:
          "Grão cevadinha, rabanete, tomate, pepino japonês e molho de iogurte com hortelã.",
        price: 35,
        image: Salada2,
      },
      {
        name: "Rúcula",
        description:
          "Rúcula, cebola roxa, lasca de parmesão, tomate seco e molho de mostarda e mel.",
        price: 38,
        image: Salada3,
      },
      {
        name: "Palmito",
        description: "Rúcula, cebola roxa, palmito com tempero da casa.",
        price: 30,
        image: Salada4,
      },
      {
        name: "Couvert",
        description:
          "Pães na Parrilla, antepasto da casa e manteiga temperada.",
        price: 15,
        image: Couvert,
      },
    ],
  },
  {
    type: "Entradas",
    tag: "Para abrir o apetite",
    items: [
      {
        name: "Steak Tartar",
        description:
          "Filé cru tártaro cortado na ponta da faca, tempero exclusivo da casa com mix de batatas chips. ",
        price: 58,
        image: Entrada1,
      },
      {
        name: "Bolinho de arroz   6und",
        description:
          "recheado com queijo brie cremoso por dentro sequinho fora e geleia artesanal de pimenta.",
        price: 32,
        image: Entrada2,
      },
      {
        name: "Linguiça Artesanal",
        description:
          "com nossa deliciosa farofa Carní e vinagrete de melancia.",
        price: 65,
        image: Entrada3,
      },
      {
        name: "Carpaccio",
        description:
          "Beef em laminas finas da casa, rúcula, pimenta biquinho, parmesão ralado e molho de alcaparras Carní. Acompanha Pães.",
        price: 58,
        image: Entrada4,
      },
      {
        name: "Bolinho de Carne   5und",
        description:
          "Cupim cremoso desfiado e molho barbecue defumado Jack Daniels.",
        price: 39,
        image: Entrada5,
      },
      {
        name: "Batata Frita",
        description: "Servida da forma tradicional.",
        price: 25,
        image: Entrada6,
      },
      {
        name: "Pão de Alho / Picante / Pão de Cebola",
        description: "cremoso assado na nossa Parrilla.",
        price: 22,
        image: Entrada7,
      },
      {
        name: "Batata Frita da Casa",
        description:
          "Da casa, servida com creme de cheddar e bacon muito crocante.",
        price: 35,
        image: Entrada8,
      },
      {
        name: "Porchetta Carní 200g",
        description:
          "Torresmo de rolo crocante por fora, macia por dentro e incrivelmente saborosa acompanha molho barbecue e goiabada cascão.",
        price: 49,
        image: Entrada9,
      },
    ],
  },
];

const MenuMain = [
  {
    type: "Pratos Principais",
    tag: "Aqui está a coisa boa",
    groups: [
      {
        tag: "Cortes Bovinos",
        items: [
          {
            name: "Ancho 350g in natura",
            description:
              "Corte extraído do lombo, carne acima da costela na parte da frente do animal da 2° a 6° Costela. Tendo com principal atrativo a famosa gordura entremeada na carne.",
            price: 99,
            image: PrincipalBovino1,
          },
          {
            name: "Assado de Tira 500g in natura",
            description:
              "Corte nobre extraído entre a primeira e a quinta costela da parte dianteira do boi, é uma carne premium com alto grau de marmoreio e suculência.",
            price: 119,
            image: PrincipalBovino2,
          },
          {
            name: "Brisket 350g",
            description:
              "Corte extraído na parte da frente do boi, conhecido como peito bovino no Brasil, a carne é mais rígida por conter muitas fibras, mas que com o devido preparo fica saborosa (a cocção do Brisket do Carní leva 12h na nossa Pit Smoker).",
            price: 75,
            image: PrincipalBovino3,
          },
          {
            name: "Chorizo 350g in natura",
            description:
              "Corte extraído da parte da frente do contra filé e vizinho do bife ancho e alcatra, possui uma farta camada de gordura além da medida ideal do marmoreio.",
            price: 89,
            image: PrincipalBovino4,
          },
          {
            name: "Denver Steak 500g in natura",
            description:
              "Corte extraído da parte dianteira do boi, próximo ao acém. Mesmo saindo de uma região mais rígida do boi, é extremamente rico em marmoreio, dando a ele uma macies e sabor inigualável.",
            price: 165,
            image: PrincipalBovino5,
          },
          {
            name: "Flat Iron 500g in natura",
            description:
              "Corte extraído da parte dianteira do boi (paleta), sendo um dos três mais macio, também chamado de Shouder Steak.",
            price: 119,
            image: PrincipalBovino6,
          },
          {
            name: "Fralda Red 350g in natura",
            description:
              "Corte extraído do fraldão, próximo a costela do boi, excelente marmoreio, perfeito para família.",
            price: 95,
            image: PrincipalBovino7,
          },
          {
            name: "Picanha 350g in natura",
            description:
              "Corte extraído na metade traseira do boi, queridinha dos Brasileiros a picanha é bem valorizada aos amantes do churrasco, cada boi possui duas picanhas direito e esquerdo.",
            price: 109,
            image: PrincipalBovino10,
          },
          {
            name: "Prime Rib 900g in natura",
            description:
              "Corte extraído entre a sexta e decima segunda costela, serrado na transversal seguindo o sentido dos osso, excelente macies, suculência e marmoreio.",
            price: 189,
            image: PrincipalBovino8,
          },
          {
            name: "Short Rib 700g in natura",
            description:
              "Corte extraído da parte dianteira da costela junto com o miolo do acém, com alto índice de marmoreio, que o batizaram de costela Premium.",
            price: 169,
            image: PrincipalBovino9,
          },
          {
            name: "T-Bone 600g in natura",
            description:
              "Corte extraído da parte traseira do boi, sendo composto de um osso em formato de T e carne. O corte é bastante apreciado por amantes da boa gastronomia devido a sua composição, que é parte de contrafilé (maior) parte de (filé Mignon).",
            price: 169,
            image: PrincipalBovino11,
          },
          {
            name: "Tomahawk 800g in natura",
            description:
              "Corte extraído do dianteiro do boi considerando parte mais macia do lombo, tornando uma peça com alto grau de marmoreio.",
            price: 209,
            image: PrincipalBovino12,
          },
        ],
      },
      {
        tag: "Cortes Suínos Durok (Angus Suíno)",
        items: [
          {
            name: "Assado de Tiras 300g in natura",
            description: "",
            price: 69,
            image: "",
          },
          {
            name: "Costela Francesa 900g",
            description:
              "*Consultar Disponibilidade *Acompanha Milho Tostado na Parrilla, Molho Barbecue / Ketchup de Goiaba",
            price: 149,
            image: PrincipalSuino2,
          },
          {
            name: "T-Bone 300g in natura",
            description: "",
            price: 79,
            image: PrincipalSuino3,
          },
          {
            name: "Tomahawk 500g",
            description: "",
            price: 99,
            image: "",
          },
          {
            name: "Panceta 300g in natura",
            description: "",
            price: 69,
            image: "",
          },
        ],
      },
      {
        tag: "Outros Cortes",
        items: [
          {
            name: "Carré 300g in natura",
            description: "",
            price: 99,
            image: PrincipalOvino1,
          },
          {
            name: "Galeto desossado na Parrilla",
            description:
              "Acompanha arroz branco, farofa e vinagrete de hortelã",
            price: 69,
            image: PrincipalAves1,
          },
          {
            name: "Pescada do dia",
            description: "Acompanha pure de batata, brócolis selvagem com alho",
            price: 75,
            image: "",
          },
        ],
      },
      {
        tag: "Prato Kids",
        items: [
          {
            name: "Escalopinho",
            description: "Acompanha arroz branco e feijão",
            price: 39,
            image: PrincipalKids1,
          },
          {
            name: "Filé de Frango",
            description: "Acompanha arroz branco e creme de milho",
            price: 32,
            image: "",
          },
        ],
      },
    ],
  },
];

const Sauces = {
  tag: "Acompanhe seu corte com nossos molhos",
  items: [
    {
      name: "Alho frito",
      description: "",
      price: 8,
      image: "",
      mini: true,
    },
    {
      name: "Barbecue de Goiaba",
      description: "",
      price: 8,
      image: "",
      mini: true,
    },
    {
      name: "Chimichurri",
      description: "",
      price: 8,
      image: "",
      mini: true,
    },
    {
      name: "Hortelã ",
      description: "",
      price: 8,
      image: "",
      mini: true,
    },
    {
      name: "Ketchup goiaba ",
      description: "",
      price: 8,
      image: "",
      mini: true,
    },
    {
      name: "Molho pimenta da Casa",
      description: "",
      price: 8,
      image: "",
      mini: true,
    },
    {
      name: "Mostarda",
      description: "",
      price: 8,
      image: "",
      mini: true,
    },
  ],
};

const MenuSideDish = {
  type: "Acompanhamentos",
  tag: "Para deixar o prato ainda mais gostoso",
  items: [
    {
      name: "Arroz Biro biro",
      description: "",
      price: 25,
      image: Acompanhamentos1,
    },
    {
      name: "Arroz branco",
      description: "",
      price: 14,
      image: Acompanhamentos2,
    },
    {
      name: "Arroz Carní",
      description: "",
      price: 25,
      image: CarniLogo,
    },
    {
      name: "Arroz carreteiro",
      description: "",
      price: 25,
      image: Acompanhamentos4,
    },
    {
      name: "Batata ao murro na Parrilla",
      description: "",
      price: 25,
      image: Acompanhamentos5,
    },
    {
      name: "Creme de milho",
      description: "",
      price: 20,
      image: Acompanhamentos6,
    },
    {
      name: "Farofa Carní",
      description: "",
      price: 14,
      image: CarniLogo,
    },
    {
      name: "Feijão gordo",
      description: "",
      price: 18,
      image: Acompanhamentos8,
    },
    {
      name: "Feijão tropeiro",
      description: "",
      price: 20,
      image: Acompanhamentos9,
    },
    {
      name: "Legumes na Parrilla",
      description: "",
      price: 25,
      image: Acompanhamentos10,
    },
    {
      name: "Mandioca cozida com manteiga de garrafa e alho frito",
      description: "",
      price: 25,
      image: Acompanhamentos11,
    },
    {
      name: "Pure de batata",
      description: "",
      price: 18,
      image: Acompanhamentos12,
    },
    {
      name: "Vinagrete",
      description: "",
      price: 12,
      image: Acompanhamentos13,
    },
  ],
};

const MenuPastas = [
  {
    name: "Gnocchi Recheado Cream Cheese",
    description:
      "Acompanha molho do Chefe (Tomate assado com pistache e leve toque de aliche)",
    price: 69,
    image: offerImage2,
  },
  {
    name: "Pasta Fresca",
    description:
      "Acompanha molho Papalina (Molho branco com bacon artesanal Carní e Copa) ou Pomodoro.",
    price: 59,
    image: offerImage2,
  },
  {
    name: "Torteline de Abobora Cabotia com nozes",
    description: "Molho manteiga de Salvia",
    price: 79,
    image: offerImage2,
  },
  {
    name: "Risoto de limão siciliano",
    description: "",
    price: 49,
    image: offerImage2,
  },
  {
    name: "Risoto de alho poro",
    description: "",
    price: 49,
    image: offerImage2,
  },
  {
    name: "Risoto de parmesão",
    description: "",
    price: 49,
    image: offerImage2,
  },
];

const MenuDeserts = [
  {
    name: "Abacaxi grelhado na Parrilla",
    description:
      "Abacaxi grelhado com açúcar e canela com granita de limão e manjericão",
    price: 25,
    image: "",
  },
  {
    name: "Arroz doce com pralinê de amendoim.",
    description: "",
    price: 19,
    image: "",
  },
  {
    name: "Banana assada na Parrilla",
    description:
      "Banana assada com açúcar e canela, acompanhada de sorvete de creme",
    price: 19,
    image: "",
  },
  {
    name: "Torta mousse de cacau",
    description: "Acompanha creme de tomilho defumado",
    price: 26,
    image: "",
  },
];

export {
  MainHeaderContent,
  BannerSectionContent,
  WeOfferContent,
  ExecutiveMenu,
  MenuStarters,
  MenuMain,
  MenuSideDish,
  MenuPastas,
  Sauces,
  MenuDeserts,
};
