const regionsData = [
  {
    product_code: 1,
    region_id: 2910,
    image_url: "https://static.pxl.ai/problem/images/VT-070.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 2,
    region_id: 2100,
    image_url: "https://static.pxl.ai/problem/images/OP-019.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 3,
    region_id: 3901,
    image_url: "https://static.pxl.ai/problem/images/JK-093.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 4,
    region_id: 1380,
    image_url: "https://static.pxl.ai/problem/images/JK-087.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 5,
    region_id: 4910,
    image_url: "https://static.pxl.ai/problem/images/VT-064.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 6,
    region_id: 4989,
    image_url: "https://static.pxl.ai/problem/images/OP-025.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 7,
    region_id: 2590,
    image_url: "https://static.pxl.ai/problem/images/PT-217.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 8,
    region_id: 4725,
    image_url: "https://static.pxl.ai/problem/images/VT-058.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 9,
    region_id: 3808,
    image_url: "https://static.pxl.ai/problem/images/OP-031.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 10,
    region_id: 1862,
    image_url: "https://static.pxl.ai/problem/images/PT-203.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 11,
    region_id: 1089,
    image_url: "https://static.pxl.ai/problem/images/CT-088.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 12,
    region_id: 4840,
    image_url: "https://static.pxl.ai/problem/images/CT-063.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 13,
    region_id: 1323,
    image_url: "https://static.pxl.ai/problem/images/JP-239.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 14,
    region_id: 2601,
    image_url: "https://static.pxl.ai/problem/images/JK-050.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 15,
    region_id: 1555,
    image_url: "https://static.pxl.ai/problem/images/KN-115.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 16,
    region_id: 2063,
    image_url: "https://static.pxl.ai/problem/images/KN-101.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 17,
    region_id: 3112,
    image_url: "https://static.pxl.ai/problem/images/JK-044.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 18,
    region_id: 1772,
    image_url: "https://static.pxl.ai/problem/images/CT-077.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 19,
    region_id: 3875,
    image_url: "https://static.pxl.ai/problem/images/JP-205.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 20,
    region_id: 2851,
    image_url: "https://static.pxl.ai/problem/images/KN-129.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 21,
    region_id: 3716,
    image_url: "https://static.pxl.ai/problem/images/JK-078.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 22,
    region_id: 4162,
    image_url: "https://static.pxl.ai/problem/images/JP-211.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 23,
    region_id: 3093,
    image_url: "https://static.pxl.ai/problem/images/PT-029.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 24,
    region_id: 3875,
    image_url: "https://static.pxl.ai/problem/images/JK-291.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 25,
    region_id: 4245,
    image_url: "https://static.pxl.ai/problem/images/SH-079.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 26,
    region_id: 3949,
    image_url: "https://static.pxl.ai/problem/images/SW-152.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 27,
    region_id: 1680,
    image_url: "https://static.pxl.ai/problem/images/BL-108.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 28,
    region_id: 4354,
    image_url: "https://static.pxl.ai/problem/images/SW-146.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 29,
    region_id: 2556,
    image_url: "https://static.pxl.ai/problem/images/JK-285.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 30,
    region_id: 1685,
    image_url: "https://static.pxl.ai/problem/images/PT-015.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "fur",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 31,
    region_id: 4314,
    image_url: "https://static.pxl.ai/problem/images/CD-052.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 32,
    region_id: 2833,
    image_url: "https://static.pxl.ai/problem/images/SE-072.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 33,
    region_id: 3139,
    image_url: "https://static.pxl.ai/problem/images/BL-120.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 34,
    region_id: 4242,
    image_url: "https://static.pxl.ai/problem/images/SK-186.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 35,
    region_id: 1912,
    image_url: "https://static.pxl.ai/problem/images/SH-045.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 36,
    region_id: 2049,
    image_url: "https://static.pxl.ai/problem/images/SK-192.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 37,
    region_id: 3443,
    image_url: "https://static.pxl.ai/problem/images/SH-051.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 38,
    region_id: 3403,
    image_url: "https://static.pxl.ai/problem/images/BL-134.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 39,
    region_id: 4544,
    image_url: "https://static.pxl.ai/problem/images/PT-001.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 40,
    region_id: 1903,
    image_url: "https://static.pxl.ai/problem/images/SE-066.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 41,
    region_id: 3411,
    image_url: "https://static.pxl.ai/problem/images/CD-046.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 42,
    region_id: 1689,
    image_url: "https://static.pxl.ai/problem/images/JK-252.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 43,
    region_id: 3817,
    image_url: "https://static.pxl.ai/problem/images/CT-261.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 44,
    region_id: 4926,
    image_url: "https://static.pxl.ai/problem/images/SK-179.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 45,
    region_id: 2929,
    image_url: "https://static.pxl.ai/problem/images/CT-275.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 46,
    region_id: 1802,
    image_url: "https://static.pxl.ai/problem/images/SE-099.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 47,
    region_id: 3773,
    image_url: "https://static.pxl.ai/problem/images/JK-246.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 48,
    region_id: 2981,
    image_url: "https://static.pxl.ai/problem/images/CD-091.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 49,
    region_id: 4609,
    image_url: "https://static.pxl.ai/problem/images/SK-145.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 50,
    region_id: 2521,
    image_url: "https://static.pxl.ai/problem/images/SH-086.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 51,
    region_id: 4854,
    image_url: "https://static.pxl.ai/problem/images/JP-007.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 52,
    region_id: 4915,
    image_url: "https://static.pxl.ai/problem/images/JP-013.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 53,
    region_id: 4113,
    image_url: "https://static.pxl.ai/problem/images/CT-249.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 54,
    region_id: 3749,
    image_url: "https://static.pxl.ai/problem/images/SK-151.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "leather",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 55,
    region_id: 1829,
    image_url: "https://static.pxl.ai/problem/images/SH-092.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 56,
    region_id: 1512,
    image_url: "https://static.pxl.ai/problem/images/CD-085.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 57,
    region_id: 1456,
    image_url: "https://static.pxl.ai/problem/images/SW-026.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 58,
    region_id: 1076,
    image_url: "https://static.pxl.ai/problem/images/BL-068.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 59,
    region_id: 4270,
    image_url: "https://static.pxl.ai/problem/images/JP-198.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 60,
    region_id: 1249,
    image_url: "https://static.pxl.ai/problem/images/SW-032.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 61,
    region_id: 4476,
    image_url: "https://static.pxl.ai/problem/images/SH-119.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "casual",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 62,
    region_id: 4588,
    image_url: "https://static.pxl.ai/problem/images/PT-149.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 63,
    region_id: 3586,
    image_url: "https://static.pxl.ai/problem/images/PT-161.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 64,
    region_id: 2194,
    image_url: "https://static.pxl.ai/problem/images/SE-106.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 65,
    region_id: 2221,
    image_url: "https://static.pxl.ai/problem/images/CD-126.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 66,
    region_id: 3802,
    image_url: "https://static.pxl.ai/problem/images/BL-054.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 67,
    region_id: 2191,
    image_url: "https://static.pxl.ai/problem/images/SH-125.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 68,
    region_id: 2821,
    image_url: "https://static.pxl.ai/problem/images/BL-040.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 69,
    region_id: 4275,
    image_url: "https://static.pxl.ai/problem/images/PT-175.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 70,
    region_id: 4725,
    image_url: "https://static.pxl.ai/problem/images/CD-132.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 71,
    region_id: 1262,
    image_url: "https://static.pxl.ai/problem/images/SE-112.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 72,
    region_id: 2069,
    image_url: "https://static.pxl.ai/problem/images/SK-019.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 73,
    region_id: 3457,
    image_url: "https://static.pxl.ai/problem/images/CT-301.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 74,
    region_id: 1259,
    image_url: "https://static.pxl.ai/problem/images/SK-031.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 75,
    region_id: 2604,
    image_url: "https://static.pxl.ai/problem/images/BL-097.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 76,
    region_id: 3391,
    image_url: "https://static.pxl.ai/problem/images/JP-173.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 77,
    region_id: 1721,
    image_url: "https://static.pxl.ai/problem/images/BL-083.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 78,
    region_id: 3274,
    image_url: "https://static.pxl.ai/problem/images/JP-167.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 79,
    region_id: 4988,
    image_url: "https://static.pxl.ai/problem/images/SK-025.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 80,
    region_id: 3081,
    image_url: "https://static.pxl.ai/problem/images/VT-104.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 81,
    region_id: 2653,
    image_url: "https://static.pxl.ai/problem/images/VT-110.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 82,
    region_id: 2940,
    image_url: "https://static.pxl.ai/problem/images/OP-151.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 83,
    region_id: 4726,
    image_url: "https://static.pxl.ai/problem/images/OP-145.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 84,
    region_id: 3938,
    image_url: "https://static.pxl.ai/problem/images/CT-117.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 85,
    region_id: 4228,
    image_url: "https://static.pxl.ai/problem/images/JK-124.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 86,
    region_id: 4622,
    image_url: "https://static.pxl.ai/problem/images/KN-061.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 87,
    region_id: 3186,
    image_url: "https://static.pxl.ai/problem/images/KN-075.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 88,
    region_id: 1866,
    image_url: "https://static.pxl.ai/problem/images/JK-130.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "denim",
      },
      {
        sense: "casual",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 89,
    region_id: 2109,
    image_url: "https://static.pxl.ai/problem/images/CT-103.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 90,
    region_id: 3102,
    image_url: "https://static.pxl.ai/problem/images/JK-118.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 91,
    region_id: 3381,
    image_url: "https://static.pxl.ai/problem/images/KN-049.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 92,
    region_id: 2808,
    image_url: "https://static.pxl.ai/problem/images/SK-227.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 93,
    region_id: 4615,
    image_url: "https://static.pxl.ai/problem/images/KN-048.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 94,
    region_id: 1866,
    image_url: "https://static.pxl.ai/problem/images/SK-226.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 95,
    region_id: 4754,
    image_url: "https://static.pxl.ai/problem/images/JK-119.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 96,
    region_id: 1447,
    image_url: "https://static.pxl.ai/problem/images/JK-131.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 97,
    region_id: 1192,
    image_url: "https://static.pxl.ai/problem/images/KN-074.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 98,
    region_id: 4962,
    image_url: "https://static.pxl.ai/problem/images/CT-102.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 99,
    region_id: 1130,
    image_url: "https://static.pxl.ai/problem/images/CT-116.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 100,
    region_id: 2467,
    image_url: "https://static.pxl.ai/problem/images/KN-060.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 101,
    region_id: 1666,
    image_url: "https://static.pxl.ai/problem/images/JK-125.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 102,
    region_id: 3855,
    image_url: "https://static.pxl.ai/problem/images/OP-144.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 103,
    region_id: 1111,
    image_url: "https://static.pxl.ai/problem/images/OP-150.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 104,
    region_id: 1898,
    image_url: "https://static.pxl.ai/problem/images/VT-111.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 105,
    region_id: 2087,
    image_url: "https://static.pxl.ai/problem/images/VT-105.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 106,
    region_id: 1327,
    image_url: "https://static.pxl.ai/problem/images/SK-024.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 107,
    region_id: 3635,
    image_url: "https://static.pxl.ai/problem/images/JP-166.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 108,
    region_id: 3186,
    image_url: "https://static.pxl.ai/problem/images/BL-082.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 109,
    region_id: 2779,
    image_url: "https://static.pxl.ai/problem/images/JP-172.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 110,
    region_id: 1220,
    image_url: "https://static.pxl.ai/problem/images/BL-096.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 111,
    region_id: 1902,
    image_url: "https://static.pxl.ai/problem/images/SK-030.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 112,
    region_id: 3267,
    image_url: "https://static.pxl.ai/problem/images/CT-300.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 113,
    region_id: 4091,
    image_url: "https://static.pxl.ai/problem/images/SK-018.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 114,
    region_id: 1875,
    image_url: "https://static.pxl.ai/problem/images/BL-041.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 115,
    region_id: 3169,
    image_url: "https://static.pxl.ai/problem/images/SH-124.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 116,
    region_id: 1724,
    image_url: "https://static.pxl.ai/problem/images/CD-133.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 117,
    region_id: 3717,
    image_url: "https://static.pxl.ai/problem/images/SE-113.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 118,
    region_id: 1968,
    image_url: "https://static.pxl.ai/problem/images/PT-174.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 119,
    region_id: 1961,
    image_url: "https://static.pxl.ai/problem/images/SE-107.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 120,
    region_id: 4434,
    image_url: "https://static.pxl.ai/problem/images/CD-127.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 121,
    region_id: 3175,
    image_url: "https://static.pxl.ai/problem/images/PT-160.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 122,
    region_id: 4429,
    image_url: "https://static.pxl.ai/problem/images/BL-055.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 123,
    region_id: 3016,
    image_url: "https://static.pxl.ai/problem/images/SH-118.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 124,
    region_id: 2808,
    image_url: "https://static.pxl.ai/problem/images/SW-033.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 125,
    region_id: 4410,
    image_url: "https://static.pxl.ai/problem/images/JP-199.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 126,
    region_id: 4880,
    image_url: "https://static.pxl.ai/problem/images/PT-148.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 127,
    region_id: 3405,
    image_url: "https://static.pxl.ai/problem/images/BL-069.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 128,
    region_id: 4965,
    image_url: "https://static.pxl.ai/problem/images/SW-027.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 129,
    region_id: 3342,
    image_url: "https://static.pxl.ai/problem/images/SH-093.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 130,
    region_id: 3143,
    image_url: "https://static.pxl.ai/problem/images/SK-150.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 131,
    region_id: 2714,
    image_url: "https://static.pxl.ai/problem/images/CT-248.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 132,
    region_id: 1618,
    image_url: "https://static.pxl.ai/problem/images/JP-012.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 133,
    region_id: 3262,
    image_url: "https://static.pxl.ai/problem/images/CD-084.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 134,
    region_id: 3730,
    image_url: "https://static.pxl.ai/problem/images/CD-090.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 135,
    region_id: 2637,
    image_url: "https://static.pxl.ai/problem/images/JP-006.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 136,
    region_id: 4042,
    image_url: "https://static.pxl.ai/problem/images/SH-087.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 137,
    region_id: 1505,
    image_url: "https://static.pxl.ai/problem/images/SK-144.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 138,
    region_id: 1435,
    image_url: "https://static.pxl.ai/problem/images/CT-274.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 139,
    region_id: 1538,
    image_url: "https://static.pxl.ai/problem/images/JK-247.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 140,
    region_id: 3303,
    image_url: "https://static.pxl.ai/problem/images/SE-098.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 141,
    region_id: 4820,
    image_url: "https://static.pxl.ai/problem/images/JK-253.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 142,
    region_id: 4998,
    image_url: "https://static.pxl.ai/problem/images/SK-178.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 143,
    region_id: 4274,
    image_url: "https://static.pxl.ai/problem/images/CT-260.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 144,
    region_id: 3918,
    image_url: "https://static.pxl.ai/problem/images/BL-135.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 145,
    region_id: 2034,
    image_url: "https://static.pxl.ai/problem/images/SH-050.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 146,
    region_id: 4439,
    image_url: "https://static.pxl.ai/problem/images/SK-193.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 147,
    region_id: 1852,
    image_url: "https://static.pxl.ai/problem/images/SE-067.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 148,
    region_id: 1516,
    image_url: "https://static.pxl.ai/problem/images/CD-047.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 149,
    region_id: 2969,
    image_url: "https://static.pxl.ai/problem/images/CD-053.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 150,
    region_id: 1585,
    image_url: "https://static.pxl.ai/problem/images/SE-073.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 151,
    region_id: 4932,
    image_url: "https://static.pxl.ai/problem/images/PT-014.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 152,
    region_id: 4120,
    image_url: "https://static.pxl.ai/problem/images/SH-044.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 153,
    region_id: 4383,
    image_url: "https://static.pxl.ai/problem/images/SK-187.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 154,
    region_id: 3553,
    image_url: "https://static.pxl.ai/problem/images/BL-121.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 155,
    region_id: 2435,
    image_url: "https://static.pxl.ai/problem/images/SW-147.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 156,
    region_id: 1976,
    image_url: "https://static.pxl.ai/problem/images/BL-109.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 157,
    region_id: 4430,
    image_url: "https://static.pxl.ai/problem/images/JK-284.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 158,
    region_id: 4088,
    image_url: "https://static.pxl.ai/problem/images/JK-290.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 159,
    region_id: 1150,
    image_url: "https://static.pxl.ai/problem/images/PT-028.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 160,
    region_id: 1090,
    image_url: "https://static.pxl.ai/problem/images/SW-153.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 161,
    region_id: 2733,
    image_url: "https://static.pxl.ai/problem/images/SH-078.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "fur",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 162,
    region_id: 4678,
    image_url: "https://static.pxl.ai/problem/images/JK-079.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 163,
    region_id: 4605,
    image_url: "https://static.pxl.ai/problem/images/JP-210.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 164,
    region_id: 4869,
    image_url: "https://static.pxl.ai/problem/images/JP-204.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 165,
    region_id: 4795,
    image_url: "https://static.pxl.ai/problem/images/KN-128.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 166,
    region_id: 4847,
    image_url: "https://static.pxl.ai/problem/images/JK-045.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 167,
    region_id: 3169,
    image_url: "https://static.pxl.ai/problem/images/KN-100.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 168,
    region_id: 3422,
    image_url: "https://static.pxl.ai/problem/images/CT-076.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 169,
    region_id: 3182,
    image_url: "https://static.pxl.ai/problem/images/JP-238.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 170,
    region_id: 3225,
    image_url: "https://static.pxl.ai/problem/images/CT-062.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 171,
    region_id: 2099,
    image_url: "https://static.pxl.ai/problem/images/KN-114.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 172,
    region_id: 4111,
    image_url: "https://static.pxl.ai/problem/images/JK-051.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 173,
    region_id: 4790,
    image_url: "https://static.pxl.ai/problem/images/PT-202.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 174,
    region_id: 2725,
    image_url: "https://static.pxl.ai/problem/images/OP-030.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 175,
    region_id: 1888,
    image_url: "https://static.pxl.ai/problem/images/VT-059.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 176,
    region_id: 2141,
    image_url: "https://static.pxl.ai/problem/images/CT-089.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 177,
    region_id: 4235,
    image_url: "https://static.pxl.ai/problem/images/PT-216.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 178,
    region_id: 4265,
    image_url: "https://static.pxl.ai/problem/images/OP-024.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 179,
    region_id: 2007,
    image_url: "https://static.pxl.ai/problem/images/VT-065.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 180,
    region_id: 2256,
    image_url: "https://static.pxl.ai/problem/images/JK-086.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 181,
    region_id: 3546,
    image_url: "https://static.pxl.ai/problem/images/JK-092.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 182,
    region_id: 2025,
    image_url: "https://static.pxl.ai/problem/images/OP-018.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 183,
    region_id: 3113,
    image_url: "https://static.pxl.ai/problem/images/VT-071.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 184,
    region_id: 1195,
    image_url: "https://static.pxl.ai/problem/images/JK-084.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 185,
    region_id: 3551,
    image_url: "https://static.pxl.ai/problem/images/VT-067.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 186,
    region_id: 3301,
    image_url: "https://static.pxl.ai/problem/images/VT-073.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "formal",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 187,
    region_id: 3337,
    image_url: "https://static.pxl.ai/problem/images/JK-090.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 188,
    region_id: 4712,
    image_url: "https://static.pxl.ai/problem/images/PT-228.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 189,
    region_id: 3486,
    image_url: "https://static.pxl.ai/problem/images/OP-032.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 190,
    region_id: 1833,
    image_url: "https://static.pxl.ai/problem/images/PT-200.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 191,
    region_id: 1600,
    image_url: "https://static.pxl.ai/problem/images/OP-026.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 192,
    region_id: 1665,
    image_url: "https://static.pxl.ai/problem/images/PT-214.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 193,
    region_id: 1329,
    image_url: "https://static.pxl.ai/problem/images/CT-074.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 194,
    region_id: 3476,
    image_url: "https://static.pxl.ai/problem/images/KN-102.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "denim",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 195,
    region_id: 3750,
    image_url: "https://static.pxl.ai/problem/images/JK-047.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 196,
    region_id: 3673,
    image_url: "https://static.pxl.ai/problem/images/JK-053.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 197,
    region_id: 2486,
    image_url: "https://static.pxl.ai/problem/images/KN-116.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 198,
    region_id: 2473,
    image_url: "https://static.pxl.ai/problem/images/CT-060.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 199,
    region_id: 3224,
    image_url: "https://static.pxl.ai/problem/images/CT-048.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 200,
    region_id: 2942,
    image_url: "https://static.pxl.ai/problem/images/JP-212.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 201,
    region_id: 1548,
    image_url: "https://static.pxl.ai/problem/images/VT-098.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 202,
    region_id: 1796,
    image_url: "https://static.pxl.ai/problem/images/JP-206.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 203,
    region_id: 4198,
    image_url: "https://static.pxl.ai/problem/images/CD-079.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 204,
    region_id: 2712,
    image_url: "https://static.pxl.ai/problem/images/SE-059.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 205,
    region_id: 3380,
    image_url: "https://static.pxl.ai/problem/images/JK-286.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 206,
    region_id: 1328,
    image_url: "https://static.pxl.ai/problem/images/SW-145.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 207,
    region_id: 3831,
    image_url: "https://static.pxl.ai/problem/images/SW-151.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 208,
    region_id: 1777,
    image_url: "https://static.pxl.ai/problem/images/JK-292.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 209,
    region_id: 2374,
    image_url: "https://static.pxl.ai/problem/images/CD-045.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 210,
    region_id: 1147,
    image_url: "https://static.pxl.ai/problem/images/SE-065.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 211,
    region_id: 1816,
    image_url: "https://static.pxl.ai/problem/images/PT-002.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 212,
    region_id: 3342,
    image_url: "https://static.pxl.ai/problem/images/SK-191.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 213,
    region_id: 4989,
    image_url: "https://static.pxl.ai/problem/images/SH-052.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 214,
    region_id: 3202,
    image_url: "https://static.pxl.ai/problem/images/CT-289.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 215,
    region_id: 2761,
    image_url: "https://static.pxl.ai/problem/images/BL-137.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 216,
    region_id: 3487,
    image_url: "https://static.pxl.ai/problem/images/BL-123.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 217,
    region_id: 2426,
    image_url: "https://static.pxl.ai/problem/images/SK-185.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 218,
    region_id: 3111,
    image_url: "https://static.pxl.ai/problem/images/SH-046.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 219,
    region_id: 3919,
    image_url: "https://static.pxl.ai/problem/images/SE-071.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 220,
    region_id: 2818,
    image_url: "https://static.pxl.ai/problem/images/CD-051.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 221,
    region_id: 1514,
    image_url: "https://static.pxl.ai/problem/images/PT-016.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 222,
    region_id: 4030,
    image_url: "https://static.pxl.ai/problem/images/JK-245.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 223,
    region_id: 3800,
    image_url: "https://static.pxl.ai/problem/images/CT-276.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 224,
    region_id: 1634,
    image_url: "https://static.pxl.ai/problem/images/JP-038.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 225,
    region_id: 2245,
    image_url: "https://static.pxl.ai/problem/images/CT-262.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 226,
    region_id: 2686,
    image_url: "https://static.pxl.ai/problem/images/JK-251.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 227,
    region_id: 4522,
    image_url: "https://static.pxl.ai/problem/images/CD-086.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 228,
    region_id: 2272,
    image_url: "https://static.pxl.ai/problem/images/JK-279.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 229,
    region_id: 1917,
    image_url: "https://static.pxl.ai/problem/images/JP-010.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 230,
    region_id: 3888,
    image_url: "https://static.pxl.ai/problem/images/SK-152.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 231,
    region_id: 1803,
    image_url: "https://static.pxl.ai/problem/images/SH-091.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 232,
    region_id: 2507,
    image_url: "https://static.pxl.ai/problem/images/SK-146.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 233,
    region_id: 4872,
    image_url: "https://static.pxl.ai/problem/images/SH-085.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 234,
    region_id: 3536,
    image_url: "https://static.pxl.ai/problem/images/JP-004.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 235,
    region_id: 3963,
    image_url: "https://static.pxl.ai/problem/images/CD-092.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 236,
    region_id: 1084,
    image_url: "https://static.pxl.ai/problem/images/SW-031.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 237,
    region_id: 3984,
    image_url: "https://static.pxl.ai/problem/images/SW-025.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 238,
    region_id: 4587,
    image_url: "https://static.pxl.ai/problem/images/CD-119.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 239,
    region_id: 1899,
    image_url: "https://static.pxl.ai/problem/images/SE-111.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 240,
    region_id: 3604,
    image_url: "https://static.pxl.ai/problem/images/CD-131.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 241,
    region_id: 4145,
    image_url: "https://static.pxl.ai/problem/images/PT-176.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 242,
    region_id: 4339,
    image_url: "https://static.pxl.ai/problem/images/SH-126.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 243,
    region_id: 3719,
    image_url: "https://static.pxl.ai/problem/images/BL-043.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 244,
    region_id: 2358,
    image_url: "https://static.pxl.ai/problem/images/BL-057.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 245,
    region_id: 4179,
    image_url: "https://static.pxl.ai/problem/images/SW-019.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 246,
    region_id: 4585,
    image_url: "https://static.pxl.ai/problem/images/CD-125.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 247,
    region_id: 3720,
    image_url: "https://static.pxl.ai/problem/images/SE-105.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 248,
    region_id: 3091,
    image_url: "https://static.pxl.ai/problem/images/PT-162.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 249,
    region_id: 1985,
    image_url: "https://static.pxl.ai/problem/images/PT-189.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 250,
    region_id: 3801,
    image_url: "https://static.pxl.ai/problem/images/CT-302.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 251,
    region_id: 2986,
    image_url: "https://static.pxl.ai/problem/images/JP-158.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 252,
    region_id: 2456,
    image_url: "https://static.pxl.ai/problem/images/BL-080.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 253,
    region_id: 2552,
    image_url: "https://static.pxl.ai/problem/images/JP-164.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 254,
    region_id: 4526,
    image_url: "https://static.pxl.ai/problem/images/SK-026.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 255,
    region_id: 4092,
    image_url: "https://static.pxl.ai/problem/images/SK-032.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 256,
    region_id: 4242,
    image_url: "https://static.pxl.ai/problem/images/BL-094.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 257,
    region_id: 1938,
    image_url: "https://static.pxl.ai/problem/images/JP-170.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 258,
    region_id: 1450,
    image_url: "https://static.pxl.ai/problem/images/VT-107.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 259,
    region_id: 3571,
    image_url: "https://static.pxl.ai/problem/images/KN-089.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 260,
    region_id: 2753,
    image_url: "https://static.pxl.ai/problem/images/OP-146.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "denim",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 261,
    region_id: 4683,
    image_url: "https://static.pxl.ai/problem/images/OP-152.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 262,
    region_id: 2301,
    image_url: "https://static.pxl.ai/problem/images/CT-100.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 263,
    region_id: 3612,
    image_url: "https://static.pxl.ai/problem/images/SK-218.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 264,
    region_id: 2467,
    image_url: "https://static.pxl.ai/problem/images/KN-076.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 265,
    region_id: 3673,
    image_url: "https://static.pxl.ai/problem/images/JK-133.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 266,
    region_id: 1903,
    image_url: "https://static.pxl.ai/problem/images/JK-127.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "denim",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 267,
    region_id: 2571,
    image_url: "https://static.pxl.ai/problem/images/KN-062.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 268,
    region_id: 1930,
    image_url: "https://static.pxl.ai/problem/images/CT-114.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 269,
    region_id: 2410,
    image_url: "https://static.pxl.ai/problem/images/SK-224.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 270,
    region_id: 4115,
    image_url: "https://static.pxl.ai/problem/images/CT-128.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 271,
    region_id: 3115,
    image_url: "https://static.pxl.ai/problem/images/SK-230.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 272,
    region_id: 4317,
    image_url: "https://static.pxl.ai/problem/images/CT-129.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 273,
    region_id: 1329,
    image_url: "https://static.pxl.ai/problem/images/SK-225.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 274,
    region_id: 1903,
    image_url: "https://static.pxl.ai/problem/images/KN-063.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 275,
    region_id: 2686,
    image_url: "https://static.pxl.ai/problem/images/JK-126.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 276,
    region_id: 3796,
    image_url: "https://static.pxl.ai/problem/images/CT-115.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 277,
    region_id: 2366,
    image_url: "https://static.pxl.ai/problem/images/SK-219.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 278,
    region_id: 2919,
    image_url: "https://static.pxl.ai/problem/images/CT-101.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 279,
    region_id: 3514,
    image_url: "https://static.pxl.ai/problem/images/JK-132.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 280,
    region_id: 1664,
    image_url: "https://static.pxl.ai/problem/images/KN-077.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "none",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 281,
    region_id: 4126,
    image_url: "https://static.pxl.ai/problem/images/OP-153.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 282,
    region_id: 4949,
    image_url: "https://static.pxl.ai/problem/images/OP-147.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 283,
    region_id: 2069,
    image_url: "https://static.pxl.ai/problem/images/KN-088.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 284,
    region_id: 3559,
    image_url: "https://static.pxl.ai/problem/images/VT-106.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 285,
    region_id: 2737,
    image_url: "https://static.pxl.ai/problem/images/JP-171.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 286,
    region_id: 1574,
    image_url: "https://static.pxl.ai/problem/images/BL-095.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 287,
    region_id: 1699,
    image_url: "https://static.pxl.ai/problem/images/SK-033.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 288,
    region_id: 1182,
    image_url: "https://static.pxl.ai/problem/images/SK-027.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 289,
    region_id: 2208,
    image_url: "https://static.pxl.ai/problem/images/JP-165.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 290,
    region_id: 1450,
    image_url: "https://static.pxl.ai/problem/images/BL-081.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 291,
    region_id: 1060,
    image_url: "https://static.pxl.ai/problem/images/PT-188.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 292,
    region_id: 3397,
    image_url: "https://static.pxl.ai/problem/images/JP-159.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 293,
    region_id: 3473,
    image_url: "https://static.pxl.ai/problem/images/CT-303.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 294,
    region_id: 3321,
    image_url: "https://static.pxl.ai/problem/images/SW-018.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 295,
    region_id: 1667,
    image_url: "https://static.pxl.ai/problem/images/BL-056.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 296,
    region_id: 3410,
    image_url: "https://static.pxl.ai/problem/images/PT-163.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 297,
    region_id: 3717,
    image_url: "https://static.pxl.ai/problem/images/CD-124.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 298,
    region_id: 1481,
    image_url: "https://static.pxl.ai/problem/images/SE-104.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 299,
    region_id: 2592,
    image_url: "https://static.pxl.ai/problem/images/PT-177.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 300,
    region_id: 2165,
    image_url: "https://static.pxl.ai/problem/images/SE-110.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 301,
    region_id: 3807,
    image_url: "https://static.pxl.ai/problem/images/CD-130.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 302,
    region_id: 3657,
    image_url: "https://static.pxl.ai/problem/images/BL-042.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 303,
    region_id: 3803,
    image_url: "https://static.pxl.ai/problem/images/SH-127.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 304,
    region_id: 3102,
    image_url: "https://static.pxl.ai/problem/images/SW-024.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 305,
    region_id: 2439,
    image_url: "https://static.pxl.ai/problem/images/CD-118.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 306,
    region_id: 3496,
    image_url: "https://static.pxl.ai/problem/images/SW-030.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 307,
    region_id: 2118,
    image_url: "https://static.pxl.ai/problem/images/JP-005.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 308,
    region_id: 2069,
    image_url: "https://static.pxl.ai/problem/images/SH-084.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 309,
    region_id: 1832,
    image_url: "https://static.pxl.ai/problem/images/SK-147.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 310,
    region_id: 1118,
    image_url: "https://static.pxl.ai/problem/images/CD-093.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 311,
    region_id: 2753,
    image_url: "https://static.pxl.ai/problem/images/JK-278.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 312,
    region_id: 4163,
    image_url: "https://static.pxl.ai/problem/images/CD-087.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 313,
    region_id: 2634,
    image_url: "https://static.pxl.ai/problem/images/SH-090.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "leather",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 314,
    region_id: 1442,
    image_url: "https://static.pxl.ai/problem/images/SK-153.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 315,
    region_id: 1422,
    image_url: "https://static.pxl.ai/problem/images/JP-011.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 316,
    region_id: 1000,
    image_url: "https://static.pxl.ai/problem/images/CT-263.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 317,
    region_id: 3521,
    image_url: "https://static.pxl.ai/problem/images/JP-039.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 318,
    region_id: 2969,
    image_url: "https://static.pxl.ai/problem/images/JK-250.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 319,
    region_id: 3098,
    image_url: "https://static.pxl.ai/problem/images/JK-244.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 320,
    region_id: 4824,
    image_url: "https://static.pxl.ai/problem/images/CT-277.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 321,
    region_id: 1701,
    image_url: "https://static.pxl.ai/problem/images/SH-047.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "none",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 322,
    region_id: 1103,
    image_url: "https://static.pxl.ai/problem/images/SK-184.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 323,
    region_id: 1321,
    image_url: "https://static.pxl.ai/problem/images/BL-122.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 324,
    region_id: 2762,
    image_url: "https://static.pxl.ai/problem/images/PT-017.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 325,
    region_id: 4548,
    image_url: "https://static.pxl.ai/problem/images/SE-070.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 326,
    region_id: 1012,
    image_url: "https://static.pxl.ai/problem/images/CD-050.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 327,
    region_id: 2023,
    image_url: "https://static.pxl.ai/problem/images/PT-003.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 328,
    region_id: 1011,
    image_url: "https://static.pxl.ai/problem/images/CD-044.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 329,
    region_id: 1950,
    image_url: "https://static.pxl.ai/problem/images/SE-064.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 330,
    region_id: 3052,
    image_url: "https://static.pxl.ai/problem/images/BL-136.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 331,
    region_id: 3859,
    image_url: "https://static.pxl.ai/problem/images/CT-288.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 332,
    region_id: 4499,
    image_url: "https://static.pxl.ai/problem/images/SH-053.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 333,
    region_id: 4582,
    image_url: "https://static.pxl.ai/problem/images/SK-190.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 334,
    region_id: 1546,
    image_url: "https://static.pxl.ai/problem/images/SW-150.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 335,
    region_id: 3673,
    image_url: "https://static.pxl.ai/problem/images/JK-293.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 336,
    region_id: 4239,
    image_url: "https://static.pxl.ai/problem/images/JK-287.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 337,
    region_id: 2711,
    image_url: "https://static.pxl.ai/problem/images/CD-078.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 338,
    region_id: 3479,
    image_url: "https://static.pxl.ai/problem/images/SE-058.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "leather",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 339,
    region_id: 2329,
    image_url: "https://static.pxl.ai/problem/images/SW-144.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 340,
    region_id: 2804,
    image_url: "https://static.pxl.ai/problem/images/JP-207.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 341,
    region_id: 2858,
    image_url: "https://static.pxl.ai/problem/images/JP-213.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 342,
    region_id: 3412,
    image_url: "https://static.pxl.ai/problem/images/CT-049.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "leather",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 343,
    region_id: 3636,
    image_url: "https://static.pxl.ai/problem/images/VT-099.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 344,
    region_id: 1800,
    image_url: "https://static.pxl.ai/problem/images/KN-117.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 345,
    region_id: 3745,
    image_url: "https://static.pxl.ai/problem/images/JK-052.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 346,
    region_id: 4946,
    image_url: "https://static.pxl.ai/problem/images/CT-061.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 347,
    region_id: 2197,
    image_url: "https://static.pxl.ai/problem/images/CT-075.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 348,
    region_id: 2156,
    image_url: "https://static.pxl.ai/problem/images/JK-046.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 349,
    region_id: 1614,
    image_url: "https://static.pxl.ai/problem/images/KN-103.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 350,
    region_id: 4571,
    image_url: "https://static.pxl.ai/problem/images/PT-215.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 351,
    region_id: 2305,
    image_url: "https://static.pxl.ai/problem/images/OP-027.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 352,
    region_id: 1343,
    image_url: "https://static.pxl.ai/problem/images/PT-201.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 353,
    region_id: 2614,
    image_url: "https://static.pxl.ai/problem/images/OP-033.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 354,
    region_id: 1324,
    image_url: "https://static.pxl.ai/problem/images/PT-229.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 355,
    region_id: 1348,
    image_url: "https://static.pxl.ai/problem/images/JK-091.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 356,
    region_id: 3941,
    image_url: "https://static.pxl.ai/problem/images/VT-072.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 357,
    region_id: 4801,
    image_url: "https://static.pxl.ai/problem/images/VT-066.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 358,
    region_id: 4833,
    image_url: "https://static.pxl.ai/problem/images/JK-085.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 359,
    region_id: 3412,
    image_url: "https://static.pxl.ai/problem/images/PT-205.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 360,
    region_id: 1431,
    image_url: "https://static.pxl.ai/problem/images/OP-037.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 361,
    region_id: 1210,
    image_url: "https://static.pxl.ai/problem/images/PT-211.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 362,
    region_id: 1693,
    image_url: "https://static.pxl.ai/problem/images/OP-023.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 363,
    region_id: 4596,
    image_url: "https://static.pxl.ai/problem/images/JK-081.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "linen",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 364,
    region_id: 4596,
    image_url: "https://static.pxl.ai/problem/images/VT-062.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 365,
    region_id: 4148,
    image_url: "https://static.pxl.ai/problem/images/VT-076.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 366,
    region_id: 3310,
    image_url: "https://static.pxl.ai/problem/images/JK-095.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 367,
    region_id: 1708,
    image_url: "https://static.pxl.ai/problem/images/JP-217.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 368,
    region_id: 3086,
    image_url: "https://static.pxl.ai/problem/images/JP-203.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 369,
    region_id: 2388,
    image_url: "https://static.pxl.ai/problem/images/CT-059.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 370,
    region_id: 1435,
    image_url: "https://static.pxl.ai/problem/images/VT-089.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 371,
    region_id: 4974,
    image_url: "https://static.pxl.ai/problem/images/KN-107.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 372,
    region_id: 3773,
    image_url: "https://static.pxl.ai/problem/images/JK-042.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 373,
    region_id: 3497,
    image_url: "https://static.pxl.ai/problem/images/CT-071.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 374,
    region_id: 3555,
    image_url: "https://static.pxl.ai/problem/images/CT-065.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 375,
    region_id: 4119,
    image_url: "https://static.pxl.ai/problem/images/JK-056.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 376,
    region_id: 4370,
    image_url: "https://static.pxl.ai/problem/images/KN-113.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 377,
    region_id: 1071,
    image_url: "https://static.pxl.ai/problem/images/SH-057.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 378,
    region_id: 1719,
    image_url: "https://static.pxl.ai/problem/images/SK-194.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 379,
    region_id: 1430,
    image_url: "https://static.pxl.ai/problem/images/BL-132.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 380,
    region_id: 1489,
    image_url: "https://static.pxl.ai/problem/images/SE-060.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 381,
    region_id: 2240,
    image_url: "https://static.pxl.ai/problem/images/CD-040.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 382,
    region_id: 2312,
    image_url: "https://static.pxl.ai/problem/images/PT-007.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 383,
    region_id: 2591,
    image_url: "https://static.pxl.ai/problem/images/CD-054.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 384,
    region_id: 4727,
    image_url: "https://static.pxl.ai/problem/images/SE-074.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 385,
    region_id: 1711,
    image_url: "https://static.pxl.ai/problem/images/PT-013.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "denim",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 386,
    region_id: 4043,
    image_url: "https://static.pxl.ai/problem/images/BL-126.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 387,
    region_id: 2083,
    image_url: "https://static.pxl.ai/problem/images/SH-043.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 388,
    region_id: 3250,
    image_url: "https://static.pxl.ai/problem/images/SK-180.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 389,
    region_id: 2417,
    image_url: "https://static.pxl.ai/problem/images/CT-298.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 390,
    region_id: 4890,
    image_url: "https://static.pxl.ai/problem/images/SW-140.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 391,
    region_id: 2309,
    image_url: "https://static.pxl.ai/problem/images/JK-283.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 392,
    region_id: 3526,
    image_url: "https://static.pxl.ai/problem/images/JK-297.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 393,
    region_id: 3080,
    image_url: "https://static.pxl.ai/problem/images/CD-068.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 394,
    region_id: 2243,
    image_url: "https://static.pxl.ai/problem/images/SE-048.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 395,
    region_id: 1827,
    image_url: "https://static.pxl.ai/problem/images/SW-154.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 396,
    region_id: 1402,
    image_url: "https://static.pxl.ai/problem/images/JP-015.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 397,
    region_id: 2316,
    image_url: "https://static.pxl.ai/problem/images/SH-094.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 398,
    region_id: 4774,
    image_url: "https://static.pxl.ai/problem/images/SK-157.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 399,
    region_id: 1380,
    image_url: "https://static.pxl.ai/problem/images/CD-083.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "denim",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 400,
    region_id: 4319,
    image_url: "https://static.pxl.ai/problem/images/JK-268.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 401,
    region_id: 4566,
    image_url: "https://static.pxl.ai/problem/images/CD-097.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 402,
    region_id: 2889,
    image_url: "https://static.pxl.ai/problem/images/SH-080.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 403,
    region_id: 3706,
    image_url: "https://static.pxl.ai/problem/images/SK-143.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 404,
    region_id: 1207,
    image_url: "https://static.pxl.ai/problem/images/JP-001.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 405,
    region_id: 2778,
    image_url: "https://static.pxl.ai/problem/images/CT-273.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 406,
    region_id: 3368,
    image_url: "https://static.pxl.ai/problem/images/JP-029.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 407,
    region_id: 4633,
    image_url: "https://static.pxl.ai/problem/images/JK-240.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 408,
    region_id: 2850,
    image_url: "https://static.pxl.ai/problem/images/JK-254.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 409,
    region_id: 2142,
    image_url: "https://static.pxl.ai/problem/images/CT-267.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 410,
    region_id: 2468,
    image_url: "https://static.pxl.ai/problem/images/SW-008.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 411,
    region_id: 2944,
    image_url: "https://static.pxl.ai/problem/images/SH-123.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 412,
    region_id: 2912,
    image_url: "https://static.pxl.ai/problem/images/BL-046.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 413,
    region_id: 3362,
    image_url: "https://static.pxl.ai/problem/images/CD-134.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 414,
    region_id: 4924,
    image_url: "https://static.pxl.ai/problem/images/SE-114.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 415,
    region_id: 2841,
    image_url: "https://static.pxl.ai/problem/images/PT-173.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 416,
    region_id: 2590,
    image_url: "https://static.pxl.ai/problem/images/SE-100.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 417,
    region_id: 4521,
    image_url: "https://static.pxl.ai/problem/images/CD-120.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 418,
    region_id: 4567,
    image_url: "https://static.pxl.ai/problem/images/PT-167.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 419,
    region_id: 2525,
    image_url: "https://static.pxl.ai/problem/images/BL-052.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 420,
    region_id: 1823,
    image_url: "https://static.pxl.ai/problem/images/SW-034.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 421,
    region_id: 4184,
    image_url: "https://static.pxl.ai/problem/images/CD-108.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 422,
    region_id: 4706,
    image_url: "https://static.pxl.ai/problem/images/SE-128.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 423,
    region_id: 3007,
    image_url: "https://static.pxl.ai/problem/images/SW-020.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 424,
    region_id: 3553,
    image_url: "https://static.pxl.ai/problem/images/BL-085.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 425,
    region_id: 1361,
    image_url: "https://static.pxl.ai/problem/images/JP-161.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 426,
    region_id: 1300,
    image_url: "https://static.pxl.ai/problem/images/SK-023.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 427,
    region_id: 2359,
    image_url: "https://static.pxl.ai/problem/images/JK-308.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 428,
    region_id: 3085,
    image_url: "https://static.pxl.ai/problem/images/SK-037.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 429,
    region_id: 2980,
    image_url: "https://static.pxl.ai/problem/images/BL-091.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 430,
    region_id: 2125,
    image_url: "https://static.pxl.ai/problem/images/JP-175.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 431,
    region_id: 3758,
    image_url: "https://static.pxl.ai/problem/images/CT-307.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "denim",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 432,
    region_id: 1891,
    image_url: "https://static.pxl.ai/problem/images/PT-198.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 433,
    region_id: 3264,
    image_url: "https://static.pxl.ai/problem/images/JP-149.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 434,
    region_id: 3248,
    image_url: "https://static.pxl.ai/problem/images/OP-143.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 435,
    region_id: 4062,
    image_url: "https://static.pxl.ai/problem/images/OP-157.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 436,
    region_id: 2712,
    image_url: "https://static.pxl.ai/problem/images/KN-098.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 437,
    region_id: 4693,
    image_url: "https://static.pxl.ai/problem/images/VT-102.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 438,
    region_id: 4745,
    image_url: "https://static.pxl.ai/problem/images/CT-139.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 439,
    region_id: 2133,
    image_url: "https://static.pxl.ai/problem/images/SK-221.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 440,
    region_id: 2501,
    image_url: "https://static.pxl.ai/problem/images/KN-073.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 441,
    region_id: 2383,
    image_url: "https://static.pxl.ai/problem/images/JK-136.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 442,
    region_id: 2707,
    image_url: "https://static.pxl.ai/problem/images/CT-105.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 443,
    region_id: 2621,
    image_url: "https://static.pxl.ai/problem/images/CT-111.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 444,
    region_id: 2010,
    image_url: "https://static.pxl.ai/problem/images/SK-209.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "denim",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 445,
    region_id: 3025,
    image_url: "https://static.pxl.ai/problem/images/JK-122.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 446,
    region_id: 2604,
    image_url: "https://static.pxl.ai/problem/images/KN-067.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 447,
    region_id: 3677,
    image_url: "https://static.pxl.ai/problem/images/SK-208.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 448,
    region_id: 3720,
    image_url: "https://static.pxl.ai/problem/images/CT-110.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 449,
    region_id: 4417,
    image_url: "https://static.pxl.ai/problem/images/KN-066.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 450,
    region_id: 4964,
    image_url: "https://static.pxl.ai/problem/images/JK-123.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 451,
    region_id: 3657,
    image_url: "https://static.pxl.ai/problem/images/JK-137.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "none",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 452,
    region_id: 4819,
    image_url: "https://static.pxl.ai/problem/images/KN-072.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 453,
    region_id: 3578,
    image_url: "https://static.pxl.ai/problem/images/CT-104.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "denim",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 454,
    region_id: 3277,
    image_url: "https://static.pxl.ai/problem/images/SK-220.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 455,
    region_id: 3028,
    image_url: "https://static.pxl.ai/problem/images/CT-138.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 456,
    region_id: 3506,
    image_url: "https://static.pxl.ai/problem/images/VT-103.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 457,
    region_id: 1529,
    image_url: "https://static.pxl.ai/problem/images/KN-099.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 458,
    region_id: 1210,
    image_url: "https://static.pxl.ai/problem/images/OP-156.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 459,
    region_id: 1449,
    image_url: "https://static.pxl.ai/problem/images/OP-142.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 460,
    region_id: 4222,
    image_url: "https://static.pxl.ai/problem/images/PT-199.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 461,
    region_id: 3515,
    image_url: "https://static.pxl.ai/problem/images/JP-148.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 462,
    region_id: 1078,
    image_url: "https://static.pxl.ai/problem/images/CT-306.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 463,
    region_id: 3407,
    image_url: "https://static.pxl.ai/problem/images/JP-174.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 464,
    region_id: 1295,
    image_url: "https://static.pxl.ai/problem/images/BL-090.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 465,
    region_id: 4100,
    image_url: "https://static.pxl.ai/problem/images/SK-036.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 466,
    region_id: 4975,
    image_url: "https://static.pxl.ai/problem/images/SK-022.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 467,
    region_id: 4652,
    image_url: "https://static.pxl.ai/problem/images/JP-160.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 468,
    region_id: 1553,
    image_url: "https://static.pxl.ai/problem/images/BL-084.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 469,
    region_id: 4375,
    image_url: "https://static.pxl.ai/problem/images/JK-309.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 470,
    region_id: 3376,
    image_url: "https://static.pxl.ai/problem/images/SW-021.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 471,
    region_id: 4419,
    image_url: "https://static.pxl.ai/problem/images/SW-035.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 472,
    region_id: 2184,
    image_url: "https://static.pxl.ai/problem/images/CD-109.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 473,
    region_id: 3870,
    image_url: "https://static.pxl.ai/problem/images/SE-129.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 474,
    region_id: 2111,
    image_url: "https://static.pxl.ai/problem/images/PT-166.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 475,
    region_id: 3512,
    image_url: "https://static.pxl.ai/problem/images/SE-101.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 476,
    region_id: 3657,
    image_url: "https://static.pxl.ai/problem/images/CD-121.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 477,
    region_id: 2351,
    image_url: "https://static.pxl.ai/problem/images/BL-053.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 478,
    region_id: 4580,
    image_url: "https://static.pxl.ai/problem/images/BL-047.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 479,
    region_id: 3654,
    image_url: "https://static.pxl.ai/problem/images/SH-122.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 480,
    region_id: 1200,
    image_url: "https://static.pxl.ai/problem/images/SW-009.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "leather",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 481,
    region_id: 1292,
    image_url: "https://static.pxl.ai/problem/images/PT-172.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 482,
    region_id: 2813,
    image_url: "https://static.pxl.ai/problem/images/CD-135.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 483,
    region_id: 1761,
    image_url: "https://static.pxl.ai/problem/images/SE-115.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 484,
    region_id: 3843,
    image_url: "https://static.pxl.ai/problem/images/JK-255.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 485,
    region_id: 3798,
    image_url: "https://static.pxl.ai/problem/images/CT-266.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 486,
    region_id: 1137,
    image_url: "https://static.pxl.ai/problem/images/JP-028.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 487,
    region_id: 3141,
    image_url: "https://static.pxl.ai/problem/images/CT-272.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 488,
    region_id: 1836,
    image_url: "https://static.pxl.ai/problem/images/JK-241.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 489,
    region_id: 4203,
    image_url: "https://static.pxl.ai/problem/images/CD-096.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 490,
    region_id: 3437,
    image_url: "https://static.pxl.ai/problem/images/JK-269.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 491,
    region_id: 2444,
    image_url: "https://static.pxl.ai/problem/images/SK-142.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 492,
    region_id: 1586,
    image_url: "https://static.pxl.ai/problem/images/SH-081.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 493,
    region_id: 2057,
    image_url: "https://static.pxl.ai/problem/images/SK-156.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 494,
    region_id: 2766,
    image_url: "https://static.pxl.ai/problem/images/SH-095.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 495,
    region_id: 3798,
    image_url: "https://static.pxl.ai/problem/images/JP-014.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 496,
    region_id: 1538,
    image_url: "https://static.pxl.ai/problem/images/CD-082.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 497,
    region_id: 4624,
    image_url: "https://static.pxl.ai/problem/images/CD-069.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "fur",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 498,
    region_id: 3010,
    image_url: "https://static.pxl.ai/problem/images/SE-049.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 499,
    region_id: 1232,
    image_url: "https://static.pxl.ai/problem/images/JK-296.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 500,
    region_id: 3004,
    image_url: "https://static.pxl.ai/problem/images/SW-155.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 501,
    region_id: 3117,
    image_url: "https://static.pxl.ai/problem/images/SW-141.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 502,
    region_id: 4263,
    image_url: "https://static.pxl.ai/problem/images/JK-282.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 503,
    region_id: 4971,
    image_url: "https://static.pxl.ai/problem/images/PT-012.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 504,
    region_id: 2315,
    image_url: "https://static.pxl.ai/problem/images/CD-055.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 505,
    region_id: 4749,
    image_url: "https://static.pxl.ai/problem/images/SE-075.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 506,
    region_id: 1629,
    image_url: "https://static.pxl.ai/problem/images/CT-299.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 507,
    region_id: 3034,
    image_url: "https://static.pxl.ai/problem/images/SK-181.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 508,
    region_id: 3934,
    image_url: "https://static.pxl.ai/problem/images/SH-042.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 509,
    region_id: 4923,
    image_url: "https://static.pxl.ai/problem/images/BL-127.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 510,
    region_id: 1047,
    image_url: "https://static.pxl.ai/problem/images/BL-133.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 511,
    region_id: 1317,
    image_url: "https://static.pxl.ai/problem/images/SK-195.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 512,
    region_id: 2391,
    image_url: "https://static.pxl.ai/problem/images/SH-056.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 513,
    region_id: 2942,
    image_url: "https://static.pxl.ai/problem/images/PT-006.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 514,
    region_id: 1788,
    image_url: "https://static.pxl.ai/problem/images/SE-061.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 515,
    region_id: 3191,
    image_url: "https://static.pxl.ai/problem/images/CD-041.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 516,
    region_id: 1225,
    image_url: "https://static.pxl.ai/problem/images/CT-064.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 517,
    region_id: 2174,
    image_url: "https://static.pxl.ai/problem/images/KN-112.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 518,
    region_id: 3207,
    image_url: "https://static.pxl.ai/problem/images/JK-057.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 519,
    region_id: 1542,
    image_url: "https://static.pxl.ai/problem/images/JK-043.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 520,
    region_id: 4482,
    image_url: "https://static.pxl.ai/problem/images/KN-106.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 521,
    region_id: 3573,
    image_url: "https://static.pxl.ai/problem/images/CT-070.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 522,
    region_id: 4690,
    image_url: "https://static.pxl.ai/problem/images/CT-058.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 523,
    region_id: 2898,
    image_url: "https://static.pxl.ai/problem/images/JP-202.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 524,
    region_id: 2010,
    image_url: "https://static.pxl.ai/problem/images/VT-088.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 525,
    region_id: 3604,
    image_url: "https://static.pxl.ai/problem/images/JP-216.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 526,
    region_id: 3170,
    image_url: "https://static.pxl.ai/problem/images/JK-094.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 527,
    region_id: 2121,
    image_url: "https://static.pxl.ai/problem/images/VT-077.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 528,
    region_id: 1486,
    image_url: "https://static.pxl.ai/problem/images/VT-063.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 529,
    region_id: 4627,
    image_url: "https://static.pxl.ai/problem/images/JK-080.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 530,
    region_id: 1572,
    image_url: "https://static.pxl.ai/problem/images/OP-022.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 531,
    region_id: 2773,
    image_url: "https://static.pxl.ai/problem/images/PT-210.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 532,
    region_id: 2631,
    image_url: "https://static.pxl.ai/problem/images/OP-036.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 533,
    region_id: 3096,
    image_url: "https://static.pxl.ai/problem/images/PT-204.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 534,
    region_id: 3225,
    image_url: "https://static.pxl.ai/problem/images/PT-212.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 535,
    region_id: 4483,
    image_url: "https://static.pxl.ai/problem/images/OP-020.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 536,
    region_id: 2501,
    image_url: "https://static.pxl.ai/problem/images/VT-049.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 537,
    region_id: 4049,
    image_url: "https://static.pxl.ai/problem/images/CT-099.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 538,
    region_id: 3521,
    image_url: "https://static.pxl.ai/problem/images/PT-206.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 539,
    region_id: 2540,
    image_url: "https://static.pxl.ai/problem/images/OP-034.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 540,
    region_id: 2384,
    image_url: "https://static.pxl.ai/problem/images/VT-075.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 541,
    region_id: 2959,
    image_url: "https://static.pxl.ai/problem/images/JK-096.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 542,
    region_id: 3300,
    image_url: "https://static.pxl.ai/problem/images/OP-008.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 543,
    region_id: 1108,
    image_url: "https://static.pxl.ai/problem/images/JK-082.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 544,
    region_id: 4574,
    image_url: "https://static.pxl.ai/problem/images/VT-061.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 545,
    region_id: 4340,
    image_url: "https://static.pxl.ai/problem/images/JK-069.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 546,
    region_id: 4273,
    image_url: "https://static.pxl.ai/problem/images/JP-200.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 547,
    region_id: 2342,
    image_url: "https://static.pxl.ai/problem/images/JP-214.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 548,
    region_id: 2771,
    image_url: "https://static.pxl.ai/problem/images/KN-138.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 549,
    region_id: 4300,
    image_url: "https://static.pxl.ai/problem/images/JK-055.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 550,
    region_id: 4152,
    image_url: "https://static.pxl.ai/problem/images/KN-110.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 551,
    region_id: 3009,
    image_url: "https://static.pxl.ai/problem/images/CT-066.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 552,
    region_id: 3269,
    image_url: "https://static.pxl.ai/problem/images/JP-228.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 553,
    region_id: 3238,
    image_url: "https://static.pxl.ai/problem/images/CT-072.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 554,
    region_id: 2239,
    image_url: "https://static.pxl.ai/problem/images/KN-104.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 555,
    region_id: 2022,
    image_url: "https://static.pxl.ai/problem/images/JK-041.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 556,
    region_id: 3093,
    image_url: "https://static.pxl.ai/problem/images/BL-125.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 557,
    region_id: 4491,
    image_url: "https://static.pxl.ai/problem/images/SH-040.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 558,
    region_id: 2821,
    image_url: "https://static.pxl.ai/problem/images/SK-183.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 559,
    region_id: 2770,
    image_url: "https://static.pxl.ai/problem/images/PT-010.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 560,
    region_id: 3375,
    image_url: "https://static.pxl.ai/problem/images/SE-077.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 561,
    region_id: 2812,
    image_url: "https://static.pxl.ai/problem/images/CD-057.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 562,
    region_id: 3022,
    image_url: "https://static.pxl.ai/problem/images/PT-004.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 563,
    region_id: 2079,
    image_url: "https://static.pxl.ai/problem/images/CD-043.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 564,
    region_id: 1694,
    image_url: "https://static.pxl.ai/problem/images/SE-063.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 565,
    region_id: 3816,
    image_url: "https://static.pxl.ai/problem/images/SH-054.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 566,
    region_id: 2542,
    image_url: "https://static.pxl.ai/problem/images/SK-197.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 567,
    region_id: 2642,
    image_url: "https://static.pxl.ai/problem/images/BL-131.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 568,
    region_id: 2028,
    image_url: "https://static.pxl.ai/problem/images/SW-157.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 569,
    region_id: 4472,
    image_url: "https://static.pxl.ai/problem/images/BL-119.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 570,
    region_id: 1329,
    image_url: "https://static.pxl.ai/problem/images/JK-294.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 571,
    region_id: 1008,
    image_url: "https://static.pxl.ai/problem/images/JK-280.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 572,
    region_id: 2392,
    image_url: "https://static.pxl.ai/problem/images/PT-038.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 573,
    region_id: 2157,
    image_url: "https://static.pxl.ai/problem/images/SH-068.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "leather",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 574,
    region_id: 4698,
    image_url: "https://static.pxl.ai/problem/images/SW-143.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 575,
    region_id: 4414,
    image_url: "https://static.pxl.ai/problem/images/CT-258.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 576,
    region_id: 4723,
    image_url: "https://static.pxl.ai/problem/images/SH-083.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 577,
    region_id: 2968,
    image_url: "https://static.pxl.ai/problem/images/SK-140.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 578,
    region_id: 4343,
    image_url: "https://static.pxl.ai/problem/images/JP-002.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 579,
    region_id: 3970,
    image_url: "https://static.pxl.ai/problem/images/CD-094.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 580,
    region_id: 2265,
    image_url: "https://static.pxl.ai/problem/images/CD-080.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 581,
    region_id: 3210,
    image_url: "https://static.pxl.ai/problem/images/JP-016.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 582,
    region_id: 3287,
    image_url: "https://static.pxl.ai/problem/images/SH-097.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 583,
    region_id: 3741,
    image_url: "https://static.pxl.ai/problem/images/SK-154.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 584,
    region_id: 1894,
    image_url: "https://static.pxl.ai/problem/images/CT-264.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 585,
    region_id: 1626,
    image_url: "https://static.pxl.ai/problem/images/JK-257.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 586,
    region_id: 4360,
    image_url: "https://static.pxl.ai/problem/images/SE-088.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 587,
    region_id: 1809,
    image_url: "https://static.pxl.ai/problem/images/JK-243.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 588,
    region_id: 2325,
    image_url: "https://static.pxl.ai/problem/images/CT-270.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 589,
    region_id: 1338,
    image_url: "https://static.pxl.ai/problem/images/SK-168.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 590,
    region_id: 1213,
    image_url: "https://static.pxl.ai/problem/images/BL-051.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 591,
    region_id: 2234,
    image_url: "https://static.pxl.ai/problem/images/PT-164.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 592,
    region_id: 4522,
    image_url: "https://static.pxl.ai/problem/images/CD-123.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 593,
    region_id: 1036,
    image_url: "https://static.pxl.ai/problem/images/SE-103.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 594,
    region_id: 4197,
    image_url: "https://static.pxl.ai/problem/images/PT-170.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 595,
    region_id: 3628,
    image_url: "https://static.pxl.ai/problem/images/SE-117.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 596,
    region_id: 1403,
    image_url: "https://static.pxl.ai/problem/images/CD-137.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 597,
    region_id: 3134,
    image_url: "https://static.pxl.ai/problem/images/SH-120.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 598,
    region_id: 2841,
    image_url: "https://static.pxl.ai/problem/images/BL-045.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 599,
    region_id: 4043,
    image_url: "https://static.pxl.ai/problem/images/SW-023.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 600,
    region_id: 1223,
    image_url: "https://static.pxl.ai/problem/images/SH-108.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 601,
    region_id: 3266,
    image_url: "https://static.pxl.ai/problem/images/JP-189.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "denim",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 602,
    region_id: 3817,
    image_url: "https://static.pxl.ai/problem/images/PT-158.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 603,
    region_id: 1747,
    image_url: "https://static.pxl.ai/problem/images/BL-079.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 604,
    region_id: 3533,
    image_url: "https://static.pxl.ai/problem/images/SW-037.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 605,
    region_id: 1012,
    image_url: "https://static.pxl.ai/problem/images/SK-034.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 606,
    region_id: 1584,
    image_url: "https://static.pxl.ai/problem/images/BL-092.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 607,
    region_id: 3372,
    image_url: "https://static.pxl.ai/problem/images/JP-176.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 608,
    region_id: 3960,
    image_url: "https://static.pxl.ai/problem/images/BL-086.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 609,
    region_id: 4740,
    image_url: "https://static.pxl.ai/problem/images/JP-162.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 610,
    region_id: 4691,
    image_url: "https://static.pxl.ai/problem/images/SK-020.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 611,
    region_id: 1768,
    image_url: "https://static.pxl.ai/problem/images/SK-008.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 612,
    region_id: 2335,
    image_url: "https://static.pxl.ai/problem/images/CT-310.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 613,
    region_id: 1744,
    image_url: "https://static.pxl.ai/problem/images/CT-304.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 614,
    region_id: 2137,
    image_url: "https://static.pxl.ai/problem/images/OP-154.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 615,
    region_id: 1848,
    image_url: "https://static.pxl.ai/problem/images/OP-140.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 616,
    region_id: 1097,
    image_url: "https://static.pxl.ai/problem/images/VT-101.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 617,
    region_id: 3771,
    image_url: "https://static.pxl.ai/problem/images/OP-168.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 618,
    region_id: 2345,
    image_url: "https://static.pxl.ai/problem/images/KN-058.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 619,
    region_id: 2871,
    image_url: "https://static.pxl.ai/problem/images/SK-222.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 620,
    region_id: 1940,
    image_url: "https://static.pxl.ai/problem/images/JK-109.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 621,
    region_id: 4917,
    image_url: "https://static.pxl.ai/problem/images/JK-121.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 622,
    region_id: 1203,
    image_url: "https://static.pxl.ai/problem/images/KN-064.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 623,
    region_id: 2442,
    image_url: "https://static.pxl.ai/problem/images/CT-112.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 624,
    region_id: 2782,
    image_url: "https://static.pxl.ai/problem/images/CT-106.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 625,
    region_id: 1543,
    image_url: "https://static.pxl.ai/problem/images/KN-070.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 626,
    region_id: 4495,
    image_url: "https://static.pxl.ai/problem/images/JK-135.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 627,
    region_id: 2117,
    image_url: "https://static.pxl.ai/problem/images/CT-107.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "formal",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 628,
    region_id: 4505,
    image_url: "https://static.pxl.ai/problem/images/JK-134.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 629,
    region_id: 4435,
    image_url: "https://static.pxl.ai/problem/images/KN-071.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 630,
    region_id: 2664,
    image_url: "https://static.pxl.ai/problem/images/KN-065.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 631,
    region_id: 4592,
    image_url: "https://static.pxl.ai/problem/images/JK-120.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 632,
    region_id: 3678,
    image_url: "https://static.pxl.ai/problem/images/CT-113.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 633,
    region_id: 3796,
    image_url: "https://static.pxl.ai/problem/images/SK-223.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 634,
    region_id: 2789,
    image_url: "https://static.pxl.ai/problem/images/JK-108.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 635,
    region_id: 4423,
    image_url: "https://static.pxl.ai/problem/images/KN-059.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 636,
    region_id: 3344,
    image_url: "https://static.pxl.ai/problem/images/OP-169.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 637,
    region_id: 1986,
    image_url: "https://static.pxl.ai/problem/images/VT-100.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 638,
    region_id: 3751,
    image_url: "https://static.pxl.ai/problem/images/OP-141.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 639,
    region_id: 4050,
    image_url: "https://static.pxl.ai/problem/images/OP-155.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 640,
    region_id: 1506,
    image_url: "https://static.pxl.ai/problem/images/CT-305.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 641,
    region_id: 2520,
    image_url: "https://static.pxl.ai/problem/images/SK-009.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 642,
    region_id: 3841,
    image_url: "https://static.pxl.ai/problem/images/SK-021.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 643,
    region_id: 2166,
    image_url: "https://static.pxl.ai/problem/images/JP-163.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 644,
    region_id: 1503,
    image_url: "https://static.pxl.ai/problem/images/BL-087.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 645,
    region_id: 4710,
    image_url: "https://static.pxl.ai/problem/images/JP-177.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 646,
    region_id: 3289,
    image_url: "https://static.pxl.ai/problem/images/BL-093.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 647,
    region_id: 2309,
    image_url: "https://static.pxl.ai/problem/images/SK-035.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 648,
    region_id: 3410,
    image_url: "https://static.pxl.ai/problem/images/SW-036.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 649,
    region_id: 3692,
    image_url: "https://static.pxl.ai/problem/images/BL-078.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 650,
    region_id: 4083,
    image_url: "https://static.pxl.ai/problem/images/JP-188.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 651,
    region_id: 2314,
    image_url: "https://static.pxl.ai/problem/images/SH-109.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 652,
    region_id: 1110,
    image_url: "https://static.pxl.ai/problem/images/SW-022.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 653,
    region_id: 1269,
    image_url: "https://static.pxl.ai/problem/images/PT-159.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 654,
    region_id: 4561,
    image_url: "https://static.pxl.ai/problem/images/SE-116.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 655,
    region_id: 1412,
    image_url: "https://static.pxl.ai/problem/images/CD-136.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 656,
    region_id: 4755,
    image_url: "https://static.pxl.ai/problem/images/PT-171.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 657,
    region_id: 2737,
    image_url: "https://static.pxl.ai/problem/images/BL-044.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 658,
    region_id: 3294,
    image_url: "https://static.pxl.ai/problem/images/SH-121.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 659,
    region_id: 4058,
    image_url: "https://static.pxl.ai/problem/images/BL-050.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 660,
    region_id: 4791,
    image_url: "https://static.pxl.ai/problem/images/CD-122.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 661,
    region_id: 2289,
    image_url: "https://static.pxl.ai/problem/images/SE-102.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 662,
    region_id: 4113,
    image_url: "https://static.pxl.ai/problem/images/PT-165.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 663,
    region_id: 3234,
    image_url: "https://static.pxl.ai/problem/images/JK-242.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 664,
    region_id: 3745,
    image_url: "https://static.pxl.ai/problem/images/SK-169.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 665,
    region_id: 1001,
    image_url: "https://static.pxl.ai/problem/images/CT-271.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 666,
    region_id: 1588,
    image_url: "https://static.pxl.ai/problem/images/CT-265.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 667,
    region_id: 4226,
    image_url: "https://static.pxl.ai/problem/images/SE-089.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 668,
    region_id: 1892,
    image_url: "https://static.pxl.ai/problem/images/JK-256.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 669,
    region_id: 1489,
    image_url: "https://static.pxl.ai/problem/images/CD-081.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 670,
    region_id: 2031,
    image_url: "https://static.pxl.ai/problem/images/SK-155.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 671,
    region_id: 3348,
    image_url: "https://static.pxl.ai/problem/images/SH-096.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 672,
    region_id: 2031,
    image_url: "https://static.pxl.ai/problem/images/JP-017.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 673,
    region_id: 1872,
    image_url: "https://static.pxl.ai/problem/images/JP-003.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 674,
    region_id: 1277,
    image_url: "https://static.pxl.ai/problem/images/SK-141.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 675,
    region_id: 4627,
    image_url: "https://static.pxl.ai/problem/images/SH-082.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 676,
    region_id: 2817,
    image_url: "https://static.pxl.ai/problem/images/CT-259.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 677,
    region_id: 4874,
    image_url: "https://static.pxl.ai/problem/images/CD-095.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 678,
    region_id: 2722,
    image_url: "https://static.pxl.ai/problem/images/PT-039.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "leather",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 679,
    region_id: 1647,
    image_url: "https://static.pxl.ai/problem/images/JK-281.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 680,
    region_id: 4677,
    image_url: "https://static.pxl.ai/problem/images/SW-142.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 681,
    region_id: 2324,
    image_url: "https://static.pxl.ai/problem/images/SH-069.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 682,
    region_id: 2129,
    image_url: "https://static.pxl.ai/problem/images/BL-118.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 683,
    region_id: 2186,
    image_url: "https://static.pxl.ai/problem/images/SW-156.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 684,
    region_id: 1156,
    image_url: "https://static.pxl.ai/problem/images/JK-295.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 685,
    region_id: 2776,
    image_url: "https://static.pxl.ai/problem/images/CD-042.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 686,
    region_id: 1943,
    image_url: "https://static.pxl.ai/problem/images/SE-062.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 687,
    region_id: 3441,
    image_url: "https://static.pxl.ai/problem/images/PT-005.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 688,
    region_id: 4091,
    image_url: "https://static.pxl.ai/problem/images/BL-130.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 689,
    region_id: 4779,
    image_url: "https://static.pxl.ai/problem/images/SK-196.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 690,
    region_id: 1486,
    image_url: "https://static.pxl.ai/problem/images/SH-055.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 691,
    region_id: 4769,
    image_url: "https://static.pxl.ai/problem/images/SK-182.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 692,
    region_id: 2568,
    image_url: "https://static.pxl.ai/problem/images/SH-041.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 693,
    region_id: 3360,
    image_url: "https://static.pxl.ai/problem/images/BL-124.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 694,
    region_id: 1414,
    image_url: "https://static.pxl.ai/problem/images/SE-076.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 695,
    region_id: 4886,
    image_url: "https://static.pxl.ai/problem/images/CD-056.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 696,
    region_id: 3545,
    image_url: "https://static.pxl.ai/problem/images/PT-011.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 697,
    region_id: 4798,
    image_url: "https://static.pxl.ai/problem/images/CT-073.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 698,
    region_id: 1265,
    image_url: "https://static.pxl.ai/problem/images/JP-229.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "leather",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 699,
    region_id: 3151,
    image_url: "https://static.pxl.ai/problem/images/JK-040.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 700,
    region_id: 1311,
    image_url: "https://static.pxl.ai/problem/images/KN-105.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 701,
    region_id: 2576,
    image_url: "https://static.pxl.ai/problem/images/KN-111.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 702,
    region_id: 2814,
    image_url: "https://static.pxl.ai/problem/images/JK-054.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 703,
    region_id: 1570,
    image_url: "https://static.pxl.ai/problem/images/CT-067.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 704,
    region_id: 2038,
    image_url: "https://static.pxl.ai/problem/images/JP-215.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 705,
    region_id: 4824,
    image_url: "https://static.pxl.ai/problem/images/KN-139.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 706,
    region_id: 3978,
    image_url: "https://static.pxl.ai/problem/images/JK-068.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 707,
    region_id: 4448,
    image_url: "https://static.pxl.ai/problem/images/JP-201.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 708,
    region_id: 4458,
    image_url: "https://static.pxl.ai/problem/images/VT-060.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 709,
    region_id: 1478,
    image_url: "https://static.pxl.ai/problem/images/JK-083.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 710,
    region_id: 2155,
    image_url: "https://static.pxl.ai/problem/images/OP-009.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 711,
    region_id: 3030,
    image_url: "https://static.pxl.ai/problem/images/JK-097.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 712,
    region_id: 2198,
    image_url: "https://static.pxl.ai/problem/images/VT-074.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 713,
    region_id: 1973,
    image_url: "https://static.pxl.ai/problem/images/OP-035.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 714,
    region_id: 4999,
    image_url: "https://static.pxl.ai/problem/images/PT-207.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 715,
    region_id: 2808,
    image_url: "https://static.pxl.ai/problem/images/VT-048.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 716,
    region_id: 3449,
    image_url: "https://static.pxl.ai/problem/images/OP-021.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 717,
    region_id: 3117,
    image_url: "https://static.pxl.ai/problem/images/PT-213.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "linen",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 718,
    region_id: 4881,
    image_url: "https://static.pxl.ai/problem/images/CT-098.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 719,
    region_id: 2371,
    image_url: "https://static.pxl.ai/problem/images/VT-013.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 720,
    region_id: 2145,
    image_url: "https://static.pxl.ai/problem/images/VT-007.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 721,
    region_id: 3450,
    image_url: "https://static.pxl.ai/problem/images/KN-189.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 722,
    region_id: 3533,
    image_url: "https://static.pxl.ai/problem/images/OP-046.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 723,
    region_id: 2020,
    image_url: "https://static.pxl.ai/problem/images/OP-052.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 724,
    region_id: 1910,
    image_url: "https://static.pxl.ai/problem/images/KN-176.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 725,
    region_id: 1759,
    image_url: "https://static.pxl.ai/problem/images/JK-033.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 726,
    region_id: 3781,
    image_url: "https://static.pxl.ai/problem/images/CT-014.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 727,
    region_id: 1548,
    image_url: "https://static.pxl.ai/problem/images/JK-027.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 728,
    region_id: 1042,
    image_url: "https://static.pxl.ai/problem/images/KN-162.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 729,
    region_id: 2602,
    image_url: "https://static.pxl.ai/problem/images/OP-085.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 730,
    region_id: 4810,
    image_url: "https://static.pxl.ai/problem/images/JP-266.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 731,
    region_id: 2373,
    image_url: "https://static.pxl.ai/problem/images/JP-272.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 732,
    region_id: 3278,
    image_url: "https://static.pxl.ai/problem/images/CT-028.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 733,
    region_id: 2908,
    image_url: "https://static.pxl.ai/problem/images/OP-091.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 734,
    region_id: 2593,
    image_url: "https://static.pxl.ai/problem/images/SW-131.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 735,
    region_id: 1467,
    image_url: "https://static.pxl.ai/problem/images/CD-019.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 736,
    region_id: 1589,
    image_url: "https://static.pxl.ai/problem/images/SE-039.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 737,
    region_id: 3360,
    image_url: "https://static.pxl.ai/problem/images/SW-125.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 738,
    region_id: 3403,
    image_url: "https://static.pxl.ai/problem/images/SH-026.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 739,
    region_id: 4741,
    image_url: "https://static.pxl.ai/problem/images/BL-143.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 740,
    region_id: 3294,
    image_url: "https://static.pxl.ai/problem/images/SE-011.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 741,
    region_id: 2424,
    image_url: "https://static.pxl.ai/problem/images/CD-031.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 742,
    region_id: 4328,
    image_url: "https://static.pxl.ai/problem/images/PT-076.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 743,
    region_id: 2682,
    image_url: "https://static.pxl.ai/problem/images/CD-025.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 744,
    region_id: 2335,
    image_url: "https://static.pxl.ai/problem/images/SE-005.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 745,
    region_id: 2190,
    image_url: "https://static.pxl.ai/problem/images/PT-062.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 746,
    region_id: 1556,
    image_url: "https://static.pxl.ai/problem/images/SH-032.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 747,
    region_id: 3988,
    image_url: "https://static.pxl.ai/problem/images/SW-119.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 748,
    region_id: 1677,
    image_url: "https://static.pxl.ai/problem/images/CT-202.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 749,
    region_id: 3746,
    image_url: "https://static.pxl.ai/problem/images/JP-058.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 750,
    region_id: 3428,
    image_url: "https://static.pxl.ai/problem/images/PT-089.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 751,
    region_id: 2395,
    image_url: "https://static.pxl.ai/problem/images/JK-231.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 752,
    region_id: 4531,
    image_url: "https://static.pxl.ai/problem/images/JK-225.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 753,
    region_id: 4468,
    image_url: "https://static.pxl.ai/problem/images/CT-216.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 754,
    region_id: 4625,
    image_url: "https://static.pxl.ai/problem/images/JP-064.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 755,
    region_id: 4364,
    image_url: "https://static.pxl.ai/problem/images/SK-126.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 756,
    region_id: 3562,
    image_url: "https://static.pxl.ai/problem/images/JK-219.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 757,
    region_id: 3846,
    image_url: "https://static.pxl.ai/problem/images/SK-132.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 758,
    region_id: 1977,
    image_url: "https://static.pxl.ai/problem/images/JP-070.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 759,
    region_id: 3267,
    image_url: "https://static.pxl.ai/problem/images/SW-045.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 760,
    region_id: 2683,
    image_url: "https://static.pxl.ai/problem/images/SW-051.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 761,
    region_id: 1582,
    image_url: "https://static.pxl.ai/problem/images/SW-079.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 762,
    region_id: 4052,
    image_url: "https://static.pxl.ai/problem/images/SK-091.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "linen",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 763,
    region_id: 3245,
    image_url: "https://static.pxl.ai/problem/images/BL-037.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "leather",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 764,
    region_id: 2494,
    image_url: "https://static.pxl.ai/problem/images/CD-145.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 765,
    region_id: 3154,
    image_url: "https://static.pxl.ai/problem/images/PT-102.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 766,
    region_id: 3027,
    image_url: "https://static.pxl.ai/problem/images/PT-116.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 767,
    region_id: 1199,
    image_url: "https://static.pxl.ai/problem/images/BL-023.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 768,
    region_id: 3539,
    image_url: "https://static.pxl.ai/problem/images/SK-085.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 769,
    region_id: 4642,
    image_url: "https://static.pxl.ai/problem/images/SW-086.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 770,
    region_id: 3339,
    image_url: "https://static.pxl.ai/problem/images/KN-200.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 771,
    region_id: 4462,
    image_url: "https://static.pxl.ai/problem/images/KN-214.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 772,
    region_id: 1986,
    image_url: "https://static.pxl.ai/problem/images/JP-138.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 773,
    region_id: 4461,
    image_url: "https://static.pxl.ai/problem/images/SW-092.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 774,
    region_id: 2286,
    image_url: "https://static.pxl.ai/problem/images/JP-110.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 775,
    region_id: 2087,
    image_url: "https://static.pxl.ai/problem/images/SK-052.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 776,
    region_id: 2179,
    image_url: "https://static.pxl.ai/problem/images/KN-228.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 777,
    region_id: 1186,
    image_url: "https://static.pxl.ai/problem/images/SK-046.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 778,
    region_id: 4913,
    image_url: "https://static.pxl.ai/problem/images/JP-104.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 779,
    region_id: 3707,
    image_url: "https://static.pxl.ai/problem/images/JK-184.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 780,
    region_id: 3563,
    image_url: "https://static.pxl.ai/problem/images/JK-190.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 781,
    region_id: 1436,
    image_url: "https://static.pxl.ai/problem/images/OP-132.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 782,
    region_id: 3102,
    image_url: "https://static.pxl.ai/problem/images/OP-126.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 783,
    region_id: 4321,
    image_url: "https://static.pxl.ai/problem/images/KN-002.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 784,
    region_id: 4625,
    image_url: "https://static.pxl.ai/problem/images/JK-147.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "denim",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 785,
    region_id: 4911,
    image_url: "https://static.pxl.ai/problem/images/CT-174.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 786,
    region_id: 3597,
    image_url: "https://static.pxl.ai/problem/images/CT-160.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 787,
    region_id: 4258,
    image_url: "https://static.pxl.ai/problem/images/JK-153.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 788,
    region_id: 4805,
    image_url: "https://static.pxl.ai/problem/images/KN-016.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 789,
    region_id: 1792,
    image_url: "https://static.pxl.ai/problem/images/CT-148.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 790,
    region_id: 3255,
    image_url: "https://static.pxl.ai/problem/images/CT-149.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 791,
    region_id: 4947,
    image_url: "https://static.pxl.ai/problem/images/CT-161.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 792,
    region_id: 1515,
    image_url: "https://static.pxl.ai/problem/images/KN-017.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 793,
    region_id: 4499,
    image_url: "https://static.pxl.ai/problem/images/JK-152.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 794,
    region_id: 2293,
    image_url: "https://static.pxl.ai/problem/images/JK-146.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 795,
    region_id: 1137,
    image_url: "https://static.pxl.ai/problem/images/KN-003.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 796,
    region_id: 4236,
    image_url: "https://static.pxl.ai/problem/images/CT-175.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 797,
    region_id: 3810,
    image_url: "https://static.pxl.ai/problem/images/OP-127.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 798,
    region_id: 4843,
    image_url: "https://static.pxl.ai/problem/images/OP-133.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 799,
    region_id: 2904,
    image_url: "https://static.pxl.ai/problem/images/JK-191.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 800,
    region_id: 2176,
    image_url: "https://static.pxl.ai/problem/images/JK-185.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 801,
    region_id: 4171,
    image_url: "https://static.pxl.ai/problem/images/KN-229.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 802,
    region_id: 2160,
    image_url: "https://static.pxl.ai/problem/images/JP-105.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 803,
    region_id: 4886,
    image_url: "https://static.pxl.ai/problem/images/SK-047.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 804,
    region_id: 1401,
    image_url: "https://static.pxl.ai/problem/images/SK-053.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 805,
    region_id: 3962,
    image_url: "https://static.pxl.ai/problem/images/JP-111.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 806,
    region_id: 3380,
    image_url: "https://static.pxl.ai/problem/images/KN-215.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 807,
    region_id: 2013,
    image_url: "https://static.pxl.ai/problem/images/SW-093.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 808,
    region_id: 1792,
    image_url: "https://static.pxl.ai/problem/images/JP-139.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 809,
    region_id: 4886,
    image_url: "https://static.pxl.ai/problem/images/SW-087.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 810,
    region_id: 1568,
    image_url: "https://static.pxl.ai/problem/images/KN-201.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 811,
    region_id: 3731,
    image_url: "https://static.pxl.ai/problem/images/PT-117.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 812,
    region_id: 2024,
    image_url: "https://static.pxl.ai/problem/images/CD-150.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 813,
    region_id: 3076,
    image_url: "https://static.pxl.ai/problem/images/SK-084.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 814,
    region_id: 1889,
    image_url: "https://static.pxl.ai/problem/images/BL-022.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 815,
    region_id: 4098,
    image_url: "https://static.pxl.ai/problem/images/BL-036.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 816,
    region_id: 1528,
    image_url: "https://static.pxl.ai/problem/images/SK-090.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 817,
    region_id: 4632,
    image_url: "https://static.pxl.ai/problem/images/SW-078.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "leather",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 818,
    region_id: 3226,
    image_url: "https://static.pxl.ai/problem/images/PT-103.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 819,
    region_id: 1123,
    image_url: "https://static.pxl.ai/problem/images/CD-144.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 820,
    region_id: 2288,
    image_url: "https://static.pxl.ai/problem/images/SW-050.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 821,
    region_id: 3589,
    image_url: "https://static.pxl.ai/problem/images/SW-044.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 822,
    region_id: 4320,
    image_url: "https://static.pxl.ai/problem/images/JK-218.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 823,
    region_id: 1685,
    image_url: "https://static.pxl.ai/problem/images/JP-071.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 824,
    region_id: 3668,
    image_url: "https://static.pxl.ai/problem/images/SK-133.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 825,
    region_id: 2551,
    image_url: "https://static.pxl.ai/problem/images/SK-127.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 826,
    region_id: 1955,
    image_url: "https://static.pxl.ai/problem/images/JP-065.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 827,
    region_id: 2881,
    image_url: "https://static.pxl.ai/problem/images/JK-224.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 828,
    region_id: 1113,
    image_url: "https://static.pxl.ai/problem/images/CT-217.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 829,
    region_id: 4418,
    image_url: "https://static.pxl.ai/problem/images/JP-059.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 830,
    region_id: 4929,
    image_url: "https://static.pxl.ai/problem/images/CT-203.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 831,
    region_id: 4087,
    image_url: "https://static.pxl.ai/problem/images/JK-230.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 832,
    region_id: 4827,
    image_url: "https://static.pxl.ai/problem/images/PT-088.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "leather",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 833,
    region_id: 3508,
    image_url: "https://static.pxl.ai/problem/images/PT-063.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 834,
    region_id: 4624,
    image_url: "https://static.pxl.ai/problem/images/CD-024.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 835,
    region_id: 2895,
    image_url: "https://static.pxl.ai/problem/images/SE-004.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 836,
    region_id: 1840,
    image_url: "https://static.pxl.ai/problem/images/SW-118.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 837,
    region_id: 3949,
    image_url: "https://static.pxl.ai/problem/images/SH-033.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "denim",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 838,
    region_id: 2398,
    image_url: "https://static.pxl.ai/problem/images/BL-142.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 839,
    region_id: 1699,
    image_url: "https://static.pxl.ai/problem/images/SH-027.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 840,
    region_id: 3283,
    image_url: "https://static.pxl.ai/problem/images/PT-077.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 841,
    region_id: 1784,
    image_url: "https://static.pxl.ai/problem/images/SE-010.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 842,
    region_id: 4789,
    image_url: "https://static.pxl.ai/problem/images/CD-030.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 843,
    region_id: 1226,
    image_url: "https://static.pxl.ai/problem/images/CD-018.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 844,
    region_id: 2546,
    image_url: "https://static.pxl.ai/problem/images/SE-038.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 845,
    region_id: 2444,
    image_url: "https://static.pxl.ai/problem/images/SW-124.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 846,
    region_id: 2691,
    image_url: "https://static.pxl.ai/problem/images/SW-130.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 847,
    region_id: 1800,
    image_url: "https://static.pxl.ai/problem/images/CT-029.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 848,
    region_id: 3512,
    image_url: "https://static.pxl.ai/problem/images/JP-273.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 849,
    region_id: 4189,
    image_url: "https://static.pxl.ai/problem/images/OP-090.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 850,
    region_id: 2315,
    image_url: "https://static.pxl.ai/problem/images/OP-084.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 851,
    region_id: 4728,
    image_url: "https://static.pxl.ai/problem/images/JP-267.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 852,
    region_id: 2613,
    image_url: "https://static.pxl.ai/problem/images/CT-015.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 853,
    region_id: 1647,
    image_url: "https://static.pxl.ai/problem/images/KN-163.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 854,
    region_id: 3631,
    image_url: "https://static.pxl.ai/problem/images/JK-026.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 855,
    region_id: 1174,
    image_url: "https://static.pxl.ai/problem/images/JK-032.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 856,
    region_id: 1389,
    image_url: "https://static.pxl.ai/problem/images/KN-177.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 857,
    region_id: 3709,
    image_url: "https://static.pxl.ai/problem/images/CT-001.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 858,
    region_id: 3885,
    image_url: "https://static.pxl.ai/problem/images/OP-053.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 859,
    region_id: 4776,
    image_url: "https://static.pxl.ai/problem/images/OP-047.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 860,
    region_id: 3760,
    image_url: "https://static.pxl.ai/problem/images/KN-188.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 861,
    region_id: 1675,
    image_url: "https://static.pxl.ai/problem/images/VT-006.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 862,
    region_id: 4128,
    image_url: "https://static.pxl.ai/problem/images/VT-012.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 863,
    region_id: 1621,
    image_url: "https://static.pxl.ai/problem/images/VT-004.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 864,
    region_id: 4139,
    image_url: "https://static.pxl.ai/problem/images/OP-079.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 865,
    region_id: 2938,
    image_url: "https://static.pxl.ai/problem/images/VT-010.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 866,
    region_id: 3905,
    image_url: "https://static.pxl.ai/problem/images/OP-051.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 867,
    region_id: 1284,
    image_url: "https://static.pxl.ai/problem/images/VT-038.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 868,
    region_id: 2696,
    image_url: "https://static.pxl.ai/problem/images/OP-045.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 869,
    region_id: 4699,
    image_url: "https://static.pxl.ai/problem/images/JK-024.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 870,
    region_id: 1577,
    image_url: "https://static.pxl.ai/problem/images/KN-161.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 871,
    region_id: 3761,
    image_url: "https://static.pxl.ai/problem/images/CT-017.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 872,
    region_id: 2895,
    image_url: "https://static.pxl.ai/problem/images/JP-259.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 873,
    region_id: 2605,
    image_url: "https://static.pxl.ai/problem/images/CT-003.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 874,
    region_id: 1768,
    image_url: "https://static.pxl.ai/problem/images/KN-175.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 875,
    region_id: 1796,
    image_url: "https://static.pxl.ai/problem/images/JK-030.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 876,
    region_id: 3421,
    image_url: "https://static.pxl.ai/problem/images/JK-018.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 877,
    region_id: 2326,
    image_url: "https://static.pxl.ai/problem/images/OP-092.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 878,
    region_id: 4631,
    image_url: "https://static.pxl.ai/problem/images/JP-271.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 879,
    region_id: 2932,
    image_url: "https://static.pxl.ai/problem/images/JP-265.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 880,
    region_id: 4238,
    image_url: "https://static.pxl.ai/problem/images/OP-086.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 881,
    region_id: 3524,
    image_url: "https://static.pxl.ai/problem/images/KN-149.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 882,
    region_id: 3012,
    image_url: "https://static.pxl.ai/problem/images/SW-126.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 883,
    region_id: 3115,
    image_url: "https://static.pxl.ai/problem/images/PT-049.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 884,
    region_id: 2370,
    image_url: "https://static.pxl.ai/problem/images/JP-098.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 885,
    region_id: 1726,
    image_url: "https://static.pxl.ai/problem/images/SH-019.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 886,
    region_id: 2659,
    image_url: "https://static.pxl.ai/problem/images/SW-132.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 887,
    region_id: 1444,
    image_url: "https://static.pxl.ai/problem/images/SH-031.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 888,
    region_id: 4750,
    image_url: "https://static.pxl.ai/problem/images/PT-061.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 889,
    region_id: 1093,
    image_url: "https://static.pxl.ai/problem/images/SE-006.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 890,
    region_id: 1485,
    image_url: "https://static.pxl.ai/problem/images/CD-026.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 891,
    region_id: 1680,
    image_url: "https://static.pxl.ai/problem/images/PT-075.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 892,
    region_id: 4089,
    image_url: "https://static.pxl.ai/problem/images/CD-032.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 893,
    region_id: 1975,
    image_url: "https://static.pxl.ai/problem/images/SE-012.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "linen",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 894,
    region_id: 1245,
    image_url: "https://static.pxl.ai/problem/images/SH-025.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 895,
    region_id: 4678,
    image_url: "https://static.pxl.ai/problem/images/BL-140.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 896,
    region_id: 1940,
    image_url: "https://static.pxl.ai/problem/images/CT-215.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 897,
    region_id: 1232,
    image_url: "https://static.pxl.ai/problem/images/JK-226.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 898,
    region_id: 3663,
    image_url: "https://static.pxl.ai/problem/images/JK-232.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 899,
    region_id: 4977,
    image_url: "https://static.pxl.ai/problem/images/CT-201.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 900,
    region_id: 2271,
    image_url: "https://static.pxl.ai/problem/images/SK-119.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 901,
    region_id: 2958,
    image_url: "https://static.pxl.ai/problem/images/CT-229.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 902,
    region_id: 2329,
    image_url: "https://static.pxl.ai/problem/images/SK-131.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 903,
    region_id: 2482,
    image_url: "https://static.pxl.ai/problem/images/JP-073.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 904,
    region_id: 2262,
    image_url: "https://static.pxl.ai/problem/images/JP-067.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 905,
    region_id: 1047,
    image_url: "https://static.pxl.ai/problem/images/SK-125.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 906,
    region_id: 4198,
    image_url: "https://static.pxl.ai/problem/images/SW-052.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 907,
    region_id: 2006,
    image_url: "https://static.pxl.ai/problem/images/PT-129.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 908,
    region_id: 4088,
    image_url: "https://static.pxl.ai/problem/images/BL-008.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 909,
    region_id: 2324,
    image_url: "https://static.pxl.ai/problem/images/SW-046.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 910,
    region_id: 4187,
    image_url: "https://static.pxl.ai/problem/images/BL-020.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 911,
    region_id: 4045,
    image_url: "https://static.pxl.ai/problem/images/SK-086.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 912,
    region_id: 2677,
    image_url: "https://static.pxl.ai/problem/images/PT-115.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 913,
    region_id: 1462,
    image_url: "https://static.pxl.ai/problem/images/PT-101.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 914,
    region_id: 2290,
    image_url: "https://static.pxl.ai/problem/images/CD-146.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 915,
    region_id: 3811,
    image_url: "https://static.pxl.ai/problem/images/SK-092.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "denim",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 916,
    region_id: 4934,
    image_url: "https://static.pxl.ai/problem/images/BL-034.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 917,
    region_id: 4050,
    image_url: "https://static.pxl.ai/problem/images/SK-079.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 918,
    region_id: 1666,
    image_url: "https://static.pxl.ai/problem/images/SW-091.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 919,
    region_id: 2725,
    image_url: "https://static.pxl.ai/problem/images/KN-217.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 920,
    region_id: 4744,
    image_url: "https://static.pxl.ai/problem/images/KN-203.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 921,
    region_id: 3360,
    image_url: "https://static.pxl.ai/problem/images/SW-085.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 922,
    region_id: 3166,
    image_url: "https://static.pxl.ai/problem/images/SK-045.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 923,
    region_id: 1526,
    image_url: "https://static.pxl.ai/problem/images/JP-107.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 924,
    region_id: 2794,
    image_url: "https://static.pxl.ai/problem/images/JP-113.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 925,
    region_id: 4948,
    image_url: "https://static.pxl.ai/problem/images/SK-051.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 926,
    region_id: 4467,
    image_url: "https://static.pxl.ai/problem/images/OP-119.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 927,
    region_id: 4370,
    image_url: "https://static.pxl.ai/problem/images/JK-193.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 928,
    region_id: 4645,
    image_url: "https://static.pxl.ai/problem/images/JK-187.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 929,
    region_id: 2890,
    image_url: "https://static.pxl.ai/problem/images/OP-125.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 930,
    region_id: 4486,
    image_url: "https://static.pxl.ai/problem/images/CT-188.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 931,
    region_id: 4043,
    image_url: "https://static.pxl.ai/problem/images/OP-131.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 932,
    region_id: 4105,
    image_url: "https://static.pxl.ai/problem/images/JK-150.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 933,
    region_id: 3324,
    image_url: "https://static.pxl.ai/problem/images/KN-015.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 934,
    region_id: 1086,
    image_url: "https://static.pxl.ai/problem/images/CT-163.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 935,
    region_id: 3107,
    image_url: "https://static.pxl.ai/problem/images/CT-177.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 936,
    region_id: 4319,
    image_url: "https://static.pxl.ai/problem/images/KN-001.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 937,
    region_id: 3166,
    image_url: "https://static.pxl.ai/problem/images/JK-144.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 938,
    region_id: 3220,
    image_url: "https://static.pxl.ai/problem/images/KN-029.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 939,
    region_id: 1401,
    image_url: "https://static.pxl.ai/problem/images/JK-178.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 940,
    region_id: 4063,
    image_url: "https://static.pxl.ai/problem/images/JK-179.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 941,
    region_id: 2735,
    image_url: "https://static.pxl.ai/problem/images/KN-028.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 942,
    region_id: 2140,
    image_url: "https://static.pxl.ai/problem/images/CT-176.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 943,
    region_id: 4832,
    image_url: "https://static.pxl.ai/problem/images/JK-145.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 944,
    region_id: 4872,
    image_url: "https://static.pxl.ai/problem/images/KN-014.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 945,
    region_id: 1908,
    image_url: "https://static.pxl.ai/problem/images/JK-151.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 946,
    region_id: 4472,
    image_url: "https://static.pxl.ai/problem/images/CT-162.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "linen",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 947,
    region_id: 2167,
    image_url: "https://static.pxl.ai/problem/images/CT-189.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 948,
    region_id: 1992,
    image_url: "https://static.pxl.ai/problem/images/OP-130.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 949,
    region_id: 3682,
    image_url: "https://static.pxl.ai/problem/images/OP-124.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 950,
    region_id: 1888,
    image_url: "https://static.pxl.ai/problem/images/JK-186.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 951,
    region_id: 1297,
    image_url: "https://static.pxl.ai/problem/images/JK-192.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 952,
    region_id: 2792,
    image_url: "https://static.pxl.ai/problem/images/OP-118.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 953,
    region_id: 2361,
    image_url: "https://static.pxl.ai/problem/images/SK-050.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 954,
    region_id: 3622,
    image_url: "https://static.pxl.ai/problem/images/JP-112.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 955,
    region_id: 2825,
    image_url: "https://static.pxl.ai/problem/images/JP-106.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 956,
    region_id: 4099,
    image_url: "https://static.pxl.ai/problem/images/SK-044.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "leather",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 957,
    region_id: 2138,
    image_url: "https://static.pxl.ai/problem/images/KN-202.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 958,
    region_id: 2198,
    image_url: "https://static.pxl.ai/problem/images/SW-084.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 959,
    region_id: 1252,
    image_url: "https://static.pxl.ai/problem/images/SW-090.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 960,
    region_id: 3968,
    image_url: "https://static.pxl.ai/problem/images/SK-078.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 961,
    region_id: 3101,
    image_url: "https://static.pxl.ai/problem/images/KN-216.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 962,
    region_id: 4511,
    image_url: "https://static.pxl.ai/problem/images/CD-147.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 963,
    region_id: 4804,
    image_url: "https://static.pxl.ai/problem/images/PT-100.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 964,
    region_id: 2789,
    image_url: "https://static.pxl.ai/problem/images/BL-035.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 965,
    region_id: 3846,
    image_url: "https://static.pxl.ai/problem/images/SK-093.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 966,
    region_id: 2818,
    image_url: "https://static.pxl.ai/problem/images/SK-087.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 967,
    region_id: 2005,
    image_url: "https://static.pxl.ai/problem/images/BL-021.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 968,
    region_id: 3540,
    image_url: "https://static.pxl.ai/problem/images/PT-114.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 969,
    region_id: 2187,
    image_url: "https://static.pxl.ai/problem/images/SW-047.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 970,
    region_id: 3063,
    image_url: "https://static.pxl.ai/problem/images/BL-009.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 971,
    region_id: 3783,
    image_url: "https://static.pxl.ai/problem/images/SW-053.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 972,
    region_id: 2197,
    image_url: "https://static.pxl.ai/problem/images/PT-128.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 973,
    region_id: 4236,
    image_url: "https://static.pxl.ai/problem/images/SK-124.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 974,
    region_id: 3225,
    image_url: "https://static.pxl.ai/problem/images/JP-066.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "linen",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 975,
    region_id: 3571,
    image_url: "https://static.pxl.ai/problem/images/JP-072.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 976,
    region_id: 4318,
    image_url: "https://static.pxl.ai/problem/images/SK-130.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 977,
    region_id: 2529,
    image_url: "https://static.pxl.ai/problem/images/CT-228.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 978,
    region_id: 4484,
    image_url: "https://static.pxl.ai/problem/images/JK-233.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 979,
    region_id: 3514,
    image_url: "https://static.pxl.ai/problem/images/SK-118.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 980,
    region_id: 2554,
    image_url: "https://static.pxl.ai/problem/images/CT-200.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 981,
    region_id: 2329,
    image_url: "https://static.pxl.ai/problem/images/CT-214.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 982,
    region_id: 2084,
    image_url: "https://static.pxl.ai/problem/images/JK-227.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 983,
    region_id: 4591,
    image_url: "https://static.pxl.ai/problem/images/CD-033.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 984,
    region_id: 4939,
    image_url: "https://static.pxl.ai/problem/images/SE-013.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 985,
    region_id: 1308,
    image_url: "https://static.pxl.ai/problem/images/PT-074.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 986,
    region_id: 1292,
    image_url: "https://static.pxl.ai/problem/images/BL-141.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 987,
    region_id: 1967,
    image_url: "https://static.pxl.ai/problem/images/SH-024.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 988,
    region_id: 2926,
    image_url: "https://static.pxl.ai/problem/images/SH-030.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 989,
    region_id: 2987,
    image_url: "https://static.pxl.ai/problem/images/SE-007.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 990,
    region_id: 3029,
    image_url: "https://static.pxl.ai/problem/images/CD-027.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 991,
    region_id: 4655,
    image_url: "https://static.pxl.ai/problem/images/PT-060.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 992,
    region_id: 4841,
    image_url: "https://static.pxl.ai/problem/images/PT-048.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 993,
    region_id: 3305,
    image_url: "https://static.pxl.ai/problem/images/SW-133.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "linen",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 994,
    region_id: 3273,
    image_url: "https://static.pxl.ai/problem/images/SH-018.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 995,
    region_id: 1648,
    image_url: "https://static.pxl.ai/problem/images/JP-099.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 996,
    region_id: 4479,
    image_url: "https://static.pxl.ai/problem/images/SW-127.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 997,
    region_id: 3398,
    image_url: "https://static.pxl.ai/problem/images/JP-264.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 998,
    region_id: 1624,
    image_url: "https://static.pxl.ai/problem/images/KN-148.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 999,
    region_id: 1733,
    image_url: "https://static.pxl.ai/problem/images/OP-087.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1000,
    region_id: 1746,
    image_url: "https://static.pxl.ai/problem/images/OP-093.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1001,
    region_id: 1770,
    image_url: "https://static.pxl.ai/problem/images/JK-019.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1002,
    region_id: 3050,
    image_url: "https://static.pxl.ai/problem/images/JP-270.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1003,
    region_id: 1216,
    image_url: "https://static.pxl.ai/problem/images/CT-002.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1004,
    region_id: 4737,
    image_url: "https://static.pxl.ai/problem/images/JP-258.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1005,
    region_id: 3262,
    image_url: "https://static.pxl.ai/problem/images/JK-031.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1006,
    region_id: 1190,
    image_url: "https://static.pxl.ai/problem/images/KN-174.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1007,
    region_id: 3538,
    image_url: "https://static.pxl.ai/problem/images/KN-160.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1008,
    region_id: 3668,
    image_url: "https://static.pxl.ai/problem/images/JK-025.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1009,
    region_id: 1707,
    image_url: "https://static.pxl.ai/problem/images/CT-016.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1010,
    region_id: 2891,
    image_url: "https://static.pxl.ai/problem/images/OP-044.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1011,
    region_id: 1439,
    image_url: "https://static.pxl.ai/problem/images/VT-039.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1012,
    region_id: 3271,
    image_url: "https://static.pxl.ai/problem/images/OP-050.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1013,
    region_id: 2339,
    image_url: "https://static.pxl.ai/problem/images/VT-011.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1014,
    region_id: 2672,
    image_url: "https://static.pxl.ai/problem/images/OP-078.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1015,
    region_id: 4165,
    image_url: "https://static.pxl.ai/problem/images/VT-005.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1016,
    region_id: 2694,
    image_url: "https://static.pxl.ai/problem/images/OP-054.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1017,
    region_id: 2279,
    image_url: "https://static.pxl.ai/problem/images/VT-029.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1018,
    region_id: 3671,
    image_url: "https://static.pxl.ai/problem/images/OP-040.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1019,
    region_id: 4667,
    image_url: "https://static.pxl.ai/problem/images/VT-001.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1020,
    region_id: 3555,
    image_url: "https://static.pxl.ai/problem/images/OP-068.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1021,
    region_id: 2171,
    image_url: "https://static.pxl.ai/problem/images/VT-015.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1022,
    region_id: 4161,
    image_url: "https://static.pxl.ai/problem/images/JP-274.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1023,
    region_id: 2892,
    image_url: "https://static.pxl.ai/problem/images/KN-158.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1024,
    region_id: 3659,
    image_url: "https://static.pxl.ai/problem/images/OP-097.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1025,
    region_id: 1765,
    image_url: "https://static.pxl.ai/problem/images/JK-009.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1026,
    region_id: 3663,
    image_url: "https://static.pxl.ai/problem/images/OP-083.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1027,
    region_id: 3741,
    image_url: "https://static.pxl.ai/problem/images/JP-260.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1028,
    region_id: 2725,
    image_url: "https://static.pxl.ai/problem/images/CT-012.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1029,
    region_id: 4383,
    image_url: "https://static.pxl.ai/problem/images/JP-248.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1030,
    region_id: 1139,
    image_url: "https://static.pxl.ai/problem/images/JK-021.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1031,
    region_id: 1091,
    image_url: "https://static.pxl.ai/problem/images/KN-164.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1032,
    region_id: 2179,
    image_url: "https://static.pxl.ai/problem/images/KN-170.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1033,
    region_id: 4948,
    image_url: "https://static.pxl.ai/problem/images/JK-035.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1034,
    region_id: 4132,
    image_url: "https://static.pxl.ai/problem/images/CT-006.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1035,
    region_id: 2711,
    image_url: "https://static.pxl.ai/problem/images/PT-064.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1036,
    region_id: 3310,
    image_url: "https://static.pxl.ai/problem/images/CD-023.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1037,
    region_id: 4394,
    image_url: "https://static.pxl.ai/problem/images/SE-003.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1038,
    region_id: 2638,
    image_url: "https://static.pxl.ai/problem/images/SH-034.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1039,
    region_id: 3497,
    image_url: "https://static.pxl.ai/problem/images/SH-020.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1040,
    region_id: 1387,
    image_url: "https://static.pxl.ai/problem/images/BL-145.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1041,
    region_id: 4573,
    image_url: "https://static.pxl.ai/problem/images/PT-070.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1042,
    region_id: 3643,
    image_url: "https://static.pxl.ai/problem/images/SE-017.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1043,
    region_id: 4702,
    image_url: "https://static.pxl.ai/problem/images/CD-037.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1044,
    region_id: 3271,
    image_url: "https://static.pxl.ai/problem/images/PT-058.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1045,
    region_id: 4553,
    image_url: "https://static.pxl.ai/problem/images/SH-008.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1046,
    region_id: 2755,
    image_url: "https://static.pxl.ai/problem/images/SW-123.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1047,
    region_id: 3978,
    image_url: "https://static.pxl.ai/problem/images/JP-089.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1048,
    region_id: 2129,
    image_url: "https://static.pxl.ai/problem/images/SW-137.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1049,
    region_id: 4115,
    image_url: "https://static.pxl.ai/problem/images/SK-134.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "linen",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1050,
    region_id: 3005,
    image_url: "https://static.pxl.ai/problem/images/JP-076.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1051,
    region_id: 4898,
    image_url: "https://static.pxl.ai/problem/images/JP-062.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1052,
    region_id: 3799,
    image_url: "https://static.pxl.ai/problem/images/CT-238.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1053,
    region_id: 3678,
    image_url: "https://static.pxl.ai/problem/images/SK-120.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1054,
    region_id: 4604,
    image_url: "https://static.pxl.ai/problem/images/JK-223.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1055,
    region_id: 1666,
    image_url: "https://static.pxl.ai/problem/images/CT-210.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1056,
    region_id: 4709,
    image_url: "https://static.pxl.ai/problem/images/SK-108.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1057,
    region_id: 1033,
    image_url: "https://static.pxl.ai/problem/images/CT-204.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1058,
    region_id: 4317,
    image_url: "https://static.pxl.ai/problem/images/JK-237.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1059,
    region_id: 4212,
    image_url: "https://static.pxl.ai/problem/images/PT-110.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1060,
    region_id: 4650,
    image_url: "https://static.pxl.ai/problem/images/BL-025.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1061,
    region_id: 3588,
    image_url: "https://static.pxl.ai/problem/images/SK-083.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1062,
    region_id: 1452,
    image_url: "https://static.pxl.ai/problem/images/SK-097.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1063,
    region_id: 1056,
    image_url: "https://static.pxl.ai/problem/images/BL-031.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1064,
    region_id: 4528,
    image_url: "https://static.pxl.ai/problem/images/PT-104.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1065,
    region_id: 1083,
    image_url: "https://static.pxl.ai/problem/images/CD-143.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1066,
    region_id: 1120,
    image_url: "https://static.pxl.ai/problem/images/SW-057.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1067,
    region_id: 1343,
    image_url: "https://static.pxl.ai/problem/images/BL-019.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1068,
    region_id: 4345,
    image_url: "https://static.pxl.ai/problem/images/SW-043.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1069,
    region_id: 2319,
    image_url: "https://static.pxl.ai/problem/images/PT-138.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1070,
    region_id: 3755,
    image_url: "https://static.pxl.ai/problem/images/SK-040.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1071,
    region_id: 4534,
    image_url: "https://static.pxl.ai/problem/images/JP-102.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1072,
    region_id: 1873,
    image_url: "https://static.pxl.ai/problem/images/JP-116.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1073,
    region_id: 1125,
    image_url: "https://static.pxl.ai/problem/images/SK-054.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1074,
    region_id: 3477,
    image_url: "https://static.pxl.ai/problem/images/KN-212.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1075,
    region_id: 2610,
    image_url: "https://static.pxl.ai/problem/images/SW-094.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1076,
    region_id: 4565,
    image_url: "https://static.pxl.ai/problem/images/SK-068.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1077,
    region_id: 1351,
    image_url: "https://static.pxl.ai/problem/images/SW-080.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1078,
    region_id: 3043,
    image_url: "https://static.pxl.ai/problem/images/KN-206.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1079,
    region_id: 2674,
    image_url: "https://static.pxl.ai/problem/images/CT-199.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1080,
    region_id: 4370,
    image_url: "https://static.pxl.ai/problem/images/OP-120.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1081,
    region_id: 3622,
    image_url: "https://static.pxl.ai/problem/images/OP-134.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "none",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1082,
    region_id: 1713,
    image_url: "https://static.pxl.ai/problem/images/JK-196.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1083,
    region_id: 2989,
    image_url: "https://static.pxl.ai/problem/images/OP-108.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1084,
    region_id: 1748,
    image_url: "https://static.pxl.ai/problem/images/JK-182.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1085,
    region_id: 2613,
    image_url: "https://static.pxl.ai/problem/images/JK-169.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1086,
    region_id: 1145,
    image_url: "https://static.pxl.ai/problem/images/KN-038.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1087,
    region_id: 4979,
    image_url: "https://static.pxl.ai/problem/images/CT-166.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "linen",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1088,
    region_id: 4833,
    image_url: "https://static.pxl.ai/problem/images/JK-155.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1089,
    region_id: 2904,
    image_url: "https://static.pxl.ai/problem/images/KN-010.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1090,
    region_id: 4685,
    image_url: "https://static.pxl.ai/problem/images/KN-004.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1091,
    region_id: 3638,
    image_url: "https://static.pxl.ai/problem/images/JK-141.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1092,
    region_id: 4894,
    image_url: "https://static.pxl.ai/problem/images/CT-172.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1093,
    region_id: 3317,
    image_url: "https://static.pxl.ai/problem/images/JK-140.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1094,
    region_id: 4744,
    image_url: "https://static.pxl.ai/problem/images/KN-005.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1095,
    region_id: 1405,
    image_url: "https://static.pxl.ai/problem/images/CT-173.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1096,
    region_id: 1002,
    image_url: "https://static.pxl.ai/problem/images/CT-167.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1097,
    region_id: 4304,
    image_url: "https://static.pxl.ai/problem/images/KN-011.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1098,
    region_id: 2036,
    image_url: "https://static.pxl.ai/problem/images/JK-154.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1099,
    region_id: 3549,
    image_url: "https://static.pxl.ai/problem/images/KN-039.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1100,
    region_id: 1305,
    image_url: "https://static.pxl.ai/problem/images/JK-168.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1101,
    region_id: 3058,
    image_url: "https://static.pxl.ai/problem/images/JK-183.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1102,
    region_id: 3246,
    image_url: "https://static.pxl.ai/problem/images/OP-109.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1103,
    region_id: 4877,
    image_url: "https://static.pxl.ai/problem/images/JK-197.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1104,
    region_id: 1849,
    image_url: "https://static.pxl.ai/problem/images/OP-135.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1105,
    region_id: 4576,
    image_url: "https://static.pxl.ai/problem/images/CT-198.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1106,
    region_id: 2785,
    image_url: "https://static.pxl.ai/problem/images/OP-121.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1107,
    region_id: 3319,
    image_url: "https://static.pxl.ai/problem/images/SW-081.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1108,
    region_id: 4522,
    image_url: "https://static.pxl.ai/problem/images/SK-069.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1109,
    region_id: 3004,
    image_url: "https://static.pxl.ai/problem/images/KN-207.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1110,
    region_id: 4326,
    image_url: "https://static.pxl.ai/problem/images/KN-213.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1111,
    region_id: 3906,
    image_url: "https://static.pxl.ai/problem/images/SW-095.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1112,
    region_id: 1748,
    image_url: "https://static.pxl.ai/problem/images/SK-055.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1113,
    region_id: 2151,
    image_url: "https://static.pxl.ai/problem/images/JP-117.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1114,
    region_id: 3005,
    image_url: "https://static.pxl.ai/problem/images/JP-103.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1115,
    region_id: 4258,
    image_url: "https://static.pxl.ai/problem/images/SK-041.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1116,
    region_id: 2363,
    image_url: "https://static.pxl.ai/problem/images/SW-042.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1117,
    region_id: 4010,
    image_url: "https://static.pxl.ai/problem/images/PT-139.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1118,
    region_id: 4682,
    image_url: "https://static.pxl.ai/problem/images/BL-018.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1119,
    region_id: 1856,
    image_url: "https://static.pxl.ai/problem/images/SW-056.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1120,
    region_id: 3154,
    image_url: "https://static.pxl.ai/problem/images/BL-030.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1121,
    region_id: 1992,
    image_url: "https://static.pxl.ai/problem/images/SK-096.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1122,
    region_id: 3415,
    image_url: "https://static.pxl.ai/problem/images/CD-142.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1123,
    region_id: 1375,
    image_url: "https://static.pxl.ai/problem/images/PT-105.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1124,
    region_id: 2421,
    image_url: "https://static.pxl.ai/problem/images/PT-111.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1125,
    region_id: 2802,
    image_url: "https://static.pxl.ai/problem/images/SK-082.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1126,
    region_id: 3382,
    image_url: "https://static.pxl.ai/problem/images/BL-024.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1127,
    region_id: 3372,
    image_url: "https://static.pxl.ai/problem/images/CT-205.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1128,
    region_id: 3746,
    image_url: "https://static.pxl.ai/problem/images/JK-236.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1129,
    region_id: 2973,
    image_url: "https://static.pxl.ai/problem/images/JK-222.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1130,
    region_id: 3969,
    image_url: "https://static.pxl.ai/problem/images/SK-109.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1131,
    region_id: 4277,
    image_url: "https://static.pxl.ai/problem/images/CT-211.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1132,
    region_id: 4280,
    image_url: "https://static.pxl.ai/problem/images/SK-121.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1133,
    region_id: 4143,
    image_url: "https://static.pxl.ai/problem/images/CT-239.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1134,
    region_id: 4171,
    image_url: "https://static.pxl.ai/problem/images/JP-063.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1135,
    region_id: 1417,
    image_url: "https://static.pxl.ai/problem/images/JP-077.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1136,
    region_id: 4787,
    image_url: "https://static.pxl.ai/problem/images/SK-135.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1137,
    region_id: 2864,
    image_url: "https://static.pxl.ai/problem/images/SW-136.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1138,
    region_id: 3154,
    image_url: "https://static.pxl.ai/problem/images/PT-059.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1139,
    region_id: 2522,
    image_url: "https://static.pxl.ai/problem/images/JP-088.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1140,
    region_id: 2972,
    image_url: "https://static.pxl.ai/problem/images/SW-122.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1141,
    region_id: 3264,
    image_url: "https://static.pxl.ai/problem/images/SH-009.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1142,
    region_id: 4974,
    image_url: "https://static.pxl.ai/problem/images/BL-144.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "formal",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1143,
    region_id: 3837,
    image_url: "https://static.pxl.ai/problem/images/SH-021.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1144,
    region_id: 3027,
    image_url: "https://static.pxl.ai/problem/images/SE-016.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1145,
    region_id: 3263,
    image_url: "https://static.pxl.ai/problem/images/CD-036.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1146,
    region_id: 3381,
    image_url: "https://static.pxl.ai/problem/images/PT-071.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1147,
    region_id: 3869,
    image_url: "https://static.pxl.ai/problem/images/CD-022.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1148,
    region_id: 2397,
    image_url: "https://static.pxl.ai/problem/images/SE-002.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1149,
    region_id: 2864,
    image_url: "https://static.pxl.ai/problem/images/PT-065.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1150,
    region_id: 3319,
    image_url: "https://static.pxl.ai/problem/images/SH-035.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1151,
    region_id: 2092,
    image_url: "https://static.pxl.ai/problem/images/JK-034.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1152,
    region_id: 4369,
    image_url: "https://static.pxl.ai/problem/images/KN-171.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1153,
    region_id: 3161,
    image_url: "https://static.pxl.ai/problem/images/CT-007.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1154,
    region_id: 2295,
    image_url: "https://static.pxl.ai/problem/images/JP-249.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1155,
    region_id: 1970,
    image_url: "https://static.pxl.ai/problem/images/CT-013.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1156,
    region_id: 1822,
    image_url: "https://static.pxl.ai/problem/images/KN-165.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1157,
    region_id: 4382,
    image_url: "https://static.pxl.ai/problem/images/JK-020.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1158,
    region_id: 3613,
    image_url: "https://static.pxl.ai/problem/images/OP-082.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1159,
    region_id: 4387,
    image_url: "https://static.pxl.ai/problem/images/JK-008.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1160,
    region_id: 3166,
    image_url: "https://static.pxl.ai/problem/images/JP-261.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1161,
    region_id: 2276,
    image_url: "https://static.pxl.ai/problem/images/JP-275.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1162,
    region_id: 2050,
    image_url: "https://static.pxl.ai/problem/images/OP-096.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1163,
    region_id: 1364,
    image_url: "https://static.pxl.ai/problem/images/KN-159.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1164,
    region_id: 2831,
    image_url: "https://static.pxl.ai/problem/images/VT-014.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1165,
    region_id: 3896,
    image_url: "https://static.pxl.ai/problem/images/OP-069.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1166,
    region_id: 3882,
    image_url: "https://static.pxl.ai/problem/images/OP-041.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1167,
    region_id: 2406,
    image_url: "https://static.pxl.ai/problem/images/VT-028.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1168,
    region_id: 2891,
    image_url: "https://static.pxl.ai/problem/images/OP-055.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1169,
    region_id: 2884,
    image_url: "https://static.pxl.ai/problem/images/OP-043.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1170,
    region_id: 2194,
    image_url: "https://static.pxl.ai/problem/images/OP-057.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1171,
    region_id: 2923,
    image_url: "https://static.pxl.ai/problem/images/KN-198.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "casual",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1172,
    region_id: 3477,
    image_url: "https://static.pxl.ai/problem/images/VT-016.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1173,
    region_id: 1557,
    image_url: "https://static.pxl.ai/problem/images/VT-002.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1174,
    region_id: 3127,
    image_url: "https://static.pxl.ai/problem/images/CT-039.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1175,
    region_id: 3129,
    image_url: "https://static.pxl.ai/problem/images/JP-263.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1176,
    region_id: 2709,
    image_url: "https://static.pxl.ai/problem/images/OP-080.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1177,
    region_id: 2278,
    image_url: "https://static.pxl.ai/problem/images/OP-094.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1178,
    region_id: 2685,
    image_url: "https://static.pxl.ai/problem/images/JP-277.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1179,
    region_id: 2844,
    image_url: "https://static.pxl.ai/problem/images/CT-005.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1180,
    region_id: 2933,
    image_url: "https://static.pxl.ai/problem/images/KN-173.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1181,
    region_id: 3106,
    image_url: "https://static.pxl.ai/problem/images/JK-036.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1182,
    region_id: 2105,
    image_url: "https://static.pxl.ai/problem/images/JK-022.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1183,
    region_id: 3887,
    image_url: "https://static.pxl.ai/problem/images/KN-167.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1184,
    region_id: 2974,
    image_url: "https://static.pxl.ai/problem/images/CT-011.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1185,
    region_id: 2734,
    image_url: "https://static.pxl.ai/problem/images/CD-034.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1186,
    region_id: 2193,
    image_url: "https://static.pxl.ai/problem/images/SE-014.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1187,
    region_id: 1212,
    image_url: "https://static.pxl.ai/problem/images/PT-073.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1188,
    region_id: 4315,
    image_url: "https://static.pxl.ai/problem/images/SH-023.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1189,
    region_id: 2146,
    image_url: "https://static.pxl.ai/problem/images/SW-108.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1190,
    region_id: 3315,
    image_url: "https://static.pxl.ai/problem/images/BL-146.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1191,
    region_id: 4427,
    image_url: "https://static.pxl.ai/problem/images/SH-037.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1192,
    region_id: 1769,
    image_url: "https://static.pxl.ai/problem/images/CD-020.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1193,
    region_id: 2978,
    image_url: "https://static.pxl.ai/problem/images/PT-067.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1194,
    region_id: 1466,
    image_url: "https://static.pxl.ai/problem/images/CD-008.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1195,
    region_id: 3226,
    image_url: "https://static.pxl.ai/problem/images/SE-028.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1196,
    region_id: 2724,
    image_url: "https://static.pxl.ai/problem/images/SW-134.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1197,
    region_id: 1583,
    image_url: "https://static.pxl.ai/problem/images/SW-120.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1198,
    region_id: 1780,
    image_url: "https://static.pxl.ai/problem/images/JK-208.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1199,
    region_id: 2635,
    image_url: "https://static.pxl.ai/problem/images/JP-061.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "none",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1200,
    region_id: 4786,
    image_url: "https://static.pxl.ai/problem/images/SK-123.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "denim",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1201,
    region_id: 3459,
    image_url: "https://static.pxl.ai/problem/images/SK-137.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1202,
    region_id: 1075,
    image_url: "https://static.pxl.ai/problem/images/JP-075.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1203,
    region_id: 2564,
    image_url: "https://static.pxl.ai/problem/images/JK-234.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1204,
    region_id: 1829,
    image_url: "https://static.pxl.ai/problem/images/CT-207.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1205,
    region_id: 4759,
    image_url: "https://static.pxl.ai/problem/images/JP-049.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1206,
    region_id: 4718,
    image_url: "https://static.pxl.ai/problem/images/CT-213.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1207,
    region_id: 1457,
    image_url: "https://static.pxl.ai/problem/images/JK-220.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1208,
    region_id: 1987,
    image_url: "https://static.pxl.ai/problem/images/PT-098.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1209,
    region_id: 1461,
    image_url: "https://static.pxl.ai/problem/images/CD-140.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1210,
    region_id: 3184,
    image_url: "https://static.pxl.ai/problem/images/PT-107.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1211,
    region_id: 2884,
    image_url: "https://static.pxl.ai/problem/images/SK-094.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1212,
    region_id: 4065,
    image_url: "https://static.pxl.ai/problem/images/BL-032.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1213,
    region_id: 2431,
    image_url: "https://static.pxl.ai/problem/images/BL-026.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1214,
    region_id: 3400,
    image_url: "https://static.pxl.ai/problem/images/SW-068.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1215,
    region_id: 4866,
    image_url: "https://static.pxl.ai/problem/images/SK-080.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1216,
    region_id: 2226,
    image_url: "https://static.pxl.ai/problem/images/PT-113.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1217,
    region_id: 2039,
    image_url: "https://static.pxl.ai/problem/images/SW-040.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1218,
    region_id: 4623,
    image_url: "https://static.pxl.ai/problem/images/SW-054.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1219,
    region_id: 1383,
    image_url: "https://static.pxl.ai/problem/images/JP-115.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1220,
    region_id: 4336,
    image_url: "https://static.pxl.ai/problem/images/SK-057.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1221,
    region_id: 1915,
    image_url: "https://static.pxl.ai/problem/images/SK-043.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1222,
    region_id: 3978,
    image_url: "https://static.pxl.ai/problem/images/JP-101.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1223,
    region_id: 2034,
    image_url: "https://static.pxl.ai/problem/images/KN-205.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1224,
    region_id: 4487,
    image_url: "https://static.pxl.ai/problem/images/SW-083.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1225,
    region_id: 1452,
    image_url: "https://static.pxl.ai/problem/images/JP-129.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1226,
    region_id: 2450,
    image_url: "https://static.pxl.ai/problem/images/SW-097.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1227,
    region_id: 4878,
    image_url: "https://static.pxl.ai/problem/images/KN-211.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1228,
    region_id: 2434,
    image_url: "https://static.pxl.ai/problem/images/OP-137.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1229,
    region_id: 3045,
    image_url: "https://static.pxl.ai/problem/images/OP-123.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1230,
    region_id: 1228,
    image_url: "https://static.pxl.ai/problem/images/JK-181.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1231,
    region_id: 1027,
    image_url: "https://static.pxl.ai/problem/images/JK-195.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1232,
    region_id: 3993,
    image_url: "https://static.pxl.ai/problem/images/CT-159.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1233,
    region_id: 2232,
    image_url: "https://static.pxl.ai/problem/images/CT-171.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1234,
    region_id: 2776,
    image_url: "https://static.pxl.ai/problem/images/KN-007.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1235,
    region_id: 2954,
    image_url: "https://static.pxl.ai/problem/images/JK-142.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1236,
    region_id: 2545,
    image_url: "https://static.pxl.ai/problem/images/JK-156.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1237,
    region_id: 2647,
    image_url: "https://static.pxl.ai/problem/images/KN-013.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1238,
    region_id: 3751,
    image_url: "https://static.pxl.ai/problem/images/CT-165.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1239,
    region_id: 1012,
    image_url: "https://static.pxl.ai/problem/images/KN-012.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1240,
    region_id: 4133,
    image_url: "https://static.pxl.ai/problem/images/JK-157.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1241,
    region_id: 1478,
    image_url: "https://static.pxl.ai/problem/images/CT-164.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1242,
    region_id: 3322,
    image_url: "https://static.pxl.ai/problem/images/CT-170.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1243,
    region_id: 2494,
    image_url: "https://static.pxl.ai/problem/images/JK-143.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1244,
    region_id: 2930,
    image_url: "https://static.pxl.ai/problem/images/KN-006.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1245,
    region_id: 4871,
    image_url: "https://static.pxl.ai/problem/images/CT-158.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1246,
    region_id: 4463,
    image_url: "https://static.pxl.ai/problem/images/JK-194.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1247,
    region_id: 4541,
    image_url: "https://static.pxl.ai/problem/images/JK-180.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1248,
    region_id: 1104,
    image_url: "https://static.pxl.ai/problem/images/OP-122.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1249,
    region_id: 4082,
    image_url: "https://static.pxl.ai/problem/images/OP-136.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1250,
    region_id: 2863,
    image_url: "https://static.pxl.ai/problem/images/SW-096.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1251,
    region_id: 1973,
    image_url: "https://static.pxl.ai/problem/images/KN-210.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1252,
    region_id: 4459,
    image_url: "https://static.pxl.ai/problem/images/KN-204.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1253,
    region_id: 1483,
    image_url: "https://static.pxl.ai/problem/images/JP-128.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1254,
    region_id: 2493,
    image_url: "https://static.pxl.ai/problem/images/SW-082.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1255,
    region_id: 1865,
    image_url: "https://static.pxl.ai/problem/images/JP-100.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1256,
    region_id: 3666,
    image_url: "https://static.pxl.ai/problem/images/SK-042.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1257,
    region_id: 4170,
    image_url: "https://static.pxl.ai/problem/images/SK-056.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1258,
    region_id: 1923,
    image_url: "https://static.pxl.ai/problem/images/JP-114.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1259,
    region_id: 3656,
    image_url: "https://static.pxl.ai/problem/images/SW-055.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "leather",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1260,
    region_id: 4021,
    image_url: "https://static.pxl.ai/problem/images/SW-041.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1261,
    region_id: 1446,
    image_url: "https://static.pxl.ai/problem/images/SK-081.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1262,
    region_id: 2679,
    image_url: "https://static.pxl.ai/problem/images/SW-069.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1263,
    region_id: 4492,
    image_url: "https://static.pxl.ai/problem/images/BL-027.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1264,
    region_id: 2530,
    image_url: "https://static.pxl.ai/problem/images/PT-112.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1265,
    region_id: 2342,
    image_url: "https://static.pxl.ai/problem/images/PT-106.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1266,
    region_id: 1720,
    image_url: "https://static.pxl.ai/problem/images/CD-141.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1267,
    region_id: 3212,
    image_url: "https://static.pxl.ai/problem/images/BL-033.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "denim",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1268,
    region_id: 3502,
    image_url: "https://static.pxl.ai/problem/images/SK-095.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1269,
    region_id: 3938,
    image_url: "https://static.pxl.ai/problem/images/CT-212.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1270,
    region_id: 4916,
    image_url: "https://static.pxl.ai/problem/images/JP-048.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1271,
    region_id: 2438,
    image_url: "https://static.pxl.ai/problem/images/PT-099.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1272,
    region_id: 3230,
    image_url: "https://static.pxl.ai/problem/images/JK-221.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1273,
    region_id: 1262,
    image_url: "https://static.pxl.ai/problem/images/JK-235.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1274,
    region_id: 3328,
    image_url: "https://static.pxl.ai/problem/images/CT-206.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1275,
    region_id: 3971,
    image_url: "https://static.pxl.ai/problem/images/JP-074.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1276,
    region_id: 4881,
    image_url: "https://static.pxl.ai/problem/images/SK-136.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1277,
    region_id: 1320,
    image_url: "https://static.pxl.ai/problem/images/JK-209.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1278,
    region_id: 4080,
    image_url: "https://static.pxl.ai/problem/images/SK-122.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1279,
    region_id: 3525,
    image_url: "https://static.pxl.ai/problem/images/JP-060.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1280,
    region_id: 3970,
    image_url: "https://static.pxl.ai/problem/images/SW-121.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1281,
    region_id: 3127,
    image_url: "https://static.pxl.ai/problem/images/CD-009.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1282,
    region_id: 1211,
    image_url: "https://static.pxl.ai/problem/images/SE-029.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1283,
    region_id: 4367,
    image_url: "https://static.pxl.ai/problem/images/SW-135.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1284,
    region_id: 1723,
    image_url: "https://static.pxl.ai/problem/images/SH-036.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1285,
    region_id: 3972,
    image_url: "https://static.pxl.ai/problem/images/PT-066.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1286,
    region_id: 1362,
    image_url: "https://static.pxl.ai/problem/images/SE-001.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1287,
    region_id: 2245,
    image_url: "https://static.pxl.ai/problem/images/CD-021.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1288,
    region_id: 3431,
    image_url: "https://static.pxl.ai/problem/images/PT-072.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1289,
    region_id: 4628,
    image_url: "https://static.pxl.ai/problem/images/CD-035.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1290,
    region_id: 2189,
    image_url: "https://static.pxl.ai/problem/images/SE-015.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1291,
    region_id: 4594,
    image_url: "https://static.pxl.ai/problem/images/BL-147.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1292,
    region_id: 3377,
    image_url: "https://static.pxl.ai/problem/images/SW-109.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1293,
    region_id: 1325,
    image_url: "https://static.pxl.ai/problem/images/SH-022.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1294,
    region_id: 2407,
    image_url: "https://static.pxl.ai/problem/images/KN-166.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1295,
    region_id: 3267,
    image_url: "https://static.pxl.ai/problem/images/JK-023.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1296,
    region_id: 2087,
    image_url: "https://static.pxl.ai/problem/images/CT-010.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1297,
    region_id: 3761,
    image_url: "https://static.pxl.ai/problem/images/CT-004.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1298,
    region_id: 2441,
    image_url: "https://static.pxl.ai/problem/images/JK-037.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1299,
    region_id: 1980,
    image_url: "https://static.pxl.ai/problem/images/KN-172.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1300,
    region_id: 4578,
    image_url: "https://static.pxl.ai/problem/images/OP-095.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1301,
    region_id: 3092,
    image_url: "https://static.pxl.ai/problem/images/JP-276.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1302,
    region_id: 1064,
    image_url: "https://static.pxl.ai/problem/images/JP-262.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1303,
    region_id: 2211,
    image_url: "https://static.pxl.ai/problem/images/CT-038.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1304,
    region_id: 2214,
    image_url: "https://static.pxl.ai/problem/images/OP-081.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1305,
    region_id: 4507,
    image_url: "https://static.pxl.ai/problem/images/VT-003.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "fur",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1306,
    region_id: 1974,
    image_url: "https://static.pxl.ai/problem/images/VT-017.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1307,
    region_id: 2175,
    image_url: "https://static.pxl.ai/problem/images/KN-199.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1308,
    region_id: 4512,
    image_url: "https://static.pxl.ai/problem/images/OP-056.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1309,
    region_id: 2286,
    image_url: "https://static.pxl.ai/problem/images/OP-042.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1310,
    region_id: 1678,
    image_url: "https://static.pxl.ai/problem/images/VT-032.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1311,
    region_id: 4989,
    image_url: "https://static.pxl.ai/problem/images/KN-194.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1312,
    region_id: 4951,
    image_url: "https://static.pxl.ai/problem/images/VT-026.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1313,
    region_id: 3379,
    image_url: "https://static.pxl.ai/problem/images/KN-180.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1314,
    region_id: 2626,
    image_url: "https://static.pxl.ai/problem/images/OP-067.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1315,
    region_id: 4660,
    image_url: "https://static.pxl.ai/problem/images/OP-073.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1316,
    region_id: 3953,
    image_url: "https://static.pxl.ai/problem/images/JK-012.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1317,
    region_id: 2539,
    image_url: "https://static.pxl.ai/problem/images/OP-098.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1318,
    region_id: 2292,
    image_url: "https://static.pxl.ai/problem/images/KN-157.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "denim",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1319,
    region_id: 3041,
    image_url: "https://static.pxl.ai/problem/images/CT-021.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1320,
    region_id: 1579,
    image_url: "https://static.pxl.ai/problem/images/CT-035.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1321,
    region_id: 3764,
    image_url: "https://static.pxl.ai/problem/images/KN-143.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1322,
    region_id: 2769,
    image_url: "https://static.pxl.ai/problem/images/JK-006.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1323,
    region_id: 1467,
    image_url: "https://static.pxl.ai/problem/images/JP-247.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1324,
    region_id: 2714,
    image_url: "https://static.pxl.ai/problem/images/CT-009.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1325,
    region_id: 3653,
    image_url: "https://static.pxl.ai/problem/images/JP-253.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1326,
    region_id: 2292,
    image_url: "https://static.pxl.ai/problem/images/SW-110.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1327,
    region_id: 1124,
    image_url: "https://static.pxl.ai/problem/images/SE-018.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1328,
    region_id: 3158,
    image_url: "https://static.pxl.ai/problem/images/CD-038.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "chic",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1329,
    region_id: 1136,
    image_url: "https://static.pxl.ai/problem/images/SW-104.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1330,
    region_id: 4510,
    image_url: "https://static.pxl.ai/problem/images/JP-086.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1331,
    region_id: 2001,
    image_url: "https://static.pxl.ai/problem/images/SH-007.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1332,
    region_id: 1929,
    image_url: "https://static.pxl.ai/problem/images/CD-010.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1333,
    region_id: 1393,
    image_url: "https://static.pxl.ai/problem/images/SE-030.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1334,
    region_id: 4799,
    image_url: "https://static.pxl.ai/problem/images/PT-057.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1335,
    region_id: 3228,
    image_url: "https://static.pxl.ai/problem/images/SE-024.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1336,
    region_id: 2592,
    image_url: "https://static.pxl.ai/problem/images/CD-004.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1337,
    region_id: 3736,
    image_url: "https://static.pxl.ai/problem/images/PT-043.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1338,
    region_id: 3180,
    image_url: "https://static.pxl.ai/problem/images/SH-013.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1339,
    region_id: 1163,
    image_url: "https://static.pxl.ai/problem/images/SW-138.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1340,
    region_id: 4383,
    image_url: "https://static.pxl.ai/problem/images/JP-092.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1341,
    region_id: 1199,
    image_url: "https://static.pxl.ai/problem/images/JP-079.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1342,
    region_id: 1327,
    image_url: "https://static.pxl.ai/problem/images/CT-223.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1343,
    region_id: 2371,
    image_url: "https://static.pxl.ai/problem/images/JK-210.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1344,
    region_id: 2399,
    image_url: "https://static.pxl.ai/problem/images/JK-204.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1345,
    region_id: 1782,
    image_url: "https://static.pxl.ai/problem/images/CT-237.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1346,
    region_id: 3796,
    image_url: "https://static.pxl.ai/problem/images/SK-107.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1347,
    region_id: 3057,
    image_url: "https://static.pxl.ai/problem/images/JP-045.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1348,
    region_id: 1157,
    image_url: "https://static.pxl.ai/problem/images/PT-094.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1349,
    region_id: 2754,
    image_url: "https://static.pxl.ai/problem/images/PT-080.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1350,
    region_id: 2778,
    image_url: "https://static.pxl.ai/problem/images/JK-238.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1351,
    region_id: 3891,
    image_url: "https://static.pxl.ai/problem/images/JP-051.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1352,
    region_id: 2023,
    image_url: "https://static.pxl.ai/problem/images/SK-113.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1353,
    region_id: 4930,
    image_url: "https://static.pxl.ai/problem/images/SW-064.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1354,
    region_id: 4692,
    image_url: "https://static.pxl.ai/problem/images/SW-070.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1355,
    region_id: 4352,
    image_url: "https://static.pxl.ai/problem/images/SK-098.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1356,
    region_id: 2325,
    image_url: "https://static.pxl.ai/problem/images/BL-016.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1357,
    region_id: 3046,
    image_url: "https://static.pxl.ai/problem/images/SW-058.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1358,
    region_id: 1674,
    image_url: "https://static.pxl.ai/problem/images/PT-123.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1359,
    region_id: 2367,
    image_url: "https://static.pxl.ai/problem/images/PT-137.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1360,
    region_id: 1494,
    image_url: "https://static.pxl.ai/problem/images/BL-002.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1361,
    region_id: 4721,
    image_url: "https://static.pxl.ai/problem/images/KN-221.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1362,
    region_id: 2250,
    image_url: "https://static.pxl.ai/problem/images/KN-235.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1363,
    region_id: 4544,
    image_url: "https://static.pxl.ai/problem/images/JP-119.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1364,
    region_id: 3933,
    image_url: "https://static.pxl.ai/problem/images/SK-073.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1365,
    region_id: 1867,
    image_url: "https://static.pxl.ai/problem/images/JP-131.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1366,
    region_id: 4494,
    image_url: "https://static.pxl.ai/problem/images/KN-209.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1367,
    region_id: 2755,
    image_url: "https://static.pxl.ai/problem/images/JP-125.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1368,
    region_id: 3067,
    image_url: "https://static.pxl.ai/problem/images/SK-067.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1369,
    region_id: 2670,
    image_url: "https://static.pxl.ai/problem/images/CT-196.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1370,
    region_id: 2308,
    image_url: "https://static.pxl.ai/problem/images/CT-182.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1371,
    region_id: 4756,
    image_url: "https://static.pxl.ai/problem/images/OP-113.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1372,
    region_id: 4325,
    image_url: "https://static.pxl.ai/problem/images/JK-199.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1373,
    region_id: 2483,
    image_url: "https://static.pxl.ai/problem/images/OP-107.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1374,
    region_id: 3927,
    image_url: "https://static.pxl.ai/problem/images/JK-166.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1375,
    region_id: 3827,
    image_url: "https://static.pxl.ai/problem/images/KN-023.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1376,
    region_id: 4675,
    image_url: "https://static.pxl.ai/problem/images/CT-155.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1377,
    region_id: 1487,
    image_url: "https://static.pxl.ai/problem/images/CT-141.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1378,
    region_id: 1396,
    image_url: "https://static.pxl.ai/problem/images/KN-037.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1379,
    region_id: 1394,
    image_url: "https://static.pxl.ai/problem/images/JK-172.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1380,
    region_id: 3144,
    image_url: "https://static.pxl.ai/problem/images/CT-169.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1381,
    region_id: 4309,
    image_url: "https://static.pxl.ai/problem/images/CT-168.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1382,
    region_id: 1199,
    image_url: "https://static.pxl.ai/problem/images/CT-140.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1383,
    region_id: 2440,
    image_url: "https://static.pxl.ai/problem/images/JK-173.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1384,
    region_id: 2226,
    image_url: "https://static.pxl.ai/problem/images/KN-036.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1385,
    region_id: 3705,
    image_url: "https://static.pxl.ai/problem/images/KN-022.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1386,
    region_id: 1070,
    image_url: "https://static.pxl.ai/problem/images/JK-167.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "denim",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1387,
    region_id: 4316,
    image_url: "https://static.pxl.ai/problem/images/CT-154.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1388,
    region_id: 4853,
    image_url: "https://static.pxl.ai/problem/images/OP-106.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1389,
    region_id: 2600,
    image_url: "https://static.pxl.ai/problem/images/JK-198.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1390,
    region_id: 3719,
    image_url: "https://static.pxl.ai/problem/images/OP-112.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1391,
    region_id: 4983,
    image_url: "https://static.pxl.ai/problem/images/CT-183.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1392,
    region_id: 3759,
    image_url: "https://static.pxl.ai/problem/images/CT-197.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1393,
    region_id: 3149,
    image_url: "https://static.pxl.ai/problem/images/KN-208.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1394,
    region_id: 4599,
    image_url: "https://static.pxl.ai/problem/images/SK-066.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1395,
    region_id: 1012,
    image_url: "https://static.pxl.ai/problem/images/JP-124.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1396,
    region_id: 2312,
    image_url: "https://static.pxl.ai/problem/images/JP-130.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1397,
    region_id: 2437,
    image_url: "https://static.pxl.ai/problem/images/SK-072.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1398,
    region_id: 3719,
    image_url: "https://static.pxl.ai/problem/images/KN-234.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1399,
    region_id: 4997,
    image_url: "https://static.pxl.ai/problem/images/JP-118.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1400,
    region_id: 4225,
    image_url: "https://static.pxl.ai/problem/images/KN-220.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1401,
    region_id: 2756,
    image_url: "https://static.pxl.ai/problem/images/PT-136.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1402,
    region_id: 1956,
    image_url: "https://static.pxl.ai/problem/images/BL-003.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1403,
    region_id: 4292,
    image_url: "https://static.pxl.ai/problem/images/SW-059.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1404,
    region_id: 3606,
    image_url: "https://static.pxl.ai/problem/images/BL-017.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1405,
    region_id: 1893,
    image_url: "https://static.pxl.ai/problem/images/PT-122.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1406,
    region_id: 1206,
    image_url: "https://static.pxl.ai/problem/images/SK-099.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1407,
    region_id: 2341,
    image_url: "https://static.pxl.ai/problem/images/SW-071.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1408,
    region_id: 4873,
    image_url: "https://static.pxl.ai/problem/images/SW-065.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1409,
    region_id: 2050,
    image_url: "https://static.pxl.ai/problem/images/JK-239.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1410,
    region_id: 4653,
    image_url: "https://static.pxl.ai/problem/images/PT-081.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1411,
    region_id: 3179,
    image_url: "https://static.pxl.ai/problem/images/SK-112.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1412,
    region_id: 1072,
    image_url: "https://static.pxl.ai/problem/images/JP-050.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1413,
    region_id: 3909,
    image_url: "https://static.pxl.ai/problem/images/JP-044.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1414,
    region_id: 3054,
    image_url: "https://static.pxl.ai/problem/images/SK-106.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1415,
    region_id: 2567,
    image_url: "https://static.pxl.ai/problem/images/PT-095.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1416,
    region_id: 1823,
    image_url: "https://static.pxl.ai/problem/images/JK-205.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "linen",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1417,
    region_id: 4765,
    image_url: "https://static.pxl.ai/problem/images/CT-236.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1418,
    region_id: 4121,
    image_url: "https://static.pxl.ai/problem/images/CT-222.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1419,
    region_id: 1958,
    image_url: "https://static.pxl.ai/problem/images/JP-078.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1420,
    region_id: 3453,
    image_url: "https://static.pxl.ai/problem/images/JK-211.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1421,
    region_id: 4803,
    image_url: "https://static.pxl.ai/problem/images/PT-042.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1422,
    region_id: 2412,
    image_url: "https://static.pxl.ai/problem/images/SE-025.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1423,
    region_id: 2048,
    image_url: "https://static.pxl.ai/problem/images/CD-005.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1424,
    region_id: 3176,
    image_url: "https://static.pxl.ai/problem/images/JP-093.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1425,
    region_id: 1030,
    image_url: "https://static.pxl.ai/problem/images/SW-139.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1426,
    region_id: 2320,
    image_url: "https://static.pxl.ai/problem/images/SH-012.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1427,
    region_id: 1061,
    image_url: "https://static.pxl.ai/problem/images/SH-006.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1428,
    region_id: 4540,
    image_url: "https://static.pxl.ai/problem/images/JP-087.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1429,
    region_id: 1034,
    image_url: "https://static.pxl.ai/problem/images/PT-056.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1430,
    region_id: 3756,
    image_url: "https://static.pxl.ai/problem/images/CD-011.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1431,
    region_id: 4048,
    image_url: "https://static.pxl.ai/problem/images/SE-031.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1432,
    region_id: 1990,
    image_url: "https://static.pxl.ai/problem/images/SE-019.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "linen",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1433,
    region_id: 4130,
    image_url: "https://static.pxl.ai/problem/images/CD-039.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1434,
    region_id: 1312,
    image_url: "https://static.pxl.ai/problem/images/SW-105.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1435,
    region_id: 3628,
    image_url: "https://static.pxl.ai/problem/images/SW-111.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "leather",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1436,
    region_id: 2686,
    image_url: "https://static.pxl.ai/problem/images/JP-252.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1437,
    region_id: 1023,
    image_url: "https://static.pxl.ai/problem/images/CT-008.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1438,
    region_id: 4292,
    image_url: "https://static.pxl.ai/problem/images/JP-246.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1439,
    region_id: 3388,
    image_url: "https://static.pxl.ai/problem/images/CT-034.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1440,
    region_id: 2066,
    image_url: "https://static.pxl.ai/problem/images/JK-007.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1441,
    region_id: 2020,
    image_url: "https://static.pxl.ai/problem/images/KN-142.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1442,
    region_id: 3969,
    image_url: "https://static.pxl.ai/problem/images/KN-156.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1443,
    region_id: 1718,
    image_url: "https://static.pxl.ai/problem/images/OP-099.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1444,
    region_id: 2067,
    image_url: "https://static.pxl.ai/problem/images/JK-013.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1445,
    region_id: 3088,
    image_url: "https://static.pxl.ai/problem/images/CT-020.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1446,
    region_id: 1510,
    image_url: "https://static.pxl.ai/problem/images/OP-072.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1447,
    region_id: 1620,
    image_url: "https://static.pxl.ai/problem/images/OP-066.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1448,
    region_id: 1235,
    image_url: "https://static.pxl.ai/problem/images/KN-181.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1449,
    region_id: 2241,
    image_url: "https://static.pxl.ai/problem/images/VT-027.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1450,
    region_id: 1899,
    image_url: "https://static.pxl.ai/problem/images/KN-195.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1451,
    region_id: 4861,
    image_url: "https://static.pxl.ai/problem/images/VT-033.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1452,
    region_id: 3114,
    image_url: "https://static.pxl.ai/problem/images/VT-025.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1453,
    region_id: 1523,
    image_url: "https://static.pxl.ai/problem/images/KN-183.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "leather",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1454,
    region_id: 2246,
    image_url: "https://static.pxl.ai/problem/images/VT-031.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1455,
    region_id: 3584,
    image_url: "https://static.pxl.ai/problem/images/KN-197.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1456,
    region_id: 3389,
    image_url: "https://static.pxl.ai/problem/images/OP-058.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "fur",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1457,
    region_id: 4301,
    image_url: "https://static.pxl.ai/problem/images/VT-019.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1458,
    region_id: 1415,
    image_url: "https://static.pxl.ai/problem/images/OP-070.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1459,
    region_id: 2689,
    image_url: "https://static.pxl.ai/problem/images/OP-064.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1460,
    region_id: 4125,
    image_url: "https://static.pxl.ai/problem/images/KN-140.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1461,
    region_id: 2919,
    image_url: "https://static.pxl.ai/problem/images/JK-005.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1462,
    region_id: 1973,
    image_url: "https://static.pxl.ai/problem/images/CT-036.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1463,
    region_id: 4643,
    image_url: "https://static.pxl.ai/problem/images/CT-022.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1464,
    region_id: 4415,
    image_url: "https://static.pxl.ai/problem/images/JP-278.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1465,
    region_id: 4592,
    image_url: "https://static.pxl.ai/problem/images/JK-011.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1466,
    region_id: 3956,
    image_url: "https://static.pxl.ai/problem/images/KN-154.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1467,
    region_id: 1912,
    image_url: "https://static.pxl.ai/problem/images/JK-039.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1468,
    region_id: 4911,
    image_url: "https://static.pxl.ai/problem/images/JP-250.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1469,
    region_id: 3847,
    image_url: "https://static.pxl.ai/problem/images/JP-244.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1470,
    region_id: 3782,
    image_url: "https://static.pxl.ai/problem/images/KN-168.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1471,
    region_id: 1880,
    image_url: "https://static.pxl.ai/problem/images/SW-107.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1472,
    region_id: 3209,
    image_url: "https://static.pxl.ai/problem/images/PT-068.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1473,
    region_id: 2965,
    image_url: "https://static.pxl.ai/problem/images/SH-038.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1474,
    region_id: 1055,
    image_url: "https://static.pxl.ai/problem/images/SW-113.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1475,
    region_id: 1334,
    image_url: "https://static.pxl.ai/problem/images/SH-010.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1476,
    region_id: 1292,
    image_url: "https://static.pxl.ai/problem/images/JP-091.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1477,
    region_id: 3406,
    image_url: "https://static.pxl.ai/problem/images/PT-040.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1478,
    region_id: 1998,
    image_url: "https://static.pxl.ai/problem/images/CD-007.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1479,
    region_id: 4210,
    image_url: "https://static.pxl.ai/problem/images/SE-027.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1480,
    region_id: 3793,
    image_url: "https://static.pxl.ai/problem/images/PT-054.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1481,
    region_id: 4867,
    image_url: "https://static.pxl.ai/problem/images/SE-033.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1482,
    region_id: 2856,
    image_url: "https://static.pxl.ai/problem/images/CD-013.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1483,
    region_id: 4988,
    image_url: "https://static.pxl.ai/problem/images/JP-085.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1484,
    region_id: 4630,
    image_url: "https://static.pxl.ai/problem/images/SH-004.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1485,
    region_id: 2127,
    image_url: "https://static.pxl.ai/problem/images/CT-234.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1486,
    region_id: 4418,
    image_url: "https://static.pxl.ai/problem/images/JK-207.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "casual",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1487,
    region_id: 4056,
    image_url: "https://static.pxl.ai/problem/images/JK-213.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1488,
    region_id: 3876,
    image_url: "https://static.pxl.ai/problem/images/CT-220.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1489,
    region_id: 1559,
    image_url: "https://static.pxl.ai/problem/images/SK-138.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1490,
    region_id: 2635,
    image_url: "https://static.pxl.ai/problem/images/JP-052.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1491,
    region_id: 2814,
    image_url: "https://static.pxl.ai/problem/images/CT-208.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "chic",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1492,
    region_id: 4794,
    image_url: "https://static.pxl.ai/problem/images/SK-110.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1493,
    region_id: 2351,
    image_url: "https://static.pxl.ai/problem/images/PT-083.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1494,
    region_id: 2029,
    image_url: "https://static.pxl.ai/problem/images/PT-097.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1495,
    region_id: 1611,
    image_url: "https://static.pxl.ai/problem/images/SK-104.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1496,
    region_id: 2679,
    image_url: "https://static.pxl.ai/problem/images/JP-046.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1497,
    region_id: 2118,
    image_url: "https://static.pxl.ai/problem/images/SW-073.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1498,
    region_id: 3714,
    image_url: "https://static.pxl.ai/problem/images/PT-108.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1499,
    region_id: 1070,
    image_url: "https://static.pxl.ai/problem/images/SW-067.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1500,
    region_id: 2080,
    image_url: "https://static.pxl.ai/problem/images/BL-029.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1501,
    region_id: 4913,
    image_url: "https://static.pxl.ai/problem/images/BL-001.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1502,
    region_id: 4644,
    image_url: "https://static.pxl.ai/problem/images/PT-134.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1503,
    region_id: 4732,
    image_url: "https://static.pxl.ai/problem/images/PT-120.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1504,
    region_id: 2163,
    image_url: "https://static.pxl.ai/problem/images/BL-015.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1505,
    region_id: 2769,
    image_url: "https://static.pxl.ai/problem/images/SK-058.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1506,
    region_id: 3579,
    image_url: "https://static.pxl.ai/problem/images/KN-222.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1507,
    region_id: 1677,
    image_url: "https://static.pxl.ai/problem/images/JP-126.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1508,
    region_id: 4460,
    image_url: "https://static.pxl.ai/problem/images/SK-064.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1509,
    region_id: 3370,
    image_url: "https://static.pxl.ai/problem/images/SK-070.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1510,
    region_id: 4383,
    image_url: "https://static.pxl.ai/problem/images/SW-098.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1511,
    region_id: 1566,
    image_url: "https://static.pxl.ai/problem/images/JP-132.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1512,
    region_id: 3996,
    image_url: "https://static.pxl.ai/problem/images/OP-138.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1513,
    region_id: 1235,
    image_url: "https://static.pxl.ai/problem/images/CT-181.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1514,
    region_id: 4901,
    image_url: "https://static.pxl.ai/problem/images/CT-195.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1515,
    region_id: 1435,
    image_url: "https://static.pxl.ai/problem/images/OP-104.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1516,
    region_id: 2950,
    image_url: "https://static.pxl.ai/problem/images/OP-110.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1517,
    region_id: 1413,
    image_url: "https://static.pxl.ai/problem/images/KN-034.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1518,
    region_id: 2203,
    image_url: "https://static.pxl.ai/problem/images/JK-171.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1519,
    region_id: 3130,
    image_url: "https://static.pxl.ai/problem/images/CT-142.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1520,
    region_id: 2211,
    image_url: "https://static.pxl.ai/problem/images/CT-156.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1521,
    region_id: 3306,
    image_url: "https://static.pxl.ai/problem/images/JK-165.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1522,
    region_id: 3799,
    image_url: "https://static.pxl.ai/problem/images/KN-020.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1523,
    region_id: 3934,
    image_url: "https://static.pxl.ai/problem/images/KN-008.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1524,
    region_id: 4501,
    image_url: "https://static.pxl.ai/problem/images/JK-159.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1525,
    region_id: 4225,
    image_url: "https://static.pxl.ai/problem/images/JK-158.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1526,
    region_id: 1799,
    image_url: "https://static.pxl.ai/problem/images/KN-009.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1527,
    region_id: 1907,
    image_url: "https://static.pxl.ai/problem/images/CT-157.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1528,
    region_id: 1184,
    image_url: "https://static.pxl.ai/problem/images/KN-021.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1529,
    region_id: 2736,
    image_url: "https://static.pxl.ai/problem/images/JK-164.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1530,
    region_id: 2124,
    image_url: "https://static.pxl.ai/problem/images/JK-170.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1531,
    region_id: 3330,
    image_url: "https://static.pxl.ai/problem/images/KN-035.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1532,
    region_id: 1305,
    image_url: "https://static.pxl.ai/problem/images/CT-143.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1533,
    region_id: 1303,
    image_url: "https://static.pxl.ai/problem/images/OP-111.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1534,
    region_id: 1585,
    image_url: "https://static.pxl.ai/problem/images/OP-105.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "linen",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1535,
    region_id: 3083,
    image_url: "https://static.pxl.ai/problem/images/CT-194.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1536,
    region_id: 4788,
    image_url: "https://static.pxl.ai/problem/images/OP-139.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1537,
    region_id: 1201,
    image_url: "https://static.pxl.ai/problem/images/CT-180.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1538,
    region_id: 2238,
    image_url: "https://static.pxl.ai/problem/images/JP-133.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1539,
    region_id: 4474,
    image_url: "https://static.pxl.ai/problem/images/SW-099.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1540,
    region_id: 1967,
    image_url: "https://static.pxl.ai/problem/images/SK-071.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1541,
    region_id: 1936,
    image_url: "https://static.pxl.ai/problem/images/SK-065.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1542,
    region_id: 2845,
    image_url: "https://static.pxl.ai/problem/images/JP-127.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1543,
    region_id: 3482,
    image_url: "https://static.pxl.ai/problem/images/KN-223.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1544,
    region_id: 4883,
    image_url: "https://static.pxl.ai/problem/images/SK-059.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1545,
    region_id: 3211,
    image_url: "https://static.pxl.ai/problem/images/PT-121.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1546,
    region_id: 1482,
    image_url: "https://static.pxl.ai/problem/images/BL-014.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1547,
    region_id: 4172,
    image_url: "https://static.pxl.ai/problem/images/PT-135.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1548,
    region_id: 3208,
    image_url: "https://static.pxl.ai/problem/images/BL-028.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1549,
    region_id: 1941,
    image_url: "https://static.pxl.ai/problem/images/SW-066.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1550,
    region_id: 1405,
    image_url: "https://static.pxl.ai/problem/images/SW-072.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1551,
    region_id: 3854,
    image_url: "https://static.pxl.ai/problem/images/PT-109.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1552,
    region_id: 4027,
    image_url: "https://static.pxl.ai/problem/images/PT-096.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1553,
    region_id: 3293,
    image_url: "https://static.pxl.ai/problem/images/JP-047.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1554,
    region_id: 2974,
    image_url: "https://static.pxl.ai/problem/images/SK-105.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1555,
    region_id: 1672,
    image_url: "https://static.pxl.ai/problem/images/SK-111.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1556,
    region_id: 2870,
    image_url: "https://static.pxl.ai/problem/images/CT-209.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1557,
    region_id: 1898,
    image_url: "https://static.pxl.ai/problem/images/JP-053.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1558,
    region_id: 2922,
    image_url: "https://static.pxl.ai/problem/images/PT-082.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1559,
    region_id: 1262,
    image_url: "https://static.pxl.ai/problem/images/JK-212.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1560,
    region_id: 2765,
    image_url: "https://static.pxl.ai/problem/images/SK-139.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1561,
    region_id: 4493,
    image_url: "https://static.pxl.ai/problem/images/CT-221.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1562,
    region_id: 4788,
    image_url: "https://static.pxl.ai/problem/images/CT-235.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1563,
    region_id: 1343,
    image_url: "https://static.pxl.ai/problem/images/JK-206.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1564,
    region_id: 4560,
    image_url: "https://static.pxl.ai/problem/images/SE-032.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1565,
    region_id: 3010,
    image_url: "https://static.pxl.ai/problem/images/CD-012.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1566,
    region_id: 2477,
    image_url: "https://static.pxl.ai/problem/images/PT-055.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1567,
    region_id: 4929,
    image_url: "https://static.pxl.ai/problem/images/SH-005.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1568,
    region_id: 4954,
    image_url: "https://static.pxl.ai/problem/images/JP-084.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1569,
    region_id: 3397,
    image_url: "https://static.pxl.ai/problem/images/JP-090.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "denim",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1570,
    region_id: 1167,
    image_url: "https://static.pxl.ai/problem/images/SH-011.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1571,
    region_id: 2088,
    image_url: "https://static.pxl.ai/problem/images/CD-006.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1572,
    region_id: 3794,
    image_url: "https://static.pxl.ai/problem/images/SE-026.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1573,
    region_id: 3281,
    image_url: "https://static.pxl.ai/problem/images/PT-041.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1574,
    region_id: 2508,
    image_url: "https://static.pxl.ai/problem/images/PT-069.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1575,
    region_id: 3587,
    image_url: "https://static.pxl.ai/problem/images/SW-112.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1576,
    region_id: 3851,
    image_url: "https://static.pxl.ai/problem/images/SH-039.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1577,
    region_id: 1358,
    image_url: "https://static.pxl.ai/problem/images/SW-106.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1578,
    region_id: 2799,
    image_url: "https://static.pxl.ai/problem/images/BL-148.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1579,
    region_id: 3437,
    image_url: "https://static.pxl.ai/problem/images/JP-245.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1580,
    region_id: 1104,
    image_url: "https://static.pxl.ai/problem/images/KN-169.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1581,
    region_id: 3350,
    image_url: "https://static.pxl.ai/problem/images/JK-038.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1582,
    region_id: 4161,
    image_url: "https://static.pxl.ai/problem/images/JP-251.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1583,
    region_id: 2308,
    image_url: "https://static.pxl.ai/problem/images/JP-279.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1584,
    region_id: 2098,
    image_url: "https://static.pxl.ai/problem/images/CT-023.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1585,
    region_id: 4301,
    image_url: "https://static.pxl.ai/problem/images/KN-155.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1586,
    region_id: 1331,
    image_url: "https://static.pxl.ai/problem/images/JK-010.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1587,
    region_id: 4987,
    image_url: "https://static.pxl.ai/problem/images/JK-004.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1588,
    region_id: 2757,
    image_url: "https://static.pxl.ai/problem/images/KN-141.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "denim",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1589,
    region_id: 2488,
    image_url: "https://static.pxl.ai/problem/images/CT-037.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1590,
    region_id: 3502,
    image_url: "https://static.pxl.ai/problem/images/OP-065.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1591,
    region_id: 3467,
    image_url: "https://static.pxl.ai/problem/images/OP-071.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1592,
    region_id: 3565,
    image_url: "https://static.pxl.ai/problem/images/VT-018.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1593,
    region_id: 4298,
    image_url: "https://static.pxl.ai/problem/images/OP-059.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1594,
    region_id: 4497,
    image_url: "https://static.pxl.ai/problem/images/KN-196.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1595,
    region_id: 4203,
    image_url: "https://static.pxl.ai/problem/images/VT-030.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1596,
    region_id: 4013,
    image_url: "https://static.pxl.ai/problem/images/KN-182.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1597,
    region_id: 1459,
    image_url: "https://static.pxl.ai/problem/images/VT-024.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1598,
    region_id: 1296,
    image_url: "https://static.pxl.ai/problem/images/OP-075.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1599,
    region_id: 4381,
    image_url: "https://static.pxl.ai/problem/images/OP-061.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1600,
    region_id: 3810,
    image_url: "https://static.pxl.ai/problem/images/VT-008.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1601,
    region_id: 1197,
    image_url: "https://static.pxl.ai/problem/images/OP-049.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1602,
    region_id: 2229,
    image_url: "https://static.pxl.ai/problem/images/KN-186.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1603,
    region_id: 3052,
    image_url: "https://static.pxl.ai/problem/images/VT-020.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1604,
    region_id: 2991,
    image_url: "https://static.pxl.ai/problem/images/KN-192.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1605,
    region_id: 2310,
    image_url: "https://static.pxl.ai/problem/images/VT-034.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1606,
    region_id: 3575,
    image_url: "https://static.pxl.ai/problem/images/JP-255.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1607,
    region_id: 2312,
    image_url: "https://static.pxl.ai/problem/images/KN-179.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1608,
    region_id: 4249,
    image_url: "https://static.pxl.ai/problem/images/JK-028.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1609,
    region_id: 4587,
    image_url: "https://static.pxl.ai/problem/images/JP-241.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1610,
    region_id: 4703,
    image_url: "https://static.pxl.ai/problem/images/JP-269.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1611,
    region_id: 4381,
    image_url: "https://static.pxl.ai/problem/images/CT-033.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1612,
    region_id: 3330,
    image_url: "https://static.pxl.ai/problem/images/KN-145.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1613,
    region_id: 4617,
    image_url: "https://static.pxl.ai/problem/images/JK-014.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1614,
    region_id: 1141,
    image_url: "https://static.pxl.ai/problem/images/KN-151.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1615,
    region_id: 3703,
    image_url: "https://static.pxl.ai/problem/images/CT-027.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1616,
    region_id: 4912,
    image_url: "https://static.pxl.ai/problem/images/PT-045.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1617,
    region_id: 4952,
    image_url: "https://static.pxl.ai/problem/images/SE-022.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1618,
    region_id: 2981,
    image_url: "https://static.pxl.ai/problem/images/CD-002.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1619,
    region_id: 3801,
    image_url: "https://static.pxl.ai/problem/images/SH-015.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1620,
    region_id: 3954,
    image_url: "https://static.pxl.ai/problem/images/JP-094.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1621,
    region_id: 4504,
    image_url: "https://static.pxl.ai/problem/images/JP-080.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1622,
    region_id: 3039,
    image_url: "https://static.pxl.ai/problem/images/SH-001.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1623,
    region_id: 3440,
    image_url: "https://static.pxl.ai/problem/images/PT-051.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1624,
    region_id: 4194,
    image_url: "https://static.pxl.ai/problem/images/CD-016.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1625,
    region_id: 4650,
    image_url: "https://static.pxl.ai/problem/images/SE-036.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1626,
    region_id: 2820,
    image_url: "https://static.pxl.ai/problem/images/PT-079.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1627,
    region_id: 4603,
    image_url: "https://static.pxl.ai/problem/images/SH-029.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1628,
    region_id: 3406,
    image_url: "https://static.pxl.ai/problem/images/SW-102.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1629,
    region_id: 3341,
    image_url: "https://static.pxl.ai/problem/images/SW-116.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1630,
    region_id: 4388,
    image_url: "https://static.pxl.ai/problem/images/PT-086.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1631,
    region_id: 1320,
    image_url: "https://static.pxl.ai/problem/images/JP-057.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1632,
    region_id: 3539,
    image_url: "https://static.pxl.ai/problem/images/SK-115.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1633,
    region_id: 3986,
    image_url: "https://static.pxl.ai/problem/images/CT-219.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1634,
    region_id: 1219,
    image_url: "https://static.pxl.ai/problem/images/SK-101.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1635,
    region_id: 2988,
    image_url: "https://static.pxl.ai/problem/images/JP-043.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1636,
    region_id: 4328,
    image_url: "https://static.pxl.ai/problem/images/PT-092.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1637,
    region_id: 1926,
    image_url: "https://static.pxl.ai/problem/images/JK-202.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1638,
    region_id: 1268,
    image_url: "https://static.pxl.ai/problem/images/CT-231.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1639,
    region_id: 4474,
    image_url: "https://static.pxl.ai/problem/images/SK-129.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1640,
    region_id: 4033,
    image_url: "https://static.pxl.ai/problem/images/CT-225.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "casual",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1641,
    region_id: 1957,
    image_url: "https://static.pxl.ai/problem/images/JK-216.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "chic",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1642,
    region_id: 3073,
    image_url: "https://static.pxl.ai/problem/images/PT-131.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1643,
    region_id: 4694,
    image_url: "https://static.pxl.ai/problem/images/BL-004.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1644,
    region_id: 2767,
    image_url: "https://static.pxl.ai/problem/images/BL-010.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1645,
    region_id: 3101,
    image_url: "https://static.pxl.ai/problem/images/PT-125.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1646,
    region_id: 3887,
    image_url: "https://static.pxl.ai/problem/images/BL-038.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1647,
    region_id: 4774,
    image_url: "https://static.pxl.ai/problem/images/SW-076.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1648,
    region_id: 2343,
    image_url: "https://static.pxl.ai/problem/images/SW-062.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1649,
    region_id: 3957,
    image_url: "https://static.pxl.ai/problem/images/PT-119.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1650,
    region_id: 1968,
    image_url: "https://static.pxl.ai/problem/images/JP-123.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1651,
    region_id: 4666,
    image_url: "https://static.pxl.ai/problem/images/SK-061.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1652,
    region_id: 4904,
    image_url: "https://static.pxl.ai/problem/images/SW-089.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1653,
    region_id: 3905,
    image_url: "https://static.pxl.ai/problem/images/SK-075.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1654,
    region_id: 3967,
    image_url: "https://static.pxl.ai/problem/images/JP-137.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1655,
    region_id: 3556,
    image_url: "https://static.pxl.ai/problem/images/KN-233.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1656,
    region_id: 4128,
    image_url: "https://static.pxl.ai/problem/images/SK-049.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1657,
    region_id: 1480,
    image_url: "https://static.pxl.ai/problem/images/KN-227.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "denim",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1658,
    region_id: 3047,
    image_url: "https://static.pxl.ai/problem/images/OP-101.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1659,
    region_id: 3536,
    image_url: "https://static.pxl.ai/problem/images/OP-115.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1660,
    region_id: 3632,
    image_url: "https://static.pxl.ai/problem/images/CT-184.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1661,
    region_id: 4660,
    image_url: "https://static.pxl.ai/problem/images/OP-129.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1662,
    region_id: 1239,
    image_url: "https://static.pxl.ai/problem/images/CT-190.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1663,
    region_id: 1873,
    image_url: "https://static.pxl.ai/problem/images/JK-148.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1664,
    region_id: 2647,
    image_url: "https://static.pxl.ai/problem/images/KN-019.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1665,
    region_id: 2431,
    image_url: "https://static.pxl.ai/problem/images/CT-147.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1666,
    region_id: 4056,
    image_url: "https://static.pxl.ai/problem/images/KN-031.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1667,
    region_id: 1847,
    image_url: "https://static.pxl.ai/problem/images/JK-174.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1668,
    region_id: 1640,
    image_url: "https://static.pxl.ai/problem/images/JK-160.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1669,
    region_id: 2504,
    image_url: "https://static.pxl.ai/problem/images/KN-025.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1670,
    region_id: 3516,
    image_url: "https://static.pxl.ai/problem/images/CT-153.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "leather",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1671,
    region_id: 4339,
    image_url: "https://static.pxl.ai/problem/images/KN-024.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1672,
    region_id: 2133,
    image_url: "https://static.pxl.ai/problem/images/JK-161.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1673,
    region_id: 4311,
    image_url: "https://static.pxl.ai/problem/images/CT-152.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1674,
    region_id: 2733,
    image_url: "https://static.pxl.ai/problem/images/CT-146.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1675,
    region_id: 3251,
    image_url: "https://static.pxl.ai/problem/images/JK-175.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1676,
    region_id: 2302,
    image_url: "https://static.pxl.ai/problem/images/KN-030.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1677,
    region_id: 4909,
    image_url: "https://static.pxl.ai/problem/images/KN-018.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1678,
    region_id: 4688,
    image_url: "https://static.pxl.ai/problem/images/JK-149.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1679,
    region_id: 3601,
    image_url: "https://static.pxl.ai/problem/images/OP-128.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1680,
    region_id: 3685,
    image_url: "https://static.pxl.ai/problem/images/CT-191.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1681,
    region_id: 2670,
    image_url: "https://static.pxl.ai/problem/images/CT-185.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1682,
    region_id: 1395,
    image_url: "https://static.pxl.ai/problem/images/OP-114.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1683,
    region_id: 4578,
    image_url: "https://static.pxl.ai/problem/images/OP-100.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1684,
    region_id: 4223,
    image_url: "https://static.pxl.ai/problem/images/SK-048.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1685,
    region_id: 4776,
    image_url: "https://static.pxl.ai/problem/images/KN-226.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1686,
    region_id: 1700,
    image_url: "https://static.pxl.ai/problem/images/KN-232.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1687,
    region_id: 4307,
    image_url: "https://static.pxl.ai/problem/images/JP-136.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1688,
    region_id: 3613,
    image_url: "https://static.pxl.ai/problem/images/SK-074.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1689,
    region_id: 1692,
    image_url: "https://static.pxl.ai/problem/images/SW-088.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1690,
    region_id: 1673,
    image_url: "https://static.pxl.ai/problem/images/SK-060.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1691,
    region_id: 2778,
    image_url: "https://static.pxl.ai/problem/images/JP-122.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "none",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1692,
    region_id: 3889,
    image_url: "https://static.pxl.ai/problem/images/SW-063.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1693,
    region_id: 3939,
    image_url: "https://static.pxl.ai/problem/images/PT-118.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1694,
    region_id: 3154,
    image_url: "https://static.pxl.ai/problem/images/SW-077.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1695,
    region_id: 1241,
    image_url: "https://static.pxl.ai/problem/images/BL-039.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1696,
    region_id: 3482,
    image_url: "https://static.pxl.ai/problem/images/BL-011.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1697,
    region_id: 3528,
    image_url: "https://static.pxl.ai/problem/images/PT-124.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1698,
    region_id: 3347,
    image_url: "https://static.pxl.ai/problem/images/PT-130.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1699,
    region_id: 1175,
    image_url: "https://static.pxl.ai/problem/images/BL-005.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1700,
    region_id: 1995,
    image_url: "https://static.pxl.ai/problem/images/CT-224.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "none",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1701,
    region_id: 1206,
    image_url: "https://static.pxl.ai/problem/images/JK-217.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1702,
    region_id: 2425,
    image_url: "https://static.pxl.ai/problem/images/JK-203.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1703,
    region_id: 3474,
    image_url: "https://static.pxl.ai/problem/images/SK-128.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1704,
    region_id: 2932,
    image_url: "https://static.pxl.ai/problem/images/CT-230.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1705,
    region_id: 3678,
    image_url: "https://static.pxl.ai/problem/images/JP-042.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1706,
    region_id: 1687,
    image_url: "https://static.pxl.ai/problem/images/SK-100.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1707,
    region_id: 4429,
    image_url: "https://static.pxl.ai/problem/images/CT-218.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1708,
    region_id: 2050,
    image_url: "https://static.pxl.ai/problem/images/PT-093.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1709,
    region_id: 1120,
    image_url: "https://static.pxl.ai/problem/images/PT-087.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1710,
    region_id: 3593,
    image_url: "https://static.pxl.ai/problem/images/SK-114.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1711,
    region_id: 4592,
    image_url: "https://static.pxl.ai/problem/images/JP-056.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1712,
    region_id: 4896,
    image_url: "https://static.pxl.ai/problem/images/SW-117.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1713,
    region_id: 1578,
    image_url: "https://static.pxl.ai/problem/images/PT-078.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1714,
    region_id: 3096,
    image_url: "https://static.pxl.ai/problem/images/SW-103.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1715,
    region_id: 2805,
    image_url: "https://static.pxl.ai/problem/images/SH-028.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1716,
    region_id: 3465,
    image_url: "https://static.pxl.ai/problem/images/JP-081.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1717,
    region_id: 1275,
    image_url: "https://static.pxl.ai/problem/images/CD-017.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1718,
    region_id: 2188,
    image_url: "https://static.pxl.ai/problem/images/SE-037.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "leather",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1719,
    region_id: 3855,
    image_url: "https://static.pxl.ai/problem/images/PT-050.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1720,
    region_id: 3743,
    image_url: "https://static.pxl.ai/problem/images/SE-023.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1721,
    region_id: 3070,
    image_url: "https://static.pxl.ai/problem/images/CD-003.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1722,
    region_id: 4819,
    image_url: "https://static.pxl.ai/problem/images/PT-044.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1723,
    region_id: 4500,
    image_url: "https://static.pxl.ai/problem/images/JP-095.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "denim",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1724,
    region_id: 4043,
    image_url: "https://static.pxl.ai/problem/images/SH-014.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1725,
    region_id: 2200,
    image_url: "https://static.pxl.ai/problem/images/KN-150.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1726,
    region_id: 2336,
    image_url: "https://static.pxl.ai/problem/images/JK-015.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1727,
    region_id: 3235,
    image_url: "https://static.pxl.ai/problem/images/CT-026.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1728,
    region_id: 4491,
    image_url: "https://static.pxl.ai/problem/images/CT-032.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1729,
    region_id: 1803,
    image_url: "https://static.pxl.ai/problem/images/JP-268.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1730,
    region_id: 1392,
    image_url: "https://static.pxl.ai/problem/images/JK-001.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "none",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1731,
    region_id: 3178,
    image_url: "https://static.pxl.ai/problem/images/KN-144.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1732,
    region_id: 1609,
    image_url: "https://static.pxl.ai/problem/images/JK-029.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1733,
    region_id: 2100,
    image_url: "https://static.pxl.ai/problem/images/JP-240.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1734,
    region_id: 2614,
    image_url: "https://static.pxl.ai/problem/images/JP-254.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1735,
    region_id: 4921,
    image_url: "https://static.pxl.ai/problem/images/KN-178.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1736,
    region_id: 3074,
    image_url: "https://static.pxl.ai/problem/images/VT-035.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1737,
    region_id: 1356,
    image_url: "https://static.pxl.ai/problem/images/KN-193.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1738,
    region_id: 2634,
    image_url: "https://static.pxl.ai/problem/images/VT-021.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1739,
    region_id: 1141,
    image_url: "https://static.pxl.ai/problem/images/KN-187.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "denim",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1740,
    region_id: 3084,
    image_url: "https://static.pxl.ai/problem/images/OP-048.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1741,
    region_id: 1909,
    image_url: "https://static.pxl.ai/problem/images/VT-009.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1742,
    region_id: 1881,
    image_url: "https://static.pxl.ai/problem/images/OP-060.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1743,
    region_id: 1560,
    image_url: "https://static.pxl.ai/problem/images/OP-074.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1744,
    region_id: 3239,
    image_url: "https://static.pxl.ai/problem/images/OP-062.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1745,
    region_id: 2555,
    image_url: "https://static.pxl.ai/problem/images/OP-076.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1746,
    region_id: 3998,
    image_url: "https://static.pxl.ai/problem/images/KN-191.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1747,
    region_id: 4467,
    image_url: "https://static.pxl.ai/problem/images/VT-037.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1748,
    region_id: 2863,
    image_url: "https://static.pxl.ai/problem/images/KN-185.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "leather",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1749,
    region_id: 3266,
    image_url: "https://static.pxl.ai/problem/images/VT-023.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1750,
    region_id: 3633,
    image_url: "https://static.pxl.ai/problem/images/JP-242.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1751,
    region_id: 4430,
    image_url: "https://static.pxl.ai/problem/images/CT-018.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1752,
    region_id: 2029,
    image_url: "https://static.pxl.ai/problem/images/JP-256.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1753,
    region_id: 3152,
    image_url: "https://static.pxl.ai/problem/images/CT-024.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1754,
    region_id: 3910,
    image_url: "https://static.pxl.ai/problem/images/JK-017.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1755,
    region_id: 3195,
    image_url: "https://static.pxl.ai/problem/images/KN-152.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "formal",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1756,
    region_id: 1925,
    image_url: "https://static.pxl.ai/problem/images/KN-146.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1757,
    region_id: 3550,
    image_url: "https://static.pxl.ai/problem/images/JK-003.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1758,
    region_id: 2104,
    image_url: "https://static.pxl.ai/problem/images/OP-089.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1759,
    region_id: 4473,
    image_url: "https://static.pxl.ai/problem/images/CT-030.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1760,
    region_id: 1109,
    image_url: "https://static.pxl.ai/problem/images/SE-035.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1761,
    region_id: 1795,
    image_url: "https://static.pxl.ai/problem/images/CD-015.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1762,
    region_id: 1925,
    image_url: "https://static.pxl.ai/problem/images/PT-052.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "linen",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1763,
    region_id: 3874,
    image_url: "https://static.pxl.ai/problem/images/JP-083.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1764,
    region_id: 3598,
    image_url: "https://static.pxl.ai/problem/images/SH-002.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1765,
    region_id: 3829,
    image_url: "https://static.pxl.ai/problem/images/SW-129.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1766,
    region_id: 2496,
    image_url: "https://static.pxl.ai/problem/images/SH-016.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1767,
    region_id: 2224,
    image_url: "https://static.pxl.ai/problem/images/JP-097.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1768,
    region_id: 3261,
    image_url: "https://static.pxl.ai/problem/images/CD-001.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1769,
    region_id: 2509,
    image_url: "https://static.pxl.ai/problem/images/SE-021.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1770,
    region_id: 1575,
    image_url: "https://static.pxl.ai/problem/images/PT-046.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1771,
    region_id: 1060,
    image_url: "https://static.pxl.ai/problem/images/SE-009.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1772,
    region_id: 4117,
    image_url: "https://static.pxl.ai/problem/images/CD-029.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1773,
    region_id: 1390,
    image_url: "https://static.pxl.ai/problem/images/SW-115.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1774,
    region_id: 3842,
    image_url: "https://static.pxl.ai/problem/images/SW-101.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1775,
    region_id: 1295,
    image_url: "https://static.pxl.ai/problem/images/JK-229.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1776,
    region_id: 1983,
    image_url: "https://static.pxl.ai/problem/images/PT-091.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1777,
    region_id: 2975,
    image_url: "https://static.pxl.ai/problem/images/SK-102.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1778,
    region_id: 2643,
    image_url: "https://static.pxl.ai/problem/images/JP-040.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "none",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1779,
    region_id: 3873,
    image_url: "https://static.pxl.ai/problem/images/JP-054.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1780,
    region_id: 4073,
    image_url: "https://static.pxl.ai/problem/images/SK-116.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1781,
    region_id: 4811,
    image_url: "https://static.pxl.ai/problem/images/PT-085.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1782,
    region_id: 1824,
    image_url: "https://static.pxl.ai/problem/images/JK-215.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1783,
    region_id: 1107,
    image_url: "https://static.pxl.ai/problem/images/CT-226.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1784,
    region_id: 2989,
    image_url: "https://static.pxl.ai/problem/images/CT-232.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1785,
    region_id: 4650,
    image_url: "https://static.pxl.ai/problem/images/JP-068.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1786,
    region_id: 4515,
    image_url: "https://static.pxl.ai/problem/images/JK-201.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1787,
    region_id: 4303,
    image_url: "https://static.pxl.ai/problem/images/PT-126.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1788,
    region_id: 1540,
    image_url: "https://static.pxl.ai/problem/images/BL-013.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1789,
    region_id: 1545,
    image_url: "https://static.pxl.ai/problem/images/SW-049.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1790,
    region_id: 2972,
    image_url: "https://static.pxl.ai/problem/images/BL-007.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1791,
    region_id: 1893,
    image_url: "https://static.pxl.ai/problem/images/PT-132.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1792,
    region_id: 4600,
    image_url: "https://static.pxl.ai/problem/images/SW-061.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1793,
    region_id: 1615,
    image_url: "https://static.pxl.ai/problem/images/SK-089.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1794,
    region_id: 3185,
    image_url: "https://static.pxl.ai/problem/images/SW-075.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1795,
    region_id: 3856,
    image_url: "https://static.pxl.ai/problem/images/CD-149.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1796,
    region_id: 1692,
    image_url: "https://static.pxl.ai/problem/images/KN-218.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1797,
    region_id: 2617,
    image_url: "https://static.pxl.ai/problem/images/SK-076.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1798,
    region_id: 2751,
    image_url: "https://static.pxl.ai/problem/images/JP-134.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1799,
    region_id: 2038,
    image_url: "https://static.pxl.ai/problem/images/JP-120.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "formal",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1800,
    region_id: 2633,
    image_url: "https://static.pxl.ai/problem/images/SK-062.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1801,
    region_id: 3135,
    image_url: "https://static.pxl.ai/problem/images/KN-224.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1802,
    region_id: 1384,
    image_url: "https://static.pxl.ai/problem/images/JP-108.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1803,
    region_id: 2474,
    image_url: "https://static.pxl.ai/problem/images/KN-230.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1804,
    region_id: 4061,
    image_url: "https://static.pxl.ai/problem/images/OP-116.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1805,
    region_id: 1828,
    image_url: "https://static.pxl.ai/problem/images/OP-102.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1806,
    region_id: 2309,
    image_url: "https://static.pxl.ai/problem/images/JK-188.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1807,
    region_id: 1910,
    image_url: "https://static.pxl.ai/problem/images/CT-193.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1808,
    region_id: 1429,
    image_url: "https://static.pxl.ai/problem/images/CT-187.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1809,
    region_id: 1623,
    image_url: "https://static.pxl.ai/problem/images/CT-178.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1810,
    region_id: 4893,
    image_url: "https://static.pxl.ai/problem/images/CT-150.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1811,
    region_id: 2919,
    image_url: "https://static.pxl.ai/problem/images/JK-163.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1812,
    region_id: 1088,
    image_url: "https://static.pxl.ai/problem/images/KN-026.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1813,
    region_id: 4810,
    image_url: "https://static.pxl.ai/problem/images/KN-032.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1814,
    region_id: 3786,
    image_url: "https://static.pxl.ai/problem/images/JK-177.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1815,
    region_id: 1593,
    image_url: "https://static.pxl.ai/problem/images/CT-144.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1816,
    region_id: 2328,
    image_url: "https://static.pxl.ai/problem/images/JK-176.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1817,
    region_id: 1071,
    image_url: "https://static.pxl.ai/problem/images/KN-033.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1818,
    region_id: 1339,
    image_url: "https://static.pxl.ai/problem/images/CT-145.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1819,
    region_id: 3814,
    image_url: "https://static.pxl.ai/problem/images/CT-151.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "fur",
      },
      {
        sense: "casual",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1820,
    region_id: 1257,
    image_url: "https://static.pxl.ai/problem/images/KN-027.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1821,
    region_id: 1342,
    image_url: "https://static.pxl.ai/problem/images/JK-162.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "linen",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1822,
    region_id: 3143,
    image_url: "https://static.pxl.ai/problem/images/CT-179.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1823,
    region_id: 4699,
    image_url: "https://static.pxl.ai/problem/images/CT-186.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1824,
    region_id: 2017,
    image_url: "https://static.pxl.ai/problem/images/CT-192.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1825,
    region_id: 3769,
    image_url: "https://static.pxl.ai/problem/images/JK-189.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1826,
    region_id: 1872,
    image_url: "https://static.pxl.ai/problem/images/OP-103.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1827,
    region_id: 2192,
    image_url: "https://static.pxl.ai/problem/images/OP-117.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1828,
    region_id: 1871,
    image_url: "https://static.pxl.ai/problem/images/KN-231.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1829,
    region_id: 1928,
    image_url: "https://static.pxl.ai/problem/images/KN-225.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1830,
    region_id: 2484,
    image_url: "https://static.pxl.ai/problem/images/JP-109.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1831,
    region_id: 1689,
    image_url: "https://static.pxl.ai/problem/images/SK-063.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1832,
    region_id: 4844,
    image_url: "https://static.pxl.ai/problem/images/JP-121.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1833,
    region_id: 1171,
    image_url: "https://static.pxl.ai/problem/images/KN-219.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1834,
    region_id: 3926,
    image_url: "https://static.pxl.ai/problem/images/JP-135.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1835,
    region_id: 2128,
    image_url: "https://static.pxl.ai/problem/images/SK-077.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1836,
    region_id: 2894,
    image_url: "https://static.pxl.ai/problem/images/SW-074.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "none",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1837,
    region_id: 3200,
    image_url: "https://static.pxl.ai/problem/images/CD-148.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1838,
    region_id: 1341,
    image_url: "https://static.pxl.ai/problem/images/SK-088.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1839,
    region_id: 1816,
    image_url: "https://static.pxl.ai/problem/images/SW-060.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1840,
    region_id: 4701,
    image_url: "https://static.pxl.ai/problem/images/BL-006.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1841,
    region_id: 2987,
    image_url: "https://static.pxl.ai/problem/images/SW-048.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1842,
    region_id: 4763,
    image_url: "https://static.pxl.ai/problem/images/PT-133.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1843,
    region_id: 4665,
    image_url: "https://static.pxl.ai/problem/images/PT-127.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1844,
    region_id: 2419,
    image_url: "https://static.pxl.ai/problem/images/BL-012.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "denim",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1845,
    region_id: 4640,
    image_url: "https://static.pxl.ai/problem/images/JP-069.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1846,
    region_id: 3141,
    image_url: "https://static.pxl.ai/problem/images/CT-233.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1847,
    region_id: 3683,
    image_url: "https://static.pxl.ai/problem/images/JK-200.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1848,
    region_id: 3876,
    image_url: "https://static.pxl.ai/problem/images/JK-214.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1849,
    region_id: 1625,
    image_url: "https://static.pxl.ai/problem/images/CT-227.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1850,
    region_id: 4202,
    image_url: "https://static.pxl.ai/problem/images/SK-117.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1851,
    region_id: 2420,
    image_url: "https://static.pxl.ai/problem/images/JP-055.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1852,
    region_id: 1368,
    image_url: "https://static.pxl.ai/problem/images/PT-084.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1853,
    region_id: 4198,
    image_url: "https://static.pxl.ai/problem/images/PT-090.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1854,
    region_id: 1977,
    image_url: "https://static.pxl.ai/problem/images/JK-228.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1855,
    region_id: 3095,
    image_url: "https://static.pxl.ai/problem/images/JP-041.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1856,
    region_id: 3688,
    image_url: "https://static.pxl.ai/problem/images/SK-103.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1857,
    region_id: 1538,
    image_url: "https://static.pxl.ai/problem/images/SW-100.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1858,
    region_id: 4030,
    image_url: "https://static.pxl.ai/problem/images/SE-008.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1859,
    region_id: 2815,
    image_url: "https://static.pxl.ai/problem/images/CD-028.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1860,
    region_id: 1298,
    image_url: "https://static.pxl.ai/problem/images/SW-114.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1861,
    region_id: 4789,
    image_url: "https://static.pxl.ai/problem/images/JP-096.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "chic",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1862,
    region_id: 4203,
    image_url: "https://static.pxl.ai/problem/images/SH-017.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1863,
    region_id: 2244,
    image_url: "https://static.pxl.ai/problem/images/PT-047.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1864,
    region_id: 1553,
    image_url: "https://static.pxl.ai/problem/images/SE-020.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "chic",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1865,
    region_id: 3503,
    image_url: "https://static.pxl.ai/problem/images/PT-053.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1866,
    region_id: 1894,
    image_url: "https://static.pxl.ai/problem/images/SE-034.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1867,
    region_id: 3664,
    image_url: "https://static.pxl.ai/problem/images/CD-014.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "linen",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1868,
    region_id: 4329,
    image_url: "https://static.pxl.ai/problem/images/SW-128.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1869,
    region_id: 4176,
    image_url: "https://static.pxl.ai/problem/images/SH-003.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1870,
    region_id: 2116,
    image_url: "https://static.pxl.ai/problem/images/JP-082.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "denim",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1871,
    region_id: 3031,
    image_url: "https://static.pxl.ai/problem/images/OP-088.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1872,
    region_id: 4589,
    image_url: "https://static.pxl.ai/problem/images/JK-002.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1873,
    region_id: 3474,
    image_url: "https://static.pxl.ai/problem/images/KN-147.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "fur",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1874,
    region_id: 1330,
    image_url: "https://static.pxl.ai/problem/images/CT-031.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1875,
    region_id: 1788,
    image_url: "https://static.pxl.ai/problem/images/CT-025.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1876,
    region_id: 4637,
    image_url: "https://static.pxl.ai/problem/images/KN-153.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "date",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1877,
    region_id: 1577,
    image_url: "https://static.pxl.ai/problem/images/JK-016.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1878,
    region_id: 3312,
    image_url: "https://static.pxl.ai/problem/images/JP-257.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1879,
    region_id: 3436,
    image_url: "https://static.pxl.ai/problem/images/CT-019.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1880,
    region_id: 4595,
    image_url: "https://static.pxl.ai/problem/images/JP-243.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1881,
    region_id: 3087,
    image_url: "https://static.pxl.ai/problem/images/VT-022.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1882,
    region_id: 1249,
    image_url: "https://static.pxl.ai/problem/images/KN-184.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1883,
    region_id: 3648,
    image_url: "https://static.pxl.ai/problem/images/VT-036.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1884,
    region_id: 4335,
    image_url: "https://static.pxl.ai/problem/images/KN-190.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "summer",
      },
      {
        occasion: "school",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1885,
    region_id: 3580,
    image_url: "https://static.pxl.ai/problem/images/OP-077.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1886,
    region_id: 3484,
    image_url: "https://static.pxl.ai/problem/images/JP-280.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1887,
    region_id: 1148,
    image_url: "https://static.pxl.ai/problem/images/OP-063.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1888,
    region_id: 2550,
    image_url: "https://static.pxl.ai/problem/images/CT-081.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1889,
    region_id: 4605,
    image_url: "https://static.pxl.ai/problem/images/OP-038.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "linen",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1890,
    region_id: 3310,
    image_url: "https://static.pxl.ai/problem/images/VT-051.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "none",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1891,
    region_id: 1042,
    image_url: "https://static.pxl.ai/problem/images/VT-045.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "winter",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1892,
    region_id: 1382,
    image_url: "https://static.pxl.ai/problem/images/CT-095.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1893,
    region_id: 4008,
    image_url: "https://static.pxl.ai/problem/images/OP-004.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "leather",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1894,
    region_id: 4248,
    image_url: "https://static.pxl.ai/problem/images/OP-010.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "chic",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.onepiece", "c2.dresses", ""],
  },
  {
    product_code: 1895,
    region_id: 2658,
    image_url: "https://static.pxl.ai/problem/images/PT-222.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "suede/velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1896,
    region_id: 3813,
    image_url: "https://static.pxl.ai/problem/images/VT-079.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1897,
    region_id: 3573,
    image_url: "https://static.pxl.ai/problem/images/JP-218.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "school",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1898,
    region_id: 3279,
    image_url: "https://static.pxl.ai/problem/images/CT-042.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1899,
    region_id: 4238,
    image_url: "https://static.pxl.ai/problem/images/VT-092.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "spring",
      },
      {
        occasion: "date",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1900,
    region_id: 1404,
    image_url: "https://static.pxl.ai/problem/images/KN-134.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "leather",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1901,
    region_id: 4230,
    image_url: "https://static.pxl.ai/problem/images/JK-071.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1902,
    region_id: 1469,
    image_url: "https://static.pxl.ai/problem/images/JK-065.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "chic",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1903,
    region_id: 3675,
    image_url: "https://static.pxl.ai/problem/images/VT-086.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "elegant_or_luxury",
      },
      {
        season: "winter",
      },
      {
        occasion: "school",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "chic",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.vests"],
  },
  {
    product_code: 1904,
    region_id: 3647,
    image_url: "https://static.pxl.ai/problem/images/KN-120.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1905,
    region_id: 3490,
    image_url: "https://static.pxl.ai/problem/images/CT-056.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1906,
    region_id: 1692,
    image_url: "https://static.pxl.ai/problem/images/JP-224.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "formal",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1907,
    region_id: 1770,
    image_url: "https://static.pxl.ai/problem/images/KN-108.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1908,
    region_id: 4889,
    image_url: "https://static.pxl.ai/problem/images/JK-059.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon/silk",
      },
      {
        sense: "formal",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1909,
    region_id: 2330,
    image_url: "https://static.pxl.ai/problem/images/JP-230.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "linen",
      },
      {
        sense: "chic",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1910,
    region_id: 3814,
    image_url: "https://static.pxl.ai/problem/images/PT-008.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1911,
    region_id: 3158,
    image_url: "https://static.pxl.ai/problem/images/SH-058.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "manish_or_tomboy",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1912,
    region_id: 3055,
    image_url: "https://static.pxl.ai/problem/images/CT-283.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1913,
    region_id: 4032,
    image_url: "https://static.pxl.ai/problem/images/CT-297.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1914,
    region_id: 3243,
    image_url: "https://static.pxl.ai/problem/images/BL-129.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1915,
    region_id: 1215,
    image_url: "https://static.pxl.ai/problem/images/PT-034.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "leather",
      },
      {
        sense: "casual",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1916,
    region_id: 1846,
    image_url: "https://static.pxl.ai/problem/images/SE-053.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1917,
    region_id: 2041,
    image_url: "https://static.pxl.ai/problem/images/CD-073.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1918,
    region_id: 1472,
    image_url: "https://static.pxl.ai/problem/images/SH-064.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1919,
    region_id: 2249,
    image_url: "https://static.pxl.ai/problem/images/BL-101.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "casual",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1920,
    region_id: 4557,
    image_url: "https://static.pxl.ai/problem/images/BL-115.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1921,
    region_id: 3585,
    image_url: "https://static.pxl.ai/problem/images/SH-070.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1922,
    region_id: 2186,
    image_url: "https://static.pxl.ai/problem/images/PT-020.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "casual",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1923,
    region_id: 4964,
    image_url: "https://static.pxl.ai/problem/images/CD-067.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "retro_or_vintage",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1924,
    region_id: 3339,
    image_url: "https://static.pxl.ai/problem/images/SE-047.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1925,
    region_id: 2650,
    image_url: "https://static.pxl.ai/problem/images/JK-298.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1926,
    region_id: 4379,
    image_url: "https://static.pxl.ai/problem/images/JK-273.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "formal",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1927,
    region_id: 3774,
    image_url: "https://static.pxl.ai/problem/images/CT-240.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "none",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1928,
    region_id: 1904,
    image_url: "https://static.pxl.ai/problem/images/SK-158.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "none",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1929,
    region_id: 4576,
    image_url: "https://static.pxl.ai/problem/images/CT-254.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1930,
    region_id: 4212,
    image_url: "https://static.pxl.ai/problem/images/CD-098.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "leather",
      },
      {
        sense: "casual",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1931,
    region_id: 3183,
    image_url: "https://static.pxl.ai/problem/images/JK-267.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1932,
    region_id: 3165,
    image_url: "https://static.pxl.ai/problem/images/SE-090.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "winter",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1933,
    region_id: 4648,
    image_url: "https://static.pxl.ai/problem/images/JP-026.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1934,
    region_id: 3671,
    image_url: "https://static.pxl.ai/problem/images/SK-164.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "punk_or_rock",
      },
      {
        season: "summer",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1935,
    region_id: 2195,
    image_url: "https://static.pxl.ai/problem/images/CT-268.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "lace/mesh",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1936,
    region_id: 3001,
    image_url: "https://static.pxl.ai/problem/images/SK-170.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "winter",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "geometry",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1937,
    region_id: 3231,
    image_url: "https://static.pxl.ai/problem/images/JP-032.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1938,
    region_id: 4870,
    image_url: "https://static.pxl.ai/problem/images/SE-084.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "fur",
      },
      {
        sense: "sexy",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1939,
    region_id: 3673,
    image_url: "https://static.pxl.ai/problem/images/BL-049.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1940,
    region_id: 2655,
    image_url: "https://static.pxl.ai/problem/images/SW-007.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "denim",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1941,
    region_id: 1399,
    image_url: "https://static.pxl.ai/problem/images/SW-013.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "polyester",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.sweater"],
  },
  {
    product_code: 1942,
    region_id: 1063,
    image_url: "https://static.pxl.ai/problem/images/PT-168.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "spring",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "linen",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1943,
    region_id: 2498,
    image_url: "https://static.pxl.ai/problem/images/PT-140.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "lounge",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1944,
    region_id: 2616,
    image_url: "https://static.pxl.ai/problem/images/CD-107.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "lace_or_mesh",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1945,
    region_id: 3625,
    image_url: "https://static.pxl.ai/problem/images/SE-127.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "preppy",
      },
      {
        season: "winter",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "none",
      },
    ],
    category_names: ["c1.shoes", "c2.shoes", ""],
  },
  {
    product_code: 1946,
    region_id: 1266,
    image_url: "https://static.pxl.ai/problem/images/SH-110.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "summer",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "leather",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unsupported",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1947,
    region_id: 4754,
    image_url: "https://static.pxl.ai/problem/images/JP-191.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "winter",
      },
      {
        fabric: "sequin_or_spangle",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1948,
    region_id: 2588,
    image_url: "https://static.pxl.ai/problem/images/BL-075.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "bohemian_or_ethnic_or_hippie",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "sequin/spangle",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1949,
    region_id: 2304,
    image_url: "https://static.pxl.ai/problem/images/JP-185.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit/angora",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "paisley",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1950,
    region_id: 1763,
    image_url: "https://static.pxl.ai/problem/images/BL-061.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.blouses"],
  },
  {
    product_code: 1951,
    region_id: 2788,
    image_url: "https://static.pxl.ai/problem/images/SH-104.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "formal",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "sportive",
      },
      {
        pattern: "flower",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.shirts"],
  },
  {
    product_code: 1952,
    region_id: 2560,
    image_url: "https://static.pxl.ai/problem/images/PT-154.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "classic",
      },
      {
        season: "spring",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "casual",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1953,
    region_id: 1153,
    image_url: "https://static.pxl.ai/problem/images/CD-113.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "spring",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outerwears", "c3.cardigans"],
  },
  {
    product_code: 1954,
    region_id: 4757,
    image_url: "https://static.pxl.ai/problem/images/JK-307.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "night_out",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "chic",
      },
      {
        pattern: "check",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.jackets"],
  },
  {
    product_code: 1955,
    region_id: 3064,
    image_url: "https://static.pxl.ai/problem/images/SK-038.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "spring",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "tweed",
      },
      {
        sense: "unsupported",
      },
      {
        pattern: "ethnic",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1956,
    region_id: 1190,
    image_url: "https://static.pxl.ai/problem/images/PT-183.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "basic_or_minimal_or_normcore",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "cotton",
      },
      {
        sense: "formal",
      },
      {
        pattern: "plain",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1957,
    region_id: 2047,
    image_url: "https://static.pxl.ai/problem/images/JP-152.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "summer",
      },
      {
        occasion: "unknown",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "dot",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1958,
    region_id: 4509,
    image_url: "https://static.pxl.ai/problem/images/SK-010.jpg",
    gender: "gender.unisex",
    attributes: [
      {
        style: "trendy",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "knit_or_angora",
      },
      {
        sense: "formal",
      },
      {
        pattern: "camouflage",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1959,
    region_id: 1413,
    image_url: "https://static.pxl.ai/problem/images/CT-308.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "cute",
      },
      {
        season: "autumn",
      },
      {
        occasion: "date",
      },
      {
        fabric: "leather",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "leopard",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.coats"],
  },
  {
    product_code: 1960,
    region_id: 1135,
    image_url: "https://static.pxl.ai/problem/images/SK-004.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "feminine_or_romantic",
      },
      {
        season: "autumn",
      },
      {
        occasion: "gym_or_outdoor",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "feminine",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.bottoms", "c2.skirts", "c3.skirts"],
  },
  {
    product_code: 1961,
    region_id: 1225,
    image_url: "https://static.pxl.ai/problem/images/JP-146.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "chic_or_modern_or_urban_or_sophisticated",
      },
      {
        season: "autumn",
      },
      {
        occasion: "summer",
      },
      {
        fabric: "unknown",
      },
      {
        sense: "lovely",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.outwears", "c3.outer"],
  },
  {
    product_code: 1962,
    region_id: 4039,
    image_url: "https://static.pxl.ai/problem/images/PT-197.jpg",
    gender: "gender.female",
    attributes: [
      {
        style: "unknown",
      },
      {
        season: "autumn",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "unsupported",
      },
      {
        sense: "unknown",
      },
      {
        pattern: "stripe",
      },
    ],
    category_names: ["c1.bottoms", "c2.pants", "c3.pants"],
  },
  {
    product_code: 1963,
    region_id: 2427,
    image_url: "https://static.pxl.ai/problem/images/KN-083.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "sexy",
      },
      {
        season: "spring",
      },
      {
        occasion: "festival",
      },
      {
        fabric: "suede_or_velvet",
      },
      {
        sense: "luxury",
      },
      {
        pattern: "print",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1964,
    region_id: 1012,
    image_url: "https://static.pxl.ai/problem/images/KN-097.jpg",
    gender: "gender.male",
    attributes: [
      {
        style: "casual_or_comfy",
      },
      {
        season: "summer",
      },
      {
        occasion: "spring_or_fall",
      },
      {
        fabric: "chiffon_or_silk",
      },
      {
        sense: "casual",
      },
      {
        pattern: "unknown",
      },
    ],
    category_names: ["c1.tops", "c2.tops", "c3.knitwear"],
  },
  {
    product_code: 1965,
    region_id: 2917,
    image_url: "https://static.pxl.ai/problem/images/OP-158.jpg",
    gender: "gender.unisex",
    attributes: [
      {
      },
  },