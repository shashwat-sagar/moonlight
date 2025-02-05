 const dessert = [
  { id: 1, label: "Rasgulla" },
  { id: 2, label: "Jalebi with Rabdi" },
  { id: 3, label: "Fruit Truffle" },
  { id: 4, label: "Malpua with Rabdi" },
];
 const breakfastVeg = [
  { id: 1, label: "Bread n Butter with Jam" },
  { id: 2, label: "Bread Pakoda" },
  { id: 3, label: "Aloo Paratha" },
  { id: 4, label: "Gobhi Paratha" },
  { id: 5, label: "Veg Sandwich" },
  { id: 6, label: "Chole Bhature" },
  { id: 7, label: "Dosa" },
  { id: 8, label: "Idli Sambhar" },
  { id: 9, label: "Medu Wada Sambhar" },
  { id: 10, label: "Aloo Poha" },
  { id: 11, label: "Jalebi" },
  { id: 12, label: "Upma" },
  { id: 13, label: "Puri with Aloo Mutter" },
];
 const breakfastNonVeg = [
  { id: 1, label: "Chicken Sandwich" },
  { id: 2, label: "Boiled Egg" },
  { id: 3, label: "Egg Bhurji" },
  { id: 4, label: "Omelette" },
  { id: 5, label: "Keema Kaleji" },
  { id: 6, label: "Keema Samosa" },
  { id: 7, label: "Paya with Shorba" },
];
 const breadAndRice = [
  { id: 1, label: "Tandoori Butter Naan" },
  { id: 2, label: "Tandoori Roti" },
  { id: 3, label: "Tawa Roti" },
  { id: 4, label: "Missi Roti" },
  { id: 5, label: "Jeera Onion Pulao" },
  { id: 6, label: "Green Peas Pulao" },
  { id: 7, label: "Kashmiri Pulao" },
];
 const nonVegStarter = [
  { id: 1, label: "Seekh Kebab" },
  { id: 2, label: "Boti Kebab" },
  { id: 3, label: "Mutton Seekh Tikka" },
  { id: 4, label: "Chicken Roll" },
];
 const beverages = [
  { id: 1, label: "Mocktail" },
  { id: 2, label: "Kadhai Doodh" },
  { id: 3, label: "Tea" },
  { id: 4, label: "Coffee" },
];
 const vegSnacksAndStarter = [
  { id: 1, label: "Veg Bullet" },
  { id: 2, label: "Hara Bhara Kebab" },
  { id: 3, label: "Gupchup" },
  { id: 4, label: "Aloo Tikki Chaat" },
  { id: 5, label: "Sweet Corn Chaat" },
  { id: 6, label: "Dahi Bhalla Chaat" },
  { id: 7, label: "Dry Fruit Chaat" },
];
 const chinese = [
  { id: 1, label: "Paneer Chilly" },
  { id: 2, label: "Veg Chowmein" },
];
 const vegMainCourse = [
  { id: 1, label: "Paneer Mughlai" },
  { id: 2, label: "Dabhai Paneer" },
  { id: 3, label: "Paneer Tikka Masala" },
  { id: 4, label: "Veg Jalfrezi" },
  { id: 5, label: "Aloo Methi" },
  { id: 6, label: "Veg Nargisi Kofta" },
];
const nonVegMainCourse = [
  {
    id: 1,
    label: "Chicken Korma",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZuBfkGLl0CSezto3NkDAYIyIveNScZkQz6Fyb_n-90H9PO0rutJl0v3Vu3PO1uaXTkg7OZpHm7py3qPGvQbrIqzyHTj_qOR2TdtRyD7LGdQ",
  },
  {
    id: 2,
    label: "Bhuna Gosht",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZuBfkGLl0CSezto3NkDAYIyIveNScZkQz6Fyb_n-90H9PO0rutJl0v3Vu3PO1uaXTkg7OZpHm7py3qPGvQbrIqzyHTj_qOR2TdtRyD7LGdQ",
  },
  {
    id: 3,
    label: "Mutton Mughlai Korma",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZuBfkGLl0CSezto3NkDAYIyIveNScZkQz6Fyb_n-90H9PO0rutJl0v3Vu3PO1uaXTkg7OZpHm7py3qPGvQbrIqzyHTj_qOR2TdtRyD7LGdQ",
  },
  {
    id: 4,
    label: "Chicken Biryani",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZuBfkGLl0CSezto3NkDAYIyIveNScZkQz6Fyb_n-90H9PO0rutJl0v3Vu3PO1uaXTkg7OZpHm7py3qPGvQbrIqzyHTj_qOR2TdtRyD7LGdQ",
  },
  {
    id: 5,
    label: "Mutton Biryani",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZuBfkGLl0CSezto3NkDAYIyIveNScZkQz6Fyb_n-90H9PO0rutJl0v3Vu3PO1uaXTkg7OZpHm7py3qPGvQbrIqzyHTj_qOR2TdtRyD7LGdQ",
  },
  {
    id: 6,
    label: "Prawns Biryani",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZuBfkGLl0CSezto3NkDAYIyIveNScZkQz6Fyb_n-90H9PO0rutJl0v3Vu3PO1uaXTkg7OZpHm7py3qPGvQbrIqzyHTj_qOR2TdtRyD7LGdQ",
  },
];
