export type Package = {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  includes: string[];
  image: string;
};

export const packages: Package[] = [
  {
    id: "adventure-package",
    name: "Adventure Package",
    description: "Rafting + camping + bonfire evening for thrill seekers.",
    price: "₹2,499",
    originalPrice: "₹3,200",
    discount: "22% OFF",
    rating: 4.8,
    reviews: 412,
    includes: ["16km rafting", "1 night camping", "Bonfire & dinner", "Guide included"],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "weekend-package",
    name: "Weekend Package",
    description: "Two full days covering rafting, camping and a scooter day.",
    price: "₹4,999",
    originalPrice: "₹6,400",
    discount: "23% OFF",
    rating: 4.9,
    reviews: 268,
    includes: ["2 nights camping", "Rafting", "1-day scooter rental", "All meals"],
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
    },
  {
    id: "couple-package",
    name: "Couple Package",
    description: "A private riverside tent, candlelight dinner and rafting.",
    price: "₹5,499",
    originalPrice: "₹6,999",
    discount: "21% OFF",
    rating: 4.9,
    reviews: 189,
    includes: ["Private tent", "Candlelight dinner", "Rafting for 2", "Bonfire"],
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "family-package",
    name: "Family Package",
    description: "Gentle rafting stretch, family tents and evening entertainment.",
    price: "₹7,999",
    originalPrice: "₹9,999",
    discount: "20% OFF",
    rating: 4.7,
    reviews: 156,
    includes: ["Family tents (4)", "9km gentle rafting", "Kids activities", "All meals"],
    image:
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "student-package",
    name: "Student Package",
    description: "Budget-friendly group rafting and camping for college trips.",
    price: "₹1,799",
    originalPrice: "₹2,300",
    discount: "22% OFF",
    rating: 4.6,
    reviews: 331,
    includes: ["Group rafting", "Shared camping", "DJ night", "Group discounts"],
    image:
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1200&auto=format&fit=crop",
  },
];
