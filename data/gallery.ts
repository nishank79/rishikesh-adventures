export type GalleryItem = {
  id: string;
  category: "Rafting" | "Camping" | "Bikes" | "Scenery";
  image: string;
  height: "short" | "medium" | "tall";
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Rafting", height: "tall", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800&auto=format&fit=crop", alt: "Rafters paddling through white water rapids on the Ganga" },
  { id: "g2", category: "Camping", height: "medium", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop", alt: "Tents pitched on the riverbank at dusk" },
  { id: "g3", category: "Bikes", height: "short", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop", alt: "Royal Enfield motorcycle parked on a mountain road" },
  { id: "g4", category: "Scenery", height: "tall", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop", alt: "Himalayan foothills over the Ganga valley" },
  { id: "g5", category: "Rafting", height: "medium", image: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=800&auto=format&fit=crop", alt: "Group celebrating after a rafting run" },
  { id: "g6", category: "Camping", height: "short", image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=800&auto=format&fit=crop", alt: "Bonfire at a riverside camp at night" },
  { id: "g7", category: "Scenery", height: "medium", image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop", alt: "Laxman Jhula suspension bridge over the Ganga" },
  { id: "g8", category: "Bikes", height: "tall", image: "https://images.unsplash.com/photo-1558980664-10ea9d233a4f?q=80&w=800&auto=format&fit=crop", alt: "Scooter parked near the ghats" },
];
