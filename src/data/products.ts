export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "Bilder" | "Kissen" | "Kleidung" | "Accessoires";
  stripePriceId: string;
  featured: boolean;
}

const base = "/monika-stitch/";

export const products: Product[] = [
  {
    id: "blumen-stickbild",
    name: "Blumen Stickbild",
    description: "Handgestickte Blumenkomposition im Holzrahmen – ein farbenprächtiges Unikat für Ihr Zuhause.",
    price: 49.90,
    image: `${base}images/product-placeholder-1.svg`,
    category: "Bilder",
    stripePriceId: "price_PLACEHOLDER_1",
    featured: true,
  },
  {
    id: "monogramm-kissen",
    name: "Monogramm Kissen",
    description: "Gemütliches Leinenkissen mit individuell gesticktem Monogramm – perfekt als Geschenk.",
    price: 39.90,
    image: `${base}images/product-placeholder-2.svg`,
    category: "Kissen",
    stripePriceId: "price_PLACEHOLDER_2",
    featured: true,
  },
  {
    id: "bestickte-jeansjacke",
    name: "Bestickte Jeansjacke",
    description: "Upcycled Jeansjacke mit floralem Stickmuster auf der Rückseite – absolutes Statement-Piece.",
    price: 89.90,
    image: `${base}images/product-placeholder-3.svg`,
    category: "Kleidung",
    stripePriceId: "price_PLACEHOLDER_3",
    featured: true,
  },
  {
    id: "stickrahmen-wanddeko",
    name: "Stickrahmen Wanddeko",
    description: "Dekoratives Wandbild im Stickrahmen mit Naturmotiv – zeitlose Handwerkskunst.",
    price: 34.90,
    image: `${base}images/product-placeholder-4.svg`,
    category: "Bilder",
    stripePriceId: "price_PLACEHOLDER_4",
    featured: false,
  },
  {
    id: "bestickter-turnbeutel",
    name: "Bestickter Turnbeutel",
    description: "Nachhaltiger Baumwoll-Turnbeutel mit individuellem Stickmotiv.",
    price: 24.90,
    image: `${base}images/product-placeholder-5.svg`,
    category: "Accessoires",
    stripePriceId: "price_PLACEHOLDER_5",
    featured: false,
  },
  {
    id: "bestickte-tischdecke",
    name: "Bestickte Tischdecke",
    description: "Elegante Leinentischdecke mit handgestickten Bordüren – für festliche Anlässe.",
    price: 69.90,
    image: `${base}images/product-placeholder-6.svg`,
    category: "Accessoires",
    stripePriceId: "price_PLACEHOLDER_6",
    featured: false,
  },
];

export const categories = [...new Set(products.map((p) => p.category))];
