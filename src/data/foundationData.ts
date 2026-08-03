import { Program, Project, GalleryItem, TeamMember, NewsArticle, Testimonial, StatItem, VolunteerRole } from '../types';

export const FOUNDATION_STATS: StatItem[] = [
  {
    value: '250,000+',
    label: 'Lives Impacted',
    description: 'Across underserved rural & urban communities in Pakistan.',
    icon: 'Users'
  },
  {
    value: '180+',
    label: 'Projects Executed',
    description: 'Schools, clean water plants, medical camps & solar wells.',
    icon: 'CheckCircle2'
  },
  {
    value: '38',
    label: 'Districts Reached',
    description: 'Active presence across all 4 provinces, AJK & Gilgit-Baltistan.',
    icon: 'MapPin'
  },
  {
    value: '1,200+',
    label: 'Active Volunteers',
    description: 'Dedicated youth & professionals serving on the front lines.',
    icon: 'HeartHandshake'
  }
];

export const CORE_PROGRAMS: Program[] = [
  {
    id: 'edu-01',
    title: 'Education for All',
    category: 'education',
    shortDesc: 'Establishing primary schools, digital literacy labs, and merit-based scholarship funds for underprivileged children.',
    fullDesc: 'Education is the cornerstone of sustainable human development. RAISE Pakistan Foundation builds community-owned primary schools, distributes free textbooks and uniforms, and provides digital literacy labs to ensure rural youth are equipped for the future economy.',
    impactMetric: '42,000+ Students Educated',
    iconName: 'GraduationCap',
    initiatives: [
      'Community Model Schools in Rural Sindh & South Punjab',
      'Girls Literacy & STEM Retention Scholarships',
      'Computer & Coding Labs in Government Schools',
      'Free Teacher Training & Curriculum Modernization'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    beneficiaryCount: '42,000+'
  },
  {
    id: 'health-02',
    title: 'Healthcare & Clean Water',
    category: 'health',
    shortDesc: 'Operating mobile health clinics, maternal care units, and installing solar-powered clean drinking water filtration plants.',
    fullDesc: 'Access to basic healthcare and clean drinking water saves lives every single day. Our water plants filter over 500,000 gallons of safe water daily, while our mobile medical units deliver free consultations, medicines, and maternal healthcare to remote villages.',
    impactMetric: '85+ Water Plants Installed',
    iconName: 'Droplet',
    initiatives: [
      'Solar-Powered RO Filtration Plants',
      'Mobile Medical Clinics & Tele-medicine Units',
      'Maternal & Infant Healthcare Drives',
      'Free Eye Surgery & Cataract Camps'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    beneficiaryCount: '110,000+'
  },
  {
    id: 'relief-03',
    title: 'Food Security & Disaster Response',
    category: 'relief',
    shortDesc: 'Providing rapid emergency relief during floods, heatwaves, and winter severe weather, paired with monthly ration drives.',
    fullDesc: 'When natural disasters strike Pakistan, RAISE Foundation deploys immediate emergency response teams with cooked meals, clean water bags, hygiene kits, and emergency shelters. Our ongoing Food Security program supports thousands of widow-headed households with dignified monthly food rations.',
    impactMetric: '150,000+ Meals Distributed',
    iconName: 'ShieldAlert',
    initiatives: [
      'Emergency Flood & Earthquake Rapid Response',
      'Dignified Family Food Ration Boxes (Monthly)',
      'Ramadan Iftar & Ration Distribution',
      'Winter Warmth Drives (Blankets & Warm Clothing)'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    beneficiaryCount: '150,000+'
  },
  {
    id: 'women-04',
    title: 'Women Empowerment',
    category: 'women',
    shortDesc: 'Fostering financial independence through vocational training centers, sewing machines, and interest-free micro-grants.',
    fullDesc: 'Empower a woman, elevate an entire family. RAISE Pakistan Foundation operates vocational skill centers teaching tailoring, handicrafts, digital marketing, and financial literacy. We provide micro-assets like sewing machines and small business grants to turn skill into sustainable income.',
    impactMetric: '3,800+ Women Entrepreneurs',
    iconName: 'Sparkles',
    initiatives: [
      'Vocational Training Centers (Tailoring & Crafts)',
      'Micro-Grant & Sewing Machine Distribution',
      'Financial Literacy & E-commerce Workshops',
      'Health & Rights Awareness Seminars'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800',
    beneficiaryCount: '3,800+'
  },
  {
    id: 'youth-05',
    title: 'Youth & Digital Skills',
    category: 'youth',
    shortDesc: 'Bridging the digital divide through tech bootcamps, freelance training, mentorship, and youth leadership incubators.',
    fullDesc: 'Pakistan possesses one of the youngest populations in the world. We channel this potential into high-value digital careers by providing free computer hardware, internet access, and intensive mentorship in Web Development, Graphic Design, and Virtual Assistance.',
    impactMetric: '1,500+ Youth Certified',
    iconName: 'Laptop',
    initiatives: [
      'Free Digital Skills & Freelancing Bootcamps',
      'Community IT Labs in Rural Colleges',
      'Mentorship Programs with Tech Professionals',
      'Youth Social Innovation Incubator Grants'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    beneficiaryCount: '5,000+'
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'Clean Drinking Water Complex — Tharparkar',
    category: 'Clean Water',
    location: 'Tharparkar, Sindh',
    province: 'Sindh',
    status: 'Urgent',
    targetAmount: 18000,
    raisedAmount: 14200,
    startDate: '2026-01-15',
    description: 'Constructing a deep solar-powered tubewell and 10,000L filtration storage facility providing clean, pathogen-free water to 3 desert villages.',
    keyOutcome: 'Will serve 4,500 residents and eliminate 5km daily walk for water for women and young girls.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    zakatEligible: true
  },
  {
    id: 'proj-02',
    title: 'RAISE Model Girls School & Digital Lab',
    category: 'Education',
    location: 'Dera Ghazi Khan, Punjab',
    province: 'Punjab',
    status: 'Ongoing',
    targetAmount: 25000,
    raisedAmount: 19500,
    startDate: '2025-11-01',
    description: 'Building an 8-room climate-resilient primary school with computer lab, clean sanitation facilities, and solar backup power for 250 young girls.',
    keyOutcome: 'Provides 100% free tuition, textbooks, uniforms, and daily nutritious snack for girls.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    zakatEligible: true
  },
  {
    id: 'proj-03',
    title: 'Emergency Flood Prevention & Rehabilitation',
    category: 'Emergency Relief',
    location: 'Swat & Nowshera, KPK',
    province: 'KPK',
    status: 'Ongoing',
    targetAmount: 30000,
    raisedAmount: 22800,
    startDate: '2026-02-10',
    description: 'Constructing 25 flood-resistant brick homes and distributing livestock micro-grants for families displaced by recent flash floods.',
    keyOutcome: 'Permanent shelter & livelihood restoration for 25 vulnerable families.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    zakatEligible: true
  },
  {
    id: 'proj-04',
    title: 'Mobile Eyecare & Cataract Surgical Unit',
    category: 'Healthcare',
    location: 'Jhal Magsi, Balochistan',
    province: 'Balochistan',
    status: 'Ongoing',
    targetAmount: 12000,
    raisedAmount: 10500,
    startDate: '2026-03-01',
    description: '3-day surgical medical drive providing free sight-restoring cataract surgeries, prescription glasses, and eye health screenings.',
    keyOutcome: 'Targeting 200 free cataract surgeries and 1,500 free eye screenings.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    zakatEligible: true
  },
  {
    id: 'proj-05',
    title: 'Women Vocational & Sewing Hub',
    category: 'Women Empowerment',
    location: 'Muzaffarabad, AJK',
    province: 'AJK',
    status: 'Completed',
    targetAmount: 10000,
    raisedAmount: 10000,
    startDate: '2025-06-01',
    endDate: '2025-12-15',
    description: 'Fully equipped vocational center providing 6-month certified sewing and embroidery courses to widows and young women.',
    keyOutcome: '120 women graduated and received individual sewing machines upon course completion.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800',
    zakatEligible: false
  },
  {
    id: 'proj-06',
    title: 'Youth IT & Freelance Tech Hub',
    category: 'Youth Labs',
    location: 'Gilgit City, Gilgit-Baltistan',
    province: 'Gilgit-Baltistan',
    status: 'Ongoing',
    targetAmount: 15000,
    raisedAmount: 11200,
    startDate: '2026-01-20',
    description: 'High-speed satellite internet computer laboratory serving high school and university students with free coding and graphic design workshops.',
    keyOutcome: 'Empowering 300 mountain youth with global remote work skills.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    zakatEligible: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Solar Water Filtration Plant Inauguration',
    category: 'Clean Water',
    location: 'Umerkot, Sindh',
    date: 'Jan 2026',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    description: 'Community members celebrating access to clean, fresh drinking water for the first time in village history.'
  },
  {
    id: 'gal-02',
    title: 'Girls Digital Literacy Certification Day',
    category: 'Education',
    location: 'D.G. Khan, Punjab',
    date: 'Dec 2025',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    description: 'Graduating students proudly displaying their basic computer skills certificates.'
  },
  {
    id: 'gal-03',
    title: 'Emergency Ration Distribution Drive',
    category: 'Emergency Relief',
    location: 'Swat, KPK',
    date: 'Feb 2026',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    description: 'RAISE volunteer teams delivering family ration boxes containing flour, oil, lentils, and tea.'
  },
  {
    id: 'gal-04',
    title: 'Free Mobile Medical & Eyecare Camp',
    category: 'Healthcare',
    location: 'Thull, Sindh',
    date: 'Nov 2025',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    description: 'Doctors examining elderly patients during a 2-day free community health clinic.'
  },
  {
    id: 'gal-05',
    title: 'Youth Coding & Freelancing Workshop',
    category: 'Youth Labs',
    location: 'Islamabad HQ',
    date: 'Jan 2026',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    description: 'Mentors guiding students through web design principles and online marketplace portfolios.'
  },
  {
    id: 'gal-06',
    title: 'Sewing Machine Micro-Grant Ceremony',
    category: 'Education',
    location: 'Muzaffarabad, AJK',
    date: 'Oct 2025',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800',
    description: 'Women graduates receiving brand new heavy-duty sewing machines to start home tailoring businesses.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-01',
    name: 'Anwar Ali',
    role: 'Founder & Executive Director',
    category: 'leadership',
    location: 'Islamabad, Pakistan',
    bio: 'Social entrepreneur and humanitarian with over 12 years of experience leading grassroots development and disaster relief operations across Pakistan.',
    email: 'anwar@raisepakistan.org',
    linkedin: 'https://linkedin.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-02',
    name: 'Dr. Sarah Mansoor',
    role: 'Director of Healthcare Services',
    category: 'leadership',
    location: 'Lahore, Pakistan',
    bio: 'Public health specialist who spearheaded RAISE Mobile Medical Units, serving over 100,000 rural patients with free medical care.',
    email: 'sarah.m@raisepakistan.org',
    linkedin: 'https://linkedin.com',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-03',
    name: 'Tariq Mehmood',
    role: 'Head of Field Operations & Relief',
    category: 'field',
    location: 'Peshawar, KPK',
    bio: 'Logistics expert overseeing emergency rapid response, water plant construction, and local government liaisons in KPK & Balochistan.',
    email: 'tariq@raisepakistan.org',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-04',
    name: 'Fatima Zohra',
    role: 'Lead, Women Empowerment & Skill Hubs',
    category: 'leadership',
    location: 'Karachi, Sindh',
    bio: 'Advocate for economic gender equality, designing vocational curricula that have empowered 3,800+ women to achieve financial independence.',
    email: 'fatima@raisepakistan.org',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-05',
    name: 'Prof. Javed Hashmi',
    role: 'Senior Advisor — Education Policy',
    category: 'advisory',
    location: 'Islamabad, Pakistan',
    bio: 'Former university dean advising RAISE on curriculum standards, teacher training programs, and digital education inclusion.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-06',
    name: 'Zainab Ahmed',
    role: 'Youth Ambassador & Digital Outreach',
    category: 'ambassadors',
    location: 'Gilgit, Pakistan',
    bio: 'Computer science graduate driving digital literacy initiatives in Gilgit-Baltistan and mobilizing university youth volunteer chapters.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-01',
    title: 'RAISE Pakistan Completes 85th Solar Clean Water Plant in Tharparkar',
    category: 'Impact Story',
    date: 'February 2, 2026',
    author: 'Communications Team',
    readTime: '4 min read',
    summary: 'Over 4,500 residents in rural Umerkot & Tharparkar now have round-the-clock access to pure filtered drinking water thanks to new solar-powered tubewells.',
    content: [
      'Access to safe drinking water has long been a critical challenge in the arid desert regions of Tharparkar and Umerkot in Sindh. For decades, women and children spent up to 5 hours daily walking long distances under harsh sun to retrieve brackish water from unsafe open wells.',
      'Last week, RAISE Pakistan Foundation officially commissioned its 85th solar-powered reverse osmosis (RO) filtration plant in Village Hariram, Umerkot. Equipped with heavy-duty solar panels, an automated filtration system, and a 10,000-liter storage tank, the facility provides pure, mineral-rich drinking water completely free of charge to over 4,500 local villagers.',
      'The plant operates autonomously on solar energy, ensuring zero electricity cost burden on the community. A local water committee trained by RAISE will maintain the facility long-term.',
      '"Water is life," said Village Head Master Devji. "For the first time, our children are drinking clean water without falling sick from waterborne infections. This is a blessing for our entire district."'
    ],
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    tags: ['Clean Water', 'Tharparkar', 'Solar Energy', 'Health']
  },
  {
    id: 'news-02',
    title: 'Annual Transparency Report 2025: 91.2% Direct Program Allocation',
    category: 'Press Release',
    date: 'January 15, 2026',
    author: 'Executive Office',
    readTime: '6 min read',
    summary: 'RAISE Pakistan Foundation publishes its fully audited financial report for 2025, detailing $1.2M in donor funds directly transforming lives in 38 districts.',
    content: [
      'In alignment with our founding principle of uncompromised transparency, RAISE Pakistan Foundation is proud to release its 2025 Annual Impact & Financial Audit Report.',
      'Out of every dollar donated in 2025, 91.2 cents went directly into ground program execution (Education, Healthcare, Water Plants, Emergency Relief, and Micro-Grants). Only 8.8% was utilized for essential administrative oversight, financial auditing, and volunteer coordination.',
      'Key accomplishments in 2025 include educating 42,000+ students, serving 110,000+ medical patients, establishing 18 new solar water plants, and assisting 25 flood-affected communities with permanent housing reconstruction.',
      'The complete audited report, prepared by independent certified chartered accountants, is available for public download on our website transparency portal.'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    tags: ['Transparency', 'Audit', 'Annual Report', 'Governance']
  },
  {
    id: 'news-03',
    title: 'Youth Digital Bootcamp Graduates 300 Freelancers in Gilgit & KPK',
    category: 'Announcement',
    date: 'December 20, 2025',
    author: 'Youth Skills Desk',
    readTime: '3 min read',
    summary: '300 young men and women completed 12 weeks of intensive digital skills training, earning their first online freelance contracts in web development and design.',
    content: [
      'Remote mountainous areas of Pakistan hold immense youth potential, yet suffer from limited local industrial employment. RAISE Pakistan launched the Digital Youth Bridge program to equip students with global remote work opportunities.',
      'Over 300 students in Gilgit-Baltistan and Swat completed 12-week bootcamps covering Web Design, Python Programming, Graphic Design, and Virtual Assistance. Over 65% of graduates secured global freelance clients within 30 days of graduation.',
      'RAISE provided high-spec laptops, high-speed internet hubs, and 1-on-1 industry mentorship to ensure every participant succeeded regardless of financial background.'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    tags: ['Digital Skills', 'Youth', 'Freelancing', 'Gilgit']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-01',
    name: 'Amina Bibi',
    role: 'Mother & Small Business Owner',
    location: 'D.G. Khan, Punjab',
    quote: 'Before receiving a sewing machine and training from RAISE, I struggled to afford daily meals for my children. Today, I earn a dignified monthly income tailoring clothes for our village, and both my daughters attend school.',
    program: 'Women Empowerment',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-02',
    name: 'Master Muhammad Bilal',
    role: 'Headmaster, Rural Primary School',
    location: 'Swat, KPK',
    quote: 'When the floods damaged our school building, RAISE arrived within 48 hours. They repaired our classrooms, provided desk furniture, and built a clean drinking water facility. Our enrollment has doubled since.',
    program: 'Education for All',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-03',
    name: 'Kashif Ali',
    role: 'Digital Bootcamp Graduate',
    location: 'Gilgit City',
    quote: 'Living in a remote mountain valley, I thought my career options were limited. The RAISE IT bootcamp gave me the tools, internet access, and confidence to work as a web developer for international clients.',
    program: 'Youth & Tech',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: 'vol-01',
    title: 'Community Field Coordinator',
    department: 'Field Relief & Operations',
    location: 'Districts across Punjab & Sindh',
    commitment: '5-10 hours / week',
    description: 'Assist field directors in conducting beneficiary surveys, organizing ration distribution drives, and supervising local project logistics.',
    requirements: [
      'Resident of target district or willing to travel locally',
      'Strong communication skills in Urdu / regional languages',
      'Passionate about community service and ethical relief'
    ]
  },
  {
    id: 'vol-02',
    title: 'Volunteer Teacher / STEM Mentor',
    department: 'Education',
    location: 'Islamabad / Hybrid / Online',
    commitment: '4 hours / week',
    description: 'Teach basic English, Mathematics, or Science to primary students in community centers or mentor online through weekend digital labs.',
    requirements: [
      'University student or graduate in Education/STEM fields',
      'Patience, enthusiasm, and dedication to youth development'
    ]
  },
  {
    id: 'vol-03',
    title: 'Medical Camp Doctor / Paramedic',
    department: 'Healthcare',
    location: 'Mobile Camps (KPK & Balochistan)',
    commitment: 'Weekend Camps (1-2 days/month)',
    description: 'Provide free consultations, eye screenings, and general checkups during weekend mobile health camps in remote villages.',
    requirements: [
      'MBBS / BDS degree / Registered Nurse or Paramedic',
      'Valid PMC/PMDC registration'
    ]
  },
  {
    id: 'vol-04',
    title: 'Digital Content Creator & Storyteller',
    department: 'Communications & Media',
    location: 'Remote / Anywhere in Pakistan',
    commitment: '3-6 hours / week',
    description: 'Help capture beneficiary impact stories, edit video highlights, design social media graphics, and write field update reports.',
    requirements: [
      'Basic proficiency in photography, video editing, or graphic design',
      'Empathetic storytelling approach'
    ]
  }
];
