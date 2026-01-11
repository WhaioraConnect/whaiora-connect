export interface ArticleMeta {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  description: string;
  featured?: boolean; // optional
}

export const articles: ArticleMeta[] = [
  {
    title: 'Understanding Holistic Wellness',
    slug: 'holistic-wellness-guide',
    date: '2025-11-01',
    readTime: '8 min read',
    category: 'Wellness',
    description:
      'Discover how integrating mind, body, and spirit can transform your approach to health and wellbeing.',
    featured: true, // 🌟 featured
  },
  {
    title: '5 Simple Breathing Techniques for Daily Stress Relief',
    slug: 'breathing-techniques',
    date: '2025-10-28',
    readTime: '5 min read',
    category: 'Mental Health',
    description:
      'Learn practical breathwork exercises you can do anywhere to calm your mind and reduce anxiety.',
  },
  {
    title: 'Building Resilience: Mental Health Strategies That Work',
    slug: 'building-resilience',
    date: '2025-10-21',
    readTime: '7 min read',
    category: 'Mental Health',
    description:
      'Develop the inner strength to navigate life’s challenges with grace and emerge stronger.',
  },
  {
    title: 'The Connection Between Sleep and Mental Wellbeing',
    slug: 'sleep-mental-health',
    date: '2025-10-14',
    readTime: '6 min read',
    category: 'Mental Health',
    description:
      'Discover why quality sleep is essential for mental health and how to improve it naturally.',
  },
  {
    title: 'Nutrition for Mental Health',
    slug: 'nutrition-mental-health',
    date: '2025-10-07',
    readTime: '7 min read',
    category: 'Nutrition',
    description:
      'Explore the powerful connection between what you eat and how you feel.',
  },
  {
    title: 'Creating Healthy Boundaries',
    slug: 'healthy-boundaries',
    date: '2025-09-30',
    readTime: '6 min read',
    category: 'Mental Health',
    description:
      'Learn to protect your energy and build relationships that support your wellbeing.',
  },
  {
    title: 'Mindfulness in Daily Life',
    slug: 'mindfulness-daily-life',
    date: '2025-09-23',
    readTime: '6 min read',
    category: 'Mindfulness',
    description:
      'Practical tips to bring present-moment awareness into everyday life.',
  },
];

