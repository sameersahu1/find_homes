export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Vikram Patel',
    location: 'Sector 93, Noida',
    text: 'Aryan Properties helped me find my dream home in Sector 93. Their team was professional, transparent, and guided me through every step. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Sunita Reddy',
    location: 'Sector 104, Noida',
    text: 'I was looking for a rental property and Aryan Properties made it so easy. Within a week, I had the perfect 2 BHK flat. Their local market knowledge is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    location: 'Sector 150, Noida',
    text: 'Sold my plot through Aryan Properties at a great price. The documentation support was excellent and the entire process was hassle-free. Thank you team!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Anjali Kapoor',
    location: 'Sector 93A, Noida',
    text: 'As a first-time buyer, I was nervous about the process. The team at Aryan Properties patiently explained everything and helped me buy a beautiful 3 BHK apartment.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'Karan Malhotra',
    location: 'Sector 128, Noida',
    text: 'I invested in a commercial property through Aryan Properties. Their investment consultation was spot on. Great returns and professional service throughout.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face',
  },
];
