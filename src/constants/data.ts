import { Product, Review, InstagramPost } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'polaroid-classic',
    name: 'The Signature Polaroid Set',
    description: '12 luxury square prints on 400gsm premium archival paper.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1526285849717-482456cd7436?auto=format&fit=crop&q=80&w=800',
    category: 'prints',
    features: ['Premium Matte Finish', 'Archival Quality', 'Hand-packed']
  },
  {
    id: 'heirloom-frame',
    name: 'The Heirloom Gallery Frame',
    description: 'Handcrafted solid oak frame with museum-grade matting.',
    price: 85,
    image: 'https://images.unsplash.com/photo-1579783901586-d88db74b4ef1?auto=format&fit=crop&q=80&w=800',
    category: 'frames',
    features: ['Solid Oak', 'UV-Protected Glass', 'Acid-free Matting']
  },
  {
    id: 'canvas-memory',
    name: 'Large Format Canvas Print',
    description: 'Museum-quality canvas stretched over a sustainable pine frame.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    category: 'decor',
    features: ['Spill-resistant', 'Color-guarantee', 'Ready to hang']
  },
  {
    id: 'keepsake-box',
    name: 'Linen Keepsake Box',
    description: 'A beautiful home for your loose prints and meaningful tokens.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800',
    category: 'gifts',
    features: ['Italian Linen', 'Magnetic Closure', 'Personalized Lid']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Eleanor R.',
    rating: 5,
    content: "The quality of the prints is breathtaking. They feel like true art pieces rather than just photos. Divine Hand has changed how I gift.",
    date: 'March 2024'
  },
  {
    id: '2',
    author: 'James W.',
    rating: 5,
    content: "Exceptional service and the frame arrived perfectly packaged. It's now the centerpiece of our living room.",
    date: 'April 2024'
  },
  {
    id: '3',
    author: 'Sarah L.',
    rating: 5,
    content: 'Love the minimal design. The upload process was so simple on my phone. Highly recommend!',
    date: 'February 2024'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 'ig1', image: 'https://images.unsplash.com/photo-1544391490-41071060965d?auto=format&fit=crop&q=80&w=400', link: '#' },
  { id: 'ig2', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400', link: '#' },
  { id: 'ig3', image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2204152?auto=format&fit=crop&q=80&w=400', link: '#' },
  { id: 'ig4', image: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80&w=400', link: '#' },
  { id: 'ig5', image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=400', link: '#' },
  { id: 'ig6', image: 'https://images.unsplash.com/photo-1526285849717-482456cd7436?auto=format&fit=crop&q=80&w=400', link: '#' }
];
