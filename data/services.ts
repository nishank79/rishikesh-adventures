export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  unit: string;
  image: string;
  badge?: string;
};

export const services: Service[] = [
  {
    id: "scooter-rental",
    title: "Scooter Rental",
    tagline: "Ride the ghats at your own pace",
    description:
      "Well-maintained Activa & Access scooters, helmets included, free doorstep delivery across Tapovan, Laxman Jhula and Ram Jhula.",
    price: "₹399",
    unit: "/ day",
    image:
      "https://images.unsplash.com/photo-1558980664-10ea9d233a4f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bike-rental",
    title: "Bike Rental",
    tagline: "Himalayan roads, your terms",
    description:
      "Royal Enfield Himalayan & Classic 350s, fully serviced, with optional riding gear and a route map to Neelkanth and beyond.",
    price: "₹999",
    unit: "/ day",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    badge: "Most Booked",
  },
  {
    id: "river-rafting",
    title: "River Rafting",
    tagline: "16km of white water on the Ganga",
    description:
      "Grade II–III rapids from Shivpuri to Rishikesh with certified river guides, safety kits and a support kayak on every trip.",
    price: "₹599",
    unit: "/ person",
    image:
      "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1200&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    id: "camping",
    title: "Riverside Camping",
    tagline: "Sleep to the sound of the Ganga",
    description:
      "Swiss-tent camps on the riverbank with bonfire, live music, multi-cuisine meals and beach games included.",
    price: "₹1,499",
    unit: "/ night",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "adventure-activities",
    title: "Adventure Activities",
    tagline: "Bungee, giant swing, rock climbing",
    description:
      "Curated combos of Rishikesh's top adrenaline activities with certified operators and full safety briefings.",
    price: "₹1,999",
    unit: "/ combo",
    image:
      "https://images.unsplash.com/photo-1516900557549-41557d405adf?q=80&w=1200&auto=format&fit=crop",
  },
];
