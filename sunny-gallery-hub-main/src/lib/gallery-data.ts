export type Category = "all" | "nature" | "city" | "animals";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Category;
  title: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/nature1.jpg",
    alt: "Misty mountain lake at sunrise",
    category: "nature",
    title: "Mountain Sunrise",
  },
  {
    id: 2,
    src: "/images/nature2.jpg",
    alt: "Colorful wildflowers in sunlit meadow",
    category: "nature",
    title: "Wildflower Meadow",
  },
  {
    id: 3,
    src: "/images/nature3.jpg",
    alt: "Dense redwood forest with sunbeams",
    category: "nature",
    title: "Redwood Forest",
  },
  {
    id: 4,
    src: "/images/city1.jpg",
    alt: "Modern city skyline at twilight",
    category: "city",
    title: "City Twilight",
  },
  {
    id: 5,
    src: "/images/city2.jpg",
    alt: "European city cobblestone street",
    category: "city",
    title: "Old Town Streets",
  },
  {
    id: 6,
    src: "/images/city3.jpg",
    alt: "Aerial city intersection at night",
    category: "city",
    title: "Night Aerial",
  },
  {
    id: 7,
    src: "/images/animals1.jpg",
    alt: "Majestic lion in golden light",
    category: "animals",
    title: "Golden Lion",
  },
  {
    id: 8,
    src: "/images/animals2.jpg",
    alt: "Colorful tropical parrot in jungle",
    category: "animals",
    title: "Tropical Parrot",
  },
  {
    id: 9,
    src: "/images/animals3.jpg",
    alt: "Red fox in snowy forest",
    category: "animals",
    title: "Winter Fox",
  },
];

export const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Nature", value: "nature" },
  { label: "City", value: "city" },
  { label: "Animals", value: "animals" },
];
