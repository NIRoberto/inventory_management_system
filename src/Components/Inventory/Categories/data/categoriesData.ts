export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
}

export const categoriesData: Category[] = [
  {
    id: "1",
    name: "Electronics",
    description: "Devices, gadgets, and accessories.",
    image: "/logo.png",
    createdAt: "2024-02-01T10:00:00Z",
  },
  {
    id: "2",
    name: "Groceries",
    description: "Fresh food and daily essentials.",
    image: "/logo.png",
    createdAt: "2024-02-05T12:30:00Z",
  },
  {
    id: "3",
    name: "Clothing",
    description: "Men’s, women’s, and kids' fashion.",
    image: "/logo.png",
    createdAt: "2024-02-10T08:45:00Z",
  },
  {
    id: "4",
    name: "Furniture",
    description: "Home and office furniture.",
    image: "/logo.png",
    createdAt: "2024-02-15T14:20:00Z",
  },
  {
    id: "5",
    name: "Sports & Outdoors",
    description: "Fitness and outdoor equipment.",
    image: "/logo.png",
    createdAt: "2024-02-20T16:10:00Z",
  },
  {
    id: "6",
    name: "Books",
    description: "Educational and entertainment books.",
    image: "/logo.png",
    createdAt: "2024-02-25T09:00:00Z",
  },
];
