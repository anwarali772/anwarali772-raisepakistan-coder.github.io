export type PageId = 
  | 'home' 
  | 'about' 
  | 'programs' 
  | 'projects' 
  | 'gallery' 
  | 'volunteer' 
  | 'donate' 
  | 'team' 
  | 'contact' 
  | 'news';

export interface Program {
  id: string;
  title: string;
  category: 'education' | 'health' | 'relief' | 'women' | 'youth';
  shortDesc: string;
  fullDesc: string;
  impactMetric: string;
  iconName: string;
  initiatives: string[];
  featuredImage: string;
  beneficiaryCount: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  province: 'Punjab' | 'Sindh' | 'KPK' | 'Balochistan' | 'Gilgit-Baltistan' | 'AJK';
  status: 'Ongoing' | 'Completed' | 'Urgent';
  targetAmount: number;
  raisedAmount: number;
  startDate: string;
  endDate?: string;
  description: string;
  keyOutcome: string;
  image: string;
  zakatEligible: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Education' | 'Clean Water' | 'Emergency Relief' | 'Healthcare' | 'Youth Labs';
  location: string;
  date: string;
  type: 'image' | 'video';
  thumbnail: string;
  videoUrl?: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'leadership' | 'advisory' | 'field' | 'ambassadors';
  location: string;
  bio: string;
  email?: string;
  linkedin?: string;
  avatar: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Press Release' | 'Field Report' | 'Announcement' | 'Impact Story';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  program: string;
  avatar: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface VolunteerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  commitment: string;
  description: string;
  requirements: string[];
}

export interface ZakatCalculation {
  cashPKR: number;
  goldGrams: number;
  silverGrams: number;
  businessAssetsPKR: number;
  liabilitiesPKR: number;
  totalAssetsPKR: number;
  zakatPayablePKR: number;
  zakatPayableUSD: number;
}
