import { Properties } from "./interfaces";

export const properties: Properties[] = [
  {
    image: "..cottage-finder/images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "Shack 37",
      city: "Bogota",
      postcode: 45632,
      country: "Colombia",
    },
    contact: [1123495082908, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "..cottage-finder/images/poland-property.jpg",
    title: "Polish Cottage",
    price: 30,
    location: {
      firstLine: "No 23",
      city: "Gdansk",
      postcode: 343903,
      country: "Poland",
    },
    contact: [1123495082908, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "..cottage-finder/images/london-property.jpg",
    title: "London Flat",
    price: 25,
    location: {
      firstLine: "Flat 15",
      city: "London",
      postcode: 35433,
      country: "England",
    },
    contact: [1123495082908, "michaeldavis@hotmail.com"],
    isAvailable: true,
  },
];
