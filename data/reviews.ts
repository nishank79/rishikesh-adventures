export type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Ananya Rao",
    location: "Bengaluru, India",
    rating: 5,
    text: "The rafting guides were so reassuring even for first-timers. Booking on the site took two minutes and everything matched exactly what was promised.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "r2",
    name: "Tom Whitfield",
    location: "Manchester, UK",
    rating: 5,
    text: "Rented a Himalayan for four days to ride to Neelkanth. Bike was in great shape and the team called to check in every evening.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "r3",
    name: "Priya & Arjun",
    location: "Mumbai, India",
    rating: 5,
    text: "The couple camping package made our anniversary unforgettable. Tent right on the riverbank, dinner under the stars.",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "r4",
    name: "Lena Fischer",
    location: "Berlin, Germany",
    rating: 4,
    text: "Solid safety briefing before rafting, and the rapids were genuinely thrilling. Would book the adventure combo again.",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=200&auto=format&fit=crop",
  },
];
