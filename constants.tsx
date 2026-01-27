
import React from 'react';
import {
  Plane,
  Users,
  Landmark,
  MapPin,
  Search,
  Calendar,
  CheckCircle,
  Home,
  ShieldCheck,
  Heart,
  Binoculars,
  Waves,
  Palmtree,
  Building2
} from 'lucide-react';

export const COLORS = {
  clay: '#7C4632',
  sand: '#F5F1E9',
  deepGreen: '#1E3A34',
  softGold: '#C5A059',
  bg: '#FAF9F6',
};

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Own in Kenya', path: '/ownership' },
  { label: 'About', path: '/about' },
];

export const DESTINATIONS = [
  {
    title: 'Maasai Mara',
    description: 'Iconic savannahs and the Great Migration.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    tags: ['Safari', 'Wildlife']
  },
  {
    title: 'Diani Coast',
    description: 'Pristine white sands and turquoise waters.',
    image: '/images/diani.jpg.png',
    tags: ['Beach', 'Relaxation']
  },
  {
    title: 'Nairobi',
    description: 'The vibrant "Green City in the Sun".',
    image: '/images/nairobi.jpg.png',
    tags: ['City', 'Culture']
  },
  {
    title: 'Naivasha',
    description: 'Breathtaking lakeside views and birdlife.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800',
    tags: ['Nature', 'Weekend']
  }
];

export const EXPERIENCES = [
  {
    title: 'Family Safari Adventure',
    duration: '7 Days',
    price: 'From $2,450',
    icon: <Binoculars className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Heritage & Culture Tour',
    duration: '10 Days',
    price: 'From $3,100',
    icon: <Users className="w-5 h-5" />,
    image: '/images/heritage.png.png'
  },
  {
    title: 'Coastal Retreat',
    duration: '5 Days',
    price: 'From $1,800',
    icon: <Waves className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1534008757030-27299c4371b6?auto=format&fit=crop&q=80&w=800'
  }
];

export const GUIDED_PATH = [
  {
    title: 'Travel & Explore',
    description: 'Experience Kenya through family-safe itineraries designed for immersion.',
    icon: <Plane className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Connect & Belongs',
    description: 'Meet local families and diaspora pioneers who have already made the move.',
    icon: <Heart className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Learn Ownership',
    description: 'Demystify the legal process of land and property acquisition in Kenya.',
    icon: <Building2 className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Build Legacy',
    description: 'Secure your future with vetted property and lifelong community support.',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: '/images/build-legacy.png'
  }
];

export const TRUST_POINTS = [
  { label: "Verified Legal Partners", icon: <CheckCircle className="w-4 h-4 text-[#C5A059]" /> },
  { label: "Transparent Flat Fees", icon: <CheckCircle className="w-4 h-4 text-[#C5A059]" /> },
  { label: "Escrow-Protected", icon: <CheckCircle className="w-4 h-4 text-[#C5A059]" /> },
  { label: "24/7 Local Concierge", icon: <CheckCircle className="w-4 h-4 text-[#C5A059]" /> },
];
