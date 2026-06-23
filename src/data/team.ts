export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  experience: string;
  phone: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    experience: '18+ Years',
    phone: '+91 98765 43210',
  },
  {
    id: 2,
    name: 'Priya Gupta',
    role: 'Senior Property Consultant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    experience: '12+ Years',
    phone: '+91 98765 43211',
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'Commercial Property Expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    experience: '10+ Years',
    phone: '+91 98765 43212',
  },
  {
    id: 4,
    name: 'Neha Singh',
    role: 'Rental & Documentation Head',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    experience: '8+ Years',
    phone: '+91 98765 43213',
  },
];
