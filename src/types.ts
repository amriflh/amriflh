export type ThemeId = 'pine-forest' | 'emerald-summit' | 'alpine-mist' | 'volcanic-ridge';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  primary: string; // e.g. #10B981
  darkBg: string;  // e.g. #0B1910
  cardBg: string;  // e.g. #0F2B1A
  accent: string;  // e.g. #34D399
  textMuted: string;
  githubStatTheme: string; // theme parameter for github-readme-stats
  badgeColor: string;
  mountainSvgGradient: [string, string];
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics?: string; // e.g. "+340% Organic Clicks", "50k+ Readers"
  techStack: string[];
  link?: string;
  repoLink?: string;
  featured: boolean;
}

export interface SeoMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  badgeLabel: string;
  badgeColor: string;
  logo: string;
  enabled: boolean;
}

export interface ToolCategory {
  category: string;
  tools: {
    name: string;
    badge: string; // shields.io badge URL or title
    color: string;
    logo: string;
  }[];
}

export interface ProfileData {
  username: string;
  fullName: string;
  title: string;
  mountainTagline: string;
  location: string;
  currentPeakGoal: string; // e.g. "Mount Rinjani 3,726m & 1M Organic Visitors"
  bioParagraph1: string;
  bioParagraph2: string;
  valuePoints: string[];
  
  // Customization
  theme: ThemeId;
  headerBannerStyle: 'mountain-peak' | 'pine-ridge' | 'emerald-fog' | 'topo-map' | 'capsule-render';
  
  // Stats & Widgets
  showGithubStats: boolean;
  showStreakStats: boolean;
  showTopLangs: boolean;
  showSnakeAnimation: boolean;
  showDailyQuoteWidget: boolean;
  showSeoMetrics: boolean;
  showHikingWidget: boolean;
  showSpotifyWidget: boolean;
  spotifyTrackUrl?: string;
  
  // Rss / Blog Sync
  rssFeedUrl?: string;
  mediumUsername?: string;
  substackUrl?: string;
  
  // Lists
  seoMetrics: SeoMetric[];
  featuredProjects: FeaturedProject[];
  socialLinks: SocialLink[];
  toolsAndTech: ToolCategory[];
  
  // Workflow Toggles
  enableDailyActionUpdate: boolean;
  enableSnakeWorkflow: boolean;
  enableBlogRssWorkflow: boolean;
}

export interface AiGeneratedBio {
  tagline: string;
  bioParagraphs: string[];
  valuePoints: string[];
}
