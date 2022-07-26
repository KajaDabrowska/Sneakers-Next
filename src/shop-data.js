import { v4 as uuidv4 } from "uuid";

const SHOP_DATA = [
  {
    title: "men",
    items: [
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "Stan Smith Pride Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8020d7fee088442d8da2ae2801123818_9366/Stan_Smith_Pride_Shoes_White_GX6394_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d31fc9bf37c4fb8bd9eae280111ffa4_9366/Stan_Smith_Pride_Shoes_White_GX6394_011_hover_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/59a4b6279f974ef29c07ae280112afcf_9366/Stan_Smith_Pride_Shoes_White_GX6394_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc28d998187445879ee3ae2d01455982_9366/Stan_Smith_Pride_Shoes_White_GX6394_010_hover_standard.jpg",
        ],
        description:
          "The 2022 adidas X Kris Andrew Small Pride Collection was inspired by the Stonewall Activists of the Stonewall Uprising in 1969. Together adidas and Kris Andrew Small offer a collection in solidarity & celebration of the LGBTQIA+ community's past & present, honouring unique belonging – creating a colourful & diverse graphic message among this inclusive & optimistic collection. This partnership is also adjacent to adidas' two key Global Purpose Partners, Athlete Ally & Stonewall UK.",
        hasMultiplePrices: true,
        price: {
          current: 90,
          old: 120,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "ZX 5K Boost Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/66088b4dac8a46449e5badf3017eaf2e_9366/ZX_5K_Boost_Shoes_White_GW3040_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/06af3311feb443858b61adf3017f005c_9366/ZX_5K_Boost_Shoes_White_GW3040_02_standard_hover.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb4ad7f0f62349eb853aadf3017cf71d_9366/ZX_5K_Boost_Shoes_White_GW3040_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e17b94526a0e4f8d851aadf3017de0d3_9366/ZX_5K_Boost_Shoes_White_GW3040_04_standard.jpg",
        ],
        description:
          "If you had to decide between style and innovation, which would you choose? Silly question. You shouldn't have to make a decision like that. Just lace up in these adidas ZX 5K Boost Shoes and be done with it. Built on the innovative spirit of the ZX design code, they have a full-length Boost midsole wrapped in translucent tooling. Suede overlays and reflective details accent the mesh upper for style that shines.",
        hasMultiplePrices: false,
        price: {
          current: 160,
          old: 160,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "Superstar shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50dc6f975e9640718ba3ae0c015737b7_9366/Superstar_Shoes_White_HP5403_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0193a34ba7454d6bb2a1ae0c01582e24_9366/Superstar_Shoes_White_HP5403_02_standard_hover.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0448f82fce441e9ab3eae0c01565496_9366/Superstar_Shoes_White_HP5403_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28187d20dbf24d41a991ae0c015712f6_9366/Superstar_Shoes_White_HP5403_04_standard.jpg",
        ],
        description:
          "A fixture on the cultural scene for more than 50 years, the adidas Superstar Shoes are one of the most iconic adidas sneakers ever created. Not much has changed to the design over the last half a century. But where they've been — that's a different story. They started on the hardwood, and have since been worn just about everywhere else: hip hop stages, runways, you name it. All the classic details remain unchanged, from the rubber shell toe to the serrated 3-Stripes. Just a little color update, that's all.",
        hasMultiplePrices: false,
        price: {
          current: 100,
          old: 100,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "Stan Smith Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ac706d8555244a6e8ea7ac1e00f521d1_9366/Stan_Smith_Shoes_White_FX5502_02_standard_hover.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/72a38538fd684788b5d9ac1e00f52860_9366/Stan_Smith_Shoes_White_FX5502_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f86168171d2a4644a8eeac1e00f52f85_9366/Stan_Smith_Shoes_White_FX5502_04_standard.jpg",
        ],
        description:
          "Timeless appeal. Effortless style. Everyday versatility. For over 50 years and counting, adidas Stan Smith Shoes have continued to hold their place as an icon. This pair shows off a fresh redesign as part of adidas' commitment to use only recycled polyester by 2024. With a vegan upper and an outsole made from rubber waste, they still have iconic style, they're just made with the planet in mind.",
        hasMultiplePrices: false,
        price: {
          current: 95,
          old: 95,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "Ultraboost Climacool 2 DNA Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/992454f9303d4b54a7c0ae37012debd1_9366/Ultraboost_Climacool_2_DNA_Shoes_Orange_GX2945_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8b90a5717e74258a197ae37012e74a2_9366/Ultraboost_Climacool_2_DNA_Shoes_Orange_GX2945_02_standard_hover.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/25b2521a75404de9a9bcae37012c4e42_9366/Ultraboost_Climacool_2_DNA_Shoes_Orange_GX2945_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad5039cb921e4309bbacae37012d3d2b_9366/Ultraboost_Climacool_2_DNA_Shoes_Orange_GX2945_04_standard.jpg",
        ],
        description:
          "Not just one icon. Two. Celebrate adidas running heritage in these shoes that combine the legendary Ultraboost design with our cult classic, the Climacool. The foot-hugging adidas PRIMEKNIT upper has a forged mono mesh cage that keeps the air flowing, and BOOST in the midsole provides energy return no matter how long you're on your feet.",
        hasMultiplePrices: false,
        price: {
          current: 190,
          old: 190,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "M&M's Brand Forum Low 84 Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c52377a755ed48e5aacdad740147de7c_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1141d8de76434cbd8210ad740147e5be_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94aaa8d21a6b4eceb5ffad740147fc85_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_011_hover_standard.jpg",
        ],
        description:
          "Everyone has their favorite M&M'S Brand colors — what's yours? Show it off with these adidas Forum shoes. The iconic basketball silhouette comes to life with different M&M'S characters' personalities, each shoe representing a different one through colors and playful details. Even the 3-Stripes get the chocolaty goodness treatment with groove lines that mimic the M&M'S bag's edges. Peanut-colored lining and a character on the sockliner drives the fun, unexpected look home.",
        hasMultiplePrices: false,
        price: {
          current: 150,
          old: 150,
        },
      },
    ],
  },

  {
    title: "women",
    items: [
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "NMD_R1 Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b6ff077465e143f3abcfadf8006cd607_9366/NMD_R1_Shoes_White_GW5679_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c7656223b32432b9ec9adf8006d25fb_9366/NMD_R1_Shoes_White_GW5679_02_standard_hover.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0bdff483c60e43f282daadf800689d7c_9366/NMD_R1_Shoes_White_GW5679_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ada27acc1d354c0ab251adf800698073_9366/NMD_R1_Shoes_White_GW5679_04_standard.jpg",
        ],
        description:
          "Inspired by running silhouettes from the '80s archive, NMD was born in 2015 to merge sleek style with modern technologies and comfort. This pair of the iconic shoes brings easy energy to your everyday look. Energy-returning BOOST in the midsole provides comfort, and the signature NMD midsole plugs and heel pull ratchet up the futuristic look.",
        hasMultiplePrices: false,
        price: {
          current: 150,
          old: 150,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "Stan Smith Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e10dae92843745f792e0ae060099a117_9366/Stan_Smith_Shoes_White_GY1072_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6c5b2d25fcfc4efc8553ae06009a132e_9366/Stan_Smith_Shoes_White_GY1072_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb61e62d2ac9490c8436ae060097d5e6_9366/Stan_Smith_Shoes_White_GY1072_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cfe8fec9d6f64cc9a62aae060099052b_9366/Stan_Smith_Shoes_White_GY1072_04_standard.jpg",
        ],
        description:
          "Plants have been there for us through the best of times and the worst of times. They heal us, soothe us, and have recently proved to be excellent company. So in honor of Plant Appreciation Day, we celebrate our trusty, leafy friends with these adidas Stan Smith shoes. We keep the clean lines that the iconic silhouette is known for. Now they just get some extra life with botanical graphics springing up allover the upper.",
        hasMultiplePrices: false,
        price: {
          current: 100,
          old: 100,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "Disney NMD_R1 Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fae3e52ccebe49029351adf000a1b67a_9366/Disney_NMD_R1_Shoes_Black_GV7909_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1bde7a8f98d74c1eba98adf000a1c638_9366/Disney_NMD_R1_Shoes_Black_GV7909_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f32a572c161940bfb98eadf000a1cde8_9366/Disney_NMD_R1_Shoes_Black_GV7909_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f2922ea5c01f4b51a24dadf000db4afc_9366/Disney_NMD_R1_Shoes_Black_GV7909_011_hover_standard.jpg",
        ],
        description:
          "A fixture on the cultural scene for more than 50 years, the adidas Superstar Shoes are one of the most iconic adidas sneakers ever created. Not much has changed to the design over the last half a century. But where they've been — that's a different story. They started on the hardwood, and have since been worn just about everywhere else: hip hop stages, runways, you name it. All the classic details remain unchanged, from the rubber shell toe to the serrated 3-Stripes. Just a little color update, that's all.",
        hasMultiplePrices: true,
        price: {
          current: 130,
          old: 160,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "Rich Mnisi X9000L4 Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7544d10a2bc4debb538ad7b0147bf6c_9366/Rich_Mnisi_X9000L4_Shoes_White_GW3400_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ce1538dd51a46adb02fad7b0147cf96_9366/Rich_Mnisi_X9000L4_Shoes_White_GW3400_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3275d5aa36194252ad99ad7b0147d830_9366/Rich_Mnisi_X9000L4_Shoes_White_GW3400_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/467d02185b0f41b5b74fad7b0147dfcc_9366/Rich_Mnisi_X9000L4_Shoes_White_GW3400_04_standard.jpg",
        ],
        description:
          "Run wild. These adidas shoes are made in collaboration with South African designer Rich Mnisi. The vibrant patterns take influence from the hustle and bustle of South African city life, played out in an explosion of colors and abstract prints. Built for short- to mid-distance running, they have a soft adidas PRIMEKNIT upper and energy-returning BOOST in the midsole.",
        hasMultiplePrices: false,
        price: {
          current: 150,
          old: 150,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "Ultraboost 22 Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3fd7f5180f7144009431adf90156e52c_9366/ULTRABOOST_22_SHOES_White_GX6302_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f96fe1e878854106867eadf90156f54d_9366/ULTRABOOST_22_SHOES_White_GX6302_02_standard_hover.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9e44bbbe4610475ea01badf90156fc8c_9366/ULTRABOOST_22_SHOES_White_GX6302_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ddac3fa7fa494ed39f76adf90157057a_9366/ULTRABOOST_22_SHOES_White_GX6302_04_standard.jpg",
        ],
        description:
          "With the help of 1.2 million foot scans, we updated Ultraboost with a complete 360° female fit improvement. And we didn't stop there. We re-engineered the rubber outsole. We tested hundreds of prototypes. We kept going until we saw visible improvements in performance. The result? 4% more forefoot energy return, compared to Ultraboost 21 for women. The adidas PRIMEKNIT upper includes a narrower heel fit, designed to avoid heel slip and blisters. You'll be riding on a BOOST midsole with a Linear Energy Push system. The shoe's upper is made with yarn containing 50% Parley Ocean Plastic —  reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean.",
        hasMultiplePrices: false,
        price: {
          current: 190,
          old: 190,
        },
      },
      {
        id: uuidv4(),
        brand: "Adidas",
        name: "Forum Low Shoes",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e9b58e4b434f4a329dceae1300d3f86d_9366/Forum_Low_Shoes_White_GY3669_01_standard.jpg",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e9b58e4b434f4a329dceae1300d3f86d_9366/Forum_Low_Shoes_White_GY3669_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3dba7d4e9c44b519884ae1300d41205_9366/Forum_Low_Shoes_White_GY3669_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edc168c8c1b445dd913dae1300d419c6_9366/Forum_Low_Shoes_White_GY3669_04_standard.jpg",
        ],
        description:
          "There's no substitute for the real thing. These adidas Forum Low Shoes stay true to the original basketball sneaker that started it all. Their coated leather upper, chunky build and removable strap reflect authentic hoops style.",
        hasMultiplePrices: false,
        price: {
          current: 90,
          old: 90,
        },
      },
    ],
  },
];

export default SHOP_DATA;
